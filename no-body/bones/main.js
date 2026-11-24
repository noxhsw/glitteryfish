$(function () {
  const scale = 0.25;

 $("#bottomtext, #remove-btn").css({
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
        $("#bottomtext, #remove-btn")
          .css("visibility", "visible")
          .animate({ opacity: 1 }, 1000);
      }
    }
  });

  $("#remove-btn").on("click", function () {
    $("body")
      .children()
      .not("script")
      .fadeOut(400)
      .promise()
      .done(function () {
        $(this).remove();

        $("body").css("background-color", "black");

        const newContent = $(`
          <div class="text" id="bones" style="display: none;">
            <p> <br> this is the only way i can fit in a box...</p>
            <img src="../images/skeletonbg.png"> <br>
            <a href="../index.html">i want to look at FLESH or SKIN</a>
          </div>
        `);

        $("body").prepend(newContent);
        newContent.fadeIn(600);
      });
  });
});