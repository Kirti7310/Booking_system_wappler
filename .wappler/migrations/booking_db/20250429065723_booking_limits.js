
exports.up = function(knex) {
  return knex.schema
    .createTable('booking_limits', async function (table) {
      table.increments('id');
      table.decimal('max_hrs_per_day').defaultTo('4.00');
      table.decimal('max_hrs_per_week').defaultTo('4.00');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('booking_limits')
};
