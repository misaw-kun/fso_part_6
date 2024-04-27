import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    upvote(state, action) {
      return state.map(item =>
        item.id !== action.payload ? item : { ...item, votes: item.votes + 1 })
    },
    createAnecdote(state, action) {
      return [...state, action.payload]
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, upvote, setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer