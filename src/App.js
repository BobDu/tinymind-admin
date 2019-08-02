import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { createBrowserHistory } from 'history';

import authProvider from './authProvider';
import {
  InstanceList, InstanceCreate, InstanceEdit, InstanceShow, InstanceIcon,
} from './resource/instances';

import {
  ExecutionList, ExecutionShow, ExecutionIcon,
} from './resource/executions';

import {
  UserList, UserEdit, UserShow, UserIcon,
} from './resource/users';

import {
  CouponList, CouponShow, CouponIcon,
} from './resource/coupons';

import {
  SettingList, SettingCreate, SettingEdit, SettingShow, SettingIcon,
} from './resource/settings';

import {
  RoleList, RoleCreate, RoleEdit, RoleShow, RoleIcon,
} from './resource/roles';

const httpClient = (url, options = {}) => {
  // if (!options.headers) {
  //   options.headers = new Headers({ Accept: 'application/json' });
  // }
  const token = localStorage.getItem('token');
  options.user = {
    authenticated: true,
    token: `Bearer ${token}`,
  };
  // options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('http://localhost:1715/api/v1', httpClient);

const history = createBrowserHistory();

const App = () => (
  <Admin title="TinyMind Admin" dataProvider={dataProvider} authProvider={authProvider} history={history}>
    {
      (permissions) => {
        if (permissions.indexOf(1) !== -1) {
          return ([
            <Resource name="instances" list={InstanceList} create={InstanceCreate} edit={InstanceEdit} show={InstanceShow} icon={InstanceIcon} />,
            <Resource name="executions" list={ExecutionList} show={ExecutionShow} icon={ExecutionIcon} />,
            <Resource name="users" list={UserList} edit={UserEdit} show={UserShow} icon={UserIcon} />,
            <Resource name="coupons" list={CouponList} show={CouponShow} icon={CouponIcon} />,
            <Resource name="settings" list={SettingList} create={SettingCreate} edit={SettingEdit} show={SettingShow} icon={SettingIcon} />,
            <Resource name="roles" list={RoleList} create={RoleCreate} edit={RoleEdit} show={RoleShow} icon={RoleIcon} />,
            <Resource name="permissions" />,
          ]);
        }
        return [
          <Resource name="no_resource" />,
        ];
      }
    }

  </Admin>
);

export default App;
