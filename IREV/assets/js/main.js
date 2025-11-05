/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./IREV/src/js/header.js":
/*!*******************************!*\
  !*** ./IREV/src/js/header.js ***!
  \*******************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.querySelectorAll('.header_menu_item[data-dropdown-trigger]');
  var closeTimeout;
  menuItems.forEach(function (item) {
    var trigger = item.querySelector('.header_menu_item_inner');
    var dropdown = item.querySelector('.nav_dropdown');
    if (!trigger || !dropdown) return;
    trigger.addEventListener('mouseenter', function () {
      clearTimeout(closeTimeout);
      closeAllDropdowns();
      item.classList.add('active');
      dropdown.style.display = 'flex';
    });
    trigger.addEventListener('mouseleave', function () {
      closeTimeout = setTimeout(function () {
        if (!dropdown.matches(':hover')) {
          closeDropdown(item, dropdown);
        }
      }, 150);
    });
    dropdown.addEventListener('mouseenter', function () {
      return clearTimeout(closeTimeout);
    });
    dropdown.addEventListener('mouseleave', function () {
      closeTimeout = setTimeout(function () {
        closeDropdown(item, dropdown);
      }, 150);
    });
  });
  function closeDropdown(item, dropdown) {
    item.classList.remove('active');
    dropdown.style.display = 'none';
  }
  function closeAllDropdowns() {
    document.querySelectorAll('.header_menu_item.active').forEach(function (activeItem) {
      var dropdown = activeItem.querySelector('.nav_dropdown');
      if (dropdown) dropdown.style.display = 'none';
      activeItem.classList.remove('active');
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllDropdowns();
  });
});

/***/ }),

/***/ "./IREV/src/js/home/home-gear1.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear1.js ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./IREV/src/js/home/home-gear2.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear2.js ***!
  \****************************************/
/***/ (() => {

var container = document.querySelector('.home_gear2_lower_container');
var nitroImg = document.querySelector('.nitro-effect img');
var revText = document.querySelector('.home_gear2_lower_container_rev');
function updateScrollAnimation() {
  var partnerSection = document.querySelector('.home');
  if (!partnerSection) {
    return;
  }
  var rect = container.getBoundingClientRect();
  var windowHeight = window.innerHeight;
  var progress = 1 - rect.top / windowHeight;
  progress = Math.min(Math.max(progress, 0), 1);
  var shift = Math.min(1220 - revText.offsetWidth, window.innerWidth - revText.offsetWidth - 60);
  revText.style.transform = "translateX(".concat(progress * shift, "px)");
  nitroImg.style.transform = "scaleX(".concat(progress, ")");
}
function onScroll() {
  var partnerSection = document.querySelector('.home');
  if (!partnerSection) {
    return;
  }
  requestAnimationFrame(updateScrollAnimation);
}
window.addEventListener('scroll', onScroll);
window.addEventListener('resize', updateScrollAnimation);
updateScrollAnimation();

// parallax
document.addEventListener('DOMContentLoaded', function () {
  var partnersec = document.querySelector('.home');
  if (!partnersec) return;
  var partnerSection = document.querySelector('.home_gear2_upper_container');
  var parallaxImg = document.querySelector('.home_gear2_upper_container img');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var rect = partnerSection.getBoundingClientRect();
      var scrolled = -rect.top;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      partnerSection.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.classList.add('parallax');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});

/***/ }),

/***/ "./IREV/src/js/home/home-gear3.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear3.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  var avatarButtons = document.querySelectorAll(".avatar-item button");
  var reviewsContainer = document.querySelector(".home_gear3_reviews");
  var reviews = document.querySelectorAll(".home_gear3_reviews_review");
  function centerReview(targetClient) {
    var activeReview = document.querySelector(".home_gear3_reviews_review[data-client=\"".concat(targetClient, "\"]"));
    if (!activeReview) return;
    var containerWidth = reviewsContainer.offsetWidth;
    var reviewWidth = activeReview.offsetWidth;
    var gap = 40;
    var reviewIndex = Array.from(reviews).indexOf(activeReview);
    var totalItemsWidth = reviewIndex * (reviewWidth + gap);
    var offset = containerWidth / 2 - reviewWidth / 2 - totalItemsWidth;
    reviewsContainer.style.transition = "transform 0.6s ease";
    reviewsContainer.style.transform = "translateX(".concat(offset, "px)");
  }
  function switchReview(target) {
    document.querySelectorAll(".avatar-item").forEach(function (a) {
      return a.classList.remove("selected");
    });
    reviews.forEach(function (r) {
      return r.classList.remove("selected");
    });
    var selectedAvatar = document.querySelector(".avatar-item button[data-trigger=\"".concat(target, "\"]")).closest(".avatar-item");
    var activeReview = document.querySelector(".home_gear3_reviews_review[data-client=\"".concat(target, "\"]"));
    if (selectedAvatar && activeReview) {
      selectedAvatar.classList.add("selected");
      activeReview.classList.add("selected");
      centerReview(target);
    }
  }
  avatarButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var target = button.getAttribute("data-trigger");
      switchReview(target);
    });
  });
  function initCenterReview() {
    setTimeout(function () {
      var initialSelected = document.querySelector('.avatar-item.selected button');
      if (initialSelected) {
        var initialTarget = initialSelected.getAttribute("data-trigger");
        centerReview(initialTarget);
      }
    }, 100);
  }
  initCenterReview();
  window.addEventListener('resize', function () {
    var currentSelected = document.querySelector('.avatar-item.selected button');
    if (currentSelected) {
      var currentTarget = currentSelected.getAttribute("data-trigger");
      setTimeout(function () {
        return centerReview(currentTarget);
      }, 50);
    }
  });
});

// cases
document.addEventListener('DOMContentLoaded', function () {
  var container = document.querySelector('.home_gear3_lower_container');
  var cases = document.querySelectorAll('.home_gear3_lower_container .case');
  var config = {
    triggerOffset: 0.3,
    stepDelay: 0.15,
    animationDistance: 30
  };
  function handleScrollAnimation() {
    if (!container) return;
    var containerRect = container.getBoundingClientRect();
    var containerTop = containerRect.top;
    var containerHeight = containerRect.height;
    var windowHeight = window.innerHeight;
    var containerBottom = containerTop + containerHeight;
    var triggerPoint = windowHeight * config.triggerOffset;
    if (containerTop < windowHeight - triggerPoint && containerBottom > triggerPoint) {
      var visibleHeight = Math.min(containerBottom, windowHeight) - Math.max(containerTop, 0);
      var maxScrollable = containerHeight - windowHeight + windowHeight * config.triggerOffset;
      var scrolled = -containerTop + windowHeight * config.triggerOffset;
      var scrollProgress = Math.max(0, Math.min(1, scrolled / maxScrollable));
      cases.forEach(function (caseEl, index) {
        var threshold = index * config.stepDelay;
        if (scrollProgress >= threshold) {
          caseEl.classList.add('case-visible');
          caseEl.classList.remove('case-hidden');
        } else {
          caseEl.classList.add('case-hidden');
          caseEl.classList.remove('case-visible');
        }
      });
    } else {
      cases.forEach(function (caseEl) {
        caseEl.classList.add('case-hidden');
        caseEl.classList.remove('case-visible');
      });
    }
  }
  var ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(function () {
        handleScrollAnimation();
        ticking = false;
      });
      ticking = true;
    }
  }
  handleScrollAnimation();
  window.addEventListener('scroll', onScroll, {
    passive: true
  });
});

// parallax
document.addEventListener('DOMContentLoaded', function () {
  var partnersec = document.querySelector('.home');
  if (!partnersec) return;
  var partnerSection = document.querySelector('.home_gear3_container');
  var parallaxImg = document.querySelector('.home_gear3_background');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var rect = partnerSection.getBoundingClientRect();
      var scrolled = -rect.top;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      partnerSection.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.classList.add('parallax');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});

/***/ }),

/***/ "./IREV/src/js/home/home-gear4.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear4.js ***!
  \****************************************/
