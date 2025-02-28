import React, { useState } from 'react';
import './J1939Decoder.css';

const J1939Decoder = () => {
  const [canId, setCanId] = useState('0CFF0019');
  const [decodedId, setDecodedId] = useState(null);

  const decodeJ1939Id = (idHex) => {
    try {
      const id = parseInt(idHex, 16);
      const sourceAddress = id & 0xFF;
      const sourceAddressHex = sourceAddress.toString(16).toUpperCase().padStart(2, '0');
      
      const pgn = (id >> 8) & 0x3FFFF;
      const pgnHex = pgn.toString(16).toUpperCase().padStart(4, '0');
      
      const priority = (id >> 26) & 0x7;
      const priorityHex = priority.toString(16).toUpperCase();

      return {
        sourceAddress,
        sourceAddressHex,
        pgn,
        pgnHex,
        priority,
        priorityHex
      };
    } catch (error) {
      console.error('Error decoding ID:', error);
      return null;
    }
  };

  const handleDecodeClick = () => {
    const idInfo = decodeJ1939Id(canId);
    setDecodedId(idInfo);
  };

  return (
    <div className="decoder-container">
      <h1 className="decoder-title">J1939 PGN Decoder</h1>
      
      <div className="input-section">
        <div className="input-group">
          <label>CAN ID (Hex)</label>
          <input
            type="text"
            value={canId}
            onChange={(e) => setCanId(e.target.value)}
            placeholder="e.g. 0CFF0019"
          />
        </div>
      </div>
      
      <button 
        onClick={handleDecodeClick}
        className="decode-button"
      >
        Decode
      </button>
      
      {decodedId && (
        <div className="results-section">
          <h2>ID Decoding</h2>
          <div className="id-results">
            <div className="result-item">
              <span className="result-label">Priority</span>
              <span className="result-value">0x{decodedId.priorityHex} ({decodedId.priority})</span>
            </div>
            <div className="result-item">
              <span className="result-label">PGN</span>
              <span className="result-value">0x{decodedId.pgnHex} ({decodedId.pgn})</span>
            </div>
            <div className="result-item">
              <span className="result-label">Source Address</span>
              <span className="result-value">0x{decodedId.sourceAddressHex} ({decodedId.sourceAddress})</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default J1939Decoder;
