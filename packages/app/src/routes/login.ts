interface User {
  email: string;
  password: string;
}

function fakeLoginUser({ email, password }: User) {
  if (email !== 'test' && password !== '1234')
    throw Error('Invalid credentials');

  return { token: 'secret-user-token' };
}

export async function action({ request }: { request: Request }) {
  const { email, password } = Object.fromEntries(await request.formData());

  const data = fakeLoginUser({ email, password } as User);

  return data;
}
