import '../style/globals.css'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from "@material-tailwind/react";

const App = ({ Component, pageProps }) => {
	return <ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
}

export default appWithTranslation(App)
