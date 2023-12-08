import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';
import instance from '../hooks/API';

import { useGetUserID } from "../hooks/useGetUserID";

export const Year = () => {
    const [savedHarvest, setSavedHarvest] = useState([]);
    const [cookies, _] = useCookies(["access_token"])
    let year = 22;

    const userID = useGetUserID();

    useEffect(() => {
        const fetchSavedHarvest = async () => {
            try {
                const response = await instance.get(`/harvest/year/${userID}`, { year }, { headers: { authorizations: cookies.access_token } });
                console.log(response.data.harvests);
                setSavedHarvest(response.data.harvests);
            } catch (err) {
                console.error(err);
            }
        };
        fetchSavedHarvest();
    }, []);
    return (
        <div className="container">
            <h2>Year {year} Harvest</h2>
            <ul>

            </ul>
        </div>
    );
}