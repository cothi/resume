import { connect } from "react-redux";
import Main from "../components/Main"


const mapStateToProps = state => ({
  winSize: state.wins
})

export default connect(mapStateToProps)(Main);
