import ViewButtons from "../ViewButtons";
import ViewsLayoutStyles from "../../../css/loggedIn/views/ViewsLayoutStyles.module.css";
import ItemsList from "../ItemsList";

function HomeView() {
  const currentRoute = "home";
  return (
    <div className={ViewsLayoutStyles.bodyContainer}>
      <ViewButtons currentRoute={currentRoute} />
      <div className={ViewsLayoutStyles.contentWrapper}>
        <h1 className={ViewsLayoutStyles.title}>Home</h1>
        <ItemsList />
      </div>
    </div>
  );
}

export default HomeView;
