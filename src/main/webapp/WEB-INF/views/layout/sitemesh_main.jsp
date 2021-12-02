<%@ page import="org.springframework.web.util.UrlPathHelper" %>
<!DOCTYPE html>
<html lang="ko">
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%--<%@ taglib prefix="decorator" uri="http://www.opensymphony.com/sitemesh/decorator"%>--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--<%@ taglib prefix="page" uri="http://www.opensymphony.com/sitemesh/page"%>--%>
<%@ taglib prefix="security" uri="http://www.springframework.org/security/tags"%>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${strTitle != null?strTitle:'뉴스 에디트(NewsEdit)'}</title>
    <%
        UrlPathHelper urlPathHelper = new UrlPathHelper();
        String callUrl = urlPathHelper.getOriginatingRequestUri(request);

        if(callUrl.contains("/live") || callUrl.contains("/statistics")) {
    %>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/jquery/jquery-1.12.4.min_.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/jquery/jquery-ui-1.12.1.min.js"></script>
    <%
    } else {
    %>
    <script type="text/javascript" src="https://static.sbsdlab.co.kr/newsnet/jquery.min-1.7.2.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/jquery/jquery-ui-1.8.21.custom.js"></script>
    <%
        }
    %>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/common.js?20170524"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/gbun.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/sbs_edit.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/spin.min.js"></script>

    <c:if test="${ 'Y' ne applySB }">
        <%
            if(callUrl.contains("/star/")) {
        %>
        <link rel="stylesheet" type="text/css" href="//static.sbsdlab.co.kr/newsadmin/css/base_2011.css" />
        <link rel="stylesheet" type="text/css" href="//static.sbsdlab.co.kr/newsadmin/css/common.css" />
        <link rel="stylesheet" type="text/css" href="//static.sbsdlab.co.kr/newsadmin/css/layout.css" />
        <link rel="stylesheet" type="text/css" href="//static.sbsdlab.co.kr/newsadmin/css/main.css" />
        <link rel="stylesheet" type="text/css" href="//static.sbsdlab.co.kr/newsadmin/css/section.css" />
        <%
        }else{
        %>
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/base_2011.css" />
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/common.css" />
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/layout.css" />
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/main.css" />
        <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/section.css" />
        <%
            }
        %>
    </c:if>
    <%
        if(callUrl.contains("/statistics")) {
    %>
    <!-- Bootstrap core CSS-->
    <link href="${pageContext.request.contextPath}/resources/css/statistics/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="${pageContext.request.contextPath}/resources/css/statistics/font-awesome.min.css" rel="stylesheet">
    <!-- Page level plugin CSS-->
    <link href="${pageContext.request.contextPath}/resources/css/statistics/dataTables.bootstrap4.css" rel="stylesheet">
    <!-- Custom styles for this template-->
    <link href="${pageContext.request.contextPath}/resources/css/statistics/sb-admin.css" rel="stylesheet">

    <script src="/resources/js/statistics/bootstrap.bundle.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="/resources/js/statistics/jquery.easing.min.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="/resources/js/statistics/sb-admin.min.js"></script>

    <link rel="stylesheet" href="/resources/css/news/jquery-ui-1.12.1.min.css"/>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script>
        var contextPath = "${pageContext.request.contextPath}";
        var sDate = "${sDate}";
        var eDate = "${eDate}";
        // Load the Visualization API and the corechart package.
        google.charts.load('current', { packages: ['bar', 'corechart', 'table']});
    </script>
    <script type="text/javascript" src="/resources/js/newsedit_common.js?20201219_2"></script>
    <%
    }else{
    %>
    <c:if test="${ 'Y' eq applySB }">
        <link href="${pageContext.request.contextPath}/resources/css/news/bootstrap.css" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/resources/css/news/sb-admin.css?20170529" rel="stylesheet">
        <link href="${pageContext.request.contextPath}/resources/css/news/sb.custom.css?20170529" rel="stylesheet">
    </c:if>
    <%} %>
    <script type="text/javascript">
        function backgroundOff(){
            var obj = document.getElementById("sitemesh_frame");
            obj.style.width = Math.max($(document).width(),$(window).width());
            //obj.style.height = Math.max($(document).height(),$(window).height(),document.documentElement.clientHeight);
            obj.style.height = screen.availHeight;

            obj.style.filter = "alpha(opacity=50)";
            obj.style.opacity = "0.5";
            $('#sitemesh_frame').css('height', '2500px');
            $('#sitemesh_frame').css('display','block');
        }

        function backgroundOn(){
            $('#sitemesh_frame').css('display','none');
        }
    </script>
</head>
<body class="sticky-footer" id="page-top">
<!-- Navigation-->

<div id="sitemesh_wrap">
    <div id="sitemesh_top">
        <c:choose>
            <c:when test="${ 'Y' eq applySB }">
                <page:applyDecorator name="sitemesh_top_sb" id="sitemesh_top_sb" />
            </c:when>
            <c:otherwise>
                <page:applyDecorator name="sitemesh_top" id="sitemesh_top" />
            </c:otherwise>
        </c:choose>
    </div>

        <%
			if(callUrl.contains("/statistics/enter")) {
		%>
    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
        <a class="navbar-brand" href="javascript:fn_go_statistics('enterDashboard.do');">SBS 뉴스 - 연예 트래픽 분석 리포트</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>
    <div id="wrapper">
        <%
        } else if(callUrl.contains("/statistics")) {
        %>
        <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
            <a class="navbar-brand" href="javascript:fn_go_statistics('');">SBS 뉴스 - 트래픽 분석 리포트</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
        <div id="wrapper">
            <%
                }
            %>

            <div id="sitemesh_left">
                <c:choose>
                    <c:when test="${ 'Y' eq applySB }">
                        <%
                            if(callUrl.contains("/statistics")) {
                        %>
                        <page:applyDecorator name="sitemesh_left_sb" id="sitemesh_left_sb" />
                        <%
                        } else {
                        %>
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                            <page:applyDecorator name="sitemesh_left_sb" id="sitemesh_left_sb" />
                        </nav>
                        <%
                            }
                        %>
                    </c:when>
                    <c:otherwise>
                        <page:applyDecorator name="sitemesh_left" id="sitemesh_left" />
                    </c:otherwise>
                </c:choose>
            </div>
            <div id="sitemesh_content">
                <div id="sitemesh_inner_content">
                    <div class="content-wrapper">
                        <sitemesh:write property="body" />
                    </div>
                </div>
            </div>

            <%
                if(callUrl.contains("/statistics")) {
            %>
        </div>
        <%
            }
        %>
    </div>
</body>
</html>