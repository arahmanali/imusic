import { connect } from "react-redux";

import * as actions from "./actions";

const mapStateToProps = (state) => ({
  ...state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  login: (params) => dispatch(actions.login(params)),
});

export default connect(mapStateToProps, mapDispatchToProps);
