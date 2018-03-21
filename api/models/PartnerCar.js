/**
 * PartnerCar.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'wswMysqlServer',
  tableName: 'partnercar',
  attributes: {
    partner: {
      model: 'partner'
    },
    cartype: {
      model: 'cartype'
    },
    province: {
      model: 'province'
    },
    name: {
      type: 'string',
      columnName: 'name'
    },
    plate_no: {
      type: 'string',
      columnName: 'plate_no'
    },
  }
};

