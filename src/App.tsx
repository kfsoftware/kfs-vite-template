import './index.css';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Sentry from "@sentry/react";

Sentry.init({ dsn: "{{cookiecutter.sentryDsn}}" });

const pages = import.meta.globEager('./pages/*.tsx')

const routes: any[] = Object.keys(pages).filter(path => !!path).map((path: string) => {
  const matches = path.match(/\.\/pages\/(.*)\.tsx$/)
  if (!matches?.length) {
    return null
  }
  const name = matches[1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default
  }
}).filter(c => !!c)


export default function App() {
  return (
    <Switch>
      {routes.map(({ path, component: RouteComp, meta }) => {
        return (
          <Route exact={true} key={path} path={path}>
            <RouteComp />
          </Route>
        )
      })}
    </Switch>
  );
}
