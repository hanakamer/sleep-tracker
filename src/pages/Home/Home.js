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
      <p>{savedGrid && <span>{savedGrid.length}</span>}</p>
      <Days days={savedGrid} />
      {
        <div className={generalStyles.sectionContainer}>
          <Link to="/createDay"> Record Sleep</Link>
        </div>
      }
    </>
  );
}
Home.propTypes = {
  savedGrid: PropTypes.array
};

export default Home;
