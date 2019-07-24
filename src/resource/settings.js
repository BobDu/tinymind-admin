import React from 'react';
import {
  List, Datagrid, Show, SimpleShowLayout,
  TextField, NumberField, Edit, SimpleForm, TextInput, NumberInput,
} from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';

export const SettingIcon = SettingsIcon;

export const SettingList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="key" label="Key" />
      <NumberField source="value.v" label="Value" />
    </Datagrid>
  </List>
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
      <TextInput source="id" />
      <TextInput source="key" label="Key" />
      <NumberInput source="value.v" label="Value" />
    </SimpleForm>
  </Edit>
);
