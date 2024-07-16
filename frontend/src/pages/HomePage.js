import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FileUpload from '../components/FileUpload';
import TextInput from '../components/TextInput';
import ResultBox from '../components/ResultBox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f2f5;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
`;

const Title = styled.h1`
  color: #333;
  font-weight: 700;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    background-color: #0056b3;
  }
`;

const HomePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [text, setText] = useState('');
  const [result, setResult] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', selectedFile);
    formData.append('text', text);

    try {
      const response = await axios.post('http://localhost:5001/api/images/analyze', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResult(response.data.extractedText);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <Container>
      <Title>Image Text Extractor</Title>
      <Form onSubmit={handleSubmit}>
        <FileUpload onFileChange={handleFileChange} />
        <TextInput text={text} onTextChange={handleTextChange} />
        <Button type="submit">Analyze</Button>
      </Form>
      {result && <ResultBox result={result} />}
    </Container>
  );
};

export default HomePage;
