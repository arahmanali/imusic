import Favorite from "../Favorite";

import starIcon from "../../assets/icons/star.svg";

/**
 * key and last part of the path must be same
 * set menu:true to get visible in navigation
 */
const routes = [
  {
    label: "Favorites",
    key: "favorites",
    path: "/favorites",
    component: Favorite,
    exact: true,
    menu: true,
    icon: starIcon,
  },
];

export default routes;
