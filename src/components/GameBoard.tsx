import { memo } from 'react';
import styles from '../styles/components/GameBoard.module.css';
import LineTicTacToe from './LineTicTacToe';


function GameBoard() {
    return (
        <div className={styles.gameBoard}>
            <LineTicTacToe lineNumber={0} />
            <LineTicTacToe lineNumber={1} />
            <LineTicTacToe lineNumber={2} />
        </div>
    );
}

export default memo(GameBoard);