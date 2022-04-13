let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === "a") {
      connection.write("Move: left");
      console.log("a")
    }
  
    if (key === "s") {
      connection.write("Move: down");
      console.log("s")
    }
  
    if (key === "d") {
      connection.write("Move: right");
      console.log("d")
    }
  
    if (key === "w") {
      connection.write("Move: up");
      console.log("w")
    }
    
    if (key === "h"){
      connection.write("Say: noo");
    }

  };
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};