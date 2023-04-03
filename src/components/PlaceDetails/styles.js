import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  card: {
    margin: '5px 5px 5px 0',
    border:'2px solid black',
  },
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
}));