const localStorage = window.localStorage
const $ = (element: any): HTMLElement => document.querySelector(element)

export const setTheme = () => {
  const themeToggleDarkIcon = $('#theme-toggle-dark-icon')
  const themeToggleLightIcon = $('#theme-toggle-light-icon')

  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    themeToggleLightIcon.classList.remove('hidden')
  } else {
    themeToggleDarkIcon.classList.remove('hidden')
  }
}
