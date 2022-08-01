import { connect } from "react-redux";
import Header from "../components/Header"


const mapStateToProps = state => ({
  states: state
})

export default connect(mapStateToProps)(Header);
