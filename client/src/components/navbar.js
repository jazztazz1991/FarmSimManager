import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import instance from '../hooks/API';

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const [intervalId, setIntervalId] = useState(null);
    const [lastSavedDate, setLastSavedDate] = useState(null);
    const [counter, setCounter] = useState();
    const [year, setYear] = useState();
    const [monthCounter, setMonthCounter] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const navigate = useNavigate();
    // let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][monthCounter - 1];

    useEffect(() => {
        console.log(cookies.access_token);
        if (cookies.access_token == "") {
            console.log("if running")
            navigate("/auth")
        }
        const fetchLastSavedDate = async () => {
            try {
                const response = await instance.get("/site/");
                const siteInfo = response.data;
                let year = siteInfo.year;
                let monthCounter = siteInfo.monthCounter;
                let day = siteInfo.day;
                const lastSavedDate = siteInfo ? new Date(siteInfo.date) : null;
                setLastSavedDate(lastSavedDate);
                if (lastSavedDate) {
                    const hoursPassed = Math.floor((new Date() - lastSavedDate) / 3600000);
                    const counter = Math.floor(hoursPassed / 24);
                    setCounter(counter);
                    if (counter >= 1) {
                        // Update day, monthCounter, and year based on counter
                        let newDay = day + Math.floor(hoursPassed / 24);
                        let newMonthCounter = monthCounter;
                        let newYear = year;
                        day = newDay;

                        if (newDay > 2) {
                            let tempDay = counter % 2;
                            newMonthCounter += Math.floor(counter / 2);
                            monthCounter = newMonthCounter;
                            if (tempDay === 0) {
                                newDay = 1;
                                day = newDay;
                            } else if (tempDay === 1) {
                                newDay = 2;
                                day = newDay;
                            }
                            if (newMonthCounter > 12) {
                                let tempMonth = newMonthCounter % 12;
                                newYear += Math.floor(newMonthCounter / 12);
                                year = newYear
                                if (tempMonth === 0) {
                                    newMonthCounter = 12;
                                    monthCounter = newMonthCounter;
                                } else {
                                    newMonthCounter = tempMonth
                                    monthCounter = newMonthCounter;
                                }

                            }
                        }
                        setDay(newDay); // Update day state
                        setMonthCounter(newMonthCounter); // Update monthCounter state
                        setYear(newYear); // Update year state

                    }
                    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][monthCounter - 1];
                    setMonth(month);
                    setDay(day); // Update day state
                    setMonthCounter(monthCounter); // Update monthCounter state
                    setYear(year); // Update year state
                }
            } catch (err) {
                console.log(err);
            }
        };

        // useEffect(() => {
        // Run function on load
        fetchLastSavedDate();

        // Set up interval to repeat function every second
        const newIntervalId = setInterval(() => {
            fetchLastSavedDate();

        }, 600000);

        // Store interval ID for cleanup
        setIntervalId(newIntervalId);

        return () => clearInterval(newIntervalId); // Clear interval on component cleanup
    }, []);

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth")
    }

    return (
        <div className='navbar'>
            {!cookies.access_token ? (<Link to="/auth" className='navLink'>Login/Register</Link>) : (
                <>
                    <Link to="/" className='navLink'>Home</Link>
                    <Link to="/farm" className='navLink'>My Farm</Link>
                    <Link to="/fields" className='navLink'>My Fields</Link>
                    <Link to="/addHarvest" className='navLink'>Add Harvest</Link>
                    <button onClick={logout}>Logout</button>
                </>
            )}
            {/* <Link to="/auth" className='navLink'>Login/Register</Link> */}
            <p>Current Year: {year}</p>
            <p>Current Month: {month}</p>
            <p>Day: {day}</p>
        </div >
    );
};