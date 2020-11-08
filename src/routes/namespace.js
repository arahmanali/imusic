// import routes here
import dashboardRoutes from "../containers/Dashboard/routes";
import favAlbumsRoutes from "../containers/Favorite/routes";

export const namespace = [...dashboardRoutes, ...favAlbumsRoutes];
