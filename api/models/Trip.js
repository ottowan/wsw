/**
 * Route.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {
  connection: 'wswMysqlServer',
  tableName: 'trip',
  attributes: {
    id: {
      type: 'int',
      unique: true,
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true
    },
    rating: {
      type: 'float',
      columnName: 'rating'
    },
    depart_date: {
      type: 'datetime',
      columnName: 'depart_date'
    },
    depart_time: {
      type: 'time',
      columnName: 'depart_time'
    },
    routeinfo: {
      model: 'routeinfo'
    },
    partner: {
      model: 'partner'
    },
    cartype: {
      model: 'cartype'
    },
    driver: {
      model: 'driver'
    },
    truck: {
      model: 'truck'
    }
  }
};




