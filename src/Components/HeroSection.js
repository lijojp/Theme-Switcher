import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../color";
import ThemeToggler from "./ThemeToggler"

const HeroSection = () =>{
    const theme = useContext(ThemeContext)[0]
    const currectTheme = AppTheme[theme]
    return(
        <div
        style={{
            backgroundColor : `${currectTheme.backgroundColor}`,
            color : `${currectTheme.color}`,
            textAlign : "center",
            height:500,
        }}
        >
            <h1>Theme Switcher</h1>
            {/* <button 
            style={{
                background :"green",
                paddingTop :5,
                paddingBottom :25
            }}
            ><ThemeToggler/>
               </button> */}
               <button
                style={{
                    backgroundColor: "#26ae60",
                    padding: "10px 150px",
                    fontSize: "20px",
                    color: "#fff",
                    border:`${currectTheme.border}`
                }}
            >
            <ThemeToggler/>
            </button>
        </div>
    )
}

export default HeroSection