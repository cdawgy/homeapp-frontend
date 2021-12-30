import { useState } from "react";

import styles from "../../../css/loggedIn/ItemsList.module.css";
import xIcon from "../../../resources/x-circle.svg";
import removeItemFromList, { submitNewItemList } from "../../../utils/ItemListUtils";

function ListItem(props) {
  const item = props.item;
  const apiCallData = props.apiCallData;
  return (
    <div className={styles.listItem}>
      <div className={styles.itemProperties}>
        <p className={styles.itemTitle}>{item.itemName}</p>
        <div
          onClick={(e) => {
            removeItemFromList(
              apiCallData,
              props.updateListItemsCallback,
              e.target.getAttribute("index")
            );
          }}
          className={styles.itemRemoveButton}
          index={props.index}
        >
          <img src={xIcon} index={props.index} />
        </div>
      </div>
    </div>
  );
}

function renderListItems(apiCallData, updateListItemsCallback) {
  return apiCallData.map((item, i) => {
    return (
      <ListItem
        item={item}
        index={i}
        updateListItemsCallback={updateListItemsCallback}
        apiCallData={apiCallData}
      />
    );
  });
}

function ItemsList(props) {
  const apiData = props.apiData;
  const [listItems, setListItems] = useState(apiData);
  return (
    <div className={styles.listWrapper}>
      {renderListItems(listItems, setListItems)}
      <div className={styles.submitButton} onClick={() => submitNewItemList(listItems)}>
        <p>Submit New List</p>
      </div>
    </div>
  );
}

export default ItemsList;
