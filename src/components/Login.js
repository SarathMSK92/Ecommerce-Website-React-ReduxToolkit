import classes from "./Login.module.css";
import { authActions } from "../redux/reducer/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginUser from "../images/login_image.jpg";
import MSKCartLogo from "../images/mskcart6.png";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [enteredPasswordIsValid, setEnteredPasswordIsValid] = useState(false);
  const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);
  const [enteredPasswordIsTouched, setEnteredPasswordIsTouched] =
    useState(false);

  useEffect(() => {
    if (enteredEmailIsValid || enteredPasswordIsValid) {
      console.log("enteredEmail is Valid");
    }
  }, [enteredEmailIsValid, enteredPasswordIsValid]);

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredEmailIsValid(true);
    }
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
    if (event.target.value.trim() !== "") {
      setEnteredPasswordIsValid(true);
    }
  };

  const emailInputBlurHandler = () => {
    setEnteredEmailIsTouched(true);
    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
    }
  };

  const passwordInputBlurHandler = () => {
    setEnteredPasswordIsTouched(true);
    if (enteredPassword.trim() === "") {
      setEnteredPasswordIsValid(false);
      return;
    }
  };
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    setEnteredEmailIsTouched(true);
    setEnteredPasswordIsTouched(true);
    if (enteredEmail.trim() === "") {
      setEnteredEmailIsValid(false);
      return;
    }

    if (enteredPassword.trim() === "") {
      setEnteredPasswordIsValid(false);
      return;
    }

    const enteredEmailValue = emailInputRef.current.value;
    const enteredPasswordValue = passwordInputRef.current.value;
    dispatch(authActions.login());
    navigate(`/`);
    setEnteredEmailIsValid(true);
  };

  const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailIsTouched;

  const enteredPasswordIsInvalid =
    !enteredPasswordIsValid && enteredPasswordIsTouched;

  const formInputClasses =
    enteredEmailIsInvalid && enteredPasswordIsInvalid
      ? "form-control invalid"
      : "form-control";

  return (
    <div className={classes["overall"]}>
      <main className={classes["login-container"]}>
        <section>
          <form onSubmit={loginSubmitHandler}>
            <header>
              <div className={classes["saracart-logo"]}>
                <h1>
                  <span>M</span>SK-<span>C</span>art
                </h1>
              </div>
              <div className={classes["login-header"]}>Login</div>
            </header>
            <div className={classes.control}>
              <input
                ref={emailInputRef}
                type="email"
                id="email"
                placeholder="Email..."
                onChange={emailInputChangeHandler}
                onBlur={emailInputBlurHandler}
                value={enteredEmail}
              />
              {enteredEmailIsInvalid && (
                <p className={classes["error-text"]}>
                  Email must not be empty...!
                </p>
              )}
            </div>
            <div className={classes.control}>
              <input
                ref={passwordInputRef}
                className={classes.password}
                type="password"
                id="password"
                placeholder="Password..."
                onChange={passwordHandler}
                onBlur={passwordInputBlurHandler}
                value={enteredPassword}
              />
              <div className={classes.forgotdiv}>
                <Link to="#" className={classes["forgot-password"]}>
                  Forgot Password?
                </Link>
              </div>
            </div>
            {enteredPasswordIsInvalid && (
              <p className={classes["error-text"]}>
                Password must not be empty...!
              </p>
            )}
            <button className={classes["login-btn"]}>Login</button>
            <div className={classes.signup}>
              <Link to="#" className={classes["new-user"]}>
                New User?
              </Link>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Login;
