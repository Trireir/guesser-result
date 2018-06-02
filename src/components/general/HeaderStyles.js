
export default () => ({
  container: {
    width: '100vw',
    height: '46px',
    background: 'white',
    boxShadow: '0 1px 2px rgba(0,0,0,0.25), 0 1px 1px rgba(0,0,0,0.22)',
    padding: '0px 50px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    left: '50%',
    margin: '3px',
  },
  right: {
    display: 'flex',
    alignSelf: 'center',
  },
  centralIcon: {
    height: '40px',
  },
});
