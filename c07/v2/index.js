const express = require("express");

const {
  getAllStudents,
  addStudent,
  editStudent,
  deleteStudent,
  getSingleStudent,
} = require("./handler/students");

const app = express();
// express() vrakja:
// return {
//     get: () => {}
//     post: () => {}
// }

// middleware - presretnuvac
app.use(express.json()); // ke ni ovozmozi req.body da bide od tip JSON
// ako go nemate ovoj del, vo data.json koga ke dodadete student ke vi izleze null podatok:

// [
//   { "ime": "Vangel", "prezime": "Hristov", "godina": 1999 },
//   { "ime": "Pero", "prezime": "Perov", "godina": 2005, "univerzitet": "FINKI" }
//    null
// ]

// if(url.pathname === "/students" && req.method === "GET"){}
app.get("/students", getAllStudents); // localhost:3000/students preku url
app.get("/student/:studentId", getSingleStudent);
app.post("/students", addStudent);
app.delete("/students/:studentIndex", deleteStudent);
app.put("/students/:studentIndex", editStudent);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}!`);
});
