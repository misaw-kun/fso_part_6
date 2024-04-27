import axios from 'axios'
import { asObject } from '../helpers'

const baseUrl = 'http://localhost:3001/anecdotes'

export const AnecdoteService = {
  async getAll() {
    const response = await axios.get(baseUrl)
    return response.data
  },

  async createNew(content) {
    let newItem = asObject(content)
    const response = await axios.post(baseUrl, newItem)
    return response.data
  }
}
