/* document.domain setting �� ä�κ� ���� �˾� ȣ��� ������ ����(opener��..)�� ����   2006-03-28 11:04����  */
document.domain = "localhost";

getObject = function(ObjId) {
	return document.getElementById(ObjId);
};

getObjects = function(ObjName) {
	return document.getElementsByName(ObjName);
};

getObjectAttribute = function(ObjId,ObjAttribute) {
	return document.getElementById(ObjId).getAttribute(ObjAttribute);
};

setObjectAttribute = function(ObjId,ObjAttribute,SetValue) {
	return document.getElementById(ObjId).setAttribute(ObjAttribute,SetValue);
};

getCookie = function(name) {
	var prefix = name + "=";

	var cookieStartIndex = document.cookie.indexOf(prefix);
	if (cookieStartIndex == -1) return null;

	var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
	if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length;

	return unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
};

/**
	 *	getParam
	 *	@param	pmParamName	: �ĸ����� ��
	 *	<pre>
	 *		�Ķ���� ���� ������
	 *	</pre>
	 */
getParam = function(pmParamName) {
	/*
	pmParamName = pmParamName.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+pmParamName+"=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.href);

	if( results == null )
		return "";
	else
		return results[1];
	*/

	var reParam = new RegExp("(?:[\?&]|&amp;)" + pmParamName + "=([^&]+)", "i") ;
  var match = window.location.search.match(reParam) ;

  return (match && match.length > 1) ? match[1] : "" ;
};

setCookie = function(name, value, expires, path, domain, secure) {
	var curCookie = name + "=" + escape(value) +
	((expires) ? "; expires=" + expires.toGMTString() : "") +
	((path) ? "; path=" + path : "") +
	((domain) ? "; domain=" + domain : "") +
	((secure) ? "; secure" : "");

	if ((name + "=" + escape(value)).length <= 4000) {
		document.cookie = curCookie;
	} else {
		if (confirm("Cookie exceeds 4KB and will be cut!")) {
			document.cookie = curCookie;
		}
	}

	return true;
};

todayNoWindow = function(cookieName, domain) {
  var exp = new Date();
  exp.setDate( exp.getDate() + 1);
  var sc = setCookie(cookieName,"true",exp,"/",domain,0);
  self.close();
};

// IE6 ���� png ����
function setPng24(obj) {
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter ="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');";
	obj.src='';
	return '';
}

function change1(form)
{
	if(form.url.options[form.url.selectedIndex].value != "")
	{
		window.open(form.url.options[form.url.selectedIndex].value);
		return true;
	}
}

function chat_window(url)
{
  window.open(url,"chat_open","height=700,width=900, leftmargin=0, topmargin=0, resizable=yes,scrollbars=no,toolbar=no, menubar=no,statusbar=no,location=no");
}


