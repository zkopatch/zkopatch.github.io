$(document).ready(function(){
    $(".headerBoxAccent").css("visibility", "hidden");
    
    $("#greeting").show(1300);
    
    $('.headerBox').mouseenter(function(){
        $(this).css("color","green");
        $(this).css("font-weight","900");
        $(this).next().css("visibility", "visible");
        
        $(".headerBoxAccent").animate({
            left: '250px',
            opacity: '0.5',
            height: '4em',
            width: 'inherit'
        });
    });
    
    $('.headerBox').mouseleave(function(){
        $(this).css("color","white");
        $(this).css("font-weight","normal");
        $(this).next().css("visibility", "hidden");
        
        $(".headerBoxAccent").animate({
            left: '250px',
            opacity: '1.0',
            height: '.5em',
            width: 'inherit'
        });
    });
});