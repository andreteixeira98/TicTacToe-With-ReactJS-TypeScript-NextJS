import '../styles/globals.css'
import { AppProps } from 'next/app';
import TicTacToeProvider from '../contexts/TicTacToeContext';
import Footer from '../components/Footer';
import React from 'react';
import Header from '../components/Header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <TicTacToeProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </TicTacToeProvider>
    )
}

export default MyApp;
