import {
  connect,
  connection,
  model,
  CompileModelOptions,
  ConnectOptions,
  Document,
  Schema,
  SchemaType,
} from 'mongoose';

export const database = connection;

export async function connectDatabase(uri: string, options?: ConnectOptions) {
  await connect(uri, options);
}

export function createModelSchema<S extends Document>(
  name: string,
  schema: SchemaType<S>,
  collection?: string,
  options?: CompileModelOptions,
) {
  return model<S>(name, new Schema<S>(schema), collection, options);
}
