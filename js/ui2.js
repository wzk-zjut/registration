// ui-search 定义
$.fn.UiSearh = function(){
	var ui = $(this);

	$('.ui-search-selected',ui).on('click',function(){
		$('.ui-search-select-list').show();
		return false;
	});

	$('.ui-search-select-list a',ui).on('click',function(){

		$('.ui-search-selected').text( $(this).text() );
		$('.ui-search-select-list').hide();

		return false;
	});

	$('body').on('click',function(){
		$('.ui-search-select-list').hide();
	});
};
//ui-middle 排班表日期
$.fn.UiMiddle = function(){
	var ui = $(this);
	//创建一个星期的数组，用来把星期的数字转换成汉字
	var weeks = ["日","一","二","三","四","五","六"];
	//获取日期，通过修改毫秒数来得到往后的48天的日期以及星期
	var newdate = new Date().getTime(),//得到当前日期毫秒数
	days_len = $(".days",ui).length;//得到days的数量
	for(var i=0;i<days_len;i++){
		var currentDate = new Date(newdate+86400000*i);//通过毫秒数来得知当天日期
		//得到所需日期的年月日、星期，把年月日拼成字符串
		var year = currentDate.getFullYear(),
			month = currentDate.getMonth()+1,
			date = currentDate.getDate(),
			week = currentDate.getDay();
		var datestr = year + "-" + month + "-" + date;
		//给每一个指定对象添加日期和星期
		$(".days").eq(i).text(datestr);
		$(".week").eq(i).text(weeks[week]);
	}
};
//ui-detail 排班表动作
$.fn.UiDetail = function(){
	var ui = $(this);
	var index = 0;//创建索引
	$('.ui-left',ui).on('click',function(){
		if(index === 0){
			index = 0;
			return;
		}
		index--;
		$(".ui-middle",ui).stop().animate({"left":-658*index},800);
	});
	$('.ui-right',ui).on('click',function(){
		if(index >= 6){
			index = 6;
			return;
		}
		index++;
		$(".ui-middle",ui).stop().animate({"left":-658*index},800);
	});
};
// 页面的脚本逻辑
$(function () {

	$('.ui-search').UiSearh();
	$('.ui-middle').UiMiddle();
	$('.ui-detail').UiDetail();
});


