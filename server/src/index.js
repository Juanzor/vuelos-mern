import app from './app.js';
import { sequelize } from './database/database.js';

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(3000, () => {
    console.log('Servidor corriendo');
});
