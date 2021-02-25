import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route, Switch } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { ImUser } from 'react-icons/im';
import { connect } from 'react-redux';
import '../styles/css/nav.css';
import { changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
// import Signup from './Signup';

const Nav = ({ changeFilter }) => (
  <nav className="nav">
    <div className="actions">
      <h1 className="nav-title">
        Bookstore CMS
      </h1>
      <p className="nav-books">Books</p>
      <CategoryFilter changeFilter={changeFilter} />
    </div>
    <Link to="/">Home</Link>
    {/* <Link to="/signup"> */}
    {/* <Signup /> */}
    {/* </Link> */}
    <Switch>
      {/* <Route path="/signup" component={Signup} /> */}
      <Route exact path="/" />
    </Switch>

    <IconContext.Provider value={{ style: { fontSize: '20px', color: 'rgb(0, 123, 255)' } }}>
      <div className="profile">
        <ImUser />
      </div>
    </IconContext.Provider>
  </nav>
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
