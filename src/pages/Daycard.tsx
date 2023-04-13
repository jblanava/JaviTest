import { FunctionComponent } from "react";
import DaycardComponent from "../components/DaycardComponent";
import styles from "./Daycard.module.css";

const Daycard: FunctionComponent = () => {
  return (
    <div className={styles.daycard}>
      <DaycardComponent />
    </div>
  );
};

export default Daycard;
