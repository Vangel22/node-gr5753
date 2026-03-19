const { read, write } = require("../read-write");

// Create Read Update Delete
// POST GET PUT DELETE -> HTTP metodi

const getAllStudents = async (req, res) => {
  const students = await read();

  return res.status(200).send(students);
};

const getSingleStudent = async (req, res) => {
  const students = await read();
  // map, filter, sort, reduce, every, some

  const foundStudent = students.find(
    (student, index) => index === Number(req.params.studentId),
  );

  res.status(200).send(foundStudent);
};

const addStudent = async (req, res) => {
  // req.body
  const students = await read();
  students.push(req.body);
  await write(students);

  return res.status(200).send("New student added!");
};

const deleteStudent = async (req, res) => {
  // req.params.studentIndex -> String
  let students = await read();
  const studentIndex = Number(req.params.studentIndex);
  // studentIndex = "1" -> 1

  // index e brojka, a req.params.studentIndex e String
  students = students.filter((student, index) => index !== studentIndex);
  await write(students);

  return res
    .status(200)
    .send(`Student with index - ${studentIndex} deleted successfully!`);
};

const editStudent = async (req, res) => {
  const studentIndex = Number(req.params.studentIndex);
  const studentData = req.body;

  let students = await read();
  students = students.map((student, index) => {
    if (index === studentIndex) {
      return {
        ...student,
        ...studentData,
      };
    }
    return student;
  });

  await write(students);

  return res
    .status(200)
    .send(`Student with index - ${studentIndex} has been edited!`);
};

module.exports = {
  getAllStudents,
  getSingleStudent,
  addStudent,
  deleteStudent,
  editStudent,
};
