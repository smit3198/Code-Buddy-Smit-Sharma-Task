import React, { useState } from 'react';

function Step2({ formData, onChange, onNext, onBack }) {
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      const { firstName, lastName, address } = formData;
      const errors = {};
  
      // First name validation
      if (!firstName || !/^[a-zA-Z]+$/.test(firstName) || firstName.length < 2 || firstName.length > 50) {
        errors.firstName = 'Invalid first name';
      }
  
      // Last name validation
      if (lastName && !/^[a-zA-Z]+$/.test(lastName)) {
        errors.lastName = 'Invalid last name';
      }
  
      // Address validation
      if (!address || address.length < 10) {
        errors.address = 'Address must be at least 10 characters long';
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
                <h1>Step 2</h1>
            </legend>
            <div>
            <label>First Name:</label>
            <input style={{ borderRadius: "25px" }} type="text" value={formData.firstName} onChange={(e) => onChange({ firstName: e.target.value })} />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
            </div>
            <div>
            <label>Last Name:</label>
            <input style={{ borderRadius: "25px" }} type="text" value={formData.lastName} onChange={(e) => onChange({ lastName: e.target.value })} />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
            </div>
            <div>
            <label>Address:</label>
            <input style={{ borderRadius: "25px" }} type="text" value={formData.address} onChange={(e) => onChange({ address: e.target.value })} />
            {errors.address && <span className="error">{errors.address}</span>}
            </div>
            <button style={{marginRight: "20px"}}  onClick={onBack}>Back</button>
            <button onClick={validate}>Save and Next</button>
        </fieldset>
      </center>
    );
}

export default Step2;