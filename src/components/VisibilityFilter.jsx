import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const VisibilityFilter = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <p><input type="text" placeholder="Filter" onChange={(e) => dispatch(filterChange(e.target.value))} /></p>
    </div>
  )
}

export default VisibilityFilter