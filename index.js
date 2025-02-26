// const express = require("express");
// const { sum, multiply } = require("./math");

// const app = express();
// const PORT = 8080;

// app.get("/sum", (req, res) => {
//     const a = parseFloat(req.query.a);
//     const b = parseFloat(req.query.b);
//     if (isNaN(a) || isNaN(b)) {
//         return res.status(400).json({ error: "Invalid numbers" });
//     }
//     res.json({ result: sum(a, b) });
// });

// app.get("/multiply", (req, res) => {
//     const a = parseFloat(req.query.a);
//     const b = parseFloat(req.query.b);
//     if (isNaN(a) || isNaN(b)) {
//         return res.status(400).json({ error: "Invalid numbers" });
//     }
//     res.json({ result: multiply(a, b) });
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// module.exports = app; 
