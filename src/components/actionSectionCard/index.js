import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image/";

import "./styles.css";
import ElevatedContainer from "../elevatedContainer";

const ActionSectionCard = (props) => {
  const slideImages = props.images;

  return (
    <ElevatedContainer>
      <div className="action-section-card-container">
        <h4 className="action-section-card-h4">{props.title}</h4>
        <h5 className="action-section-card-h5">{props.subtitle}</h5>
        {/* <div>
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="slide-div" key={index}>
                <img className="slide-img" src={slideImage} />
              </div>
            ))}
          </Slide>
        </div> */}
        <div className="action-section-card-a-div" >
          <a href="/noticias" className="action-section-card-a">
            Clique aqui para ver as últimas notícias
          </a>
        </div>
      </div>
    </ElevatedContainer>
  );
};

export default ActionSectionCard;
