const { read, write } = require("./read-write");

// CRUD

// Read
const getStudents = () => {
  return read();
};

// Create
const addStudent = async (studentData) => {
  let students = await read();
  //students = [
  //     { ime: "Vangel", prezime: "Hristov", godina: 1999 },
  //     { ime: "Pero", prezime: "Perov", godina: 1987 },
  //   ];
  students.push(studentData);

  //   students = [
  //     { ime: "Vangel", prezime: "Hristov", godina: 1999 },
  //     { ime: "Pero", prezime: "Perov", godina: 1987 },
  //.    { ime: "Test", prezime: "test", godina: 2000 }
  //   ];

  await write(students);
};

module.exports = {
  getStudents,
  addStudent,
};
