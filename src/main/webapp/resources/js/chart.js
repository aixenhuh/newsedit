

//google.charts.load('visualization', '1.0', {'packages':['corechart','table']}); //use Basic Charts and Table type


//formatter registration
(function($) {

    //숫자 3자리 콤마 포맷
    $.formatter_numberComma = function(data, idx) {
        var formatter_numberComma = new google.visualization.NumberFormat({pattern: '###,###'});

        formatter_numberComma.format(data, idx);
    };

    //뒤에 % 기호를 붙여준다.
    $.formatter_suffixPercent = function(data, idx) {
        var formatter_suffixPercent = new google.visualization.NumberFormat({suffix: '%'});

        formatter_suffixPercent.format(data, idx);
    };

})(jQuery);


//차트 옵션 묶음 객체
chartOptions = {
    getGeneralColumnChartOptions : function() {
        return {width:900
            , height:400
            , allowHtml: true
            , tooltip: {isHtml: true}
            , seriesType: "bars"
            , series: {1: {type: "line", color:'FFB432', pointSize:3}, 2: {type: "line", color:'FF0099', pointSize:3}}
            , legend: 'bottom'
            , colors: ['9AB9FF']
            , animation:{duration: 1000, easing: 'out'}
            , chartArea: {width: '85%', height: '80%'}
        };
    },
    getMiniColumnChartOptions : function() {
        return {width:500
            , height:250
            , allowHtml: true
            , seriesType: "bars"
            , series: {1: {type: "line", color:'FFB432', pointSize:3}, 2: {type: "line", color:'FF0099', pointSize:3}}
            , legend: 'bottom'
            , tooltip: {isHtml: true}
            , colors: ['9AB9FF']
            , chartArea: {width: '85%', height: '67%'}
        };
    },
    getGeneralTableOptions : function() {
        return {width:850
            , allowHtml: true
            , sort:"disable"
        };
    },
    getMiniTableOptions : function() {
        return {width:510
            , allowHtml: true
            , sort:"disable"
        };
    },
    getTwoColumnChartOptions : function() {
        return {width:900
            , height:400
            , allowHtml: true
            , tooltip: {isHtml: true}
            , colors: ["9AB9FF","FFB432"]
            , legend: 'bottom'
            , chartArea: {width: '85%', height: '80%'}
        };
    },
    getGeneralBarChartOption : function() {
        return {width:1080
            , height:400
            , allowHtml: true
            , legend: 'none'
            , chartArea: {height: '80%'}
        };
    },
    getGeneralPieChartOption : function(title) {
        return {title:title
            , width:500
            , height:300
            , chartArea:{top: '15%', width:'80%', height: '75%'}
        };
    },
    getSpinOptions : function() {
        return {
            lines: 12, // The number of lines to draw
            length: 40, // The length of each line
            width: 15, // The line thickness
            radius: 30, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: (/MSIE 7/i.test(navigator.userAgent) ? '#000000' : '#ffffff'), // #rgb or #rrggbb or array of colors
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: '50%', // Top position relative to parent
            left: '50%' // Left position relative to parent
        };
    }
};

//draw chart by Array
function drawGoogleChart(type, arr, options, elementName) {
    var data = new google.visualization.arrayToDataTable(arr);
    var chart = eval("new google.visualization."+type+"(document.getElementById(elementName))");

    if(chart != null)
        chart.draw(data, options);

    return chart;
}

//draw chart by Google Chart Data Object
function drawGoogleChartByData(type, data, options, elementName) {

    var chart = eval("new google.visualization."+type+"(document.getElementById(elementName))");

    if(chart != null)
        chart.draw(data, options);

    return chart;
}

//현재날짜 구하기
/*
(function(){
	var today = new Date();
	var weekArr = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

	var year = today.getFullYear();
	var month = (today.getMonth()+1 < 10 ? '0'+(today.getMonth()+1) : today.getMonth()+1);
	var day = (today.getDate() < 10 ? '0'+today.getDate() : today.getDate());
	var hour = today.getHours();
	var week = weekArr[today.getDay()];

	Today = {
		getYear : function(){return year;},
		getMonth :  function(){return month;},
		getDay :  function(){return day;},
		getYmd :  function(){return year.toString() + month.toString() + day.toString();},
		getHour :  function(){return hour;},
		getWeek :  function(){return week;}
	};
})();
*/

var Today = (function(){
    var today = new Date();
    var weekArr = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

    var year = today.getFullYear();
    var month = (today.getMonth()+1 < 10 ? '0'+(today.getMonth()+1) : today.getMonth()+1);
    var day = (today.getDate() < 10 ? '0'+today.getDate() : today.getDate());
    var hour = today.getHours();
    var week = weekArr[today.getDay()];

    return {
        year : year,
        month : month,
        day : day,
        ymd : year.toString() + month.toString() + day.toString(),
        hour : hour,
        week : week
    };
}());

//날짜 포매터
function makeDayDisplayStr(day, delimiter) {

    var fullDate = day;
    delimiter = (delimiter == null) ? '-' : delimiter;

    if(day.length >= 8){
        var year = day.substring(0, 4);
        var month = day.substring(4, 6);
        var date = day.substring(6, 8);

        fullDate = year+"-"+month+"-"+date;
    }

    return fullDate;
}


//시간대 포매터
function makeTimeDisplayStr(time) {

    if(time.length == 1) return "0"+time+":00 ~ 0"+time+":59";
    else return time+":00 ~ "+time+":59";
    return time;
}

