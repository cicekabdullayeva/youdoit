import { Col, Button, InputGroup, FormControl, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import addContact from "../../Icons/addContact.svg";
import search from "../../Icons/search.svg";

// import Person from "../Person";
const SearchSidebar = ({ setSearchSidebar = () => {} }) => {
  const [searchPeople, setSearchPeople] = useState("");
  const [show, setshow] = useState(false);
  const [userData, setUserData] = useState([]);
  // let newUserData = [];
  useEffect(() => {
    if (window.socket) {
      console.log(window.socket);
      window.socket.on("search", (search) => {
        setUserData(search);
      });
    } else {
      console.log("baglanti yoxdur");
    }
  }, [userData]);

  useEffect(() => {
    window.socket.emit("search", searchPeople);
    setshow(true);
  }, [searchPeople, show]);
  return (
    <>
      <Col className="chat-message" xs={4}>
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
            <img src={search} alt="" />
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
                      <img src={addContact} alt="" />
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
