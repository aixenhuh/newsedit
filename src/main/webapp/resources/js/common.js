/***
 * ie에서 jqury ajax 호출시 캐싱 문제
 */

$(function (){

	$.ajaxSetup({
		cache : false
	});
});

// 공통 변수

var CURRENT_PAGE = 1;
var PAGE_YN = false;
var MAX_SIZE = 10;


//<%-- 페이지 이동 --%>
function fn_gopage(pg) {
	alert(pg);
	PAGE_YN = true;
	CURRENT_PAGE = pg;
	fn_search();
}
function fn_refresh() {
	fn_search();
}

// 공통 셀렉트 박스
function fn_get_str_combo(data, opt) {
	var temp = '';

	if (true) temp = '<option value=\'\' >선택</option>';

	$.each(data["records"], function(index, entry) {
		if (opt == entry["CODE_VAL"]) {
			temp += '<option value="' + entry["CODE_VAL"] + '" selected>'
					+ entry["CODE_NM"] + '</option>';
		} else {
			temp += '<option value="' + entry["CODE_VAL"] + '" >'
					+ entry["CODE_NM"] + '</option>';
		}
	});

	return temp;
}

// 공통 라디오 박스
function fn_get_str_radio(data, name, opt) {
	var temp = '';

	if (true) {
		temp = '<label><input name="'
				+ name
				+ '" class="radioType" type="radio" value="" checked="checked"/>전체</label>';
	}

	$.each(data["records"], function(index, entry) {

		temp += '<label><input type="radio" class="radioType" name="' + name
				+ '" value="' + entry["CODE_VAL"] + '" /> '
				+ entry["CODE_NM"] + '</label>';
	});

	return temp;
}

// 체크박스 전체 선택
function checkAll(id) {
	var checked = $(id).attr("checked");

	$("input:checkbox").each(function() {
		var subChecked = $(this).attr("checked");
		if (subChecked != checked)
			$(this).click();
	});
}

// <%-- 전체 삭제 체크박스: 마스터화면 (return값 : true/false) - 예제 : software_group.jsp --%>
function common_allCheckFlag() {

	if ($("#checkAll").attr("checked") == "checked") { // checked
		return true;
	} else { // undefined
		return false;
	}

}

// <%-- 전체 삭제 체크박스:마스터화면 (return값 : checked/"") - 예제 : software_group.jsp --%>
function common_allCheckStatus() {

	if ($("#checkAll").attr("checked") == "checked") {
		return "checked";
	} else {
		return "";
	}

}

// 팝업 관련 함수
/*******************************************************************************
 * openWindow(url, name, width, height) : 주어진 값에 따라 새창을 오픈한다. (화면 중앙에 위치함)
 *
 * @PARAM URL
 *            WINDOW의 URL
 * @PARAM NAME
 *            WINDOW의 명
 * @PARAM WIDHT
 *            WINDOW폭 (픽셀)
 * @PARAM HEIGHT
 *            WINDOW높이 (픽셀)
 *
 * examples :
 *
 * var win = openWindow("http://localhost/", localhost, 300, 300);
 *
 * return : 해당 윈도우 객체.
 ******************************************************************************/
function openWindow(url, name, width, height) {

	var top = screen.height / 2 - height / 2 - 50;

	var left = screen.width / 2 - width / 2;

	var win = open(url, name, 'width=' + width + ', height=' + height
			+ ', top=' + top + ', left=' + left
			+ ', resizable=no, status=no, toolbar=no, menubar=no');

	win.focus();

	return win;
}

/*******************************************************************************
 * 함수명 : fn_searchPop 설 명 : 공통팝업 인 자 : formid(팝업 화면ID명) param(리턴받을 변수 필드명)
 * param1(리턴받을 변수 필드명) 사용법 : 예) <a
 * href="javascript:fn_searchPop('menu_first_pop','searchform','팝업명', 'param',
 * 'param1')"></a> 작성자 : 개발자 수정일 수정자 수정내용 -------- ------ -------------------
 * 개발자 최초생성
 ******************************************************************************/
function fn_search_popup(pop_nm, name, formid, param, callback) {

	var paramUrl = 'formid=' + formid + '&param=' + param + '&callback='
			+ callback;

	openWindow('/snowman/pop/' + pop_nm + '?' + paramUrl, name, 800, 410);
}

function nvl(entry) {
	if (null == entry || undefined == entry || 'null' == entry || 'undefined' == entry) {
		entry = "";
	}
	return entry;
}

// top menu scripts

