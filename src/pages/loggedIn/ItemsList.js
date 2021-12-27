import styles from "../../css/loggedIn/ItemsList.module.css";
import xIcon from "../../resources/x-circle.svg";

const apiReturnedData = [
  {
    itemName: "Heinz Beans",
    itemCount: 2,
    itemIsAquired: true,
  },
  {
    itemName: "Milk",
    itemCount: 1,
    itemIsAquired: false,
  },
  {
    itemName: "Bread",
    itemCount: 1,
    itemIsAquired: true,
  },
];

function ListItem() {
  return (
    <div className={styles.listItem}>
      <div className={styles.itemIsAquired}></div>
      <div className={styles.itemProperties}>
        <p className={styles.itemTitle}>Some House Item</p>
        <p className={styles.itemCount}>x2</p>
        <div className={styles.itemRemoveButton}>
          <img src={xIcon} />
        </div>
      </div>
    </div>
  );
}

function renderListItems(apiCallData){
    return apiCallData.map((item) => {
        
    })
}

function ItemsList() {
  return (
    <div className={styles.listWrapper}>
      <ListItem />
    </div>
  );
}

export default ItemsList;
