import axios from "axios";

export const sendEmail = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(
        `https://thriving-bavarois-8c8553.netlify.app`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          data
        }
      );
      resolve({ status: 200, res });
    } catch (err) {
      resolve({ status: 400, err });
    }
  });
};

export const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};
