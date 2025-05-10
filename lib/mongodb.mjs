import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); // .env.local 파일에서 환경 변수 로드

import mongodb from 'mongodb';
const { MongoClient } = mongodb;

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
    console.error('MONGODB_URI is not set in the environment variables.');
    console.error('Current environment variables:', process.env);
    throw new Error('Please add your Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
    // 개발 환경에서는 전역 변수로 MongoClient를 캐시하여, 핫 리로딩 시에도 동일한 클라이언트를 사용
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // 프로덕션 환경에서는 매번 새로운 MongoClient를 생성
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;
