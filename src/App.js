import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Seat from './Seat';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    countryCode: '',
    phoneNumber: '',
    acceptTermsAndCondition: false,
  });
  const [currentStep, setCurrentStep] = useState(1);

  const handleChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    console.log("formData: ", formData)
    try {
      // Exclude acceptTermsAndCondition field from the form data
      const { acceptTermsAndCondition, ...formDataToSend } = formData;
  
      const response = await axios.post('https://codebuddy.review/submit', formDataToSend);
      console.log('Form submitted successfully:', response.data);
      // Redirect to /posts
      window.location.href = '/posts';
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 formData={formData} onChange={handleChange} onNext={handleNext} />;
      case 2:
        return <Step2 formData={formData} onChange={handleChange} onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <Step3 formData={formData} onChange={handleChange} onSubmit={handleSubmit} onBack={handleBack} />;
      default:
        return null;
      }
    };

    return (
      <div style={{ backgroundImage: `url("/image.jpg")` }}>
        {renderStep()}
      </div>
    );
}

export default App;
