
$(function () {
  const scale = 0.2;

  $(".draggable").each(function () {
    $(this).on("load", function () {
      $(this).css({
        width: this.naturalWidth * scale + "px",
        height: "auto"
      });
    }).each(function () {
      if (this.complete) $(this).trigger("load");
    });
  });

 
  $(".draggable").draggable({
    containment: "body", 
    stack: ".draggable",
  });

  $(".card").draggable({
    stack: ".card"
  });
});