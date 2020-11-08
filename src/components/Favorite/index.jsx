import React, { useEffect } from "react";

import { Col, Row } from "react-bootstrap";

import List from "../Commons/List";

const Favorite = ({ getFavAlbums, albums }) => {
  useEffect(() => {
    console.log("fav albums: ", albums);
    // getFavAlbums();
  });

  return (
    <div>
      <Row>
        <Col>
          <h1 className="heading">Favorites</h1>
        </Col>
      </Row>

      <List {...albums} />
    </div>
  );
};

export default Favorite;
