import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

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
  RoleList, RoleEdit, RoleShow, RoleIcon,
} from './resource/roles';

const dataProvider = jsonServerProvider('http://localhost:1715');

const App = () => (
  <Admin title="TinyMind Admin" dataProvider={dataProvider}>
    <Resource name="instances" list={InstanceList} create={InstanceCreate} edit={InstanceEdit} show={InstanceShow} icon={InstanceIcon} />
    <Resource name="executions" list={ExecutionList} show={ExecutionShow} icon={ExecutionIcon} />
    <Resource name="users" list={UserList} edit={UserEdit} show={UserShow} icon={UserIcon} />
    <Resource name="coupons" list={CouponList} show={CouponShow} icon={CouponIcon} />
    <Resource name="settings" list={SettingList} create={SettingCreate} edit={SettingEdit} show={SettingShow} icon={SettingIcon} />
    <Resource name="roles" list={RoleList} edit={RoleEdit} show={RoleShow} icon={RoleIcon} />
  </Admin>
);

export default App;
