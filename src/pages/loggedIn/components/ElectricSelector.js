import styles from "../../../css/loggedIn/components/ElectricSelector.module.css";
import userIcon from "../../../resources/user.svg";
import arrowIcon from "../../../resources/arrow.svg";
import { fetchHouseMembers } from "../../../utils/ApiUtils";
import placeArrowYCoords from "../../../utils/ElectricSelectorUtils";

function HouseMember(props) {
  const displayName = props.name;
  return (
    <div className={styles.houseMember}>
      <img src={userIcon} />
      <p>{displayName}</p>
    </div>
  );
}

function renderHouseMembers(apiCallData) {
  return apiCallData.map((item) => {
    return <HouseMember name={item.displayName} />;
  });
}

function ElectricSelector() {
  const houseMembers = fetchHouseMembers();
  const yPos = placeArrowYCoords(houseMembers);
  return (
    <div>
      <h3>Who Payed Last?</h3>
      <div className={styles.selectorContainer}>
        <div className={styles.houseMemberContainer}>
          {renderHouseMembers(houseMembers)}
        </div>
        <div className={styles.arrowContainer}>
          <div className={styles.dashedLine}>
            <img
              src={arrowIcon}
              className={styles.arrow}
              style={{ marginTop: yPos }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ElectricSelector;
