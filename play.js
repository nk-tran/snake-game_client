const net = require("net");
const stdin = process.stdin;
const connect = require(`./client.js`)

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function () {
    if (key === "a") {
      conn.write("Move: left");
    }
  
    if (key === "s") {
      conn.write("Move: down");
    }
  
    if (key === "d") {
      conn.write("Move: right");
    }
  
    if (key === "w") {
      conn.write("Move: up");
    }
  };
  stdin.on("data", handleUserInput);
  return stdin;
};

