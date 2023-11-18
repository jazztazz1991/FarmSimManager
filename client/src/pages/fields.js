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
                const response = await axios.get(`http://localhost:3001/fields/savedFields/${userID}`, { headers: { authorizations: cookies.access_token } });
                setSavedFields(response.data.savedFields);
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
                                Crop Type: <span>{field.cropType}</span>
                            </p>
                            <p>
                                Plowed: <span>{field.plowed ? "Yes" : "No"}</span>
                            </p>
                            <p>
                                Cultivated: <span>{field.cultivated ? "Yes" : "No"}</span>
                            </p>
                            <p>
                                Limed: <span>{field.limed ? "Yes" : "No"}</span>
                            </p>
                            <p>
                                Fertilized: <span>{field.fertilized ? "Yes" : "No"}</span>
                            </p>
                            <p>
                                Weeded: <span>{field.herbicide ? "Yes" : "No"}</span>
                            </p>
                            <p>
                                Mulched: <span>{field.mulched ? "Yes" : "No"}</span>
                            </p>
                            <p>
                                Rolled: <span>{field.rolled ? "Yes" : "No"}</span>
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