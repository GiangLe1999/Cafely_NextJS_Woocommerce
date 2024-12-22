import axios from "axios";

const wooClient = axios.create({
  baseURL: process.env.WC_BASE_URL,
  headers: {
    Authorization: `Basic ${Buffer.from(
      `${process.env.WC_CONSUMER_KEY}:${process.env.WC_CONSUMER_SECRET}`
    ).toString("base64")}`,
  },
});

export default wooClient;
