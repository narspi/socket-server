const db = require("./db");

async function asyncFunction() {
    try {
        const first_name = "Johnny";

        // Генерация уникального идентификатора для пользователя
        const userId = 1;

        // Insert query with parameter placeholders 
        const insertQuery = "INSERT INTO user (name) VALUES ('valera')";

        // Insert new user record using pool.query function
        const result = await db.pool.query(insertQuery);
        
        // // Print results
        // console.log(`Пользователь (id=${result.insertId}) добавлен.`);
    } catch (err) {
        // Print errors
        console.log(err);
    } finally {
		db.pool.end();
	}
}

asyncFunction();