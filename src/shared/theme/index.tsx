import {createTheme, responsiveFontSizes, Theme, ThemeOptions,} from '@mui/material/styles';
import {bgBG as coreBgBG} from '@mui/material/locale';
import createCache from "@emotion/cache";
import {prefixer} from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

export const createMyTheme = (dir: 'ltr' | 'rtl'): Theme => {
    const theme: Theme = createTheme({
        palette: {
            primary: {
                dark: '#004C6A',
                main: '#00729E',
                light: '#E0EAED',
            },
            error: {
                dark: '#D93B58',
                main: '#FF526D',
                light: '#FFCCCF',
            },
            success: {
                dark: '#00AD7F',
                main: '#40C79A',
                light: '#D5EDE3',
            },
            text: {
                dark: '#444954',
                primary: '#444954',
                secondary: '#838A9A',
                light: '#C4CED5',
                disabled: '#C4CED5',
            },
            mode: 'light',
        },
        typography: {
            fontFamily: `"Dana", "Helvetica", sans-serif`,
            fontWeightUltraLight: 100,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 900,
        },
        direction: dir || 'rtl',
    } as ThemeOptions, coreBgBG);
    return responsiveFontSizes(theme);
};


export function createEmotionCache(dir: 'ltr' | 'rtl') {
    return createCache({
        key: 'mui' + (dir || 'rtl'),
        prepend: true,
        stylisPlugins: [prefixer, rtlPlugin],
    });
}
