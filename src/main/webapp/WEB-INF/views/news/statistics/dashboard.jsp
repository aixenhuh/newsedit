<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ include file="../../common/common.jsp" %>
<%
    String sbs_anews_id = request.getParameter("sbs_anews_id");
    String deviceSelect = (request.getParameter("deviceSelect") == null) ? "P" : request.getParameter("deviceSelect");		//P - PC, M - Mobile
    String deviceName = (request.getParameter("deviceSelect") == null || request.getParameter("deviceSelect").equals("A")) ? "Total" : (request.getParameter("deviceSelect").equals("M")) ? "Mobile" : "Desktop,Tablet" ;		//P - PC, M - Mobile

%>
<!-- Breadcrumbs-->
<script>

    google.charts.setOnLoadCallback(function(){

        $.getScript("/resources/js/chart.js").done(function( script, textStatus ) {
            drawDashBoardChart("1");

            checkDate();
        });
    });
</script>
<script type="text/javascript">

    var sbs_id = '<%=sbs_anews_id%>';
    var sbs_name = '';
    var menu_title = 'Dashboard';
    var NEWSADMIN_AUTH = '';

    $(document).ready(function() {

        // 권한 체크
        fn_auth_check(sbs_id);

        $.datepicker.setDefaults($.datepicker.regional['ko']); //datepicker 한국어로 사용하기 위한 언어설정

        $('#date').datepicker({
            inline: true,
            showOn:"button",
            buttonImage: "https://img.sbs.co.kr/newsnet/admin/icon_calendar.jpg",
            buttonImageOnly: true,
            buttonText: 'calender',
            hideIfNoPrevNext: true,
            showOtherMonths: true,
            showMonthAfterYear: true,
            monthNames: [ '01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월' ],
            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
            dateFormat: 'yy-mm-dd',
            maxDate : new Date(),	//현재 날짜 이상 비활성화
            onSelect: function(selectedDate) {
                setDate(selectedDate);
                getWeek();	//요일
                totalSumAll = 0;	//totalSumAll 값 초기화
                drawDashBoardChart("1");
            }
        }).datepicker("setDate", new Date());

        $("#todayDate").val($("#date").val());
        setDate();
        getWeek();

        /* 차트 높이 맞춤  */
        var chartHeight = $("#chartList li").eq(0).outerHeight();

        if(chartHeight > 0) {
            $("#chartList li").each(function(index, item) {
                $(this).css("height", chartHeight);
            })
        }
    });

</script>
<!-- 본문 -->