//증감 포매터
function makeChgNumDisplayStr(num) {

    var formatter_numberComma = new google.visualization.NumberFormat({pattern: '###,###.##'});
    var displayStr = num;

    if(typeof num == 'number') {
        if(num < 0) displayStr = formatter_numberComma.formatValue(num) + ' ▽';
        else if(num > 0) displayStr = formatter_numberComma.formatValue(num) + ' ▲';
        else displayStr = formatter_numberComma.formatValue(num);
    }

    return displayStr;

}

//단순 값 콤마 포매터
function numberCommaFormatter(num) {
    var formatter_numberComma = new google.visualization.NumberFormat({pattern: '###,###.##'});
    var displayStr = num;
    if(typeof num == 'number')
        displayStr = formatter_numberComma.formatValue(num);
    return displayStr;
}

//테이블에서 cell에 스타일 주기
function wrappingCellStyle(val, styleStr) {
    return {v: val, p: {'style': styleStr}};
}

//리턴 데이터 체크1
function checkReturnDataEmpty(list, areaId1, areaId2) {

    if(list.length <= 0) {
        var messageHtml = "<div style='text-align:center;'><strong>데이터가 존재하지 않습니다.</strong></div>";
        $("#"+areaId1).html(messageHtml);
        if(areaId2 != null) $("#"+areaId2).html(messageHtml);
        return false;
    }

    return true;
}

// 테이블 높이 맞추기
function setTableHeight (targetID) {
    try {
        if(targetID == "twitter") $("#" + targetID + "PopularArea").height($(".google-visualization-table-tr-even")[0].getBoundingClientRect().height * 11);
    } catch(e) {
        console.log(e);
    }
}

//로딩이벤트
(function($){
    var spinner = null;

    $.loading= function(option) {
        $('body').prepend('<div class="overlay"></div>');
        spinner = new Spinner(option);
    };

    $.disable = function(id) {
        spinner.spin(document.getElementById(id));
        $('.overlay').css({'position': 'absolute', 'width': $(document).width(), 'height': $(document).height(), 'background': 'black', 'z-index': 99999}).fadeTo(0, 0.5);
        $('.overlay').show();
    };

    $.enable = function() {
        spinner.stop();
        $('.overlay').hide();
    };
})(jQuery);

//숫자 3자리 콤마
function commify(n) {
    var reg = /(^[+-]?\d+)(\d{3})/;
    n += '';

    while (reg.test(n)){
        n = n.replace(reg, '$1' + ',' + '$2');
    }

    return n;
}


var totalSumAll = 0;
var pcSum = 0;
var mobileSum = 0;
var pcRatio="";
var inflowSum="";

function showDomainChart(domain,targetID,containTodayYN,eDate)
{
    $("#" + targetID).html("");

    //contextPath+"/ajax/statistics.do"
    $.ajax({
        type:"get",
        url: "https://edit-api.sbsdlab.co.kr/ajax/statistics",
        async : true,
        dataType:"json",
        data:{
            rowNum: 10
            , gubun : "3"
            , containTodayYN: containTodayYN
            , eDate : eDate
            , domain :domain
        }
    }).done(function(returnDataJson) {
        drawInflowChart(returnDataJson.inflowDomainList, targetID);
        pvRatio(inflowSum, targetID);	//naver PV Ratio
    });

    $("#" + targetID + "PopularArea").html("");

    $.ajax({
        type:"get",
        url: "https://edit-api.sbsdlab.co.kr/ajax/statistics",
        async : true,
        dataType:"json",
        data:{
            rowNum: 10
            , gubun : "4"
            , containTodayYN : containTodayYN
            , eDate : eDate
            , domain :domain
        }
    }).done(function(returnDataJson) {
        drawPopularTable(compareRanking(returnDataJson.beforeDomainPopularDataList,returnDataJson.domainPopularDataList), targetID + "PopularArea");
    });
}

//PV 전체 대비 비율
function pvRatio(sumTot,type){

    pcRatio = nvl(((sumTot/totalSumAll)*100).toFixed(1));
    $("#"+ type +"PvTotalRatio").text(pcRatio);

}

