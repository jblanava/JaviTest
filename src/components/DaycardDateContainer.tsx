import { FunctionComponent } from "react";
import styles from "./DaycardDateContainer.module.css";

type DaycardDateContainerType = {
  day?: string;
  month?: string;
};

const DaycardDateContainer: FunctionComponent<DaycardDateContainerType> = ({
  day,
  month,
}) => {
  return (
    <div className={styles.daycardDateContainer}>
      <div className={styles.day}>{day}</div>
      <div className={styles.month}>{month}</div>
    </div>
  );
};

export default DaycardDateContainer;
