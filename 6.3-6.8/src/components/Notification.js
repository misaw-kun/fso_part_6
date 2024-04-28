import { useSelector } from 'react-redux';

const Notification = () => {
  const { message, isVisible } = useSelector((state) => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  return isVisible && <div style={style}>You voted '{message}'</div>;
};

export default Notification;
