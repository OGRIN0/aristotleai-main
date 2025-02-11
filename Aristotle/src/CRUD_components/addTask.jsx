import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";


function AddTask() {
  const [temp, settemp] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  var Id = queryParams.get("id");
  useEffect(() => {
    if (Id !== null && Id !== undefined) {
      axios
        .get(`http://localhost:5000/api/get/${Id}`)
        .then((resp) => {
          console.log("Response data:", resp.data);
          setState({ ...resp.data[0] });
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [Id]);

  const initialState = {
    brokerid: "",
    brokername: "",
    image_data: null, // Added for image upload
  };
  const [state, setState] = useState(initialState);

  const { id, brokerid, brokername, image_data } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("brokerid", brokerid);
    formData.append("brokername", brokername);
    formData.append("image", image_data); // Assuming image_data is a File object

    try {
      if (!Id) {
        await axios.post("http://localhost:5000/api/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setState({ ...state, image_data: null });
        alert("Added successfully!");
      } else {
        const fieldValue = formData.get("brokername"); // Replace "fieldName" with the name of the field you want to print
        console.log(fieldValue);
        await axios.put(`http://localhost:5000/api/put`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("Updated successfully");
        navigate("/homepage");
      }
      setState(initialState);
      settemp(temp + 1);
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const handleChange = (e) => {
    // setSelectedValue(e.target.value);

    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setState({ ...state, image_data: file });
  };
  return (
    <Container
      style={{
        border: "2px solid #ccc",
        boxShadow: "0px 4px 8px rgba(0,0,0,4)",
        color: "black",
       marginRight:"10%",
        maxWidth: "67%", // Adjust the maximum width of the container
        height: "60.5vh", // Adjust the height of the container
        marginTop: "100px",
        overflow:"hidden",
        
      }}
    >
      <Row>
      <Col
  md={6}
  style={{
    minHeight: "60vh",
    marginLeft: "-30px",

  }}
>
  {/* Empty container with blue-violet background color */}
  <img
    src="assets\crud_image\b1.jpg"
    alt="Broker Name"
    style={{  width: "100%", height: "100%" }}
  />
</Col>
        <Col md={6}>
          <Form onSubmit={handleSubmit} style={{ padding: "20px" }}>
            <Form.Control
              onChange={handleChange}
              type="hidden"
              name="id"
              value={temp}
            />
            <br />
            <br />
            <Form.Group controlId="formGroupBrokerID">
              <label htmlFor="brokerid"></label>
              <InputGroup>
                <InputGroup.Text>
                  <img
                    src="assets\crud_image\id_img.jpg"
                    alt="Broker Name"
                    style={{ maxWidth: "35px", maxHeight: "35px" }}
                  />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Broker ID"
                  name="brokerid"
                  value={brokerid}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formGroupBrokerName">
              <label htmlFor="brokername"></label>
              <InputGroup>
                <InputGroup.Text>
                  <img
                    src="assets\crud_image\name_img.jpg"
                    alt="Broker Name"
                    style={{ maxWidth: "30px", maxHeight: "30px" }}
                  />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Broker Name"
                  name="brokername"
                  value={brokername || ""}
                  onChange={handleChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="formGroupImage">
              <label htmlFor="image"></label>
              <InputGroup>
                <InputGroup.Text>
                  <img
                    src="assets\crud_image\home_img.jpg"
                    alt="Broker Name"
                    style={{ maxWidth: "49px", maxHeight: "49px" }}
                  />
                </InputGroup.Text>
                <Form.Control
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                />
              </InputGroup>
            </Form.Group>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "70px",
              }}
            >
              <Button
                type="submit"
                style={{
                  border: "2px solid #ccc",
                  boxShadow: "0px 4px 8px rgba(0,0,0,4)",
                  padding: "7px 20px",
                  background: "blue",
                  color: "#F2F0DF",
                  borderRadius: "100px",
                }}
              >
                {Id ? "Update" : "Save"}
              </Button>
              <Button
                type="button"
                onClick={() => navigate("/homepage")}
                style={{
                  border: "2px solid #ccc",
                  boxShadow: "0px 4px 8px rgba(0,0,0,4)",
                  padding: "7px 20px",
                  background: "#FFDB58",
                  color: "black",
                  borderRadius: "100px",
                }}
              >
                View
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default AddTask;
