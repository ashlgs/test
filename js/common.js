/**
 * Created by lgs on 2021/1/6.
 */
//    搜索
$("#searchBtn").click(function () {
    $(".search-box").show();
    $("body").addClass("noScroll")
})
$(".clear").click(function () {
    $(".search-box").hide();
    $("body").removeClass("noScroll")

})

$(window).keydown(function (event) {
    if (event.keyCode == "13") {//监听Enter
        if (!$(".search-box").is(":hidden")) {
            $(".search-box").hide();     //如果元素为显现,则将其隐藏
            $("body").removeClass("noScroll")
            console.log("search:::", $('#searchInput').get(0).value);//获取输入框的值
            let keyword = $('#searchInput').get(0).value;
            $('#searchInput').get(0).value = "";//清空输入框
            window.location.href='search_result.html?keyword='+keyword;
        }
    }
    if (event.keyCode == "27") {//监听Esc
        if (!$(".search-box").is(":hidden")) {
            $(".search-box").hide();     //如果元素为显现,则将其隐藏
            $("body").removeClass("noScroll")
        }
    }
});
// 搜索标签点击事件
$(".search-tag").click(function () {
    $(".search-box").hide();
    $("body").removeClass("noScroll")
    console.log("search:::", $(this).text());//获取输入框的值
    let keyword = $(this).text()
    $('#searchInput').get(0).value = "";//清空输入框
    // window.location.href="http://www.baidu.com";
    // window.open("http://www.baidu.com",'top');
    window.location.href='search_result.html?keyword='+keyword;
})

$(".foot-link-item").click(function () {
    if ($(this).find(".dropdown-menu").is(":hidden")) {
        $(this).find(".dropdown-menu").show();
    } else {
        $(this).find(".dropdown-menu").hide();
    }
})

//窗口外点击事件
$(document).click(function (e) {
    var menuList = $(".foot-link-item");
    for (i = 0; i < menuList.length; i++) {
        var pop = menuList.eq(i);

        //判断事件对象不是弹窗对象  并且  弹窗对象不包含事件对象
        if (!pop.is(e.target) && pop.has(e.target).length == 0) {
            //则隐藏弹窗
            pop.find(".dropdown-menu").hide(30);
        }
    }
});