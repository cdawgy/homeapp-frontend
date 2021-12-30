function removeItemFromList(dataList, updateStateCallback, index) {
  index = parseInt(index);
  const t = dataList.slice(0, index).concat(dataList.slice(index + 1));
  updateStateCallback(t);
}

function submitNewItemList(itemList) {
  console.log(`Submitted new items\nNew Items: ${itemList}`);
}

export default removeItemFromList;
export { submitNewItemList };