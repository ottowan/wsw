/**
 * Tambon.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'wswMysqlServer',
  tableName: 'tambon',
  attributes: {
    id: {
      type: 'int',
      unique: true,
      primaryKey: true,
      columnName: 'id',
      autoIncrement: true
    },
    code: {
      type: 'int',
      columnName: 'code'
    },
    name: {
      type: 'string',
      columnName: 'name'
    },
    name_en: {
      type: 'string',
      columnName: 'name_en'
    },
    latitude: {
      type: 'float',
      columnName: 'latitude'
    },
    longitude: {
      type: 'float',
      columnName: 'longitude'
    },
    province: {
      model: 'province'
    },
    district: {
      model: 'district'
    }
  }
};

