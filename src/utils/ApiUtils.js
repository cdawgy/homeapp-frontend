const API_BASE_URL = "someUrl";

function fetchHomeListData() {
  return homeListData;
}

function fetchPersonalListData() {
  return personalListData;
}

function fetchHouseMembers() {
  return houseMemberList;
}

const houseMemberList = [
  {
    displayName: "Cdawgy",
    didPayLast: false,
  },
  {
    displayName: "Anna",
    didPayLast: false,
  },
  {
    displayName: "Smidz",
    didPayLast: true,
  },
];

const homeListData = [
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

const personalListData = [
  {
    itemName: "Coffee",
    itemIsAquired: true,
  },
  {
    itemName: "Eggs",
    itemIsAquired: false,
  },
  {
    itemName: "Yogurt",
    itemIsAquired: true,
  },
  {
    itemName: "Rice",
    itemIsAquired: false,
  },
  {
    itemName: "Spam",
    itemIsAquired: true,
  },
];

export default API_BASE_URL;
export { fetchHomeListData, fetchPersonalListData, fetchHouseMembers };
