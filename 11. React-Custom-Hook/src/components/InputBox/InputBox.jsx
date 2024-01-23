import { memo } from "react";

function InputBox({
  label,
  amount,
  isDisabled,
  currencies,
  onAmountChange,
  onCurrencyChange,
}) {
  return (
    <>
      <div className="input-box mb-2">
        <div className="row">
          <div className="col-6">
            <label className="form-label" htmlFor={label}>
              {label.toUpperCase()}
            </label>
            <input
              className="form-control"
              id={label}
              value={amount}
              name={label}
              onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
              disabled={isDisabled}
            ></input>
          </div>
          <div className="col-6">
            <label className="form-label" htmlFor="currency">
              Currency
            </label>
            <select value={label} id="currency" className="form-select" onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
              {currencies.map((curr) => (
                 <option key={curr} value={curr}>{curr.toUpperCase()}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(InputBox);
