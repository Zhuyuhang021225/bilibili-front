$(function () {
    window.onwheel = function () {
        if (window.scrollY >= 1){
            $("header").css("height","66px");
            $("#main_label").css("display","none");
            $("header").css("position","sticky");
            $("header").css("top","0");
            $("header").css("z-index","100");
            $("header").css("background-color","white");
            $("header").css("box-shadow","none");
            $("#header").css("background-image","linear-gradient(white,white)");
            $("header").css("border-bottom","#E3E3E3 1px solid");
            $("#main_nav a").css("color","black");
            $("#b_icon").attr("src","img/zhuyuhang/b_icon_black.png");
            $("#code").attr("src","img/zhuyuhang/code_black.png");
            $("#functions_icon1").attr("src","img/zhuyuhang/dahuiyuan_black.png");
            $("#functions_icon2").attr("src","img/zhuyuhang/mesg_black.png");
            $("#functions_icon3").attr("src","img/zhuyuhang/dongtai_black.png");
            $("#functions_icon4").attr("src","img/zhuyuhang/shoucang_black.png");
            $("#functions_icon5").attr("src","img/zhuyuhang/lishi_black.png");
            $("#functions_icon6").attr("src","img/zhuyuhang/chuangzuozhongzin_black.png");
        }else {
            $("header").css("height","165px");
            $("#main_label").css("display","block");
            $("header").css("box-shadow","#555555 0px 10px 100px 5px inset");
            $("#main_nav a").css("color","white");
            $("#b_icon").attr("src","img/zhuyuhang/b_icon.png");
            $("#code").attr("src","img/zhuyuhang/code.png");
            $("#functions_icon1").attr("src","img/zhuyuhang/dahuiyuan.png");
            $("#functions_icon2").attr("src","img/zhuyuhang/mesg.png");
            $("#functions_icon3").attr("src","img/zhuyuhang/dongtai.png");
            $("#functions_icon4").attr("src","img/zhuyuhang/shoucang.png");
            $("#functions_icon5").attr("src","img/zhuyuhang/lishi.png");
            $("#functions_icon6").attr("src","img/zhuyuhang/chuangzuozhongzin.png");
            $("#header").css("background-image","url(http://localhost:63342/bilibili/img/zhuyuhang/839190887e48acd3960a850723f0e82e877946f0.png)");
        }
    }
})


function alert_user_center(){
    $("#user_center").css("display","block");
    var face = $("#face");
    face.css("top","53%");
    face.css("left","63%");
    face.css("width","82px");
    face.css("height","82px");
    var faceImg = $("#face_img");
    faceImg.css("width","82px");
    faceImg.css("height","82px");
}
function pop_user_center(){
    $("#user_center").css("display","none");
    var face = $("#face");
    face.css("top","30%");
    face.css("left","65%");
    face.css("width","35px");
    face.css("height","35px");
    var faceImg = $("#face_img");
    faceImg.css("width","35px");
    faceImg.css("height","35px");
}
function byteDance(event) {
    $(event).css("margin-top","-10px");
}
function changeColor(event) {
    $(event).css("background-color","#DDDDDD");
}
function backColor(event) {
    $(event).css("background-color","#FFFFFF");
}
