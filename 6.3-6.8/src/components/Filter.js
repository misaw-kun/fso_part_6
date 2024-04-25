import { useDispatch, useSelector } from 'react-redux';
import { setFilterText } from '../reducers/filterReducer';

export default function Filter() {
  const filterText = useSelector((state) => state.filter.filterText);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setFilterText(event.target.value));
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter{' '}
      <input
        onChange={handleChange}
        type="text"
        value={filterText}
        placeholder="Search..."
      />
    </div>
  );
}