//금일 페이지뷰 차트 그리기
function drawAllPvChart(dataList, device) {

    var allPvDataList = dataList.allPvDataList;
    var pcPvDataList = dataList.pcPvDataList;
    var mobilePvDataList = dataList.mobilePvDataList;

    if(!checkReturnDataEmpty(allPvDataList, device+"PvArea")) return;

    //차트별 설정
    var reportChartArr = new Array();
    var reportChartOptions = chartOptions.getMiniColumnChartOptions();

    reportChartArr = [["시간","페이지뷰",{type:'string', role:'tooltip', p:{html:true}}, {role: 'style'},"최근 14일 평균",{type:'string', role:'tooltip', p:{html:true}}, {role: 'style'},"동일 요일 평균(4주)",{type:'string', role:'tooltip', p:{html:true}}]];

    //json to array
    var TIME_LIST_LIMIT = 24;
    var totalSum = 0;
    var totalSumBeforeHour = 0
    var totalAvgSum = 0;
    var containTodayYN = $("#date").val() == $("#todayDate").val();
    var totalPreSum = 0;

    for(var idx = 0; idx < TIME_LIST_LIMIT; idx++) {

        if(allPvDataList[idx] != null){

            var dataItem = allPvDataList[idx];
            if(dataItem["DIVISION_COLUMN"] != null && dataItem["DIVISION_COLUMN"] != "합계") {
                var presentTimeColor = (containTodayYN && Today.hour == dataItem["DIVISION_COLUMN"] ? '#FF8E68' : null);
                var tooltipStr1 = "<div style='padding:10px;'><strong>" + makeTimeDisplayStr(dataItem["DIVISION_COLUMN"]) + "</strong><br/>페이지뷰 : " + "<strong>" + numberCommaFormatter(dataItem["PV_CNT"]) + "</strong></div>";
                var tooltipStr2 = "<div style='padding:10px;'><strong>" + makeTimeDisplayStr(dataItem["DIVISION_COLUMN"]) + "</strong><br/>최근 14일 평균 : " + "<strong>" + numberCommaFormatter(nvl(dataItem["PV_AVG"])) + "</strong></div>";
                var tooltipStr3 = "<div style='padding:10px;'><strong>" + makeTimeDisplayStr(dataItem["DIVISION_COLUMN"]) + "</strong><br/>동일 요일 평균(4주) : " + "<strong>" + numberCommaFormatter(nvl(dataItem["PV_WAVG"])) + "</strong></div>";

                // DB 조회 속도로 인한 전체 PV 총합
                if(Today.hour == dataItem["DIVISION_COLUMN"]) {
                    tooltipStr1 = "<div style='padding:10px;'><strong>" + makeTimeDisplayStr(dataItem["DIVISION_COLUMN"]) + "</strong><br/>페이지뷰 : " + "<strong>" + numberCommaFormatter(pcPvDataList[idx]["PV_CNT"] + mobilePvDataList[idx]["PV_CNT"]) + "</strong></div>";
                    totalSum += pcPvDataList[idx]["PV_CNT"] + mobilePvDataList[idx]["PV_CNT"];
                    totalPreSum += (dataItem["PV_AVG"] + dataItem["PV_WAVG"]) / 2;
                } else {
                    totalSum += dataItem["PV_CNT"];

                    if(Today.hour > dataItem["DIVISION_COLUMN"]) {
                        totalPreSum += dataItem["PV_CNT"];
                    } else {
                        totalPreSum += (dataItem["PV_AVG"] + dataItem["PV_WAVG"]) / 2;
                    }
                }

                var item = [Number(dataItem["DIVISION_COLUMN"]).toString(), Number(dataItem["PV_CNT"]), tooltipStr1, presentTimeColor, dataItem["PV_AVG"], tooltipStr2, presentTimeColor, dataItem["PV_WAVG"], tooltipStr3];
                reportChartArr.push(item); //차트 데이터

                if(containTodayYN && Today.hour -1 < dataItem["DIVISION_COLUMN"]) continue;
                totalAvgSum += dataItem["PV_WAVG"];
                totalSumBeforeHour += dataItem["PV_CNT"];
            }
        } else {
            var item = [idx-1, 0, "", 0, "", 0, ""];
            reportChartArr.push(item); //차트 데이터
        }
    }

    var PvWeekAvg = (!!!totalSumBeforeHour) ? 0 : numberCommaFormatter(((totalSumBeforeHour-totalAvgSum)/totalAvgSum)*100);
    var PvWeekAvgSelector = $("#"+device+"PvWAvg");
    $("#"+device+"PvTotal").text(numberCommaFormatter(totalSum));
    PvWeekAvgSelector.text(PvWeekAvg + "%");

    if (PvWeekAvg < 0 ) {
        PvWeekAvgSelector.text("▼ " + PvWeekAvg + "%");
        PvWeekAvgSelector.css("color", "blue");
    }

    if (PvWeekAvg > 0) {
        PvWeekAvgSelector.text("▲ " + PvWeekAvg + "%");
        PvWeekAvgSelector.css("color", "red");
    }

    if(containTodayYN) $("#"+device+"PvPreRatio").text(", 예측 : " + numberCommaFormatter(Math.floor(totalPreSum)));
    else $("#"+device+"PvPreRatio").html("");

    //그리기(차트종류, 데이터배열, 차트옵션설정값, 차트엘리먼트ID)
    drawGoogleChart("ColumnChart", reportChartArr, reportChartOptions, device+"PvArea");
}

