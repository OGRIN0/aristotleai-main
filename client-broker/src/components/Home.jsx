import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./nav.css";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null); // Reference to modal overlay

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/get");

      if (response.data) {
        setData(response.data);
      } else {
        // Handle case where response data is empty
        console.error("Empty data returned from the server");
        // You can choose to set some default data or show an error message
      }
    } catch (error) {
      // Handle error if request fails
      console.error("Error fetching data:", error.message);
      // You can choose to show an error message to the user or retry the request
    }
  };

  useEffect(() => {
    loadData();
  }, [data]);

  const deleteItem = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      await axios.delete(`http://localhost:5000/api/remove/${id}`);
      loadData();
    }
  };

  const updateItem = (id) => {
    navigate(`/addtask?id=${id}`);
  };

  const openModal = (imageData) => {
    setSelectedImage(imageData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  // Close modal when clicking outside the modal content
  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);

  return (
    <>
      {data && (
        <div style={{ marginTop: "80px", marginLeft: "300px" }} className="App">
          {data.map((item, index) => (
            <div
              key={index}
              className="box"
              style={{ display: "flex", alignItems: "center" }}
            >
              {/* Image Container */}
              <div className="image" style={{ marginRight: "20px" }}>
                <img
                  src="src\assets\img.png"
                  alt=""
                  style={{ width: "150px", height: "150px" }}
                />
              </div>

              {/* Broker Details */}
              <div className="broker-details">
                <div className="status">
                  <div className="label">BROKER DETAILS</div>
                </div>
                <br />
                <div className="project">
                  <div className="tot1">
                    <div className="label">Broker ID : {item.brokerid}</div>
                  </div>
                </div>
                <div className="leader">
                  <div className="value">
                    <div className="label">Broker Name : {item.brokername}</div>
                  </div>
                </div>
              </div>

              {/* Display image if available */}
              {item.image_data && (
                <div>
                  <button
                    className="button-29"
                    onClick={() => openModal(item.image_data)}
                  >
                    <FontAwesomeIcon icon={faImage} />
                    View Image
                  </button>
                  <br />
                  <br />
                </div>
              )}

              <div>
                <div style={{ display: "", gap: "", justifyContent: "" }}>
                  <div className="delete1">
                    <button className="" onClick={() => deleteItem(item.id)}>
                      <FontAwesomeIcon
                        style={{ width: "100%" }}
                        icon={faTrash}
                      />
                    </button>
                  </div>
                  <div className="edit">
                    <button className="" onClick={() => updateItem(item.id)}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {data.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          No data available
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" ref={modalRef}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img
              src={`data:image/jpeg;base64,${selectedImage}`}
              alt="Broker Image"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
