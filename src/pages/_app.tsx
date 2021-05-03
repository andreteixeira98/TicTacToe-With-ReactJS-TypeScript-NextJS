import '../styles/globals.css'
import { AppProps } from 'next/app';
import TicTacToeProvider from '../contexts/TicTacToeContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <TicTacToeProvider>
            <Component {...pageProps} />
        </TicTacToeProvider>
    )
}

export default MyApp
