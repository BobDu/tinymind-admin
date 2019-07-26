import React from 'react';
import {
  List, Datagrid, Show, SimpleShowLayout, SimpleFormIterator, EditButton, DeleteButton,
  TextField, ChipField, ArrayField, SingleFieldList,
  Edit, SimpleForm, TextInput, ArrayInput,
} from 'react-admin';
import LockOpenIcon from '@material-ui/icons/LockOpen';

export const RoleIcon = LockOpenIcon;

export const RoleList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <ArrayField source="permissions">
        <SingleFieldList>
          <ChipField source="id" />
        </SingleFieldList>
      </ArrayField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const RoleEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <ArrayInput source="permissions">
        <SimpleFormIterator>
          <TextInput source="id" />
          <TextInput source="name" />
          <TextInput source="identifier" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export const RoleShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <ArrayField source="permissions">
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="identifier" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
