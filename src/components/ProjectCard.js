import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <NavLink exact to={url}>
            {title}
          </NavLink>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
