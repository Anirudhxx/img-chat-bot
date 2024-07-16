import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: left;
  margin-top: 20px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 16px;
  resize: none;
`;

const ResultBox = ({ result }) => (
  <Box>
    <h2>Extracted Text</h2>
    <TextArea value={result} readOnly rows={10}></TextArea>
  </Box>
);

export default ResultBox;