/***/ (() => {

// parallax
document.addEventListener('DOMContentLoaded', function () {
  var partnerSection = document.querySelector('.home_gear4_container');
  var parallaxImg = document.querySelectorAll('.home_gear4_container img');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var rect = partnerSection.getBoundingClientRect();
      var scrolled = -rect.top;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      partnerSection.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.forEach(function (img) {
      return img.classList.add('parallax');
    });
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var partnersec = document.querySelector('.home');
  if (!partnersec) return;
  var partnerSection = document.querySelector('.home_gear4_lower_container');
  var parallaxImg = document.querySelectorAll('.gear4back');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var rect = partnerSection.getBoundingClientRect();
      var scrolled = -rect.top;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      partnerSection.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.forEach(function (img) {
      return img.classList.add('parallax');
    });
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});

/***/ }),

/***/ "./IREV/src/js/home/home-gear5.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear5.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var accordionItems = document.querySelectorAll('.accordion_item');
  accordionItems.forEach(function (item) {
    var button = item.querySelector('button');
    if (button) {
      button.addEventListener('click', function () {
        if (item.classList.contains('opened')) {
          item.classList.remove('opened');
        } else {
          accordionItems.forEach(function (otherItem) {
            otherItem.classList.remove('opened');
          });
          item.classList.add('opened');
        }
      });
    }
  });
});

/***/ }),

/***/ "./IREV/src/js/home/home-gear6.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-gear6.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var partnerSection = document.querySelector('.home_gear6_container');
  var parallaxImg = document.querySelectorAll('.home_gear6_container img');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var rect = partnerSection.getBoundingClientRect();
      var scrolled = -rect.top;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      partnerSection.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.forEach(function (img) {
      return img.classList.add('parallax');
    });
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});

/***/ }),

/***/ "./IREV/src/js/home/home-popup.js":
/*!****************************************!*\
  !*** ./IREV/src/js/home/home-popup.js ***!
  \****************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var popupOverlay = document.querySelector('.home_popup_overlay');
  var closeButton = document.querySelector('.home_popup_content_upper button');
  var form = document.querySelector('.home_popup_content form');
  var openButtons = document.querySelectorAll('.home_represent_form_container_button, .open_modal');
  var timerElement = document.querySelector('.home_popup_content_label_wrapper_counter');
  var timerInterval = null;
  function startTimer() {
    if (!timerElement) return;
    var totalSeconds = 15 * 60;
    if (timerInterval) {
      clearInterval(timerInterval);
    }
    timerInterval = setInterval(function () {
      var hours = Math.floor(totalSeconds / 3600);
      var minutes = Math.floor(totalSeconds % 3600 / 60);
      var seconds = totalSeconds % 60;
      var formattedTime = String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
      timerElement.textContent = formattedTime;
      if (--totalSeconds < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "00:00:00";
        timerComplete();
      }
    }, 1000);
  }
  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }
  function resetTimer() {
    stopTimer();
    if (timerElement) {
      timerElement.textContent = "00:15:00";
    }
  }
  function timerComplete() {
    console.log("Таймер завершен!");
  }
  function openPopup() {
    if (popupOverlay) {
      popupOverlay.style.display = 'block';
      document.body.style.overflow = 'hidden';
      setTimeout(function () {
        popupOverlay.classList.add('active');
        startTimer();
      }, 10);
    }
  }
  function closePopup() {
    if (popupOverlay) {
      popupOverlay.classList.remove('active');
      setTimeout(function () {
        popupOverlay.style.display = 'none';
        document.body.style.overflow = '';
        stopTimer();
        resetTimer();
      }, 300);
    }
  }
  if (openButtons) {
    openButtons.forEach(function (openButton) {
      openButton.addEventListener('click', function (e) {
        e.preventDefault();
        openPopup();
      });
    });
  }
  if (closeButton) {
    closeButton.addEventListener('click', closePopup);
  }
  if (popupOverlay) {
    popupOverlay.addEventListener('click', function (e) {
      if (e.target === popupOverlay) {
        closePopup();
      }
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  });

  // video
  var video = document.getElementById('popupVideo');
  var videoContainer = document.querySelector('.home_popup_content_lower_rightcont_video');
  var playButton = videoContainer.querySelector('img'); // находим изображение кнопки play

  function updatePlayButtonVisibility() {
    if (video.paused) {
      playButton.style.display = 'block';
    } else {
      playButton.style.display = 'none';
    }
  }
  video.addEventListener('play', updatePlayButtonVisibility);
  video.addEventListener('pause', updatePlayButtonVisibility);
  video.addEventListener('ended', function () {
    playButton.style.display = 'block';
  });
  videoContainer.addEventListener('click', function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  updatePlayButtonVisibility();
});
document.addEventListener('DOMContentLoaded', function () {
  var policyCheckbox = document.getElementById('policyCheckbox');
  var agreeCheckbox = document.getElementById('agreeCheckbox');
  var submitButton = document.getElementById('submitButton');
  if (!policyCheckbox || !agreeCheckbox || !submitButton) {
    return;
  }
  var checkboxes = [policyCheckbox, agreeCheckbox];
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      this.classList.toggle('selected');
      var bothChecked = policyCheckbox.checked && agreeCheckbox.checked;
      if (bothChecked) {
        submitButton.classList.add('selected');
        submitButton.disabled = false;
      } else {
        submitButton.classList.remove('selected');
        submitButton.disabled = true;
      }
    });
  });
});

/***/ }),

/***/ "./IREV/src/js/home/home-represent.js":
/*!********************************************!*\
  !*** ./IREV/src/js/home/home-represent.js ***!
  \********************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var testDriveButton = document.querySelector('.home_represent_form_container_button');
  var input = document.querySelector('.home_represent_form_container_input');
  function checkInputValue() {
    if (input.value.trim() !== '') {
      testDriveButton.classList.add('has-value');
    } else {
      testDriveButton.classList.remove('has-value');
    }
  }
  input.addEventListener('input', checkInputValue);
  checkInputValue();
});
document.addEventListener('DOMContentLoaded', function () {
  var partnerSection = document.querySelector('.home');
  if (!partnerSection) {
    return;
  }
  var counterElement = document.querySelector('.home_represent_counter span');
  var counterDiv = document.querySelector('.home_represent_counter');
  var signInButton = document.querySelector('.header_signIn');
  var input = document.querySelector('.home_represent_form_container_input');
  var elements = [counterDiv, signInButton, input];
  var totalSeconds = 3 * 100;
  function updateTimer() {
    totalSeconds--;
    if (totalSeconds < 0) {
      elements.forEach(function (element) {
        return element.classList.remove('one', 'two');
      });
      elements.forEach(function (element) {
        return element.classList.add('go');
      });
      counterElement.textContent = '00:00,00';
      return;
    }
    var seconds = Math.floor(totalSeconds / 100);
    var hundredths = totalSeconds % 100;
    var formattedSeconds = seconds.toString().padStart(2, '0');
    var formattedHundredths = hundredths.toString().padStart(2, '0');
    counterElement.textContent = "00:".concat(formattedSeconds, ",").concat(formattedHundredths);
    switch (totalSeconds) {
      case 200:
        {
          elements.forEach(function (element) {
            return element.classList.add('two');
          });
          break;
        }
      case 100:
        {
          elements.forEach(function (element) {
            return element.classList.remove('two');
          });
          elements.forEach(function (element) {
            return element.classList.add('one');
          });
          break;
        }
    }
    setTimeout(updateTimer, 10);
  }
  setTimeout(updateTimer, 10);
});
document.addEventListener('DOMContentLoaded', function () {
  // email save

  var mainEmailInput = document.querySelector('.home_represent_form_container_input');
  var popupEmailInput = document.querySelector('.home_popup_content_form_inputs input[type="email"]');
  if (mainEmailInput && popupEmailInput) {
    mainEmailInput.addEventListener('input', function () {
      popupEmailInput.value = this.value;
    });
    popupEmailInput.addEventListener('input', function () {
      mainEmailInput.value = this.value;
    });
    if (mainEmailInput.value) {
      popupEmailInput.value = mainEmailInput.value;
    }
  }

  // checkbox save
});

// paralax
document.addEventListener('DOMContentLoaded', function () {
  var partnerSection = document.querySelector('.home');
  if (!partnerSection) {
    return;
  }
  var parallaxImg = document.querySelector('.home_represent_backgroundImg');
  if (parallaxImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var updateParallax = function updateParallax() {
      var scrolled = window.pageYOffset;
      var speed = 0.3;
      var offset = scrolled * speed + 'px';
      document.documentElement.style.setProperty('--parallax-offset', offset);
    };
    parallaxImg.classList.add('parallax');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(function () {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    });
    updateParallax();
  }
});

/***/ }),

