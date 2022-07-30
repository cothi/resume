import { connect } from "react-redux"
import Timeline from "../components/Timeline"
import { setTimeline } from "../actions/index"


const mapStackToProps = state => {
  console.log("rprp", state);
  return {
    states: state
  }
}



export default connect(mapStackToProps)(Timeline)
