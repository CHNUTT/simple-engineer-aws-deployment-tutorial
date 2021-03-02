import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const SectionTitle = ({ classes, title }) => {
  return (
    <Typography variant='subtitle2' component='p' className={classes.title}>
      {title}
    </Typography>
  );
};

const styles = ({ palette }) => ({
  title: {
    fontSize: 20,
    margin: '2% 0',
    fontWeight: 700,
    color: palette.secondary.main,
  },
});

export default withStyles(styles)(SectionTitle);
