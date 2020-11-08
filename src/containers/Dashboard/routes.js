import Dashboard from "../Dashboard";

import music_fill from "../../assets/icons/music-fill.svg";

/**
 * key and last part of the path must be same
 * set menu:true to get visible in navigation
 */
const routes = [
  {
    label: "Dashboard",
    key: "dashboard",
    path: "/dashboard",
    component: Dashboard,
    exact: true,
    menu: true,
    icon: music_fill,
  },
];

export default routes;
