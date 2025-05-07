
exports.up = function(knex) {
  return knex.schema
    .createTable('admin_navigation', async function (table) {
      table.increments('nav_id');
      table.string('name', 50);
      table.string('url', 255);
      table.integer('order_id').defaultTo('1');
      table.integer('active').defaultTo('0');
      table.integer('roles_allowed').defaultTo('1');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('admin_navigation')
};
