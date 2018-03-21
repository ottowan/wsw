/**
 * Person.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

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
      pid: {
        type: 'int',
        columnName: 'pid'
      },
      titlename: {
        type: 'string',
        columnName: 'titlename'
      },
      firstname: {
        type: 'string',
        columnName: 'firstname'
      },
      lastname: {
        type: 'string',
        columnName: 'lastname'
      },
      mobile: {
        type: 'string',
        columnName: 'mobile'
      },
      telephone: {
        type: 'string',
        columnName: 'telephone'
      },
      birthdate: {
        type: 'string',
        columnName: 'birthdate'
      },
      house_no: {
        type: 'string',
        columnName: 'house_no'
      },
      moo_no: {
        type: 'string',
        columnName: 'moo_no'
      },
      village: {
        type: 'string',
        columnName: 'village'
      },
      road: {
        type: 'string',
        columnName: 'road'
      },
      alley: {
        type: 'string',
        columnName: 'alley'
      },
      subdistrict: {
        type: 'string',
        columnName: 'subdistrict'
      },
      district: {
        type: 'string',
        columnName: 'district'
      },
      province: {
        type: 'string',
        columnName: 'province'
      },
      postcode: {
        type: 'string',
        columnName: 'postcode'
      },
      user: {
        model: 'user'
      },
    }
  }
};
