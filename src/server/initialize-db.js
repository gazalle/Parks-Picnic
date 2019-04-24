import { appEntities } from './appEntities';
import { connectDB } from './connect-db'

async function initializeDB(){
    let db = await connectDB();
    for (let collectionName in appEntities) {
        let collection = db.collection(collectionName);
        await collection.insertMany(appEntities[collectionName]);
    }
    
}

initializeDB();