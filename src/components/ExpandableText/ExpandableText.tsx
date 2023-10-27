import styles from "./ExpandableText.module.css";
import { useState } from "react";

interface Props {
  children: string;
  closedCharCount: number;
}
const ExpandableText = ({ children, closedCharCount = 100 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (children.length <= closedCharCount) return <p>{children}</p>;

  return (
    <p className={styles.mainchildren}>
      {expanded ? children : children.substring(0, closedCharCount) + "..."}

      <button
        className={styles.buttonToggle}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Close" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
