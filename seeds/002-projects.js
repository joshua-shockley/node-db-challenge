exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projects').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('projects').insert([
                { projectName: 'wash car', projectDescription: 'gotta clean that thing', projectCompleted: false },
                { projectName: 'clean house', projectDescription: 'it is just as dirty as the car', projectCompleted: false },
                { projectName: 'mount tv in living room', projectDescription: 'i want that thing looking like its floating', projectCompleted: false }
            ]);
        });
};