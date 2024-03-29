const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo para GENRE
 // pedirle a sequelize que defina un modelo
  sequelize.define('genre', {
      name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{timestamps: true, // el timestamps es para que no se cree la columna createdAt y updatedAt
    createdAt: 'creado', // esto es para que me cree la columna creado
    updatedAt: false // esto es para que no me cree la columna updatedAt
});
};
