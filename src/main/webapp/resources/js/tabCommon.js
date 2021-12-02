function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		};
	}
}

var docHead = document.getElementsByTagName("head");
var newElement = document.createElement("link");

newElement.rel = "stylesheet";
newElement.type = "text/css";
newElement.href = "http://img.sbs.co.kr/s9/common/css/tabGuide.css";
docHead[0].appendChild(newElement);

var currentUrl		= top.window.location.href;	// url �޾ƿ���
var categoryStr		= ""; //���� ī�װ�
var subCategoryStr	= ""; // ����ī�װ�

// tabmenu ������ ���� �̹��� ���� ������ �����Ѵ�
var tabMenu1	= "";		// ����Ȩ
var tabMenu2	= "";		// �ٽú���
var tabMenu3	= "";		// ��������
var tabMenu4	= "";		// ���̽�
var tabMenu5	= "";		// ������
//var tabMenu6	= "";		// 6.2 ���漱��
var tabMenu7	= "";		// ������
var tabMenu8	= "";		// ��α�
var tabMenu9	= "";		// 2010 ������ø���
var tabMenu10	= "";		// SBS CNBC ����
var tabMenu11	= "";		// ���ڽ��伣(������)
var tabMenu14	= "";		// ����
//var tabMenu15	= "";		// 19�� �Ѽ�

var onloadYn	= "Y";		//������ �ε��� �� �̴��� Ȯ��

