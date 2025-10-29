import { useState } from 'react'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {
  const [content, setContent] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch({
      type: 'NEW_ANECDOTE',
      payload: { content }
    })
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