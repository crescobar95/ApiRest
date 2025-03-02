'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      Usuario.hasMany(models.Post, { foreignKey: 'usuario_id', as: "post" });
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    numero_contacto: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};
export {Usuario};