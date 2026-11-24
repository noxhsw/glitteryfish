$(function () {
  const scale = 0.25;

 $("#bottomtext").css({
    visibility: "hidden",
    opacity: 0
  });


  $(".draggable").each(function () {
    $(this).on("load", function () {
      const containerWidth = $(".container").width();
      const percentWidth = ((this.naturalWidth * scale) / containerWidth) * 100;

      $(this).css({
        width: percentWidth + "%",
        height: "auto"
      });
    });

    if (this.complete) $(this).trigger("load");
  });

   $(".draggable").draggable({
    containment: ".container",
    stop: function () {
      const container = $(".container")[0].getBoundingClientRect();
      let allInside = true;

      $(".draggable").each(function () {
        const part = this.getBoundingClientRect();

        const isInside =
          part.left >= container.left - 5 &&
          part.right <= container.right + 5 &&
          part.top >= container.top - 5 &&
          part.bottom <= container.bottom + 5;

        if (!isInside) {
          allInside = false;
        }
      });

      if (allInside) {
        $("#bottomtext")
          .css("visibility", "visible")
          .animate({ opacity: 1 }, 1000);
      }
    }
  });
});