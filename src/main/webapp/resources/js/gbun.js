(function($) {

    /**
     * 페이지 네비게이터
     * 
     * @param data
     *            페이지 네비게이터 관련 객체가 들어있는 data ( 소스 참조 )
     */
    $.fn.toPageNavigator = function(data) {
        this.empty();

        var pgHtml = '';
        var nCurrentPage = data['nCurrentPage'];
        var nTotalPageSize = data['nTotalPageSize'];
        var nBlockSize = data['nBlockSize'];
        var nBlockGrpSize = data['nBlockGrpSize'];
        var nCurrentGrp = data['nCurrentGrp'];
        var nTotalRecordSize = data['nTotalRecordSize'];
        var nStartPage = data['nStartPage'];
        var nEndPage = data['nEndPage'];
        var nPrevPage = (nCurrentGrp - 2) * nBlockSize + 1; // 이전 페이지
        var nNextPage = nCurrentGrp * nBlockSize + 1; // 다음 페이지

        /*pgHtml += '<div style="float:left;padding:1px 0 1px 8px;"><em>총 ' + nTotalRecordSize + '건   </em></div>';*/

        if (nCurrentGrp != 1 && nTotalPageSize != 0) {
            pgHtml += '<a href="javascript:fn_gopage(1)" class="btn"><img src="https://img.sbs.co.kr/news/newsedit/img/arr_ll.gif" alt="처음 페이지" /></a>';
            pgHtml += '<a href="javascript:fn_gopage(' + nPrevPage + ')" class="btn"><img src="https://img.sbs.co.kr/news/newsedit/img/arr_l.gif" alt="이전 10페이지" /></a>';
        }

        for ( var i = nStartPage; i <= nEndPage; i++) {
            if (i == nCurrentPage)
                pgHtml += '<a href="javascript:fn_gopage(' + i + ')"><span title="현재페이지">&nbsp;&nbsp;' + i + '&nbsp;&nbsp;</span></a>';
            else
                pgHtml += '<a href="javascript:fn_gopage(' + i + ')">' + i + '</a>';
        }

        if (nCurrentGrp != nBlockGrpSize && nTotalPageSize != 0) {
            pgHtml += '<a href="javascript:fn_gopage(' + nNextPage + ')" class="btn"><img src="https://img.sbs.co.kr/news/newsedit/img/arr_r.gif" alt="다음 10페이지" /></a>';
            pgHtml += '<a href="javascript:fn_gopage(' + nTotalPageSize + ')" class="btn"><img src="https://img.sbs.co.kr/news/newsedit/img/arr_rr.gif" alt="마지막 페이지" /></a>';
        }

        this.append(pgHtml);
    };

    /**
     * 뉴스 편성 히든 데이터 채우기
     */
    /*$.autoFillUpNewsNextData = function(data) {
    	// News ID 불러오기
        var bmessage = '';
        
        bmessage += '<form method="POST" name="NAME_NEWS_POPUP" action="/newsedit/pop/popup1">';
        bmessage += '   <input type="hidden" name="val_category" value="" />';
        bmessage += '   <input type="hidden" name="val_section" value="" />';
        bmessage += '	<input type="hidden" name="val_loadId" value="" />'; 
        bmessage += '</form>';
        $('body').append(bmessage);
        $('input[name="val_loadId"]').val(appendNewsId);
    }*/
    /**
     * 뉴스 편성 자동 채우기
     */
    $.autoFillUpNews = function(data) {
    	var appendNewsId = '';
        $.each(data, function(index, entry) {
            appendNewsId += entry['NEWS_ID']+',';
            
            for ( var i in entry) {
                var target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
                try{
                	target.attr('target', "_blank");
                    if(i == 'SECTION' || i == 'ORD'){
                        continue;
                    }
                    if (contains(i,'IMAGE')) {
                        target.attr('src',entry[i]);
                        target.attr('alt',entry['TITLE']);
                        target.click(function(){
                        	$.readNews(entry['NEWS_ID']);
                        });
                    } else if(contains(i,'URL')){
                        target.attr('href',entry[i]);
                    } else {
                		if(entry["CATEGORY"] == '21' || entry["CATEGORY"] == '22' || entry["CATEGORY"] == '23' || entry["CATEGORY"] == '24' || entry["CATEGORY"] == '25' || entry["CATEGORY"] == '26' || entry["CATEGORY"] == '27' || entry["CATEGORY"] == '28' || entry["CATEGORY"] == '29') {
                			if(entry['SECTION'] == '03' || entry['SECTION'] == 3 ) {
                				if( contains(i,'REL_TITLE') ){
            						target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
            						var url = entry['REL_URL'+(parseInt(i.substr(9, 1))+1)];
            						if( url != null ){
            							target.attr("url", url);
            							target.click(function(){
            								$.readSubNews(this);
            							});
            						}
            						target.html(entry['REL_TITLE'+(parseInt(i.substr(9, 1))+1)]);
            						target.val(entry['REL_TITLE'+(parseInt(i.substr(9, 1))+1)]);
                				}else if( i == 'TITLE' ){
                					$('#SMALL_TITLE_' + entry['SECTION'] + '_' + entry['ORD']).html(entry['TITLE']);
                					$('#SMALL_TITLE_' + entry['SECTION'] + '_' + entry['ORD']).val(entry['TITLE']);
                					target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
                					target.html(entry['REL_TITLE1']);
                					target.val(entry['REL_TITLE1']);
                					target.click(function(){
                						window.open(entry['REL_URL1'], '_blank', '');
                					});
                				}
                			}else{
                				if(!contains(i, 'REL_TITLE') ){
                					target.click(function(){
                						$.readNews(entry['NEWS_ID']);
                					});
                				}
                				target.html(entry[i]);
                				target.val(entry[i]);
                				
                			}
                		}else{
                			if(!contains(i, 'REL_TITLE') ){
                				target.click(function(){
                					$.readNews(entry['NEWS_ID']);
                				});
                			}
                			if( entry[i] != null ){
                				//alert(i.split('CONTENT'));
                				if( i.replace('CONTENT', '') != i ){
                					target.html(removeTag(entry[i]));
                					target.val(removeTag(entry[i]));
                				}else{
                					target.html(entry[i]);
                					target.val(entry[i]);
                				}
                			}
                		}
                			
                    }
                    target.attr('news_id',entry['NEWS_ID']);
                    target.attr('content',entry['CONTENT']);
                    target.css('font-size', 'inherit');
                }catch(e){
                }
            }
        });

        $('input[name="val_loadId"]').val(appendNewsId);
    };
    
    $.autoFillUpStarNews = function(data) {
    	var appendNewsId = '';
        $.each(data, function(index, entry) {
            appendNewsId += entry['NEWS_ID']+',';
            
            for ( var i in entry) {
                var target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
                try{
                	target.attr('target', "_blank");
                    if(i == 'SECTION' || i == 'ORD'){
                        continue;
                    }
                    if (contains(i,'IMAGE')) {
                        target.attr('src',entry[i]);
                        target.attr('alt',entry['TITLE']);
                        target.click(function(){
                        	$.readNews(entry['NEWS_ID']);
                        });
                    } else if(contains(i,'URL')){
                        target.attr('href',entry[i]);
                    } else {
                		/*if(entry["CATEGORY"] == 'MT') {
                			if(entry['SECTION'] == '01' || entry['SECTION'] == 1 ) {
                				if( contains(i,'REL_TITLE') ){
            						target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
            						var url = entry['REL_URL'+(parseInt(i.substr(9, 1))+1)];
            						if( url != null ){
            							target.attr("url", url);
            							target.click(function(){
            								$.readSubNews(this);
            							});
            						}
            						target.html(entry['REL_TITLE'+(parseInt(i.substr(9, 1))+1)]);
            						target.val(entry['REL_TITLE'+(parseInt(i.substr(9, 1))+1)]);
                				}else if( i == 'TITLE' ){
                					$('#SMALL_TITLE_' + entry['SECTION'] + '_' + entry['ORD']).html(entry['TITLE']);
                					$('#SMALL_TITLE_' + entry['SECTION'] + '_' + entry['ORD']).val(entry['TITLE']);
                					target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
                					target.html(entry['REL_TITLE1']);
                					target.val(entry['REL_TITLE1']);
                					target.click(function(){
                						window.open(entry['REL_URL1'], '_blank', '');
                					});
                				} 
                			}else{
                				if(!contains(i, 'REL_TITLE') ){
                					target.click(function(){
                						$.readNews(entry['NEWS_ID']);
                					});
                				}
                				target.html(entry[i]);
                				target.val(entry[i]);
                				
                			}
                		}else{*/
	                    	if( contains(i,'REL_TITLE') ){
	    						target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
	    						var url = entry['REL_URL'+(parseInt(i.substr(9, 1))+1)];
	    						if( url != null ){
	    							target.attr("url", url);
	    							target.click(function(){
	    								$.readSubNews(this);
	    							});
	    						}
	    						target.html(entry['REL_TITLE'+(parseInt(i.substr(9, 1))+1)]);
	    						target.val(entry['REL_TITLE'+(parseInt(i.substr(9, 1))+1)]);
	                    	}
                    		/*if(!contains(i, 'REL_TITLE') ){
                				target.click(function(){
                					$.readNews(entry['NEWS_ID']);
                				});
                			}*/
                			if( entry[i] != null ){
                				//alert(i.split('CONTENT'));
                				if( i.replace('CONTENT', '') != i ){
                					target.html(removeTag(entry[i]));
                					target.val(removeTag(entry[i]));
                				}else{
                					target.html(entry[i]);
                					target.val(entry[i]);
                				}
                			}
                		}
                			
                    //}
                    target.attr('news_id',entry['NEWS_ID']);
                    target.attr('content',entry['CONTENT']);
                    target.attr('sub_title',entry['SUB_TITLE']);
                    target.css('font-size', 'inherit');
                }catch(e){
                }
            }
        });

        $('input[name="val_loadId"]').val(appendNewsId);
    };    

	$.autoFillUpCnbcNews = function(data) {
    	var appendNewsId = '';
        $.each(data, function(index, entry) {
            appendNewsId += entry['NEWS_ID']+',';
            
            for ( var i in entry) {
                var target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
                try{
                	target.attr('target', "_blank");
                    if(i == 'SECTION' || i == 'ORD'){
                        continue;
                    }
                    if (contains(i,'IMAGE')) {
                        target.attr('src',entry[i]);
                        target.attr('alt',entry['TITLE']);
                        target.click(function(){
                        	$.readNews(entry['NEWS_ID']);
                        });
                    } else if(contains(i,'URL')){
                        target.attr('href',entry[i]);
                    } else {
                		/*if(entry["CATEGORY"] == 'MT') {
                			if(entry['SECTION'] == '01' || entry['SECTION'] == 1 ) {
                				if( contains(i,'REL_TITLE') ){
            						target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
            						var url = entry['REL_URL'+(parseInt(i.substr(9, 1))+1)];
            						if( url != null ){
            							target.attr("url", url);
            							target.click(function(){
            								$.readSubNews(this);
            							});
            						}
            						target.html(entry['REL_TITLE'+(parseInt(i.substr(9, 1))+1)]);
            						target.val(entry['REL_TITLE'+(parseInt(i.substr(9, 1))+1)]);
                				}else if( i == 'TITLE' ){
                					$('#SMALL_TITLE_' + entry['SECTION'] + '_' + entry['ORD']).html(entry['TITLE']);
                					$('#SMALL_TITLE_' + entry['SECTION'] + '_' + entry['ORD']).val(entry['TITLE']);
                					target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
                					target.html(entry['REL_TITLE1']);
                					target.val(entry['REL_TITLE1']);
                					target.click(function(){
                						window.open(entry['REL_URL1'], '_blank', '');
                					});
                				} 
                			}else{
                				if(!contains(i, 'REL_TITLE') ){
                					target.click(function(){
                						$.readNews(entry['NEWS_ID']);
                					});
                				}
                				target.html(entry[i]);
                				target.val(entry[i]);
                				
                			}
                		}else{*/
	                    	if( contains(i,'REL_TITLE') ){
	    						target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
	    						var url = entry['REL_URL'+(parseInt(i.substr(9, 1))+1)];
	    						if( url != null ){
	    							target.attr("url", url);
	    							target.click(function(){
	    								$.readSubNews(this);
	    							});
	    						}
	    						target.html(entry['REL_TITLE'+(parseInt(i.substr(9, 1))+1)]);
	    						target.val(entry['REL_TITLE'+(parseInt(i.substr(9, 1))+1)]);
	                    	}
                    		/*if(!contains(i, 'REL_TITLE') ){
                				target.click(function(){
                					$.readNews(entry['NEWS_ID']);
                				});
                			}*/
                			if( entry[i] != null ){
                				//alert(i.split('CONTENT'));
                				if( i.replace('CONTENT', '') != i ){
                					target.html(removeTag(entry[i]));
                					target.val(removeTag(entry[i]));
                				}else{
                					target.html(entry[i]);
                					target.val(entry[i]);
                				}
                			}
                		}
                			
                    //}
                    target.attr('news_id',entry['NEWS_ID']);
                    target.attr('content',entry['CONTENT']);
                    target.attr('sub_title',entry['SUB_TITLE']);
                    target.attr('reporter',entry['REPORTER']);
                    target.attr('small_title',entry['SMALL_TITLE']);
                    //alert(entry['SUB_TITLE']);
                    target.css('font-size', 'inherit');
                }catch(e){
                }
            }
        });
        
        $('input[name="val_loadId"]').val(appendNewsId);
    };
    
    /*
    function debug(msg){
		var debugArea = document.getElementById("debug_div");
		debugArea.innerHTML += "<font size=\"2\"><br>"+msg+"</font>";
		debugArea.scrollTop = debugArea.scrollHeight;
	}
	*/
    
    $.readNews = function(news_id){
    		
    		window.open("http://news.sbs.co.kr/section_news/news_read.jsp?news_id="+news_id, '_blank', '');
    }
    $.readSubNews = function(obj){
    	window.open(obj.getAttribute("url"), '_blank', '');
    }
    
    $.autoFillUpHotIssue = function(data) {
    	var appendNewsId = '';
    	
        $.each(data, function(index, entry) {
            var ssss = '';
            appendNewsId += entry['NEWS_ID']+',';
            
            for ( var i in entry) {
                var target = $('#' + i + '_' + entry['SECTION'] + '_' + entry['ORD']);
                try{
                    if(i == 'SECTION' || i == 'ORD'){
                        continue;
                    }
                    if (contains(i,'IMAGE')) {
                        target.attr('src',entry[i]);
                        target.attr('alt',entry['TITLE']);
                        target.click(function(){
                        	$.readNews(entry['NEWS_ID']);
                        });
                    } else if(contains(i,'URL')){
                        target.attr('href',entry[i]);
                        target.attr('target', "_blank");
                    } else {
                    	if(!contains(i, 'REL_TITLE') ){
                    		target.click(function(){
                    			$.readNews(entry['NEWS_ID']);
                    		});
                    	}
                        target.html(entry[i]);
                        target.val(entry[i]);
                    }
                    target.css('font-size', 'inherit');
                }catch(e){
                }
            }
        });
       
        // News ID 불러오기
        $('input[name="val_loadId"]').val(appendNewsId);
    };
    
    $.fn.makeModifyButton = function(ct, sc){
    	var ctsc = ct + ',' + sc;
        var top = $(this).offset().top;
        var left = $(this).offset().left + $(this).width() - 42;
        if( ct == "16" && sc == "01" ){
        	left = $(this).offset().left + $(this).width() + 244;
        }
        /*var left = $(this).offset().left + $(this).width() - 62;*/
        $('div').first().append("<img src='https://img.sbs.co.kr/news/newsedit/img/bu_edit.gif' style='z-index:100;width:62;height:25;cursor:pointer;position:absolute;left:"+left+"px;top:"+top+"px' onclick='fn_show_popup(" + ctsc +")'/>");
    };

    /**
     * 1ROW 의 Json<Json> 객체를 prefix를 이용해 html 페이지의 id나 class를 이용해 autoFillUp
     * 
     * @param data
     * @param selector
     * @param customMap
     */

    $.autoFillUpJsonValues = function(data, selector, customMap) {

        if (customMap == undefined) {
            customMap = {};
        }
        for ( var key in customMap) {
            // $(key).html(nvl(entry[customMap[key]]));
            $(key).fillUp(nvl(data[customMap[key]]));
        }
        for ( var k in data) {
            if (customMap[k] == null)
                // $(prefix + key).html(nvl(entry[key]));
                $(selector + k).fillUp(nvl(data[k]));
        }
    };

    $.fn.fillUp = function(value) {
        // alert($(this).selector);
        if ($(this).attr('value') == undefined) {
            $(this).html(value);
        } else {
            $(this).val(value);
       }
    }

    /**
     * data를 넣으면 데이터 순서대로 테이블을 만들어줌.
     * 
     * @param data
     *            key,value 로 이루어진 json 객체 var option =
     *            {'checkbox':'Y','key':{'user_nm','user_id'}};
     */
    $.fn.toGeneratedTable = function(data, option) {
        var appendHtml = '';
        $
        .each(
            data,
            function(index, entry) {
                appendHtml += '<tr';

                // tr 네임 붙이기
                if (option['key'] != undefined) {
                    appendHtml += ' name= "tr';
                    for (value in option['key']) {
                        appendHtml += "_" + entry[value];
                    }
                    ;
                    appendHtml += '"';
                    appendHtml += ' value= "tr';
                    for (value in option['key']) {
                        appendHtml += "_" + entry[value];
                    }
                    ;
                    appendHtml += '"';
                }
                appendHtml += '>';
                // tr 끝

                // 체크박스
                if (option['checkbox'] != undefined
                    && (option['checkbox'] == 'Y'
                        || option['checkbox'] == 'y' || option['checkbox'] == '1')) {
                    appendHtml += '<td>'
                    + '<input type="checkbox" name="mappCheck" class="checkBox"  value="';
                    for (value in option['key']) {
                        appendHtml += entry[value] + "_";
                    }
                    appendHtml.substring(0, appendHtml.length - 1);
                    appendHtml += '"/></td>';
                }
                // 체크박스 끝

                for ( var key in entry) {
                    appendHtml += '<td>' + nvl(entry[key])
                    + '</td>';
                }
                ;
                appendHtml += '</tr>';
            });

        this.empty().append(appendHtml);
    };

    /**
     * 셀렉트박스 만들기
     */
    $.fn.toGeneratedSelectBoxAll = function(data) {
        var appendHtml = '';

        if ($(this).val() == null) {
            appendHtml = '<option value=\'\'>전체</option>';
        }
        $.each(data, function(index, entry) {
            appendHtml += '<option value=' + entry['CD'] + '>'
            + nvl(entry['VALUE']) + '</option>';
        });
        this.append(appendHtml);
    };

    /**
     * 셀렉트박스 만들기
     */
    $.fn.toGeneratedSelectBox = function(data) {
        var appendHtml = '';

        $.each(data, function(index, entry) {
            appendHtml += '<option value=' + entry['CD'] + '>'
            + nvl(entry['VALUE']) + '</option>';
        });
        this.append(appendHtml);
    };
    
    /**
     * 뉴스태그 셀렉트박스 만들기
     */
    $.fn.toGeneratedNewsTag = function(data) {
        var appendHtml = '';

        if ($(this).val() == null) {
            appendHtml = '<option value=\'\'>전체</option>';
        }
        $.each(data, function(index, entry) {
            appendHtml += '<option value=' + entry['TAG_ID'] + '>'
            + nvl(entry['TITLE']) + '</option>';
        });
        this.append(appendHtml);
    };
    
    
    $.fn.getParamsAsJson = function() {
        var result = {};
        for ( var i = 0; i < $(this).length; i++) {
            result[$(this)[i].name] = $(this)[i].value;
        }
        return result;
    };
})(jQuery);

