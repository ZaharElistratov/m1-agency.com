import type {AppProps} from 'next/app'
import localFont from "next/font/local";

import '@/styles/global.scss'
import GoogleAnalytics from "@/components/GoogleAnalytics";

const rostelecom = localFont({
    src: [
        {
            path: '../../public/fonts/rostelecomBasis-Regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: '../../public/fonts/rostelecomBasis-Medium.woff2',
            weight: '500',
            style: 'normal'
        },
        {
            path: '../../public/fonts/rostelecomBasis-Bold.woff2',
            weight: '700',
            style: 'normal'
        },
    ],
    variable: '--font-rostelecom'
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <div className={rostelecom.variable}>
            <GoogleAnalytics ga_id={process.env.GOOGLE_ANALYTICS_ID}/>
            <Component {...pageProps} />
        </div>
    )
}
