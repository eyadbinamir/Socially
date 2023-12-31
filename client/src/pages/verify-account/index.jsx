import Alert from "components/Alert.jsx";
import { useSelector } from "react-redux";
import Form from "./Form.jsx";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const VerifyAccount = () => {
  const { email, isVerified } = useSelector((state) => state.authStatus);
  const [message, setMessage] = useState("");
  const mode = useSelector((state) => state.settings.mode);
  sessionStorage.clear();
  return (
    <>
      {!email && <Navigate to={"/"} />}
      {isVerified && <Navigate to={"/set-profile"} />}
      <div className="container center ">
        <div className=" md:mx-auto my-3">
          {message && <Alert type={"error"} message={message} />}
        </div>
        <div
          className={`${
            mode === "light" ? "text-slate-800" : ""
          } my-8 bg-300 radius p-4 shadow-md`}
        >
          We sent a code to : {email} to verify your account.
          <div>
            <Form setMessage={setMessage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyAccount;
