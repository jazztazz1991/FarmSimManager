import { useEffect, useState } from "react";
import axios from "axios";

import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from 'react-cookie';


export const Fields = () => {
    const [savedFields, setSavedFields] = useState([]);
    const [cookies, _] = useCookies(["access_token"])

    const userID = useGetUserID();

    useEffect(() => {
        const fetchSavedFields = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/midwestHorizon/savedFields/${userID}`, { headers: { authorizations: cookies.access_token } });
                console.log(response.data.savedFields);
                setSavedFields(response.data.savedFields);
                console.log(savedFields);
            } catch (err) {
                console.error(err)
            }
        };
        fetchSavedFields();
    }, []);

    return (
        <div className="container">
            <h2>Fields</h2>
            <ul>
                {savedFields.map((field) => (
                    <li key={field._id}>
                        <div>
                            {/* <button onClick={() => sellField(field._id)}>Sell Field</button> */}
                            <p>
                                Field: <span>{field.fieldNumber}</span>
                            </p>
                            <p>
                                Acres: <span>{field.acres}</span>
                            </p>
                            <p>
                                Yield Potential: <span>{field.yieldPotential}</span>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}