//侧边栏的js操作
$(".bro-btn:eq(0)").mouseover(function () {
    $(this).css("background", "white");
    var num = $(".bro-btn").index($(this));
    $(".btn" + (num + 1)).attr("src", $(".btn1b").html());
    var div = document.querySelector(".btn-brand" + (num + 1));
    // div.style.display = "block"
    animate(div, {
        left: 76,
        opacity: 1
    }, 200, Tween.Quad.easeOut);
}).mouseout(function () {
    $(this).css("background", "none");
    var num = $(".bro-btn").index($(this));
    $("img:eq(" + (num + 1) + ")").attr("src", $(".btn1w").html());
    var div = document.querySelector(".btn-brand" + (num + 1));
    // div.style.display = "block"
    animate(div, {
        left: 120,
        opacity: 0
    }, 200, Tween.Quad.easeOut);
    var st = document.documentElement.scrollTop;
    if (st >= 0 && st < 1073) {
        //console.log(1);
        // $(".bro-btn:eq(0)").css("background", "white");
        // $("img:eq(1)").attr("src", $(".btn1b").html());
        // $(".innerbtn:eq(0)").css({
        //     "width": 16,
        //     "height": 16
        // })
        $(this).css("background", "white");
        var num = $(".bro-btn").index($(this));
        $(".btn" + (num + 1)).attr("src", $(".btn1b").html());
    }
})
$(".bro-btn:eq(1)").mouseover(function () {
    $(this).css("background", "white");
    var num = $(".bro-btn").index($(this));
    $(".btn" + (num + 1)).attr("src", $(".btn2b").html());
    var div = document.querySelector(".btn-brand" + (num + 1));
    // div.style.display = "block"
    animate(div, {
        left: 76,
        opacity: 1
    }, 200, Tween.Quad.easeOut);
}).mouseout(function () {
    $(this).css("background", "none");
    var num = $(".bro-btn").index($(this));
    $("img:eq(" + (num + 1) + ")").attr("src", $(".btn2w").html());
    var div = document.querySelector(".btn-brand" + (num + 1));
    // div.style.display = "block"
    animate(div, {
        left: 120,
        opacity: 0
    }, 200, Tween.Quad.easeOut);
    var st = document.documentElement.scrollTop;
    if (st > 1072 && st < 2016) {
        $(this).css("background", "white");
        var num = $(".bro-btn").index($(this));
        $(".btn" + (num + 1)).attr("src", $(".btn2b").html());
    }
})
$(".bro-btn:eq(2)").mouseover(function () {
    $(this).css("background", "white");
    var num = $(".bro-btn").index($(this));
    $(".btn" + (num + 1)).attr("src", $(".btn3b").html());
    var div = document.querySelector(".btn-brand" + (num + 1));
    // div.style.display = "block"
    animate(div, {
        left: 76,
        opacity: 1
    }, 200, Tween.Quad.easeOut);
}).mouseout(function () {
    $(this).css("background", "none");
    var num = $(".bro-btn").index($(this));
    $("img:eq(" + (num + 1) + ")").attr("src", $(".btn3w").html());
    var div = document.querySelector(".btn-brand" + (num + 1));
    // div.style.display = "block"
    animate(div, {
        left: 120,
        opacity: 0
    }, 200, Tween.Quad.easeOut);
    var st = document.documentElement.scrollTop;
    if (st > 2016 && st < 2880) {
        $(this).css("background", "white");
        var num = $(".bro-btn").index($(this));
        $(".btn" + (num + 1)).attr("src", $(".btn3b").html());
    }
})
$(".bro-btn:eq(3)").mouseover(function () {
    $(this).css("background", "white");
    var num = $(".bro-btn").index($(this));
    $(".btn" + (num + 1)).attr("src", $(".btn4b").html());
    var div = document.querySelector(".btn-brand" + (num + 1));
    // div.style.display = "block"
    animate(div, {
        left: 76,
        opacity: 1
    }, 200, Tween.Quad.easeOut);
}).mouseout(function () {
    $(this).css("background", "none");
    var num = $(".bro-btn").index($(this));
    $("img:eq(" + (num + 1) + ")").attr("src", $(".btn4w").html());
    var div = document.querySelector(".btn-brand" + (num + 1));
    // div.style.display = "block"
    animate(div, {
        left: 120,
        opacity: 0
    }, 200, Tween.Quad.easeOut);
    var st = document.documentElement.scrollTop;
})
$(".bro-btn:eq(4)").mouseover(function () {
    $(this).css("background", "white");
    var num = $(".bro-btn").index($(this));
    $(".btn" + (num + 1)).attr("src", $(".btn5b").html());
    var div = document.querySelector(".btn-brand" + (num + 1));
    // div.style.display = "block"
    animate(div, {
        left: 76,
        opacity: 1
    }, 200, Tween.Quad.easeOut);
}).mouseout(function () {
    $(this).css("background", "none");
    var num = $(".bro-btn").index($(this));
    $("img:eq(" + (num + 1) + ")").attr("src", $(".btn5w").html());
    var div = document.querySelector(".btn-brand" + (num + 1));
    // div.style.display = "block"
    animate(div, {
        left: 120,
        opacity: 0
    }, 200, Tween.Quad.easeOut);
    var st = document.documentElement.scrollTop;
    if (st > 2879) {
        $(this).css("background", "white");
        var num = $(".bro-btn").index($(this));
        $(".btn" + (num + 1)).attr("src", $(".btn5b").html());
    }
})
//侧边栏点击
$(".bro-btn:eq(0)").click(function () {
    console.log(1);
    animate(document.documentElement, {
        scrollTop: 0
    }, 500)
    //document.documentElement.scrollTop = 0;
})
$(".bro-btn:eq(1)").click(function () {
    animate(document.documentElement, {
        scrollTop: 1073
    }, 500)
    //document.documentElement.scrollTop = 1073;
});
$(".bro-btn:eq(2)").click(function () {
    animate(document.documentElement, {
        scrollTop: 2160
    }, 500)
    //document.documentElement.scrollTop = 2160;
})
$(".bro-btn:eq(3)").click(function () {
    animate(document.documentElement, {
        scrollTop: 2880
    }, 500)
    //document.documentElement.scrollTop = 3090;
})
$(".bro-btn:eq(4)").click(function () {
    console.log(1);
    window.location.href = "moreContent.css";
})
//右侧导航
$(".right-btn li:eq(0)").click(function () {
    console.log(1);
    animate(document.documentElement, {
        scrollTop: 0
    }, 500)
    //document.documentElement.scrollTop = 0;
})
$(".right-btn li:eq(1)").click(function () {
    console.log(1);
    animate(document.documentElement, {
        scrollTop: 1073
    }, 500)
    //document.documentElement.scrollTop = 0;
})
$(".right-btn li:eq(2)").click(function () {
    console.log(1);
    animate(document.documentElement, {
        scrollTop: 2160
    }, 500)
    //document.documentElement.scrollTop = 0;
})
$(".right-btn li:eq(3)").click(function () {
    console.log(1);
    animate(document.documentElement, {
        scrollTop: 2880
    }, 500)
    //document.documentElement.scrollTop = 0;
})

