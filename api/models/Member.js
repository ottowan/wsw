/**
 * Member.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  connection: 'wswMysqlServer',
  tableName: 'member',
  attributes: {
    id: {
      type: 'int',
      unique: true,
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true
    },
    personid: {
      type: 'int',
      columnName: 'personid'
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
    province: {
      type: 'string',
      columnName: 'province'
    },
    postcode: {
      type: 'string',
      columnName: 'postcode'
    },
    email: {
      type: 'email',
      required: true,//Email field will be required for insert or update  
      unique: true //Insert or update will crash if you try to insert duplicate email
    },
    telephone: {
      type: 'string',
      columnName: 'telephone'
    },
    mobile: {
      type: 'string',
      columnName: 'mobile'
    },
    password: {
      type: 'string',
      columnName: 'password'
    }
  }
};
