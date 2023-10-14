import { createContext, useState } from "react";

export const MenuContext = createContext();

const MenuProvider = ({ children }) => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ isOpenMenu, setOpenMenu }}>
      <>{children}</>
    </MenuContext.Provider>
  );
};

export default MenuProvider;
