import { memo } from 'react';
import styles from '../../styles/components/screens/GameScreenStarted.module.css';
import ExitGameButton from '../ExitGameButton';
import GameBoard from '../GameBoard';
import RestartGameButton from '../RestartGameButton';
import ScoreBoard from '../ScoreBoard';

function GameScreenStarted() {

    return (
        <div className={styles.gameScreenStarted}>
            <ScoreBoard />
            <GameBoard />
            <div className={styles.optionsRestartExitButtons}>
                <RestartGameButton />
                <ExitGameButton />
            </div>
        </div>
    );
}

export default memo(GameScreenStarted);