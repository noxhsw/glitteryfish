 $(".word-btn").click(
    function(){
        $(".container").toggleClass("dark");

         $(".draggable").toggleClass("dark");

         $(".word-btn").hide();

        $(".unword-btn").show(); 
    }

);

$(".unword-btn").click(function(){

    $(".container").hide();

    $("body").css("background", "black");
  
    $(".unword-btn").hide();
  
    $(".ending").show();

    $(".card").show();

});

$(function() {
    $( ".draggable" ).draggable({
        containment: ".container"
    });
});

$(function() {
    $( ".card" ).draggable({
        
    });
});


