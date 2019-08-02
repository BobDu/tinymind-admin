import React from 'react';
import {
  List, Create, Datagrid, Show, SimpleShowLayout, EditButton,
  TextField, ChipField, SingleFieldList, ReferenceArrayField,
  Edit, SimpleForm, TextInput, ReferenceArrayInput, SelectArrayInput,
} from 'react-admin';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import DeleteButton from '../ui/button/DeleteButtonWithConfirmation';

export const RoleIcon = LockOpenIcon;

export const RoleList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceArrayField source="permissions_ids" reference="permissions">
        <SingleFieldList linkType={false}>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export const RoleCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="list">
      <TextInput source="name" />
      <ReferenceArrayInput source="permissions_ids" reference="permissions" label="Permissions">
        <SelectArrayInput source="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);

export const RoleEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceArrayInput source="permissions_ids" reference="permissions" label="Permissions">
        <SelectArrayInput source="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export const RoleShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceArrayField source="permissions_ids" reference="permissions" label="Permissions">
        <SingleFieldList linkType={false}>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);
