import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FAQComponent = () => {
  const [faqData, setFaqData] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    // Fetch FAQ data from API
    axios.get('https://qtify-backend-labs.crio.do/faq')
      .then(response => setFaqData(response.data))
      .catch(error => console.error('Error fetching FAQ data:', error));
  }, []);

  const handleQuestionChange = (event) => {
    setSelectedQuestion(event.target.value);
  };

  return (
    <div>
      <h1>FAQ</h1>
      <select onChange={handleQuestionChange} value={selectedQuestion}>
        <option value="" disabled>Select a question</option>
        {Array.isArray(faqData) && faqData.map((faqItem, index) => (
          <option key={index} value={faqItem.question}>
            {faqItem.question}
          </option>
        ))}
      </select>

      {selectedQuestion && (
        <div>
          <h2>{selectedQuestion}</h2>
          {Array.isArray(faqData) && faqData.map((faqItem, index) => (
            faqItem.question === selectedQuestion && (
              <p key={index}>{faqItem.answer}</p>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQComponent;