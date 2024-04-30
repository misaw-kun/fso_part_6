import { useEffect } from "react";
import { useNotification } from "../NotifContext"

const Notification = () => {
  const { state, dispatch } = useNotification()
  const { message, isVisible } = state

  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(() => {
        dispatch({ type: 'HIDE' });
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isVisible, dispatch]);


  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  return (
    isVisible &&
    <div style={style}>{message}</div>
  )
}

export default Notification
