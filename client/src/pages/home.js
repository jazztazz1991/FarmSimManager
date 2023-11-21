import { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from 'react-cookie';

import { useGetUserID } from "../hooks/useGetUserID";

export const Home = () => {
    const [fields, setFields] = useState([]);
    const [savedFields, setSavedFields] = useState([])
    const [cookies, _] = useCookies(["access_token"])
    const userID = useGetUserID();

    useEffect(() => {
        const fetchFields = async () => {
            try {
                const response = await axios.get("/midwestHorizon");
                setFields(response.data);
                console.log(response.data);
            } catch (err) {
                console.error(err)
            }
        };
        const fetchSavedFields = async () => {
            try {
                const response = await axios.get(`/midwestHorizon/savedFields/ids/${userID}`, { headers: { authorizations: cookies.access_token } });
                setSavedFields(response.data.savedFields);
                console.log(response.data.savedFields);
            } catch (err) {
                console.error(err)
            }
        };

        fetchFields();
        fetchSavedFields();
    }, []);

    const saveField = async (fieldID) => {
        try {
            const response = await axios.put("/midwestHorizon", { fieldID, userID }, { headers: { authorizations: cookies.access_token } });
            setSavedFields(response.data.savedFields);
        } catch (err) {
            console.error(err)
        }
    }

    const isFieldSaved = (id) => savedFields.includes(id);

    return (
        <div className="container">
            <h2>Midwest Horizon Fields</h2>
            <ul>
                {fields.map((field) => (
                    <li key={field._id}>
                        <div>
                            {cookies.access_token ? (<button onClick={() => saveField(field._id)} disabled={isFieldSaved(field._id)}>{isFieldSaved(field._id) ? "Claimed" : "Claim Field"}</button>) : ""}
                            < p >
                                Field : <span>{field.fieldNumber}</span>
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
        </div >
    );
}