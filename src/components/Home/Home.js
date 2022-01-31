import React, { useContext } from 'react';
import { SavedGridContext } from '../../contexts/SavedGridContext';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { Days } from '../Days';
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
  const navigate = useNavigate();
  const { savedGrid } = useContext(SavedGridContext);

  return (
    <>
      <p>{savedGrid && <span>{savedGrid.length}</span>}</p>
      <Days days={savedGrid} />
      {
        <div className={generalStyles.sectionContainer}>
          <Button onClick={() => navigate('/saveDay')} name={'Record Sleep'} />
        </div>
      }
    </>
  );
}
Home.propTypes = {
  savedGrid: PropTypes.array
};

export default Home;
