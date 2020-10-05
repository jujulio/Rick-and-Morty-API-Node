import React from 'react';
import CharacterCard from '../../components/CharacterCard';

import './styles.css';

const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <CharacterCard />
    </div>
  );
};

export default Dashboard;
