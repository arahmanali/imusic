import React, { useState } from "react";

import { FormControl, InputGroup, Button, Row, Col } from "react-bootstrap";

import List from "../Commons/List";

const Dashboard = ({ getAlbums, addFavAlbum, albums }) => {
  const [query, setQuery] = useState("");

  const handleGetAlbums = () => {
    getAlbums({ query });
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    if (e.code === "Enter") {
      getAlbums({ query });
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <h1 className="heading">Welcome to iMusic</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup className="mb-4">
            <FormControl
              placeholder="Search artist"
              aria-label="Search artist"
              aria-describedby="basic-addon2"
              onKeyUp={handleQueryChange}
            />
            <InputGroup.Append>
              <Button variant="outline-secondary" onClick={handleGetAlbums}>
                Search
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>

      <List {...albums} addFavAlbum={addFavAlbum} />
    </div>
  );
};

export default Dashboard;
