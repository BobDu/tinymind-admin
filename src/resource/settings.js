import React from 'react';
import {
  List, Create, Datagrid, Show, SimpleShowLayout, EditButton,
  TextField, NumberField, Edit, SimpleForm, TextInput, NumberInput,
} from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';
import DeleteButton from '../ui/button/DeleteButtonWithConfirmation';

export const SettingIcon = SettingsIcon;

export const SettingList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="key" label="Key" />
      <NumberField source="value.v" label="Value" />
      <EditButton />
      <DeleteButton undoable={false} />
    </Datagrid>
  </List>
);

export const SettingCreate = props => (
  <Create {...props}>
    <SimpleForm redirect="show">
      <TextInput source="key" label="Key" />
      <NumberInput source="value.v" label="Value" />
    </SimpleForm>
  </Create>
);

export const SettingShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="key" label="Key" />
      <NumberField source="value.v" label="Value" />
    </SimpleShowLayout>
  </Show>
);

export const SettingEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextInput source="key" label="Key" />
      <NumberInput source="value.v" label="Value" />
    </SimpleForm>
  </Edit>
);
