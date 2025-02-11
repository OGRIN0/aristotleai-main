import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare, faImage } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./table.css";
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
  }, []);

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
    console.log("Image data:", imageData); // Debugging
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
      <style>
        {`
          .modal1 {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
            z-index: 999; /* Ensure modal is above all content */
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal-content1 {
            background-color: white;
            padding: 50px;
            border-radius: 10px;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2); /* Add shadow for depth */
            width: 5000px; /* Adjust width as needed */
          }

          .close {
            position:relative;
            cursor: pointer;
            font-size: 30px;
            color: #555;
          }

          /* Box */
          .box {
            border: 3px solid #ccc;
            padding: 20px;
            margin: 20px auto; /* Center the box horizontally */
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); /* Add shadow for depth */
            max-width: 60%;
            padding: 3%;
            margin-left: 4%;
            position: relative;
            display: flex;
            flex-direction: column; /* Arrange content in a column */
          }

          /* Labels and Values */
          .label {
            font-weight: bold;
          }

          .value {
            font-weight: bold;
          }

          /* Delete Button */
          button {
            background-color: #ff5722;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
            margin-top: auto; 
          }

          button:hover {
            background-color: #e04109;
          }

          /* Status */
          .status {
            background-color: #a89c9c;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 20px rgba(230, 13, 13, 0.1); /* Add shadow for depth */
          }

          /* Broker Details */
          .broker-details {
            margin-left: 20px;
          }

          .delete {
            position: absolute;
            top: 5px; /* Adjust as needed */
            right: 5px; /* Adjust as needed */
          }

          .edit {
            position: absolute;
            top: 5px; /* Adjust as needed */
            left: 5px; /* Adjust as needed */
          }
          /* 
body {
  margin: 0;
  padding: 0;
  background-color: #1d263400;
  color: #b8a6cdbd;
  font-family: 'Montserrat', sans-serif;
} */

.icon {
  vertical-align: middle;
  line-height: 1px;
  font-size: 20px;
}
.icon_header {
  vertical-align: middle;
  line-height: 1px;
  font-size: 26px;
}
.icon, .icon_header {
  margin-right: 5px;
}

.close_icon {
  color: red;
  margin-left: 30px;
  margin-top: 10px;
  cursor: pointer;
}

.grid-container {
  display: grid;
  grid-template-columns: 260px 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas:
    'sidebar header header header'
    'sidebar main main main';
  height: 100vh;
}

/* Header  */
.header {
  grid-area: header;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  box-shadow: 0 6px 7px -3px rgba(0, 0, 0, 0.35);
  width: 100%;
  background-color: #1d2634;
}
.hc{
  /* margin-left: 140vh; */
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: space-between;

}

.menu-icon {
  display: none;
}
/* End Header  */

/* Sidebar  */
#sidebar {
  grid-area: sidebar;
  height: 100%;
  width: 17%;
  background-color: #b8a6cd2b;
  overflow-y: auto;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  box-shadow:0px 4px 8px rgba(0,0,0,4);
  display: flex;
}

.sidebar-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px 0px 30px;
  margin-bottom: 30px;
}

.sidebar-title > span {
  display: none;
}

.sidebar-brand {
  margin-top: 15px;
  font-size: 20px;
  font-weight: 700;
  color: black;
}

.sidebar-list {
  padding: 0;
  list-style-type: none;
}

.sidebar-list-item {
  padding: 20px 20px 20px 20px;
  font-size: 18px;
  
}

.sidebar-list-item:hover {
  background-color: rgb(194, 198, 210);
  cursor: pointer;
}

.sidebar-list-item > a {
  text-decoration: none;
  color: black;
}

.sidebar-responsive {
  display: inline !important;
  position: absolute;
  /*
    we want the z-index of the sidebar higher so that
    the charts are not showing over the sidebar 
    on small screens
  */
  z-index: 12 !important;
}
.header-right{
  color: whitesmoke;
  font-size: 18px;
  
}

/* End Sidebar  */


/* Main  */  
.main-container {
  grid-area: main;
  overflow-y: auto;
  padding: 20px 20px;
  color: rgba(255, 255, 255, 0.95);
}

.main-title {
  display: flex;
  justify-content: space-between;
}

.main-cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: 15px 0;
}

/* .card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 15px;
  border-radius: 5px;
}

.card:first-child {
  background-color: #2962ff;
}

.card:nth-child(2) {
  background-color: #ff6d00;
}

.card:nth-child(3) {
  background-color: #2e7d32;
}

.card:nth-child(4) {
  background-color: #d50000;
}
  
.card-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-inner > .card_icon {
  font-size: 25px;
} */

.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 60px;
  height: 300px;
}

/* End Main  */


/* Medium <= 992px */
  
@media screen and (max-width: 992px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas:
      'header'
      'main';
  }

  #sidebar {
    display: none;
  }

  .menu-icon {
    display: inline;
  }

  .sidebar-title > span {
    display: inline;
  }
}
/* Small <= 768px */
.header-left {
  position: relative;
  display: flex;
  align-items: center;
}

.header-search-box {
  margin-right: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

.header-search-box::placeholder {
  color: #aaa;
}

.header-search-box:focus {
  outline: none;
  border-color: #007bff;
}


  
@media screen and (max-width: 768px) {
  .main-cards {
    grid-template-columns: 1fr;
    gap: 10px;
    margin-bottom: 0;
  }

  .charts {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
}

/* Extra Small <= 576px */

@media screen and (max-width: 576px) {
  .header-left {
    display: none;
  }
}
        `}
        
      </style>
      
      {data && (
        <div style={{ marginTop: "80px", marginLeft: "300px" }} className="App1">
          {data.map((item, index) => (
            <div key={index} className="box" style={{ display: "flex", alignItems: "center" }}>
              {/* Image Container */}
              <div className="image" style={{ marginRight: "20px" }}>
                <img src="assets/crud_image/img.png" alt="" style={{ width: "150px", height: "150px" }} />
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
                  <button className="button-291" onClick={() => openModal(item.image_data)}>
                    <FontAwesomeIcon icon={faImage} />
                    View Image
                  </button>
                  <br />
                  <br />
                </div>
              )}

              <div>
                <div style={{ display: "", gap: "", justifyContent: "" }}>
                  <div className="delete">
                    <button className="button" onClick={() => deleteItem(item.id)}>
                      <FontAwesomeIcon style={{ width: "100%" }} icon={faTrash} />
                    </button>
                  </div>
                  <div className="edit">
                    <button className="button" onClick={() => updateItem(item.id)}>
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
        <div style={{ display: "flex", justifyContent: "center" }}>No data available</div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal1" ref={modalRef}>
          <div className="modal-content1">
          <span className="close" onClick={closeModal}>&times;</span>
            <img src={`data:image/jpeg;base64,${selectedImage}`} alt="Broker Image" style={{ maxWidth: "100%", maxHeight: "100%", margin: "0 auto", display: "block" }} ></img>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
