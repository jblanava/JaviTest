import { FunctionComponent } from "react";
import styles from "./DaycardInformationDiv.module.css";

type DaycardInformationDivType = {
  dayInformation?: string;
  shiftTypeIcon?: string;
  shiftTypeName?: string;
  shiftFrom?: string;
  shiftTo?: string;
};

const DaycardInformationDiv: FunctionComponent<DaycardInformationDivType> = ({
  dayInformation,
  shiftTypeIcon,
  shiftTypeName,
  shiftFrom,
  shiftTo,
}) => {
  return (
    <div className={styles.daycardInformationDiv}>
      <div className={styles.dayInformation}>{dayInformation}</div>
      <div className={styles.shiftContainer}>
        <div className={styles.shiftDiv}>
          <div className={styles.shiftTypeDiv}>
            <img className={styles.shiftTypeIcon} alt="" src={shiftTypeIcon} />
            <div className={styles.shiftTypeName}>{shiftTypeName}</div>
          </div>
          <div className={styles.shiftHoursDiv}>
            <div className={styles.shiftTypeDiv}>
              <div className={styles.shiftTypeName}>{shiftFrom}</div>
              <div className={styles.shiftTypeName}>-</div>
              <div className={styles.shiftTypeName}>{shiftTo}</div>
            </div>
            <div className={styles.shiftTotalhoursDiv}>
              <div className={styles.shiftTypeName}>05:00 h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaycardInformationDiv;
