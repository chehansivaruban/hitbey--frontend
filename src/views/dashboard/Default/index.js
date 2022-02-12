import React from 'react';

// material-ui
import { Grid } from '@material-ui/core';

// project imports
import { gridSpacing } from 'store/constant';

const Dashboard = () => {
    return <Grid container spacing={gridSpacing}></Grid>;
};

export default Dashboard;
