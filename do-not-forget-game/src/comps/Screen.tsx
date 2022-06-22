import React from 'react'
import { css, cx } from '@emotion/css'
import circle from '../assets/circle.svg'
import square from '../assets/square.svg'
import triangle from '../assets/triangle.svg'
import diamond from '../assets/diamond.svg'
import trapezium from '../assets/trapezium.svg'

const ShapeNames = {
    TRIANGLE: "triangle",
    CIRCLE: "circle",
    SQUARE: "square",
    DIAMOND: "diamond",
    TRAPEZIUM: "trapezium"
}

const Screen = () => {
    const [init, setInit] = React.useState<boolean>(true)
    const [limit, setLimit] = React.useState<number>(0)
    const [currentShape, setCurrentShape] = React.useState<string>(ShapeNames.SQUARE)
    const [previosShape, setPreviosShape] = React.useState<string>(ShapeNames.CIRCLE)
    const [points, setPoints] = React.useState<number>(0)
    const [run, setRun] = React.useState<boolean>(false);


    const getRandomShape = () => {
        let res = "";
        const num = Math.floor(Math.random() * 100);
        if (num < 20) {
            res = ShapeNames.CIRCLE;
        } else if (num < 40) {
            res = ShapeNames.SQUARE;
        } else if (num < 60) {
            res = ShapeNames.DIAMOND;
        } else if (num < 80) {
            res = ShapeNames.TRAPEZIUM;
        } else {
            res = ShapeNames.TRIANGLE;
        }
        return res;
    }

    const updateShape = () => {
        setPreviosShape(currentShape);
        const nm = Math.floor(Math.random() * 100);
        if (nm < 70) {
            const res = getRandomShape();
            setCurrentShape(res);
        } else {
            // console.log(nm)
        }
    }
    
    const answer = (yes: boolean)  => () => {
        if (Date.now() > limit) {
            setRun(false);
            return;
        }

        if (yes) {
            if (previosShape === currentShape) {
                setPoints(i => i + 10);
            } else {
                console.log("wrong")
            }
        } else {
            if (previosShape !== currentShape) {
                setPoints(i => i + 10);
            } else {
                console.log("wrong")
            }
        }
        updateShape();
    }

    const start = () => {
        setRun(true);
        setLimit(Date.now() + 60000);
        setInit(false);
    }

    if (!run) {
        return (
            <div className={initScreen}>
                {init ? <h3>Welcome</h3> : <h3>Play Again!</h3>}
                {init ? <></> : <h6>{points} Pts</h6>}
                <label onClick={start}>Play</label>
            </div>
        )
    }

    return (
        <div className={screenBody}>
            <p>{points}</p>
            <div className={card}>
                <img src={triangle} alt="shape" className={cx(shape, currentShape !== ShapeNames.TRIANGLE && hide)} />
                <img src={circle} alt="shape" className={cx(shape, currentShape !== ShapeNames.CIRCLE && hide)} />
                <img src={square} alt="shape" className={cx(shape, currentShape !== ShapeNames.SQUARE && hide)} />
                <img src={diamond} alt="shape" className={cx(shape, currentShape !== ShapeNames.DIAMOND && hide)} />
                <img src={trapezium} alt="shape" className={cx(shape, currentShape !== ShapeNames.TRAPEZIUM && hide)} />
            </div>
            <div className={buttonDrawer}>
                <label className={drawerButton} onClick={answer(false)}>NO</label>
                <label className={drawerButton} onClick={answer(true)}>YES</label>
            </div>
        </div>
    )
}

export default Screen

const initScreen = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
        font-size: 32px;
        font-weight: 700;
        color: whitesmoke;
        margin-bottom: 24px;
    }
    
    h6 {
        font-size: 20px;
        font-weight: 400;
        color: whitesmoke;
        margin-bottom: 24px;
    }

    label {
        background-color: #F94C66;
        padding: 8px 16px;
    }
`;

const hide = css`
    display: none;
`;

const screenBody = css`
    height: 100%;
    width: 600px;
    flex-direction: column;
    display: flex;
    align-items: center;
`;

const card = css`
    flex: 1;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(5, 5, 5);
`;

const shape = css`
    height: 200px;
`;

const buttonDrawer = css`
    display: flex;
    width: 600px;
`;

const drawerButton = css`
    padding: 16px;
    width: 600px;
    text-align: center;
    background-color: #064663;

    &:hover {
        background-color: #04293A;
        cursor: pointer;
    }
`;