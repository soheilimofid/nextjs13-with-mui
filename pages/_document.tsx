import {Head, Html, Main, NextScript} from 'next/document'

export default function Document(props) {
    const {locale = 'fa'} = props
    console.log('locale',locale,props)
    const isRtl = locale === 'fa' || locale === 'ar';
    const dir = isRtl ? 'rtl' : 'ltr';

    return (
        <Html lang={locale} dir={dir}>
            <Head>
                <meta name="robots" content="follow, index"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}