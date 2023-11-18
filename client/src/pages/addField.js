import { useState } from 'react';

export const AddField = () => {

    const [field, setField] = useState({
        userOwner: 0,
        fieldNumber: 0,
        acres: 0,
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setField({ ...field, [name]: value })
    }

    return (
        <div className="addField">
            <h2>Add Field</h2>
            <form>
                <label htmlFor="fieldNumber">Field Number</label>
                <input type="number" id="fieldNumber" name="fieldNumber" onChange={handleChange} />
                <label htmlFor="acres">Acres</label>
                <input type="number" id="acres" name="acres" onChange={handleChange} />
                <label htmlFor="cropType">
                    Crop Type:
                    <select name="cropType" onChange={handleChange}>
                        <option value="wheat">Wheat</option>
                        <option value="barley">Barley</option>
                        <option value="canola">Canola</option>
                        <option value="oat">Oat</option>
                        <option value="corn">Corn</option>
                        <option value="sunflowers">Sunflowers</option>
                        <option value="soybeans">Soybeans</option>
                        <option value="potatoes">Potatoes</option>
                        <option value="sugarBeet">Sugar Beet</option>
                        <option value="sugarcane">Sugarcane</option>
                        <option value="cotton">Cotton</option>
                        <option value="sorghum">Soeghum</option>
                        <option value="grapes">Grapes</option>
                        <option value="olives">Olives</option>
                        <option value="fallow">Fallow</option>
                    </select>
                </label>
                <label htmlFor="plowed">Plowed</label>
                <input type="checkbox" id="plowed" name="plowed" onChange={handleChange} />
                <label htmlFor="cultivated">Cultivated</label>
                <input type="checkbox" id="cultivated" name="cultivated" onChange={handleChange} />
                <label htmlFor="limed">Limed</label>
                <input type="checkbox" id="limed" name="limed" onChange={handleChange} />
                <label htmlFor="fertilized">Fertilized</label>
                <input type="checkbox" id="fertilized" name="fertilized" onChange={handleChange} />
                <label htmlFor="weeded">Weeded</label>
                <input type="checkbox" id="weeded" name="herbicide" onChange={handleChange} />
                <label htmlFor="mulched">Mulched</label>
                <input type="checkbox" id="mulched" name="mulched" onChange={handleChange} />
                <label htmlFor="rolled">Rolled</label>
                <input type="checkbox" id="rolled" name="rolled" onChange={handleChange} />
                <label htmlFor="perLoam">Percent of Loam</label>
                <input type="number" id="perLoam" name="perLoam" onChange={handleChange} />
                <label htmlFor="perSandyLoam">Percent of Sandy Loam</label>
                <input type="number" id="perSandyLoam" name="perSandyLoam" onChange={handleChange} />
                <label htmlFor="perLoamySand">Percent of Loamy Sand</label>
                <input type="number" id="perLoamySand" name="perLoamySand" onChange={handleChange} />
                <label htmlFor="perSiltyClay">Percent of Silty Clay</label>
                <input type="number" id="perSiltyClay" name="perSiltyClay" onChange={handleChange} />
            </form>
        </div>
    );
}