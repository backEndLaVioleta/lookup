

db.usuarios.update(
{nombre:{
    $ref: "nombre_usuario",
    $id: ObjectId("6185128c2516e0a76c54b0eb"),
    $db: "usuarios"}},
{$set: {nombre:{
    $ref: "nombre_usuario",
    $id: ObjectId("6185128c2516e0a76c54b0eb"),
    $db: "usuarios",
    nombre: "Bertoldo"
    }}}
);
    
db.getCollection('usuarios').find({})