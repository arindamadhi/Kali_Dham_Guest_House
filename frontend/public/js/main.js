/* ==========================================================
   Kali Dham Guest House — main.js
========================================================== */
document.addEventListener('DOMContentLoaded', function () {

  /* ---- Dynamic Year ---- */
  document.querySelectorAll('#year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- AOS Init ---- */
  if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 820, once: true, offset: 100, easing: 'ease-in-out' });
  }

  /* ---- Navbar Scroll ---- */
  var navbar = document.getElementById('mainNavbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  /* ---- Active Nav Link ---- */
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function (link) {
    var href = (link.getAttribute('href') || '').replace('/', '');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- Date Min Values ---- */
  var today = new Date().toISOString().split('T')[0];
  var checkInInputs = document.querySelectorAll('input[type="date"][id*="heck"]');
  checkInInputs.forEach(function (inp) { inp.min = today; });

  var checkIn  = document.getElementById('checkIn') || document.getElementById('checkin');
  var checkOut = document.getElementById('checkOut') || document.getElementById('checkout');
  if (checkIn && checkOut) {
    checkIn.min = today;
    checkIn.addEventListener('change', function () {
      var d = new Date(this.value);
      d.setDate(d.getDate() + 1);
      checkOut.min = d.toISOString().split('T')[0];
      if (checkOut.value && checkOut.value <= this.value) {
        checkOut.value = d.toISOString().split('T')[0];
      }
    });
  }

  /* ---- Booking Form Submit ---- */
  var bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('successMsg');
      if (msg) {
        msg.classList.add('show');
        bookingForm.reset();
        msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  /* ---- Contact Form Submit ---- */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var msg = document.getElementById('contactSuccessMsg');
      if (msg) {
        msg.classList.add('show');
        contactForm.reset();
      }
    });
  }

  /* ---- Booking Strip Submit ---- */
  var stripForm = document.getElementById('bookingStripForm');
  if (stripForm) {
    stripForm.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = '/booking.html';
    });
  }

  /* ---- Gallery Filter ---- */
  var filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-filter');
        document.querySelectorAll('.gallery-item').forEach(function (item) {
          if (cat === 'all' || item.getAttribute('data-category') === cat) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
        updateGalleryCount();
      });
    });
  }

  function updateGalleryCount() {
    var countEl = document.getElementById('gallery-count');
    if (countEl) {
      var visible = document.querySelectorAll('.gallery-item:not([style*="none"])').length;
      countEl.textContent = 'Showing ' + visible + ' photos';
    }
  }
});
