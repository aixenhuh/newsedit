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

var currentUrl		= top.window.location.href;	// url 받아오기
var categoryStr		= ""; //메인 카테고리
var subCategoryStr	= ""; // 서브카테고리

// tabmenu 값으로 인해 이미지 파일 정보를 습득한다
var tabMenu1	= "";		// 뉴스홈
var tabMenu2	= "";		// 다시보기
var tabMenu3	= "";		// 생생뉴스
var tabMenu4	= "";		// 핫이슈
var tabMenu5	= "";		// 스포츠
//var tabMenu6	= "";		// 6.2 지방선거
var tabMenu7	= "";		// 유포터
var tabMenu8	= "";		// 블로그
var tabMenu9	= "";		// 2010 벤쿠버올림픽
var tabMenu10	= "";		// SBS CNBC 뉴스
var tabMenu11	= "";		// 기자스페샬(월드컵)
var tabMenu14	= "";		// 연예
//var tabMenu15	= "";		// 19대 총선

var onloadYn	= "Y";		//페이지 로딩이 다 됫는지 확인

// =========================================다시보기 메인카테고리===================================
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


    //  <---------------다시보기 서브 카테고리----------->
	subCategoryStr = "";
	subCategoryStr += "	<ul class='type05_01'>				";

	if( (currentUrl.indexOf("prog_cd=R1") > -1) || (currentUrl.indexOf("8news_index.jsp") > -1) ){
		subCategoryStr += "	    <li class='first on'><a href='http://news.sbs.co.kr/review/indexes/8news_index.jsp'>8시뉴스</a></li>	";
	}else{
		subCategoryStr += "   	<li class='first'><a href='http://news.sbs.co.kr/review/indexes/8news_index.jsp'>8시뉴스</a></li>	";
	}

	if( (currentUrl.indexOf("prog_cd=R2") > -1) || currentUrl.indexOf("morning_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/morning_index.jsp'>아침종합뉴스</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/morning_index.jsp'>아침종합뉴스</a></li>	";
	}
	if( (currentUrl.indexOf("prog_cd=RD") > -1) ||currentUrl.indexOf("12news_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/12news_index.jsp'>12시뉴스</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/12news_index.jsp'>12시뉴스</a></li>	";
	}

	if( (currentUrl.indexOf("prog_cd=R4") > -1) ||currentUrl.indexOf("livetoday_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/livetoday_index.jsp'>뉴스퍼레이드</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/livetoday_index.jsp'>뉴스퍼레이드</a></li>	";
	}

	if( (currentUrl.indexOf("news_nightline_view.jsp") > -1) ||currentUrl.indexOf("nightline_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/nightline_index.jsp'>나이트라인</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/nightline_index.jsp'>나이트라인</a></li>	";
	}

	if( (currentUrl.indexOf("prog_cd=R6") > -1) ||currentUrl.indexOf("sports_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/sports_index.jsp'>스포츠뉴스</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/sports_index.jsp'>스포츠뉴스</a></li>	";
	}

	if( (currentUrl.indexOf("prog_cd=RI") > -1) ||currentUrl.indexOf("indepth21_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/indepth21_index.jsp'>현장21</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/indepth21_index.jsp'>현장21</a></li>	";
	}

	if( (currentUrl.indexOf("prog_cd=RB") > -1) ||currentUrl.indexOf("sbsspecial_index.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/review/indexes/sbsspecial_index.jsp'>스페셜</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/review/indexes/sbsspecial_index.jsp'>스페셜</a></li>	";
	}

	if( currentUrl.indexOf("news_listen.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/radio/news_listen.jsp'>라디오뉴스</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/radio/news_listen.jsp'>라디오뉴스</a></li>	";
	}
	subCategoryStr += "	</ul>							";
// ========================================생생뉴스 메인 카테고리===================================
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

    //  <---------------생생뉴스 서브 카테고리----------->
	subCategoryStr = ""; //서브카테코리 초기화
	subCategoryStr += "	<ul class='type05_02'>				";
    subCategoryStr += "	</ul>							";
// ========================================피겨TV 메인 카테고리===================================
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

// ========================================핫이슈 메인 카테고리===================================
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
	               //  <---------------핫이슈 서브 카테고리----------->

	subCategoryStr = ""; //서브카테코리 초기화
	subCategoryStr += "	<ul class='type05_03'>				";

    if( (currentUrl.indexOf("hotissue_list_new.jsp") > -1) || (currentUrl.indexOf("news_hot_list.jsp") > -1) ){
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/hotissue/hotissue_list_new.jsp'>핫이슈</a></li>	";
	}else{
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/hotissue/hotissue_list_new.jsp'>핫이슈</a></li>	";
	}

	 if( (currentUrl.indexOf("/thema/") > -1) ){
		subCategoryStr += "	<li class='on'><a href='http://news.sbs.co.kr/thema/'>테마/기획</a></li>	";
	}else{
		subCategoryStr += "	<li><a href='http://news.sbs.co.kr/thema/'>테마/기획</a></li>	";
	}

	//if( (currentUrl.indexOf("news_issue_poll.jsp") > -1) ){
	//	subCategoryStr += "	<li class='on'><a href='http://news.sbs.co.kr/issue/news_issue_poll.jsp'>이슈폴</a></li>	";
	//}else{
	//	subCategoryStr += "	<li><a href='http://news.sbs.co.kr/issue/news_issue_poll.jsp'>이슈폴</a></li>	";
	//}
	subCategoryStr += "	</ul>							";

// ========================================스포츠 메인 카테고리===================================
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

	  // ======================================== 기자 스페샬 ===================================
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

	subCategoryStr = ""; //서브카테코리 초기화
	subCategoryStr += "	<ul class='type05_03' style='padding-left: 330px'>				";
    if ((currentUrl.indexOf("news_file_index.jsp") > -1)) {
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp'>취재파일</a></li>	";
	} else {
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp'>취재파일</a></li>	";
	}

    if ((currentUrl.indexOf("vod_talk_index.jsp") > -1)) {
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/journalist/vod_talk_index.jsp'>영상토크</a></li>	";
	} else {
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/journalist/vod_talk_index.jsp'>영상토크</a></li>	";
	}

	if ((currentUrl.indexOf("news_file_index.jsp?category=NB") > -1)) {
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp?category=NB'>뉴스브리핑</a></li>	";
	} else {
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp?category=NB'>뉴스브리핑</a></li>	";
	}

	
	if ((currentUrl.indexOf("news_bodocenter.jsp") > -1)) {
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/journalist/news_bodocenter.jsp'>보도본부</a></li>	";
	} else {
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/journalist/news_bodocenter.jsp'>보도본부</a></li>	";
	}
	
	if ((currentUrl.indexOf("anchor_main.jsp") > -1)) {
		subCategoryStr += "	<li class='first on'><a href='http://news.sbs.co.kr/journalist/anchor_main.jsp'>앵커룸</a></li>	";
	} else {
		subCategoryStr += "	<li class='first'><a href='http://news.sbs.co.kr/journalist/anchor_main.jsp'>앵커룸</a></li>	";
	}

	subCategoryStr += "	</ul>		";

  // ========================================연예===================================
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


  // ========================================그외에 URl(뉴스 홈으로)===================================
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

    //  <---------------뉴스홈 서브 카테고리----------->
	subCategoryStr  = "";

	subCategoryStr += "	<ul>							";

	if( (currentUrl.indexOf("news_all_list.jsp") > -1) ){
		subCategoryStr += "	    <li class='first on'><a href='http://news.sbs.co.kr/section_news/news_all_list.jsp' target='_top'>속보</a></li>	";
	}else{
		subCategoryStr += "   	<li class='first'><a href='http://news.sbs.co.kr/section_news/news_all_list.jsp' target='_top'>속보</a></li>	";
	}

	if( currentUrl.indexOf("section.jsp") > -1  && (currentUrl.indexOf("section=01") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/section.jsp?section=01' target='_top'>정치</a></li> ";
	}else{
		subCategoryStr += "	   <li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=01' target='_top'>정치</a></li>";
	}

	if( currentUrl.indexOf("section.jsp") > -1  &&(currentUrl.indexOf("section=02") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/section.jsp?section=02' target='_top'>경제</a></li>";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=02' target='_top'>경제</a></li>	";
	}

	if( currentUrl.indexOf("section.jsp") > -1  && (currentUrl.indexOf("section=03") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/section.jsp?section=03' target='_top'>사회</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=03' target='_top'>사회</a></li>	";
	}

	if( currentUrl.indexOf("section.jsp") > -1  && (currentUrl.indexOf("section=14") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/indexes/entertain_index.html' target='_top'>연예</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/indexes/entertain_index.html' target='_top'>연예</a></li>	";
	}

	if( currentUrl.indexOf("section.jsp") > -1  && (currentUrl.indexOf("section=07") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/section.jsp?section=07' target='_top'>국제</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=07' target='_top'>국제</a></li>	";
	}

	if( currentUrl.indexOf("sports_index.jsp") > -1  || (currentUrl.indexOf("section=09") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/indexes/sports_index.jsp' target='_top'>스포츠</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/indexes/sports_index.jsp' target='_top'>스포츠</a></li>	";
	}

	if( currentUrl.indexOf("section.jsp") > -1  && (currentUrl.indexOf("section=08") > -1) ) {
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/section.jsp?section=08' target='_top'>문화/과학</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=08' target='_top'>문화/과학</a></li>	";
	}

	/*
	if( currentUrl.indexOf("/journalist/") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp' target='_top'>취재파일</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp' target='_top'>취재파일</a></li>	";
	}
	*/
	if( currentUrl.indexOf("/doctor_column/") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/doctor_column/indexes/doctor_column_index.jsp' target='_top'>건강</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/doctor_column/indexes/doctor_column_index.jsp' target='_top'>건강</a></li>	";
	}

	if( currentUrl.indexOf("news_weather.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/news_weather.jsp' target='_top'>날씨</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/news_weather.jsp' target='_top'>날씨</a></li>	";
	}

	if( currentUrl.indexOf("news_newsranking.jsp") > -1 ){
		subCategoryStr += "		<li class='on'><a href='http://news.sbs.co.kr/section_news/news_newsranking.jsp' target='_top'>뉴스랭킹</a></li>	";
	}else{
		subCategoryStr += "		<li><a href='http://news.sbs.co.kr/section_news/news_newsranking.jsp' target='_top'>뉴스랭킹</a></li>	";
	}

	subCategoryStr += " </ul>	";

}


// ========================================메인 카테 고리 메뉴===================================
categoryStr = "	<li><a href='http://news.sbs.co.kr/indexes/news_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu01_"+tabMenu1+".gif' alt='뉴스홈' onMouseOver='tabMouseOver(1);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/review/indexes/8news_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu02_"+tabMenu2+".gif' alt='다시보기' onMouseOver='tabMouseOver(2);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/fresh/indexes/fresh_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu03_"+tabMenu3+".gif' alt='생생뉴스' onMouseOver='tabMouseOver(3);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/hotissue/hotissue_list_new.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu04_"+tabMenu4+".gif' alt='핫이슈' onMouseOver='tabMouseOver(4);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/indexes/entertain_index.html'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu14_"+tabMenu14+".gif' alt='연예' onMouseOver='tabMouseOver(14);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/indexes/sports_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu05_"+tabMenu5+".gif' alt='스포츠' onMouseOver='tabMouseOver(5);'></a></li> ";
categoryStr += "	<li><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu11_"+tabMenu11+".gif' alt='기자스페샬' onMouseOver='tabMouseOver(11);'></a></li> ";
//categoryStr += "	<li><a href='http://news.sbs.co.kr/election/2012_nation/'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu15_"+tabMenu15+".gif' alt='19대총선' onMouseOver='tabMouseOver(15);'></a></li> ";
//categoryStr += "	<li><a href='http://news.sbs.co.kr/hotissue/hotissue_s.jsp?uniq_no=10000010459'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu12_" + tabMenu6 + ".gif' alt='6.2지방선거' onmouseover='tabMouseOver(6)'></a></li> ";
categoryStr += "	<li class='main_menu'> ";
categoryStr += "		<!-- <a href=''><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu08_" + "tabMenu6 " +".gif' alt='피겨TV' onMouseOver='tabMouseOver(6);'></a><a href='#'>--><a href='http://news.sbs.co.kr/livecapture/list.jsp' target='SBS_Window'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu13_"+tabMenu7+".gif' alt='생생포착'  onMouseOver='tabMouseOver(7);' ></a><a href='#'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu07_"+tabMenu8+".gif' alt='블로그' onMouseOver='tabMouseOver(8);'></a><a href='http://sbscnbc.sbs.co.kr' target='SBS_Window'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu10_01.gif' alt='CNBC 뉴스' onMouseOver='tabMouseOver(10);'></a>";
categoryStr += "	</li> ";


// ========================재용 추가 - 카테고리=================================
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
	
	//우선 원래있던 element 들 모두 삭제
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsHome'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsReview'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsFresh'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsHotissue'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsSports'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsUporter'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsBlog'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('newsCNBC'));
	document.getElementById('newsTabBlock').removeChild(document.getElementById('journalist'));
	
	//element 추가
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
		resultValue+="			<li class='first'><a href='http://news.sbs.co.kr/section_news/news_all_list.jsp'>속보</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=01'>정치</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=02'>경제</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=03'>사회</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/indexes/entertain_index.html'>연예</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=07'>국제</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/indexes/sports_index.html'>스포츠</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/section.jsp?section=08'>문화/과학</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/doctor_column/doctor_column_index.jsp'>건강</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/news_weather.jsp'>날씨</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/section_news/news_newsranking.jsp'>뉴스랭킹</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 2){
		resultValue+="		<ul>";
		resultValue+="			<li class='first'><a href='http://news.sbs.co.kr/review/indexes/8news_index.html'>8시뉴스</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/morning_index.html'>아침종합뉴스</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/12news_index.html'>12시뉴스</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/livetoday_index.html'>뉴스퍼레이드</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/nightline_index.html'>나이트라인</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/sports_index.html'>스포츠뉴스</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/indepth21_index.html'>현장21</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/review/indexes/sbsspecial_index.html'>스페셜</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/radio/news_listen.jsp'>라디오뉴스</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 3){
		resultValue="";
	}else if (tab == 4){
		resultValue+="		<ul class='type05_03'>";
		resultValue+="				<li class='first'><a href='http://news.sbs.co.kr/hotissue/hotissue_list_new.jsp'>핫이슈</a></li>";
		resultValue+="				<li><a href='http://news.sbs.co.kr/thema'>테마/기획</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 5){
		resultValue+="		<ul class='type05_02'>";
		resultValue+="			<li class='first'><a href='http://news.sbs.co.kr/sports/section_sports/baseball_index.html'>야구</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/sports/section_sports/soccer_index.html'>축구</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/sports/section_sports/basketvolley_index.html'>농구/배구</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/sports/section_sports/figure_index.html'>피겨</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/sports/section_sports/golfgeneral_index.html'>골프/일반</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/sports/sub/sports_replay.jsp'>스포츠TV</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/indexes/event_index.html'>피겨 스페셜</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 7) {
		resultValue="";
	}else if (tab == 8) {
		resultValue+="		<ul class='type05_04'>";
		resultValue+="			<li class='first'><a href='http://ublog.sbs.co.kr/blog/uporterBlogMain.jsp'>U포터블로그</a></li>";
		resultValue+="			<li><a href='http://ublog.sbs.co.kr/blog/reporterBlogMain.jsp'>기자블로그</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 9) {
		resultValue="";
	}else if (tab == 10) {
		resultValue="";
	}else if (tab == 11) {
		resultValue+="		<ul class='type05_02' style='padding-left: 330px'>";
		resultValue+="			<li class='first'><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp'>취재파일</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/journalist/vod_talk_index.jsp'>영상토크</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp?category=NB'>뉴스브리핑</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/journalist/news_bodocenter.jsp'>보도본부</a></li>";
		resultValue+="			<li><a href='http://news.sbs.co.kr/journalist/anchor_main.jsp'>앵커룸</a></li>";
		resultValue+="		</ul>";
	}else if (tab == 14) {
		resultValue+="";
		
	}

	return resultValue;
}

function topCategoryMenu(tab){
	var resultTabMenu1	= "";		// 뉴스홈
	var resultTabMenu2	= "";		// 다시보기
	var resultTabMenu3	= "";		// 생생뉴스
	var resultTabMenu4	= "";		// 핫이슈
	var resultTabMenu5	= "";		// 스포츠
	//var resultTabMenu6	= "";		// 6.2 지방선거
	var resultTabMenu7	= "";		// 유포터
	var resultTabMenu8	= "";		// 블로그
	var resultTabMenu9	= "";		// 2010 벤쿠버올림픽
	var resultTabMenu10	= "";		// SBS CNBC 뉴스
	var resultTabMenu11	= "";		// 기자스페샬(월드컵)
	var resultTabMenu14	= "";		// 연예
//	var resultTabMenu15	= "";		// 19대총선
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

	var resultCategoryStr = "	<li><a href='http://news.sbs.co.kr/indexes/news_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu01_"+resultTabMenu1+".gif' alt='뉴스홈' onMouseOver='tabMouseOver(1);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/review/indexes/8news_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu02_"+resultTabMenu2+".gif' alt='다시보기' onMouseOver='tabMouseOver(2);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/fresh/indexes/fresh_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu03_"+resultTabMenu3+".gif' alt='생생뉴스' onMouseOver='tabMouseOver(3);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/hotissue/hotissue_list_new.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu04_"+resultTabMenu4+".gif' alt='핫이슈' onMouseOver='tabMouseOver(4);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/indexes/entertain_index.html'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu14_"+resultTabMenu14+".gif' alt='연예' onMouseOver='tabMouseOver(14);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/indexes/sports_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu05_"+resultTabMenu5+".gif' alt='스포츠' onMouseOver='tabMouseOver(5);'></a></li> ";
	resultCategoryStr += "	<li><a href='http://news.sbs.co.kr/journalist/news_file_index.jsp'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu11_"+resultTabMenu11+".gif' alt='기자스페샬' onMouseOver='tabMouseOver(11);'></a></li> ";
	resultCategoryStr += "	<li class='main_menu'> ";
	resultCategoryStr += "		<a href='http://news.sbs.co.kr/livecapture/list.jsp' target='SBS_Window'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu13_"+resultTabMenu7+".gif' alt='생생포착'  onMouseOver='tabMouseOver(7);' ></a><a href='#'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu07_"+resultTabMenu8+".gif' alt='블로그' onMouseOver='tabMouseOver(8);'></a><a href='http://sbscnbc.sbs.co.kr' target='SBS_Window'><img src='http://img.sbs.co.kr/s9/common/headfoot/tab_newsMenu10_"+resultTabMenu10+".gif' alt='CNBC 뉴스' onMouseOver='tabMouseOver(10);'></a>";
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

