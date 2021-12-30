import ViewButtons from "../ViewButtons";
import ViewsLayoutStyles from "../../../css/loggedIn/views/ViewsLayoutStyles.module.css";
import ItemsList from "../components/ItemsList";
import { fetchPersonalListData } from "../../../utils/ApiUtils";

function ListView() {
  const currentRoute = "list";
  const apiData = fetchPersonalListData();
  return (
    <div className={ViewsLayoutStyles.bodyContainer}>
      <ViewButtons currentRoute={currentRoute} />{" "}
      <div className={ViewsLayoutStyles.contentWrapper}>
        <h1 className={ViewsLayoutStyles.title}>Personal List</h1>
        <ItemsList apiData={apiData} />
      </div>
    </div>
  );
}

export default ListView;
