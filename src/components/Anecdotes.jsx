import { useDispatch, useSelector } from 'react-redux'

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    if (state.filter.length > 0) {
      return state.anecdotes.filter(anecdote =>
        anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
      )
    }
    return state.anecdotes
  })

  const vote = (id) => {
    dispatch({
      type: 'VOTE',
      payload: { id }
    })
  }

  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Anecdotes