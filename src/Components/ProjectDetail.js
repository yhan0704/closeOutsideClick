import React from "react";
import Carousel from "react-elastic-carousel";

export default function ProjectDetail(props) {
  const {
    name,
    webImage,
    built,
    paragraph,
    demo,
    front,
    back,
  } = props.location.state;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
  ];

  return (
    <div className="projectDetailContainer">
      <div className="DetailImage">
        <Carousel breakPoints={breakPoints}>
          {webImage.map((image) => {
            return <img src={image.url} alt={image.name} />;
          })}
        </Carousel>
      </div>
      <div className="DetailInform">
        <h1 style={{ paddingTop: "10px" }}>{name}</h1>
        <div className="demoFrontBack">
          {demo ? (
            <a rel="noopener noreferrer" target="_blank" href={demo}>
              Demo|
            </a>
          ) : null}
          <a rel="noopener noreferrer" target="_blank" href={front}>
            Front-End
          </a>
          {back ? (
            <a rel="noopener noreferrer" target="_blank" href={back}>
              |Back-End
            </a>
          ) : null}
        </div>
        <div className="contents">
          <div className="unorderLink">
            <h2 style={{ textAlign: "center", marginBottom: "2%" }}>
              Built with:
            </h2>
            <div className="builtWith">
              {built.map((built, index) => (
                <ul key={index}>
                  <li>{built}</li>
                </ul>
              ))}
            </div>
            <br />
          </div>
          <div className="phara">
            {paragraph.map((para, index) => (
              <h3>
                <p key={index}>{para}</p>
              </h3>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