/***/ "./IREV/src/js/home/home-video-popup.js":
/*!**********************************************!*\
  !*** ./IREV/src/js/home/home-video-popup.js ***!
  \**********************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  var videoWrapper = document.querySelector('.home_represent_lowerWrapper_video');
  var modalOverlay = document.getElementById('modalOverlay');
  var originalVideo = videoWrapper ? videoWrapper.querySelector('video') : null;
  var modalVideo = modalOverlay ? modalOverlay.querySelector('video') : null;
  var playButton = videoWrapper ? videoWrapper.querySelector('.video_player button') : null;
  var originalPlayImg = videoWrapper ? videoWrapper.querySelector('.video_cont img') : null;
  var modalPlayImg = modalOverlay ? modalOverlay.querySelector('.modal-video img') : null;
  var currentTime = 0;
  function togglePlayButton(video, playImg) {
    if (!video || !playImg) return;
    if (video.paused) {
      playImg.style.display = 'block';
    } else {
      playImg.style.display = 'none';
    }
  }
  function setupVideoListeners(video, playImg) {
    if (!video || !playImg) return;
    video.addEventListener('play', function () {
      playImg.style.display = 'none';
    });
    video.addEventListener('pause', function () {
      playImg.style.display = 'block';
    });
    video.addEventListener('ended', function () {
      playImg.style.display = 'block';
      video.currentTime = 0;
    });
  }
  if (originalVideo && originalPlayImg) {
    setupVideoListeners(originalVideo, originalPlayImg);
    togglePlayButton(originalVideo, originalPlayImg);
  }
  if (modalVideo && modalPlayImg) {
    setupVideoListeners(modalVideo, modalPlayImg);
    modalPlayImg.style.display = 'none';
  }
  if (playButton && originalVideo) {
    playButton.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (originalVideo.paused) {
        originalVideo.play();
      } else {
        originalVideo.pause();
      }
    });
  }
  function openModalWithVideo() {
    if (!originalVideo || !modalVideo) return;
    currentTime = originalVideo.currentTime;
    originalVideo.pause();
    if (originalPlayImg) {
      originalPlayImg.style.display = 'none';
    }
    modalVideo.currentTime = currentTime;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalVideo.play()["catch"](function (e) {
      return console.log('Modal video play error:', e);
    });
    if (modalPlayImg) {
      modalPlayImg.style.display = 'none';
    }
  }
  function closeModal() {
    if (!originalVideo || !modalVideo) return;
    currentTime = modalVideo.currentTime;
    modalVideo.pause();
    if (modalPlayImg) {
      modalPlayImg.style.display = 'none';
    }
    originalVideo.currentTime = currentTime;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (originalPlayImg) {
      originalPlayImg.style.display = 'block';
    }
    resetForm();
  }
  if (videoWrapper && modalOverlay) {
    videoWrapper.addEventListener('click', function (e) {
      // Проверяем, что клик не по кнопке управления в video_player
      if (!playButton || !playButton.contains(e.target)) {
        e.preventDefault();
        e.stopPropagation();
        openModalWithVideo();
      }
    });
  }
  if (originalPlayImg) {
    originalPlayImg.addEventListener('click', function (e) {
      e.stopPropagation();
      openModalWithVideo();
    });
  }
  if (modalVideo) {
    modalVideo.addEventListener('click', function (e) {
      e.stopPropagation();
      if (modalVideo.paused) {
        modalVideo.play();
      } else {
        modalVideo.pause();
      }
    });
  }
  if (modalPlayImg) {
    modalPlayImg.addEventListener('click', function (e) {
      e.stopPropagation();
      modalVideo.play();
    });
  }
  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
  var submitButton = document.querySelector('.form-button');
  var emailInput = document.querySelector('.form-input');
  if (submitButton && emailInput) {
    submitButton.addEventListener('click', function (e) {
      e.preventDefault();
      var email = emailInput.value.trim();
      if (validateEmail(email)) {
        console.log('Email submitted:', email);
        closeModal();
      } else {
        showErrorInPlaceholder();
      }
    });
    emailInput.addEventListener('input', function () {
      if (this.classList.contains('error')) {
        resetForm();
      }
    });
  }
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function showErrorInPlaceholder() {
    if (emailInput) {
      emailInput.value = '';
      emailInput.placeholder = 'Please enter a valid email address';
      emailInput.classList.add('error');
    }
  }
  function resetForm() {
    if (emailInput) {
      emailInput.value = '';
      emailInput.placeholder = 'Enter e-mail';
      emailInput.classList.remove('error');
    }
  }
});

/***/ }),

