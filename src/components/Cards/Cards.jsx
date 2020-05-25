import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} className={cx(styles.card)}>
          <div className={cx(styles.cardbg, styles.infected)}>
            <Typography variant="h5" component="h2" color="textSecondary" className={styles.txtcenter} gutterBottom>
              Infectés
            </Typography>
            <Typography variant="h5" component="h2" className={styles.txtcenter} >
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            </div>        
          </Grid>
        <Grid item xs={12} md={3} className={cx(styles.card)}>
        <div className={cx(styles.cardbg, styles.recovered)}>
          <Typography className={styles.txtcenter} variant="h5" component="h2" color="textSecondary" gutterBottom>
              Rétablis
            </Typography>
            <Typography className={styles.txtcenter} variant="h5" component="h2">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            
          </div>
        </Grid>
        <Grid item xs={12} md={3} className={cx(styles.card)}>
        <div className={cx(styles.cardbg, styles.deaths)}>
          <Typography className={styles.txtcenter} variant="h5" component="h2" color="textSecondary" gutterBottom>
              Décèdés
            </Typography>
            <Typography className={styles.txtcenter} variant="h5" component="h2">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
