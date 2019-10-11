exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('schematics').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('schematics').insert([
                { projects_id: 1, resource_amount: 3, resource_id: 5 },
                { projects_id: 1, resource_amount: 1, resource_id: 8 },
                { projects_id: 1, resource_amount: 1, resource_id: 10 },
                { projects_id: 1, resource_amount: 1, resource_id: 11 },
                { projects_id: 1, resource_amount: 1, resource_id: 12 },
                { projects_id: 2, resource_amount: 2, resource_id: 6 },
                { projects_id: 2, resource_amount: 1, resource_id: 7 },
                { projects_id: 2, resource_amount: 1, resource_id: 8 },
                { projects_id: 3, resource_amount: 1, resource_id: 1 },
                { projects_id: 3, resource_amount: 4, resource_id: 2 },
                { projects_id: 3, resource_amount: 1, resource_id: 3 },
                { projects_id: 3, resource_amount: 1, resource_id: 4 },
                { projects_id: 3, resource_amount: 1, resource_id: 9 },
            ]);
        });
};