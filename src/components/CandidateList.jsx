import React from 'react';
import CandCard from './CandCard';

export default function CandidateList({ allCandidates }) {
  return (
    <div>
      {/* {allCandidates.map((el) => <CandCard key={el.id} oneCand={el} />)} */}
      <CandCard />
      <CandCard />
      <CandCard />
      <CandCard />
      <CandCard />
      <CandCard />
    </div>
  );
}
