import React, { createContext, useContext, useState } from "react";

const SavedPostsContext = createContext();

export const useSavedPosts = () => useContext(SavedPostsContext);

export const SavedPostsProvider = ({ children }) => {
  const [savedIds, setSavedIds] = useState([]);

  const savePost = (id) => setSavedIds(ids => ids.includes(id) ? ids : [...ids, id]);
  const unsavePost = (id) => setSavedIds(ids => ids.filter(_id => _id !== id));
  const isSaved = (id) => savedIds.includes(id);

  return (
    <SavedPostsContext.Provider value={{ savedIds, savePost, unsavePost, isSaved }}>
      {children}
    </SavedPostsContext.Provider>
  );
};