/**
 * Json 객체를 get형식의 parameter로 바꿔줌
 * 
 * @param json
 *            get형식의 parameter 로 바꿔줄 Json 객체
 * @return get형식의 paramValue. (?a=1&b=2.....)
 */
function jsonToParam(json) {
    var result = '';
    var first = true;
    for (key in json) {
        if (first) {
            result += '?';
        } else {
            result += '&';
        }
        result += key + '=' + encodeURIComponent(json[key]);
        first = false;
    }
    return result;
}

/**
 * 
 * @param phone_number
 * @returns String 형식의 전화번호
 */
function phone_number(number) {
    var header = number.substring(0, 1);
    var size = number.length();
    var final_number = "";
    if (size > 7) {
        var num1 = "";
        var num2 = "";
        var num3 = "";
        switch (header) {
            case 01:
                num1 = number.substring(0, 2);
                if (size == 10) {
                    num2 = number.substring(0, 2);
                } else if (size == 11) {

                }
                break;
            case 07:
                break;
            case 05:
                break;
            default:
                break;
        }
    }
}

function getGeneratedParam(prefix) {
    var a = $('[id^=' + prefix + ']');
    var result = {};
    for ( var i = 0; i < a.length; i++) {
        if (a[i].value == undefined) {
            result[a[i].id.substr(prefix.length)] = a[i].innerText;
        } else {
            result[a[i].id.substr(prefix.length)] = a[i].value;
        }
    }
    return result;
}

