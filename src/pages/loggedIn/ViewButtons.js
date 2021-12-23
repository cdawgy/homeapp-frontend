import styles from "../../css/loggedIn/ViewButtons.module.css";
import { useNavigate } from "react-router-dom";
import svgList from "../../constants/ViewButtonConstants";
import navigateToPage from "../../utils/NavigationManager";
import getViewButtonIcon from "../../utils/SvgUtils";

function generateButtons(nav, props) {
  return svgList.map((obj) => {
    return (
      <div
        className={styles.button}
        onClick={() => navigateToPage(nav, obj.route)}
      >
        <img src={getViewButtonIcon(props.currentRoute, obj)} />
      </div>
    );
  });
}

function ViewButtons(props) {
  const nav = useNavigate();
  return <div className={styles.buttonContainer}>{generateButtons(nav, props)}</div>;
}

export default ViewButtons;
