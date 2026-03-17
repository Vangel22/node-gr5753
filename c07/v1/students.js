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

// deleteStudent(1)
const deleteStudent = async (studentIndex) => {
  let students = await read();
  //students = [
  //     { ime: "Vangel", prezime: "Hristov", godina: 1999 },
  //     { ime: "Pero", prezime: "Perov", godina: 1987 },
  //   ];
  students = students.filter((student, index) => index !== studentIndex);
  // students = students.filter((_, index) => index !== studentIndex); // bidejki ne se koristi student
  // Prva iteracija
  //  0 !== 1 -> true -> zacuvaj go ovoj student t.e Vangel
  // Vtora iteracija
  // 1 !== 1 -> false -> otfrli go ovoj student t.e Pero
  await write(students);
};

// editStudent(1, { godina: 2000, univerzitet: "FINKI" })
const editStudent = async (studentIndex, studentData) => {
  let students = await read();
  // students = students.map((student, index) => student.ime);
  // [{ ime: "Vangel" }, { ime: "Pero" }];
  // students = students.map((student, index) => {
  //   return student.ime;
  // });
  // [undefined, undefined];

  //students = [
  // { ime: "Vangel", prezime: "Hristov", godina: 1999 },
  // { ime: "Pero", prezime: "Perov", godina: 1987 },
  //   ];

  students = students.map((student, index) => {
    // za toj student koj sakame da go azurirame
    if (index === studentIndex) {
      // Prva iteracija
      //  0 === 1 -> false -> skokni go Vangel
      // Vtora iteracija
      // 1 === 1 -> true -> izmeni gi podatocite za Pero

      // promeni gi podatocite
      return {
        ...student,
        // isto so ...student
        // ime: student.ime,
        // prezime: student.prezime,
        // godina: student.godina // 1987
        ...studentData,
        // godina: studentData.godina // 2000
        // univerzitet: studentData.univerzitet // FINKI, ako ne postoi se dodava kako novo pole
      };
    }
    return student;
  });

  await write(students);
};

module.exports = {
  getStudents,
  addStudent,
  deleteStudent,
  editStudent,
};
