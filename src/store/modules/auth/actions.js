export function signInRequest(username, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { username, password },
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token },
  };
}

export function signUpRequest(
  username,
  email,
  name,
  phone,
  password,
  password_confirmation
) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { username, email, name, phone, password, password_confirmation },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
