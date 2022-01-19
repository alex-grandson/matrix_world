import React from 'react';
import Table from "./pages/Table";
import WorldMap from "./pages/WorldMap";
import { Navigate, useRoutes } from 'react-router-dom';
import NotFound from "./pages/NotFound";

export default function Router() {
    // const isAuthenticated = useSelector((state) => state.auth.authenticated);
    return useRoutes([
        {
            path: '/',
            element: <WorldMap />
        },
        {
            path: '/table',
            element: <Table />
        },
        { path: '/404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
    ])
}