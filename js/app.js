for (let i = 1; i <= 52; i++) {
  $(`#btn${i}`).click(
    (fun = () => {
      if ($(`#openBody${i}`).hasClass("mb-30")) {
        $(`#openBody${i}`).removeClass("mb-30");
      } else {
        $(`#openBody${i}`).addClass("mb-30");
      }
      if ($(`#btn${i}`).hasClass("hidden")) {
        $(`#btn${i}`).removeClass("hidden");
        $(`#btnClose${i}`).addClass("hidden");
      } else {
        $(`#btn${i}`).addClass("hidden");
        $(`#btnClose${i}`).removeClass("hidden");
      }
      $(`#btn${i}`).addClass("pos-r");
      $(`#open${i}`).slideToggle(500);
    })
  );
  $(`#btnClose${i}`).click(function () {
    if ($(`#openBody${i}`).hasClass("mb-30")) {
      $(`#openBody${i}`).removeClass("mb-30");
    } else {
      $(`#openBody${i}`).addClass("mb-30");
    }
    if ($(`#btn${i}`).hasClass("hidden")) {
      $(`#btn${i}`).removeClass("hidden");
      $(`#btnClose${i}`).addClass("hidden");
    } else {
      $(`#btn${i}`).addClass("hidden");
      $(`#btnClose${i}`).removeClass("hidden");
    }
    $(`#open${i}`).slideToggle(500);
    setTimeout(() => {
      $(`#btn${i}`).removeClass("pos-r");
    }, 480);
  });
//   document.addEventListener("click", (e) => {
//     if (!(e.target.id === `#btn1${i}`)) {
//       $(`#open${i}`).slideToggle(500);
//     }
//   });
}
