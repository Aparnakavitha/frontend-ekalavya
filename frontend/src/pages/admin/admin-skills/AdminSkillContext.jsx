import React, { createContext, useContext, useState } from "react";

const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [skills, setSkills] = useState([]);

  return (
    <SkillsContext.Provider value={{ skills, setSkills }}>
      {children}
    </SkillsContext.Provider>
  );
};

export const useSkills = () => useContext(SkillsContext);
