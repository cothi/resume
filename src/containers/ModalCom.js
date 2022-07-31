import { connect } from "react-redux";
import ModalCom from "../components/ModalCom"


const mapStateToProps = state => ({
  states: state
})

export default connect(mapStateToProps)(ModalCom)
