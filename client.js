const net = require('net');
const stdin = process.stdin;
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP, 
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected.")
    conn.write("Name: NaN")
  });
  

  conn.on("data", (data) => {
    console.log(data)
  })

  return conn;
};


module.exports = {connect};