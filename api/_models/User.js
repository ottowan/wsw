/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'lawfinderMysqlServer',
  tableName: 'user',
  attributes: {
    id: {
      type: 'int',
      unique: true,
      primaryKey: true,
      autoIncrement: true,
      columnName: 'id'
    },
    email: {
      type: 'string',
      columnName: 'email'
    },
    name: {
      type: 'string',
      columnName: 'name'
    },
    password: {
      type: 'string',
      columnName: 'password'
    }
  }
};

