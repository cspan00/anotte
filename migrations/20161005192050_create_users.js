
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(t){
    t.string('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
