import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import boxOpen from "../assets/img/box-open.svg";
import eye from "../assets/img/eye.svg";
import device from "../assets/img/device.svg";
import colorSharp from "../assets/img/color-sharp.png";
import spanner from "../assets/img/spanner.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>为什么选择一饼智投？</h2>
              <p>
                点击注册，开箱即用，在易用性、稳定性和实用性上，我们的产品始终是领跑者。
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={boxOpen} alt="Image" />
                  <h5>
                    无代码/低代码操作，
                    <br />
                    开箱即用
                  </h5>
                </div>
                <div className="item">
                  <img src={eye} alt="Image" />
                  <h5>
                    可视化信息
                    <br />
                    拒绝繁杂
                  </h5>
                </div>
                <div className="item">
                  <img src={device} alt="Image" />
                  <h5>
                    多端同步操作
                    <br />
                    方便快捷
                  </h5>
                </div>
                <div className="item">
                  <img src={spanner} alt="Image" />
                  <h5>
                    DIY 自主交易
                    <br />
                    私人定制
                  </h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
