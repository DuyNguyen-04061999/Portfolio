import { cn } from "@/utils";
import React, {
  Children,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";

const Context = createContext();

const Nav = ({ id, children, index }) => {
  const { activeIndex, setActiveIndex } = useContext(Context);
  const active = index === activeIndex;
  const _onClick = () => {
    setActiveIndex(index);
  };
  return (
    <li>
      <a href={id} className={cn({ active })} onClick={_onClick}>
        {children}
      </a>
    </li>
  );
};

Nav.Group = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const values = {
    activeIndex,
    setActiveIndex,
  };
  return (
    <Context.Provider value={values}>
      {Children.map(children, (child, index) => cloneElement(child, { index }))}
    </Context.Provider>
  );
};

export default Nav;
