import { memo } from 'react';
import styles from '../../styles/components/screens/GameScreen.module.css';
import ExitGameButton from '../ExitGameButton';
import GameBoard from '../GameBoard';
import RestartGameButton from '../RestartGameButton';
import ScoreBoard from '../ScoreBoard';

function GameScreen() {

    return (
        <div className={styles.gameScreen}>
            <ScoreBoard />
            <GameBoard />
            <div className={styles.optionsRestartExitButtons}>
                <RestartGameButton />
                <ExitGameButton />
            </div>
        </div>
    );
}

export default memo(GameScreen);