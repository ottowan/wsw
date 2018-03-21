/**
 * Route.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {
  connection: 'wswMysqlServer',
  tableName: 'route',
  attributes: {
    id: {
      type: 'int',
      unique: true,
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true
    },
    start_name: {
      type: 'string',
      columnName: 'start_name'
    },
    end_name: {
      type: 'string',
      columnName: 'end_name'
    },
    start_lat: {
      type: 'float',
      columnName: 'start_lat'
    },
    start_long: {
      type: 'float',
      columnName: 'start_long'
    },
    end_lat: {
      type: 'float',
      columnName: 'end_lat'
    },
    end_long: {
      type: 'float',
      columnName: 'end_long'
    },
    routename: {
      model: 'routename'
    },
    partner: {
      model: 'partner'
    },
  }
};
