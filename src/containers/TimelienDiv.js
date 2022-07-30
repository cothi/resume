import { connect } from "react-redux"
import TimelineDiv from "../components/TimelineDiv"

const timelineName = props => {
  console.log("get", props)
}

const mapStackToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStackToProps)(TimelineDiv)
