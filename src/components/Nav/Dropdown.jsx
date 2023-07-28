import {motion} from 'framer-motion'
import MenuItems from "./MenuItem";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  const subMenuAnimate = {
    enter: {
      scaleY: 1,
      opacity: 1,
      x: "-50%",
      transition: {
        when: "beforeChildren",
        delayChildren: 0.05,
        staggerChildren: 0.05,
      },
      display: "block",
      type: "tween",
    },
    exit: {
      scaleY: 0,
      opacity: 0,
      x: "-50%",
      transition: {
        duration: 0.15,
        delay: 0.1
      },
      transitionEnd: {
        display: "none"
      }
    }
  };
  return (
    <motion.ul className={`dropdown absolute shadow-sm text-[0.875rem] z-20 min-w-[10rem] text-center
    py-[0.5rem] list-none bg-[rgba(255,255,255,1)] !text-black border-black border-2
    ${dropdownClass}`}
    initial="exit"
    animate={dropdown ? "enter" : "exit"}
    variants={subMenuAnimate}
    style={{ originY: 0 }}>
      {submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} subitemState={dropdown}/>
      ))}
    </motion.ul>
  );
};

export default Dropdown;