import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import "./App.css";
import { LoginAction } from "./redux/action";
function App() {
  const [phone, setPhone] = useState();

  const dispatch = useDispatch();

  const SubmitFunction = () => {
    dispatch(LoginAction(phone));
  };

  const auth = useSelector((state) => state.auth);
  console.log("isAUth", auth);
  return (
    <div className="App">
      {auth.isAuthenticated ? (
        <div>Welcome</div>
      ) : (
        <div>
          {" "}
          <h3>Hello</h3>
          <input
            type="text"
            value={phone}
            name="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <button onClick={SubmitFunction}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
