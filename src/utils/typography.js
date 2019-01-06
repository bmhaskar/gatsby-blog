import Typography from "typography"
import lawtonTheme from "typography-theme-funston"

lawtonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'a:hover': {
      color: '#00a562'
    }
  })
  
const typography = new Typography(lawtonTheme)

export default typography
