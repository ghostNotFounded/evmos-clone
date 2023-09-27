import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  delayed: number;
}

export const ChangeColor = (props: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const maincontrols = useAnimation();

  useEffect(() => {
    if (isInView) {
      maincontrols.start("visible");
    }
  }, [isInView]);

  return (
    <div className="relative overflow-hidden" ref={ref}>
      <motion.div
        variants={{
          hidden: { color: "#4e4b45" },
          visible: { color: "#fff" },
        }}
        initial="hidden"
        animate={maincontrols}
        transition={{ duration: 0.5, delay: props.delayed }}
      >
        {props.children}
      </motion.div>
    </div>
  );
};
