import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


import { useGetUserID } from '../hooks/useGetUserID';

export const AddField = () => {

    const userID = useGetUserID();
    const [cookies, _] = useCookies(["access_token"])


    const [field, setField] = useState({
        userOwner: userID,
        fieldNumber: 0,
        acres: 0.00,
        cropType: "",
        plowed: false,
        cultivated: false,
        limed: false,
        fertilized: false,
        herbicide: false,
        mulched: false,
        rolled: false,
        perLoam: 0,
        perSandyLoam: 0,
        perLoamySand: 0,
        perSiltyClay: 0
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setField({ ...field, [name]: value })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3001/midwestHorizon", field, { headers: { authorizations: cookies.access_token } });
            alert("Field Added");
            // navigate("/");
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className="addField">
            <h2>Add Field</h2>
            <form onSubmit={onSubmit}>
                <span className="formField">
                    <label htmlFor="fieldNumber">Field Number</label>
                    <input type="number" id="fieldNumber" name="fieldNumber" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="acres">Acres</label>
                    <input type="number" id="acres" name="acres" step="0.01" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="cropType">
                        Crop Type:
                        <select name="cropType" onChange={handleChange} >
                            <option value="Wheat">Wheat</option>
                            <option value="Barley">Barley</option>
                            <option value="Canola">Canola</option>
                            <option value="Oat">Oat</option>
                            <option value="Corn">Corn</option>
                            <option value="Sunflowers">Sunflowers</option>
                            <option value="Soybeans">Soybeans</option>
                            <option value="Potatoes">Potatoes</option>
                            <option value="SugarBeet">Sugar Beet</option>
                            <option value="Sugarcane">Sugarcane</option>
                            <option value="Cotton">Cotton</option>
                            <option value="Sorghum">Soeghum</option>
                            <option value="Grapes">Grapes</option>
                            <option value="Olives">Olives</option>
                            <option value="Fallow">Fallow</option>
                        </select>
                    </label>
                </span>
                <span className="formField">
                    <label htmlFor="plowed">Plowed</label>
                    <input type="checkbox" id="plowed" name="plowed" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="cultivated">Cultivated</label>
                    <input type="checkbox" id="cultivated" name="cultivated" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="limed">Limed</label>
                    <input type="checkbox" id="limed" name="limed" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="fertilized">Fertilized</label>
                    <input type="checkbox" id="fertilized" name="fertilized" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="weeded">Weeded</label>
                    <input type="checkbox" id="weeded" name="herbicide" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="mulched">Mulched</label>
                    <input type="checkbox" id="mulched" name="mulched" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="rolled">Rolled</label>
                    <input type="checkbox" id="rolled" name="rolled" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="yieldPotential">Yield Potential</label>
                    <input type="number" id="yieldPotential" name="yieldPotential" onChange={handleChange} />
                </span>
                <button type="submit">Add Field</button>
            </form>
        </div>
    );
}