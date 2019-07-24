import React from 'react';
import {
  List, Show, Datagrid, SimpleShowLayout,
  TextField, NumberField, BooleanField, ReferenceField, ArrayField,
} from 'react-admin';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import UnixDateField from '../field/UnixDateField';

export const ExecutionIcon = FlightTakeoffIcon;

export const ExecutionList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="token" />
      <ReferenceField source="user_id" reference="users" linkType="show">
        <TextField source="username" />
      </ReferenceField>
      <TextField source="model_name" />
      <NumberField source="seq" />
      <ReferenceField source="instance_id" reference="instances" linkType="show" allowEmpty={true}>
        <TextField source="name" />
      </ReferenceField>
      <TextField source="status" />
      <TextField source="env.framework" />
      <TextField source="resource" />
      <NumberField source="resource_count" />
      {/* <ArrayField source="params"><SingleFieldList><ChipField source="end" /></SingleFieldList></ArrayField> */}
      <TextField source="data" />
      {/* <ArrayField source="events"><SingleFieldList><ChipField source="ts" /></SingleFieldList></ArrayField> */}
      <UnixDateField source="created_at" />
      <UnixDateField source="completed_at" />
    </Datagrid>
  </List>
);

const ExecutionTitle = ({ record }) => (
  <span>Execution - {record ? record.token : ''}</span>
);

export const ExecutionShow = props => (
  <Show title={<ExecutionTitle />} {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="user_id" reference="users" linkType="show">
        <TextField source="username" />
      </ReferenceField>
      <TextField source="model_name" />
      <ReferenceField source="instance_id" reference="instances" linkType="show" allowEmpty={true}>
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="seq" />
      <TextField source="subseq" />
      <TextField source="batch_size" />
      <TextField source="prev_token" />
      <TextField source="prev_mode" />
      <TextField source="status" />
      <TextField source="token" />
      <TextField source="batch_token" />
      <TextField source="summary" />
      <TextField source="env.language.name" />
      <TextField source="code.mode" />
      <NumberField source="code_version" />
      <BooleanField source="code_changed" />
      <TextField source="resource" />
      <NumberField source="resource_count" />
      <ArrayField source="params">
        <Datagrid>
          <TextField source="name" />
          <TextField source="type" />
          <TextField source="value" />
        </Datagrid>
      </ArrayField>
      <TextField source="data" />
      <ArrayField source="events">
        <Datagrid>
          <UnixDateField source="ts" />
          <TextField source="name" />
        </Datagrid>
      </ArrayField>
      <TextField source="charts" />
      <TextField source="results" />
      <TextField source="stdout" />
      <TextField source="stderr" />
      <UnixDateField source="created_at" label="Created At" />
      <UnixDateField source="completed_at" label="Completed At" />
    </SimpleShowLayout>
  </Show>
);
