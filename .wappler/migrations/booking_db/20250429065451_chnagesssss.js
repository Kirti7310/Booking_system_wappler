
exports.up = function (knex) {
  return knex.schema
    .createTable('booking_limits', async function (table) {
      table.increments('id');
      table.decimal('max_hrs_per_day').defaultTo('4.00');
      table.decimal('max_hrs_per_week').defaultTo('4.00');
    })


    .createTable('users', async function (table) {
      table.increments('user_id');
      table.string('email', 30);
      table.string('username', 30);
      table.string('password', 255);
      table.integer('role_id').unsigned();
      table.foreign('role_id').references('id').inTable('roles').onUpdate('CASCADE').onDelete('CASCADE');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.string('status', 20).defaultTo('active');
      table.string('gender', 10);
      table.string('reset_token', 255);
      table.datetime('reset_token_exp');
    })
    .createTable('roles', async function (table) {
      table.increments('role_id');
      table.string('roles', 30);
    })
    .createTable('time_slot', async function (table) {
      table.increments('id');
      table.string('start_time', 10);
      table.string('end_time', 10);
      table.integer('hour');
    })
    .createTable('meeting_rooms', async function (table) {
      table.increments('id');
      table.string('mroom_name', 40);
      table.string('mdesc', 50);
    })
    .createTable('booking_users', async function (table) {
      table.increments('booking_id');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE');
      table.date('date');
      table.integer('time_id').unsigned();
      table.foreign('time_id').references('id').inTable('time_slot').onUpdate('CASCADE').onDelete('CASCADE');
      table.enum('status', ["pending", "approved", "rejected"]);
      table.integer('meet_id').unsigned();
      table.foreign('meet_id').references('id').inTable('meeting_rooms').onUpdate('CASCADE').onDelete('CASCADE');
      table.string('book_com', 100);
    })


};

exports.down = function (knex) {
  return knex.schema
    .dropTable('booking_limits')
    .dropTable('booking_users')
    .dropTable('meeting_rooms')
    .dropTable('time_slot')
    .dropTable('roles')
    .dropTable('users')
};
