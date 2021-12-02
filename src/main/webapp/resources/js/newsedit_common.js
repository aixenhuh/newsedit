/**
 * 
 */
	//요일 구하기
	function getWeek(){

		 var date = new Date($("#date").datepicker({ dateFormat: 'yy-mm-dd' }).val()), week = new Array('Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat');
	      if (week[date.getDay()]!= undefined){
		  $("#view_date").html($("#date").val()+" ("+(week[date.getDay()]) + ")"); 
		  }
		
		return;
	}

    //이전, 이후 날짜 세팅
	function setDate(selectedDate){

		if(selectedDate == "" || selectedDate == null){
			var newDate = new Date();
		}else{
			var newDate = new Date(selectedDate);
		}
		
  		var prevDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()-1);
  		var nextDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate()+1);

  		$('#prev').datepicker({dateFormat: 'yy-mm-dd'}).datepicker("setDate", prevDate);
    	$('#next').datepicker({dateFormat: 'yy-mm-dd'}).datepicker("setDate", nextDate);

    	var eDate = $("#date").val();
    	var selToday = $("#todayDate").val();

    	//다음 버튼 hidden
    	if(eDate == selToday){
        	document.getElementById("nextBtn").style.display="none";
        	document.getElementById("todayBtn").style.display="none";
        }else{
        	document.getElementById("nextBtn").style.display="";
        	document.getElementById("todayBtn").style.display="";
        }

    	return;
	}
    
	//이전, 이후 버튼 클릭 시
	function dateSet(dt){

		var date = $(dt).val();

		$('#date').datepicker({dateFormat: 'yy-mm-dd'}).datepicker("setDate", date);

		totalSumAll = 0;	//totalSumAll 값 초기화

		setDate(date);
		getWeek();
		drawDashBoardChart("1");
	}

	// 권한 체크
	function fn_auth_check(sbs_id) {
		$.ajax({
			type : 'post',
			url : contextPath +'/common/users',
			async : false,
			dataType : 'json',
			data : {
				'USER_ID' : sbs_id
			},
			success : function(data) {
				if(data['records'].length == 0) {
					NEWSADMIN_AUTH = "0";
				} else {
					NEWSADMIN_AUTH = "1";
					$.each(data['records'], function(index, entry) {
						sbs_name = nvl(entry['NAME']);
					});
				}
			}
		});
	}

	function fncReLoad()
	{
	    location.reload();
	}
	
	/**
	 * 쿠키값 추출
	 * @param cookieName 쿠키명
	 */
	 function cookie_get(cookieName) {
	     var search = cookieName + "=";
	     var cookie = document.cookie;

	     // 현재 쿠키가 존재할 경우
	     if (cookie.length > 0) {
	         // 해당 쿠키명이 존재하는지 검색한 후 존재하면 위치를 리턴.
	         startIndex = cookie.indexOf(cookieName);
	         // 만약 존재한다면
	         if (startIndex != -1) {
	             // 값을 얻어내기 위해 시작 인덱스 조절
	             startIndex += cookieName.length;
	             // 값을 얻어내기 위해 종료 인덱스 추출
	             endIndex = cookie.indexOf(";", startIndex);
	             // 만약 종료 인덱스를 못찾게 되면 쿠키 전체길이로 설정
	             if (endIndex == -1) endIndex = cookie.length;
	             // 쿠키값을 추출하여 리턴(한글 깨짐방지를 위해 decodeURIComponent)
	             return decodeURIComponent(cookie.substring(startIndex + 1, endIndex));
	         }
	         else {
	             // 쿠키 내에 해당 쿠키가 존재하지 않을 경우
	        	 if(cookieName == "ck_sDate"){
		        	 $("#sDate").val(sDate);
			     }else if(cookieName == "ck_eDate"){
			    	 $("#eDate").val(eDate);
				 }
	             return false;
	         }
	     }
	     else {
	         // 쿠키 자체가 없을 경우	         
	         if(cookieName == "ck_sDate"){
	        	 $("#sDate").val(eDate);
		     }else if(cookieName == "ck_eDate"){
		    	 $("#eDate").val(eDate);
			 }
		     
	         return;
	     }
	    
	 }

	 /**
	  * 쿠키 설정
	  * @param cookieName 쿠키명
	  * @param cookieValue 쿠키값
	  * @param expireDay 쿠키 유효날짜
	  */
	  function cookie_set(cookieName, cookieValue) {
	      	      
	      document.cookie = cookieName + "=" + escape(cookieValue) + "; path=/;";

	  }

	/*
		쿠키 삭제
	*/
   function DelCookie(cKey) {

	    var date = new Date(); // 오늘 날짜
	    var validity = -1;
	    date.setDate(date.getDate() + validity);
	    document.cookie =
	          cKey + "=;expires=" + date.toGMTString();
	}
	 
// 핫이슈별 코드
	function fn_hotissue_code(){
		$.ajax({
			type : 'get',
			url : contextPath+ '/ajax/getTagData.do',
			async : false,
			dataType : 'json',
			data : {}
		}).done(function(json){
			var availableTags = [];
			if(0<json.tagDataList.length) {
				html = '<option value="0">없음</option>';
				$.each(json.tagDataList, function(i, item){
					availableTags.push(item.TITLE);
					html+= "<option value='"+item.TAG_ID+"'>"+item.TITLE+"</option>";
				});
				$("#issue_id").html(html);
			}
		});
	}

	// 테마별 코드
	function fn_plus_code(){
		$.ajax({
			type : 'get',
			url : contextPath+ '/ajax/getThemeData.do',
			async : false,
			dataType : 'json',
			data : {}
		}).done(function(json){
			console.log("성공");
			var availableTags = [];
			if(0<json.themeDataList.length) {
				html = '<option value="0">없음</option>';
				$.each(json.themeDataList, function(i, item){
					availableTags.push(item.TITLE);
					html+= "<option value='"+item.THEME_ID+"'>"+item.TITLE+"</option>";
				});
				$("#corner_id").html(html);
			}
		});
	}
	
	