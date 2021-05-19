import { memo, useContext, useEffect, useState } from 'react';
import { ticTacToeContext } from '../contexts/TicTacToeContext';
import ImageBlank from '../images/image-blank.png';
import styles from '../styles/components/Button.module.css';

interface propsType {
    lineNumber: number;
    columnNumber: number;
}
function Button(props: propsType) {
    const {
        counter,
        setGameBoardValueByCoordinates,
        counterIncrement,
        gameStage,
        player1,
        player2
    } = useContext(ticTacToeContext);

    const [image, setImage] = useState(ImageBlank);
    const [imageAlt, setImageAlt] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    function handleClick() {


        if (counter % 2 === 0) {

            setImage(player1.imageURL);
            setImageAlt(`${player1.name}`)
            setGameBoardValueByCoordinates(0, props.lineNumber, props.columnNumber);


        } else {
            setImage(player2.imageURL);
            setImageAlt(`${player2.name}`)
            setGameBoardValueByCoordinates(1, props.lineNumber, props.columnNumber);

        }

        counterIncrement();
        setIsButtonDisabled(true);

    }

    useEffect(() => {
        if (gameStage === "started") {
            setImage(ImageBlank);
            setIsButtonDisabled(false);

        } else if (gameStage === "restarted") {
            setImage(ImageBlank);
            setIsButtonDisabled(false);
        }
    }, [gameStage]);

    return (
        <div className={styles.container}>
            {isButtonDisabled ?
                (
                    <button
                        className={styles.buttonDisabled}
                        disabled
                    >
                        <img
                            className={styles.img}
                            src={image}
                            alt={imageAlt}
                            width={94}
                            height={116}
                        />
                    </button>
                )
                :
                (
                    <button
                        className={styles.buttonEnable}
                        onClick={handleClick}
                    >
                        <img
                            className={styles.img}
                            src={image}
                            alt={imageAlt}
                            width={94}
                            height={116}
                        />
                    </button>
                )
            }
        </div>
    );
}

export default memo(Button);