import React from 'react';
import {
  List, Create, Edit, Show, Datagrid, SimpleShowLayout, SimpleForm, EditButton, DeleteButton,
  TextField, ArrayField, NumberField, SingleFieldList, ChipField, SelectField,
  TextInput, NumberInput, ArrayInput, SelectInput, SimpleFormIterator,
} from 'react-admin';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';

export const InstanceIcon = DesktopMacIcon;

const resourceChoices = [
  { id: 'cpu', name: 'cpu' },
  { id: 'gpu', name: 'gpu' },
];

const statusChoices = [
  { id: 'starting', name: 'starting' },
  { id: 'executing', name: 'executing' },
  { id: 'idle', name: 'idle' },
  { id: 'admin', name: 'admin' },
  { id: 'stopping', name: 'stopping' },
  { id: 'stopped', name: 'stopped' },
  { id: 'deleted', name: 'deleted' },
];

export const InstanceList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <SelectField source="status" choices={statusChoices} />
      <SelectField source="next_status" choices={statusChoices} />
      <TextField source="url" />
      <ArrayField source="runs">
        <SingleFieldList>
          <ChipField source="token" />
        </SingleFieldList>
      </ArrayField>
      <SelectField source="resource" choices={resourceChoices} />
      <NumberField source="count" />
      <NumberField source="remaining" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

const InstanceTitle = ({ record }) => (
  <span>Instance - {record ? record.name : ''}</span>
);

export const InstanceCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <SelectInput source="resource" choices={resourceChoices} />
      <NumberInput source="count" />
    </SimpleForm>
  </Create>
);

export const InstanceEdit = props => (
  <Edit title={<InstanceTitle />} {...props}>
    <SimpleForm>
      <TextField source="id" />
      <TextField source="name" />
      <SelectInput source="status" choices={statusChoices} />
      <SelectInput source="next_status" choices={statusChoices} />
      <TextInput source="url" />
      <ArrayInput source="runs">
        <SimpleFormIterator>
          <NumberInput source="count" />
          <TextInput source="token" />
        </SimpleFormIterator>
      </ArrayInput>
      <SelectField source="resource" choices={resourceChoices} />
      <NumberField source="count" />
      <NumberInput source="remaining" />
    </SimpleForm>
  </Edit>
);

export const InstanceShow = props => (
  <Show title={<InstanceTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <SelectField source="status" choices={statusChoices} />
      <SelectField source="next_status" choices={statusChoices} />
      <TextField source="url" />
      <ArrayField source="runs">
        <Datagrid>
          <TextField source="token" />
          <NumberField source="count" />
        </Datagrid>
      </ArrayField>
      <SelectField source="resource" choices={resourceChoices} />
      <NumberField source="count" />
      <NumberField source="remaining" />
    </SimpleShowLayout>
  </Show>
);
