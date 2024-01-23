import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import InputBox from "./components/InputBox/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { IoSwapVerticalSharp } from "react-icons/io5";
import { useEffect } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const [data, setData] = useCurrencyInfo(from);
  const currencies = Object.keys(data);

  useEffect(() => {
    if (amount > 0) setConvertedAmount(Number(Number(data[to]) * amount).toFixed(2));
  }, [to]);

  useEffect(() => {
    setData(from);
  }, [from]);

  useEffect(() => {
    if (amount > 0) setConvertedAmount(Number(Number(data[to]) * amount).toFixed(2));
  }, [data]);

  return (
    <>
      <div className="container-fluid w-100 h-100 pt-5">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="converter border-1 border-black-subtle shadow-lg p-5">
              <InputBox
                label={from}
                amount={amount}
                isDisabled={false}
                currencies={currencies}
                onAmountChange={(value) => {
                  setAmount(value);
                }}
                onCurrencyChange={(value) => {
                  setFrom(value);
                }}
              />
              <div className="middle d-flex justify-content-center mt-4 mb-3">
                <button className="btn btn-primary" onClick={() => {
                  setAmount(convertedAmount);
                  setConvertedAmount(amount);
                  setFrom(to);
                  setTo(from);
                }}>
                  <IoSwapVerticalSharp />
                </button>
              </div>
              <InputBox
                label={to}
                amount={convertedAmount}
                isDisabled={true}
                currencies={currencies}
                onAmountChange={(value) => {
                  setConvertedAmount(value);
                }}
                onCurrencyChange={(value) => {
                  setTo(value);
                }}
              />
              <div className="w-100 mt-5">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => {
                    setConvertedAmount(Number(Number(data[to]) * amount).toFixed(2));
                  }}
                >
                  Convert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