/***/ "./IREV/src/scss/index.scss":
/*!**********************************!*\
  !*** ./IREV/src/scss/index.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./IREV/src/js/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ "./IREV/src/scss/index.scss");

__webpack_require__(/*! ./header.js */ "./IREV/src/js/header.js");
__webpack_require__(/*! ./home/home-represent.js */ "./IREV/src/js/home/home-represent.js");
__webpack_require__(/*! ./home/home-popup.js */ "./IREV/src/js/home/home-popup.js");
__webpack_require__(/*! ./home/home-video-popup.js */ "./IREV/src/js/home/home-video-popup.js");
__webpack_require__(/*! ./home/home-gear1.js */ "./IREV/src/js/home/home-gear1.js");
__webpack_require__(/*! ./home/home-gear2.js */ "./IREV/src/js/home/home-gear2.js");
__webpack_require__(/*! ./home/home-gear3.js */ "./IREV/src/js/home/home-gear3.js");
__webpack_require__(/*! ./home/home-gear4.js */ "./IREV/src/js/home/home-gear4.js");
__webpack_require__(/*! ./home/home-gear5.js */ "./IREV/src/js/home/home-gear5.js");
__webpack_require__(/*! ./home/home-gear6.js */ "./IREV/src/js/home/home-gear6.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUU7TUFDckI4QixVQUFVLENBQUNNLFdBQVcsR0FBRyxjQUFjO01BQ3ZDTixVQUFVLENBQUM1SyxTQUFTLENBQUNPLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDeEM7RUFDSjtBQUNKLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUN4TUY7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ04yQjtBQUMzQjRLLG1CQUFPLENBQUMsNENBQWEsQ0FBQztBQUN0QkEsbUJBQU8sQ0FBQyxzRUFBMEIsQ0FBQztBQUNuQ0EsbUJBQU8sQ0FBQyw4REFBc0IsQ0FBQztBQUMvQkEsbUJBQU8sQ0FBQywwRUFBNEIsQ0FBQztBQUNyQ0EsbUJBQU8sQ0FBQyw4REFBc0IsQ0FBQztBQUMvQkEsbUJBQU8sQ0FBQyw4REFBc0IsQ0FBQztBQUMvQkEsbUJBQU8sQ0FBQyw4REFBc0IsQ0FBQztBQUMvQkEsbUJBQU8sQ0FBQyw4REFBc0IsQ0FBQztBQUMvQkEsbUJBQU8sQ0FBQyw4REFBc0IsQ0FBQztBQUMvQkEsbUJBQU8sQ0FBQyw4REFBc0IsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vSVJFVi8uL0lSRVYvc3JjL2pzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9JUkVWLy4vSVJFVi9zcmMvanMvaG9tZS9ob21lLWdlYXIyLmpzIiwid2VicGFjazovL0lSRVYvLi9JUkVWL3NyYy9qcy9ob21lL2hvbWUtZ2VhcjMuanMiLCJ3ZWJwYWNrOi8vSVJFVi8uL0lSRVYvc3JjL2pzL2hvbWUvaG9tZS1nZWFyNC5qcyIsIndlYnBhY2s6Ly9JUkVWLy4vSVJFVi9zcmMvanMvaG9tZS9ob21lLWdlYXI1LmpzIiwid2VicGFjazovL0lSRVYvLi9JUkVWL3NyYy9qcy9ob21lL2hvbWUtZ2VhcjYuanMiLCJ3ZWJwYWNrOi8vSVJFVi8uL0lSRVYvc3JjL2pzL2hvbWUvaG9tZS1wb3B1cC5qcyIsIndlYnBhY2s6Ly9JUkVWLy4vSVJFVi9zcmMvanMvaG9tZS9ob21lLXJlcHJlc2VudC5qcyIsIndlYnBhY2s6Ly9JUkVWLy4vSVJFVi9zcmMvanMvaG9tZS9ob21lLXZpZGVvLXBvcHVwLmpzIiwid2VicGFjazovL0lSRVYvLi9JUkVWL3NyYy9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vSVJFVi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9JUkVWL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vSVJFVi8uL0lSRVYvc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX21lbnVfaXRlbVtkYXRhLWRyb3Bkb3duLXRyaWdnZXJdJyk7XHJcbiAgICBsZXQgY2xvc2VUaW1lb3V0O1xyXG5cclxuICAgIG1lbnVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IHRyaWdnZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfbWVudV9pdGVtX2lubmVyJyk7XHJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy5uYXZfZHJvcGRvd24nKTtcclxuXHJcbiAgICAgICAgaWYgKCF0cmlnZ2VyIHx8ICFkcm9wZG93bikgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChjbG9zZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICBjbG9zZUFsbERyb3Bkb3ducygpO1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBkcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNsb3NlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFkcm9wZG93bi5tYXRjaGVzKCc6aG92ZXInKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oaXRlbSwgZHJvcGRvd24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxNTApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4gY2xlYXJUaW1lb3V0KGNsb3NlVGltZW91dCkpO1xyXG5cclxuICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjbG9zZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNsb3NlRHJvcGRvd24oaXRlbSwgZHJvcGRvd24pO1xyXG4gICAgICAgICAgICB9LCAxNTApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VEcm9wZG93bihpdGVtLCBkcm9wZG93bikge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUFsbERyb3Bkb3ducygpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX21lbnVfaXRlbS5hY3RpdmUnKS5mb3JFYWNoKGFjdGl2ZUl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wZG93biA9IGFjdGl2ZUl0ZW0ucXVlcnlTZWxlY3RvcignLm5hdl9kcm9wZG93bicpO1xyXG4gICAgICAgICAgICBpZiAoZHJvcGRvd24pIGRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGFjdGl2ZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIGNsb3NlQWxsRHJvcGRvd25zKCk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4iLCJjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9nZWFyMl9sb3dlcl9jb250YWluZXInKTtcclxuY29uc3Qgbml0cm9JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubml0cm8tZWZmZWN0IGltZycpO1xyXG5jb25zdCByZXZUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfZ2VhcjJfbG93ZXJfY29udGFpbmVyX3JldicpO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlU2Nyb2xsQW5pbWF0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IHBhcnRuZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWUnKTtcclxuXHJcbiAgICBpZiAoIXBhcnRuZXJTZWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgbGV0IHByb2dyZXNzID0gMSAtIHJlY3QudG9wIC8gd2luZG93SGVpZ2h0O1xyXG4gICAgcHJvZ3Jlc3MgPSBNYXRoLm1pbihNYXRoLm1heChwcm9ncmVzcywgMCksIDEpO1xyXG5cclxuICAgIGNvbnN0IHNoaWZ0ID0gTWF0aC5taW4oXHJcbiAgICAgICAgMTIyMCAtIHJldlRleHQub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgd2luZG93LmlubmVyV2lkdGggLSByZXZUZXh0Lm9mZnNldFdpZHRoIC0gNjBcclxuICAgICk7XHJcblxyXG4gICAgcmV2VGV4dC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3Byb2dyZXNzICogc2hpZnR9cHgpYDtcclxuXHJcbiAgICBuaXRyb0ltZy5zdHlsZS50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7cHJvZ3Jlc3N9KWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uU2Nyb2xsKCkge1xyXG4gICAgY29uc3QgcGFydG5lclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG5cclxuICAgIGlmICghcGFydG5lclNlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlU2Nyb2xsQW5pbWF0aW9uKTtcclxufVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHVwZGF0ZVNjcm9sbEFuaW1hdGlvbik7XHJcblxyXG51cGRhdGVTY3JvbGxBbmltYXRpb24oKTtcclxuXHJcblxyXG5cclxuLy8gcGFyYWxsYXhcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcGFydG5lcnNlYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lJyk7XHJcbiAgICBpZiAoIXBhcnRuZXJzZWMpIHJldHVyblxyXG5cclxuICAgIGNvbnN0IHBhcnRuZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfZ2VhcjJfdXBwZXJfY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgcGFyYWxsYXhJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9nZWFyMl91cHBlcl9jb250YWluZXIgaW1nJyk7XHJcblxyXG4gICAgaWYgKHBhcmFsbGF4SW1nICYmICF3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgcGFyYWxsYXhJbWcuY2xhc3NMaXN0LmFkZCgncGFyYWxsYXgnKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0bmVyU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsZWQgPSAtcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gMC4zO1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAoc2Nyb2xsZWQgKiBzcGVlZCkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgcGFydG5lclNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoJy0tcGFyYWxsYXgtb2Zmc2V0Jywgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJhbGxheCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGlja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gICAgY29uc3QgYXZhdGFyQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXZhdGFyLWl0ZW0gYnV0dG9uXCIpO1xyXG4gICAgY29uc3QgcmV2aWV3c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZV9nZWFyM19yZXZpZXdzXCIpO1xyXG4gICAgY29uc3QgcmV2aWV3cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZV9nZWFyM19yZXZpZXdzX3Jldmlld1wiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjZW50ZXJSZXZpZXcodGFyZ2V0Q2xpZW50KSB7XHJcbiAgICAgICAgY29uc3QgYWN0aXZlUmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhvbWVfZ2VhcjNfcmV2aWV3c19yZXZpZXdbZGF0YS1jbGllbnQ9XCIke3RhcmdldENsaWVudH1cIl1gKTtcclxuICAgICAgICBpZiAoIWFjdGl2ZVJldmlldykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IHJldmlld3NDb250YWluZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgcmV2aWV3V2lkdGggPSBhY3RpdmVSZXZpZXcub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgY29uc3QgZ2FwID0gNDA7XHJcblxyXG4gICAgICAgIGNvbnN0IHJldmlld0luZGV4ID0gQXJyYXkuZnJvbShyZXZpZXdzKS5pbmRleE9mKGFjdGl2ZVJldmlldyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvdGFsSXRlbXNXaWR0aCA9IHJldmlld0luZGV4ICogKHJldmlld1dpZHRoICsgZ2FwKTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSAoY29udGFpbmVyV2lkdGggLyAyKSAtIChyZXZpZXdXaWR0aCAvIDIpIC0gdG90YWxJdGVtc1dpZHRoO1xyXG5cclxuICAgICAgICByZXZpZXdzQ29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSBcInRyYW5zZm9ybSAwLjZzIGVhc2VcIjtcclxuICAgICAgICByZXZpZXdzQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7b2Zmc2V0fXB4KWA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc3dpdGNoUmV2aWV3KHRhcmdldCkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYXZhdGFyLWl0ZW1cIikuZm9yRWFjaChhID0+IGEuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpKTtcclxuICAgICAgICByZXZpZXdzLmZvckVhY2gociA9PiByLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkQXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmF2YXRhci1pdGVtIGJ1dHRvbltkYXRhLXRyaWdnZXI9XCIke3RhcmdldH1cIl1gKS5jbG9zZXN0KFwiLmF2YXRhci1pdGVtXCIpO1xyXG4gICAgICAgIGNvbnN0IGFjdGl2ZVJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob21lX2dlYXIzX3Jldmlld3NfcmV2aWV3W2RhdGEtY2xpZW50PVwiJHt0YXJnZXR9XCJdYCk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZEF2YXRhciAmJiBhY3RpdmVSZXZpZXcpIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRBdmF0YXIuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBhY3RpdmVSZXZpZXcuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICBjZW50ZXJSZXZpZXcodGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXZhdGFyQnV0dG9ucy5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRyaWdnZXJcIik7XHJcbiAgICAgICAgICAgIHN3aXRjaFJldmlldyh0YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENlbnRlclJldmlldygpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF2YXRhci1pdGVtLnNlbGVjdGVkIGJ1dHRvbicpO1xyXG4gICAgICAgICAgICBpZiAoaW5pdGlhbFNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsVGFyZ2V0ID0gaW5pdGlhbFNlbGVjdGVkLmdldEF0dHJpYnV0ZShcImRhdGEtdHJpZ2dlclwiKTtcclxuICAgICAgICAgICAgICAgIGNlbnRlclJldmlldyhpbml0aWFsVGFyZ2V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdENlbnRlclJldmlldygpO1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmF2YXRhci1pdGVtLnNlbGVjdGVkIGJ1dHRvbicpO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9IGN1cnJlbnRTZWxlY3RlZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRyaWdnZXJcIik7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2VudGVyUmV2aWV3KGN1cnJlbnRUYXJnZXQpLCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gY2FzZXNcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfZ2VhcjNfbG93ZXJfY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCBjYXNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX2dlYXIzX2xvd2VyX2NvbnRhaW5lciAuY2FzZScpO1xyXG5cclxuICAgIGNvbnN0IGNvbmZpZyA9IHtcclxuICAgICAgICB0cmlnZ2VyT2Zmc2V0OiAwLjMsXHJcbiAgICAgICAgc3RlcERlbGF5OiAwLjE1LFxyXG4gICAgICAgIGFuaW1hdGlvbkRpc3RhbmNlOiAzMFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGxBbmltYXRpb24oKSB7XHJcbiAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyUmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXJUb3AgPSBjb250YWluZXJSZWN0LnRvcDtcclxuICAgICAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSBjb250YWluZXJSZWN0LmhlaWdodDtcclxuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lckJvdHRvbSA9IGNvbnRhaW5lclRvcCArIGNvbnRhaW5lckhlaWdodDtcclxuICAgICAgICBjb25zdCB0cmlnZ2VyUG9pbnQgPSB3aW5kb3dIZWlnaHQgKiBjb25maWcudHJpZ2dlck9mZnNldDtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lclRvcCA8IHdpbmRvd0hlaWdodCAtIHRyaWdnZXJQb2ludCAmJiBjb250YWluZXJCb3R0b20gPiB0cmlnZ2VyUG9pbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgdmlzaWJsZUhlaWdodCA9IE1hdGgubWluKGNvbnRhaW5lckJvdHRvbSwgd2luZG93SGVpZ2h0KSAtIE1hdGgubWF4KGNvbnRhaW5lclRvcCwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFNjcm9sbGFibGUgPSBjb250YWluZXJIZWlnaHQgLSB3aW5kb3dIZWlnaHQgKyAod2luZG93SGVpZ2h0ICogY29uZmlnLnRyaWdnZXJPZmZzZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxlZCA9IC1jb250YWluZXJUb3AgKyAod2luZG93SGVpZ2h0ICogY29uZmlnLnRyaWdnZXJPZmZzZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JvbGxQcm9ncmVzcyA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHNjcm9sbGVkIC8gbWF4U2Nyb2xsYWJsZSkpO1xyXG5cclxuICAgICAgICAgICAgY2FzZXMuZm9yRWFjaCgoY2FzZUVsLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhyZXNob2xkID0gaW5kZXggKiBjb25maWcuc3RlcERlbGF5O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxQcm9ncmVzcyA+PSB0aHJlc2hvbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlRWwuY2xhc3NMaXN0LmFkZCgnY2FzZS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhc2UtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VFbC5jbGFzc0xpc3QuYWRkKCdjYXNlLWhpZGRlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VFbC5jbGFzc0xpc3QucmVtb3ZlKCdjYXNlLXZpc2libGUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2FzZXMuZm9yRWFjaChjYXNlRWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2FzZUVsLmNsYXNzTGlzdC5hZGQoJ2Nhc2UtaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICBjYXNlRWwuY2xhc3NMaXN0LnJlbW92ZSgnY2FzZS12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgICAgaWYgKCF0aWNraW5nKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTY3JvbGxBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTY3JvbGxBbmltYXRpb24oKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbi8vIHBhcmFsbGF4XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHBhcnRuZXJzZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG4gICAgaWYgKCFwYXJ0bmVyc2VjKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBwYXJ0bmVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX2dlYXIzX2NvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFsbGF4SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfZ2VhcjNfYmFja2dyb3VuZCcpO1xyXG5cclxuICAgIGlmIChwYXJhbGxheEltZyAmJiAhd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcykge1xyXG4gICAgICAgIHBhcmFsbGF4SW1nLmNsYXNzTGlzdC5hZGQoJ3BhcmFsbGF4Jyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gcGFydG5lclNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGVkID0gLXJlY3QudG9wO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IDAuMztcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKHNjcm9sbGVkICogc3BlZWQpICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIHBhcnRuZXJTZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KCctLXBhcmFsbGF4LW9mZnNldCcsIG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFyYWxsYXgoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iLCIvLyBwYXJhbGxheFxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3QgcGFydG5lclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9nZWFyNF9jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBwYXJhbGxheEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob21lX2dlYXI0X2NvbnRhaW5lciBpbWcnKTtcclxuXHJcbiAgICBpZiAocGFyYWxsYXhJbWcgJiYgIXdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXMpIHtcclxuICAgICAgICBwYXJhbGxheEltZy5mb3JFYWNoKGltZz0+aW1nLmNsYXNzTGlzdC5hZGQoJ3BhcmFsbGF4JykpXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVBhcmFsbGF4KCkge1xyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gcGFydG5lclNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGVkID0gLXJlY3QudG9wO1xyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IDAuMztcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKHNjcm9sbGVkICogc3BlZWQpICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIHBhcnRuZXJTZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KCctLXBhcmFsbGF4LW9mZnNldCcsIG9mZnNldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgdGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKCF0aWNraW5nKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlUGFyYWxsYXgoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRpY2tpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVwZGF0ZVBhcmFsbGF4KCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHBhcnRuZXJzZWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG4gICAgaWYgKCFwYXJ0bmVyc2VjKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBwYXJ0bmVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX2dlYXI0X2xvd2VyX2NvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFsbGF4SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdlYXI0YmFjaycpO1xyXG5cclxuICAgIGlmIChwYXJhbGxheEltZyAmJiAhd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcykge1xyXG4gICAgICAgIHBhcmFsbGF4SW1nLmZvckVhY2goaW1nPT5pbWcuY2xhc3NMaXN0LmFkZCgncGFyYWxsYXgnKSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0bmVyU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsZWQgPSAtcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gMC4zO1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAoc2Nyb2xsZWQgKiBzcGVlZCkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgcGFydG5lclNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoJy0tcGFyYWxsYXgtb2Zmc2V0Jywgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJhbGxheCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGlja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoKTtcclxuICAgIH1cclxufSk7XHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGFjY29yZGlvbkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl9pdGVtJyk7XHJcblxyXG4gICAgYWNjb3JkaW9uSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGl0ZW0ucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGlmIChidXR0b24pIHtcclxuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY29yZGlvbkl0ZW1zLmZvckVhY2goKG90aGVySXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlckl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdvcGVuZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCBwYXJ0bmVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX2dlYXI2X2NvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFsbGF4SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvbWVfZ2VhcjZfY29udGFpbmVyIGltZycpO1xyXG5cclxuICAgIGlmIChwYXJhbGxheEltZyAmJiAhd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcykge1xyXG4gICAgICAgIHBhcmFsbGF4SW1nLmZvckVhY2goaW1nPT5pbWcuY2xhc3NMaXN0LmFkZCgncGFyYWxsYXgnKSlcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBwYXJ0bmVyU2VjdGlvbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsZWQgPSAtcmVjdC50b3A7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwZWVkID0gMC4zO1xyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXQgPSAoc2Nyb2xsZWQgKiBzcGVlZCkgKyAncHgnO1xyXG5cclxuICAgICAgICAgICAgcGFydG5lclNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoJy0tcGFyYWxsYXgtb2Zmc2V0Jywgb2Zmc2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aWNraW5nID0gZmFsc2U7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRpY2tpbmcpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVQYXJhbGxheCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGlja2luZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdXBkYXRlUGFyYWxsYXgoKTtcclxuICAgIH1cclxufSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcG9wdXBPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfcG9wdXBfb3ZlcmxheScpO1xyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9wb3B1cF9jb250ZW50X3VwcGVyIGJ1dHRvbicpO1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3BvcHVwX2NvbnRlbnQgZm9ybScpO1xyXG4gICAgY29uc3Qgb3BlbkJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG9tZV9yZXByZXNlbnRfZm9ybV9jb250YWluZXJfYnV0dG9uLCAub3Blbl9tb2RhbCcpO1xyXG4gICAgY29uc3QgdGltZXJFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfcG9wdXBfY29udGVudF9sYWJlbF93cmFwcGVyX2NvdW50ZXInKTtcclxuICAgIGxldCB0aW1lckludGVydmFsID0gbnVsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGFydFRpbWVyKCkge1xyXG4gICAgICAgIGlmICghdGltZXJFbGVtZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCB0b3RhbFNlY29uZHMgPSAxNSAqIDYwO1xyXG5cclxuICAgICAgICBpZiAodGltZXJJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGltZXJJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gMzYwMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAvIDYwKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsU2Vjb25kcyAlIDYwO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9XHJcbiAgICAgICAgICAgICAgICBTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsICcwJykgKyAnOicgK1xyXG4gICAgICAgICAgICAgICAgU3RyaW5nKG1pbnV0ZXMpLnBhZFN0YXJ0KDIsICcwJykgKyAnOicgK1xyXG4gICAgICAgICAgICAgICAgU3RyaW5nKHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJyk7XHJcblxyXG4gICAgICAgICAgICB0aW1lckVsZW1lbnQudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWRUaW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKC0tdG90YWxTZWNvbmRzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lckludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIHRpbWVyRWxlbWVudC50ZXh0Q29udGVudCA9IFwiMDA6MDA6MDBcIjtcclxuICAgICAgICAgICAgICAgIHRpbWVyQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcclxuICAgICAgICBpZiAodGltZXJJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVySW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB0aW1lckludGVydmFsID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRUaW1lcigpIHtcclxuICAgICAgICBzdG9wVGltZXIoKTtcclxuICAgICAgICBpZiAodGltZXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRpbWVyRWxlbWVudC50ZXh0Q29udGVudCA9IFwiMDA6MTU6MDBcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdGltZXJDb21wbGV0ZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItCi0LDQudC80LXRgCDQt9Cw0LLQtdGA0YjQtdC9IVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuUG9wdXAoKSB7XHJcbiAgICAgICAgaWYgKHBvcHVwT3ZlcmxheSkge1xyXG4gICAgICAgICAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcG9wdXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xyXG4gICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKSB7XHJcbiAgICAgICAgaWYgKHBvcHVwT3ZlcmxheSkge1xyXG4gICAgICAgICAgICBwb3B1cE92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHBvcHVwT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc3RvcFRpbWVyKCk7XHJcbiAgICAgICAgICAgICAgICByZXNldFRpbWVyKCk7XHJcbiAgICAgICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcGVuQnV0dG9ucykge1xyXG4gICAgICAgIG9wZW5CdXR0b25zLmZvckVhY2gob3BlbkJ1dHRvbj0+e1xyXG4gICAgICAgICAgICBvcGVuQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgb3BlblBvcHVwKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNsb3NlQnV0dG9uKSB7XHJcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcHVwKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocG9wdXBPdmVybGF5KSB7XHJcbiAgICAgICAgcG9wdXBPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwT3ZlcmxheSkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgICAgIGNsb3NlUG9wdXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB2aWRlb1xyXG4gICAgY29uc3QgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBWaWRlbycpO1xyXG4gICAgY29uc3QgdmlkZW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9wb3B1cF9jb250ZW50X2xvd2VyX3JpZ2h0Y29udF92aWRlbycpO1xyXG4gICAgY29uc3QgcGxheUJ1dHRvbiA9IHZpZGVvQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpOyAvLyDQvdCw0YXQvtC00LjQvCDQuNC30L7QsdGA0LDQttC10L3QuNC1INC60L3QvtC/0LrQuCBwbGF5XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUGxheUJ1dHRvblZpc2liaWxpdHkoKSB7XHJcbiAgICAgICAgaWYgKHZpZGVvLnBhdXNlZCkge1xyXG4gICAgICAgICAgICBwbGF5QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBsYXlCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigncGxheScsIHVwZGF0ZVBsYXlCdXR0b25WaXNpYmlsaXR5KTtcclxuICAgIHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ3BhdXNlJywgdXBkYXRlUGxheUJ1dHRvblZpc2liaWxpdHkpO1xyXG4gICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBwbGF5QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmlkZW9Db250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHZpZGVvLnBsYXkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2aWRlby5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHVwZGF0ZVBsYXlCdXR0b25WaXNpYmlsaXR5KCk7XHJcbn0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHBvbGljeUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvbGljeUNoZWNrYm94Jyk7XHJcbiAgICBjb25zdCBhZ3JlZUNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FncmVlQ2hlY2tib3gnKTtcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRCdXR0b24nKTtcclxuXHJcbiAgICBpZiAoIXBvbGljeUNoZWNrYm94IHx8ICFhZ3JlZUNoZWNrYm94IHx8ICFzdWJtaXRCdXR0b24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hlY2tib3hlcyA9IFtwb2xpY3lDaGVja2JveCwgYWdyZWVDaGVja2JveF07XHJcblxyXG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKGNoZWNrYm94ID0+IHtcclxuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYm90aENoZWNrZWQgPSBwb2xpY3lDaGVja2JveC5jaGVja2VkICYmIGFncmVlQ2hlY2tib3guY2hlY2tlZDtcclxuXHJcbiAgICAgICAgICAgIGlmIChib3RoQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pO1xyXG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCB0ZXN0RHJpdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9yZXByZXNlbnRfZm9ybV9jb250YWluZXJfYnV0dG9uJyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3JlcHJlc2VudF9mb3JtX2NvbnRhaW5lcl9pbnB1dCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrSW5wdXRWYWx1ZSgpIHtcclxuICAgICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgICB0ZXN0RHJpdmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGFzLXZhbHVlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVzdERyaXZlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy12YWx1ZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGNoZWNrSW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgY2hlY2tJbnB1dFZhbHVlKCk7XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcGFydG5lclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG5cclxuICAgIGlmICghcGFydG5lclNlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY291bnRlckVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9yZXByZXNlbnRfY291bnRlciBzcGFuJyk7XHJcbiAgICBjb25zdCBjb3VudGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvbWVfcmVwcmVzZW50X2NvdW50ZXInKTtcclxuICAgIGNvbnN0IHNpZ25JbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfc2lnbkluJyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3JlcHJlc2VudF9mb3JtX2NvbnRhaW5lcl9pbnB1dCcpO1xyXG5cclxuICAgIGNvbnN0IGVsZW1lbnRzID0gW2NvdW50ZXJEaXYsIHNpZ25JbkJ1dHRvbiwgaW5wdXRdO1xyXG5cclxuICAgIGxldCB0b3RhbFNlY29uZHMgPSAzICogMTAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVyKCkge1xyXG4gICAgICAgIHRvdGFsU2Vjb25kcy0tO1xyXG5cclxuICAgICAgICBpZiAodG90YWxTZWNvbmRzIDwgMCkge1xyXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQ9PmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnb25lJywgJ3R3bycpKTtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50PT5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dvJykpO1xyXG4gICAgICAgICAgICBjb3VudGVyRWxlbWVudC50ZXh0Q29udGVudCA9ICcwMDowMCwwMCc7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDEwMCk7XHJcbiAgICAgICAgY29uc3QgaHVuZHJlZHRocyA9IHRvdGFsU2Vjb25kcyAlIDEwMDtcclxuXHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkU2Vjb25kcyA9IHNlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZEh1bmRyZWR0aHMgPSBodW5kcmVkdGhzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcclxuXHJcbiAgICAgICAgY291bnRlckVsZW1lbnQudGV4dENvbnRlbnQgPSBgMDA6JHtmb3JtYXR0ZWRTZWNvbmRzfSwke2Zvcm1hdHRlZEh1bmRyZWR0aHN9YDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0b3RhbFNlY29uZHMpe1xyXG4gICAgICAgICAgICBjYXNlIDIwMDoge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50PT5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3R3bycpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMTAwOiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQ9PmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndHdvJykpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50PT5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ29uZScpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KHVwZGF0ZVRpbWVyLCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dCh1cGRhdGVUaW1lciwgMTApO1xyXG59KTtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XHJcbiAgICAvLyBlbWFpbCBzYXZlXHJcblxyXG4gICAgY29uc3QgbWFpbkVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZV9yZXByZXNlbnRfZm9ybV9jb250YWluZXJfaW5wdXQnKTtcclxuICAgIGNvbnN0IHBvcHVwRW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3BvcHVwX2NvbnRlbnRfZm9ybV9pbnB1dHMgaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XHJcblxyXG4gICAgaWYgKG1haW5FbWFpbElucHV0ICYmIHBvcHVwRW1haWxJbnB1dCkge1xyXG4gICAgICAgIG1haW5FbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwb3B1cEVtYWlsSW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwb3B1cEVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIG1haW5FbWFpbElucHV0LnZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1haW5FbWFpbElucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHBvcHVwRW1haWxJbnB1dC52YWx1ZSA9IG1haW5FbWFpbElucHV0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVja2JveCBzYXZlXHJcblxyXG59KTtcclxuXHJcbi8vIHBhcmFsYXhcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcGFydG5lclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZScpO1xyXG5cclxuICAgIGlmICghcGFydG5lclNlY3Rpb24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXJhbGxheEltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3JlcHJlc2VudF9iYWNrZ3JvdW5kSW1nJyk7XHJcblxyXG4gICAgaWYgKHBhcmFsbGF4SW1nICYmICF3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzKSB7XHJcbiAgICAgICAgcGFyYWxsYXhJbWcuY2xhc3NMaXN0LmFkZCgncGFyYWxsYXgnKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlUGFyYWxsYXgoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9IDAuMztcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0ID0gKHNjcm9sbGVkICogc3BlZWQpICsgJ3B4JztcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1wYXJhbGxheC1vZmZzZXQnLCBvZmZzZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHRpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghdGlja2luZykge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBhcmFsbGF4KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aWNraW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1cGRhdGVQYXJhbGxheCgpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHZpZGVvV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lX3JlcHJlc2VudF9sb3dlcldyYXBwZXJfdmlkZW8nKTtcclxuICAgIGNvbnN0IG1vZGFsT3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbE92ZXJsYXknKTtcclxuICAgIGNvbnN0IG9yaWdpbmFsVmlkZW8gPSB2aWRlb1dyYXBwZXIgPyB2aWRlb1dyYXBwZXIucXVlcnlTZWxlY3RvcigndmlkZW8nKSA6IG51bGw7XHJcbiAgICBjb25zdCBtb2RhbFZpZGVvID0gbW9kYWxPdmVybGF5ID8gbW9kYWxPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJ3ZpZGVvJykgOiBudWxsO1xyXG4gICAgY29uc3QgcGxheUJ1dHRvbiA9IHZpZGVvV3JhcHBlciA/IHZpZGVvV3JhcHBlci5xdWVyeVNlbGVjdG9yKCcudmlkZW9fcGxheWVyIGJ1dHRvbicpIDogbnVsbDtcclxuXHJcbiAgICBjb25zdCBvcmlnaW5hbFBsYXlJbWcgPSB2aWRlb1dyYXBwZXIgPyB2aWRlb1dyYXBwZXIucXVlcnlTZWxlY3RvcignLnZpZGVvX2NvbnQgaW1nJykgOiBudWxsO1xyXG4gICAgY29uc3QgbW9kYWxQbGF5SW1nID0gbW9kYWxPdmVybGF5ID8gbW9kYWxPdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC12aWRlbyBpbWcnKSA6IG51bGw7XHJcblxyXG4gICAgbGV0IGN1cnJlbnRUaW1lID0gMDtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVQbGF5QnV0dG9uKHZpZGVvLCBwbGF5SW1nKSB7XHJcbiAgICAgICAgaWYgKCF2aWRlbyB8fCAhcGxheUltZykgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAodmlkZW8ucGF1c2VkKSB7XHJcbiAgICAgICAgICAgIHBsYXlJbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGxheUltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXR1cFZpZGVvTGlzdGVuZXJzKHZpZGVvLCBwbGF5SW1nKSB7XHJcbiAgICAgICAgaWYgKCF2aWRlbyB8fCAhcGxheUltZykgcmV0dXJuO1xyXG5cclxuICAgICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHBsYXlJbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcigncGF1c2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGxheUltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcGxheUltZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChvcmlnaW5hbFZpZGVvICYmIG9yaWdpbmFsUGxheUltZykge1xyXG4gICAgICAgIHNldHVwVmlkZW9MaXN0ZW5lcnMob3JpZ2luYWxWaWRlbywgb3JpZ2luYWxQbGF5SW1nKTtcclxuICAgICAgICB0b2dnbGVQbGF5QnV0dG9uKG9yaWdpbmFsVmlkZW8sIG9yaWdpbmFsUGxheUltZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vZGFsVmlkZW8gJiYgbW9kYWxQbGF5SW1nKSB7XHJcbiAgICAgICAgc2V0dXBWaWRlb0xpc3RlbmVycyhtb2RhbFZpZGVvLCBtb2RhbFBsYXlJbWcpO1xyXG4gICAgICAgIG1vZGFsUGxheUltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwbGF5QnV0dG9uICYmIG9yaWdpbmFsVmlkZW8pIHtcclxuICAgICAgICBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3JpZ2luYWxWaWRlby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsVmlkZW8ucGxheSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxWaWRlby5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb3Blbk1vZGFsV2l0aFZpZGVvKCkge1xyXG4gICAgICAgIGlmICghb3JpZ2luYWxWaWRlbyB8fCAhbW9kYWxWaWRlbykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjdXJyZW50VGltZSA9IG9yaWdpbmFsVmlkZW8uY3VycmVudFRpbWU7XHJcblxyXG4gICAgICAgIG9yaWdpbmFsVmlkZW8ucGF1c2UoKTtcclxuICAgICAgICBpZiAob3JpZ2luYWxQbGF5SW1nKSB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsUGxheUltZy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbW9kYWxWaWRlby5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgICBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgICAgICBtb2RhbFZpZGVvLnBsYXkoKS5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdNb2RhbCB2aWRlbyBwbGF5IGVycm9yOicsIGUpKTtcclxuXHJcbiAgICAgICAgaWYgKG1vZGFsUGxheUltZykge1xyXG4gICAgICAgICAgICBtb2RhbFBsYXlJbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcclxuICAgICAgICBpZiAoIW9yaWdpbmFsVmlkZW8gfHwgIW1vZGFsVmlkZW8pIHJldHVybjtcclxuXHJcbiAgICAgICAgY3VycmVudFRpbWUgPSBtb2RhbFZpZGVvLmN1cnJlbnRUaW1lO1xyXG5cclxuICAgICAgICBtb2RhbFZpZGVvLnBhdXNlKCk7XHJcbiAgICAgICAgaWYgKG1vZGFsUGxheUltZykge1xyXG4gICAgICAgICAgICBtb2RhbFBsYXlJbWcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9yaWdpbmFsVmlkZW8uY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcclxuXHJcbiAgICAgICAgbW9kYWxPdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKG9yaWdpbmFsUGxheUltZykge1xyXG4gICAgICAgICAgICBvcmlnaW5hbFBsYXlJbWcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldEZvcm0oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmlkZW9XcmFwcGVyICYmIG1vZGFsT3ZlcmxheSkge1xyXG4gICAgICAgIHZpZGVvV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRh9GC0L4g0LrQu9C40Log0L3QtSDQv9C+INC60L3QvtC/0LrQtSDRg9C/0YDQsNCy0LvQtdC90LjRjyDQsiB2aWRlb19wbGF5ZXJcclxuICAgICAgICAgICAgaWYgKCFwbGF5QnV0dG9uIHx8ICFwbGF5QnV0dG9uLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIG9wZW5Nb2RhbFdpdGhWaWRlbygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG9yaWdpbmFsUGxheUltZykge1xyXG4gICAgICAgIG9yaWdpbmFsUGxheUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgb3Blbk1vZGFsV2l0aFZpZGVvKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vZGFsVmlkZW8pIHtcclxuICAgICAgICBtb2RhbFZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAobW9kYWxWaWRlby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsVmlkZW8ucGxheSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbW9kYWxWaWRlby5wYXVzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vZGFsUGxheUltZykge1xyXG4gICAgICAgIG1vZGFsUGxheUltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgbW9kYWxWaWRlby5wbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1vZGFsT3ZlcmxheSkge1xyXG4gICAgICAgIG1vZGFsT3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbE92ZXJsYXkpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJyAmJiBtb2RhbE92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICBjbG9zZU1vZGFsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1idXR0b24nKTtcclxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1pbnB1dCcpO1xyXG5cclxuICAgIGlmIChzdWJtaXRCdXR0b24gJiYgZW1haWxJbnB1dCkge1xyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9IGVtYWlsSW5wdXQudmFsdWUudHJpbSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRlRW1haWwoZW1haWwpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRW1haWwgc3VibWl0dGVkOicsIGVtYWlsKTtcclxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWwoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNob3dFcnJvckluUGxhY2Vob2xkZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnZXJyb3InKSkge1xyXG4gICAgICAgICAgICAgICAgcmVzZXRGb3JtKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWxSZWdleCA9IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvO1xyXG4gICAgICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dFcnJvckluUGxhY2Vob2xkZXIoKSB7XHJcbiAgICAgICAgaWYgKGVtYWlsSW5wdXQpIHtcclxuICAgICAgICAgICAgZW1haWxJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBlbWFpbElucHV0LnBsYWNlaG9sZGVyID0gJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnO1xyXG4gICAgICAgICAgICBlbWFpbElucHV0LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Rm9ybSgpIHtcclxuICAgICAgICBpZiAoZW1haWxJbnB1dCkge1xyXG4gICAgICAgICAgICBlbWFpbElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgZS1tYWlsJztcclxuICAgICAgICAgICAgZW1haWxJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuLi9zY3NzL2luZGV4LnNjc3NcIlxyXG5yZXF1aXJlKCcuL2hlYWRlci5qcycpO1xyXG5yZXF1aXJlKCcuL2hvbWUvaG9tZS1yZXByZXNlbnQuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtcG9wdXAuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtdmlkZW8tcG9wdXAuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjEuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjIuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjMuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjQuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjUuanMnKTtcclxucmVxdWlyZSgnLi9ob21lL2hvbWUtZ2VhcjYuanMnKTtcclxuIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1lbnVJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbG9zZVRpbWVvdXQiLCJmb3JFYWNoIiwiaXRlbSIsInRyaWdnZXIiLCJxdWVyeVNlbGVjdG9yIiwiZHJvcGRvd24iLCJjbGVhclRpbWVvdXQiLCJjbG9zZUFsbERyb3Bkb3ducyIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwiZGlzcGxheSIsInNldFRpbWVvdXQiLCJtYXRjaGVzIiwiY2xvc2VEcm9wZG93biIsInJlbW92ZSIsImFjdGl2ZUl0ZW0iLCJlIiwia2V5IiwiY29udGFpbmVyIiwibml0cm9JbWciLCJyZXZUZXh0IiwidXBkYXRlU2Nyb2xsQW5pbWF0aW9uIiwicGFydG5lclNlY3Rpb24iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJwcm9ncmVzcyIsInRvcCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJzaGlmdCIsIm9mZnNldFdpZHRoIiwiaW5uZXJXaWR0aCIsInRyYW5zZm9ybSIsImNvbmNhdCIsIm9uU2Nyb2xsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicGFydG5lcnNlYyIsInBhcmFsbGF4SW1nIiwibWF0Y2hNZWRpYSIsInVwZGF0ZVBhcmFsbGF4Iiwic2Nyb2xsZWQiLCJzcGVlZCIsIm9mZnNldCIsInNldFByb3BlcnR5IiwidGlja2luZyIsImF2YXRhckJ1dHRvbnMiLCJyZXZpZXdzQ29udGFpbmVyIiwicmV2aWV3cyIsImNlbnRlclJldmlldyIsInRhcmdldENsaWVudCIsImFjdGl2ZVJldmlldyIsImNvbnRhaW5lcldpZHRoIiwicmV2aWV3V2lkdGgiLCJnYXAiLCJyZXZpZXdJbmRleCIsIkFycmF5IiwiZnJvbSIsImluZGV4T2YiLCJ0b3RhbEl0ZW1zV2lkdGgiLCJ0cmFuc2l0aW9uIiwic3dpdGNoUmV2aWV3IiwidGFyZ2V0IiwiYSIsInIiLCJzZWxlY3RlZEF2YXRhciIsImNsb3Nlc3QiLCJidXR0b24iLCJnZXRBdHRyaWJ1dGUiLCJpbml0Q2VudGVyUmV2aWV3IiwiaW5pdGlhbFNlbGVjdGVkIiwiaW5pdGlhbFRhcmdldCIsImN1cnJlbnRTZWxlY3RlZCIsImN1cnJlbnRUYXJnZXQiLCJjYXNlcyIsImNvbmZpZyIsInRyaWdnZXJPZmZzZXQiLCJzdGVwRGVsYXkiLCJhbmltYXRpb25EaXN0YW5jZSIsImhhbmRsZVNjcm9sbEFuaW1hdGlvbiIsImNvbnRhaW5lclJlY3QiLCJjb250YWluZXJUb3AiLCJjb250YWluZXJIZWlnaHQiLCJoZWlnaHQiLCJjb250YWluZXJCb3R0b20iLCJ0cmlnZ2VyUG9pbnQiLCJ2aXNpYmxlSGVpZ2h0IiwibWF4U2Nyb2xsYWJsZSIsInNjcm9sbFByb2dyZXNzIiwiY2FzZUVsIiwiaW5kZXgiLCJ0aHJlc2hvbGQiLCJwYXNzaXZlIiwiaW1nIiwiYWNjb3JkaW9uSXRlbXMiLCJjb250YWlucyIsIm90aGVySXRlbSIsInBvcHVwT3ZlcmxheSIsImNsb3NlQnV0dG9uIiwiZm9ybSIsIm9wZW5CdXR0b25zIiwidGltZXJFbGVtZW50IiwidGltZXJJbnRlcnZhbCIsInN0YXJ0VGltZXIiLCJ0b3RhbFNlY29uZHMiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJob3VycyIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJmb3JtYXR0ZWRUaW1lIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJ0ZXh0Q29udGVudCIsInRpbWVyQ29tcGxldGUiLCJzdG9wVGltZXIiLCJyZXNldFRpbWVyIiwiY29uc29sZSIsImxvZyIsIm9wZW5Qb3B1cCIsImJvZHkiLCJvdmVyZmxvdyIsImNsb3NlUG9wdXAiLCJvcGVuQnV0dG9uIiwicHJldmVudERlZmF1bHQiLCJ2aWRlbyIsImdldEVsZW1lbnRCeUlkIiwidmlkZW9Db250YWluZXIiLCJwbGF5QnV0dG9uIiwidXBkYXRlUGxheUJ1dHRvblZpc2liaWxpdHkiLCJwYXVzZWQiLCJwbGF5IiwicGF1c2UiLCJwb2xpY3lDaGVja2JveCIsImFncmVlQ2hlY2tib3giLCJzdWJtaXRCdXR0b24iLCJjaGVja2JveGVzIiwiY2hlY2tib3giLCJ0b2dnbGUiLCJib3RoQ2hlY2tlZCIsImNoZWNrZWQiLCJkaXNhYmxlZCIsInRlc3REcml2ZUJ1dHRvbiIsImlucHV0IiwiY2hlY2tJbnB1dFZhbHVlIiwidmFsdWUiLCJ0cmltIiwiY291bnRlckVsZW1lbnQiLCJjb3VudGVyRGl2Iiwic2lnbkluQnV0dG9uIiwiZWxlbWVudHMiLCJ1cGRhdGVUaW1lciIsImVsZW1lbnQiLCJodW5kcmVkdGhzIiwiZm9ybWF0dGVkU2Vjb25kcyIsInRvU3RyaW5nIiwiZm9ybWF0dGVkSHVuZHJlZHRocyIsIm1haW5FbWFpbElucHV0IiwicG9wdXBFbWFpbElucHV0IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJ2aWRlb1dyYXBwZXIiLCJtb2RhbE92ZXJsYXkiLCJvcmlnaW5hbFZpZGVvIiwibW9kYWxWaWRlbyIsIm9yaWdpbmFsUGxheUltZyIsIm1vZGFsUGxheUltZyIsImN1cnJlbnRUaW1lIiwidG9nZ2xlUGxheUJ1dHRvbiIsInBsYXlJbWciLCJzZXR1cFZpZGVvTGlzdGVuZXJzIiwic3RvcFByb3BhZ2F0aW9uIiwib3Blbk1vZGFsV2l0aFZpZGVvIiwiY2xvc2VNb2RhbCIsInJlc2V0Rm9ybSIsImVtYWlsSW5wdXQiLCJlbWFpbCIsInZhbGlkYXRlRW1haWwiLCJzaG93RXJyb3JJblBsYWNlaG9sZGVyIiwiZW1haWxSZWdleCIsInRlc3QiLCJwbGFjZWhvbGRlciIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9