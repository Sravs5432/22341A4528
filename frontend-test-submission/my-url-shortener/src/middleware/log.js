// src/middleware/log.js
import axios from "axios";

const Log = async (stack, level, pkg, message, token) => {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Log sent:", response.data);
  } catch (error) {
    console.error("Failed to send log:", error.response?.data || error.message);
  }
};

export default Log;