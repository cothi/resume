import { connect } from "react-redux"
import Projects from "../components/Projects"

const mapStateToProps = state => ({
  git: { ...state }
})

export default connect(mapStateToProps)(Projects) 
