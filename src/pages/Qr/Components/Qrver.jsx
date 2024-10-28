// File: src/components/qr/QRPage.jsx

import React, { useEffect, useState } from 'react';

const Qrver = () => {
  const [qrCode, setQrCode] = useState('');
  const [countdown, setCountdown] = useState(120);

  // Function to fetch QR code from backend
  const fetchQRCode = async () => {
    try {
      const response = await fetch('https://bakend-example-ecommerce.vercel.app/api/qr/generate');
      const data = await response.json();
      if (data.qrCode) {
        setQrCode(data.qrCode);
        localStorage.setItem('qrCode', data.qrCode); // Store QR code in localStorage
        localStorage.setItem('lastQRCodeUpdate', Date.now()); // Save the fetch time
        setCountdown(120); // Reset countdown
      } else {
        console.error('Error: QR code not found in response');
      }
    } catch (error) {
      console.error('Error fetching QR code:', error);
    }
  };

  // Function to initialize countdown and load QR code from localStorage if available
  const initializeCountdown = () => {
    const lastQRCodeUpdate = localStorage.getItem('lastQRCodeUpdate');
    const storedQrCode = localStorage.getItem('qrCode');

    if (lastQRCodeUpdate && storedQrCode) {
      const timePassed = Math.floor((Date.now() - lastQRCodeUpdate) / 1000);
      const remainingTime = 120 - timePassed;

      if (remainingTime > 0) {
        setQrCode(storedQrCode); // Load QR code from localStorage
        setCountdown(remainingTime); // Set countdown to remaining time
      } else {
        fetchQRCode(); // Fetch a new QR code if 120 seconds have passed
      }
    } else {
      fetchQRCode(); // Fetch QR code initially if none exists in localStorage
    }
  };

  // Countdown and QR refresh logic
  useEffect(() => {
    initializeCountdown();

    const intervalId = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          fetchQRCode(); // Fetch a new QR code when countdown reaches zero
          return 120; // Reset countdown to 120 seconds
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Generar Código QR</h1>
      <div id="qrCodeContainer">
        {qrCode ? (
          <img src={qrCode} alt="QR Code" style={{ width: '300px', height: '300px' }} />
        ) : (
          <p>Cargando código QR...</p>
        )}
      </div>
      <p>QR se actualizará en: <span id="countdown">{countdown}</span> segundos</p>
    </div>
  );
};

export default Qrver;
