import React, { useState } from "react";
import "./App.css";
import InfoIcon from "@mui/icons-material/Info";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { NavLink, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    serviceQuality: "",
    beverageQuality: "",
    cleanliness: "",
    overallExperience: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [value, setValue] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name, option) => {
    setFormData({ ...formData, [name]: option });
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!formData.customerName) {
      errors.customerName = "Please enter the value of the above field";
      formIsValid = false;
    }

    if (!formData.email) {
      errors.email = "Please enter the value of the above field";
      formIsValid = false;
    }

    if (!value) {
      errors.phone = "Please enter the value of the above field";
      formIsValid = false;
    }

    setFormErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const storedData = localStorage.getItem("feedbackData");
      let feedbackData = [];
      if (storedData) {
        feedbackData = JSON.parse(storedData);
      }
      feedbackData.push({ ...formData, phone: value });
      localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
      navigate("/submitted");
    }
  };

  return (
    <>
      <div className="container">
        <div className="heading-div">
          <h1>Aromatic bar</h1>
        </div>
        <div className="form-container">
          <form className="feedback-form">
            <div className="form-field">
              <label htmlFor="customerName">
                Customer Name<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                className="input-fields"
                id="customerName"
                name="customerName"
                placeholder="Example: Jon Snow"
                value={formData.customerName}
                onChange={handleInputChange}
              />
              {formErrors.customerName && (
                <div className="error">
                  <InfoIcon />
                  {formErrors.customerName}
                </div>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">
                Email<span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                className="input-fields"
                placeholder="Example: abc@example.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <div className="error" id="validation">
                  <InfoIcon />
                  {formErrors.email}
                </div>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="phone">
                Phone<span style={{ color: "red" }}>*</span>
              </label>
              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                international={true}
                className="PhoneInputInput"
                defaultCountry="IN"
                onChange={setValue}
              />
              {formErrors.phone && (
                <div className="error " id="validation">
                  <InfoIcon />
                  {formErrors.phone}
                </div>
              )}
            </div>
            <div className="form-field"></div>
            <div className="form-field">
              <label>
                Please rate the quality of the service you received from your
                host
                <span style={{ color: "red" }}>*</span>
              </label>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="serviceQualityExcellent"
                  name="serviceQuality"
                  value="Excellent"
                  checked={formData.serviceQuality === "Excellent"}
                  onChange={() =>
                    handleCheckboxChange("serviceQuality", "Excellent")
                  }
                />
                <label htmlFor="serviceQualityExcellent">Excellent</label>

                <input
                  type="checkbox"
                  id="serviceQualityGood"
                  name="serviceQuality"
                  value="Good"
                  checked={formData.serviceQuality === "Good"}
                  onChange={() =>
                    handleCheckboxChange("serviceQuality", "Good")
                  }
                />
                <label htmlFor="serviceQualityGood">Good</label>

                <input
                  type="checkbox"
                  id="serviceQualityFair"
                  name="serviceQuality"
                  value="Fair"
                  checked={formData.serviceQuality === "Fair"}
                  onChange={() =>
                    handleCheckboxChange("serviceQuality", "Fair")
                  }
                />
                <label htmlFor="serviceQualityFair">Fair</label>

                <input
                  type="checkbox"
                  id="serviceQualityBad"
                  name="serviceQuality"
                  value="Bad"
                  checked={formData.serviceQuality === "Bad"}
                  onChange={() => handleCheckboxChange("serviceQuality", "Bad")}
                />
                <label htmlFor="serviceQualityBad">Bad</label>
              </div>
              {formErrors.serviceQuality && (
                <div className="error">{formErrors.serviceQuality}</div>
              )}
            </div>

            <div className="form-field">
              <label>
                Please rate the quality of your beverage
                <span style={{ color: "red" }}>*</span>
              </label>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="beverageQualityExcellent"
                  name="beverageQuality"
                  value="Excellent"
                  checked={formData.beverageQuality === "Excellent"}
                  onChange={() =>
                    handleCheckboxChange("beverageQuality", "Excellent")
                  }
                />
                <label htmlFor="beverageQualityExcellent">Excellent</label>

                <input
                  type="checkbox"
                  id="beverageQualityGood"
                  name="beverageQuality"
                  value="Good"
                  checked={formData.beverageQuality === "Good"}
                  onChange={() =>
                    handleCheckboxChange("beverageQuality", "Good")
                  }
                />
                <label htmlFor="beverageQualityGood">Good</label>

                <input
                  type="checkbox"
                  id="beverageQualityFair"
                  name="beverageQuality"
                  value="Fair"
                  checked={formData.beverageQuality === "Fair"}
                  onChange={() =>
                    handleCheckboxChange("beverageQuality", "Fair")
                  }
                />
                <label htmlFor="beverageQualityFair">Fair</label>

                <input
                  type="checkbox"
                  id="beverageQualityBad"
                  name="beverageQuality"
                  value="Bad"
                  checked={formData.beverageQuality === "Bad"}
                  onChange={() =>
                    handleCheckboxChange("beverageQuality", "Bad")
                  }
                />
                <label htmlFor="beverageQualityBad">Bad</label>
              </div>
              {formErrors.beverageQuality && (
                <div className="error">{formErrors.beverageQuality}</div>
              )}
            </div>

            <div className="form-field">
              <label>
                Was our restaurant clean?<span style={{ color: "red" }}>*</span>
              </label>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="cleanlinessExcellent"
                  name="cleanliness"
                  value="Excellent"
                  checked={formData.cleanliness === "Excellent"}
                  onChange={() =>
                    handleCheckboxChange("cleanliness", "Excellent")
                  }
                />
                <label htmlFor="cleanlinessExcellent">Excellent</label>

                <input
                  type="checkbox"
                  id="cleanlinessGood"
                  name="cleanliness"
                  value="Good"
                  checked={formData.cleanliness === "Good"}
                  onChange={() => handleCheckboxChange("cleanliness", "Good")}
                />
                <label htmlFor="cleanlinessGood">Good</label>

                <input
                  type="checkbox"
                  id="cleanlinessFair"
                  name="cleanliness"
                  value="Fair"
                  checked={formData.cleanliness === "Fair"}
                  onChange={() => handleCheckboxChange("cleanliness", "Fair")}
                />
                <label htmlFor="cleanlinessFair">Fair</label>

                <input
                  type="checkbox"
                  id="cleanlinessBad"
                  name="cleanliness"
                  value="Bad"
                  checked={formData.cleanliness === "Bad"}
                  onChange={() => handleCheckboxChange("cleanliness", "Bad")}
                />
                <label htmlFor="cleanlinessBad">Bad</label>
              </div>
              {formErrors.cleanliness && (
                <div className="error">{formErrors.cleanliness}</div>
              )}
            </div>

            <div className="form-field">
              <label>
                Please rate your overall dining experience
                <span style={{ color: "red" }}>*</span>
              </label>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="overallExperienceExcellent"
                  name="overallExperience"
                  value="Excellent"
                  checked={formData.overallExperience === "Excellent"}
                  onChange={() =>
                    handleCheckboxChange("overallExperience", "Excellent")
                  }
                />
                <label htmlFor="overallExperienceExcellent">Excellent</label>

                <input
                  type="checkbox"
                  id="overallExperienceGood"
                  name="overallExperience"
                  value="Good"
                  checked={formData.overallExperience === "Good"}
                  onChange={() =>
                    handleCheckboxChange("overallExperience", "Good")
                  }
                />
                <label htmlFor="overallExperienceGood">Good</label>

                <input
                  type="checkbox"
                  id="overallExperienceFair"
                  name="overallExperience"
                  value="Fair"
                  checked={formData.overallExperience === "Fair"}
                  onChange={() =>
                    handleCheckboxChange("overallExperience", "Fair")
                  }
                />
                <label htmlFor="overallExperienceFair">Fair</label>

                <input
                  type="checkbox"
                  id="overallExperienceBad"
                  name="overallExperience"
                  value="Bad"
                  checked={formData.overallExperience === "Bad"}
                  onChange={() =>
                    handleCheckboxChange("overallExperience", "Bad")
                  }
                />
                <label htmlFor="overallExperienceBad">Bad</label>
              </div>
              {formErrors.overallExperience && (
                <div className="error">{formErrors.overallExperience}</div>
              )}
            </div>
          </form>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "50px",
          marginTop: "24px",
          paddingTop: "10px",
          boxShadow: "0px 0px 10px 0px #ccc",
        }}
      >
        <div style={{ float: "right", paddingRight: "20px" }}>
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              backgroundColor: "green",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            Submit Review
          </button>
        </div>
      </div>

      <div className="footer">
        <NavLink to="/" style={{ marginRight: "24px" }}>
          Tab1
        </NavLink>
        <NavLink to="/feedback">Tab2</NavLink>
      </div>
    </>
  );
};

export default App;
