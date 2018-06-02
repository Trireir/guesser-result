import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import 'react-table/react-table.css';

import columnSize from '../../constants/tables/table-sizes-constants';
import { CenterText } from '../../components';

const columns = [
  {
    Header: '',
    accessor: 'position',
    width: columnSize.numericColumn,
    Cell: row => (
      <CenterText text={row.value} />
    ),
  },
  {
    Header: 'Nombre',
    accessor: 'name',
  },
  {
    Header: 'J.',
    accessor: 'matches',
    width: columnSize.bigNumericColumn,
    Cell: row => (
      <CenterText text={row.value} />
    ),
  },
  {
    Header: 'R.E.',
    accessor: 'exactResult',
    width: columnSize.bigNumericColumn,
    Cell: row => (
      <CenterText text={row.value} />
    ),
  },
  {
    Header: 'R.P.',
    accessor: 'partialResult',
    width: columnSize.bigNumericColumn,
    Cell: row => (
      <CenterText text={row.value} />
    ),
  },
  {
    Header: '1X2',
    accessor: 'threeWayResult',
    width: columnSize.bigNumericColumn,
    Cell: row => (
      <CenterText text={row.value} />
    ),
  },
  {
    Header: 'P',
    accessor: 'points',
    width: columnSize.bigNumericColumn,
    Cell: row => (
      <CenterText text={row.value} />
    ),
  },
];

const Classification = ({ data }) => (
  <ReactTable
    data={data}
    columns={columns}
    defaultPageSize={data.length}
    className="-striped -highlight"
    showPagination={false}
    noDataText="This league don't have teams!"
    resizable={false}
    defaultSorted={[
      {
        id: 'position',
        desc: false,
      },
    ]}
  />
);

Classification.defaultProps = {
  data: {},
};

Classification.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Classification;
