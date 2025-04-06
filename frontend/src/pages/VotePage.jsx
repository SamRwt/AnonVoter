import React from 'react';

function VotePage() {
    const candidates = ['Candidate A', 'Candidate B', 'Candidate C'];
  return (
    <div>
      <h1>Cast Your Vote</h1>
      <form>
        <select defaultValue="" required>
          <option value="" disabled>Select an option</option>
          {candidates.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit">Submit Vote</button>
      </form>
    </div>
  );
}

export default VotePage;