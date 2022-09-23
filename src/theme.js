import { createMuiTheme } from '@material-ui/core/styles';

const themes = createMuiTheme({
    typography: {
        fontFamily: ['"Lato"', 'sans-serif'].join(',')
    }
})

export default themes;