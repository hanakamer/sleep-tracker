import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Days } from '../../components/Days';
import StylesGeneral from '../../common/general.module.css';
import { useSavedGrid } from '../../contexts/SavedGridContext';

function Home() {
  const { savedGrid } = useSavedGrid();

  return (
    <div className={StylesGeneral.container}>
      <h2>Sleep tracker</h2>
      <Days days={savedGrid} />
      <Link to="/createDay" className={StylesGeneral.link}>
        Record Sleep
      </Link>
    </div>
  );
}
Home.propTypes = {
  savedGrid: PropTypes.array
};

export default Home;
