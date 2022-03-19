// const query = document.querySelector.bind(document);
// const queryAll = document.querySelectorAll.bind(document);

const app = {
  stickyNavMenu: function () {
    let nav_offset_top = $(".header-area").height() + 5;

    if ($(".header-area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header-area").addClass("navbar-fixed");
          console.log(scroll);
        } else {
          $(".header-area").removeClass("navbar-fixed");
        }
      });
    }
  },
  start: function () {
    this.stickyNavMenu();
  },
};

app.start();
