exports.seed = function(knex, Promise) {
    return knex("comment").del()
        .then(function () {
            return Promise.all([
                    knex("comment").insert({
                        message: "Great site"
                    }),
                    knex("comment").insert({
                        message: "Bad site"
                    }),
                    knex("comment").insert({
                        message: "Ok site"
                    })
            ]);
        });
};
