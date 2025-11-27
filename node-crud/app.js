const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

app.use("/users", userRoutes);
app.use("/products", productRoutes);

// Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
