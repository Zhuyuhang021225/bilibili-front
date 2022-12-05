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
function search_box1(){
    $(".search_box").css("border","#00AEFD 1px solid");
}
function search_box2() {
    $(".search_box").css("border","#ccd0d7 1px solid");
}