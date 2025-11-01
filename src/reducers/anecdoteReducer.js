import { createSlice} from '@reduxjs/toolkit'
import data from '../../db.json'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: data.anecdotes,
  reducers: {
    newAnecdote(state, action) {
      const content = action.payload.content
      state.push({
        content,
        id: getId(),
        votes: 0
      })
    },
    vote(state, action) {
      const id = action.payload.id
      const anecdoteToVote = state.find(a => a.id === id)
      if (anecdoteToVote) {
        anecdoteToVote.votes += 1
      }
    },
  }
})

export const { newAnecdote, vote } = anecdoteSlice.actions
export default anecdoteSlice.reducer