//금일 페이지뷰 차트 그리기
function drawPvChart(dataList, device) {

    if(!checkReturnDataEmpty(dataList, device+"PvArea")) return;

    //차트별 설정
    var reportChartArr = new Array();
    var reportChartOptions = chartOptions.getMiniColumnChartOptions();

    reportChartArr = [["시간","페이지뷰",{type:'string', role:'tooltip', p:{html:true}}, {role: 'style'},"최근 14일 평균",{type:'string', role:'tooltip', p:{html:true}}, {role: 'style'},"동일 요일 평균(4주)",{type:'string', role:'tooltip', p:{html:true}}]];

    //json to array
    var TIME_LIST_LIMIT = 24;
    var totalSum = 0;
    var totalSumBeforeHour = 0
    var totalAvgSum = 0;
    var containTodayYN = $("#date").val() == $("#todayDate").val();
    var totalPreSum = 0;

    for(var idx = 0; idx < TIME_LIST_LIMIT; idx++) {

        if(dataList[idx] != null){

            var dataItem = dataList[idx];
            if(dataItem["DIVISION_COLUMN"] != null && dataItem["DIVISION_COLUMN"] != "합계") {
                var presentTimeColor = (containTodayYN && Today.hour == dataItem["DIVISION_COLUMN"] ? '#FF8E68' : null);
                var tooltipStr1 = "<div style='padding:10px;'><strong>" + makeTimeDisplayStr(dataItem["DIVISION_COLUMN"]) + "</strong><br/>페이지뷰 : " + "<strong>" + numberCommaFormatter(dataItem["PV_CNT"]) + "</strong></div>";
                var tooltipStr2 = "<div style='padding:10px;'><strong>" + makeTimeDisplayStr(dataItem["DIVISION_COLUMN"]) + "</strong><br/>최근 14일 평균 : " + "<strong>" + numberCommaFormatter(nvl(dataItem["PV_AVG"])) + "</strong></div>";
                var tooltipStr3 = "<div style='padding:10px;'><strong>" + makeTimeDisplayStr(dataItem["DIVISION_COLUMN"]) + "</strong><br/>동일 요일 평균(4주) : " + "<strong>" + numberCommaFormatter(nvl(dataItem["PV_WAVG"])) + "</strong></div>";
                totalSum += dataItem["PV_CNT"];

                var item = [Number(dataItem["DIVISION_COLUMN"]).toString(), Number(dataItem["PV_CNT"]), tooltipStr1, presentTimeColor, dataItem["PV_AVG"], tooltipStr2, presentTimeColor, dataItem["PV_WAVG"], tooltipStr3];
                reportChartArr.push(item); //차트 데이터

                if(containTodayYN && Today.hour -1 < dataItem["DIVISION_COLUMN"]) {
                    totalPreSum += (dataItem["PV_AVG"] + dataItem["PV_WAVG"]) / 2;
                    continue;
                }
                totalPreSum += dataItem["PV_CNT"];
                totalAvgSum += dataItem["PV_WAVG"];
                totalSumBeforeHour += dataItem["PV_CNT"];
            }
        } else {
            var item = [idx-1, 0, "", 0, "", 0, ""];
            reportChartArr.push(item); //차트 데이터
        }
    }

    //합계 계산
    totalSumAll += totalSum;

    if(device == "pc"){
        pcSum = totalSum;
    }else if(device == "mobile"){
        mobileSum = totalSum;
    }

    var PvWeekAvg = (!!!totalSumBeforeHour) ? 0 : numberCommaFormatter(((totalSumBeforeHour-totalAvgSum)/totalAvgSum)*100);
    var PvWeekAvgSelector = $("#"+device+"PvWAvg");
    $("#"+device+"PvTotal").text(numberCommaFormatter(totalSum));
    PvWeekAvgSelector.text(PvWeekAvg + "%");

    if (PvWeekAvg < 0 ) {
        PvWeekAvgSelector.text("▼ " + PvWeekAvg + "%");
        PvWeekAvgSelector.css("color", "blue");
    }

    if (PvWeekAvg > 0) {
        PvWeekAvgSelector.text("▲ " + PvWeekAvg + "%");
        PvWeekAvgSelector.css("color", "red");
    }


    if(containTodayYN) {
        $("#"+device+"PvPreRatio").text(", 예측 : " + numberCommaFormatter(Math.floor(totalPreSum)));
    } else {
        $("#"+device+"PvPreRatio").html("");
    }

    //그리기(차트종류, 데이터배열, 차트옵션설정값, 차트엘리먼트ID)
    drawGoogleChart("ColumnChart", reportChartArr, reportChartOptions, device+"PvArea");
}

//NAVER, FACEBOOK, NEWSSTAND 유입 차트
function drawInflowChart(dataList, inflow) {
    try{
        if(!checkReturnDataEmpty(dataList, inflow+"InflowArea")) return;

        //차트별 설정
        var reportChartArr = new Array();
        var reportChartOptions = chartOptions.getMiniColumnChartOptions();

        reportChartArr = [["시간","유입수",{type:'string', role:'tooltip', p:{html:true}}, {role: 'style'},"최근 14일 평균",{type:'string', role:'tooltip', p:{html:true}}, {role: 'style'},"동일 요일 평균(4주)",{type:'string', role:'tooltip', p:{html:true}}]];

        //json to array
        var TIME_LIST_LIMIT = 24;
        var totalSum = 0;
        var totalAvgSum = 0;
        var containTodayYN = $("#date").val() == $("#todayDate").val();
        var totalPreSum = 0;


        for(var idx = 0; idx < TIME_LIST_LIMIT; idx++) {

            if(dataList[idx] != null){

                var dataItem = dataList[idx];
                if(dataItem["DIVISION_COLUMN"] != null && dataItem["DIVISION_COLUMN"] != "합계") {
                    var presentTimeColor = (containTodayYN && Today.hour == dataItem["DIVISION_COLUMN"] ? '#FF8E68' : null);
                    var tooltipStr1 = "<div style='padding:10px;'><strong>" + makeTimeDisplayStr(dataItem["DIVISION_COLUMN"]) + "</strong><br/>유입수 : " + "<strong>" + numberCommaFormatter(dataItem["PV_CNT"]) + "</strong></div>";
                    var tooltipStr2 = "<div style='padding:10px;'><strong>" + makeTimeDisplayStr(dataItem["DIVISION_COLUMN"]) + "</strong><br/>최근 14일 평균 : " + "<strong>" + numberCommaFormatter(nvl(dataItem["PV_AVG"])) + "</strong></div>";
                    var tooltipStr3 = "<div style='padding:10px;'><strong>" + makeTimeDisplayStr(dataItem["DIVISION_COLUMN"]) + "</strong><br/>동일 요일 평균(4주) : " + "<strong>" + numberCommaFormatter(nvl(dataItem["PV_WAVG"])) + "</strong></div>";
                    totalSum += dataItem["PV_CNT"];

                    var item = [Number(dataItem["DIVISION_COLUMN"]).toString(), Number(dataItem["PV_CNT"]), tooltipStr1, presentTimeColor, dataItem["PV_AVG"], tooltipStr2, presentTimeColor, dataItem["PV_WAVG"], tooltipStr3];
                    reportChartArr.push(item); //차트 데이터

                    if(containTodayYN && Today.hour -1 < dataItem["DIVISION_COLUMN"]) {
                        totalPreSum += (dataItem["PV_AVG"] + dataItem["PV_WAVG"]) / 2;
                        continue;
                    }
                    totalPreSum += dataItem["PV_CNT"];
                    totalAvgSum += dataItem["PV_WAVG"];
                }
            } else {
                var item = [idx-1, 0, "", 0, "", 0, ""];
                reportChartArr.push(item); //차트 데이터
            }
        }

        //total
        inflowSum = totalSum;
        if(totalAvgSum < 1) totalAvgSum = 1;
        var PvWeekAvgSelector = $("#"+inflow+"PvWAvg");
        var PvWeekAvgVal = ((totalSum-totalAvgSum)/totalAvgSum)*100;
        var PvWeekAvg = (!!!totalSum)? 0 : numberCommaFormatter(PvWeekAvgVal);
        $("#"+ inflow +"PvTotal").text(numberCommaFormatter(totalSum));
        PvWeekAvgSelector.text(PvWeekAvg + "%");
        if (PvWeekAvgVal < 0) {
            PvWeekAvgSelector.text("▼ " + PvWeekAvg + "%");
            PvWeekAvgSelector.css("color", "blue");
        }

        if (PvWeekAvgVal > 0) {
            PvWeekAvgSelector.text("▲ " + PvWeekAvg + "%");
            PvWeekAvgSelector.css("color", "red");
        }

        // 오늘 예측 PV
        if(containTodayYN) $("#"+inflow+"PvPreRatio").text(", 예측 : " + numberCommaFormatter(Math.floor(totalPreSum)));
        else $("#"+inflow+"PvPreRatio").html("");

        // 테이블 높이 맞추기
        setTableHeight(inflow);

        //그리기(차트종류, 데이터배열, 차트옵션설정값, 차트엘리먼트ID)
        drawGoogleChart("ColumnChart", reportChartArr, reportChartOptions, inflow+"InflowArea");
    }catch(e){}
}



