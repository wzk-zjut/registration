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
	})
}
//ui-content定义
$.fn.UiContent = function(){
	var ui = $(this);
	$('.ui-content-order',ui).on('click',function(){
		$('.content-order').show().siblings().hide();
		$('.ui-content-order').addClass('current').siblings().removeClass('current');
		return false;
	});
	$('.ui-content-introduce',ui).on('click',function(){
		$('.content-introduce').show().siblings().hide();
		$('.ui-content-introduce').addClass('current').siblings().removeClass('current');
		return false;
	});
	$('.ui-content-know',ui).on('click',function(){
		$('.content-know').show().siblings().hide();
		$('.ui-content-know').addClass('current').siblings().removeClass('current');
		return false;
	});
	$('.ui-content-stop',ui).on('click',function(){
		$('.content-stop').show().siblings().hide();
		$('.ui-content-stop').addClass('current').siblings().removeClass('current');
		return false;
	});
	$('.ui-content-cancel',ui).on('click',function(){
		$('.content-cancel').show().siblings().hide();
		$('.ui-content-cancel').addClass('current').siblings().removeClass('current');
		return false;
	});
}
//点击科室跳转到排班表界面
$('.content-order-link').click(function(){
	window.location.href='index2.html';
});
// 页面的脚本逻辑
$(function () {

	$('.ui-search').UiSearh();
	$('.ui-content').UiContent();
});


