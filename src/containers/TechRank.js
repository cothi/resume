import { connect } from "react-redux"
import TechRank from "../components/TechRank"

/*
const getPro = (pros) => {
  console.log('pro~', pros)
  return pros
} */

const mapStateToProps = state => ({
  git: { ...state }
})

export default connect(mapStateToProps)(TechRank)
