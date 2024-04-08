import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
// import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    userName: "",
    email: "",
    phone: "",
    verifyCode: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("登录/注册");
  const [status, setStatus] = useState({});
  const verifyButtonStyle = {
    marginLeft: "16px",
    marginTop: "8px",
  };

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("请求中……");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("登录/注册");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: "Message sent successfully" });
    } else {
      setStatus({
        succes: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>开始您的 AIGC 投资之旅</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="text"
                          value={formDetails.userName}
                          placeholder="用户名/Username"
                          onChange={(e) =>
                            onFormUpdate("userName", e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="电话号码/Phone number"
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} sm={8} className="px-1">
                        <div>
                          <input
                            type="text"
                            value={formDetails.verifyCode}
                            placeholder="验证码/Verify code"
                            onChange={(e) =>
                              onFormUpdate("verifyCode", e.target.value)
                            }
                          />
                          <button type="button" style={verifyButtonStyle}>
                            <span>{"发送验证码"}</span>
                          </button>
                        </div>
                      </Col>

                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="电子邮箱/Email（选填，仅用作接收一饼智投订阅消息）"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        {/* <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea> */}
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
