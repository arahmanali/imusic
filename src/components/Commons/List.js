import React from "react";
import { Row } from "react-bootstrap";

import "../../styles/components/list.css";
import Card from "./Card";

const List = ({ results, resultCount, addFavAlbum }) => (
  <Row>
    {resultCount > 0 &&
      results &&
      results.map((item, i) => (
        <Card key={item.trackId || i} {...item} addFavAlbum={addFavAlbum} />
      ))}
  </Row>
);

export default List;
