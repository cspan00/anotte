
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(t){
    t.increments('id');
    t.string('name');
    t.string('description');
    t.string('ticket_link');
    t.string('event_photo')
    t.string('date');
    t.bool('past')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('events')


};
