/**
 * RouteName.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
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
      no: {
        type: 'int',
        columnName: 'no'
      },
      location: {
        type: 'string',
        columnName: 'location'
      },
      postcode: {
        type: 'int',
        columnName: 'postcode'
      },
      description: {
        type: 'float',
        columnName: 'description'
      },
      lat: {
        type: 'float',
        columnName: 'lat'
      },
      lon: {
        type: 'float',
        columnName: 'lon'
      },
      partner: {
        model: 'partner'
      },
      trip: {
        model: 'trip'
      },
    }
  }
};

