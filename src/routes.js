import React from 'react';
import { useSelector } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AuthRoutes from './routes/auth.routes';
import DashboardRoutes from './routes/dashboard.routes';

export default function Routes() {
    const signed = useSelector((state) => state.auth.signed);

    return signed ? <DashboardRoutes /> : <AuthRoutes />;
}
