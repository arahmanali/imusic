import * as React from "react";

import SideNav, {
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

import musicPlayerIcon from "../../assets/icons/music-player.svg";
import logoutIcon from "../../assets/icons/door-open.svg";
import { namespace } from "../../routes/namespace";

const SideNavBar = ({
  onSideNavToggle,
  onSideNavSelect,
  expanded,
  onLogout,
}) => {
  return (
    <SideNav
      expanded={expanded}
      onToggle={onSideNavToggle}
      onSelect={onSideNavSelect}
    >
      <div>
        <img src={musicPlayerIcon} alt="logo" className="nav-logo" />
      </div>

      <Nav defaultSelected="/dashboard">
        {namespace &&
          namespace.map(
            (route, i) =>
              route.menu && (
                <NavItem
                  key={i}
                  eventKey={route.path}
                  className={route.key === "role" ? "bottom-navItem" : ""}
                >
                  <NavIcon title={route.label}>
                    <img src={route.icon} alt="" />
                  </NavIcon>
                  <NavText>{route.label}</NavText>
                </NavItem>
              )
          )}

        <hr style={{ borderColor: "#989696" }} />
        <NavItem onClick={onLogout}>
          <NavIcon title={"Log out"}>
            <img src={logoutIcon} alt="logout" />
          </NavIcon>
          <NavText>{"Log out"}</NavText>
        </NavItem>
      </Nav>
    </SideNav>
  );
};

export default SideNavBar;
