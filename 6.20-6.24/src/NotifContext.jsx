import { createContext, useContext, useReducer } from 'react';
const NotificationContext = createContext();

export const NotificationContextProvider = ({ children }) => {
  const initialState = {
    message: '',
    isVisible: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SHOW':
        return {
          ...state,
          message: action.payload,
          isVisible: true,
        };
      case 'HIDE':
        return {
          ...state,
          isVisible: false,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NotificationContext.Provider value={{ state, dispatch }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext)