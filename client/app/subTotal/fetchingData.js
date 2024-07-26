import axios from "axios";

import "dotenv/config";

const data = async () => {
  const data = await axios.get(`${process.env.MAIN_URL}subTottal`);
};

export default data;