//기사 출고수 차트 그리기
function drawArticle(reportDataList) {

    if(reportDataList === null) return;

    var eDate = $("#date").val();
    var selToday = $("#todayDate").val();
    var chart = null;

    var containTodayYN = "";

    if(eDate != selToday){
        containTodayYN = "N";
    }else{
        containTodayYN = "Y";
    }


    var reportChartArr = new Array();

    //차트별 설정
    var reportChartArr = [["날짜","출고수",{type:'string', role:'tooltip', p:{html:true}}
        //, {role: 'style'}, "작년 출고수",{type:'string', role:'tooltip', p:{html:true}}
        , {role: 'style'}, "연합",{type:'string', role:'tooltip', p:{html:true}}]];
    var reportChartOptions5 = {
        width:540
        , height:300
        , allowHtml: true
        , seriesType: "bars"
        , series: {1: {type: "line", color:'FFB432', pointSize:3}
            //, 2: {type: "line", color:'FF0099', pointSize:3}
            , 3: {type: "line", color:'9AFE2E', pointSize:3}
        }
        , legend: {position:'bottom'}
        , tooltip: {isHtml: true}
        , colors: ['9AB9FF']
        , chartArea: {width: '87%', height: '69%'}
        , fontName: 'Arial'
        , hAxis: {
            textStyle: {fontSize: 10}

        }
    };

    //json to array
    $.each(reportDataList, function(idx) {

        var presentTimeColor = (Today.ymd == this["REPORT_DATE"] ? '#FF8E68' : null);
        if(this["REPORT_DATE"] != null && this["REPORT_DATE"] != "합계") {
            var tooltipStr1 = "<div style='padding:10px;'><strong>" + makeDayDisplayStr(this["REPORT_DATE"]) + "</strong><br/>기사수 : " + "<strong>" + numberCommaFormatter(this["TARGET_TOT_CNT"]) + "</strong></div>";
            //var tooltipStr2 = "<div style='padding:10px;'><strong>" + makeDayDisplayStr((Number(this["REPORT_DATE"])-10000).toString()) + "</strong><br/>작년 기사수 : " + "<strong>" + numberCommaFormatter(nvl(this["PRE_TOT_CNT"])) + "</strong></div>";
            var tooltipStr2 = "<div style='padding:10px;'><strong>" + makeDayDisplayStr(this["REPORT_DATE"]) + "</strong><br/>연합 기사수 : " + "<strong>" + numberCommaFormatter(nvl(this["ORG_YEONHAP_CNT"])) + "</strong></div>";

            var item = [makeDayDisplayStr(this["REPORT_DATE"],"-")
                , Number(this["TARGET_TOT_CNT"]), tooltipStr1
                //, presentTimeColor, Number(this["PRE_TOT_CNT"]), tooltipStr2
                , null, Number(this["ORG_YEONHAP_CNT"]), tooltipStr2];
            reportChartArr.push(item);
        }else{
            $("#articleTotal").text(numberCommaFormatter(this["TARGET_TOT_CNT"]));
        }
    });

    //기존차트 초기화
    if(chart != null) chart.clearChart();

    //그리기(차트종류, 데이터배열, 차트옵션설정값, 차트엘리먼트ID)
    chart = drawGoogleChart("ColumnChart", reportChartArr, reportChartOptions5, "articleDataList");

}

