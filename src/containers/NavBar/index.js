import { connect } from "react-redux";
import * as actions from "../Auth/actions";

import NavBar from "../../components/Commons/NavBar";

const mapStateToProps = (state) => ({
  ...state.navbar,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
