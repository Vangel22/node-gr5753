const express = require("express");

const app = express();

app.listen(3000, () => console.log("Server listening at port 3000!"));

// 1. npm init -y
// Go pravi package.json fajlot i izgleda vaka:
// {
//   "name": "domasno",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "type": "commonjs"
// }

// 2. npm install express
// Se dodadavaat:
// 2.1. package-lock.json - lock na verziite na third party instaliranite paketi t.e. express
// 2.2. node_modules - potrebni fajlovi za da funkcionira express

// 3. .gitignore - samiot fajl ni kazuva da ignorirame nesto
// vo samiot fajl napisavme node_modules - toa znaci deka node_modules kade i da se pojavi vo nasiot proekt nema da bide zabelezano kako promena za da se prikaci na github

// 4. Ako go izbriseme node_modules, istiot ke se dodade samo so pisuvanje na npm install.
// Toa znaci deka bidejki postoi ovaa linija vo package.json:
//  "dependencies": {
//      "express": "^5.2.1"
//   }
// Ne morame da naglasime npm install express