//금일 인기 특별 페이지 테이블 그리기
function drawPageTable(dataList, pageID) {

    var eDate = $("#date").val();
    var selToday = $("#todayDate").val();
    var containTodayYN = "";

    if(eDate != selToday){
        containTodayYN = "N";
    }else{
        containTodayYN = "Y";
    }

    var dataJson = JSON.stringify(dataList);

    //차트별 설정 - 테이블
    var popPvTableArr = [['순위','디바이스','인기페이지', '조회수']];
    var popPvTableOptions = chartOptions.getMiniTableOptions();

    //if(dataJson.indexOf("001") == -1 && dataJson.indexOf("002") == -1) {
    //10월 24일 로직 제거 예정
    if(eDate.replace(/-/gi,"") < '20210924') {
        $.ajax({
            type:"get",
            url:"https://edit-api.sbsdlab.co.kr/ajax/statistics/detailinfo",
            async : true,
            dataType:"json",
            data:{
                containTodayYN : containTodayYN
                , eDate : eDate
                , articleId : "000"
            }
        }).done(function(returnDataJson) {

            var resultDataList = (returnDataJson && returnDataJson.allPopularDetailList.length >  0) ? compareDetailList(dataList, returnDataJson.allPopularDetailList) : dataList;

            if(!checkReturnDataEmpty(resultDataList, pageID)) return;

            //json to array
            $.each(resultDataList, function(idx) {
                var title = this['TITLE'];
                var titleVar = "";

                // 타이틀 M, P 표시 => 모바일 / 데스크탑 대체 표시
                if(this['ARTICLE_ID'] == '099') title = "검색페이지";
                if(!!title && title.indexOf("(M)") > -1) {
                    title = title.replace('(M)', '');
                    titleVar = "모바일웹/모바일앱";
                } else if (!!title && title.indexOf("P") > -1) {
                    title = title.replace('(P)', '');
                    titleVar = "데스크탑/태블릿";
                } else if (!!title && title.indexOf("MA") > -1) {
                    title = title.replace('(MA)', '');
                    titleVar = "모바일앱";
                } else if (!!title && title.indexOf("MW") > -1) {
                    title = title.replace('(MW)', '');
                    titleVar = "모바일웹";
                } else {
                    titleVar = "데스크탑/태블릿";
                }

                var item2 = [wrappingCellStyle(Number(this['NO']), 'text-align: center;width:8%'), wrappingCellStyle(titleVar, 'text-align:left;width:28%;'),"<span  class='tablelinktitle'>" + title + "</span></span>", wrappingCellStyle(Number(this['PV_CNT']),'width:10%;')];
                popPvTableArr.push(item2);
            });

            //테이블 그리기
            var tableData = new google.visualization.arrayToDataTable(popPvTableArr);

            $.formatter_numberComma(tableData, 2);		//3자리 콤마
            drawGoogleChartByData('Table', tableData, popPvTableOptions, pageID);


        });
    } else {
        if(!checkReturnDataEmpty(dataList, pageID)) return;
        //json to array
        $.each(dataList, function(idx) {
            var title = this['TITLE'];
            var titleVar = "";

            // 타이틀 M, P 표시 => 모바일 / 데스크탑 대체 표시
            if(this['ARTICLE_ID'] == '099') title = "검색페이지";
            if(!!title && title.indexOf("(M)") > -1) {
                title = title.replace('(M)', '');
                if(this['ARTICLE_ID'] == '001') {
                    title = "메인";
                    titleVar = "모바일앱";
                } else if(this['ARTICLE_ID'] == '002') {
                    title = "뒤로가기 버튼 주요 뉴스";
                    titleVar = "모바일웹/모바일앱";
                } else if(this['ARTICLE_ID'] == '000') {
                    title = "메인";
                    titleVar = "모바일웹";
                } else {
                    titleVar = "모바일웹/모바일앱";
                }
            } else if (!!title && title.indexOf("P") > -1) {
                title = title.replace('(P)', '');
                titleVar = "데스크탑/태블릿";
            } else if (!!title && title.indexOf("MA") > -1) {
                title = title.replace('(MA)', '');
                titleVar = "모바일앱";
            } else if (!!title && title.indexOf("MW") > -1) {
                title = title.replace('(MW)', '');
                titleVar = "모바일웹";
            } else {
                titleVar = "데스크탑/태블릿";
            }

            var item2 = [wrappingCellStyle(Number(this['NO']), 'text-align: center;width:8%'), wrappingCellStyle(titleVar, 'text-align:left;width:28%;'),"<span  class='tablelinktitle'>" + title + "</span></span>", wrappingCellStyle(Number(this['PV_CNT']),'width:10%;')];
            popPvTableArr.push(item2);
        });

        //테이블 그리기
        var tableData = new google.visualization.arrayToDataTable(popPvTableArr);

        $.formatter_numberComma(tableData, 2);		//3자리 콤마
        drawGoogleChartByData('Table', tableData, popPvTableOptions, pageID);
    }
}

function compareDetailList(dataList, detailDataList) {
    var dataListarr = [];
    var resultDataList = [];
    var idx = 0;
    dataListarr = dataList.concat(detailDataList);

    dataListarr = dataListarr.filter(function(item) {
        return item.ARTICLE_ID != "000" && item.ARTICLE_ID != "001" && item.ARTICLE_ID != '002';
    });

    dataListarr.sort(function(a, b) {
        if(a.PV_CNT > b.PV_CNT) return -1;
        if(a.PV_CNT === b.PV_CNT) return 0;
        if(a.PV_CNT < b.PV_CNT) return 1;
    })

    dataListarr.forEach(function(item) {
        if((item.ARTICLE_ID).indexOf("news/mainback") > -1) {
            resultDataList.push({
                "ARTICLE_ID" : "0001",
                "NO" : ++idx,
                "PV_CNT" : item.PV_CNT,
                "RATE" : item.RATE,
                "REPORTER_NAME" : item.REPORTER_NAME,
                "TITLE" : "뒤로가기 버튼 주요뉴스(M)"
            });
        } else if((item.ARTICLE_ID).indexOf("app/newsMain") > -1) {
            resultDataList.push({
                "ARTICLE_ID" : "0002",
                "NO" : ++idx,
                "PV_CNT" : item.PV_CNT,
                "RATE" : item.RATE,
                "REPORTER_NAME" : item.REPORTER_NAME,
                "TITLE" : "메인(MA)"
            })
        } else if((item.ARTICLE_ID).indexOf("news/newsMain") > -1) {
            resultDataList.push({
                "ARTICLE_ID" : "0003",
                "NO" : ++idx,
                "PV_CNT" : item.PV_CNT,
                "RATE" : item.RATE,
                "REPORTER_NAME" : item.REPORTER_NAME,
                "TITLE" : "메인(MW)"
            })
        } else {
            resultDataList.push({
                "ARTICLE_ID" : item.ARTICLE_ID,
                "NO" : ++idx,
                "PV_CNT" : item.PV_CNT,
                "RATE" : item.RATE,
                "REPORTER_NAME" : item.REPORTER_NAME,
                "TITLE" : item.TITLE,
                "TOTAL_SUM" : item.TOTAL_SUM
            })
        }
    })

    resultDataList = resultDataList.length > 10 ? resultDataList.splice(0, 10) : resultDataList;

    return resultDataList;
}

