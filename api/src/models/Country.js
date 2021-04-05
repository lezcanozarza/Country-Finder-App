const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
  	id: {
  	  	type: DataTypes.STRING,
        allowNull: false,
        unique: true,
  	  	primaryKey: true
  	},
    nombre: {
      	type: DataTypes.STRING,
      	allowNull: false
    },
    bandera:{
        type: DataTypes.STRING,
        allowNull: false
    },
    continente:{
    	type: DataTypes.STRING,
    	allowNull: false
    },
    capital:{
    	type: DataTypes.STRING,
    	allowNull: false
    },
    subregion:{
    	type: DataTypes.STRING
    },
    area:{
    	type: DataTypes.STRING
    },
    poblacion:{
    	type: DataTypes.STRING
    }
  });
  sequelize.define('actividad', {
    nombre:{
      type: DataTypes.STRING
    },
    dificultad:{
      type: DataTypes.ENUM("1","2","3","4","5")
    },
    duracion:{
      type: DataTypes.STRING
    },
    temporada:{
      type: DataTypes.ENUM("invierno","verano","primavera","otoño")
    }
    
  });
};

