import React, { useState } from "react";
import Modal from "react-modal";

import "./ManageWorkspaces.css";
import Card from "../UI/Card";

Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    backgroundColor: "#464646bf",
  },
  content: {
    backgroundColor: "white",
    width: "50vw",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ManageWorkspaces = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#464646bf";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    let response = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Title of Project",
        description: "Project Description",
      }),
    });
    if (!response) {
      alert("Unable to create project, please try again later");
      closeModal();
      return
    }
    let response1 = await fetch("/api/projects/UTR", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "michaelklein1997@gmail.com",
        projectId: "3",
      }),
    });
    if (!response) {
      alert("Unable to create project, please try again later");
      closeModal()
      return
    }
    closeModal();
  };

  return (
    <Card className="Card__manageWorkspaces flex__column">
      <h2 className="h2__title--small--grey">YOUR WORKSPACES</h2>
      <hr style={{ margin: "10px 0 0 0" }} />
      <div className="flex__column buttons__manageworkspace">
        <button onClick={openModal}>Starting a new project?</button>
        <button>Add members to project</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Project"
      >
        <div className="flex__column">
          <h2 className="h2__title center" style={{ marginBottom: "7px" }}>
            Start a New Project
          </h2>
          <form
            className="flex__column modal__form"
            style={{ gap: "10px" }}
            onSubmit={submitHandler}
          >
            <label htmlFor="#projectNameInput">Project Name</label>
            <input id="projectNameInput" type="text" />
            <label htmlFor="#projectDescInput">Project Description</label>
            <textarea id="projectDescInput" rows="3" columns="10" />

            <div className="flex_row" style={{ gap: "13px", marginTop: "5px" }}>
              <button type="submit" className="btn--green">
                Create project
              </button>
              <button onClick={closeModal} className="btn--red">
                close
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </Card>
  );
};

export default ManageWorkspaces;
