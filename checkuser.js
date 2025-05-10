// 여기 터미널에서 사용자 아이디 검색해보는 api입니다

const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' }); // .env.local 파일을 명시적으로 로드

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log('Databases:');
    databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

async function findUser() {
    const uri = process.env.MONGODB_URI; // .env.local 파일에 MongoDB URI가 설정되어 있어야 합니다.

    if (!uri) {
        throw new Error('MongoDB URI is not defined in .env.local');
    }

    console.log('MongoDB URI:', uri); // MongoDB URI를 출력하여 제대로 로드되었는지 확인

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        await listDatabases(client);

        const database = client.db('user_data'); // 'users'는 데이터베이스 이름입니다.
        const users = database.collection('users'); // 사용자 정보가 저장된 컬렉션 이름이 맞는지 확인하세요.

        // 특정 사용자 이름을 가진 사용자가 있는지 확인
        const usernameToCheck = 'hdyounq'; // 확인하고자 하는 사용자 이름
        const user = await users.findOne({ username: usernameToCheck });
        if (user) {
            console.log(`Found user in database: user_data`);
            console.log(user);
        } else {
            console.log('User not found');
        }
    } finally {
        await client.close();
    }
}

findUser().catch(console.error);
