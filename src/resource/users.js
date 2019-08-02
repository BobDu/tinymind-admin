import React from 'react';
import {
  List, Edit, Show, Datagrid, SimpleShowLayout, SimpleForm, EditButton, Filter,
  TextField, BooleanField, SingleFieldList, ChipField, SelectField,
  ImageField, ReferenceArrayField,
  TextInput, SelectInput, ReferenceArrayInput, SelectArrayInput,
} from 'react-admin';
import GroupIcon from '@material-ui/icons/Group';
import UnixDateField from '../ui/field/UnixDateField';

export const UserIcon = GroupIcon;

const localeChoices = [
  { id: 'en', name: 'en' },
  { id: 'zh_CN', name: 'zh_CN' },
];

const UserFilter = props => (
  <Filter {...props}>
    <TextInput source="q" label="Search" alwaysOn />
  </Filter>
);

export const UserList = props => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="name" />
      <SelectField source="locale" choices={localeChoices} />
      <BooleanField source="email_confirmed_at" />
      <ReferenceArrayField source="roles" reference="roles">
        <SingleFieldList linkType="show">
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <UnixDateField source="created_at" />
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
      <BooleanField source="email_confirmed_at" />
      <ReferenceArrayInput source="roles" reference="roles" label="Roles">
        <SelectArrayInput source="name" />
      </ReferenceArrayInput>
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
      <ReferenceArrayField source="roles" reference="roles">
        <SingleFieldList linkType="show">
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <UnixDateField source="created_at" />
    </SimpleShowLayout>
  </Show>
);
