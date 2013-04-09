// JavaScript Document
var current="index";
$(document).ready(function(){
  $("#templatemo_menu a").click(function(){
    //assign the "current" class to the appropriate link on the menu bar
    $("#" + current).removeClass("current");
    current=$(this).attr("id");
    $("#" + current).addClass("current");
    //dynamic load of content
    $(".content_box").load(current + ".html .content_box");
  });
});
