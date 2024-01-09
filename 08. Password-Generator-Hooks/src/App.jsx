/* eslint-disable react-hooks/exhaustive-deps */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { useRef } from "react";
import { useCallback, useEffect } from "react";
import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isSpecialCharactersAllowed, setIsSpecialCharactersAllowed] =
    useState(false);
  const [length, setLength] = useState(8);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumberAllowed) str += "0123456789";
    if (isSpecialCharactersAllowed) str += "!@#$%^&*?";

    for (let i = 1; i <= length; i++) {
      const id = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(id);
    }

    setPassword(pass);
  }, [password, isNumberAllowed, isSpecialCharactersAllowed, setLength]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumberAllowed, isSpecialCharactersAllowed]);

  return (
    <>
      <div className="container w-100 vh-100 p-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-10">
            <div className="mb-3 row">
              <input
                type="text"
                value={password}
                readOnly
                className="form-control"
                id="inputPassword"
                ref={passwordRef}
              ></input>
            </div>
          </div>
          <div className="col-2">
            <div className="mb-3 row">
              <button className="btn btn-primary" onClick={copyToClipboard}>
                Copy
              </button>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-2">
            <input
              type="range"
              name=""
              id="length"
              className="form-range"
              min={8}
              max={100}
              onChange={(e) => setLength(e.target.value)}
            ></input>
            <label htmlFor="length" className="form-label">
              {length}
            </label>
          </div>
          <div className="col-2 form-check">
            <input
              type="checkbox"
              name="isnumallowed"
              id="isnumallowed"
              className="form-check-input"
              onChange={() => setIsNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="isnumallowed" className="form-check-label">
              Number
            </label>
          </div>
          <div className="col-2 form-check">
            <input
              type="checkbox"
              name="isspeccallowed"
              id="isspeccallowed"
              className="form-check-input"
              onChange={() => setIsSpecialCharactersAllowed((prev) => !prev)}
            />
            <label htmlFor="isspeccallowed" className="form-check-label">
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
