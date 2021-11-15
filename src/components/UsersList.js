import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { Container, Row } from "reactstrap";
// import { list } from "../const/Const";
import UserCard from "./UserCard";

function UsersList({ login }) {
  const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((res) => setUsers(res))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {login ? (
        <Container>
          <Row>
            {users.map((user) => (
              <UserCard user={user} key={user.id} />
            ))}
          </Row>
        </Container>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default UsersList;
