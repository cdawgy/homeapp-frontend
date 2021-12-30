import ViewButtons from "../ViewButtons";
import ViewsLayoutStyles from "../../../css/loggedIn/views/ViewsLayoutStyles.module.css";
import ItemsList from "../components/ItemsList";
import { fetchHomeListData } from "../../../utils/ApiUtils";

function HomeView() {
  const currentRoute = "home";
  const apiData = fetchHomeListData();
  return (
    <div className={ViewsLayoutStyles.bodyContainer}>
      <ViewButtons currentRoute={currentRoute} />
      <div className={ViewsLayoutStyles.contentWrapper}>
        <h1 className={ViewsLayoutStyles.title}>House List</h1>
        <ItemsList apiData={apiData} />
      </div>
    </div>
  );
}

export default HomeView;
