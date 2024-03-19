import React, { useState } from 'react';

function Step3({ formData, onChange, onSubmit, onBack }) {
    const [errors, setErrors] = useState({});
  
    const validate = () => {
      const { countryCode, phoneNumber, acceptTermsAndCondition } = formData;
      const errors = {};
  
      // Country code validation
      if (!countryCode || (countryCode !== '+91' && countryCode !== '+1')) {
        errors.countryCode = 'Invalid country code';
      }
  
      // Phone number validation
      if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
        errors.phoneNumber = 'Invalid phone number';
      }
  
      // Accept terms and condition validation
      if (!acceptTermsAndCondition) {
        errors.acceptTermsAndCondition = 'Please accept terms and conditions';
      }
  
      setErrors(errors);
      console.log("errors: ", errors)
  
      if (Object.keys(errors).length === 0) {
        onSubmit();
      }
    };
  
    return (
      <center>
        <fieldset style={{ width: "350px", borderRadius: "25px" }}>
            <legend><h1>Step 3</h1></legend>
            <div>
            <label>Country Code:</label>
            <select value={formData.countryCode} onChange={(e) => onChange({ countryCode: e.target.value })}>
                <option value="">Select</option>
                <option value="+91">India (+91)</option>
                <option value="+1">America (+1)</option>
            </select>
            {errors.countryCode && <span className="error">{errors.countryCode}</span>}
            </div>
            <div>
            <label>Phone Number:</label>
            <input style={{ borderRadius: "25px" }} type="text" value={formData.phoneNumber} onChange={(e) => onChange({ phoneNumber: e.target.value })} />
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
            </div>
            <div>
            <label>
                <input type="checkbox" checked={formData.acceptTermsAndCondition} onChange={(e) => onChange({ acceptTermsAndCondition: e.target.checked })} />
                Accept Terms and Condition
            </label>
            {errors.acceptTermsAndCondition && <span className="error">{errors.acceptTermsAndCondition}</span>}
            </div>
            <button style={{marginRight: "20px"}} onClick={onBack}>Back</button>
            <button onClick={validate}>Save</button>
        </fieldset>
      </center>
    );
}

export default Step3;