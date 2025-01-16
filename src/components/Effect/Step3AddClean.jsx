
import { useState, useEffect } from 'react';

export function createConnection() {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('Step 3 ✅ Connecting...');
    },
    disconnect() {
      console.log('Step 3❌ Disconnected.');
    }
  };
}

export default function Step3AddClean() {
  useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
  }, []);
  return <h1>Welcome to the chat!</h1>;
}