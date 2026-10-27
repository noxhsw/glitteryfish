
$(".dark-btn").click(
    function(){
        $(".container").toggleClass("dark");

         $(".box").toggleClass("dark");
    }
);


$(".glow-btn").click(
    function(){
        $(".container").toggleClass("glow");

         $(".box").toggleClass("glow");
    }
);

$(".spin-btn").click(
    function(){

         $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){

        //$(".mush").addClass("reveal");

        $(".mush").css("opacity", "1");

        //$(".reveal-btn").css("display", "none");

        $(".reveal-btn").hide();
    }
);

//$( function() {
    $( ".mush" ).draggable();
// } );

$( function() {
    $( ".draggable" ).draggable();
  } );
 



