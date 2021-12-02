<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="../common/common.jsp" %>
<%
    String sbs_anews_id = request.getParameter("sbs_anews_id");
    String deviceSelect = request.getParameter("deviceSelect");
    if(deviceSelect == null || "".equals(deviceSelect)) deviceSelect = "A";

    String callUrl = request.getRequestURI();

    String useKey = "N";
    String urlValidKey = "";
    String urlEncEnKey = "";
    try{
        urlValidKey = (String)request.getParameter("validKey");
        urlEncEnKey = URLEncoder.encode(urlValidKey, "UTF-8");
        String deValidKey = Decrypt( urlValidKey);
        useKey = logInDCheck(deValidKey);
    }catch(Exception e){
        System.out.println(e.toString());
    }

%>
<!-- GA 호출 -->
<script type="text/javascript" src="https://static.sbsdlab.co.kr/newsnet/extra/iframe_resizer/iframeResizer.contentWindow.min.js"></script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-05KQNG3PZ2"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-05KQNG3PZ2',{'debug_mode':true,'cookie_domain': 'newsedit.sbs.co.kr'});
</script>
<script type="text/javascript">

    var useKey =  '<%=useKey%>';
    //트래픽 분석 리포트 - 디바이스변경(ie7 onchange 이벤트 이슈 때문에 jquery .change 이벤트로 바꿉니다.)
    $(function(){
        //GA 호출
        /* try{
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-54293337-2', 'auto');
            ga('send', 'pageview');
        }catch(e){} */
        //권한 체크
        if(useKey != 'N'){
            try{
                console.log("key 인증 성공");
            }catch(e){}
        }else{
            try{
                console.log("key 인증 실패 : <%= urlValidKey%>");
            }catch(e){}
            $('body').hide();
            alert("사용가능 시간이 만료 되었습니다. 다시 메뉴에 접속해 주십시오.");
        }

        if(location.href.indexOf('deviceSelect=') > -1){
            $("input:radio[name=deviceSelect]").change(function() {
                var paramRegex = new RegExp("(deviceSelect=)[a-z]+", 'ig');
                var url = location.href.replace(paramRegex, '$1'+$(this).val());
                location.href = url;
            });
        }
    });

    function fn_left_click(leftmenu) {

        if($("#" + leftmenu).css("display") != 'none') {
            $('#' + leftmenu).hide();
        } else {
            $('#' + leftmenu).show();
        }
    }

    //트래픽 분석 리포트 - 메뉴 이동
    function fn_go_statistics(reportName) {
        var devices = document.getElementsByName("deviceSelect");
        var deviceSelect = "";

        for(var i = 0; i < devices.length; i++) {
            if(devices[i].checked == true) deviceSelect = devices[i].value;
        }

        var url = "/statistics/" + reportName + "?sbs_anews_id=<%=sbs_anews_id%>" + "&deviceSelect=" + deviceSelect+"&validKey=<%=urlEncEnKey%>";

        if (reportName == 'googleReport') {
            url = "https://www.google.com/analytics/web/?hl=ko&pli=1#home/a52247815w84677132p87771233/";
            window.open(url,"구글 어낼리틱스");
        } else {
            location.href = url;
        }
    }
