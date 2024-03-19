import React, { useState } from 'react';

function Step1({ formData, onChange, onNext }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const { emailId, password } = formData;
    const errors = {};

    // Email validation
    if (!emailId || !/^\S+@\S+\.\S+$/.test(emailId)) {
      errors.emailId = 'Invalid email address';
    }

    // Password validation
    if (!password || !/(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=])(?=.*[0-9])(?=.*[a-z].*[a-z])(?=.*\d.*\d)/.test(password)) {
        errors.password = 'Invalid password';
    }      

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      onNext();
    }
  };
  
  return (
    <center>
        <fieldset style={{ width: "350px", borderRadius: "25px" }}>
            <legend>
                <h1>Step 1</h1>
            </legend>
            <div>
                <label>Email:</label>
                <input style={{ borderRadius: "25px" }} type="email" value={formData.emailId} onChange={(e) => onChange({ emailId: e.target.value })} />
                {errors.emailId && <span className="error">{errors.emailId}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input style={{ borderRadius: "25px" }} type="password" value={formData.password} onChange={(e) => onChange({ password: e.target.value })} />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <button onClick={validate}>Save and Next</button>
        </fieldset>
    </center>
  );
}

export default Step1;