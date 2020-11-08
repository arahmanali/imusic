import { connect } from "react-redux";

import * as actions from "../Auth/actions";
import Layout from "../../components/Layout";

const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(actions.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
