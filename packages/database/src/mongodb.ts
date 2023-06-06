import { MongoClient, MongoClientOptions, ServerApiVersion } from 'mongodb';

export const defaultMongoClientOptions: MongoClientOptions = {
  serverApi: {
    deprecationErrors: true,
    strict: true,
    version: ServerApiVersion.v1,
  },
};

export function createMongoClient(
  url: string,
  options = defaultMongoClientOptions,
) {
  return new MongoClient(url, options);
}
