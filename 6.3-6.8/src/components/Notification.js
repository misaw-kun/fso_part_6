import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideNotif } from '../reducers/notifReducer';

const Notification = () => {
  const dispatch = useDispatch();
  const { message, isVisible } = useSelector((state) => state.notification);

  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(() => {
        dispatch(hideNotif());
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isVisible, dispatch]);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return isVisible && <div style={style}>You voted '{message}'</div>;
};

export default Notification;
