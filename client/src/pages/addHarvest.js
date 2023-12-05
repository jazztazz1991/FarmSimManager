import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import instance from '../hooks/API';


import { useGetUserID } from '../hooks/useGetUserID';

export const AddHarvest = () => {
    const userID = useGetUserID();
    const [cookies, _] = useCookies(["access_token"]);
    const [savedFields, setSavedFields] = useState([]);
    const [acres, setAcres] = useState();

    const [harvest, setHarvest] = useState({
        userOwner: userID,
        harvestYear: 0,
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
        yield: 0,
        yieldPerAcre: 0,
        soldAsCrop: 0,
        soldAsSeed: 0
    })

    const salePrice = {
        seed: 967,
        Soybeans: 1300,
        Sunflowers: 850,
        Wheat: 450,
        Barley: 385,
        Canola: 750,
        Oat: 650,
        Sorghum: 535,
        Corn: 525,
        Cotton: 1425,
        Potatoes: 209,
        SugarBeet: 150,
        Sugarcane: 126,
        Grapes: 733,
        Olives: 726,
        Fallow: 0

    }

    const seedRate = {
        Soybeans: 3.954,
        Sunflowers: 3.422,
        Wheat: 2,
        Barley: 1.854,
        Canola: 3.069,
        Oat: 3.121,
        Sorghum: 4.024,
        Corn: 1.934,
        Cotton: 0,
        grapes: 0,
        olives: 0,
        fallow: 0,
        Potatoes: 0,
        SugarBeet: 0,
        Sugarcane: 0,

    }


    const handleChange = async (event) => {
        const { name, value } = event.target;
        if (name === "fieldNumber") {
            const response = await instance.get(`/midwestHorizon/${value}`, { headers: { authorizations: cookies.access_token } });
            const fieldAcres = response.data.acres;
            setHarvest({ ...harvest, fieldNumber: parseInt(value), acres: parseFloat(fieldAcres) })

        } else {
            setHarvest({ ...harvest, [name]: value });
        }
    }

    const calculateInfo = () => {
        const price = salePrice[harvest.cropType];
        let yieldPerAcre = harvest.yield / harvest.acres;
        let soldAsCrop = (harvest.yield / 1000) * price;
        let soldAsSeed = 0;
        if (harvest.cropType !== "Cotton" && !harvest.cropType !== "Grapes" && !harvest.cropType !== "Olives" && !harvest.cropType !== "Fallow") {
            soldAsSeed = (harvest.yield / 1000) * seedRate[harvest.cropType] * salePrice.seed;
        }
        setHarvest({
            ...harvest,
            yieldPerAcre: yieldPerAcre,
            soldAsCrop: soldAsCrop,
            soldAsSeed: soldAsSeed
        })
        const tempHarvest = {
            userOwner: userID,
            harvestYear: harvest.harvestYear,
            fieldNumber: harvest.fieldNumber,
            acres: harvest.acres,
            cropType: harvest.cropType,
            plowed: harvest.plowed,
            cultivated: harvest.cultivated,
            limed: harvest.limed,
            fertilized: harvest.fertilized,
            herbicide: harvest.herbicide,
            mulched: harvest.mulched,
            rolled: harvest.rolled,
            yield: harvest.yield,
            yieldPerAcre: yieldPerAcre,
            soldAsCrop: soldAsCrop,
            soldAsSeed: soldAsSeed
        }

        return tempHarvest;
    }
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const addHarvest = calculateInfo();
            const response = await instance.post("/harvest/harvests", { userID, addHarvest }, { headers: { authorizations: cookies.access_token } });
            alert("Field Added");
        } catch (err) {
            console.error(err);
        }
    }
    return (
        <div className="addHarvest">
            <h2>Add Harvest</h2>
            <form onSubmit={onSubmit}>
                <span className="formField">
                    <label htmlFor="harvestYear">Year: </label>
                    <input type="number" id="harvestYear" name="harvestYear" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="fieldNumber">Field Number: </label>
                    <input type="number" id="fieldNumber" name="fieldNumber" onChange={handleChange} />
                </span>
                <span className="formField">
                    {/* Acres: {harvest.acres} */}
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
                    <label htmlFor="plowed">Plowed: </label>
                    <input type="checkbox" id="plowed" name="plowed" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="cultivated">Cultivated: </label>
                    <input type="checkbox" id="cultivated" name="cultivated" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="limed">Limed: </label>
                    <input type="checkbox" id="limed" name="limed" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="fertilized">Fertilized: </label>
                    <input type="checkbox" id="fertilized" name="fertilized" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="weeded">Weeded: </label>
                    <input type="checkbox" id="weeded" name="herbicide" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="mulched">Mulched: </label>
                    <input type="checkbox" id="mulched" name="mulched" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="rolled">Rolled: </label>
                    <input type="checkbox" id="rolled" name="rolled" value="true" onChange={handleChange} />
                </span>
                <span className="formField">
                    <label htmlFor="yield">Yield: </label>
                    <input type="number" id="yield" name="yield" onChange={handleChange} />
                </span>
                <button type="submit">Add Field: </button>
            </form>
        </div>
    );
}