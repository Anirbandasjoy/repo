$("#logu").click(function(){
    $("#MENU").slideUp(2000).slideDown(2000);
    $(".text").slideUp(2000).slideDown(2000);
    $(".main").animate({backgroundImage: url(img/tankTops001.jpg)},2000);
    
})
document.getElementById("#logu").click(function(){
    document.getElementsByClassName(".main").style.backgroundImage = "url('../img/tankTops001.jpg')"
})