// =========================================�ٽú��� ����ī�װ�===================================
 if( currentUrl.indexOf("/review/") > -1 || currentUrl.indexOf("/radio/") > -1){
	tabMenu1 = "01";
	tabMenu2 = "02";
	tabMenu3 = "03";
	tabMenu4 = "01";
	tabMenu5 = "01";
	// tabMenu6 = "01";
	tabMenu7 = "01";
	tabMenu8 = "01";
	tabMenu9 = "01";
	tabMenu10 = "01";
	tabMenu11 = "01";
	tabMenu14 = "01";
//	tabMenu15 = "01";


    //  <---------------�ٽú��� ���� ī�װ�----------->
	subCategoryStr = "";
	subCategoryStr += "	<ul class='type05_01'>				";

	if( (currentUrl.indexOf("prog_cd=R1") > -1) || (currentUrl.indexOf("8news_index.jsp") > -1) ){
		subCategoryStr += "	    <li class='first on'><a href='http://news.sbs.co.kr/review/indexes/8news_index.jsp'>8�ô���</a></li>	";
	}else{
		subCategoryStr += "   	<li class='first'><a href='http://news.sbs.co.kr/review/indexes/8news_index.jsp'>8�ô���</a></li>	";
	}

	if( (currentUrl.indexOf("prog_cd=R2") > -1) || currentUrl.indexOf("morning_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/morning_index.jsp'>��ħ���մ���</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/morning_index.jsp'>��ħ���մ���</a></li>	";
	}
	if( (currentUrl.indexOf("prog_cd=RD") > -1) ||currentUrl.indexOf("12news_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/12news_index.jsp'>12�ô���</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/12news_index.jsp'>12�ô���</a></li>	";
	}

	if( (currentUrl.indexOf("prog_cd=R4") > -1) ||currentUrl.indexOf("livetoday_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/livetoday_index.jsp'>�����۷��̵�</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/livetoday_index.jsp'>�����۷��̵�</a></li>	";
	}

	if( (currentUrl.indexOf("news_nightline_view.jsp") > -1) ||currentUrl.indexOf("nightline_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/nightline_index.jsp'>����Ʈ����</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/nightline_index.jsp'>����Ʈ����</a></li>	";
	}

	if( (currentUrl.indexOf("prog_cd=R6") > -1) ||currentUrl.indexOf("sports_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/sports_index.jsp'>����������</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/sports_index.jsp'>����������</a></li>	";
	}

	if( (currentUrl.indexOf("prog_cd=RI") > -1) ||currentUrl.indexOf("indepth21_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/indepth21_index.jsp'>����21</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/indepth21_index.jsp'>����21</a></li>	";
	}

	if( (currentUrl.indexOf("prog_cd=RB") > -1) ||currentUrl.indexOf("sbsspecial_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/sbsspecial_index.jsp'>�����</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/sbsspecial_index.jsp'>�����</a></li>	";
	}

	if( currentUrl.indexOf("news_listen.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/radio/news_listen.jsp'>��������</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/radio/news_listen.jsp'>��������</a></li>	";
	}
	subCategoryStr += "	</ul>							";
// ========================================�������� ���� ī�װ�===================================
}else if( currentUrl.indexOf("/fresh/") > -1 ){
	tabMenu1 = "01";
	tabMenu2 = "01";
	tabMenu3 = "02";
	tabMenu4 = "03";
	tabMenu5 = "01";
	// tabMenu6 = "01";
	tabMenu7 = "01";
	tabMenu8 = "01";
	tabMenu9 = "01";
	tabMenu10 = "01";
	tabMenu11 = "01";
	tabMenu14 = "01";
//	tabMenu15 = "01";

    //  <---------------�������� ���� ī�װ�----------->
	subCategoryStr = ""; //����ī���ڸ� �ʱ�ȭ
	subCategoryStr += "	<ul class='type05_02'>				";
    subCategoryStr += "	</ul>							";
// ========================================�ǰ�TV ���� ī�װ�===================================
}else if( currentUrl.indexOf("/tv/") > -1 ) {
	tabMenu1 = "01";
	tabMenu2 = "01";
	tabMenu3 = "01";
	tabMenu4 = "01";
	tabMenu5 = "01";
	// tabMenu6 = "02";
	tabMenu7 = "03";
	tabMenu8 = "01";
	tabMenu9 = "01";
	tabMenu10 = "01";
	tabMenu11 = "01";
	tabMenu14 = "01";
//	tabMenu15 = "01";

// ========================================���̽� ���� ī�װ�===================================
}else if( currentUrl.indexOf("/hotissue/") > -1 ||  currentUrl.indexOf("/thema/") > -1 ) {
	tabMenu1 = "01";
	tabMenu2 = "01";
	tabMenu3 = "01";
	tabMenu4 = "02";
	tabMenu5 = "01";
	// tabMenu6 = "01";
	tabMenu7 = "01";
	tabMenu8 = "01";
	tabMenu9 = "01";
	tabMenu10 = "01";
	tabMenu11 = "01";
	tabMenu14 = "01";
//	tabMenu15 = "01";
	               //  <---------------���̽� ���� ī�װ�----------->

	subCategoryStr = ""; //����ī���ڸ� �ʱ�ȭ
	subCategoryStr += "	<ul class='type05_03'>				";

    if( (currentUrl.indexOf("hotissue_list_new.jsp") > -1) || (currentUrl.indexOf("news_hot_list.jsp") > -1) ){
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/hotissue/hotissue_list_new.jsp'>���̽�</a></li>	";
	}else{
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/hotissue/hotissue_list_new.jsp'>���̽�</a></li>	";
	}

	 if( (currentUrl.indexOf("/thema/") > -1) ){
		subCategoryStr += "	<li class='on'><a href='http://news.sbs.co.kr/thema/'>�׸�/��ȹ</a></li>	";
	}else{
		subCategoryStr += "	<li><a href='http://news.sbs.co.kr/thema/'>�׸�/��ȹ</a></li>	";
	}

	//if( (currentUrl.indexOf("news_issue_poll.jsp") > -1) ){
	//	subCategoryStr += "	<li class='on'><a href='http://news.sbs.co.kr/issue/news_issue_poll.jsp'>�̽���</a></li>	";
	//}else{
	//	subCategoryStr += "	<li><a href='http://news.sbs.co.kr/issue/news_issue_poll.jsp'>�̽���</a></li>	";
	//}
	subCategoryStr += "	</ul>							";

// ========================================������ ���� ī�װ�===================================
}else if( currentUrl.indexOf("sports_index.jsp") > -1 ){
	tabMenu1 = "01";
	tabMenu2 = "01";
	tabMenu3 = "01";
	tabMenu4 = "01";
	tabMenu5 = "02";
	// tabMenu6 = "01";
	tabMenu7 = "01";
	tabMenu8 = "01";
	tabMenu9 = "01";
	tabMenu10 = "01";
	tabMenu11 = "01";
	tabMenu14 = "01";
//	tabMenu15 = "01";

	  // ========================================uporter===================================
  }else if( currentUrl.indexOf("/uporter/") > -1 ){
	tabMenu1 = "01";
	tabMenu2 = "01";
	tabMenu3 = "01";
	tabMenu4 = "01";
	tabMenu5 = "01";
	// tabMenu6 = "01";
	tabMenu7 = "02";
	tabMenu8 = "01";
	tabMenu9 = "01";
	tabMenu10 = "01";
	tabMenu11 = "01";
	tabMenu14 = "01";
//	tabMenu15 = "01";

	  // ======================================== ���� ���伣 ===================================
  } else if (currentUrl.indexOf("/journalist/") > -1) {
	tabMenu1 = "01";
	tabMenu2 = "01";
	tabMenu3 = "01";
	tabMenu4 = "01";
	tabMenu5 = "01";
	// tabMenu6 = "01";
	tabMenu7 = "01";
	tabMenu8 = "01";
	tabMenu9 = "01";
	tabMenu10 = "01";
	tabMenu11 = "02";
	tabMenu14 = "01";
//	tabMenu15 = "01";

	subCategoryStr = ""; //����ī���ڸ� �ʱ�ȭ
	subCategoryStr += "	<ul class='type05_03' style='padding-left: 330px'>				";
    if ((currentUrl.indexOf("news_file_index.jsp") > -1)) {
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp'>��������</a></li>	";
	} else {
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp'>��������</a></li>	";
	}

    if ((currentUrl.indexOf("vod_talk_index.jsp") > -1)) {
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/journalist/vod_talk_index.jsp'>������ũ</a></li>	";
	} else {
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/journalist/vod_talk_index.jsp'>������ũ</a></li>	";
	}

	if ((currentUrl.indexOf("news_file_index.jsp?category=NB") > -1)) {
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp?category=NB'>�����긮��</a></li>	";
	} else {
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp?category=NB'>�����긮��</a></li>	";
	}

	
	if ((currentUrl.indexOf("news_bodocenter.jsp") > -1)) {
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/journalist/news_bodocenter.jsp'>��������</a></li>	";
	} else {
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/journalist/news_bodocenter.jsp'>��������</a></li>	";
	}
	
	if ((currentUrl.indexOf("anchor_main.jsp") > -1)) {
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/journalist/anchor_main.jsp'>��Ŀ��</a></li>	";
	} else {
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/journalist/anchor_main.jsp'>��Ŀ��</a></li>	";
	}

	subCategoryStr += "	</ul>		";

  // ========================================����===================================
  } else if (currentUrl.indexOf("/entertain_index.html") > -1) {
	tabMenu1 = "01";
	tabMenu2 = "01";
	tabMenu3 = "01";
	tabMenu4 = "01";
	tabMenu5 = "01";
	// tabMenu6 = "01";
	tabMenu7 = "01";
	tabMenu8 = "01";
	tabMenu9 = "01";
	tabMenu10 = "01";
	tabMenu11 = "01";
	tabMenu14 = "02";
//	tabMenu15 = "01";


  // ========================================�׿ܿ� URl(���� Ȩ����)===================================
  } else {

	tabMenu1 = "02";
	tabMenu2 = "03";
	tabMenu3 = "01";
	tabMenu4 = "01";
	tabMenu5 = "01";
	// tabMenu6 = "01";
	tabMenu7 = "01";
	tabMenu8 = "01";
	tabMenu9 = "01";
	tabMenu10 = "01";
	tabMenu11 = "01";
	tabMenu14 = "01";
//	tabMenu15 = "01";

    //  <---------------����Ȩ ���� ī�װ�----------->
	subCategoryStr  = "";

	subCategoryStr += "	<ul>							";

	if( (currentUrl.indexOf("news_all_list.jsp") > -1) ){
		subCategoryStr += "	    <li class='first on'><a href='http://news.sbs.co.kr/section_news/news_all_list.jsp' target='_top'>�Ӻ�</a></li>	";
	}else{
		subCategoryStr += "   	<li class='first'><a href='http://news.sbs.co.kr/section_news/news_all_list.jsp' target='_top'>�Ӻ�</a></li>	";
	}

	if( currentUrl.indexOf("section.jsp") > -1  && (currentUrl.indexOf("section=01") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/section.jsp?section=01' target='_top'>��ġ</a></li> ";
	}else{
		subCategoryStr += "	   <li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=01' target='_top'>��ġ</a></li>";
	}

	if( currentUrl.indexOf("section.jsp") > -1  &&(currentUrl.indexOf("section=02") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/section.jsp?section=02' target='_top'>����</a></li>";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=02' target='_top'>����</a></li>	";
	}

	if( currentUrl.indexOf("section.jsp") > -1  && (currentUrl.indexOf("section=03") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/section.jsp?section=03' target='_top'>��ȸ</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=03' target='_top'>��ȸ</a></li>	";
	}

	if( currentUrl.indexOf("section.jsp") > -1  && (currentUrl.indexOf("section=14") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/indexes/entertain_index.html' target='_top'>����</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/indexes/entertain_index.html' target='_top'>����</a></li>	";
	}

	if( currentUrl.indexOf("section.jsp") > -1  && (currentUrl.indexOf("section=07") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/section.jsp?section=07' target='_top'>����</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=07' target='_top'>����</a></li>	";
	}

	if( currentUrl.indexOf("sports_index.jsp") > -1  || (currentUrl.indexOf("section=09") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/indexes/sports_index.jsp' target='_top'>������</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/indexes/sports_index.jsp' target='_top'>������</a></li>	";
	}

	if( currentUrl.indexOf("section.jsp") > -1  && (currentUrl.indexOf("section=08") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/section.jsp?section=08' target='_top'>��ȭ/����</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=08' target='_top'>��ȭ/����</a></li>	";
	}

	/*
	if( currentUrl.indexOf("/journalist/") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp' target='_top'>��������</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp' target='_top'>��������</a></li>	";
	}
	*/
	if( currentUrl.indexOf("/doctor_column/") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/doctor_column/indexes/doctor_column_index.jsp' target='_top'>�ǰ�</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/doctor_column/indexes/doctor_column_index.jsp' target='_top'>�ǰ�</a></li>	";
	}

	if( currentUrl.indexOf("news_weather.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/news_weather.jsp' target='_top'>����</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/news_weather.jsp' target='_top'>����</a></li>	";
	}

	if( currentUrl.indexOf("news_newsranking.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/news_newsranking.jsp' target='_top'>������ŷ</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/news_newsranking.jsp' target='_top'>������ŷ</a></li>	";
	}

	subCategoryStr += " </ul>	";

}


// ========================================���� ī�� �� �޴�===================================
categoryStr = "	<li><a href='http://news.sbs.co.kr/indexes/news_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu01_"+tabMenu1+".gif' alt='����Ȩ' onMouseOver='tabMouseOver(1);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/review/indexes/8news_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu02_"+tabMenu2+".gif' alt='�ٽú���' onMouseOver='tabMouseOver(2);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/fresh/indexes/fresh_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu03_"+tabMenu3+".gif' alt='��������' onMouseOver='tabMouseOver(3);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/hotissue/hotissue_list_new.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu04_"+tabMenu4+".gif' alt='���̽�' onMouseOver='tabMouseOver(4);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/indexes/entertain_index.html'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu14_"+tabMenu14+".gif' alt='����' onMouseOver='tabMouseOver(14);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/indexes/sports_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu05_"+tabMenu5+".gif' alt='������' onMouseOver='tabMouseOver(5);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu11_"+tabMenu11+".gif' alt='���ڽ��伣' onMouseOver='tabMouseOver(11);'></a></li> ";
//categoryStr += "	<li><a href='http://news.sbs.co.kr/election/2012_nation/'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu15_"+tabMenu15+".gif' alt='19���Ѽ�' onMouseOver='tabMouseOver(15);'></a></li> ";
//categoryStr += "	<li><a href='http://news.sbs.co.kr/hotissue/hotissue_s.jsp?uniq_no=10000010459'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu12_" + tabMenu6 + ".gif' alt='6.2���漱��' onmouseover='tabMouseOver(6)'></a></li> ";
categoryStr += "	<li class='main_menu'> ";
categoryStr += "		<!-- <a href=''><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu08_" + "tabMenu6 " +".gif' alt='�ǰ�TV' onMouseOver='tabMouseOver(6);'></a><a href='#'>--><a href='http://news.sbs.co.kr/livecapture/list.jsp' target='SBS_Window'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu13_"+tabMenu7+".gif' alt='��������'  onMouseOver='tabMouseOver(7);' ></a><a href='#'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu07_"+tabMenu8+".gif' alt='��α�' onMouseOver='tabMouseOver(8);'></a><a href='http://sbscnbc.sbs.co.kr' target='SBS_Window'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu10_01.gif' alt='CNBC ����' onMouseOver='tabMouseOver(10);'></a>";
categoryStr += "	</li> ";


// ========================��� �߰� - ī�װ�=================================
var innerCategoryStr=new Array();

for(var i=1;i<=14;i++){
innerCategoryStr[i]="";
innerCategoryStr[i]+="<ul id='tab_style_type04'>";
innerCategoryStr[i]+=topCategoryMenu(i);
innerCategoryStr[i]+="</ul>";
innerCategoryStr[i]+="<div id='tab_style_type05'>";
innerCategoryStr[i]+=topSubCategoryMenu(i);
innerCategoryStr[i]+="	<div class='weather'>";
innerCategoryStr[i]+="	</div>";
innerCategoryStr[i]+="</div>";
}

function createTabMenu(){
	document.getElementById('newsHome').innerHTML=innerCategoryStr[1];
	document.getElementById('newsReview').innerHTML=innerCategoryStr[2];
	document.getElementById('newsFresh').innerHTML=innerCategoryStr[3];
	document.getElementById('newsHotissue').innerHTML=innerCategoryStr[4];
	document.getElementById('newsSports').innerHTML=innerCategoryStr[5];
	document.getElementById('newsUporter').innerHTML=innerCategoryStr[7];
	document.getElementById('newsBlog').innerHTML=innerCategoryStr[8];
	document.getElementById('newsCNBC').innerHTML=innerCategoryStr[10];
	document.getElementById('journalist').innerHTML=innerCategoryStr[11];
	document.getElementById('newsEntertain').innerHTML=innerCategoryStr[14];
}

function tabOnload(){
	
	//�켱 �����ִ� element �� ��� ����
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsHome'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsReview'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsFresh'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsHotissue'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsSports'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsUporter'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsBlog'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsCNBC'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('journalist'));
	
	//element �߰�
	var newDiv=null;

	newDiv=document.createElement('div');
	newDiv.id="newsHome";
	newDiv.style.display="none";
	document.getElementById('newsTabBlock').appendChild(newDiv);
	newDiv=null;
	newDiv=document.createElement('div');
	newDiv.id="newsReview";
	newDiv.style.display="none";
	document.getElementById('newsTabBlock').appendChild(newDiv);
	newDiv=null;
	newDiv=document.createElement('div');
	newDiv.id="newsFresh";
	newDiv.style.display="none";
	document.getElementById('newsTabBlock').appendChild(newDiv);
	newDiv=null;
	newDiv=document.createElement('div');
	newDiv.id="newsHotissue";
	newDiv.style.display="none";
	document.getElementById('newsTabBlock').appendChild(newDiv);
	newDiv=null;
	newDiv=document.createElement('div');
	newDiv.id="newsEntertain";
	newDiv.style.display="none";
	document.getElementById('newsTabBlock').appendChild(newDiv);
	newDiv=null;
	newDiv=document.createElement('div');
	newDiv.id="newsSports";
	newDiv.style.display="none";
	document.getElementById('newsTabBlock').appendChild(newDiv);
	newDiv=null;
	newDiv=document.createElement('div');
	newDiv.id="newsUporter";
	newDiv.style.display="none";
	document.getElementById('newsTabBlock').appendChild(newDiv);
	newDiv=null;
	newDiv=document.createElement('div');
	newDiv.id="newsBlog";
	newDiv.style.display="none";
	document.getElementById('newsTabBlock').appendChild(newDiv);
	newDiv=null;
	newDiv=document.createElement('div');
	newDiv.id="newsCNBC";
	newDiv.style.display="none";
	document.getElementById('newsTabBlock').appendChild(newDiv);
	newDiv=null;
	newDiv=document.createElement('div');
	newDiv.id="journalist";
	newDiv.style.display="none";
	document.getElementById('newsTabBlock').appendChild(newDiv);

	onloadYn="Y";
}



//addLoadEvent(tabOnload);
//addLoadEvent(createTabMenu);

function topSubCategoryMenu(tab){
	var resultValue="";
	if (tab == 1){
		resultValue+="		<ul>";
		resultValue+="			<li class='first'><a href='http://news.sbs.co.kr/section_news/news_all_list.jsp'>�Ӻ�</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=01'>��ġ</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=02'>����</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=03'>��ȸ</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/indexes/entertain_index.html'>����</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=07'>����</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/indexes/sports_index.html'>������</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=08'>��ȭ/����</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/doctor_column/doctor_column_index.jsp'>�ǰ�</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/news_weather.jsp'>����</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/news_newsranking.jsp'>������ŷ</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 2){
		resultValue+="		<ul>";
		resultValue+="			<li class='first'><a href='http://news.sbs.co.kr/review/indexes/8news_index.html'>8�ô���</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/morning_index.html'>��ħ���մ���</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/12news_index.html'>12�ô���</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/livetoday_index.html'>�����۷��̵�</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/nightline_index.html'>����Ʈ����</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/sports_index.html'>����������</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/indepth21_index.html'>����21</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/sbsspecial_index.html'>�����</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/radio/news_listen.jsp'>��������</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 3){
		resultValue="";
	}else if (tab == 4){
		resultValue+="		<ul class='type05_03'>";
		resultValue+="				<li class='first'><a href='http://news.sbs.co.kr/hotissue/hotissue_list_new.jsp'>���̽�</a></li>";
		resultValue+="				<li><a href='http://news.sbs.co.kr/thema'>�׸�/��ȹ</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 5){
		resultValue+="		<ul class='type05_02'>";
		resultValue+="			<li class='first'><a href='http://news.sbs.co.kr/sports/section_sports/baseball_index.html'>�߱�</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/sports/section_sports/soccer_index.html'>�౸</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/sports/section_sports/basketvolley_index.html'>��/�豸</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/sports/section_sports/figure_index.html'>�ǰ�</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/sports/section_sports/golfgeneral_index.html'>����/�Ϲ�</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/sports/sub/sports_replay.jsp'>������TV</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/indexes/event_index.html'>�ǰ� �����</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 7) {
		resultValue="";
	}else if (tab == 8) {
		resultValue+="		<ul class='type05_04'>";
		resultValue+="			<li class='first'><a href='http://ublog.sbs.co.kr/blog/uporterBlogMain.jsp'>U���ͺ�α�</a></li>";
		resultValue+="			<li><a href='http://ublog.sbs.co.kr/blog/reporterBlogMain.jsp'>���ں�α�</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 9) {
		resultValue="";
	}else if (tab == 10) {
		resultValue="";
	}else if (tab == 11) {
		resultValue+="		<ul class='type05_02' style='padding-left: 330px'>";
		resultValue+="			<li class='first'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp'>��������</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/journalist/vod_talk_index.jsp'>������ũ</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp?category=NB'>�����긮��</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/journalist/news_bodocenter.jsp'>��������</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/journalist/anchor_main.jsp'>��Ŀ��</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 14) {
		resultValue+="";
		
	}

	return resultValue;
}

function topCategoryMenu(tab){
	var resultTabMenu1	= "";		// ����Ȩ
	var resultTabMenu2	= "";		// �ٽú���
	var resultTabMenu3	= "";		// ��������
	var resultTabMenu4	= "";		// ���̽�
	var resultTabMenu5	= "";		// ������
	//var resultTabMenu6	= "";		// 6.2 ���漱��
	var resultTabMenu7	= "";		// ������
	var resultTabMenu8	= "";		// ��α�
	var resultTabMenu9	= "";		// 2010 ������ø���
	var resultTabMenu10	= "";		// SBS CNBC ����
	var resultTabMenu11	= "";		// ���ڽ��伣(������)
	var resultTabMenu14	= "";		// ����
//	var resultTabMenu15	= "";		// 19���Ѽ�
	if (tab == 1){
		resultTabMenu1 = "02";
		resultTabMenu2 = "03";
		resultTabMenu3 = "01";
		resultTabMenu4 = "01";
		resultTabMenu5 = "01";
		// resultTabMenu6 = "01";
		resultTabMenu7 = "01";
		resultTabMenu8 = "01";
		resultTabMenu9 = "01";
		resultTabMenu10 = "01";
		resultTabMenu11 = "01";
		resultTabMenu14 = "01";
	//	resultTabMenu15 = "01";
	}else if (tab == 2){
		resultTabMenu1 = "03";
		resultTabMenu2 = "02";
		resultTabMenu3 = "03";
		resultTabMenu4 = "01";
		resultTabMenu5 = "01";
		// resultTabMenu6 = "01";
		resultTabMenu7 = "01";
		resultTabMenu8 = "01";
		resultTabMenu9 = "01";
		resultTabMenu10 = "01";
		resultTabMenu11 = "01";
		resultTabMenu14 = "01";
//		resultTabMenu15 = "01";
	}else if (tab == 3){
		resultTabMenu1 = "03";
		resultTabMenu2 = "01";
		resultTabMenu3 = "02";
		resultTabMenu4 = "03";
		resultTabMenu5 = "01";
		// resultTabMenu6 = "01";
		resultTabMenu7 = "01";
		resultTabMenu8 = "01";
		resultTabMenu9 = "01";
		resultTabMenu10 = "01";
		resultTabMenu11 = "01";
		resultTabMenu14 = "01";
	//	resultTabMenu15 = "01";
	}else if (tab == 4){
		resultTabMenu1 = "03";
		resultTabMenu2 = "01";
		resultTabMenu3 = "01";
		resultTabMenu4 = "02";
		resultTabMenu5 = "01";
		// resultTabMenu6 = "01";
		resultTabMenu7 = "01";
		resultTabMenu8 = "01";
		resultTabMenu9 = "01";
		resultTabMenu10 = "01";
		resultTabMenu11 = "01";
		resultTabMenu14 = "01";
	//	resultTabMenu15 = "01";
	}else if (tab == 5){
		resultTabMenu1 = "03";
		resultTabMenu2 = "01";
		resultTabMenu3 = "01";
		resultTabMenu4 = "01";
		resultTabMenu5 = "02";
		// resultTabMenu6 = "01";
		resultTabMenu7 = "01";
		resultTabMenu8 = "01";
		resultTabMenu9 = "01";
		resultTabMenu10 = "01";
		resultTabMenu11 = "01";
		resultTabMenu14 = "01";
	//	resultTabMenu15 = "01";
	}else if (tab == 7) {
		resultTabMenu1 = "03";
		resultTabMenu2 = "01";
		resultTabMenu3 = "01";
		resultTabMenu4 = "01";
		resultTabMenu5 = "01";
		// resultTabMenu6 = "01";
		resultTabMenu7 = "02";
		resultTabMenu8 = "01";
		resultTabMenu9 = "01";
		resultTabMenu10 = "01";
		resultTabMenu11 = "01";
		resultTabMenu14 = "01";
	//	resultTabMenu15 = "01";
	}else if (tab == 8) {
		resultTabMenu1 = "03";
		resultTabMenu2 = "01";
		resultTabMenu3 = "01";
		resultTabMenu4 = "01";
		resultTabMenu5 = "01";
		// resultTabMenu6 = "01";
		resultTabMenu7 = "01";
		resultTabMenu8 = "02";
		resultTabMenu9 = "01";
		resultTabMenu10 = "01";
		resultTabMenu11 = "01";
		resultTabMenu14 = "01";
	//	resultTabMenu15 = "01";
	}else if (tab == 9) {
		resultTabMenu1 = "03";
		resultTabMenu2 = "01";
		resultTabMenu3 = "01";
		resultTabMenu4 = "02";
		resultTabMenu5 = "01";
		// resultTabMenu6 = "01";
		resultTabMenu7 = "01";
		resultTabMenu8 = "01";
		resultTabMenu9 = "01";
		resultTabMenu10 = "01";
		resultTabMenu11 = "01";
		resultTabMenu14 = "01";
	//	resultTabMenu15 = "01";
	}else if (tab == 10) {
		resultTabMenu1 = "03";
		resultTabMenu2 = "01";
		resultTabMenu3 = "01";
		resultTabMenu4 = "01";
		resultTabMenu5 = "01";
		// resultTabMenu6 = "01";
		resultTabMenu7 = "01";
		resultTabMenu8 = "01";
		resultTabMenu9 = "01";
		resultTabMenu10 = "02";
		resultTabMenu11 = "01";
		resultTabMenu14 = "01";
	//	resultTabMenu15 = "01";
	}else if (tab == 11) {
		resultTabMenu1 = "03";
		resultTabMenu2 = "01";
		resultTabMenu3 = "01";
		resultTabMenu4 = "01";
		resultTabMenu5 = "01";
		// resultTabMenu6 = "01";
		resultTabMenu7 = "01";
		resultTabMenu8 = "01";
		resultTabMenu9 = "01";
		resultTabMenu10 = "01";
		resultTabMenu11 = "02";
		resultTabMenu14 = "01";
	//	resultTabMenu15 = "01";
	}else if (tab == 14) {
		resultTabMenu1 = "03";
		resultTabMenu2 = "01";
		resultTabMenu3 = "01";
		resultTabMenu4 = "01";
		resultTabMenu5 = "01";
		// resultTabMenu6 = "01";
		resultTabMenu7 = "01";
		resultTabMenu8 = "01";
		resultTabMenu9 = "01";
		resultTabMenu10 = "01";
		resultTabMenu11 = "01";
		resultTabMenu14 = "02";
	//	resultTabMenu15 = "01";
	}

	var resultCategoryStr = "	<li><a href='http://news.sbs.co.kr/indexes/news_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu01_"+resultTabMenu1+".gif' alt='����Ȩ' onMouseOver='tabMouseOver(1);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/review/indexes/8news_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu02_"+resultTabMenu2+".gif' alt='�ٽú���' onMouseOver='tabMouseOver(2);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/fresh/indexes/fresh_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu03_"+resultTabMenu3+".gif' alt='��������' onMouseOver='tabMouseOver(3);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/hotissue/hotissue_list_new.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu04_"+resultTabMenu4+".gif' alt='���̽�' onMouseOver='tabMouseOver(4);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/indexes/entertain_index.html'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu14_"+resultTabMenu14+".gif' alt='����' onMouseOver='tabMouseOver(14);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/indexes/sports_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu05_"+resultTabMenu5+".gif' alt='������' onMouseOver='tabMouseOver(5);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu11_"+resultTabMenu11+".gif' alt='���ڽ��伣' onMouseOver='tabMouseOver(11);'></a></li> ";
	resultCategoryStr += "	<li class='main_menu'> ";
	resultCategoryStr += "		<a href='http://news.sbs.co.kr/livecapture/list.jsp' target='SBS_Window'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu13_"+resultTabMenu7+".gif' alt='��������'  onMouseOver='tabMouseOver(7);' ></a><a href='#'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu07_"+resultTabMenu8+".gif' alt='��α�' onMouseOver='tabMouseOver(8);'></a><a href='http://sbscnbc.sbs.co.kr' target='SBS_Window'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu10_"+resultTabMenu10+".gif' alt='CNBC ����' onMouseOver='tabMouseOver(10);'></a>";
	resultCategoryStr += "	</li> ";

	return resultCategoryStr;
}

function tabMouseOver(tab) {
	//return;
try{
	if(onloadYn=="Y"){
		if (tab == 1)
		{		
			document.getElementById('newsHome').style.display		= "block";
			document.getElementById('newsReview').style.display		= "none";
			document.getElementById('newsFresh').style.display		= "none";
			document.getElementById('newsHotissue').style.display	= "none";
			document.getElementById('newsEntertain').style.display	= "none";
			document.getElementById('newsSports').style.display		= "none";
			document.getElementById('journalist').style.display		= "none";
			//document.getElementById('2010Vote').style.display		= "none";
			document.getElementById('newsUporter').style.display	= "none";
			document.getElementById('newsBlog').style.display		= "none";
			//document.getElementById('newsVenOlym').style.display	= "none";
			document.getElementById('newsCNBC').style.display		= "none";
		//	document.getElementById('newsElection').style.display	= "none";
			document.getElementById('newsDefaultTab').style.display	= "none";
		}
		else if (tab == 2)
		{
			document.getElementById('newsHome').style.display		= "none";
			document.getElementById('newsReview').style.display		= "block";
			document.getElementById('newsFresh').style.display		= "none";
			document.getElementById('newsHotissue').style.display	= "none";
			document.getElementById('newsEntertain').style.display	= "none";
			document.getElementById('newsSports').style.display		= "none";
			document.getElementById('journalist').style.display		= "none";
			//document.getElementById('2010Vote').style.display		= "none";
			document.getElementById('newsUporter').style.display	= "none";
			document.getElementById('newsBlog').style.display		= "none";
			//document.getElementById('newsVenOlym').style.display	= "none";
			document.getElementById('newsCNBC').style.display		= "none";
		//	document.getElementById('newsElection').style.display	= "none";
			document.getElementById('newsDefaultTab').style.display	= "none";
		}
		else if (tab == 3)
		{
			document.getElementById('newsHome').style.display		= "none";
			document.getElementById('newsReview').style.display		= "none";
			document.getElementById('newsFresh').style.display		= "block";
			document.getElementById('newsHotissue').style.display	= "none";
			document.getElementById('newsEntertain').style.display	= "none";
			document.getElementById('newsSports').style.display		= "none";
			document.getElementById('journalist').style.display		= "none";
			//document.getElementById('2010Vote').style.display		= "none";
			document.getElementById('newsUporter').style.display	= "none";
			document.getElementById('newsBlog').style.display		= "none";
			//document.getElementById('newsVenOlym').style.display	= "none";
			document.getElementById('newsCNBC').style.display		= "none";
		//	document.getElementById('newsElection').style.display	= "none";
			document.getElementById('newsDefaultTab').style.display	= "none";
		}

		else if (tab == 4)
		{
			document.getElementById('newsHome').style.display		= "none";
			document.getElementById('newsReview').style.display		= "none";
			document.getElementById('newsFresh').style.display		= "none";
			document.getElementById('newsHotissue').style.display	= "block";
			document.getElementById('newsEntertain').style.display	= "none";
			document.getElementById('newsSports').style.display		= "none";
			document.getElementById('journalist').style.display		= "none";
			//document.getElementById('2010Vote').style.display		= "none";
			document.getElementById('newsUporter').style.display	= "none";
			document.getElementById('newsBlog').style.display		= "none";
			//document.getElementById('newsVenOlym').style.display	= "none";
			document.getElementById('newsCNBC').style.display		= "none";
		//	document.getElementById('newsElection').style.display	= "none";
			document.getElementById('newsDefaultTab').style.display	= "none";
		}
	   else if (tab == 5)
		{
			document.getElementById('newsHome').style.display		= "none";
			document.getElementById('newsReview').style.display		= "none";
			document.getElementById('newsFresh').style.display		= "none";
			document.getElementById('newsHotissue').style.display	= "none";
			document.getElementById('newsEntertain').style.display	= "none";
			document.getElementById('newsSports').style.display		= "block";
			document.getElementById('journalist').style.display		= "none";
			//document.getElementById('2010Vote').style.display		= "none";
			document.getElementById('newsUporter').style.display	= "none";
			document.getElementById('newsBlog').style.display		= "none";
			//document.getElementById('newsVenOlym').style.display	= "none";
			document.getElementById('newsCNBC').style.display		= "none";
		//	document.getElementById('newsElection').style.display	= "none";
			document.getElementById('newsDefaultTab').style.display	= "none";

		} else if (tab == 7) {
			document.getElementById('newsHome').style.display		= "none";
			document.getElementById('newsReview').style.display		= "none";
			document.getElementById('newsFresh').style.display		= "none";
			document.getElementById('newsHotissue').style.display	= "none";
			document.getElementById('newsEntertain').style.display	= "none";
			document.getElementById('newsSports').style.display		= "none";
			document.getElementById('journalist').style.display		= "none";
			//document.getElementById('2010Vote').style.display		= "none";
			document.getElementById('newsUporter').style.display	= "block";
			document.getElementById('newsBlog').style.display		= "none";
			//document.getElementById('newsVenOlym').style.display	= "none";
			document.getElementById('newsCNBC').style.display		= "none";
		//	document.getElementById('newsElection').style.display	= "none";
			document.getElementById('newsDefaultTab').style.display	= "none";

		} else if (tab == 8) {
			document.getElementById('newsHome').style.display		= "none";
			document.getElementById('newsReview').style.display		= "none";
			document.getElementById('newsFresh').style.display		= "none";
			document.getElementById('newsHotissue').style.display	= "none";
			document.getElementById('newsEntertain').style.display	= "none";
			document.getElementById('newsSports').style.display		= "none";
			document.getElementById('journalist').style.display		= "none";
			//document.getElementById('2010Vote').style.display		= "none";
			document.getElementById('newsUporter').style.display	= "none";
			document.getElementById('newsBlog').style.display		= "block";
			//document.getElementById('newsVenOlym').style.display	= "none";
			document.getElementById('newsCNBC').style.display		= "none";
		//	document.getElementById('newsElection').style.display	= "none";
			document.getElementById('newsDefaultTab').style.display	= "none";

		} else if (tab == 9) {
			document.getElementById('newsHome').style.display		= "none";
			document.getElementById('newsReview').style.display		= "none";
			document.getElementById('newsFresh').style.display		= "none";
			document.getElementById('newsHotissue').style.display	= "none";
			document.getElementById('newsEntertain').style.display	= "none";
			document.getElementById('newsSports').style.display		= "none";
			document.getElementById('journalist').style.display		= "none";
			//document.getElementById('2010Vote').style.display		= "none";
			document.getElementById('newsUporter').style.display	= "none";
			document.getElementById('newsBlog').style.display		= "none";
			//document.getElementById('newsVenOlym').style.display	= "block";
			document.getElementById('newsCNBC').style.display		= "none";
		//	document.getElementById('newsElection').style.display	= "none";
			document.getElementById('newsDefaultTab').style.display	= "none";

		} else if (tab == 10) {
			document.getElementById('newsHome').style.display		= "none";
			document.getElementById('newsReview').style.display		= "none";
			document.getElementById('newsFresh').style.display		= "none";
			document.getElementById('newsHotissue').style.display	= "none";
			document.getElementById('newsEntertain').style.display	= "none";
			document.getElementById('newsSports').style.display		= "none";
			document.getElementById('journalist').style.display		= "none";
			//document.getElementById('2010Vote').style.display		= "none";
			document.getElementById('newsUporter').style.display	= "none";
			document.getElementById('newsBlog').style.display		= "none";
			//document.getElementById('newsVenOlym').style.display	= "none";
			document.getElementById('newsCNBC').style.display		= "block";
		//	document.getElementById('newsElection').style.display	= "none";
			document.getElementById('newsDefaultTab').style.display	= "none";

		} else if (tab == 11) {
			document.getElementById('newsHome').style.display		= "none";
			document.getElementById('newsReview').style.display		= "none";
			document.getElementById('newsFresh').style.display		= "none";
			document.getElementById('newsHotissue').style.display	= "none";
			document.getElementById('newsEntertain').style.display	= "none";
			document.getElementById('newsSports').style.display		= "none";
			document.getElementById('journalist').style.display		= "block";
			//document.getElementById('2010Vote').style.display		= "none";
			document.getElementById('newsUporter').style.display	= "none";
			document.getElementById('newsBlog').style.display		= "none";
			//document.getElementById('newsVenOlym').style.display	= "none";
			document.getElementById('newsCNBC').style.display		= "none";
		//	document.getElementById('newsElection').style.display	= "none";
			document.getElementById('newsDefaultTab').style.display	= "none";
		} else if (tab == 14) {
			document.getElementById('newsHome').style.display		= "none";
			document.getElementById('newsReview').style.display		= "none";
			document.getElementById('newsFresh').style.display		= "none";
			document.getElementById('newsHotissue').style.display	= "none";
			document.getElementById('newsEntertain').style.display	= "block";
			document.getElementById('newsSports').style.display		= "none";
			document.getElementById('journalist').style.display		= "none";
			//document.getElementById('2010Vote').style.display		= "none";
			document.getElementById('newsUporter').style.display	= "none";
			document.getElementById('newsBlog').style.display		= "none";
			//document.getElementById('newsVenOlym').style.display	= "none";
			document.getElementById('newsCNBC').style.display		= "none";
		//	document.getElementById('newsElection').style.display	= "none";
			document.getElementById('newsDefaultTab').style.display	= "none";
		}
	}
}catch(e){}
}

