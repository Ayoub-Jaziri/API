import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { Container, Jumbotron, Row } from "reactstrap";
import { Spinner } from "react-bootstrap";
// import { list } from "../const/Const";

function Profile({ login }) {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  // const user = list.find((user) => user.id == userId);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => setUser(res.data))
      .then(() =>
        setTimeout(() => {
          setLoading(false);
        }, 5000)
      )
      .catch((err) => console.log(err));
  }, [userId]);
  return (
    <>
      {loading ? (
        <>
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
          <Spinner animation="grow" variant="light" />
          <Spinner animation="grow" variant="dark" />
        </>
      ) : (
        <>
          {login ? (
            <Container>
              <Jumbotron>
                <Row className="d-flex justify-content-center align-items-center">
                  <p
                    style={{
                      width: "100px",
                      height: "100px",
                      fontSize: "1.5em"
                    }}
                    className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
                  >
                    {user.name[0]}
                  </p>
                  {/* check if the user and the user.name  is truthy  */}

                  <h1 className="display-3 col">{user.name}</h1>
                  {/* check if the user and the user.name  is truthy  */}

                  <p className="lead text-center col">
                    {/* check if the user and the user.address  is truthy   */}
                    {user.address.street},{user.address.suite},
                    {user.address.city}
                    {/* access to the nested object element  with es11 style user?.address?.street   => value of street */}
                  </p>
                </Row>
              </Jumbotron>
            </Container>
          ) : (
            <Redirect to="/" />
          )}
        </>
      )}
    </>
  );
}

export default Profile;
