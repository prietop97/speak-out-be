
exports.up = function (knex) {
    return knex.schema
        .createTable("progress_report", table => {
            table.increments();
            table
                .integer("student_id")
                .unsigned()
                .references("id")
                .inTable("student")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .index();
            table
                .integer("teacher_id")
                .unsigned()
                .references("id")
                .inTable("staff")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .index();
            table
                .integer("course_id")
                .unsigned()
                .references("id")
                .inTable("course")
                .onDelete("CASCADE")
                .onUpdate("CASCADE")
                .index();
            table.date('report_date');
            table.integer('speaking_fluency');
            table.integer('speaking_accuracy');
            table.integer('vocabulary');
            table.integer('pronunciation');
            table.integer('grammar');
            table.integer('listening');
            table.integer('writing');
            table.integer('reading');
            table.integer('interest');
            table.integer('participation');
            table.integer('submitting_homework');
            table.integer('homework_effort');
            table.integer('overall');
            table.text('notes');
            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("progress_report");
};
