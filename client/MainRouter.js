import React from 'react'
import { Switch, Route } from "react-router-dom";
import JobDetail from './pages/JobDetail';
import Jobs from './pages/Jobs'
import Signin from './pages/Signin'

const MainRouter = () => {
  return (<>
    <Switch>
      <Route exact path="/gitjobs/" component={Signin} />
      <Route exact path="/gitjobs/list/" component={Jobs} />
      <Route exact path="/gitjobs/detail/:id" component={JobDetail} />
    </Switch>
  </>)
}

export default MainRouter
