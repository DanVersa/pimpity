
$(window).on("load", function() {
    $(".loadertext").fadeOut(1000);
    $(".loader").fadeOut(2000);
});

$(document).ready(function(){
    
    $('.heading').hide().delay(800);
    $('.hamspan').hide().delay(800);
    $('.heading').fadeIn(1500);
    $('.hamspan').delay(200).fadeIn(1500);

    $(".navbarbtn").mouseenter(function(){

        $("#btn-bar-2").css("transform", "translate(3px, 0px)");

    });
    
    $(".navbarbtn").mouseleave(function(){
        
        $("#btn-bar-2").css("transform", "translate(0px, 0px)");
        
    });

    $(".closebtn").mouseenter(function(){

        $("#btn-bar-close2").css("transform", "translate(-3px, 0px)");

    });
    
    $(".closebtn").mouseleave(function(){
        
        $("#btn-bar-close2").css("transform", "translate(0px, 0px)");
        
    });

    $(".callvenus").mouseenter(function(){

        $(".callvenus").html("716-854-1489");

    });
    
    $(".callvenus").mouseleave(function(){
        
        $(".callvenus").html("Call");
        
    });

    $("#food1").mouseenter(function(){

        $("#food1 h3").html("Chicken Shawarma placed over rice or fries and served with greek salad or extra chicken");

    });
    
    $("#food1").mouseleave(function(){
        
        $("#food1 h3").html("Chicken Shawarma");
        
    });

    $("#food2").mouseenter(function(){

        $("#food2 h3").html("Crisp falafel balls served with hummus");

    });
    
    $("#food2").mouseleave(function(){
        
        $("#food2 h3").html("Falafel Plate");
        
    });

    $("#food3").mouseenter(function(){

        $("#food3 h3").html("Souvlaki wrap served with lettuce, tomatoes, onions, feta cheese, and homemade garlic sauce");

    });
    
    $("#food3").mouseleave(function(){
        
        $("#food3 h3").html("Souvlaki Wrap");
        
    });

});
function openNav() {

    document.getElementById("navbarid").style.width = "100%";

}

function closeNav() {
    
    document.getElementById("navbarid").style.width = "0%";
    
}

function learn() {

    $('html, body').animate({

        scrollTop: $('.review').offset().top
        
    }, 200);

}