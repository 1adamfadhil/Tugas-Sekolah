import { Sequelize } from'sequelize';

const database = new Sequelize('sekolah', 'root', '', {
    host: 'localhost',
    dialect: 'mysql' 
  });


  export default database