//금일 인기페이지 테이블 그리기
function drawPopularTable(dataList, pageID) {

    if(!checkReturnDataEmpty(dataList, pageID)) return;

    //차트별 설정 - 테이블
    var popPvTableArr = [['순위','변동','인기페이지', '작성자', '조회수']];
    var popPvTableOptions = chartOptions.getMiniTableOptions();

    //json to array
    $.each(dataList, function(idx) {

        // 인기페이지 기사 랭크 표시
        var rankText = this['RANK'];
        var rankCss;
        if(!!rankText) {
            if(rankText.length > 0) {
                if(rankText.indexOf("▲") > -1) {
                    rankCss = 'color:red;';
                } else {
                    rankCss = 'color:blue;';
                }
            }
        } else {
            rankText = "-";
        }

        var item2 = [wrappingCellStyle(Number(this['NO']), 'text-align: center;'),wrappingCellStyle(rankText,rankCss), "<span class='tablelinktitle'><a href='http://news.sbs.co.kr/news/endPage.do?news_id=" + this['ARTICLE_ID'] +"' target='_blank'>" + this['TITLE'] + "</a></span>", "<span class='tablelinkreporter'>" + truncate(onlyHangle(this['REPORTER_NAME'])) + "</span>", Number(this['PV_CNT'])];
        popPvTableArr.push(item2);
    });

    //테이블 그리기
    var tableData = new google.visualization.arrayToDataTable(popPvTableArr);

    $.formatter_numberComma(tableData, 2);		//3자리 콤마
    drawGoogleChartByData('Table', tableData, popPvTableOptions, pageID);
}

// 한글만 표시
function onlyHangle(str) {
    if(str != null) {
        var pattern_eng = /[A-za-z]/g;
        if(pattern_eng.test(str)) {
            return str.replace(pattern_eng, "").trim();
        } else {
            return str;
        }
    } else {
        return "";
    }
}

// 3자 이상이면 ... 표시
function truncate(input) {
    if (input.length > 3) {
        return input.substring(0, 3) + '...';
    }
    return input;
}

//금일 비율 차트 그리기
function drawCompareChart(dataList, areaId) {


    if(!checkReturnDataEmpty(dataList, areaId)) return;

    var pvChartArr = [['기기', '조회수']];
    var pvChartOptions = chartOptions.getGeneralPieChartOption();
    var count = 0;

    //PC/Mobile PV 비율 차트 그리기

    $.each(dataList, function(idx){
        var item = [this['NAME'], Number(this['CNT'])];
        pvChartArr.push(item);
        count += Number(this['CNT']);
    });

    var pvData = new google.visualization.arrayToDataTable(pvChartArr);
    var pv = new google.visualization.PieChart(document.getElementById(areaId));

    $.formatter_numberComma(pvData, 1);
    pv.draw(pvData, pvChartOptions);

    if(pv != null){
        $('#'+areaId+'_count').html('합계 : '+commify(count));
    }
}

function checkDate(){
    var formatter_date = new google.visualization.DateFormat({pattern: 'yyyy년 MM월 dd일 (E) HH:mm'});
    var toDate = formatter_date.formatValue(new Date());

    if(NEWSADMIN_AUTH == '1') {
        $('#TOP_MENU_NAME').html(menu_title+"<span style=\"margin-left:20px;\">" + toDate + "</span><button style=\"margin-left:20px; width:55px; height:25px;\" onclick=\" javascript:fncReLoad();\">재조회</button>");
        $('#pre_left_dashboard .pre_left').css({ "height" : "36px", "display" : "block" , "background":"url('https://img.sbs.co.kr/news/newsadmin/bg_menu_on.gif') repeat-x left top" , "padding-top" : "15px" , "text-align" : "center" ,
            "color":"#ffffff" ,  "font-weight":"bold !important" });
    } else {
        $('#Twrap').hide();
        alert("권한이 없습니다.");
    }
}

// 한시간 전 기사와 비교하여 변동 함수
function compareRanking(beforeList, currentList) {
    var resultList = [];
    var beforeNewsList = {};
    var currentNewsList = {};

    if(!!beforeList && beforeList.length > 0) {
        // 한시간 전 기사 리스트 담기
        beforeList.forEach(function(obj) {
            beforeNewsList[obj.ARTICLE_ID] = obj.NO;
        })
    }

    // 현재 기사 리스트 담기
    currentList.forEach(function(obj){
        currentNewsList[obj.ARTICLE_ID] = obj.NO;
        //beforeList = {};
        if(JSON.stringify(beforeList).includes(obj.ARTICLE_ID)) {
            var rank = Number(obj.NO) - Number(beforeNewsList[obj.ARTICLE_ID]);
            if(rank < 0) {
                rank = '▲' + rank * (-1);
            } else if(rank == 0){
                rank = '-';
            } else {
                rank = '▼' + rank;
            }
        } else {
            rank = 'new';
        }

        if($("#date").val() != $("#todayDate").val()) rank = '-';

        resultList.push({
            'ARTICLE_ID' : obj.ARTICLE_ID,
            'NO' : obj.NO,
            'PV_CNT' : obj.PV_CNT,
            'RATE' : obj.RATE,
            'REPORTER_NAME' : obj.REPORTER_NAME,
            'TITLE' : obj.TITLE,
            'TOTAL_SUM' : obj.TOTAL_SUM,
            'RANK' : rank
        });
    })

    return resultList;
}

