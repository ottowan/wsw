/**
 * Partner.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
  connection: 'wswMysqlServer',
  tableName: 'partner',
  attributes: {
    id: {
      type: 'int',
      unique: true,
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true
    },
    license_id: {
      type: 'string',
      columnName: 'license_id'
    },
    vat_id: {
      type: 'string',
      columnName: 'vat_id'
    },
    company_name: {
      type: 'string',
      columnName: 'company_name'
    },
    fisrtname: {
      type: 'string',
      columnName: 'fisrtname'
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
    username: {
      type: 'string',
      columnName: 'username'
    },
    password: {
      type: 'string',
      columnName: 'password'
    }
  }
};
