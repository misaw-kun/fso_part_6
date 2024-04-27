import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { AnecdoteService } from '../services/anecdotes';

export default function AnecdoteForm() {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';

    const newItem = await AnecdoteService.createNew(content)
    dispatch(createAnecdote(newItem));
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input type="text" name='anecdote' />
        <button type="submit">create</button>
      </form>
    </>
  );
}
