/* ==========================================================================
   MARGARETE MACEDO — interações pequenas e didáticas
   Este arquivo é propositalmente simples: não há framework, API ou banco.
   Se você está começando, estes são bons exemplos de querySelector,
   eventos, IntersectionObserver e atualização de conteúdo no DOM.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  /* ------------------------------------------------------------------------
     1. Menu mobile
     O botão troca aria-expanded e a classe .is-open. O CSS cuida do visual.
     ------------------------------------------------------------------------ */
  var menuButton = document.querySelector('.menu-toggle');
  var menu = document.querySelector('#menu-principal');
  var menuLinks = document.querySelectorAll('#menu-principal a');

  if (menuButton && menu) {
    menuButton.addEventListener('click', function () {
      var isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menu.classList.toggle('is-open', !isOpen);
    });

    // Depois de clicar em uma seção, o menu fecha para não cobrir o conteúdo.
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuButton.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
      });
    });
  }

  /* ------------------------------------------------------------------------
     2. Links com href="#" (LinkedIn, GitHub e Instagram provisórios)
     Enquanto você não colocou os links reais, impedimos que a página pule
     para o topo. Troque o href no HTML e este comportamento deixa de existir.
     ------------------------------------------------------------------------ */
  var placeholderLinks = document.querySelectorAll('a[href="#"]');
  placeholderLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
    });
  });

  /* ------------------------------------------------------------------------
     3. Revelação progressiva
     Cada bloco com .reveal aparece quando entra na tela. Se o navegador não
     tiver IntersectionObserver, todos os blocos continuam visíveis.
     ------------------------------------------------------------------------ */
  var revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (item) {
      revealObserver.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }

  /* ------------------------------------------------------------------------
     4. Contador e barra de progresso
     O número final fica no data-target do HTML. Altere o valor ali para
     atualizar a porcentagem sem procurar dentro deste arquivo.
     ------------------------------------------------------------------------ */
  var counter = document.querySelector('.count-up');
  var progressFill = document.querySelector('.meter-fill');
  var progressSection = document.querySelector('#progresso');
  var counterStarted = false;

  function startProgress() {
    if (counterStarted) return;
    counterStarted = true;

    var target = Number(counter ? counter.getAttribute('data-target') : 0);
    var step = Math.max(1, Math.ceil(target / 32));
    var current = 0;

    if (progressFill) {
      progressFill.style.width = target + '%';
    }

    function count() {
      current = Math.min(current + step, target);
      if (counter) counter.textContent = String(current);
      if (current < target) window.requestAnimationFrame(count);
    }

    window.requestAnimationFrame(count);
  }

  if (progressSection && 'IntersectionObserver' in window) {
    var progressObserver = new IntersectionObserver(function (entries, observer) {
      if (entries[0].isIntersecting) {
        startProgress();
        observer.disconnect();
      }
    }, { threshold: 0.35 });
    progressObserver.observe(progressSection);
  } else {
    startProgress();
  }

  /* ------------------------------------------------------------------------
     5. Ano automático do rodapé
     Assim você não precisa editar o ano manualmente quando publicar uma
     nova versão do portfólio.
     ------------------------------------------------------------------------ */
  var currentYear = document.querySelector('#current-year');
  if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
  }
});