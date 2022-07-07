const body = document.querySelector('body')
const checkbox = document.querySelector('input[name=theme]')

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style)

const initialColors = {
  bgColor: getStyle(body, '--bg-color'),
  textColor: getStyle(body, '--text-color'),
  primaryColor: getStyle(body, '--primary-color'),
  primaryColorHover: getStyle(body, '--primary-color-hover'),
  bgPanel: getStyle(body, '--bg-panel')
}

const darkPinkMode = {
  bgColor: '#1F000B',
  textColor: 'white',
  primaryColor: '#D6336C',
  colorHover: '#A61E4D',
  bgPanel: '#D6336C'
}

const darkBlueMode = {
  bgColor: '#00082f',
  textColor: 'white',
  primaryColor: '#4263eb',
  colorHover: 'darkblue',
  bgPanel: '#4263eb'
}

const transformKey = key => '--' + key.replace(/([A-Z])/, '-$1').toLowerCase()

const changeThemes = themes => {
  Object.keys(themes).map(key =>
    body.style.setProperty(transformKey(key), themes[key])
  )
}

function pinkTheme() {
  checkbox.addEventListener('change', ({ target }) => {
    target.checked ? changeThemes(darkPinkMode) : changeThemes(initialColors)
  })
}

function blueTheme() {
  checkbox.addEventListener('change', ({ target }) => {
    target.checked ? changeThemes(darkBlueMode) : changeThemes(initialColors)
  })
}

if(body.className=="blue"){
  blueTheme()
}else{
  pinkTheme()
}