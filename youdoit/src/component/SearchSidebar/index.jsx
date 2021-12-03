import { Col, Button, InputGroup, FormControl, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
// import Person from "../Person";
const SearchSidebar = ({ setSearchSidebar = () => {} }) => {
  const [searchPeople, setSearchPeople] = useState("");
  const [show, setshow] = useState(false);
  const [userData, setUserData] = useState([]);
  // let newUserData = [];
  useEffect(() => {
    console.log("select");
    if (window.socket) {
      console.log(window.socket);
      window.socket.on("search", (search) => {
        // console.log("search", search);
        setUserData(search);
        // console.log(userData);
      });
    } else {
      console.log("baglanti yoxdur");
    }
  }, [userData]);

  useEffect(() => {
    // console.log("Search", searchPeople);
    window.socket.emit("search", searchPeople);
    setshow(true);
  }, [searchPeople, show]);
  return (
    <>
      <Col className="chat-message" xs={3}>
        <div className="d-flex w-100 align-items-center">
          <Button
            variant="light"
            onClick={() => {
              setSearchSidebar(false);
            }}
          >
            <svg
              width="13"
              height="20"
              viewBox="0 0 13 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.3994 2.7325L5.14775 10L12.3994 17.2675L10.1669 19.5L0.666912 10L10.1669 0.5L12.3994 2.7325Z"
                fill="#193651"
              />
            </svg>
          </Button>
          <h2 className="mb-0">Şəxslər</h2>
        </div>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Şəxslərdə axtar..."
            onChange={(event) => {
              setSearchPeople(event.target.value);
            }}
          />
          <InputGroup.Text id="name">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.4316 11.9218C9.46375 11.9218 11.9218 9.46375 11.9218 6.4316C11.9218 3.39945 9.46375 0.941406 6.4316 0.941406C3.39945 0.941406 0.941406 3.39945 0.941406 6.4316C0.941406 9.46375 3.39945 11.9218 6.4316 11.9218Z"
                stroke="#0F2351"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0589 15.0584L10.353 10.3525"
                stroke="#0F2351"
                strokeOpacity="0.6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </InputGroup.Text>
        </InputGroup>

        <div className="messages-container">
          {userData?.length > 0 &&
            userData.map((user) => {
              //return <div>{JSON.stringify(user)}</div>;
              //return <Person name={user.fullname} id={user.id} />;
              return (
                <div className="message" key={user.id}>
                  <Image src="https://picsum.photos/200/300" roundedCircle />
                  <div className="right-side">
                    <h3 className="from-who">{user.fullname}</h3>
                    {/* <p className="message-content">Bu gün işəgələcəksən?</p> */}
                    <Button
                      className="add btn-transparent"
                      onClick={() => {
                        window.socket.emit("addContact", { user_id: user.id });
                        window.socket.on("addContact", (addContact) => {
                          console.log(addContact);
                        });
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.2298 12.0426C16.7686 11.8234 16.298 11.6345 15.8192 11.4763C17.37 10.3123 18.375 8.45883 18.375 6.375C18.375 2.85984 15.5152 0 12 0C8.48478 0 5.62498 2.85984 5.62498 6.375C5.62498 8.46113 6.63223 10.3164 8.1859 11.4802C6.7624 11.9489 5.4267 12.6781 4.25764 13.6397C2.11395 15.403 0.623466 17.8625 0.0608257 20.5651C-0.115518 21.412 0.0957476 22.2818 0.640341 22.9515C1.18226 23.6178 1.98584 24 2.84497 24H14.3906C14.9084 24 15.3281 23.5803 15.3281 23.0625C15.3281 22.5447 14.9084 22.125 14.3906 22.125H2.84497C2.44475 22.125 2.20329 21.9016 2.09501 21.7685C1.90803 21.5385 1.83565 21.2393 1.89645 20.9473C2.86934 16.2741 6.99134 12.8603 11.7515 12.7452C11.8339 12.7484 11.9167 12.75 12 12.75C12.084 12.75 12.1677 12.7484 12.2509 12.7451C13.7097 12.7793 15.1127 13.1123 16.4249 13.7361C16.8926 13.9583 17.4518 13.7595 17.6741 13.2918C17.8963 12.8242 17.6975 12.2649 17.2298 12.0426ZM12.2286 10.8692C12.1526 10.8679 12.0763 10.8672 12 10.8672C11.9243 10.8672 11.8487 10.8679 11.7731 10.8693C9.39678 10.7508 7.49998 8.78025 7.49998 6.375C7.49998 3.89367 9.51865 1.875 12 1.875C14.4813 1.875 16.5 3.89367 16.5 6.375C16.5 8.77964 14.6041 10.7498 12.2286 10.8692Z"
                          fill="#3083DC"
                        />
                        <path
                          d="M23.0625 18.6094H20.4844V16.0312C20.4844 15.5135 20.0647 15.0938 19.5469 15.0938C19.0291 15.0938 18.6094 15.5135 18.6094 16.0312V18.6094H16.0312C15.5135 18.6094 15.0938 19.0291 15.0938 19.5469C15.0938 20.0647 15.5135 20.4844 16.0312 20.4844H18.6094V23.0625C18.6094 23.5803 19.0291 24 19.5469 24C20.0647 24 20.4844 23.5803 20.4844 23.0625V20.4844H23.0625C23.5803 20.4844 24 20.0647 24 19.5469C24 19.0291 23.5803 18.6094 23.0625 18.6094Z"
                          fill="#3083DC"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              );
            })}
          {/* <Person /> */}
        </div>
      </Col>
    </>
  );
};
export default SearchSidebar;
