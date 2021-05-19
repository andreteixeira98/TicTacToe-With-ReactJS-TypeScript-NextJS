import { memo, useContext } from 'react';
import { CgClose } from 'react-icons/cg';
import { ticTacToeContext } from '../contexts/TicTacToeContext';
import styles from '../styles/components/CloseButton.module.css';

function CloseButton() {
    const {
        setGameStage
    } = useContext(ticTacToeContext);

    function closeButton() {
        setGameStage("restarted");
    }
    return (
        <button
            className={styles.closeButton}
            onClick={closeButton}
        >
            <CgClose />
        </button>
    );
}

export default memo(CloseButton);