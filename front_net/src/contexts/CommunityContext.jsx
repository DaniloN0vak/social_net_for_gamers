import React, { createContext, useContext, useState } from 'react';

const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [joinedCommunities, setJoinedCommunities] = useState([]);

  const joinCommunity = (community) => {
    setJoinedCommunities((prev) =>
      prev.find(c => c.title === community.title) ? prev : [...prev, community]
    );
  };

  return (
    <CommunityContext.Provider value={{ joinedCommunities, joinCommunity }}>
      {children}
    </CommunityContext.Provider>
  );
};

export const useCommunity = () => useContext(CommunityContext);