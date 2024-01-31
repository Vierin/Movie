import { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'
import '@/assets/styles/globals.scss'
import Home from '@/components/screens/home/Home'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<MainProvider>
			<Home />
		</MainProvider>
	)
}

export default MyApp
