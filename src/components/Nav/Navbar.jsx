import { menuItems } from "../NavData";
import MenuItem from "./MenuItem";
import { motion } from 'framer-motion';

const Navbar = () => {
  const varBar = {
    onscreen: { opacity: 1, x: 0, transition: { duration: 1.75, ease: [.35,.02,.27,.96] } },
    offscreen: { opacity: 0, x: 150 }
  };
  const varTotal = {
    onscreen: { opacity: 1, transition: { duration: 1.5, ease: [.35,.02,.27,.96] } },
    offscreen: { opacity: 0 }
  };
  return (
    <nav className="normalNav">
      <motion.ul className="relative flex list-none z-20"
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{once:true, amount:0.3}}
      transition={{delayChildren: 0.3, staggerChildren:0.3}}
      variants={varTotal}>
        <motion.div className="bg-[rgba(10,10,10,1)] absolute left-[-15%] top-[-10%] h-[120%] w-[100vw] z-0" variants={varBar}></motion.div>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItem items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </motion.ul>
    </nav>
  );
};

export default Navbar;