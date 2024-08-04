import { keyThemesLocalStorage, Themes } from '../consts/app.const'

class Theme {
  public setTheme(theme: Themes | string) {
    document.documentElement.dataset.theme = theme
    localStorage.setItem(keyThemesLocalStorage, theme)
  }

  public getTheme() {
    const theme = localStorage.getItem(keyThemesLocalStorage)
    return theme ? theme : Themes.dark
  }
}

export default new Theme