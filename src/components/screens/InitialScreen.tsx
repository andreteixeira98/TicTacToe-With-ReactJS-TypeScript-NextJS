

import { memo } from 'react';
import imageTicTacToe from '../../images/TicTacToe.png';
import styles from '../../styles/components/screens/InitialScreen.module.css';
import StartButton from '../StartButton';

function InitialScreen() {
    return (
        <div className={styles.InitialScreen}>
            <img
                src={imageTicTacToe}
                alt="Tic Tac Toe Image"
                width={300}
                height={300}
            />
            <StartButton />
        </div>
    );
}
export default memo(InitialScreen);