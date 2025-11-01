const baseUrl = 'http://localhost:3001/anecdotes'

export const getAll = async () => {
  const response = await fetch(baseUrl)
  const data = await response.json()
  return data
}

export const create = async (content) => {
  const newAnecdote = { content, votes: 0 }
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAnecdote)
  })
  const data = await response.json()
  return data
}

export const vote = async (id) => {
  const anecdoteToVote = await fetch(`${baseUrl}/${id}`)
  const anecdote = await anecdoteToVote.json()
  const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
  const response = await fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedAnecdote)
  })
  const data = await response.json()
  return data
}

export default { getAll, create, vote }