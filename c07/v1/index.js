const {
  getStudents,
  addStudent,
  editStudent,
  deleteStudent,
} = require("./students");

async function main() {
  // Read
  const studentsBefore = await getStudents();
  console.log(studentsBefore);

  // Create
  // await addStudent({ ime: "John", prezime: "Doe", godina: 1995 });

  // Update
  // const newData = {
  //   godina: 2005,
  //   univerzitet: "FINKI",
  // };

  // await editStudent(1, newData);

  // Delete
  await deleteStudent(2);

  const studentsAfter = await getStudents();
  console.log(studentsAfter);
}

main();
