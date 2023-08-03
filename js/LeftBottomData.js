/****** PLACE YOUR CUSTOM STYLES HERE ******/
var Tpl1 =
            '<a>' +
			'<p class="data-count">451</p>' +
			'</a>' +
			'<a>' +
			'<p class="data-count">841</p>' +
			'</a>' +
			'<a>' +
			'<p class="data-count">825</p>' +
			'</a>' ;

var Tpl2 = '<a>' +
			'<p class="data-count">795</p>' +
			'</a>' +
			'<a>' +
			'<p class="data-count">267</p>' +
			'</a>' +
			'<a>' +
			'<p class="data-count">481</p>' +
			'</a>' ;

var Tpl3 = '<a>' +
			'<p class="data-count">353</p>' +
			'</a>' +
			'<a>' +
			'<p class="data-count">131</p>' +
			'</a>' +
			'<a>' +
			'<p class="data-count">461</p>' +
			'</a>' ;
$('.panel_change_number .use_data').html(Tpl1);
// 基于准备好的dom，初始化echarts实例



var resourceDataType = $('.panel_nav a.active').data('type');//用于切换基础库
function urlType() {
    resourceDataType = $('.panel_nav a.active').data('type');
    if (resourceDataType == 1) {
		$('.panel_change_number .use_data').html(Tpl1);
    } else if (resourceDataType == 2) {
		$('.panel_change_number .use_data').html(Tpl2);
    } else if (resourceDataType == 3) {
		$('.panel_change_number .use_data').html(Tpl3);
    }
}
var num =0 ;
//    资源类型定时器
function resourceType() {
    $('.panel_nav a').eq(num).addClass('active').siblings().removeClass('active');
    urlType();
    num++;
    if (num >= 3) {
        num = 0;
    }
}

//    资源类型点击切换
$('.panel_nav').on('click', 'a', function () {
    $(this).addClass('active').siblings().removeClass('active');
    urlType();
});


