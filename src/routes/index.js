import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Delivery from '~/pages/Delivery';
import DeliveryForm from '~/pages/Delivery/Form';

import Deliveryman from '~/pages/Deliveryman';
import DeliverymanForm from '~/pages/Deliveryman/Form';

import Recipients from '~/pages/Recipients';

import Problems from '~/pages/Problems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/delivery" exact component={Delivery} isPrivate />
      <Route path="/delivery/create" component={DeliveryForm} isPrivate />
      <Route path="/delivery/update/:id" component={DeliveryForm} isPrivate />

      <Route path="/deliveryman" exact component={Deliveryman} isPrivate />
      <Route
        path="/deliveryman/create"
        exact
        component={DeliverymanForm}
        isPrivate
      />
      <Route
        path="/deliveryman/update/:id"
        component={DeliverymanForm}
        isPrivate
      />

      <Route path="/recipients" component={Recipients} isPrivate />

      <Route path="/problems" component={Problems} isPrivate />
    </Switch>
  );
}
