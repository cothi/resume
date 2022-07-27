import { connect } from "react-redux"
import setLang from "../actions/index"

const SetRank = ({ dispatch }) => {
  return (
    <div onClick={() => {
      dispatch(setLang("Test"))
    }}>
      test
    </div>
  )
}

export default connect()(SetRank)
