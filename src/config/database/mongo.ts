import { connect } from 'mongoose';

const dbUrl = process.env.DATABASE_MONGO_URL;

const mongo = async () => {
  const getConnection = await connect(`${dbUrl}`);
  return getConnection
}

mongo().catch(err => console.log(`Err DB: ${err}`));