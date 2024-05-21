import React from "react";
import { useNavigate } from "react-router";

function SubmitMessage() {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="submit-message-container">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4436/4436481.png"
        className="submit-message-icon"
        alt=""
      />
      <h2 className="submit-message-heading">
        Thank you for giving the feedback
      </h2>
      <h4 className="submit-message-subheading">
        We will work towards improving your experience
      </h4>
      <button
        className="submit-message-button"
        onClick={() => {
          handleClose();
        }}
      >
        Close
      </button>
    </div>
  );
}

export default SubmitMessage;
