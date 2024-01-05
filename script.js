
function sReveal() {
  ScrollReveal({ 
    reset: false,
    distance: '90px',
    duration: 1900,
    delay: 500
  });
  ScrollReveal().reveal('.reveal-top', { origin: 'top' });
  ScrollReveal().reveal('.reveal-bottom', { origin: 'bottom' });
  ScrollReveal().reveal('.reveal-left', { origin: 'left' });
  ScrollReveal().reveal('.reveal-right', { origin: 'right' });
}

sReveal();

// my theme
function darkMode() {
  document.querySelector('#tema-gelap').addEventListener('click', function() {
    document.body.setAttribute('class', 'dark');
    localStorage.setItem('tema', 'dark')
  });
};

function lightMode () {
  document.querySelector('#tema-terang').addEventListener('click', function() {
    document.body.removeAttribute('class');
    localStorage.setItem('tema', 'light')
  });
};

lightMode();
darkMode();

if(localStorage.getItem('tema') == 'dark') {
  document.body.setAttribute('class', 'dark');
}

/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */


(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    // return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      document.body.setAttribute('class', 'dark')
      return 'dark'
    } else {
      document.body.removeAttribute('class');
      return 'light'
    }
  }

  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    const themeSwitcherText = document.querySelector('#bd-theme-text')
    const activeThemeIcon = document.querySelector('.theme-icon-active')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const iconOfActiveBtn = btnToActive.querySelector('i').dataset.themeIcon

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconActive)
    activeThemeIcon.classList.add(iconOfActiveBtn)
    activeThemeIcon.dataset.iconActive = iconOfActiveBtn
    btnToActive.setAttribute('aria-pressed', 'true')
    
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`
    themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

    if (focus) {
      themeSwitcher.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})();


window.onscroll = function() {
  let tutup = document.querySelector('.navbar-collapse');
  if(window.pageYOffset > 100) {
    tutup.classList.remove('show')
  }
}


// localStorage.removeItem('tema', 'dark');
// localStorage.removeItem('theme', 'dark');