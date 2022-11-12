const { INTEGER } = require("sequelize");
const {Model , DataTypes} = require("sequelize")
const sequelize = require("../database/connection") ;


class exposant extends Model{}


exposant.init({
    id :{
        type: DataTypes.INTEGER ,
        primaryKey : true ,
        autoIncrement : true ,
    },
    nom: {
        type: DataTypes.STRING,
        allowNull : false
    },
    email : {
        type :DataTypes.STRING,
        allowNull : false ,
        unique: "email" ,
        validate : {
            isEmail : true ,

        }
    },
    telephone : {
        type :DataTypes.STRING,
        allowNull : false,
        unique: "phoneNumber",

    },
    entreprise: {
        type: DataTypes.STRING,
        allowNull : false
    },
    

}, {
    sequelize,
    modelName : "exposant"
})



module.exports = exposant