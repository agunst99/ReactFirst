import React from 'react';
import Home from './Home';
import Resources from './Resources';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import JSXRules from '../concepts/JSXRules'
import ClassComponentDemo from '../ClassComponentDemo'
import PropsDemo from '../concepts/PropsDemo'
import LifeCycleCodepen from '../concepts/LifeCycleCodepen'

export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      sidebar: () => <div>Home</div>,
      main: () => <Home />
    },
    {
      path: '/lifecyclecodepen',
      exact: true,
      main: () => <LifeCycleCodepen />
    },
    {
      path: '/propsdemo',
      exact: true,
      main: () => <PropsDemo />
    },
    {
      path: '/functionalcomponent',
      exact:true,
      main: () => < FunctionalComponentDemo />
    },
    {
      path: '/ClassComponentDemo',
      exact:true,
      main: () => < ClassComponentDemo />
    },
    {
      path: '/resources',
      exact: true,
      sidebar: () => <div>Works Cited</div>,
      main: () => <Resources />
  },
  {
    path: '/JSXRules',
    exact: true,
    main: () => <JSXRules />
  }
]