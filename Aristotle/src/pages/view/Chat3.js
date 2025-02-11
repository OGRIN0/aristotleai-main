
import React, { Component } from 'react';
import AdminLayout from '../../component/AdminLayout';
const Home = () => {
  return (<>
  <section style={{ backgroundColor: "rgb(31 41 55)" }}>
  <div className="container py-5">
    <div className="row d-flex justify-content-center">
      <div className="col-md-12">
        <div className="card" id="chat1" style={{ borderRadius: 15 }}>
          <div className="card-body">
            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: 45, height: "100%" }}
              />
              <div
                className="p-3 ms-3"
                style={{
                  borderRadius: 15,
                  backgroundColor: "rgba(57, 192, 237, 0.2)"
                }}
              >
                <p className="small mb-0">
                  Hello and thank you for visiting MDBootstrap. Please click the
                  video below.
                </p>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-end mb-4">
              <div
                className="p-3 me-3 border"
                style={{
                  borderRadius: 15,
                  backgroundColor: "rgb(251, 251, 251)"
                }}
              >
                <p className="small mb-0">
                  Thank you, I really like your product.
                </p>
              </div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                alt="avatar 1"
                style={{ width: 45, height: "100%" }}
              />
            </div>
            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: 45, height: "100%" }}
              />
              <div className="ms-3" style={{ borderRadius: 15 }}>
                <div className="bg-image">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp"
                    alt="video"
                    style={{ borderRadius: 15 }}
                  />
                  <a href="#!">
                    <div className="mask" />
                  </a>
                </div>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: 45, height: "100%" }}
              />
              <div
                className="p-3 ms-3"
                style={{
                  borderRadius: 15,
                  backgroundColor: "rgba(57, 192, 237, 0.2)"
                }}
              >
                <p className="small mb-0">...</p>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: 45, height: "100%" }}
              />
              <div
                className="p-3 ms-3"
                style={{
                  borderRadius: 15,
                  backgroundColor: "rgba(57, 192, 237, 0.2)"
                }}
              >
                <p className="small mb-0">...</p>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: 45, height: "100%" }}
              />
              <div
                className="p-3 ms-3"
                style={{
                  borderRadius: 15,
                  backgroundColor: "rgba(57, 192, 237, 0.2)"
                }}
              >
                <p className="small mb-0">...</p>
              </div>
            </div>
            <div className="d-flex flex-row justify-content-start mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                alt="avatar 1"
                style={{ width: 45, height: "100%" }}
              />
              <div
                className="p-3 ms-3"
                style={{
                  borderRadius: 15,
                  backgroundColor: "rgba(57, 192, 237, 0.2)"
                }}
              >
                <p className="small mb-0">...</p>
              </div>
            </div>
            <div className="form-outline">
              <textarea
                className="form-control"
                id="textAreaExample"
                rows={4}
                defaultValue={""}
              />
              <label className="form-label" htmlFor="textAreaExample">
                Type your message
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 
</>)

};

export default Home;
