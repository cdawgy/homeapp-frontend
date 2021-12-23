import ViewButtons from "../ViewButtons";
import ViewsLayoutStyles from "../../../css/loggedIn/views/ViewsLayoutStyles.module.css";

function HomeView() {
  const currentRoute = "home";
  return (
    <div className={ViewsLayoutStyles.bodyContainer}>
      <ViewButtons currentRoute={currentRoute} />
      <div className={ViewsLayoutStyles.contentWrapper}>
        <h1 className={ViewsLayoutStyles.title}>Home</h1>
      </div>
    </div>
  );
}

export default HomeView;
