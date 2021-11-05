import connection from './database.js';
import { ObjectId } from 'mongodb';


const users = ['Herminia', 'Bertoldo', 'Aniceto'];

const transaction = async ()=> {

    const session = connection.client.startSession();
    await session.startSession();

    try {
       
        users.forEach((user) => {
            const objId = new ObjectId();

            await connection.db.collection('users').insertOne({
                _id: objId,
                nombre: user
            }, {session});
            await connection.db.collection('sesiones').findOneAndUpdate(
                {nombre: user},
                {$set:{userId:objId}},
                {$unset:{nombre:""}},
                {session}
            )
            await connection.db.collection('gustos').findOneAndUpdate(
                {nombre: user},
                {$set: {usuarioId: objId}},
                {$unset:{nombre:""}},
                {session}
            )

        })

        await session.commitTransaction();
        return {"result": "ok"};

    } catch (error) {

        await session.abortTransaction();
        throw error;

    } finally {

        await session.endSession();
        connection.close();

    }
}
transaction().then(console.log)
             .catch(console.error);