import { connect } from "react-redux"
import About from "../components/About"


const mapStateToProps = state => ({
  winSize: state.wins
})

export default connect(mapStateToProps)(About)
