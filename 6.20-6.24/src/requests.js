import axios from 'axios';

const baseURL = 'http://localhost:3001/anecdotes';

export const getAnecdotes = () => axios.get(baseURL).then((res) => res.data);

export const createAnecdote = (newItem) =>
  axios.post(baseURL, newItem).then((res) => res.data);

export const voteAnecdote = (updated) =>
  axios.put(`${baseURL}/${updated.id}`, updated).then((res) => res.data);
