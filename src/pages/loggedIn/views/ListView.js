import ViewButtons from "../ViewButtons";
import ViewsLayoutStyles from "../../../css/loggedIn/views/ViewsLayoutStyles.module.css";

function ListView() {
  const currentRoute = "list";
  return (
    <div className={ViewsLayoutStyles.bodyContainer}>
      <ViewButtons currentRoute={currentRoute} />{" "}
      <div className={ViewsLayoutStyles.contentWrapper}>
        <h1 className={ViewsLayoutStyles.title}>List</h1>
      </div>
    </div>
  );
}

export default ListView;
