import {
    createContext,
    memo,
    ReactNode,
    useEffect,
    useState
} from "react";

import imageCircle from '../images/circle.png';
import imageTriangle from '../images/triangle.png';
interface PlayerProps {
    name: string;
    imageURL: string;
    score: number;
}
interface ticTacToeContextProps {
    player1: PlayerProps;
    player2: PlayerProps;
    gameStage: 'notStarted' | 'started' | 'restarted' | 'finished';
    counter: number;
    gameBoard: number[][];
    winner: number;
    isCongratulations: boolean;
    isDraw: boolean;
    setIsDraw: (isDraw: boolean) => void;
    setIsCongratulations: (isCongratulations: boolean) => void;
    setGameBoardValueByCoordinates: (value: number, line: number, column: number) => void;
    counterIncrement: () => void;
    startGame: () => void;
    restartGame: () => void;
    exitGame: () => void;
    setGameStage: (stage: string) => void;

}
interface TicTacToeProviderProps {
    children: ReactNode;
}
const ticTacToeContext = createContext({} as ticTacToeContextProps);

function TicTacToeProvider({ children }: TicTacToeProviderProps) {

    const [player1, setPlayer1] = useState(
        {
            name: 'Player1',
            imageURL: imageCircle,
            score: 0
        }
    );
    const [player2, setPlayer2] = useState(
        {
            name: 'Player2',
            imageURL: imageTriangle,
            score: 0
        }
    );
    const [gameStage, setGameStage] = useState(null);
    const [winner, setWinner] = useState(-1);
    const [counter, setCounter] = useState(0);
    const [isCongratulations, setIsCongratulations] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [gameBoard, setGameBoard] = useState(
        [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1]
        ]

    );


    function resetPlayer1() {
        const newPlayer1 = {
            name: 'Player1',
            imageURL: imageCircle,
            score: 0
        }
        setPlayer1(newPlayer1);
    }
    function resetPlayer2() {
        const newPlayer2 = {
            name: 'Player2',
            imageURL: imageTriangle,
            score: 0
        }
        setPlayer2(newPlayer2);
    }


    function counterIncrement() {
        setCounter(counter + 1);
    }
    function startGame() {
        setGameStage("started");
        restartGameBoard();
        setCounter(0);
        setWinner(-1);
        setIsCongratulations(false);
        setIsDraw(false);
    }

    function restartGame() {
        setGameStage("restarted");
    }

    function exitGame() {
        setGameStage("notStarted");
        setCounter(0);
        restartGameBoard();
        setWinner(-1);
        resetPlayer1();
        resetPlayer2();
        setIsCongratulations(false);
        setIsDraw(false);

    }
    function setGameBoardValueByCoordinates(value: number, line: number, column: number) {

        let newGameBoard = [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1]
        ];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                newGameBoard[i][j] = gameBoard[i][j];
            }
        }
        newGameBoard[line][column] = value;
        setGameBoard(
            newGameBoard
        );
    }

    function checkWinnerInLines() {
        let sum = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let coordinateValue = gameBoard[i][j];
                if (coordinateValue === -1) {
                    sum = -1;
                    break;
                } else {
                    sum += coordinateValue;
                }
            }
            if (sum === 0) {
                setWinner(0);
                break;
            } else if (sum === 3) {
                setWinner(1);
                break;
            }
            sum = 0;
        }

    }

    function checkWinnerInColumns() {
        let sum = 0;

        for (let j = 0; j < 3; j++) {
            for (let i = 0; i < 3; i++) {
                let coordinateValue = gameBoard[i][j];
                if (coordinateValue === -1) {
                    sum = -1;
                    break;
                } else {
                    sum += coordinateValue;
                }
            }
            if (sum === 0) {
                setWinner(0);
                break;
            } else if (sum === 3) {
                setWinner(1);
                break;
            }
            sum = 0;

        }
    }
    function checkWinnerInSecondaryDiagonal() {

        let sum = 0;
        for (let i = 0, j = 2; i < 3; i++, j--) {
            let coordinateValue = gameBoard[i][j];
            if (coordinateValue === -1) {
                sum = -1;
                return;
            } else {
                sum += coordinateValue;
            }
        }
        if (sum === 0) {
            setWinner(0);

        } else if (sum === 3) {
            setWinner(1);

        }
    }
    function checkWinnerInMainDiagonal() {
        let sum = 0;
        for (let i = 0, j = 0; i < 3; i++, j++) {
            let coordinateValue = gameBoard[i][j];
            if (coordinateValue === -1) {
                sum = -1;
                return;
            } else {
                sum += coordinateValue;
            }
        }
        if (sum === 0) {
            setWinner(0);

        } else if (sum === 3) {
            setWinner(1);

        }
    }
    function restartGameBoard() {
        let newGameBoard = [
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1]
        ];
        setGameBoard(newGameBoard);
    }
    useEffect(() => {
        checkWinnerInLines();
        checkWinnerInColumns();
        checkWinnerInSecondaryDiagonal();
        checkWinnerInMainDiagonal();

    }, [gameBoard]);

    useEffect(() => {
        if (winner != -1) {
            setGameStage("finished");
        }

    }, [winner]);

    useEffect(() => {
        if (counter === 9) {
            setGameStage("finished");
        }
    }, [counter]);

    useEffect(() => {
        if (gameStage === 'restarted') {
            startGame();
        }
        else if (gameStage === "finished") {
            if (winner === 0) {
                player1.score += 1;
                setIsCongratulations(true);
            } else if (winner === 1) {
                player2.score += 1;
                setIsCongratulations(true);
            } else {
                setIsDraw(true);
            }
        }

    }, [gameStage]);
    return (
        <ticTacToeContext.Provider
            value={{
                player1,
                player2,
                gameStage,
                setGameStage,
                counter,
                gameBoard,
                winner,
                isDraw,
                setIsDraw,
                isCongratulations,
                setIsCongratulations,
                setGameBoardValueByCoordinates,
                counterIncrement,
                startGame,
                restartGame,
                exitGame
            }}
        >
            {children}
        </ticTacToeContext.Provider>
    )
}

export { ticTacToeContext };
export default memo(TicTacToeProvider);