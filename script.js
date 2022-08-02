const myButton = document.getElementById('myBtn');


window.onscroll = function() {scrollFunction()};

//fade in scroll button

function scrollFunction () {
  if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
    myButton.style.opacity = 100;
  } else {
    myButton.style.opacity = 0;
  }
}

// when click scroll to top;

function scrollToTop() {
document.documentElement.scrollTo({
top: 0,
behavior: "smooth"
})
}
//call function
myButton.addEventListener("click", scrollToTop);


const tl = new gsap.timeline();

tl.from('.img, .heading, .menu, h1, p, .bottom-section', {
    duration: 1,
    y: 200,
    opacity: 0,
    stagger: {
        amount: 0.5,
    },

});


const menu_open = new gsap.timeline({
    paused: "true",
    reversed: "true"
});
menu_open.to('.menu-container', {
    display: 'flex'
});

menu_open.to('menuBtnDiv', {
    duration: 0.2,
    y: 50,
});

menu_open.fromTo(
    '#menuBtnDiv2',
    {
        duration: 0.2,
        y: -100,
    },
    {
        y: -50,
    },
    "-=.15"
);
menu_open.from(
    ".menu-container-1",
    {
      duration: 0.5,
      y: "100%",
    },
    "-=.5"
  );
  menu_open.from(
    ".menu-container-1 .menu-container-header li span, .menu-container-1 .menu-container-footer li span",
    {
      stagger: {
        amount: 0.15,
      },
      y: 100,
      duration: 0.5,
    },
    "-=.1"
  );
  menu_open.from(
    ".menu-container-2",
    {
      duration: 0.5,
      y: "-100%",
    },
    "-=1"
  );
  menu_open.from(
    ".menu-container-2 .menu-container-footer li span",
    {
      stagger: {
        amount: 0.15,
      },
      y: 100,
      duration: 0.5,
    },
    "-=.5"
  );
  function menuOpen() {
    menu_open.reversed() ? menu_open.play() : menu_open.reverse();
  }
