import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_GET_PERMISSIONS } from 'react-admin';

const authLogin = (params) => {
  const { username, password } = params;
  const options = {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: new Headers({ 'Content-Type': 'application/json' }),
  };
  const request = new Request('http://localhost:1715/authenticate', options);
  return fetch(request)
    .then((response) => {
      if (response.status === 401) {
        throw new Error('username or password error.');
      }
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(({ token, roles }) => {
      localStorage.setItem('token', token);
      localStorage.setItem('roles', JSON.stringify(roles));
    });
};

const authLogout = () => {
  localStorage.removeItem('token');
  return Promise.resolve();
};

const authError = (params) => {
  if (params.status === 401) {
    localStorage.removeItem('token');
    return Promise.reject();
  }
  return Promise.resolve();
};

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    return authLogin(params);
  }
  if (type === AUTH_LOGOUT) {
    return authLogout();
  }
  if (type === AUTH_ERROR) {
    return authError(params);
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const roles = localStorage.getItem('roles');
    return roles ? Promise.resolve(JSON.parse(roles)) : Promise.reject();
  }
  return Promise.resolve();
};
