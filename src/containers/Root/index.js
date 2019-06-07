import React from 'react'
import { Switch, Route } from 'react-router'
import Details from '../Details';
const Root = () => {
    return (
        <Switch>
          <Route path="/:city" component={Details}/>
        </Switch>
        );
}
export default Root;