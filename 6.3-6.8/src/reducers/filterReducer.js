const initialState = {
  filterText: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        filterText: action.payload.query
      }
    default:
      return state;
  }
}

export const setFilterText = query => {
  return {
    type: 'SET_FILTER_TEXT',
    payload: { query }
  }
}

export default reducer