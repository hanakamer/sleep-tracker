import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Days } from '../../components/Days';
import generalStyles from '../../common/general.module.css';
import { useSavedGrid } from '../../contexts/SavedGridContext';

function Home() {
  const { savedGrid } = useSavedGrid();

  return (
    <>
      <Days days={savedGrid} />
      <Link to="/createDay" className={generalStyles.link}>
        Record Sleep
      </Link>
    </>
  );
}
Home.propTypes = {
  savedGrid: PropTypes.array
};

export default Home;
