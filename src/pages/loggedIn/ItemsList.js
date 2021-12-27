import { useState } from "react";

import styles from "../../css/loggedIn/ItemsList.module.css";
import xIcon from "../../resources/x-circle.svg";
import removeItemFromList from "../../utils/ItemListUtils";

function fetchHomeListData() {
  return apiReturnedData;
}

const apiReturnedData = [
  {
    itemName: "Heinz Beans",
    itemIsAquired: true,
  },
  {
    itemName: "Milk",
    itemIsAquired: false,
  },
  {
    itemName: "Bread",
    itemIsAquired: true,
  },
];

function ListItem(props) {
  const item = props.item;
  let checkBoxTickColour = item.itemIsAquired ? "#333333" : "#ffffff";
  return (
    <div className={styles.listItem}>
      <div className={styles.itemIsAquired}>
        <div
          className={styles.itemIsAquiredTick}
          style={{ backgroundColor: checkBoxTickColour }}
        ></div>
      </div>
      <div className={styles.itemProperties}>
        <p className={styles.itemTitle}>{item.itemName}</p>
        <div
          onClick={(e) =>
            removeItemFromList([], e.target.getAttribute("index"))
          }
          className={styles.itemRemoveButton}
          index={props.index}
        >
          <img src={xIcon} index={props.index} />
        </div>
      </div>
    </div>
  );
}

function renderListItems(apiCallData) {
  return apiCallData.map((item, i) => {
    return <ListItem item={item} index={i} />;
  });
}

function ItemsList() {
  let someApiReturnedData = fetchHomeListData();
  const [listItems, setListItems] = useState(someApiReturnedData);
  return <div className={styles.listWrapper}>{renderListItems(listItems)}</div>;
}

export default ItemsList;
