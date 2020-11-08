import React, { useState } from "react";

import { Button, Col } from "react-bootstrap";

import "../../styles/components/card.css";
import closeIcon from "../../assets/icons/close.svg";
import favIcon from "../../assets/icons/star-filled.svg";
import favLineIcon from "../../assets/icons/star-line.svg";
import { toDateString } from "../../utils/generalUtils";

const Card = (props) => {
  const [detailHidden, setdetailHidden] = useState(true);
  const [markFav, setMarkFav] = useState(false);

  const handleToggleDetail = () => {
    setdetailHidden(!detailHidden);
  };

  const handleToggleMarkFav = () => {
    props.addFavAlbum(props);
    setMarkFav(!markFav);
  };

  return (
    <Col md={3}>
      <div className="card">
        {/* Image */}
        <div className="card-image waves-effect waves-block waves-light">
          <img
            alt="img"
            className="activator"
            src={props.artworkUrl100.replace("100x100", "300x300")}
          />
        </div>

        {/* Content */}
        <div className="card-content">
          <span className="card-title">
            {props.trackName || props.collectionName}
          </span>
          <span className={`right kind white-text teal`}>
            {props.kind || props.collectionType}
          </span>
          <p>
            <Button variant="link" onClick={handleToggleDetail}>
              View More
            </Button>

            {props.addFavAlbum && (
              <Button
                variant="link"
                onClick={handleToggleMarkFav}
                className="float-right"
              >
                <img
                  src={markFav ? favIcon : favLineIcon}
                  alt="fav"
                  width="17"
                />
              </Button>
            )}
          </p>
        </div>

        {/* Details */}
        {!detailHidden && (
          <div className="card-reveal">
            <div className="card-title">
              <h5>
                <Button
                  variant="link"
                  onClick={handleToggleDetail}
                  className="float-right"
                >
                  <img src={closeIcon} alt="close" width="30" />
                </Button>
                {props.trackName || props.collectionName}
              </h5>
            </div>

            <div>
              <b>Type:</b> {props.collectionType}
            </div>
            <div>
              <b>Genre:</b> {props.primaryGenreName}
            </div>
            <div>
              <b>Artist:</b> {props.artistName}
            </div>
            <div>
              <b>Country:</b> {props.country}
            </div>
            <div>
              <b>Release Date:</b> {toDateString(props.releaseDate)}
            </div>
            <div>
              <b>Total Tracks:</b> {props.trackCount}
            </div>
            <div>
              <b>Price:</b> ${props.collectionPrice}
            </div>
          </div>
        )}
      </div>
    </Col>
  );
};

export default Card;
