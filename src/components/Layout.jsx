import * as React from "react";

import { Col, Container, Row } from "react-bootstrap";

import SideNav from "./Commons/SideNav";

class Layout extends React.Component {
  state = {
    expanded: true,
  };

  constructor(props) {
    super(props);
    props.history.push("/dashboard");
  }

  handleSideNavToggle = (expanded) => () => {
    this.setState({ expanded: !expanded });
  };

  handleSideNavSelect = (route) => {
    this.props.history.push(route);
  };

  render() {
    const { children, isAuthenticated } = this.props;
    const { expanded } = this.state;

    return (
      <Container fluid="fluid">
        <Row>
          <Col md={2}>
            <SideNav
              expanded={expanded}
              onSideNavToggle={this.handleSideNavToggle(expanded)}
              onSideNavSelect={this.handleSideNavSelect}
              onLogout={this.props.logout}
            />
          </Col>
          <Col md={9}>{isAuthenticated && children}</Col>
        </Row>
      </Container>
    );
  }
}

export default Layout;
