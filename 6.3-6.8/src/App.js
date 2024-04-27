import { useEffect } from 'react'
import { useDispatch } from "react-redux"

import { AnecdoteService } from './services/anecdotes'

import AnecdoteForm from "./components/AnecdoteForm"
import AnecdoteList from "./components/AnecdoteList"
import Filter from "./components/Filter"
import { setAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    AnecdoteService.getAll().then(items => dispatch(setAnecdotes(items)))
  }, [])
  return (
    <>
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </>
  )
}

export default App