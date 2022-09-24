import React from 'react'
import { useRoutes } from 'react-router-dom';
import { BaseLayout } from 'app/components/layout/BaseLayout';
import { AuthLayout } from 'app/components/layout/AuthLayout';
export const Router = () => {
  const route = useRoutes([
    {
      path: '/',
      element: <BaseLayout/>
    },
    // {
    //   path: '/',
    //   element: <AuthLayout />
    // }
  ])
  return route;
}


//debounce, FCM