// // console.log("hello");


// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     if (req.url == "/") {
//         res.end("Hello from the home side ");
//     } else if (req.url == "/aboutus") {
//         res.end("Hello from aboutUS");
//     } else if (req.url == "/userapis") {
//         fs.readFile("userapis.json", "utf8", (err, data) => {
//           if (err) {
//             console.error("Error reading users.json:", err);
//             res.statusCode = 500;
//             res.end("Internal Server Error");
//           } else {
//             console.log(data);
//             res.setHeader("Content-Type", "application/json");
//             res.end(data);
//           }
//         });
//       } else {
//         res.statusCode = 404;
//         res.end("Not Found");
//       }
// }
// );
// server.listen(8000, "127.0.0.1", () => {
//     console.log("listenting to the port no. 8000 ")
// });

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hello from the home side");
  } else if (req.url == "/aboutus") {
    res.end("Hello from aboutUS");
  } else if (req.url == "/users") {
    fs.readFile("users.json", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading users.json:", err);
        res.statusCode = 500;
        res.end("Internal Server Error");
      } else {
        console.log(data);
        res.setHeader("Content-Type", "application/json");
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening on port 8000");
});
