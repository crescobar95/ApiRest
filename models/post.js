'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
    }
  }
  Post.init({
    nombre_producto: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
    usuario_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
    tableName: 'post',
    underscored: true,  // Le indica a Sequelize que use el estilo con guiones bajos
createdAt: "createdat", // Mapea la columna "createdat" en la base de datos
updatedAt: "updatedat", // Especifica el nombre de la tabla en la base de datos
  });
  return Post;
};  