function windowOpen(url,name,propety) {
 window.open(url,name,propety) ;
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

// �¿���
function onAir() {
// top.location.href = "http://ionair.sbs.co.kr/slonair/viewer/checkonair.jsp"; �ø��� �Ⱓ �¿��� ����
  top.location.href = "http://ionair.sbs.co.kr/slonair/viewer/checkonair.html"; //�ø��� �Ⱓ �¿��� ����

	//window.open(onAirLink,"onAir","height=468, width=800, scrollbars=no, resizable=yes, top=20, left=20");
}

// ��ǥ
function broadplan() {
	top.location.href = "http://tv.sbs.co.kr/broadplan";
}

//���� �¿��� ��ũ��Ʈ �߰� - �溴�� �븮 ��û 20050616
//���� �¿��� ��ũ��Ʈ ���� - ������ �븮 ��û 20070212
function radio_onair(div)
{
	if (div == "powerfm") {
		URL = "http://radio.sbs.co.kr/onair/power_popup.html";
	} else if (div == "lovefm") {
		URL = "http://radio.sbs.co.kr/onair/love_popup.html";
	}
 	window.open(URL, "radio_onair", "toolbar=no,status=no,width=386,height=233,directories=no,scrollbars=no,left=0,top=0,resizable=no,menubar=no");
//	 URL = "http://mplay.sbs.co.kr/radio/radioPlayer.jsp?fname="+div;
//	 window.open(URL, "radio_onair", "toolbar=no,status=no,width=405,height=340,directories=no,scrollbars=no,left=0,top=0,resizable=no,menubar=no");
}

// ���� �÷��̾� ȣ�� ��ũ��Ʈ - ���� �÷��̾� ȭ�� �����ȵ� - ���п�  2006-02-27 5:45����
function radio_player(fileName)
{
    var URL = "http://mplay.sbs.co.kr/players/mplay.jsp?fname="+fileName;
	window.open(URL,"mplayer","toolbar=no,status=no,width=405,height=340,directories=no,scrollbars=no,left=0,top=0,resizable=no,menubar=no");
}

//���� �ٽõ��
function radio_replay(fname)
{
    var url = "http://mplay.sbs.co.kr/radio/radioPlayer.jsp?fname="+fname;
    window.open(url, "aod", "toolbar=no,status=no,width=405,height=340,directories=no,scrollbars=no,left=0,top=0,resizable=no,menubar=no");
}

// mplayer ȣ��
function mplayer(fname)
{
    var URL = "http://mplay.sbs.co.kr/players/mplay.jsp?fname="+fname;
	window.open(URL,"mplayer","toolbar=no,status=no,width=405,height=340,directories=no,scrollbars=no,left=0,top=0,resizable=no,menubar=no");
}

// �� ��Ʃ��� �÷��̾� ����
function openWebStudioPlayer(ucc_id)
{
	var url;
	var features;

	if( ucc_id == null ) ucc_id = "";

//	url = "http://netv.sbs.co.kr/box/multigallery/box_multigallery_detail.jsp?uccid=" + ucc_id;
//	features = "toolbar=no,scrollbars=yes,statusbar=no,menubar=no";
//	openWin(url, "NeTvPlayer", 1010, 800, features);
	url = "http://netv.sbs.co.kr/sbox/sbox_index.jsp?uccid=" + ucc_id;
	window.open(url);
}

function goWebStudioPlayer(ucc_id) {
	top.location.href = "http://netv.sbs.co.kr/sbox/sbox_index.jsp?uccid=" + ucc_id;
}

// �� ��Ʃ��� ������ ����
function openWebStudioEditor(open_type, vod_id, vod_cnt1, vod_cnt2, query_clss, query_text, mission_id)
{
	if(open_type  == null) open_type  = '';
	if(vod_id     == null) vod_id     = '';
	if(vod_cnt1   == null) vod_cnt1   = '';
	if(vod_cnt2   == null) vod_cnt2   = '';
	if(query_clss == null) query_clss = '';
	if(query_text == null) query_text = '';
	if(mission_id == null) mission_id = '';

	url = "http://netv.sbs.co.kr/WebStudioEditor.jsp?open_type="+open_type+"&vod_id="+vod_id+"&vod_cnt1="+vod_cnt1
	      +"&vod_cnt2="+vod_cnt2+"&query_clss="+query_clss+"&query_text="+query_text+"&mission_id="+mission_id;

	openWin(url, "WebStudioEditor", 800, 650, "toolbar=no,scrollbars=no,resizable=no,statusbar=no,menubar=no");
}

// ������ ����
goPopupViewer = function(pmUrl) {
  var sheight = window.screen.height - 100;
  window.open(pmUrl, "popupviewer", "width=800,height=" + sheight + ",top=0,left=0,resizable=no,scrollbars=yes");
};

function SkinOpenCommon(SkinParam1, SkinParam2) {
	var SkinOpenCommonURL = "http://music.sbs.co.kr/musicCommon/musicCommon_TotalSkin.jhtml?SkinParam1=" + SkinParam1 + "&SkinParam2=" + SkinParam2;
	var SkinPlaywindow = window.open(SkinOpenCommonURL, "SkinPlaywindow", "toolbar=no,scrollbars=no,resizable=no,statusbar=no,menubar=no,height=430,width=490,screenX=0,screenY=0,top=0,left=0");
	/*
	if (SkinPlaywindow != null) {
		if (SkinPlaywindow.opener == null) {
			SkinPlaywindow.opener = self;
		}
		else {
			SkinPlaywindow.focus();
		}
	}
	*/
}

function skinwin(url, type) {
 if (type == "1") {
         var opt = "width=700 ,height=740";
  var name = "Video";
 } else if (type == "2") {
         var opt = "width=340 ,height=214 ";
  var name = "ListenSong";
 }

        remote = window.open(url, name, opt);
        if (remote != null) {
                if (remote.opener == null) {
                        remote.opener = self;
                }
        }
}

///////// �˻��� �׼� ��ũ��Ʈ ����

		function onEnter(form)
		{
		if (event.keyCode==13)
		{
		if (!form.keyword.value) //����� ������ ó�� ����
		return false;

		onSearch(form);
		}
		}


var search_init = "false";

function onSearch(form)
{
     if (!form.keyword.value) //����� ������
          return false;

     form.QU.value = form.keyword.value;
     form.action = "http://search.sbs.co.kr/search.jsp";
     form.target = "_top";
     form.submit();
}


function initQuery() {
    document.newsearch.keyword.value = "";
    search_init = "true";
}

///////// �˻��� �׼� ��ũ��Ʈ ��

function go_Join()
{
	var login_url =  escape(top.window.location.href);
	top.window.location="http://login.sbs.co.kr/member/join/agree.jsp?etc1=gnb_menu&etc2=join";
}

function go_login()
{
	if(getCookie("SBS_AUTH")==null)
	{
		var login_url =  escape( top.window.location.href);
        //var login_url =  "http://myzone.sbs.co.kr";
		//top.window.location="http://login.sbs.co.kr/Login/Login.jhtml?Login_ReturnURL="+login_url;
		top.window.location="http://login.sbs.co.kr/Login/login.jsp?etc1=gnb_menu&etc2=login&Login_ReturnURL="+login_url;
	}
	else
	{
	    alert("�̹� �α��� ���Դϴ�.");
	  	top.window.location.reload();
    }
}

function go_logout()
{
	var login_url =  escape(top.window.location.href);
	top.window.location="http://login.sbs.co.kr/Login/logout.jsp?etc1=gnb_menu&etc2=logout&Logout_ReturnURL="+login_url;
}

function myzone() {
	top.location.href="http://myzone.sbs.co.kr/index.jsp?etc1=gnb_menu&etc2=myzone";
}

function go_Update()
{
	var login_url =  escape(top.window.location.href);
	top.window.location="http://login.sbs.co.kr/member/update/update_index.jsp?etc1=gnb_menu&etc2=member_update";
}

function go_findPasswd()
{
	var login_url =  escape(top.window.location.href);
	top.window.location="http://login.sbs.co.kr/passwd/findpwd_form.jsp";
}
function go_pop_findPasswd()
{
	var login_url =  escape(top.window.location.href);
	top.window.location="http://login.sbs.co.kr/passwd/pop_findpwd_form.jsp";
}
function go_findId()
{
	var login_url =  escape(top.window.location.href);
	top.window.location="http://login.sbs.co.kr/passwd/find_id.jsp";
}

function go_allview()
{
	var login_url =  escape(top.window.location.href);
	top.window.location="http://tv.sbs.co.kr/sitemap/sitemap.jsp";
}

function go_customer()
{
	var login_url =  escape(top.window.location.href);
	top.window.location="http://cs.sbs.co.kr/customer_main.jsp";
}


/**
	* @param	uri		���
	* @param	alias 		������ �����
	* @param	width		������ ���� ũ��
	* @param	height		������ ���� ũ��
	*/
function openWin(url, alias, width, height, option)
	{
		var browser = navigator.appName;
		var left = screen.width / 2 - width / 2;
		var top = screen.height / 2 - height / 2;

		if ( browser == "Microsoft Internet Explorer" )
//			window.open(url,alias, option+", width=" + width +", height=" + height + ", left=" + left + " , top=" + top);
			window.open(url,alias, option+", width=" + width +", height=" + height + ", left=" + "100" + " , top=" + "100");
		if ( browser == "Netscape" )
			window.open(url,alias, "'"+option+",width="+ width +",height="+height+",screenX="+left+",screenY="+top+"'");
		return;
}

// NeTV BOX ����
function netvBoxOpen()
{
	url = "http://netv.sbs.co.kr/sbox/sbox_my.jsp";
	window.open(url);
//	features = "toolbar=no,scrollbars=yes,statusbar=no,menubar=no";
//	openWin(url, "NeTvBox", 500, 500, features);
}

/*
  Func. Name : Direct Flash Write

  ex) flashWrite(url, w, h, vars, win, alt);
  �� alt : Alternative Text or Image
  ex)
  		<script type="text/javascript">
			flashWrite("http://img.sbs.co.kr/vobos/wsg/images/menu/culture.swf?pageValue=3","975","47","","transparent","�÷��� �޴�");
		</script>
*/
function flashWrite(url, w, h, vars, win, alt)
{

  var id = url.split("/")[url.split("/").length-1].split(".")[0];
  if(vars == null) vars="";
  if(win == null) win="opaque";

  var objStr = "     <object ";

  if(navigator.appName.match("Internet Explorer")){
      objStr += "classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0'";
  } else {
      objStr += "type='application/x-shockwave-flash' data='"+url+"' ";
  }
  if(w.substring(w.length-1, w.length) == '%') {
	  objStr +="     id='"+id+"' style='width:"+w+"; height:"+h+"px;'>";
  } else {
      objStr +="     id='"+id+"' style='width:"+w+"px; height:"+h+"px;'>";
  }
      objStr +="    <param name='base' value='.' >";
      objStr+= "    <param name='showLiveConnect' value='true' >";
      objStr +="    <param name='allowScriptAccess' value='always' >";
      objStr +="    <param name='movie' value='"+url+"' >";
      objStr +="    <param name='FlashVars' value='"+vars+"' >";
      objStr +="    <param name='wmode' value='"+win+"' >";
      objStr +="    <param name='menu' value='false' >";
      objStr +="    <param name='quality' value='high' >";
      objStr +="    <p"+">"+alt+"</"+"p>";
      objStr +="  </"+"object>";

  document.write(objStr);
}

function embedFlash(id, url, width, height, alt, flashVars, wmode) {
	var aParam = new Array();
	aParam["id"] = id;
	aParam["url"] = url;
	aParam["width"] = width;
	aParam["height"] = height;
	aParam["alt"] = alt;
	aParam["flashVars"] = flashVars;
	aParam["wmode"] = wmode;

	getEmbedFlash(aParam);
}

function getEmbedFlash(params) {
	var id = params["id"] != null ? params["id"] : "";
	var url = params["url"] != null ? params["url"] : "";
	var width = params["width"] != null ? params["width"] : "";
	var height = params["height"] != null ? params["height"] : "";
	var alt = params["alt"] != null ? params["alt"] : "";
	var flashVars = params["flashVars"] != null ? params["flashVars"] : "";
	var wmode = params["wmode"] != null ? params["wmode"] : "window";
	var access = params["access"] != null ? params["access"] : "always";

	var str = '' +
	'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,115,0" width="' + width + '" height="' + height + '" id="' + id + '">' +
		'<param name="showLiveConnect" value="true" />' +
		'<param name="allowScriptAccess" value="always" />' +
		'<param name="quality" value="high" />' +
		'<param name="menu" value="false" />' +
		'<param name="movie" value="' + url + '" />' +
		'<param name="wmode" value="' + wmode + '" />' +
		'<param name="FlashVars" value="' + flashVars + '" />' +
		'<!--[if !IE]>-->' +
		'<object type="application/x-shockwave-flash" data="' + url + '" width="' + width + '" height="' + height + '" name="' + id + '" >' +
			'<param name="showLiveConnect" value="true" />' +
			'<param name="allowScriptAccess" value="' + access +'" />' +
			'<param name="quality" value="high" />' +
			'<param name="menu" value="false" />' +
			'<param name="wmode" value="' + wmode + '" />' +
			'<param name="FlashVars" value="' + flashVars + '" />' +
			'<param name="pluginurl" value="http://www.macromedia.com/go/getflashplayer" />' +
		'<!--<![endif]-->' +
			'<div class="alt-content alt-' + id + '">' + alt + '</div>' +
		'<!--[if !IE]>-->' +
		'</object>' +
		'<!--<![endif]-->' +
	'</object>';
	document.write(str);
}

function GetEmbed(url,id,width,height,vars) {
    vars = vars ? vars : "";
    if (getIECheck()) {
        var txt = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+width+'" height="'+height+'" id="'+id+'" align="middle">';
        txt+= '<param name="allowScriptAccess" value="always" />';
        txt+= '<param name="flashVars" value="'+vars+'" />';
        txt+= '<param name="movie" value="'+url+'" />';
        txt+= '<param name="quality" value="high" />';
        txt+= '<param name="wmode" value="transparent" />';
        txt+= '<embed src="'+url+'" quality="high" wmode="transparent" style="width:'+width+'px; height:'+height+'px;" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashVars="'+vars+'"></embed>';
        txt+= '</object>';

        document.write(txt);
				eval("window." + id + " = document.getElementById('" + id + "');");
    } else {
        txt = '<embed id="'+id+'" src="'+url+'" quality="high" wmode="transparent" style="width:'+width+'px; height:'+height+'px;" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashVars="'+vars+'"></embed>';
        document.write(txt);
    }
}

/*
	SBS ���� ���� Ȯ���� �÷��� �̺�Ʈ ��ʿ��� ���
	�÷����� ��� �ִ� div �� �Ӽ����� �����Ѵ�
*/
function rePosition(flag) {
	if (flag == "on") {
		getObject("flashEventArea1").style.width = "829px";
		getObject("flashEventArea1").style.left = "0";
		getObject("flashEventArea2").style.left = "0";
	}

	if (flag == "off") {
		getObject("flashEventArea1").style.width = "80px";
		getObject("flashEventArea1").style.left = "749px";
		getObject("flashEventArea2").style.left = "-749px";
	}
}

/*
	SBS ���� ���� Ȯ���� �÷��� ������ ���� ���
	�÷����� ��� �ִ� div �� �Ӽ����� �����Ѵ�
*/
function rePosition2(flag) {
	if (flag == "on") {
		getObject("EventArea1").style.width = "350px";
		getObject("EventArea1").style.height = "350px";
	}

	if (flag == "off") {
		getObject("EventArea1").style.width = "250px";
		getObject("EventArea1").style.height = "250px";
	}
}

getIECheck = function() {
	if( /*@cc_on!@*/false ) {
		return true;
	} else {
		return false;
	}
};

getIEVersion = function() {
	return navigator.appVersion.match(/MSIE (.\..)/)[1] ;
};

setDisplay = function(pmObjId, pmDisplay) {
	if(getObject(pmObjId) != null) {
		if(pmDisplay == "") {
			if(getObject(pmObjId).style.display == "" || getObject(pmObjId).style.display == "none") {
				getObject(pmObjId).style.display = "block";
			} else {
				getObject(pmObjId).style.display = "none";
			}
		} else {
			getObject(pmObjId).style.display = pmDisplay;
		}
	}
};

setDisplayOne = function(pmObjIdPrefix, pmDisplayObj) {
	var objCnt = 0;
	while(true) {
		if(getObject(pmObjIdPrefix+(objCnt+1).toString()) == null) break;

		objCnt++;

		if(objCnt > 10) break;
	}

	for(var i=0; i<objCnt; i++) {
		var objId = (pmObjIdPrefix+(i+1)).toString();

		if(objId == pmDisplayObj) {
			getObject(objId).style.display = "block";
		} else {
			getObject(objId).style.display = "none";
		}
	}
};

setVisibility = function(pmObjId, pmVisibility) {
	if(pmVisibility == "") {
		if(getObject(pmObjId).style.visibility == "visible") {
			getObject(pmObjId).style.visibility = "hidden";
		} else {
			getObject(pmObjId).style.visibility = "visible";
		}
	} else {
		getObject(pmObjId).style.visibility = pmVisibility;
	}
};

setPreNext = function(pmObjName, pmDirection) {
	var CurDisplayNo = 1;
	var objCnt = getObjects(pmObjName).length;

	for(var i=0; i<objCnt; i++) {
		if(getObjects(pmObjName)[i].style.display == "" || getObjects(pmObjName)[i].style.display == "block") {
			getObjects(pmObjName)[i].style.display = "none";
			CurDisplayNo = i;
			break;
		}
	}

	if(pmDirection == "pre") {
		CurDisplayNo--;

		if(getObjects(pmObjName)[CurDisplayNo] != null) {
			getObjects(pmObjName)[CurDisplayNo].style.display = "block";
		} else {
			getObjects(pmObjName)[objCnt-1].style.display = "block";
		}
	} else if(pmDirection == "next") {
		CurDisplayNo++;

		if(getObjects(pmObjName)[CurDisplayNo] != null) {
			getObjects(pmObjName)[CurDisplayNo].style.display = "block";
		} else {
			getObjects(pmObjName)[0].style.display = "block";
		}
	}
};

setPreNextId = function(pmObjIdPrefix, pmDirection) {
	var CurDisplayNo = 1;
	var whileCnt = 0;
	while(true) {
		if(getObject(pmObjIdPrefix+(whileCnt+1).toString()) == null) break;

		whileCnt++;

		if(whileCnt > 10) break;
	}

	var objCnt = whileCnt;

	for(var i=1; i<=objCnt; i++) {
		if(getObject(pmObjIdPrefix+i.toString()).style.display == "" || getObject(pmObjIdPrefix+i.toString()).style.display == "block") {
			getObject(pmObjIdPrefix+i.toString()).style.display = "none";
			CurDisplayNo = i;
			break;
		}
	}

	if(pmDirection == "pre") {
		CurDisplayNo--;

		if(getObject(pmObjIdPrefix+CurDisplayNo.toString()) != null) {
			getObject(pmObjIdPrefix+CurDisplayNo.toString()).style.display = "block";
		} else {
			getObject(pmObjIdPrefix+objCnt.toString()).style.display = "block";
		}
	} else if(pmDirection == "next") {
		CurDisplayNo++;

		if(getObject(pmObjIdPrefix+CurDisplayNo.toString()) != null) {
			getObject(pmObjIdPrefix+CurDisplayNo.toString()).style.display = "block";
		} else {
			getObject(pmObjIdPrefix+"1").style.display = "block";
		}
	}
};

var iframeHeight = 0;

setIframeResize = function(pmObjId) {
	/*
	var objBodyIframe = getObject(pmObjId);

	if(objBodyIframe != null) {
		if(iframeHeight == 0) iframeHeight = objBodyIframe.height;

		try {
			if (body_iframe.document.domain != "sbs.co.kr")
			return;
		}	catch(e) {
			objBodyIframe.height = iframeHeight;
			return;
		}

		if(getIECheck()) { //���ͳ��ͽ����η��� ���
			objBodyIframeBody = body_iframe.document.body;
			objBodyIframe.height = objBodyIframeBody.scrollHeight + (objBodyIframeBody.offsetHeight - objBodyIframeBody.clientHeight);
		} else { //��Ÿ ���������� ���
			objBodyIframeBody = objBodyIframe.contentDocument.body;
			objBodyIframe.height = objBodyIframeBody.offsetHeight;
		}
	}
	*/

	var objBodyIframe = document.getElementById(pmObjId);

	if(objBodyIframe != null) {
		if(iframeHeight == 0) iframeHeight = objBodyIframe.height;

		try {
			if (objBodyIframe.contentWindow.document.domain != "sbs.co.kr")
			return;
		}	catch(e) {
			objBodyIframe.height = iframeHeight;
			return;
		}

		if(getIECheck()) { //���ͳ��ͽ����η��� ���
			objBodyIframeBody = objBodyIframe.contentWindow.document.body;
			objBodyIframe.height = objBodyIframeBody.scrollHeight + (objBodyIframeBody.offsetHeight - objBodyIframeBody.clientHeight);
		} else { //��Ÿ ���������� ���
			objBodyIframeBody = objBodyIframe.contentDocument.documentElement;
			objBodyIframe.height = objBodyIframeBody.offsetHeight > 0 ? objBodyIframeBody.offsetHeight : objBodyIframeBody.scrollHeight;
		}
	}
};

setAdReload = function(pmObjId) {
	if(getIECheck()) { //���ͳ��ͽ����η��� ���
		getObject(pmObjId).contentWindow.location.reload();
		//if(getObject("pop_ad") != null) getObject("pop_ad").contentWindow.location.reload();
	} else { //��Ÿ ���������� ���
		getObject(pmObjId).contentDocument.location.reload();
		//if(getObject("pop_ad") != null) getObject("pop_ad").contentDocument.location.reload();
	}
};

var adReload = false;

setResizeReLoad = function(pmResizeObjId, pmReloadObjId) {
	setIframeResize(pmResizeObjId);

	if(getObject(pmReloadObjId) != null) {
		if(getIECheck() && getObject(pmReloadObjId).readyState != "complete") return false;

		if(adReload) {
			setAdReload(pmReloadObjId);
		} else {
			adReload = true;
		}
	}
};

/** 
 * ETV ���Խ��� ���� ���� �˾�
 */
var etvBoardWin;
function viewOldBoard(bd_no){
    var url = "http://etv.medianet.sbs.co.kr/html/front/board/board_list.jsp?bd_no="+bd_no+"&mode=sbs&bltin_no=";
    etvBoardWin = window.open(url,'etvBoardWin','width=680,height=500,resizable=1,scrollbars=auto,noresize');
    etvBoardWin.focus();
}

