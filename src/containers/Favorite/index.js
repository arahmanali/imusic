import { connect } from "react-redux";

import * as actions from "./actions";
import Favorite from "../../components/Favorite";

const mapStateToProps = (state) => ({
  ...state.favorite,
});

const mapDispatchToProps = (dispatch) => ({
  getFavAlbums: (params) => dispatch(actions.getFavAlbums(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
