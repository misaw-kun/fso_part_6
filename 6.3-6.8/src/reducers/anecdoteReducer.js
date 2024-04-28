import { createSlice } from '@reduxjs/toolkit'
import { AnecdoteService } from '../services/anecdotes'

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

// thunks
export const initAnecdotes = () => {
  return async dispatch => {
    const items = await AnecdoteService.getAll()
    dispatch(setAnecdotes(items))
  }
}

export const createNewAnecdote = content => {
  return async dispatch => {
    const newItem = await AnecdoteService.createNew(content)
    dispatch(createAnecdote(newItem))
  }
}

export const upvoteAnecdote = anecdote => {
  return async dispatch => {
    const itemToUpvote = await AnecdoteService.upvote(anecdote)
    dispatch(upvote(itemToUpvote.id))
  }
}

export const { createAnecdote, upvote, setAnecdotes } = anecdoteSlice.actions

export default anecdoteSlice.reducer