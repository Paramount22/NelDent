'use strict';

// Selectors
const hamburger = document.querySelector('[data-hamburger]');
const responsiveMenu = document.querySelector('[data-responsive-menu]');
const year = document.querySelector('[data-year]');
const menuLinks = responsiveMenu.querySelectorAll('.menu-link');
const mainLinks = document.querySelectorAll('.menu .menu-link');
const tooths = document.querySelectorAll('.fa-tooth');
const subsections = document.querySelectorAll('.subsection');
const offerLinks = document.querySelectorAll('.offer-menu a');
const backToTop = document.querySelector('.fa-caret-up');

// Functions

const hideOffers = () => {
  subsections.forEach((section, index) => {
    section.classList.add('hide');
    if (index === 0) {
      section.classList.remove('hide');
    }
  });
};

const removeActive = () => {
  offerLinks.forEach((link) => link.classList.remove('active'));
};

const getYear = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  year.innerText = fullYear;
};

const animationDelay = () => {
  tooths.forEach((thoot) => {
    setTimeout(() => {
      thoot.style.visibility = 'visible';
      thoot.style.opacity = 1;
    }, 500);
  });
};

const toggleSections = (number) => {
  subsections.forEach((section, index) => {
    section.classList.add('hide');
    if (index === number) {
      section.classList.remove('hide');
    }
  });
};

const remeoveAddActive = (link) => {
  removeActive(link);
  link.classList.add('active');
};

// smooth scroll
const smoothScroll = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetPosition = document.querySelector(targetId).offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 300;
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, distance * (progress / duration) + startPosition);
    if (progress < duration) window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
};

// back to top - hide and show
const scroll = () => {
  if (window.pageYOffset > 600) {
    if (!backToTop.classList.contains('fade-in-right')) {
      backToTop.classList.remove('fade-out-right');
      backToTop.classList.add('fade-in-right');
      backToTop.style.display = 'block'; // show
    }
  } else {
    if (backToTop.classList.contains('fade-in-right')) {
      backToTop.classList.remove('fade-in-right');
      backToTop.classList.add('fade-out-right');
      setTimeout(() => {
        backToTop.style.display = 'none'; // hide
      }, 350);
    }
  }
};

// smooth scroll back to top
const smoothScrollBackTop = () => {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 300;
  let start = null;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(0, distance * (progress / duration) + startPosition);
    if (progress < duration) window.requestAnimationFrame(step);
  };

  window.requestAnimationFrame(step);
};

// Listeners

window.addEventListener('scroll', scroll);
backToTop.addEventListener('click', smoothScrollBackTop);

// responsive links
menuLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

// desktop links
mainLinks.forEach((link) => {
  link.addEventListener('click', smoothScroll);
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    responsiveMenu.style.display = 'none';
    hamburger.classList.remove('is-active');
  });
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  responsiveMenu.style.display = 'block';
  setTimeout(() => {
    responsiveMenu.classList.add('open');
  }, 100);

  if (!hamburger.classList.contains('is-active')) {
    responsiveMenu.classList.remove('open');
    setTimeout(() => {
      responsiveMenu.style.display = 'none';
      responsiveMenu.classList.remove('open');
    }, 100);
  }
});

offerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (link.getAttribute('data-offer-1') === 'offer-1') {
      toggleSections(0);
      remeoveAddActive(link);
    }

    if (link.getAttribute('data-offer-2') === 'offer-2') {
      toggleSections(1);
      remeoveAddActive(link);
    }

    if (link.getAttribute('data-offer-3') === 'offer-3') {
      toggleSections(2);
      remeoveAddActive(link);
    }

    if (link.getAttribute('data-offer-4') === 'offer-4') {
      toggleSections(3);
      remeoveAddActive(link);
    }

    if (link.getAttribute('data-offer-5') === 'offer-5') {
      toggleSections(4);
      remeoveAddActive(link);
    }

    if (link.getAttribute('data-offer-6') === 'offer-6') {
      toggleSections(5);
      remeoveAddActive(link);
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  getYear();
  animationDelay();
  hideOffers();
});

// Lightbox settings
lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  fadeDuration: 200,
  imageFadeDuration: 200,
});