</script>
<!-- leftArea -->
<div id="leftArea">
    <%
        if(callUrl.contains("/statistics")) {
    %>
    <h1>트래픽<br>분석 리포트</h1>
    <ul id="nav">
        <li id="pre_left_dashboard">
            <a href="/statistics?sbs_anews_id=<%=sbs_anews_id%>" class="pre_left">Dashboard</a>
        </li>
        <li id="pre_left_radiobutton" style="height:65px; text-align:left; line-height:22px; padding-left:12px;">
            <div><input type="radio" name="deviceSelect" value="A" <% if(deviceSelect.equals("A")) { %>checked<% } %> > 통합</div>
            <div><input type="radio" name="deviceSelect" value="P" <% if(deviceSelect.equals("P")) { %>checked<% } %> > PC</div>
            <div><input type="radio" name="deviceSelect" value="M" <% if(deviceSelect.equals("M")) { %>checked<% } %> > Mobile</div>
        </li>
        <li id="pre_left_pv">
            <a href="javascript:fn_go_statistics('pvReport');" class="pre_left">페이지뷰 (PV)</a>
        </li>
        <li id="pre_left_uv">
            <a href="javascript:fn_go_statistics('uvReport');" class="pre_left">방문자수 (UV)</a>
        </li>
        <li id="pre_left_ap">
            <a href="javascript:fn_go_statistics('articlePubReport');" class="pre_left">기사 출고수</a>
        </li>
        <li id="pre_left_rpv">
            <a href="javascript:fn_go_statistics('reporterRank');" class="pre_left">기자별 PV</a>
        </li>
        <li id="pre_left_ppu">
            <a href="javascript:fn_go_statistics('ppuReport');" class="pre_left">방문자 평균 PV</a>
        </li>
        <li id="pre_left_pop">
            <a href="javascript:fn_go_statistics('popReport');" class="pre_left">인기 페이지</a>
        </li>
        <li id="pre_left_time">
            <a href="javascript:fn_go_statistics('timeReport');" class="pre_left">시간대 평균 PV</a>
        </li>
        <li id="pre_left_day">
            <a href="javascript:fn_go_statistics('dayReport');" class="pre_left">요일 평균 PV</a>
        </li>
        <li id="pre_left_etc">
            <a href="/statistics/etcReport?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>" class="pre_left">기타</a>
            <!-- <a href="javascript:fn_go_statistics('etcReport');" class="pre_left">기타</a> -->
        </li>
        <li id="pre_left_route">
            <a href="javascript:fn_go_statistics('googleReport');" class="pre_left">구글 통계</a>
        </li>
    </ul>


    <%
    }else if(callUrl.contains("/star/")) {
    %>
    <h1>SBS연예뉴스</h1>
    <ul id="nav">
        <li id="pre_left_star">
            <a href="<%=SBS_NEWSEDIT_URL%>/star/?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>" class="pre_left" onclick="javascript:fn_left_click('left_star');">메인편집</a>
        </li>
        <li id="pre_left_star_stand">
            <a href="<%=SBS_NEWSEDIT_URL%>/star/cms/naver/?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>" class="pre_left" onclick="javascript:fn_left_click('left_star_stand');">뉴스스탠드</a>
        </li>
    </ul>
    <%
    }else if(callUrl.contains("/fune/")) {
    %>
    <h1>SBS연예뉴스</h1>
    <ul id="nav">
        <li id="pre_left_fune_pc">
            <a href="<%=SBS_NEWSEDIT_URL%>/fune/funePcMain.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>" class="pre_left" >메인편집 PC</a>
        </li>
        <li id="pre_left_fune_m">
            <a href="<%=SBS_NEWSEDIT_URL%>/fune/funeMobileMain.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>" class="pre_left" >메인편집 M</a>
        </li>
        <li id="pre_left_fune_side">
            <a href="<%=SBS_NEWSEDIT_URL%>/fune/funeRecommend.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>" class="pre_left" >사이드_추천뉴스</a>
        </li>
        <li id="pre_left_fune_stand">
            <a href="<%=SBS_NEWSEDIT_URL%>/fune/funeNaverStand.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>" class="pre_left" >뉴스스탠드</a>
        </li>
    </ul>
    <%
    }else if(callUrl.contains("/sdf/")) {
    %>
    <h1>편집</h1>
    <ul id="nav">
        <li id="pre_left_sdf">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_sdf');">SDF</a>
            <dl id="left_sdf" class="sub" style="display:none">
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/sdf/sdfAricleList.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">SDF 기사</a>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/sdf/sdfVodList.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">SDF VOD</a>
                    <%--
                    <dd><a href="javascript:;" onclick="javascript:fn_left_click('left_sdf_main');">SDF 메인</a>
                        <ul id="left_sdf_main" class="sub" style="display:none">
                            <li>
                                <a href="<%=SBS_NEWSEDIT_URL%>/sdf/2019/sdf_mian_edit_kr.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">2019_메인(KR)</a>
                            </li>
                            <li>
                                <a href="<%=SBS_NEWSEDIT_URL%>/sdf/2019/sdf_mian_edit_en.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">2019_메인(EN)</a>
                            </li>
                            <li>
                                <a href="<%=SBS_NEWSEDIT_URL%>/sdf/2018/sdf_mian_edit.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">2018_메인</a>
                            </li>
                        </ul>
                    </dd>
                     --%>
            </dl>
        </li>
    </ul>
    <%
    }else {
    %>
    <h1>편집</h1>
    <ul id="nav">
        <li id="pre_left_main">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_main');">메인</a>
            <dl id="left_main" class="sub" style="display:none">
                <%-- <dd><a href="<%=SBS_NEWSEDIT_URL%>/main/newsPcMain?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">PC</a>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/main/newsMobileMain?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">Mobile</a> --%>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/main_v2/newsPcMain_v2_A.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">Pc_Main_A</a></dd>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/main_v2/newsPcMain_v2_B.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">Pc_Main_B</a></dd>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/main_v2/newsMobileMain_v2.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">Mobile_Main</a></dd>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/main_v2/newsMobileBMain.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">Mobile_BackM</a></dd>
                <dd><a href="/event/covid19/main.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">코로나19 현황</a></dd>

            </dl>
        </li>
        <li id="pre_left_sectionTo">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_sectionTo');">섹션</a>
            <dl id="left_sectionTo" class="sub" style="display:none">
                <dd><a href="javascript:;" onclick="javascript:fn_left_click('left_sectionToWeb');">PC</a>
                    <ul id="left_sectionToWeb" class="sub" style="display:none">
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsPcSection?category_cd=11&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">정치</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsPcSection?category_cd=12&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">경제</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsPcSection?category_cd=13&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">사회</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsPcSection?category_cd=15&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">국제</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsPcSection?category_cd=17&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">생활,문화</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsPcSection?category_cd=14&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">연예</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsPcSection?category_cd=16&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">스포츠</a>
                        </li>
                    </ul>
                </dd>
                <dd><a href="javascript:;" onclick="javascript:fn_left_click('left_sectionToMobile');">MOBILE</a>
                    <ul id="left_sectionToMobile" class="sub" style="display:none">
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsMobileSection?category_cd=11&mobile_yn=Y&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">정치</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsMobileSection?category_cd=12&mobile_yn=Y&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">경제</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsMobileSection?category_cd=13&mobile_yn=Y&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">사회</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsMobileSection?category_cd=15&mobile_yn=Y&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">국제</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsMobileSection?category_cd=17&mobile_yn=Y&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">생활 · 문화</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsMobileSection?category_cd=14&mobile_yn=Y&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">연예</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsMobileSection?category_cd=16&mobile_yn=Y&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">스포츠</a>
                        </li>
                    </ul>
                </dd>
            </dl>
        </li>
        <!--<li id="pre_left_subusu">
			<a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_subusu');">스브스뉴스</a>
			<dl id="left_subusu" class="sub" style="display:none">
				<dd><a href="<%=SBS_NEWSEDIT_URL%>/subusu/newsSubusuMain?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">BEST</a></dd>
			</dl>
		</li>-->
        <li id="pre_left_VideoMug">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_mug');">비디오머그</a>
            <dl id="left_mug" class="sub" style="display:none">
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/mug/newsMugMain.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">PC 메인</a>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/section/newsMobileSection?mobile_yn=Y&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">MOBILE 메인</a>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/mug/mobilePickedMugs?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">모바일 PICK</a>
            </dl>
        </li>
        <li id="pre_left_special">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_special');">취재파일</a>
            <dl id="left_special" class="sub" style="display:none">
                <dd><a href="javascript:;">PC</a>
                    <ul>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/pc/reporterSpecial/newsReporterMain?category=S1&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">PC 메인</a>
                        </li>
                    </ul>
                </dd>
            </dl>
        </li>
        <li id="pre_left_newspageTo">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_article_page');">기사 페이지</a>
            <dl id="left_article_page" class="sub" style="display:none">
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/endSide/newsEndSide?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">PC</a>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/mobie/mendBottom/newsEndBottom?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">MOBILE</a>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/mobie/mendBottom/newsInstantArticle?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">INSTANT_A</a>
                    <%--<dd><a href="<%=SBS_NEWSEDIT_URL%>/news/endpage/banner.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">BANNER</a> --%>
            </dl>
        </li>
        <li id="pre_left_naver_ch">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_naver_ch');">네이버 메인</a>
            <dl id="left_naver_ch" class="sub" style="display:none">
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/main_v2/cms/naver?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">뉴스스탠드</a></dd>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/main_v2/naver_channel.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">모바일 채널</a></dd>
            </dl>
        </li>

        <li id="pre_left_hotissueTo">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_hotissueTo');">분류(이슈/테마)</a>
            <dl id="left_hotissueTo" class="sub" style="display:none">
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsHotissue03?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">태그 관리</a></dd>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsHotissueMain?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">이슈 메인</a></dd>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsHotissue02?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">이슈 관리</a></dd>
                <%-- <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsHotissue04?sbs_anews_id=<%=sbs_anews_id%>">VOD태그관리</a></dd> --%>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsPlusMain?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">테마 메인</a></dd>
                <dd  class="last"><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsHotissue05?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">테마 관리</a></dd>
                <%-- <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsHotissue06?sbs_anews_id=<%=sbs_anews_id%>">VOD테마관리</a></dd> --%>
            </dl>
        </li>
        <li id="pre_left_specialMenuTo">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_specialMenuTo');">특집 페이지</a>
            <dl id="left_specialMenuTo" class="sub" style="display:none">
                <!-- 총선 관리자 20200308
				<dd><a href="javascript:;" onclick="javascript:fn_left_click('left_special_vote2020');">2020 총선</a>
					<ul id="left_special_vote2020" class="sub" style="display:none">
						<li>
							<a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/e2020/vote2020/vote2020_main.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">메인</a>
						</li>
						<li>
							<%-- <a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/election2020/vote2020_counting_main.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">개표 표시</a> --%>
							<a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/e2020/vote2020/vote2020_video_main.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">뉴스 영상</a>
						</li>
				</dd> -->
                <!-- 2020 도쿄올림픽 관리자 20210528 -->
                <dd><a href="javascript:;" onclick="javascript:fn_left_click('left_special_olympic2020');">도쿄올림픽</a>
                    <ul id="left_special_olympic2020" class="sub" style="display:none">
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/e2021/olympic2020/olympic2020_main.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">메인</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/e2021/olympic2020/olympic2020_medal.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">순위,배너</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/e2021/olympic2020/olympic2020_interview.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">세로인터뷰</a>
                        </li>
                    </ul>
                </dd>
                <!-- 2021 재보궐선거 관리자 20210215 -->
                <dd><a href="javascript:;" onclick="javascript:fn_left_click('left_special_vote2021');">2021 보궐선거</a>
                    <ul id="left_special_vote2021" class="sub" style="display:none">
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/e2021/vote2021/vote2021_main.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">메인</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/e2021/vote2021/vote2021_exitpoll.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">출구조사</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/e2021/vote2021/vote2021_votecounting.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">개표현황</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/e2021/vote2021/vote2021_map.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">지도</a>
                        </li>
                    </ul>
                </dd>
            </dl>
        </li>
        <li id="pre_left_Voice">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_voice');">오디오</a>
            <dl id="left_voice" class="sub" style="display:none">
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/voice/newsVoiceMain.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">메인</a>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/voice/newsVoiceProgram.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">프로그램 관리</a>
            </dl>
        </li>
        <li id="pre_left_panda">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_panda');">판다</a>
            <dl id="left_panda" class="sub" style="display:none">
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/panda/items.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">아이템</a>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/panda/articlePreview.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">기사</a>
            </dl>
        </li>
        <li id="pre_left_contribution">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_contribution');">인잇</a>
            <dl id="left_contribution" class="sub" style="display:none">
                <!-- <%=SBS_NEWSEDIT_URL%> --><dd><a href="/contribution/contributors.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">필진 메인</a></dd>
                <dd><a href="/contribution/main.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">기사</a></dd>
            </dl>
        </li>
        <!--<li id="pre_left_mobile24">
			<a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_mobile24');">모바일24</a>
			<dl id="left_mobile24" class="sub" style="display:none">
				<dd><a href="/mobile24/main.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">기사</a>
			</dl>
		</li> -->
        <li id="pre_left_mabuletter">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_mabuletter');">마부뉴스</a>
            <dl id="left_mabuletter" class="sub" style="display:none">
                <dd><a href="/mabuletter/main.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">레터</a></dd>
            </dl>
        </li>
    </ul>
    <%
        }
    %>

</div>
<!--// left -->