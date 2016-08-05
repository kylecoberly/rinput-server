exports.up = function(knex, Promise) {
    return knex.schema.createTable("comment", function(comment){
        comment.increments();
        comment.string("message");
    });  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("comment"); 
};