function MM_preloadImages() { // v3.0
	var d = document;
	if (d.images) {
		if (!d.MM_p)
			d.MM_p = new Array();
		var i, j = d.MM_p.length, a = MM_preloadImages.arguments;
		for (i = 0; i < a.length; i++)
			if (a[i].indexOf("#") != 0) {
				d.MM_p[j] = new Image;
				d.MM_p[j++].src = a[i];
			}
	}
}

function MM_swapImgRestore() { // v3.0
	var i, x, a = document.MM_sr;
	for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++)
		x.src = x.oSrc;
}

function MM_findObj(n, d) { // v4.01
	var p, i, x;
	if (!d)
		d = document;
	if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
		d = parent.frames[n.substring(p + 1)].document;
		n = n.substring(0, p);
	}
	if (!(x = d[n]) && d.all)
		x = d.all[n];
	for (i = 0; !x && i < d.forms.length; i++)
		x = d.forms[i][n];
	for (i = 0; !x && d.layers && i < d.layers.length; i++)
		x = MM_findObj(n, d.layers[i].document);
	if (!x && d.getElementById)
		x = d.getElementById(n);
	return x;
}

function MM_swapImage() { // v3.0
	var i, j = 0, x, a = MM_swapImage.arguments;
	document.MM_sr = new Array;
	for (i = 0; i < (a.length - 2); i += 3)
		if ((x = MM_findObj(a[i])) != null) {
			document.MM_sr[j++] = x;
			if (!x.oSrc)
				x.oSrc = x.src;
			x.src = a[i + 2];
		}
}

// top menu scripts ends

// datePicker

var datePickerDefaultSetting = 			{
		monthNamesShort : [ '1월', '2월', '3월', '4월', '5월', '6월', '7월',
							'8월', '9월', '10월', '11월', '12월' ],
					dayNamesMin : [ '일', '월', '화', '수', '목', '금', '토' ],
					weekHeader : 'Wk',
					dateFormat : 'yy-mm-dd', // 형식(2012-03-03)
					autoSize : false, // 오토리사이즈(body등 상위태그의 설정에 따른다)
					changeMonth : true, // 월변경가능
					changeYear : true, // 년변경가능
					showMonthAfterYear : true, // 년 뒤에 월 표시
					/*
					 * buttonImageOnly: true, //이미지표시 buttonImage:
					 * './imgs/calendar.png', //이미지주소 showOn: "both", //엘리먼트와 이미지 동시
					 * 사용
					 */
					yearRange : '2011:2012' // 2011년부터 2012년까지
				}


// datePicker ends


/**
 * 우편번호, 전화번호, 금액 변환 표기 스크립트
 */
//숫자 -> 금액
function common_aPrice(n)
{
	if(isNaN(n)){return 0;}
	  var reg = /(^[+-]?\d+)(\d{3})/;
	  n += '';
	  while (reg.test(n))
	    n = n.replace(reg, '$1' + ',' + '$2');
	  return n;
}
//금액 -> 숫자
function common_rPrice(n){
	n=n.replace(/,/g,"");
	if(isNaN(n)){return 0;} else{return n;}
}

//yyyy-mm-dd 날짜
function getToday(){
    var year, month, day, monthNum, dayNum;
    var now = new Date();

    year     = now.getFullYear();
    monthNum = now.getMonth()+1;
    dayNum   = now.getDate();

    if(monthNum<10)
      month = '0' + monthNum;
    else
      month = '' + monthNum;

    if(dayNum<10)
      day = '0' + dayNum;
    else
      day = '' + dayNum;

    return (year+'-'+month+'-'+day);
}

//20070101 문자열을날짜객체로변환
function strToDate(dateStr){
	var dateinfo = new Array();

	dateinfo[0] = dateStr.substring(0,4);
	dateinfo[1] = Number(dateStr.substring(4,6))-1;
	dateinfo[2] = dateStr.substring(6,8);

	//alert('[0]'+dateinfo[0] +'[1]'+ dateinfo[1] +'[2]'+ dateinfo[2]);

	return new Date(dateinfo[0] , dateinfo[1] , dateinfo[2]);
}

//Date 객체를 20070101 형식문자열로변환
function dateToStr(dateObject){
	var str = null;

	var month = dateObject.getMonth()+1;
	var day = dateObject.getDate();

	if(month <  10)
	month = '0' + month;
	if(day < 10)
	day = '0' + day;

	str = dateObject.getYear() + month + day + '';
	return str;
}

//Form 날짜 기본값
$(document).ready(function() {
	$('#FORM_DATE_START,#FORM_DATE_END').val(getToday());
});

