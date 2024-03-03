import { useState } from 'react';
import style from './CSS/LoginScreen.module.css';
import {Link, Route, Routes} from "react-router-dom";
import { useEffect } from 'react';

const LoginScreen = () => {


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        const updateDimensions = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        };
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const horizontal = () => {
        const horizontal = screenWidth / 50;

        const elements = [];

        for (let index = 0; index < horizontal; index++) {
            elements.push(<div key={index} className={`boxColor`} style={{ height: '50px', width: '50px', backgroundColor: '#1f1f1f', marginRight: '4px', display: 'inline-block' }}></div>)
        }
        return elements;

    }

    const showBoxes = () => {
        const vertical = screenHeight / 50;

        const elements = [];

        for (let index = 0; index < vertical; index++) {
            elements.push(<div key={index} className={style.boxCover}>
                {horizontal()}
            </div>)
        }
        return elements;
    }


    function resetBoxColor(element) {
        element.style.backgroundColor = "#1f1f1f";
    }


    useEffect(() => {
        const boxes = document.querySelectorAll(".boxColor");

        boxes.forEach((box) => {
            // box.addEventListener("mouseover", () => {
            //     box.style.backgroundColor = "#00f700"; // Change color on hover
            // });

            box.addEventListener("mouseout", () => {
                setTimeout(() => {
                    resetBoxColor(box);
                }, 700);
            });
        });
    }, [])


    return (
        <div className={style.fullScreen}>
            {showBoxes()}

            <div className={style.loginContainer}>
                <div className={style.loginContent}>
                    <h1 className={style.welcomeText}>Xoş gəlmişsiniz!</h1>
                    <form className={style.loginForm}>
                        <input type="text" placeholder="İstifadəçi adı" className={style.inputField} />
                        <input type="password" placeholder="Parol" className={style.inputField} />
                        <button type="submit" className={style.loginButton}>Giriş</button>
                        <Link to={"/register"}>Qeydiyyat</Link>
                    </form>
                </div>
            </div>
        </div>


    )
}
export default LoginScreen;