<!-- <ul class="navbar-nav sidenav-toggler">
<li class="nav-item">
<a class="nav-link text-center" id="sidenavToggler">
<i class="fa fa-fw fa-angle-left"></i>
</a>
</li>
</ul> -->
<div id="content-wrapper">
    <div class="container-fluid">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="#">Dashboard</a>
            </li>
            <li class="breadcrumb-item active"><%=deviceName%></li>
        </ol>
        <div id="news_home" class="news_main">
            <div align="center" style="margin-top:10px; margin-bottom: 10px;">
                <input type="text" disabled="disabled" id="prev" size="10" hidden="true"/>
                <input type="text" disabled="disabled" id="next" size="10" hidden="true"/>
                <input type="text" disabled="disabled" id="todayDate" size="10" hidden="true"/>

                <input type="button" id="prevBtn" onclick="javascript:dateSet('#prev');" value="&lt;" height="20" />
                <span id="view_date" style="font-size:17px; font-weight:bold;margin:5px;"></span>
                <input type="text" disabled="disabled" id="date" size="10" hidden="true">
                <input type="button" id="nextBtn" onclick="javascript:dateSet('#next');" value="&gt;" height="20" />
                <input type="button" id="todayBtn" onclick="javascript:dateSet('#todayDate')"value="오늘"></button>
            </div>
            <style>
                #news_container { width: 100%;  }
                #news_container ul { clear: left; margin: 0; padding: 0; list-style-type: none; position: relative; display: inline-block; }
                #news_container ul li { box-sizing: border-box; width: 510px; float: left; text-align: center; margin: 2px; padding: 2px 1px; position: relative; border:dashed 1px silver; min-height: 616px;}
                .tablelinktitle {font-size:1em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width: 310px !important;    display: flex;}
                .tablelinkreporter {font-size:1em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width: 40px !important;    display: flex;}
            </style>
            <div id="news_container" style="margin-bottom:50px;">
                <div id="news_content">
                    <div style="text-align:right; margin-right:10%; font-size:16px; font-weight:bold; color:red; ">전체 PV : <span id="pvTotalAll"></span></div>
                    <ul id="chartList" style="min-width:1150px">
                        <li>
                            <div class="chartArea">
                                <div>
                                    <span><strong>[전체 페이지 뷰]</strong></span>
                                    <div style="text-align:right;">Total : <span id="allPvTotal"></span> (요일 평균 대비 <span id="allPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="allPvTotalRatio"></span>%<span id="allPvPreRatio"></span>)</div>
                                </div>

                                <div id="allPvArea"></div>
                            </div>
                            <div class="chartArea">
                                <div>
                                    <span><strong>[전체 인기 특별 페이지]</strong></span>
                                </div>
                                <div id="allPopularArea"></div>
                            </div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div>
                                    <span><strong>[데스크탑/태블릿 페이지 뷰]</strong></span>
                                    <div style="text-align:right;">Total : <span id="pcPvTotal"></span> (요일 평균 대비 <span id="pcPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="pcPvTotalRatio"></span>%<span id="pcPvPreRatio"></span>)</div>
                                </div>

                                <div id="pcPvArea"></div>
                            </div>
                            <div class="chartArea">
                                <div>
                                    <span><strong>[데스크탑/태블릿 인기 페이지]</strong></span>
                                </div>
                                <div id="pcPopularArea"></div>
                            </div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div>
                                    <span><strong>[모바일 페이지 뷰]</strong></span>
                                    <div style="text-align:right;">Total : <span id="mobilePvTotal"></span> (요일 평균 대비 <span id="mobilePvWAvg"></span> )</div>
                                    <div style="text-align:right;">(전체 PV 대비 <span id="mobilePvTotalRatio"></span>%<span id="mobilePvPreRatio"></span>)</div>
                                </div>
                                <div id="mobilePvArea"></div>
                            </div>

                            <div class="chartArea">
                                <div>
                                    <span><strong>[모바일 인기페이지]</strong></span>
                                </div>
                                <div id="mobilePopularArea"></div>
                            </div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow1">
                                    <span><strong>[네이버 뉴스 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="naverPvTotal"></span> (요일 평균 대비 <span id="naverPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="naverPvTotalRatio"></span>%<span id="naverPvPreRatio"></span>)</div>
                                </div>
                                <div id="naverInflowArea"><span id="loding1">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>

                            <div class="chartArea">
                                <div>
                                    <span><strong>[네이버 뉴스 인기페이지]</strong></span>
                                </div>
                                <div id="naverPopularArea"></div>
                            </div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[뉴스스탠드 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="newsstandPvTotal"></span> (요일 평균 대비 <span id="newsstandPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="newsstandPvTotalRatio"></span>%<span id="newsstandPvPreRatio"></span>)</div>
                                </div>
                                <div id="newsstandInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[네이버 뉴스스탠드 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="newsstandPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[네이버 데스크탑 메인 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="naverdeskmainPvTotal"></span> (요일 평균 대비 <span id="naverdeskmainPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="naverdeskmainPvTotalRatio"></span>%<span id="naverdeskmainPvPreRatio"></span>)</div>
                                </div>
                                <div id="naverdeskmainInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[네이버 데스크탑 메인 인기페이지]</strong></span>
                            </div>
                            <div id="naverdeskmainPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow2">
                                    <span><strong>[페이스북 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="facebookPvTotal"></span> (요일 평균 대비 <span id="facebookPvWAvg"></span> ) </div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="facebookPvTotalRatio"></span>%<span id="facebookPvPreRatio"></span>)</div>
                                </div>
                                <div id="facebookInflowArea"><span id="loding2">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[페이스북 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="facebookPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[네이버 검색 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="naversearchPvTotal"></span> (요일 평균 대비 <span id="naversearchPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="naversearchPvTotalRatio"></span>%<span id="naversearchPvPreRatio"></span>)</div>
                                </div>
                                <div id="naversearchInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[네이버 검색 인기페이지]</strong></span>
                            </div>
                            <div id="naversearchPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[데이블 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="dablePvTotal"></span> (요일 평균 대비 <span id="dablePvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="dablePvTotalRatio"></span>%<span id="dablePvPreRatio"></span>)</div>
                                </div>
                                <div id="dableInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[데이블 인기페이지]</strong></span>
                            </div>
                            <div id="dablePopularArea"></div>
                        </li>

                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[다음 뉴스 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="daumnewsPvTotal"></span> (요일 평균 대비 <span id="daumnewsPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="daumnewsPvTotalRatio"></span>%<span id="daumnewsPvPreRatio"></span>)</div>
                                </div>
                                <div id="daumnewsInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[다음 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="daumnewsPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[다음 검색 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="daumsearchPvTotal"></span> (요일 평균 대비 <span id="daumsearchPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="daumsearchPvTotalRatio"></span>%<span id="daumsearchPvPreRatio"></span>)</div>
                                </div>
                                <div id="daumsearchInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[다음 검색 인기페이지]</strong></span>
                            </div>
                            <div id="daumsearchPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[네이트 뉴스 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="natenewsPvTotal"></span> (요일 평균 대비 <span id="natenewsPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="natenewsPvTotalRatio"></span>%<span id="natenewsPvPreRatio"></span>)</div>
                                </div>
                                <div id="natenewsInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[네이트 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="natenewsPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[줌 뉴스 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="zumnewsPvTotal"></span> (요일 평균 대비 <span id="zumnewsPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="zumnewsPvTotalRatio"></span>%<span id="zumnewsPvPreRatio"></span>)</div>
                                </div>
                                <div id="zumnewsInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[줌 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="zumnewsPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow2">
                                    <span><strong>[트위터 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="twitterPvTotal"></span> (요일 평균 대비 <span id="twitterPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="twitterPvTotalRatio"></span>%<span id="twitterPvPreRatio"></span>)</div>
                                </div>
                                <div id="twitterInflowArea"><span id="loding2">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[트위터 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="twitterPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[구글 뉴스 & 디스커버 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="googleampPvTotal"></span> (요일 평균 대비 <span id="googleampPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="googleampPvTotalRatio"></span>%<span id="googleampPvPreRatio"></span>)</div>
                                </div>
                                <div id="googleampInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[구글 뉴스 & 디스커버 인기페이지]</strong></span>
                            </div>
                            <div id="googleampPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow5">
                                    <span><strong>[카카오 스토리 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="kakaoStroyPvTotal"></span> (요일 평균 대비 <span id="kakaoStroyPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="kakaoStroyPvTotalRatio"></span>%<span id="kakaoStroyPvPreRatio"></span>)</div>
                                </div>
                                <div id="kakaoStroyInflowArea"><span id="loding5">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[카카오 스토리 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="kakaoStroyPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow6">
                                    <span><strong>[카카오 톡 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="kakaoTalkPvTotal"></span> (요일 평균 대비 <span id="kakaoTalkPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="kakaoTalkPvTotalRatio"></span>%<span id="kakaoTalkPvPreRatio"></span>)</div>
                                </div>
                                <div id="kakaoTalkInflowArea"><span id="loding6">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[카카오 톡 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="kakaoTalkPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[카카오 뷰 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="kakaoViewPvTotal"></span> (요일 평균 대비 <span id="kakaoViewPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="kakaoViewPvTotalRatio"></span>%<span id="kakaoViewPvPreRatio"></span>)</div>
                                </div>
                                <div id="kakaoViewInflowArea"><span id="loding6">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[카카오 뷰 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="kakaoViewPopularArea"></div>
                        </li>


                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[캐시슬라이드 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="cashslidePvTotal"></span> (요일 평균 대비 <span id="cashslidePvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="cashslidePvTotalRatio"></span>%<span id="cashslidePvPreRatio"></span>)</div>
                                </div>
                                <div id="cashslideInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[캐시슬라이드 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="cashslidePopularArea"></div>

                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[밴드 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="bandusPvTotal"></span> (요일 평균 대비 <span id="bandusPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="bandusPvTotalRatio"></span>%<span id="bandusPvPreRatio"></span>)</div>
                                </div>
                                <div id="bandusInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[밴드 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="bandusPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[플립보드 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="flipboardPvTotal"></span> (요일 평균 대비 <span id="flipboardPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="flipboardPvTotalRatio"></span>%<span id="flipboardPvPreRatio"></span>)</div>
                                </div>
                                <div id="flipboardInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[플립보드 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="flipboardPopularArea"></div>
                        </li>

                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[버즈빌 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="buzzvilPvTotal"></span> (요일 평균 대비 <span id="buzzvilPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="buzzvilPvTotalRatio"></span>%<span id="buzzvilPvPreRatio"></span>)</div>
                                </div>
                                <div id="buzzvilInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[버즈빌 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="buzzvilPopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[버즈빌 (데이블) 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="buzzvildablePvTotal"></span> (요일 평균 대비 <span id="buzzvildablePvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="buzzvildablePvTotalRatio"></span>%<span id="buzzvildablePvPreRatio"></span>)</div>
                                </div>
                                <div id="buzzvildableInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[버즈빌 (데이블) 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="buzzvildablePopularArea"></div>
                        </li>
                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[KT 후후 (데이블) 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="ktwhoPvTotal"></span> (요일 평균 대비 <span id="ktwhoPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="ktwhoPvTotalRatio"></span>%<span id="ktwhoPvPreRatio"></span>)</div>
                                </div>
                                <div id="ktwhoInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[KT 후후 (데이블) 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="ktwhoPopularArea"></div>
                        </li>

                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[유튜브 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="youtubePvTotal"></span> (요일 평균 대비 <span id="youtubePvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="youtubePvTotalRatio"></span>%<span id="youtubePvPreRatio"></span>)</div>
                                </div>
                                <div id="youtubeInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[유튜브 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="youtubePopularArea"></div>
                        </li>

                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[이메일 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="gmailPvTotal"></span> (요일 평균 대비 <span id="gmailPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="gmailPvTotalRatio"></span>%<span id="gmailPvPreRatio"></span>)</div>
                                </div>
                                <div id="gmailInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[이메일 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="gmailPopularArea"></div>
                        </li>

                        <li>
                            <div class="chartArea">
                                <div id="newsInflow3">
                                    <span><strong>[구글 뉴스스탠드 유입 (최근 1시간 제외)]</strong></span>
                                    <div style="text-align:right;">Total : <span id="googlenewsstandPvTotal"></span> (요일 평균 대비 <span id="googlenewsstandPvWAvg"></span> )</div>
                                    <div style="text-align:right">(전체 PV 대비 <span id="googlenewsstandPvTotalRatio"></span>%<span id="googlenewsstandPvPreRatio"></span>)</div>
                                </div>
                                <div id="googlenewsstandInflowArea"><span id="loding3">데이터를 수신중입니다. 잠시만 기다려 주십시오</span></div>
                            </div>
                            <div>
                                <span><strong>[구글 뉴스스탠드 뉴스 인기페이지]</strong></span>
                            </div>
                            <div id="googlenewsstandPopularArea"></div>
                        </li>

                        <li>
                            <div class="chartArea">
                                <div id="newsInflow4">
                                    <span><strong>[기사 출고수]</strong></span>
                                    <div style="text-align:right;">Total : <span id="articleTotal"></span> (요일 평균 대비 <span id="articlePvWAvg"></span> )</div>
                                </div>
                                <div id="articleDataList"><span id="loding4">작업중입니다.</span></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>



