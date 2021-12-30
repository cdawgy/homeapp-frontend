import ViewButtons from "../ViewButtons";
import ViewsLayoutStyles from "../../../css/loggedIn/views/ViewsLayoutStyles.module.css";
import ElectricSelector from "../components/ElectricSelector";

function ElectricView() {
  const currentRoute = "electric";
  return (
    <div className={ViewsLayoutStyles.bodyContainer}>
      <ViewButtons currentRoute={currentRoute} />{" "}
      <div className={ViewsLayoutStyles.contentWrapper}>
        <h1 className={ViewsLayoutStyles.title}>Electric</h1>
        <ElectricSelector />
      </div>
    </div>
  );
}

export default ElectricView;
