import { connect } from "react-redux";

import * as actions from "./actions";
import * as favActions from "../Favorite/actions";
import Dashboard from "../../components/Dashboard";

const mapStateToProps = (state) => ({
  ...state.dashboard,
});

const mapDispatchToProps = (dispatch) => ({
  getAlbums: (params) => dispatch(actions.getAlbums(params)),
  addFavAlbum: (album) => dispatch(favActions.addFavAlbum(album)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
