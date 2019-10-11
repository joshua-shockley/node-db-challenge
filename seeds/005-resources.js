exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').truncate()
        .then(function() {
            // Inserts seed entries
            return knex('resources').insert([
                { resourceName: 'power drill', resourceDescription: 'battery powered is better but plugin will work just fine' },
                { resourceName: 'decking srews 3in', resourceDescription: 'using decking screws just prevents buying crap screws' },
                { resourceName: 'level', resourceDescription: 'they all work the same so spend what you like' },
                { resourceName: 'stud finder', resourceDescription: 'whatever brand you like' },
                { resourceName: 'shop rags', resourceDescription: 'ones you can wash are cheaper over time' },
                { resourceName: 'kitchen rags', resourceDescription: 'ones you can wash are cheaper over time' },
                { resourceName: 'multipurpose cleaner', resourceDescription: '' },
                { resourceName: 'vaccum', resourceDescription: 'whatever kind you like that has a extenable nosel' },
                { resourceName: 'pencil', resourceDescription: 'any num2 will work' },
                { resourceName: 'bucket', resourceDescription: 'does it hold soapy water? then its a bucket' },
                { resourceName: 'car soap', resourceDescription: 'can make your own mix but this is just easier to buy' },
                { resourceName: 'trash bag/walmart sack', resourceDescription: 'thow away' },
                { resourceName: 'wood glue', resourceDescription: 'elmers has good wood glue' },
                { resourceName: 'nails', resourceDescription: 'you know straight and long with no grooves.' },
                { resourceName: 'hammer', resourceDescription: 'dont go crazy, simple 1.5lbs hammer is fine' },

            ]);
        });
};