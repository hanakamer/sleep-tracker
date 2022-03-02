import React, { useContext } from 'react';
import { SavedGridContext } from '../../contexts/SavedGridContext';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Days } from '../../components/Days';
import generalStyles from '../../common/general.module.css';
const ROW_LENGTH = 96;
const ROW_DATA = [];

for (let col = 0; col < ROW_LENGTH; col++) {
  const cell = {
    id: col,
    mode: 'active',
    selected: false
  };
  ROW_DATA.push(cell);
}
function Home() {
  const { savedGrid } = useContext(SavedGridContext);

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
