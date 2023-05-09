const mysql = require("mysql2");

const Connection = mysql.createConnection({
  host: "localhost",
  user: "dev",
  database: "Educavo",
  password: "dev123",
});

Connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

module.exports = Connection.promise();