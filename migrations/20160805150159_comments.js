exports.up = function(knex, Promise) {
    return knex.schema.createTable("site", function(site){
        site.increments();
        site.string("url");
    }).then(function(){
        return knex.schema.createTable("comment", function(comment){
            comment.increments();
            comment.string("message");
            comment.integer("site").references("id").inTable("site");
        });
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("comment")
    .then(function(){
        return knex.schema.dropTableIfExists("site");
    });
};
