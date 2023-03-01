import * as React from 'react';
import {
  Form,
  Navigate,
  useActionData,
  // useLocation,
  useNavigation,
} from 'react-router-dom';

export default function Login() {
  const data = useActionData();
  // const location = useLocation();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === 'submitting';

  // check if user token already exists
  // data && data.token
  return data ? (
    // if location.state.from was home, send to dashboard too
    // else send to from
    <Navigate replace to={'dashboard'} />
  ) : (
    <Form action="/login" method="post">
      <input placeholder="Email" name="email" type="email" />
      <input placeholder="Password" name="password" type="password" />
      <button disabled={isSubmitting}>
        {isSubmitting ? 'Logging in...' : 'Log in'}
      </button>
    </Form>
  );
}
