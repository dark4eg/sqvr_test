const styles = theme => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: `0 ${theme.spacing.unit * 3}px`,
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing.unit}px auto`,
      padding: theme.spacing.unit * 2,
    },
    avatar: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    card: {
        maxWidth: 400,
      },
  });

export default styles