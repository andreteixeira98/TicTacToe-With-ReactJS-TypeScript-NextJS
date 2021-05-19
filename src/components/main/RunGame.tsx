import { memo, useContext } from 'react';
import { ticTacToeContext } from '../../contexts/TicTacToeContext';
import styles from '../../styles/components/main/RunGame.module.css';
import GameScreenEndedCongratulations from '../screens/GameScreenEndedCongratulations';
import GameScreenEndedDraw from '../screens/GameScreenEndedDraw';
import GameScreenStarted from '../screens/GameScreenStarted';
import GameScreenNotStarted from '../screens/GameScreenNotStarted';

function RunGame() {
    const {
        isCongratulations,
        gameStage
    } = useContext(ticTacToeContext);

    function screenController(): JSX.Element {
        if (!gameStage || gameStage === 'notStarted') return <GameScreenNotStarted />;
        else if (gameStage === 'started' || gameStage === 'restarted') return <GameScreenStarted />;
        else {//is game finished
            if (isCongratulations) return <GameScreenEndedCongratulations />;//some won
            else return <GameScreenEndedDraw />;//nobody won
        }
    }

    return (
        <div className={styles.runGame}>
            {screenController()}
        </div>
    )
}
export default memo(RunGame);