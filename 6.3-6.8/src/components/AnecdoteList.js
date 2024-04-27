import { useSelector, useDispatch } from 'react-redux';
import { upvote } from '../reducers/anecdoteReducer';
import { showNotif } from '../reducers/notifReducer';
import Notification from './Notification';

export default function AnecdoteList() {
  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter.filterText !== '') {
      return anecdotes.filter((item) =>
        item.content?.toLowerCase().includes(filter.filterText?.toLowerCase())
      );
    } else {
      return anecdotes;
    }
  });
  const dispatch = useDispatch();

  const vote = (id, content) => {
    dispatch(upvote(id))
    dispatch(showNotif(content))
  };

  return (
    <>
      <Notification />
      <h2>Anecdotes</h2>
      {[...anecdotes]
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
        ))}
    </>
  );
}
