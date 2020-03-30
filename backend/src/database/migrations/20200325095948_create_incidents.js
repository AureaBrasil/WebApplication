
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments(); //criar id automaticamente

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable(); //relacionamento com a table ongs pois quero usar o id dela
        
        table.foreign('ong_id').references('id').inTable('ongs'); //cahve estrangeira para a tabela ongs
    });
  };
  
  
  //down tratativa, se der algum problema e quiser desfazer ele apaga a tabela
  exports.down = function(knex) {
    knex.schema.dropTable('incidents');
  };
