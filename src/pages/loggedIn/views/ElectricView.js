import ViewButtons from "../ViewButtons";
import ViewsLayoutStyles from "../../../css/loggedIn/views/ViewsLayoutStyles.module.css";

function ElectricView() {
  const currentRoute = "electric";
  return (
    <div className={ViewsLayoutStyles.bodyContainer}>
      <ViewButtons currentRoute={currentRoute} />{" "}
      <div className={ViewsLayoutStyles.contentWrapper}>
        <h1 className={ViewsLayoutStyles.title}>Electric</h1>
      </div>
    </div>
  );
}

export default ElectricView;
