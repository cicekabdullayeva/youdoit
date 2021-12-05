import React from "react";
// import Aux from "../../hoc/Auxiliary";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/Login";

const optionsLang = [
  { value: "az", label: "AZ" },
  { value: "en", label: "EN" },
  { value: "ru", label: "RU" },
];

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLang: null,
      email: "",
      password: "",
      passwordShown: false,
      validated: false,
    };

    this.getInputValue = this.getInputValue.bind(this);
  }
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      window.location.replace("/Chat");
    }
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  getInputValue = (stateVar, event) => {
    this.setState({
      [stateVar]: event.target.value,
    });
  };

  togglePassword = () => {
    this.setState({
      passwordShown: !this.state.passwordShown,
    });
  };

  setLang = (selectedLang) => {
    this.setState({ selectedLang });
  };

  sendData = (event) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   console.log("getmelidir");
    event.preventDefault();
    let self = this;
    let data = {
      username: self.state.email,
      password: self.state.password,
    };
    axiosInstance({
      method: "post",
      url: "/users/authenticate",
      responseType: "json",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": "az",
      },
      data: data,
    })
      .then((res) => {
        console.log(res.data);
        // if (res.data.success) {
        window.location.replace("/Chat");
        localStorage.setItem("token", res.data.token);
        // }
      })
      .catch(function (response) {
        console.log(response);
      });
    // }
    // this.setState({
    //   validated: true,
    // });
  };

  render() {
    const customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: "#040647",
        backgroundColor: state.isSelected
          ? "rgba(4, 6, 71, 0.1)"
          : "transparent",
        padding: "10px",
        margin: "0",
        fontSize: "16px",
        "&:first-of-type": {
          borderRadius: "6px 6px 0 0",
        },
        "&:hover": {
          backgroundColor: "#E4E4E4",
        },
        "&:last-child": {
          borderBottom: "none",
          borderRadius: "0 0 6px 6px",
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }),

      indicatorSeparator: () => {},

      indicatorsContainer: (provided, state) => ({
        ...provided,
        width: "15px",
      }),

      control: (provided) => ({
        ...provided,
        minHeight: "45px",
        fontSize: "14px",
        padding: "0",
        margin: "0",
        color: "#66615b",
        backgroundColor: "transparent",
        boxShadow: "none",
        border: "none",
      }),

      container: (provided) => ({
        ...provided,
        width: "45px",
      }),

      menu: (provided) => ({
        ...provided,
        borderRadius: "6px",
        padding: "0",
        margin: "0",
        borderColor: "red",
        width: "47px",
      }),

      dropdownIndicator: (defaultStyles) => ({
        ...defaultStyles,
        "svg path": {
          fill: "#040647",
        },

        svg: {
          width: "18px",
        },
      }),

      menuList: (base) => ({
        ...base,
        padding: 0,
        borderColor: "red",
      }),
    };
    return (
      <>
        <section className="sign-up login">
          <Container fluid>
            <Row>
              <Col className="left d-none d-lg-block" xs lg={6}>
                <Row>
                  <Col xl={{ span: 8, offset: 2 }} lg={{ span: 10, offset: 1 }}>
                    <div className="logo">
                      <Link to="/">
                        <img
                          src={require("../../assets/img/logo.svg").default}
                          alt="special"
                        />
                      </Link>
                    </div>
                    <div className="short-desc">
                      Discover the world’s top <br /> Designers & <br />
                      Creatives.Discover the <br /> world’s top Designers &{" "}
                      <br /> Creatives.
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="right">
                <div className="login-right-top flex">
                  <Link to="/">
                    <div className="back btn-gray flex-vertical-center">
                      <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z"
                          fill="rgba(4, 6, 71, .9)"
                        />
                      </svg>
                      Home
                    </div>
                  </Link>
                  <Select
                    styles={customStyles}
                    options={optionsLang}
                    value={this.state.selectedLang}
                    onChange={this.setLang}
                    placeholder="Az"
                  />
                </div>
                <div className="login-right-body">
                  <Row>
                    <Col
                      xl={{ span: 8, offset: 2 }}
                      lg={{ span: 10, offset: 1 }}
                      md={{ span: 8, offset: 2 }}
                    >
                      <h2 className="text-center">Log in to Youdoit</h2>
                      <div className="create-account text-center">
                        New user? <Link to="/Register"> Create an account</Link>
                      </div>
                      <Form
                        className="form-list"
                        onSubmit={this.sendData}
                        noValidate
                        validated={this.state.validated}
                      >
                        <Form.Group controlId="formBasicName">
                          <span className="input-title">Email</span>
                          <Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Emailinizi daxil edin"
                              required
                              onChange={(event) =>
                                this.getInputValue("email", event)
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              Email boş buraxıla bilməz
                            </Form.Control.Feedback>
                          </Form.Label>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                          <span className="input-title">Password</span>
                          <Form.Label>
                            <Form.Control
                              required
                              type={
                                this.state.passwordShown ? "text" : "password"
                              }
                              placeholder="Password daxil edin"
                              onChange={(event) =>
                                this.getInputValue("password", event)
                              }
                            />
                            <Form.Control.Feedback type="invalid">
                              Şifrə boş buraxıla bilməz
                            </Form.Control.Feedback>
                            <Button
                              type="button"
                              className="btn-transparent password-button"
                              onClick={this.togglePassword}
                            >
                              {this.state.passwordShown ? (
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.8983 7.68882C15.7554 7.49329 12.3496 2.90112 7.99992 2.90112C3.65019 2.90112 0.244313 7.49329 0.101531 7.68863C-0.0338438 7.87413 -0.0338438 8.12573 0.101531 8.31123C0.244313 8.50676 3.65019 13.0989 7.99992 13.0989C12.3496 13.0989 15.7554 8.50673 15.8983 8.31138C16.0339 8.12592 16.0339 7.87413 15.8983 7.68882ZM7.99992 12.044C4.79588 12.044 2.02085 8.99607 1.19938 7.99966C2.01979 7.00238 4.78901 3.95606 7.99992 3.95606C11.2038 3.95606 13.9787 7.00344 14.8005 8.00038C13.9801 8.99763 11.2108 12.044 7.99992 12.044Z"
                                    fill="#181818"
                                    fillOpacity="0.8"
                                  />
                                  <path
                                    d="M8.00005 4.83521C6.25499 4.83521 4.83521 6.25499 4.83521 8.00005C4.83521 9.74512 6.25499 11.1649 8.00005 11.1649C9.74511 11.1649 11.1649 9.74512 11.1649 8.00005C11.1649 6.25499 9.74511 4.83521 8.00005 4.83521ZM8.00005 10.1099C6.83661 10.1099 5.89017 9.16346 5.89017 8.00005C5.89017 6.83665 6.83664 5.89018 8.00005 5.89018C9.16345 5.89018 10.1099 6.83665 10.1099 8.00005C10.1099 9.16346 9.16348 10.1099 8.00005 10.1099Z"
                                    fill="#181818"
                                    fillOpacity="0.8"
                                  />
                                </svg>
                              ) : (
                                <svg
                                  width="16"
                                  height="14"
                                  viewBox="0 0 16 14"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M15.8907 6.66409C14.9196 5.39172 13.7532 4.28102 12.4348 3.37327L14.6896 1.11843C14.9166 0.899192 14.9229 0.537454 14.7037 0.310447C14.4844 0.0834399 14.1227 0.0771453 13.8957 0.296384C13.8909 0.300971 13.8863 0.305659 13.8816 0.310447L11.4182 2.77156C10.3697 2.19447 9.19663 1.88071 7.99999 1.85727C3.65717 1.85727 0.252076 6.46752 0.109209 6.66406C-0.0364031 6.86438 -0.0364031 7.13572 0.109209 7.33604C1.08038 8.60842 2.24679 9.71911 3.56516 10.6269L1.31033 12.8817C1.08333 13.1009 1.07703 13.4627 1.29627 13.6897C1.51551 13.9167 1.87725 13.923 2.10425 13.7038C2.10901 13.6992 2.1137 13.6945 2.11832 13.6897L4.58171 11.2286C5.63025 11.8057 6.80332 12.1194 7.99996 12.1429C12.3428 12.1429 15.7479 7.53261 15.8907 7.33604C16.0364 7.13575 16.0364 6.86442 15.8907 6.66409ZM4.39602 9.79776C3.23195 9.02246 2.18853 8.07977 1.29949 7.00008C2.14062 5.98123 4.86858 3.00011 7.99999 3.00011C8.89091 3.01812 9.76683 3.23278 10.5651 3.62866L9.5731 4.62066C8.26062 3.7493 6.49023 4.10689 5.61887 5.41937C4.98412 6.37545 4.98412 7.61883 5.61887 8.5749L4.39602 9.79776ZM9.54283 6.26579C9.65466 6.49448 9.71329 6.74552 9.71426 7.00008C9.71426 7.94685 8.94676 8.71436 7.99999 8.71436C7.74543 8.71338 7.49439 8.65476 7.26571 8.54293L9.54283 6.26579ZM6.45715 7.73434C6.34532 7.50566 6.2867 7.25461 6.28573 7.00005C6.28573 6.05329 7.05323 5.28578 7.99999 5.28578C8.25456 5.28675 8.5056 5.34538 8.73428 5.45721L6.45715 7.73434ZM7.99999 11C7.10908 10.982 6.23319 10.7674 5.43489 10.3715L6.42689 9.37947C7.73937 10.2508 9.50975 9.89325 10.3811 8.58076C11.0159 7.62469 11.0159 6.38131 10.3811 5.42523L11.604 4.20238C12.768 4.97768 13.8115 5.9204 14.7005 7.00005C13.8593 8.01894 11.1314 11 7.99999 11Z"
                                    fill="rgba(24, 24, 24, 0.8)"
                                  />
                                </svg>
                              )}
                            </Button>
                          </Form.Label>
                        </Form.Group>
                        <Button className="btn-effect" type="submit">
                          Log in
                        </Button>
                        <div className="or flex-vertical-center">Or</div>
                        <ul className="socials list-unstyled">
                          <li className="relative">
                            <Link to="/" class="btn-effect">
                              <span className="flex">Continue with Google</span>
                            </Link>
                          </li>
                          <li className="relative">
                            <Link to="/Register" class="btn-effect">
                              <span className="flex">Register</span>
                            </Link>
                          </li>
                        </ul>
                      </Form>
                      <div className="our-customers">
                        <p>Our customers:</p>
                        <ul className="list-unstyled flex">
                          <li>
                            <img
                              src={
                                require("../../assets/img/partner1.svg").default
                              }
                              alt="special"
                            />
                          </li>
                          <li>
                            <img
                              src={
                                require("../../assets/img/partner2.svg").default
                              }
                              alt="special"
                            />
                          </li>
                          <li>
                            <img
                              src={
                                require("../../assets/img/partner1.svg").default
                              }
                              alt="special"
                            />
                          </li>
                          <li>
                            <img
                              src={
                                require("../../assets/img/partner2.svg").default
                              }
                              alt="special"
                            />
                          </li>
                          <li>
                            <img
                              src={
                                require("../../assets/img/partner1.svg").default
                              }
                              alt="special"
                            />
                          </li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
