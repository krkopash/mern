const axios = require("axios");

const sendOTP = async (phone, otp) => {

  const url =`https://cpaas.messagecentral.com/verification/v3/send?` +
    `countryCode=91&customerId=${process.env.MC_CUSTOMER_ID}` +
    `&flowType=SMS&mobileNumber=${phone}&otp=${otp}`;

  const response = await axios.post(
    url, {}, {
      headers: {authToken: process.env.MC_API_KEY }
    }
  );
  return response.data;
};

module.exports = sendOTP;