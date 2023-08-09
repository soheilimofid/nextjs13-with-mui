import type {AppProps} from 'next/app'
import Head from 'next/head'
import {CacheProvider} from '@emotion/react';
import {createEmotionCache, createMyTheme} from "../src/shared/theme";
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";

const emotionCash = {
    rtl: createEmotionCache('rtl'),
    ltr: createEmotionCache('ltr'),
}
const themes = {
    rtl: createMyTheme('rtl'),
    ltr: createMyTheme('ltr'),
}
export default function App(props: AppProps) {
    const {Component, pageProps, router} = props
    const {locale = 'fa'} = router;
    console.log('locale 111111111111111111111', locale, props)
    const isRtl = locale === 'fa' || locale === 'ar';
    const dir = isRtl ? 'rtl' : 'ltr';
    return (
        <>
            <Head>
                <link
                    rel="preload"
                    href="/fonts/Inter-roman.latin.var.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
                <meta name="viewport" content="initial-scale=1, width=device-width"/>
            </Head>
            <CacheProvider value={emotionCash[dir]}>
                <ThemeProvider theme={themes[dir]}>
                    <CssBaseline/>
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </>
    )
}