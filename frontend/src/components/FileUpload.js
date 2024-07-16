import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

const Label = styled.label`
  font-weight: 500;
  color: #555;
`;

const Input = styled.input`
  margin-top: 5px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ddd;
  width: 300px;
  box-sizing: border-box;
  font-size: 16px;
`;

const FileUpload = ({ onFileChange }) => (
  <Container>
    <Label>Upload Image:</Label>
    <Input type="file" onChange={onFileChange} />
  </Container>
);

export default FileUpload;
