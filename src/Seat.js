import React from 'react'

function Seat({ seat, isSelected, onSelect }) {
    return (
      <button
        className={`seat ${isSelected ? 'selected' : ''}`}
        onClick={() => onSelect(seat.id)}
        disabled={seat.reserved}
      >
        {seat.number} (Row {seat.row})
      </button>
    );
  }

export default Seat;