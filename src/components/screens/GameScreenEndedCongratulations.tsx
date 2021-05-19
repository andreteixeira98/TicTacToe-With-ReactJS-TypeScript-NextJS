import { memo, useContext } from 'react';
import { ticTacToeContext } from '../../contexts/TicTacToeContext';
import congratulations from '../../images/congratulations.svg';
import styles from '../../styles/components/screens/GameScreenEndedCongratulations.module.css';
import CloseButton from '../CloseButton';
import ExitGameButton from '../ExitGameButton';
import RestartGameButton from '../RestartGameButton';


function GameScreenEndedCongratulations() {
    const {
        player1,
        player2,
        winner
    } = useContext(ticTacToeContext);
    return (
        <div className={styles.container}>
            <div className={styles.gameScreenEndedCongratulations}>
                <div className={styles.divCloseButton}>
                    <CloseButton />
                </div>

                <h1>CONGRATULATIONS!</h1>
                <h1 style={{ color: '#FFDF40' }}>{`${winner === 0 ? player1.name : player2.name}`}</h1>
                <img className={styles.congratulationsImage} src={congratulations} alt="congratulations" />
                <h1>YOU WIN!</h1>
            </div>
            <div className={styles.optionsRestartExitButtons}>
                <RestartGameButton />
                <ExitGameButton />
            </div>
        </div>
    )
}

export default memo(GameScreenEndedCongratulations);