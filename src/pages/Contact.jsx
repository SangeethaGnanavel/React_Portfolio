import { useState } from "react";
import { validateEmail } from "../utils/helper";
export default function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "username") {
      setUserName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (username === "") {
        setErrorMessage("username cannot be empty");
        return;
      }
      if (!validateEmail(email)) {
        setErrorMessage("Email is invalid");
        return;
      }
      if (message === "") {
        setErrorMessage("Message section cannot be empty");
        return;
      }
      alert("Thank you, we shall contact you");
    } catch (err) {
      console.error(err);
    }
    setUserName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container pt-4">
      <form
        className="form card p-3 bg-light col-lg-10"
        onSubmit={handleFormSubmit}
      >
        <div className="form-group row">
          <label className="col-lg-2 col-form-label">Name</label>
          <div className="col-lg-10">
            <input
              type="text"
              className="form-control-plaintext"
              name="username"
              value={username}
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </div>

          <label className="col-lg-2 col-form-label">Email</label>
          <div className="col-lg-10">
            <input
              type="text"
              className="form-control-plaintext"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>
          <label className="col-lg-2 col-form-label">Message</label>
          <div className="col-lg-10">
            <textarea
              type="text"
              className="form-control-plaintext"
              name="message"
              value={message}
              placeholder="Enter your message here.."
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-info btn-block py-3 col-lg-2 "
            type="submit"
          >
            Submit
          </button>
          <input type="hidden" id="validation" name="validation" />
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
