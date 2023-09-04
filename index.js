// Import required libraries
require("dotenv").config();
const express = require("express");
const { Web3 } = require("web3");
const rateLimit = require("express-rate-limit"); // Import the rate-limiting library

// Initialize express and web3
const app = express();
const web3 = new Web3(
  new Web3.providers.HttpProvider(process.env.ETHEREUM_RPC_URL)
);

// Configure rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Apply rate limiting to the API endpoint
app.use("/getBalance/", limiter);

// API endpoint to get Ethereum balance
app.get("/getBalance/:address", async (req, res) => {
  const startTime = Date.now(); // Capture start time

  const { address } = req.params;

  try {
    console.log("Checking balance...");
    const balanceWei = await web3.eth.getBalance(address);
    const balanceEther = web3.utils.fromWei(balanceWei, "ether");
    console.log(`Address: ${address} Balance: ${balanceEther}`);

    const endTime = Date.now(); // Capture end time
    const elapsedTime = endTime - startTime; // Calculate elapsed time

    console.log(`Execution time: ${elapsedTime} ms`); // Log elapsed time

    res.json({
      address: address,
      balance: balanceEther,
      unit: "ether",
      executionTime: `${elapsedTime} ms`,
    });
  } catch (error) {
    res.status(400).json({ error: "Invalid address" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
