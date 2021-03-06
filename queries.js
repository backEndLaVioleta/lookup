

db.sesiones.aggregate([
{$group: {_id:{nombre:"$nombre"}, total:{$sum:"$distKm"}}},
{$sort:{total:1}},
{$limit: 1},
{$lookup:{
    from: 'gustos',
    localField: '_id.nombre',
    foreignField: 'nombre',
    as: 'susGustos'
}},
{$project:{
    _id:0,
    nombre: "$_id.nombre",
    total: 1,
    aficiones: "$susGustos.aficiones"
}},
{$unwind: "$aficiones"}

])

db.users.insertMany();