import React from 'react';
import {
  List, Edit, Show, Datagrid, SimpleShowLayout, SimpleForm, EditButton,
  TextField, BooleanField, ArrayField, SingleFieldList, ChipField, SelectField, ImageField,
  TextInput, BooleanInput, SelectInput,
} from 'react-admin';
import GroupIcon from '@material-ui/icons/Group';
import UnixDateField from '../field/UnixDateField';

export const UserIcon = GroupIcon;

const localeChoices = [
  { id: 'en', name: 'en' },
  { id: 'zh_CN', name: 'zh_CN' },
];

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="name" />
      <SelectField source="locale" choices={localeChoices} />
      <BooleanField source="email_confirmed_at" />
      <UnixDateField source="created_at" />
      <ArrayField source="roles">
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ArrayField>
      <EditButton />
    </Datagrid>
  </List>
);

const UserTitle = ({ record }) => (
  <span>User - {record ? record.username : ''}</span>
);

export const UserEdit = props => (
  <Edit title={<UserTitle />} {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="username" />
      <TextInput source="name" />
      <SelectInput source="locale" choices={localeChoices} />
      <TextInput source="avatar_url" />
      <BooleanInput source="email_confirmed_at" />
      <UnixDateField source="created_at" />
    </SimpleForm>
  </Edit>
);

export const UserShow = props => (
  <Show title={<UserTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="name" />
      <SelectField source="locale" choices={localeChoices} />
      <ImageField source="avatar_url" title="Avatar" />
      <BooleanField source="email_confirmed_at" />
      <UnixDateField source="created_at" />
      <ArrayField source="roles">
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
