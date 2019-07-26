import React from 'react';
import {
  List, Create, Edit, Show, Datagrid, SimpleShowLayout, SimpleForm, EditButton,
  TextField, ArrayField, NumberField, SingleFieldList, ChipField, SelectField,
  TextInput, NumberInput, ArrayInput, SelectInput, SimpleFormIterator,
} from 'react-admin';
import { withStyles } from '@material-ui/core';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import DeleteButton from '../ui/button/DeleteButtonWithConfirmation';

export const InstanceIcon = DesktopMacIcon;

const styles = {
  status: { color: 'red' },
};

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

export const StatusField = withStyles(styles)(({
  classes, source, record, ...props
}) => (
  record[source] === 'admin'
    ? <SelectField className={classes.status} source={source} record={record} {...props} />
    : <SelectField source={source} record={record} {...props} />
));
StatusField.propTypes = SelectField.propTypes;
StatusField.defaultProps = SelectField.defaultProps;

export const InstanceList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <StatusField source="status" choices={statusChoices} />
      <StatusField source="next_status" choices={statusChoices} />
      <TextField source="url" />
      <ArrayField source="runs">
        <SingleFieldList linkType={false}>
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
    <SimpleForm redirect="show">
      <TextInput source="name" />
      <SelectInput source="resource" choices={resourceChoices} />
      <NumberInput source="count" />
    </SimpleForm>
  </Create>
);

export const InstanceEdit = props => (
  <Edit title={<InstanceTitle />} {...props}>
    <SimpleForm redirect="show">
      <TextField source="id" />
      <TextField source="name" />
      <SelectInput source="status" choices={statusChoices} />
      <SelectInput source="next_status" choices={statusChoices} />
      <TextInput source="url" />
      <ArrayInput source="runs">
        <SimpleFormIterator disableAdd>
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
      <StatusField source="status" choices={statusChoices} />
      <StatusField source="next_status" choices={statusChoices} />
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
