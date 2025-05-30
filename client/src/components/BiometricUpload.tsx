import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { encryptBiometric } from '../utils/crypto';

interface Props {
  token: string;
  userId: number;
  onResult: (result: string) => void;
}

interface ErrorResponse {
  message?: string;
}

const BiometricUpload: React.FC<Props> = ({ token, userId, onResult }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !token) {
      onResult('No file or token provided');
      return;
    }

    const formData = new FormData();
    const encryptedData = encryptBiometric(file.name, 'vault-key');
    formData.append('biometric', file, encryptedData);
    formData.append('userId', userId.toString()); // Include userId in API request

    try {
      const response = await axios.post('http://system-api:3000/api/biometric/verify', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      onResult(response.data.message || 'Verification successful');
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      onResult('Verification failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button type="submit">Verify Biometric</button>
    </form>
  );
};

export default BiometricUpload;
