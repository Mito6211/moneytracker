import React, { useState } from "react";

type formTypes = {
  principal: number;
  interestRate: number;
  annualCompoundFrequency: number;
  years: number;
};

const Calculations: React.FC = () => {
  const [formData, setFormData] = useState<formTypes>({
    principal: 0,
    interestRate: 0,
    annualCompoundFrequency: 0,
    years: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value.substring(1));
    const numberOrDecimal = /^[0-9.]*$/;
    const startsWithZero = /^0.+$/;

    if (!!value.match(numberOrDecimal)) {
      try {
        console.log(startsWithZero.test(value));
        setFormData((prev) => ({
          ...prev,
          [name]: Number(
            startsWithZero.test(value) ? value.substring(1) : value
          ),
        }));
      } catch {
        console.log("Value needs to be a number");
      }
    }
  };

  React.useEffect(() => console.log(formData), [formData]);

  return (
    <>
      <h2>Compound Interest Calculator</h2>
      <form>
        <div>
          <label htmlFor="principal">Principal: </label>
          <input
            id="principal"
            name="principal"
            value={formData.principal}
            onChange={handleChange}
            type="number"
          />
        </div>

        <div>
          <label htmlFor="interestRate">Interest Rate: </label>
          <input
            id="interestRate"
            name="interestRate"
            value={formData.interestRate}
            onChange={handleChange}
            type="number"
          />
        </div>

        <div>
          <label htmlFor="annualCompoundFrequency">
            Annual Compound Frequency:{" "}
          </label>
          <input
            id="annualCompoundFrequency"
            name="annualCompoundFrequency"
            value={formData.annualCompoundFrequency}
            onChange={handleChange}
            type="number"
          />
        </div>

        <div>
          <label htmlFor="years">Years: </label>
          <input
            id="years"
            name="years"
            value={formData.years}
            onChange={handleChange}
            type="number"
          />
        </div>
      </form>
    </>
  );
};

export default Calculations;
