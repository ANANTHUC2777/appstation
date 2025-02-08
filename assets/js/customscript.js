$(function () {
  // Scroll to Top
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      $("#return-to-top").fadeIn(200);
    } else {
      $("#return-to-top").fadeOut(200);
    }
  });
  $("#return-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      100
    );
  });
  //Sticky
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
      $("header").addClass("effect");
    } else {
      $("header").removeClass("effect");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const customNavMenu = document.querySelector(".custom-navMenu");
  const aside = document.querySelector("aside");
  const container = document.querySelector("header .container");
  const newAsideClse = document.createElement("div");
  aside.append(newAsideClse);
  newAsideClse.innerHTML = `
                <button class="btn btn-danger">
                  <i class="fa-solid fa-close"></i>
                </button>
              `;
  newAsideClse.classList.add("asideClose");
  //Aside Menu
  function checkWindowWidth() {
    if (window.innerWidth <= 1199) {
      aside.appendChild(customNavMenu);
    } else {
      if (customNavMenu && container && !container.contains(customNavMenu)) {
        container.appendChild(customNavMenu);
      }
    }
  }
  checkWindowWidth();
  window.addEventListener("resize", checkWindowWidth);

  //Aside Collapse
  const customHam = document.querySelector(".custom-ham");
  const sideClose = document.querySelector("aside .btn-danger");
  customHam.addEventListener("click", function () {
    console.log("custom btn clicked");
    const asideWrap = document.querySelector("aside");
    asideWrap.classList.add("aside--width");
  });
  if (sideClose) {
    sideClose.addEventListener("click", function () {
      console.log("sideClose btn clicked");
      const asideWrap = document.querySelector("aside");
      asideWrap.classList.remove("aside--width");
    });
  }

  //Wow js
  new WOW().init();

  //Dropdown Click
  const drp_btn = document.querySelectorAll(".custom-dropdown-btn");
  drp_btn.forEach((currEl) => {
    currEl.addEventListener("click", function (e) {
      e.stopPropagation();
      const customdropdown_wrap = currEl.parentNode;
      document.querySelectorAll(".custom-dropdown").forEach((dropdown) => {
        if (dropdown !== customdropdown_wrap) {
          dropdown.classList.remove("sort-effect");
        }
      });

      customdropdown_wrap.classList.toggle("sort-effect");
    });
  });
  document.addEventListener("click", function () {
    document.querySelectorAll(".custom-dropdown").forEach((dropdown) => {
      dropdown.classList.remove("sort-effect");
    });
  });

  //livematch slider
  $(".liveMatch-slideWrap").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    appendArrows: ".liveMatch-slideBtns",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //news slider
  $(".latestNews-sliderWrap").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    appendArrows: ".latestNews-sliderBtnWrap",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  //twitter slider
  $(".twitter-feed-sliderWrap").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    appendArrows: ".twitter-feed-sliderBtnWrap",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
