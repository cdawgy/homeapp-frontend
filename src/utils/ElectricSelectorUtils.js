function placeArrowYCoords(houseMembers) {
  let yPos = 22;
  const memberLength = houseMembers.length;

  for (let i = 0; i < memberLength; i++) {
    if (!houseMembers[i].didPayLast) {
      yPos += 57;
    } else {
      break;
    }
  }

  return yPos;
}

export default placeArrowYCoords;
