
exports.up = function(knex, Promise) {
  return knex.schema.createTable('photos', function(t){
    t.increments('id');
    t.string('photo_url');
    t.string('event_id');
    t.string('event_name');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('photos')


};
