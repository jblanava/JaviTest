import { FunctionComponent } from "react";
import DaycardDateContainer from "./DaycardDateContainer";
import DaycardInformationDiv from "./DaycardInformationDiv";
import styles from "./DaycardComponent.module.css";

const DaycardComponent: FunctionComponent = () => {
  return (
    <div className={styles.daycard}>
      <DaycardDateContainer day="9" month="Feb" />
      <DaycardInformationDiv
        dayInformation="Monday, 9 February"
        shiftTypeIcon="/shift-type-icon.svg"
        shiftTypeName="Afternoon"
        shiftFrom="9:00"
        shiftTo="14:00 "
      />
    </div>
  );
};

export default DaycardComponent;
