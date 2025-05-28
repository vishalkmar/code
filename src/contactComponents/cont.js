import React, { useEffect } from 'react';

const VismeContactForm = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    
    // Create div container
    const formContainer = document.createElement('div');
    formContainer.className = 'visme_d';
    formContainer.setAttribute('data-title', 'Agency Contact Form');
    formContainer.setAttribute('data-url', 'rxw8jj4z-agency-contact-form?fullPage=true');
    formContainer.setAttribute('data-domain', 'forms');
    formContainer.setAttribute('data-full-page', 'true');
    formContainer.setAttribute('data-min-height', '100vh');
    formContainer.setAttribute('data-form-id', '128302');
    
    // Append elements to DOM
    const container = document.getElementById('visme-form-container');
    container.appendChild(formContainer);
    document.body.appendChild(script);
    
    // Cleanup function
    return () => {
      document.body.removeChild(script);
      container.removeChild(formContainer);
    };
  }, []);

  return <div id="visme-form-container" style={{ minHeight: '100vh' }} />;
};

export default VismeContactForm;