import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Delivery from '~/pages/Delivery';
import DeliveryForm from '~/pages/Delivery/Form';

import Deliveryman from '~/pages/Deliveryman';
import CreateDeliveryman from '~/pages/Deliveryman/Create';
import UpdateDeliveryman from '~/pages/Deliveryman/Update';

import Recipients from '~/pages/Recipients';
import CreateRecipients from '~/pages/Recipients/Create';
import UpdateRecipients from '~/pages/Recipients/Update';

import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/delivery" exact component={Delivery} isPrivate />
      <Route path="/delivery/create" component={DeliveryForm} isPrivate />
      <Route path="/delivery/update/:id" component={DeliveryForm} isPrivate />

      <Route path="/deliveryman" component={Deliveryman} isPrivate />
      <Route
        path="/deliveryman/create"
        component={CreateDeliveryman}
        isPrivate
      />
      <Route
        path="/deliveryman/update"
        component={UpdateDeliveryman}
        isPrivate
      />

      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/recipients/create" component={CreateRecipients} isPrivate />
      <Route path="/recipients/update" component={UpdateRecipients} isPrivate />

      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}
