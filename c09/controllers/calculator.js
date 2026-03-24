const fs = require("fs");

// Nasiot server moze da vrati HTML kako odgovor (response)
const getCalculator = async (req, res) => {
  try {
    const calculator = await parseTemplate("calculator-form");
    return res.status(200).send(calculator);
  } catch (err) {
    return res.status(500).send("Internal Server Error!");
  }
  //   res.send("<div><h1>I am heading 1</h1><h2>I am heading 2</h2></div>");
};

const postCalculator = async (req, res) => {
  try {
    const { numberOne, numberTwo, operation } = req.body; // ovie polinja se definirani vo calculator-form.html

    if (numberOne === "" || numberTwo === "") {
      res.status(400).send("Bad request");
    }

    let result = ""; //mora da bide string, bidejki res.send(1) -> brojka ne moze da vrati serverot

    switch (operation) {
      case "sobiranje":
        result = `${Number(numberOne) + Number(numberTwo)}`;
        break;
      case "odzemanje":
        result = `${Number(numberOne) - Number(numberTwo)}`;
        break;
    }

    const output = await parseTemplate("calculator", {
      data: result, // dinamicno, zavisi od brojkite sto ke gi vneseme vo kalkulatorot
      ime: "Semos Education", // staticno, sekogas isto
    });

    return res.status(200).send(output);
  } catch (err) {
    return res.status(500).send("Internal Server Error!");
  }
  //   parseTemplate("calculator", data);
};

const parseTemplate = async (template, data = null) => {
  return new Promise((resolve, reject) => {
    const path = `${__dirname}/../views/${template}.html`;
    fs.readFile(path, "utf-8", (err, content) => {
      // content ili data, sami go pisuvame imeto
      if (err) reject(err);

      if (data) {
        //   data { data: '5', ime: 'Semos' }
        for (const podatok in data) {
          // podatok ke bide data, ime
          // data[podatok] ke bide '30', 'Semos'

          content = content.replace(`{{${podatok}}}`, data[podatok]);
          //   content = content.replace(`{{data}}`, data[podatok]);
          //   content = content.replace(`{{ime}}`, "Semos Education");
          //   content = content.replace(`{{data}}`, data[podatok]); // data[data]
          //   content = content.replace(`{{ime}}`, data[podatok]); // data[ime]
        }
      }

      // if(data) {
      //     content = content.replace('{{data}}', data.data)
      // }

      resolve(content);
    });
  });
};

// 1. ${__dirname} - se naogjame vo /controllers folderot
// 2. ${__dirname}/.. - se vrakjame vo /c09
// 3. ${__dirname}/../views - vleguvame vo views folderot
// 4. ${__dirname}/../views/${template}.html - template e dinamicen parametar koj moze da bide:
// controllers/../views/calculator-form.html
// controllers/../views/calculator.html

module.exports = {
  getCalculator,
  postCalculator,
};