function drawDashBoardChart(type) {

    var eDate = $("#date").val();
    var selToday = $("#todayDate").val();
    var gubun = type;
    var containTodayYN = "";

    if(eDate != selToday){
        containTodayYN = "N";
        $("#todayBtn").show(); // js 인코딩 문제로 임시적으로 여기에 처리
    }else{
        containTodayYN = "Y";
        $("#todayBtn").hide(); // js 인코딩 문제로 임시적으로 여기에 처리
    }

    $.ajax({
        type:"get",
        url: "https://edit-api.sbsdlab.co.kr/ajax/statistics",
        async : false,
        dataType:"json",
        data:{
            rowNum: 10
            , eDate:eDate
            , gubun : "1"
            , containTodayYN: containTodayYN
        }
    }).done(function(returnDataJson) {

        //$.enable();	//로딩바 제거
        $("#allPvArea").html("");
        drawAllPvChart(returnDataJson, "all");
        $("#pcPvArea").html("");
        drawPvChart(returnDataJson.pcPvDataList, "pc");
        $("#mobilePvArea").html("");
        drawPvChart(returnDataJson.mobilePvDataList, "mobile");

        $("#pvTotalAll").text(numberCommaFormatter(totalSumAll)); //전체 합.
        pvRatio(pcSum + mobileSum, "all");	//pc Ratio
        pvRatio(pcSum, "pc");	//pc Ratio
        pvRatio(mobileSum, "mobile");	//mobile PV Ratio

    });


    $.ajax({
        type:"get",
        url:"https://edit-api.sbsdlab.co.kr/ajax/statistics",
        async : true,
        dataType:"json",
        data:{
            rowNum: 10
            , gubun : "2"
            , containTodayYN : containTodayYN
            , eDate : eDate
        }
    }).done(function(returnDataJson) {
        $("#allPopularArea").html("");
        drawPageTable(returnDataJson.allPopularDataList, "allPopularArea");
        $("#pcPopularArea").html("");
        drawPopularTable(compareRanking(returnDataJson.beforePcPopularDataList, returnDataJson.pcPopularDataList), "pcPopularArea");
        $("#mobilePopularArea").html("");
        drawPopularTable(compareRanking(returnDataJson.beforeMobilePopularDataList,returnDataJson.mobilePopularDataList), "mobilePopularArea");
    });

    setTimeout(function () {
        showDomainChart( "news.naver.com","naver",containTodayYN,eDate);
        showDomainChart(   "t.co","twitter",containTodayYN,eDate);
        showDomainChart( "newsstand.naver.com","newsstand",containTodayYN,eDate);
        showDomainChart(   "www.naver.com","naverdeskmain",containTodayYN,eDate);
    }, 200);

    setTimeout(function () {
        showDomainChart( "facebook.com","facebook",containTodayYN,eDate);
        showDomainChart(   "story.kakao.com","kakaoStroy",containTodayYN,eDate);
        showDomainChart(   "talk.kakao.com","kakaoTalk",containTodayYN,eDate);
        showDomainChart(   "view.kakao.com","kakaoView",containTodayYN,eDate);
    }, 400);

    setTimeout(function () {
        showDomainChart(   "newsstand.google.com","googlenewsstand",containTodayYN,eDate);
        showDomainChart(   "buzzvil.com","buzzvil",containTodayYN,eDate);
        showDomainChart(   "cashslide.co.kr","cashslide",containTodayYN,eDate);
        showDomainChart(   "search.naver.com","naversearch",containTodayYN,eDate);
    }, 600)

    setTimeout(function () {
        showDomainChart(   "search.daum.net","daumsearch",containTodayYN,eDate);
        showDomainChart(   "news.v.daum.net","daumnews",containTodayYN,eDate);
        showDomainChart(   "news.nate.com","natenews",containTodayYN,eDate);
        showDomainChart(   "news.zum.com","zumnews",containTodayYN,eDate);
    }, 800);

    setTimeout(function () {
        showDomainChart(   "amp.google.com|www.google.com|news.google.com","googleamp",containTodayYN,eDate);
        showDomainChart(   "band.us","bandus",containTodayYN,eDate);
        showDomainChart(   "flipboard","flipboard",containTodayYN,eDate);
        showDomainChart(   "youtube.com","youtube",containTodayYN,eDate);
    }, 1000);

    setTimeout(function () {
        showDomainChart(   "mail","gmail",containTodayYN,eDate);
        showDomainChart(   "api.dable.io","dable",containTodayYN,eDate);
        showDomainChart(   "buzzvil.dable.io","buzzvildable",containTodayYN,eDate);
        showDomainChart(   "ktwho.dable.io","ktwho",containTodayYN,eDate);
    }, 1200);
    // showDomainChart(   "media.daum.net","daumnews",containTodayYN,eDate);

    $.ajax({
        type:"get",
        url:"https://edit-api.sbsdlab.co.kr/ajax/statistics",
        async : true,
        dataType:"json",
        data:{
            rowNum: 10
            , gubun : "6"
            , containTodayYN: containTodayYN
            , eDate : eDate
        }
    }).done(function(returnDataJson) {
        $("#newsInflow4").show();
        drawArticle(returnDataJson.publishArticleDataList);
        $("#loding4").hide();
    });
}
