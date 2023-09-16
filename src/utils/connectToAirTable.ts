import Airtable from "airtable";

const BASE_ID = "app8r9i9DgtZAtU9l"
const TABLE_ID = "tblLtLvLP6097EDBS"
export const connectToAirTable = () => {
    return new Airtable({apiKey: process.env.REACT_APP_AIRTABLE_TOKEN}).base(BASE_ID).table(TABLE_ID)
}
