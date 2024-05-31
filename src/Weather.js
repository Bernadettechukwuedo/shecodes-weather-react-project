import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
export default function Weather(props) {

    return (<div >
        <form className="input-entry">

            <div ><input type="search" placeholder="Enter a city ..." className="search" /></div>
            <div><input type="submit" value="Search" className="submit" /> </div>

        </form>
        <div className="weather-content">
            <div > <h1 className="city"> SanFransisco</h1>
                <div className="weather-details">Saturday 14:57, overcast clouds <br />
                    Humidity: <span className="humidity">91%</span>, Wind: <span className="wind">7.15km/h</span></div>
            </div>
            <div className="degree">
                <div className="temperature">☀️</div>
                <div className="temperature">11</div>
                <div className="unit">°C</div>
            </div>
        </div>
        <div className="container ms-5">
            <div className="row">
                <div className="col-3 "><div>sat</div><div className="emoji">⛅</div><div>13° |  15°</div></div>
                <div className="col-3"><div>sun</div><div className="emoji">⛅</div> <div>13° | 15°</div></div>
                <div className="col-3"><div>mon</div><div className="emoji">⛅</div> <div>13° |  15°</div></div>
                <div className="col-3"><div>tue</div><div className="emoji">⛅</div> <div>13° |  15°</div></div>

            </div>
            <footer>This project was coded by  SheCodes and is open-sourced on <a href="https://github.com/Bernadettechukwuedo/shecodes-weather-react-project" target="_blank" rel="noreferrer">GitHub</a> and hosted on <a href="https://shecode-react-weather-app.netlify.app/" target="_blank" rel="noreferrer">Netlify</a> </footer>
        </div>


    </div>)

}