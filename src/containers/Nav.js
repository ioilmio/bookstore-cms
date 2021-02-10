import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { changeFilter } from '../actions';

import CategoryFilter from '../components/CategoryFilter';

const Nav = ({ changeFilter }) => (
  <div>
    <CategoryFilter changeFilter={changeFilter} />
  </div>
);

Nav.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeFilter: category => {
    dispatch(changeFilter(category));
  },
});

export default connect(null, mapDispatchToProps)(Nav);
