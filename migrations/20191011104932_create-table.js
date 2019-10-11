exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
            tbl.increments();
            tbl.string('projectName', 128)
                .notNullable();
            tbl.text('projectDescription');
            tbl.boolean('projectCompleted');

        })
        .createTable('tasks', tbl => {
            tbl.increments('taskId');
            tbl.integer('step_number', 20).notNullable();
            tbl.string('taskDescription', 255).notNullable();
            tbl.text('notes');
            tbl.boolean('taskCompleted');
            tbl.integer('projects_id', 20)
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('schematics', tbl => {
            tbl.increments('schematicsId');
            tbl.integer('projects_id', 20)
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.string('resource_amount', 128);
            tbl.integer('resource_id', 20)
                .notNullable()
                .unsigned()
                .references('id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('resourceName', 128)
                .notNullable();
            tbl.text('resourceDescription');
        })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources')
        .dropTableIfExists('schematics')
        .dropTableIfExists('tasks')
        .dropTableIfExists('projects');
};