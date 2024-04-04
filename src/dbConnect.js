const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.MONGODB_URI);



async function connect() {
    try {
        await client.connect();
        console.log('Connected to the database');
    } catch (error) {
        console.error('Error connecting to the database', error);
    }
}

async function getSystemConfig(filter={}) {
    const result = await client.db().collection('dev_system_config')
        .find({
            $or:[
                {
                    name:"Tapan"
                },
                {
                    name:"localhost"
                }
            ]
        }).project({ auth: 0 }).toArray();
    return result;
}

async function createSystemConfig(data) {
    const result = await client.db().collection('dev_system_config')
        .insertOne(data);
    return result;
}

// find
// findOne
// insertOne
// insertMany
// updateOne
// updateMany
// deleteOne
// deleteMany
// aggregate
// count
// disntinct


module.exports = { connect, getSystemConfig, createSystemConfig };