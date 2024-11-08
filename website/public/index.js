const savedColorMode = window.localStorage.getItem('colormode')
const systemPreference = window.matchMedia('(prefers-color-scheme: light)')

//Detetcts automatically which is the user's operative system preferences
function setThemeAutomatically() {
  if (systemPreference.matches) {
    document.body.setAttribute('data-sds-colormode', 'Light')
  } else {
    document.body.setAttribute('data-sds-colormode', 'Dark')
  }
}

//Verifies if there is a user preference already saved
if (!savedColorMode) {
  setThemeAutomatically()
  localStorage.setItem('colormode', 'Auto')
  //Automatically changes the theme based on the system actions
  systemPreference.addEventListener('change', setThemeAutomatically)
} else {
  if (savedColorMode === 'Auto') {
    setThemeAutomatically()
    //Automatically changes the theme based on the system actions
    systemPreference.addEventListener('change', setThemeAutomatically)
  } else {
    document.body.setAttribute('data-sds-colormode', savedColorMode)
  }
}
