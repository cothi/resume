import { connect } from "react-redux"
import TeckStack from "../components/TeckStack"

const mapStackToProps = state => {
  if (state.pros[0] == undefined) {
    return {}
  }

  console.log("call?? ", state.pros[0]);
  return {
    git: state.pros[0]
  }
}

export default connect(mapStackToProps)(TeckStack)
