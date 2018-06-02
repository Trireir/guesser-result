import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';

import styles from './HomeStyles';
import Classification from '../tables/Classification';

const data = [{
  position: '1',
  name: 'Adri Blanco',
  matches: '7',
  exactResult: '2',
  partialResult: '5',
  threeWayResult: '6',
  points: '12',
}, {
  position: '2',
  name: 'Adri Blanco',
  matches: '7',
  exactResult: '2',
  partialResult: '5',
  threeWayResult: '6',
  points: '17',
}, {
  position: '3',
  name: 'Adri Blanco',
  matches: '7',
  exactResult: '2',
  partialResult: '5',
  threeWayResult: '6',
  points: '15',
}];

const Home = ({ classes }) => (
  <div className={classes.container}>
    <div className={classes.classificationContainer}>
      <span className={classes.title}>Clasificación General</span>
      <Classification
        data={data}
      />
      <span className={classes.legend}>
        Leyenda: J. Jornadas, R.E. Resultados Exactos, R.P. Resultados Parciales (solo se acierta el
        resultado de uno de los dos equipos), 1X2 Resultados acertados estilo quiniela, P Puntos
      </span>
    </div>
  </div>
);

Home.defaultProps = {
  classes: {},
};

Home.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(Home);
