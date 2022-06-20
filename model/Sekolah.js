import { Sequelize, DataTypes }  from 'sequelize';
import database from "../database.js";

const Nama = database.define("Sekolah", {
    Nama : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Alamat : {
        type : DataTypes.TEXT,
        allowNull : false
    },
    NPSN : {
        type : DataTypes.BIGINT,
        allowNull : false
    }
}, {freezeTableName : true})


export default Nama