import "@/styles/globals.scss";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { DefaultSeo } from 'next-seo';
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
        const router = useRouter();

        const DefaultSeoConfig = {
                defaultTitle: "Debbie's task",
                titleTemplate: "%s | Debbie's task",
                description: "Debbie's task",
                keywords: "Debbie's task, Debbie, task",
                openGraph: {
                        type: 'website',
                        locale: 'en_US',
                        url: '',
                        siteName: "Debbie's task",
                        title: "Debbie's task",
                        description: "Debbie's task",
                        images: [
                                {
                                        url: 'https://i.pinimg.com/474x/61/f7/5e/61f75ea9a680def2ed1c6929fe75aeee.jpg', // Default image URL
                                        width: 1280,
                                        height: 640,
                                        alt: "Debbie's task",
                                },
                        ],
                },
                twitter: {
                        handle: '@debbie_task', // Twitter handle
                        site: '@debbie_task', // Twitter site
                        cardType: 'summary_large_image', // Twitter card type
                },
                article: {
                        section: "debbie_task",
                        publisher: "debbie_task",
                        tags: ['task', "debbie"],
                },
                additionalLinkTags: [
                        {
                                rel: 'icon',
                                href: 'https://i.pinimg.com/474x/61/f7/5e/61f75ea9a680def2ed1c6929fe75aeee.jpg',
                        },
                        {
                                rel: 'manifest',
                                href: '/manifest.json'
                        },
                ],
        };
        return (
                <>
                        <DefaultSeo {...DefaultSeoConfig} />
                        <Toaster />
                        <AnimatePresence exitBeforeEnter initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                                <Component {...pageProps} />
                        </AnimatePresence>
                </>
        );
}
