const db = require("./db");

// async function createTables() {
//   let conn;
//   try {
//     // Acquire a connection from the connection pool
//     conn = await db.pool.getConnection();
//     console.log("Demo database conected.");

//     conn.query(
//       "CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE)"
//     );

//     conn.query(
//       "CREATE TABLE IF NOT EXISTS message (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, content VARCHAR(255), FOREIGN KEY (user_id) REFERENCES user(id))"
//     );
//   } catch (err) {
//     console.log(err);
//   } finally {
//     if (conn) db.pool.end();
//   }
// }

let conn = db.pool
.getConnection()
.then((con)=>{
    const insertQuery = "CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE)";
    return con.query(insertQuery);
})
// .then((con)=>{
//     const insertQuery = "CREATE TABLE IF NOT EXISTS message (id INT AUTO_INCREMENT PRIMARY KEY, user_id INT, content VARCHAR(255), FOREIGN KEY (user_id) REFERENCES user(id))";
//     return con.query(insertQuery);
// })
.catch((err)=>{
    console.log('Error start connect ',err.message)
})

