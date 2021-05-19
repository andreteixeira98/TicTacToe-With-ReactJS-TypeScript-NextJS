import Button from "./Button";
import styles from "../styles/components/LineTicTacToe.module.css";
import { memo } from "react";

interface propsType {
    lineNumber: number;
}

function LineTicTacToe(props: propsType) {
    return (
        <div className={styles.container}>
            <Button
                lineNumber={props.lineNumber}
                columnNumber={0}
            />
            <Button
                lineNumber={props.lineNumber}
                columnNumber={1}
            />
            <Button
                lineNumber={props.lineNumber}
                columnNumber={2}
            />
        </div>
    );
}

export default memo(LineTicTacToe);