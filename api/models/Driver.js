/**
 * Driver.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'wswMysqlServer',
  tableName: 'driver',
  attributes: {
    id: {
      type: 'int',
      unique: true,
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true
    },
    car_license_id: {
      type: 'string',
      columnName: 'car_license_id'
    },
    personal_id: {
      type: 'string',
      columnName: 'personal_id'
    },
    firstname: {
      type: 'string',
      columnName: 'firstname'
    },
    lastname: {
      type: 'string',
      columnName: 'lastname'
    },
    address: {
      type: 'string',
      columnName: 'address'
    },
    tambon: {
      type: 'string',
      columnName: 'tambon'
    },
    district: {
      type: 'string',
      columnName: 'district'
    },
    postcode: {
      type: 'string',
      columnName: 'postcode'
    },
    email: {
      type: 'email',
    },
    mobile: {
      type: 'string',
      columnName: 'mobile'
    },
    province: {
      model: 'province'
    },
    partner: {
      model: 'partner'
    },
    truck: {
      model: 'truck'
    },
  }
};

