(function () {
  var people = document.querySelectorAll('.crew-person');
  if (!people.length) return;

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var wide = window.matchMedia('(min-width: 1200px)');
  var workshop = document.getElementById('workshop');
  var broken = workshop && workshop.querySelector('.workshop-word-broken');
  var fixed = workshop && workshop.querySelector('.workshop-word-fixed');
  var chain = 0;
  var stepIn = 0;
  var stepOut = 0;

  function closeAll(except) {
    people.forEach(function (person) {
      if (person === except) return;
      person.classList.remove('is-open');
      person.setAttribute('aria-expanded', 'false');
    });
  }

  people.forEach(function (person) {
    var card = person.querySelector('.crew-card');
    if (card) {
      card.addEventListener('click', function (event) {
        event.stopPropagation();
      });
    }

    var reactTimer = 0;
    person.addEventListener('click', function () {
      var open = person.classList.contains('is-open');
      closeAll(person);
      person.classList.toggle('is-open', !open);
      person.setAttribute('aria-expanded', open ? 'false' : 'true');
      person.classList.remove('is-react');
      void person.offsetWidth;
      person.classList.add('is-react');
      window.clearTimeout(reactTimer);
      reactTimer = window.setTimeout(function () {
        person.classList.remove('is-react');
      }, 1500);
      if (person.getAttribute('data-crew') === 'designer') fixNow();
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    closeAll(null);
    var active = document.activeElement;
    if (active && active.classList && active.classList.contains('crew-person')) active.blur();
  });

  document.addEventListener('pointerdown', function (event) {
    var target = event.target;
    if (target && target.closest && target.closest('.crew-person')) return;
    closeAll(null);
  });

  function setFixed(on) {
    if (!workshop) return;
    workshop.classList.toggle('is-fixed', on);
    if (broken) broken.hidden = on;
    if (fixed) fixed.hidden = !on;
  }

  function runFix() {
    if (!workshop) return;
    window.clearTimeout(stepIn);
    window.clearTimeout(stepOut);
    workshop.classList.add('is-fixing');
    stepIn = window.setTimeout(function () {
      setFixed(true);
    }, 700);
    stepOut = window.setTimeout(function () {
      workshop.classList.remove('is-fixing');
      setFixed(false);
    }, 4200);
  }

  function schedule(delay) {
    window.clearTimeout(chain);
    chain = window.setTimeout(function () {
      runFix();
      schedule(9000);
    }, delay);
  }

  function fixNow() {
    if (reduce || !workshop) return;
    window.clearTimeout(stepIn);
    window.clearTimeout(stepOut);
    workshop.classList.remove('is-fixing');
    setFixed(false);
    void workshop.offsetWidth;
    runFix();
    schedule(9000);
  }

  if (reduce) {
    setFixed(true);
    return;
  }

  if (workshop) schedule(2200);

  var scheduled = false;
  function onScroll() {
    if (!wide.matches) return;
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(function () {
      scheduled = false;
      var y = window.scrollY || 0;
      var floats = document.querySelectorAll('.crew-float');
      floats.forEach(function (el, index) {
        if (el.closest && el.closest('.crew-designer')) return;
        var shift = Math.sin((y + index * 90) / 420) * 4;
        el.style.setProperty('--crew-shift', shift.toFixed(2) + 'px');
      });
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();
