/**
 * RouteName.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  connection: 'wswMysqlServer',
  tableName: 'route_info',
  attributes: {
    id: {
      type: 'int',
      unique: true,
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true
    },
    partner: {
      model: 'partner'
    },
    name: {
      type: 'string',
      columnName: 'name'
    },
    startpoint: {
      type: 'string',
      columnName: 'startpoint'
    },
    stoppoint1: {
      type: 'string',
      columnName: 'stoppoint1'
    },
    stoppoint2: {
      type: 'string',
      columnName: 'stoppoint2'
    },
    stoppoint3: {
      type: 'string',
      columnName: 'stoppoint3'
    },
    stoppoint4: {
      type: 'string',
      columnName: 'stoppoint4'
    },
    stoppoint5: {
      type: 'string',
      columnName: 'stoppoint5'
    },
    stoppoint6: {
      type: 'string',
      columnName: 'stoppoint6'
    },
    endpoint: {
      type: 'string',
      columnName: 'endpoint'
    },

    startpostcode: {
      type: 'int',
      columnName: 'startpostcode'
    },
    postcode1: {
      type: 'int',
      columnName: 'postcode1'
    },
    postcode2: {
      type: 'int',
      columnName: 'postcode2'
    },
    postcode3: {
      type: 'int',
      columnName: 'postcode3'
    },
    postcode4: {
      type: 'int',
      columnName: 'postcode4'
    },
    postcode5: {
      type: 'int',
      columnName: 'postcode5'
    },
    postcode6: {
      type: 'int',
      columnName: 'postcode6'
    },
    endpostcode: {
      type: 'int',
      columnName: 'endpostcode'
    },
  }
};
