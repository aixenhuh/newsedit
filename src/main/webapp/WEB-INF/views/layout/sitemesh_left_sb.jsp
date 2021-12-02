<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="../common/common.jsp" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
    var useKey =  "<%=useKey%>";
    var sbs_anews_id = "<%=sbs_anews_id%>";
    var urlValidKey = "<%=urlEncEnKey%>";
    //트래픽 분석 리포트 - 디바이스변경(ie7 onchange 이벤트 이슈 때문에 jquery .change 이벤트로 바꿉니다.)
    $(function(){
        if(useKey != 'N'){
            try{
                console.log("key 인증 성공");
            }catch(e){}
        }else{
            try{
                console.log("key 인증 실패 : " + urlValidKey);
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

    var deviceSelect = "";
    //트래픽 분석 리포트 - 메뉴 이동
    function fn_go_statistics(reportName,devices) {

        if(devices==undefined || devices == null) devices = "A";

        var url = "/statistics/" + reportName + "?sbs_anews_id=" +sbs_anews_id + "&deviceSelect=" + devices+"&validKey=" + urlValidKey ;

        if (reportName == 'googleReport') {
            url = "https://www.google.com/analytics/web/?hl=ko&pli=1#home/a52247815w84677132p87771233/";
            window.open(url,"구글 어낼리틱스");
        } else {
            location.href = url;
        }
    }
</script>


<%
    if(callUrl.contains("/statistics/enter")) {
%>
<ul class="sidebar navbar-nav" id="exampleAccordion">
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
        <a class="nav-link" href="javascript:fn_go_statistics('enterDashboard.do','A');">
            <i class="fa fa-fw fa-dashboard"></i>
            <span class="nav-link-text" >Dashboard</span>
        </a>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents1" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">Page Views</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/pvReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/pvReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/pvReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents2" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">Unique Views</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/uvReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/uvReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/uvReport','M');">Mobile</a>
        </div>
    </li>

    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents4" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-table"></i>
            <span class="nav-link-text">Page View / User</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/ppuReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/ppuReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/ppuReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents5" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-file"></i>
            <span class="nav-link-text">Popular Page</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/popReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/popReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/popReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents6" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-table"></i>
            <span class="nav-link-text">Time Scale</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/timeReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/timeReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/timeReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents7" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-table"></i>
            <span class="nav-link-text">Day Scale</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/dayReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/dayReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('enter/dayReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Page View">
        <a class="nav-link" href="javascript:fn_go_statistics('etcReport');"">
        <i class="fa fa-fw fa-dashboard"></i>
        <span class="nav-link-text">Etc</span>
        </a>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Page View">
        <a class="nav-link" href="javascript:fn_go_statistics('googleReport');">
            <i class="fa fa-fw fa-link"></i>
            <span class="nav-link-text">Google Analytics</span>
        </a>
    </li>
</ul>
<script type="text/javascript">
    //alert(getUserBrowserInfo());
    if("IE8,IE7".indexOf(getUserBrowserInfo()) > -1) {
        alert("Microsoft IE7 모드 입니다.\n\nIE7에서는 정상 동작하지 않는 기능이 있습니다.\n\n만약 IE7이 아닌데 이 창이 표시된다면 IE 메뉴->도구->호환성보기 설정->'Microsoft 호환성 목록 사용' 옵션을 꺼 주십시오.")
    }
</script>

<%
}  else if(callUrl.contains("/statistics")) {
%>
<ul class="sidebar navbar-nav" id="exampleAccordion">
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
        <a class="nav-link" href="javascript:fn_go_statistics('','A');">
            <i class="fa fa-fw fa-dashboard"></i>
            <span class="nav-link-text" >Dashboard</span>
        </a>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents1" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">Page Views</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('pvReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('pvReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('pvReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents2" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">Unique Views</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('uvReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('uvReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('uvReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents3" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-file"></i>
            <span class="nav-link-text">Publish Count</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('articlePubReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('articlePubReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('articlePubReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Branch">
        <a class="nav-link" href="javascript:fn_go_statistics('pvDashboard');">
            <i class="fa fa-fw fa-sitemap"></i>
            <span class="nav-link-text" >Category Views</span>
        </a>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Page View">
        <a class="nav-link" href="javascript:fn_go_statistics('reporterRank');">
            <i class="fa fa-fw fa-sitemap"></i>
            <span class="nav-link-text">Reporter Rank</span>
        </a>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents4" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-table"></i>
            <span class="nav-link-text">Page View / User</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('ppuReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('ppuReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('ppuReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents5" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-file"></i>
            <span class="nav-link-text">Popular Page</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('popReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('popReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('popReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents6" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-table"></i>
            <span class="nav-link-text">Time Scale</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('timeReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('timeReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('timeReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" href="#collapseComponents7" data-parent="#exampleAccordion" aria-haspopup="true" aria-expanded="true">
            <i class="fa fa-fw fa-table"></i>
            <span class="nav-link-text">Day Scale</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown" x-placement="bottom-start">
            <a class="dropdown-item" href="javascript:fn_go_statistics('dayReport','A');">Total</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('dayReport','P');">Desktop</a>
            <a class="dropdown-item" href="javascript:fn_go_statistics('dayReport','M');">Mobile</a>
        </div>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Page View">
        <a class="nav-link" href="javascript:fn_go_statistics('etcReport');"">
        <i class="fa fa-fw fa-dashboard"></i>
        <span class="nav-link-text">Etc</span>
        </a>
    </li>
    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Page View">
        <a class="nav-link" href="javascript:fn_go_statistics('googleReport');">
            <i class="fa fa-fw fa-link"></i>
            <span class="nav-link-text">Google Analytics</span>
        </a>
    </li>
</ul>
<script type="text/javascript">
    //alert(getUserBrowserInfo());
    if("IE8,IE7".indexOf(getUserBrowserInfo()) > -1) {
        alert("Microsoft IE7 모드 입니다.\n\nIE7에서는 정상 동작하지 않는 기능이 있습니다.\n\n만약 IE7이 아닌데 이 창이 표시된다면 IE 메뉴->도구->호환성보기 설정->'Microsoft 호환성 목록 사용' 옵션을 꺼 주십시오.")
    }
</script>

<%
} else if(callUrl.contains("/live")) {

%>
<!-- leftArea -->
<div id="leftArea">
</div>
<%
} else {
%>
<!-- leftArea -->
<div id="leftArea">
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
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsPcSection?category_cd=14&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">연예</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsPcSection?category_cd=15&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">글로벌</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsPcSection?category_cd=16&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">스포츠</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsPcSection?category_cd=17&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">라이프</a>
                        </li>
                    </ul>
                </dd>
                <dd><a href="javascript:;" onclick="javascript:fn_left_click('left_sectionToMobile');">MOBILE</a>
                    <ul id="left_sectionToMobile" class="sub" style="display:none">
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsMobileSection?mobile_yn=Y&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">비디오머그</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsMobileSection?category_cd=11&mobile_yn=Y&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">정치</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/section/newsMobileSection?category_cd=12&mobile_yn=Y&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">경제</a>
                        </li>
                    </ul>
                </dd>
            </dl>
        </li>
        <li id="pre_left_VideoMug">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_mug');">비디오 머그</a>
            <dl id="left_mug" class="sub" style="display:none">
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/mug/newsMugMain.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">메인</a>
            </dl>
        </li>
        <li id="pre_left_special">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_special');">기자스페셜</a>
            <dl id="left_special" class="sub" style="display:none">
                <dd><a href="javascript:;">PC</a>
                    <ul>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/pc/reporterSpecial/newsReporterMain?category=S1&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">취재파일</a>
                        </li>

                    </ul>
                </dd>

            </dl>
        </li>
        <li id="pre_left_newspageTo">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_article_page');">기사Page</a>
            <dl id="left_article_page" class="sub" style="display:none">
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/endSide/newsEndSide?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">PC</a>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/mobie/mendBottom/newsEndBottom?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">Mobile</a>
            </dl>
        </li>





        <li id="pre_left_hotissueTo">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_hotissueTo');">핫이슈</a>
            <dl id="left_hotissueTo" class="sub" style="display:none">
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsHotissueMain?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">핫이슈</a></dd>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsHotissue02?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">핫이슈생성</a></dd>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsHotissue03?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">태그관리</a></dd>
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsHotissue05?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">테마관리</a></dd>
                <dd class="last"><a href="<%=SBS_NEWSEDIT_URL%>/pc/hotissue/newsPlusMain?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">뉴스플러스</a></dd>
            </dl>
        </li>






        <li id="pre_left_specialMenuTo">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_specialMenuTo');">특집페이지</a>
            <dl id="left_specialMenuTo" class="sub" style="display:none">


                <dd><a href="javascript:;" onclick="javascript:fn_left_click('left_special_pe');">2017_대선</a>
                    <ul id="left_special_pe" class="sub" style="display:none">
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/election2017/presiElection_mian.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">메인 기사편집</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/news_v2/event/election2017/presiElection_multi.do?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">메뉴 편성</a>
                        </li>
                    </ul>
                </dd>


                <dd><a href="javascript:;" onclick="javascript:fn_left_click('left_special_rio');">리우올림픽</a>
                    <ul id="left_special_rio" class="sub" style="display:none">
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/special/newsSpecialRio2016?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">메인 티커</a>
                        </li>
                    </ul>
                </dd>
                <dd><a href="javascript:;" onclick="javascript:fn_left_click('left_special_ele');">메인 총선 영역</a>
                    <ul id="left_special_ele" class="sub" style="display:none">
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/special/newsPcSpecial?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">PC</a>
                        </li>
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/special/newsMobileSpecial?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">Mobile</a>
                        </li>
                    </ul>
                </dd>
                <dd><a href="javascript:;" onclick="javascript:fn_left_click('left_special_ele02');">총선 페이지</a>
                    <ul id="left_special_ele02" class="sub" style="display:none">
                        <li>
                            <a href="<%=SBS_NEWSEDIT_URL%>/special/newsPcSpecialElection?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">통합</a>
                        </li>
                    </ul>
                </dd>
            </dl>
        </li>
        <li id="pre_left_newsstand">
            <a href="<%=SBS_NEWSEDIT_URL%>/main_v2/cms/naver?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">뉴스스탠드</a>
        </li>
        <li id="pre_left_subusu">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_subusu');">스브스뉴스</a>
            <dl id="left_subusu" class="sub" style="display:none">
                <dd><a href="<%=SBS_NEWSEDIT_URL%>/subusu/newsSubusuMain?sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">스브스메인</a></dd>
            </dl>
        </li>
        <li id="pre_left_banner">
            <a href="javascript:;" class="pre_left" onclick="javascript:fn_left_click('left_banner');">배너관리자</a>
            <dl id="left_banner" class="sub" style="display:none">
                <dd><a href="http://newsedit2.sbs.co.kr/banner/newsBannerManager?category_cd=11&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">PC</a></dd>
                <dd><a href="http://newsedit2.sbs.co.kr/banner/newsBannerManager?category_cd=12&sbs_anews_id=<%=sbs_anews_id%>&validKey=<%=urlEncEnKey%>">Mobile</a></dd>
            </dl>
        </li>
    </ul>
</div>
<%
    }
%>
<!--// left -->