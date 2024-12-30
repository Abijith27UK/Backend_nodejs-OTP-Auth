// const { User } = require("../models/user");
// const jwt = require("jsonwebtoken");
// const fetch = require('node-fetch');

// require('dotenv').config();

//const apiKey = process.env.API_KEY;

// let OTP , user;
// const signUp = async (req, res) => {
//   try {
//     console.log(req.body);
//     const { number } = req.body;
//     const existingUser = await User.findOne({ number });
//     if (existingUser) {
//       return res.status(400).json({ msg: "User with the same number already exists" });
//     }
//     user = new User({ number });
//     console.log("Created user with:", { number });
//     // Generate OTP
//     const otpUrl = `https://2factor.in/API/V1/${apiKey}/SMS/+91${number}/AUTOGEN`;
//     const response = await fetch(otpUrl);
//     const data = await response.json();
//     console.log(data);

//     if (data.Status === "Success") {
//       console.log("OTP sent successfully:", data.Details);
//     //   OTP = data.Details; // Store session ID returned by 2Factor
//       return res.status(200).json({ msg: "OTP sent successfully" });
//     } else {
//       throw new Error("Failed to send OTP via 2Factor API");
//     }
//   } catch (err) {
//     console.error("SignUp Error:", err.message);
//     res.status(500).json({ error: err.message });
//   }
// };



// module.exports = signUp;



