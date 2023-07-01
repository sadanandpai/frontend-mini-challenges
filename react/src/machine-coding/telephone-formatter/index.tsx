import { type ChangeEvent, useState } from "react";

export default function TelephoneFormatter() {
  const [phoneValue, setPhoneValue] = useState("");

  const getStringWithNumbersOnly = (str: string) =>
    [...str].filter((v) => Number.isInteger(+v) && v !== " ").join("");

  const formatString = (e: ChangeEvent<HTMLInputElement>) => {
    const numStr = getStringWithNumbersOnly(e.target.value);
    setPhoneValue(
      numStr.length > 3
        ? "+(" + numStr.substring(0, 3) + ") - " + numStr.substring(3)
        : numStr
    );
  };

  return (
    <div className="container text-center">
      <input
        type="tel"
        id="phone"
        maxLength={16}
        placeholder="Mobile number"
        autoComplete="off"
        style={{ fontSize: "1.5rem", marginBottom: "1rem" }}
        value={phoneValue}
        onChange={formatString}
      />

      <div>
        <label htmlFor="phone">+(123) - 4567890</label>
      </div>
    </div>
  );
}