//Ajax 로딩이미지
$(document).ready(function() {
	// 로딩이미지관련
	$('#viewLoading').hide();
	$('#viewLoading').ajaxStart(function() {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', '0px');
		$('#viewLoading').css('top', '130px');
		$('#viewLoading').css('width', '800px');
		$('#viewLoading').css('height', $('#contents').css('height'));
		$('#viewLoading').css('border', '0px');
		$('#viewLoading').css('text-align', 'center');

		$(this).fadeIn(300);
	}).ajaxStop(function(){
		$(this).fadeOut(300);
	});
});

/**
 * Cookie args
 */
function argsTest(name, value) {
	var argsVal = argsTest.arguments;
	var argsLeng = argsTest.arguments.length;

	alert(argsVal[2] + " \n토탈 args의 갯수 : " + argsLeng);
}

/**
 * Cookie Test Set
 */
function setCookie(name, value) {
	// 쿠키의 유효기간
	/* var date = new Date();
	var validity = 1;
	date.setCookie(date.getDate() + validity);

	var auth = 'admin';
	var userId = 'admin';
	var userName = '테스트'; */

	var argsVal = setCookie.arguments;
	var argsLeng = setCookie.arguments.length;

	var tempExp = (argsLeng > 2) ? argsVal[2]:null;
	var tempPath = (argsLeng > 3) ? argsVal[3]:null;
	var tempDomain = (argsLeng > 4) ? argsVal[4]:null;
	var fixExp = new Date();
	fixExp = fixExp.setTime(fixExp.getTime() + 1000 * 24 * 60 * 60);

	var str = name + "=" + escape(value);
	str += ((tempExp == null) ? fixExp:(";expires=" + tempExp.toGMTString()));
	str += ((tempPath == null) ? "":(";path=" + tempPath));
	str += ((tempDomain == null) ? "":("domain=" + tempDomain));

	document.cookie = str;
	//location.reload();
}
/**
 * Cookie Test Get
 */
function getCookie(name) {
	str = document.cookie;

	start = str.indexOf(name);

	if(start == -1) return "";

	start = start + name.length + 1;
	end = str.indexOf(";", start);

	if(end == -1) end = str.length;

	str = str.substring(start, end);

	return unescape(str);
}

/**
 * Cookie expires end
 */
function deleteCookie(name) {
	var expDate = new Date();
	expDate.setTime(expDate.getTime() - 1);

	var cookieVal = readCookie(name);
	if(cookieVal != null) {
		saveCookie(name, cookieVal, expDate);
	}

	location.reload();
}

/**
*
* 브라우저 정보 확인
* @method getUserBrowserInfo
* @param
* @return
*
*/
function getUserBrowserInfo() {
	var ua = window.navigator.userAgent,
		agt = ua.toLowerCase();

	//IE 11,10,9,8
	var trident = ua.match(/Trident\/(\d.\d)/i);
	var msie = ua.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/i);
	
	if (msie !== null) {
		//return alert(msie[1]);
		if (msie[1] === "9.0") return "IE9";
		if (msie[1] === "8.0") return "IE8";
		if (msie[1] === "7.0") return "IE7";
		if (msie[1] === "6.0") return "IE6";
	}
	
	if (trident !== null) {
		if (trident[1] === "7.0") return "IE11";
		if (trident[1] === "6.0") return "IE10";
		if (trident[1] === "5.0") return "IE9";
		if (trident[1] === "4.0") return "IE8";
	}

	//IE 7
	if (window.navigator.appName === 'Microsoft Internet Explorer') return "IE7";

	//other 
	if (agt.indexOf("chrome") !== -1) return 'Chrome';
	if (agt.indexOf("opera") !== -1) return 'Opera';
	if (agt.indexOf("staroffice") !== -1) return 'Star Office';
	if (agt.indexOf("webtv") !== -1) return 'WebTV';
	if (agt.indexOf("beonex") !== -1) return 'Beonex';
	if (agt.indexOf("chimera") !== -1) return 'Chimera';
	if (agt.indexOf("netpositive") !== -1) return 'NetPositive';
	if (agt.indexOf("phoenix") !== -1) return 'Phoenix';
	if (agt.indexOf("firefox") !== -1) return 'Firefox';
	if (agt.indexOf("safari") !== -1) return 'Safari';
	if (agt.indexOf("skipstone") !== -1) return 'SkipStone';
	if (agt.indexOf("netscape") !== -1) return 'Netscape';
	if (agt.indexOf("mozilla/5.0") !== -1) return 'Mozilla';
}