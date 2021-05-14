import type { AppProps } from 'next/app'
import GlobalStyles from '../components/global-styles'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App
