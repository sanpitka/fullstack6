import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(newAnecdote({ content }))
    dispatch(setNotification('New anecdote added: ' + content))
    setTimeout(() => {
      dispatch(clearNotification())
    }, 5000)
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <button type="submit">create</button>
    </form>
  )
}

export default AnecdoteForm