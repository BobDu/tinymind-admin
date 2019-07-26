import React from 'react';
import {
  List, Show, Datagrid, SimpleShowLayout,
  TextField, NumberField, BooleanField, ReferenceField,
} from 'react-admin';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import UnixDateField from '../ui/field/UnixDateField';

export const CouponIcon = CardGiftcardIcon;

export const CouponList = props => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <ReferenceField source="user_id" reference="users" label="Audit User" linkType="show">
        <TextField source="username" />
      </ReferenceField>
      <TextField source="code" />
      <NumberField source="use_count" />
      <NumberField source="condition.max_count" label="max_count" />
      <TextField source="value.credit" label="credit" />
      <NumberField source="value.duration" label="duration" />
      <BooleanField source="value.gpu" label="gpu" />
      <UnixDateField source="created_at" label="Created Time" />
    </Datagrid>
  </List>
);

export const CouponShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="user_id" reference="users">
        <TextField source="username" />
      </ReferenceField>
      <TextField source="code" />
      <NumberField source="use_count" />
      <UnixDateField source="condition.expired_at" label="Expired At" />
      <NumberField source="condition.max_count" label="Max Count" />
      <TextField source="condition.allowed_users" label="Allowed users" />
      <NumberField source="value.credit" />
      <BooleanField source="value.gpu" />
      <NumberField source="value.duration" label="Duration" />
      <NumberField source="value.concurrency" label="Concurrency" />
      <NumberField source="value.max_pending" label="Max Pending" />
      <UnixDateField source="created_at" label="Created At" />
    </SimpleShowLayout>
  </Show>
);