//
var flag = 0;
$(".bro-icon2").click(function () {
    if (flag == 0) {
        $(".icon2-1").css("transform", "scale(0)");
        $(".icon2-2").css("transform", "scale(1)");
        $(".icon2-brand").css("transform", "translateY(-50%) scale(1)");
        flag = 1;
    } else {
        $(".icon2-1").css("transform", "scale(1)");
        $(".icon2-2").css("transform", "scale(0)");
        $(".icon2-brand").css("transform", "translateY(-50%) scale(0)");
        flag = 0;
    }
})
$(".icon2-brand").mouseover(function () {
    $(".icon2-brand").css("background", "black");
    $(".weibo-1").css("transform", "scale(0)");
    $(".weibo-2").css("transform", "scale(1)");
}).mouseout(function () {
    $(".icon2-brand").css("background", "white");
    $(".weibo-1").css("transform", "scale(1)");
    $(".weibo-2").css("transform", "scale(0)");

})
//侧边栏操作结束
//滚轮 控制视频消失
var before;
setInterval(function () {
    before = document.documentElement.scrollTop;
}, 50)
window.onscroll = function (e) {
    var div = document.getElementsByClassName("logo-con");
    var st = document.documentElement.scrollTop;
    var stc = st;
    var flag;
    if ((st - before) > 0) {
        flag = 1;
    } else {
        flag = 0;
    }
    //console.log("before" + before + "after" + st);
    //console.log(st - before);
    $(".bro-btn").css("background", "none");
    for (var num = 0; num < 5; num++) {
        $("img:eq(" + (num + 1) + ")").attr("src", $(".btn"+(num + 1)+"w").html());
    }
    $(".innerbtn").css({
        "width": 8,
        "height": 8
    })

    //滚轮位置判断导航颜色
    if (st >= 0 && st < 1073) {
        //console.log(1);
        $(".bro-btn:eq(0)").css("background", "white");
        $("img:eq(1)").attr("src", $(".btn1b").html());
        $(".innerbtn:eq(0)").css({
            "width": 16,
            "height": 16
        })
    }
    if (st > 1072 && st < 2016) {
        $(".bro-btn:eq(1)").css("background", "white");
        $("img:eq(2)").attr("src", $(".btn2b").html());
        $(".innerbtn:eq(1)").css({
            "width": 16,
            "height": 16
        })
    }
    if (st > 2016 && st < 2880) {
        $(".bro-btn:eq(2)").css("background", "white");
        $("img:eq(3)").attr("src", $(".btn3b").html());
        $(".innerbtn:eq(2)").css({
            "width": 16,
            "height": 16
        })
    }

    if (st > 2879) {
        $(".bro-btn:eq(3)").css("background", "white");
        $("img:eq(4)").attr("src", $(".btn4b").html());
        $(".innerbtn:eq(3)").css({
            "width": 16,
            "height": 16
        })
    }
    //滚轮移动主图的移动
    if (st > 125 && st < 624) {
        var div = document.querySelector(".logo-con");
        if (flag == 1 && parseInt(div.style.top) < 680) {
            div.style.top = (div.offsetTop + 10) + "px";
            //$(".logo-con").css("top", parseInt($(".logo-con")[0].style.top) + 60);
        }
        if (flag == 0 && parseInt(div.style.top) > 360) {

            div.style.top = (div.offsetTop - 8) + "px";
        }

    }
    if (st <= 125) {
        $(".logo-con").css("top", "360px");
    }
    if (st > 1073) {
        $(".logo-con").css("top", "360px");
    }
}
//content2 的鼠标事件
$(".pic-con-1-img:eq(0)").hover(function () {
    console.log($(".cont3-b").html());
    $(".pic-con-1-img:eq(0) img").attr("src", $(".cont3b").html());
    $(this).css("background", "rgb(255,255,255)");
}, function () {
    $(".pic-con-1-img:eq(0) img").attr("src", $(".cont3w").html());
    $(this).css("background", "none");
})
$(".pic-con-1-img:eq(1)").hover(function () {
    //console.log(1)
    $(".pic-con-1-img:eq(1) img").attr("src", $(".cont1b").html());
    $(this).css("background", "rgb(255,255,255)");
}, function () {
    $(".pic-con-1-img:eq(1) img").attr("src", $(".cont1w").html());
    $(this).css("background", "none");
})
$(".pic-con-1-img:eq(2)").hover(function () {
    //console.log(1)
    $(".pic-con-1-img:eq(2) img").attr("src", $(".cont4b").html());
    $(this).css("background", "rgb(255,255,255)");
}, function () {
    $(".pic-con-1-img:eq(2) img").attr("src", $(".cont4w").html());
    $(this).css("background", "none");
})
$(".pic-con-1-img:eq(3)").hover(function () {
    //console.log(1)
    $(".pic-con-1-img:eq(3) img").attr("src", $(".cont2b").html());
    $(this).css("background", "rgb(255,355,355)");
}, function () {
    $(".pic-con-1-img:eq(3) img").attr("src", $(".cont2w").html());
    $(this).css("background", "none");
})
var down = 120;
var down2 =75;
var pic1 = 175;
var pic3 = 150;
$(document).on('mousewheel DOMMouseScroll', onMouseScroll);
function onMouseScroll(e){
   // e.preventDefault();
    var st = document.documentElement.scrollTop;

    console.log(st);
    var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    var delta = Math.max(-1, Math.min(1, wheel) );
    if(st>500&&delta<0){//向下滚动
       // console.log('向下滚动');
        if (down>0){
            down =down-20;
            //console.log(down);
        $(".content-1-img").css("transform","translateY(-"+down+"px)");
        }
    }
    if(300<st<879&&delta>0){//向上滚动
        //console.log('向上滚动');
        if (down<120){
            down =down+15;
            $(".content-1-img").css("transform","translateY(-"+down+"px)");
        }
    }

    if(st>1643&&delta<0){//向下滚动
        // console.log('向下滚动');
        if (down2>0){
            down2 =down2-20;
            console.log(down2);
            $(".pic-con-2-i").css("transform","translateY(-"+down2+"px)");
        }
    }
    if(1400<st<2028&&delta>0){//向上滚动
        //console.log('向上滚动');
        if (down2<75){
            down2 =down2+15;
            $(".pic-con-2-i").css("transform","translateY(-"+down2+"px)");
        }
    }

    if(st>2543&&delta<0){//向下滚动
        // console.log('向下滚动');
        if (pic1>0){
            pic1 =pic1-42.5;

            $(".cont3-pic1").css("transform","translateY(-"+pic1+"px)");
        }
    }
    if(2400<st<2961&&delta>0){//向上滚动
        //console.log('向上滚动');
        if (pic1<175){
            pic1 =pic1+42.5;
            $(".cont3-pic1").css("transform","translateY(-"+pic1+"px)");
        }
    }
    if(st>2642&&delta<0){//向下滚动
        // console.log('向下滚动');
        if (pic3>0){
            pic3 =pic3-50;
            $(".cont3-pic3").css("transform","translateY("+pic3+"px)");
        }
    }
    if(2400<st<2961&&delta>0){//向上滚动
        //console.log('向上滚动');
        if (pic3<150){
            pic3 =pic3+25;
            $(".cont3-pic3").css("transform","translateY("+pic3+"px)");
        }
    }
}