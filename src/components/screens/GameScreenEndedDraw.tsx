import { memo } from 'react';
import drawImage from '../../images/draw.svg';
import styles from '../../styles/components/screens/GameScreenEndedDraw.module.css';
import CloseButton from '../CloseButton';
import ExitGameButton from '../ExitGameButton';
import RestartGameButton from '../RestartGameButton';


function GameScreenEndedDraw() {
    return (
        <div className={styles.container}>
            <div className={styles.gameScreenEndedDraw}>
                <div className={styles.divCloseButton}>
                    <CloseButton />
                </div>

                <h1>DRAW!</h1>

                <img className={styles.drawImage} src={drawImage} alt="Draw Image" />
                <h1>NOBODY WON!</h1>
            </div>
            <div className={styles.optionsRestartExitButtons}>
                <RestartGameButton />
                <ExitGameButton />
            </div>
        </div>
    )
}

export default memo(GameScreenEndedDraw);