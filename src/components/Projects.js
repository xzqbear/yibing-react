import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import productWeb from "../assets/img/product-web.jpg";
import productWeixin from "../assets/img/product-weixin.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  // projects 包含数据
  const projects = [
    {
      title: "网页端",
      description: "即刻使用，无需等待",
      imgUrl: productWeb,
      url: "/chat",
    },
    {
      title: "小程序",
      description: "方便快捷，无需下载",
      imgUrl: productWeixin,
      url: "/chat",
    },
  ];
  return (
    <section className="project" id="project">
      {/* 产品链接跳转 */}
      <a id="download"></a>
      <Container>
        <Row>
          <Col>
            <h2>产品下载</h2>
            <p>多端使用，方便快捷</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web & Windows</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Mac & iPhone</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Linux</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">Lorem</Tab.Pane>

                <Tab.Pane eventKey="third">Lorem</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