function getMSGforMSGforList(data) {
    var success = data['RESULT_CODE'] == 0 ? true : false;
    if (success) {
        return '정상적으로 처리되었습니다.';
    } else {
        var result_str = data['RESULT_STR'];
        if (result_str != undefined) {
            return result_str;
        } else {
            return '일시적으로 서버와의 연동이 지연되고 있습니다. 잠시 후 다시 시도해 주세요.';
        }
    }
}

function contains(source ,target){
    var regex = new RegExp(target + '.+');
    if(regex.test(source)){
        return true;
    } else {
        return false;
    }
}

/**
 * 자리수를 2자리로 맞춰줌
 */
function cipher(data) {
	var result = '';
	var zero = '';
	data = data.toString();
	
	if(data.length < 2) {
		zero += "0";
		result = zero + "" + data;
	} else {
		result = data;
	}
	
	return result;
}

/**
 * 태그 제거 정규식
 */
function removeTag(data) {
	
	data = data.replace(/<(\/?)p>/gi,"");//p태그 제거 

	//data = data.replace(/(<br>)|(<br />)/gi,"");//br태그 제거 --> 이 부분에서 에러난다.(참고로 난 IE8 사용자임)
	data = data.replace(/(<br>)|(<br \/>)|(<br\/>)/gi,"");
	data = data.replace(/(\n)|(\r)/gi,"");
	
	//data = data.replace(/\s/gi,"");//공백제거 

	//data = data.replace(/ /gi,"");//공백제거 

	data = data.replace(/<head>(.*?)<(\/?)head>/gi,"");//head에 포한됨 모든 내용 제거 

	data = data.replace(/<style>(.*?)<(\/?)style>/gi,"");//style 태그에 포함된 모든 내용 제거 
	
	data = data.replace(/&nbsp;/gi,"");
	data = data.replace(/##SilverViewer##/gi,"");
	data = data.replace(/<img[^>]*(.*?)>/gi,"");//style 태그에 포함된 모든 내용 제거 

	data = data.replace(/<(\/?)body>/gi,"");//body 태그 제거
	
	//return data.replace(/<[%>]+>/g,"");
	//return data.replace("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>","");
	//var rt1 = data.replace("&lt(;)?(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?&gt(;)?", "");
	//var rt2 = rt1.replace("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>", "");
	//data.replaceAll("&nbsp;", "")                      //공백태그 제거
    //.replaceAll("<meta[^>]*(/)?>", "")                  		//meta 태그 제거
    //.replaceAll("<style[^>]*>(.*?)</style>", "")     			//css제거
    //.replaceAll("<script[^>]*>(.*?)</script>", "")   			//스크립트 제거
    //.replaceAll("<!--[^>]*-->", "")                  			//주석처리 제거
    //.replaceAll(/<(\/?)p>/gi,"")								//p태그 제거
    //.replaceAll("<(/)?(b|B)(r|R) ?/?>", "\n")
    //.replaceAll("<(/)?[bB][rR](\\s)*(/)?>", "\n")				//br태그 제거
    //.replaceAll("</(p|P)>", "\n")
    //.replaceAll("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>", "")  //html태그 제거
    //.replaceAll("<o:p>", "")
    //.replaceAll("</o:p>", "\n")
    //.replaceAll("(<\\?(xml|XML))[^>]*/>", "")
    //.replaceAll("\n", "");

	return data;
}

/**
 * replaceAll
 */ 
/*String.prototype.replaceAll = function(str1, str2) {
	
	return this.split(str1).join(str2);
}*/
function replaceAll(temp, org, rep) {
	return temp.split(org).join(rep);
}

/**
 * 쌍따옴표 제거
 */
function convertDoubleQuotation(data) {
	
	var result = replaceAll(data, "\"", "&quot;");
	
	return result;
}

/**
 * 글자수 자르기
 */ 
function cut_char(data, len) {
	var result = '';
	
	if(data != '' || data != 'undefined' ) {
		result = nvl(data).substr(0, len);
	}
	
	return result;
}