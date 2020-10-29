





function theBeatlesPlay(mus, ins) {
  newArr = []
  for (let i = 0; i < mus.length; i++) {
    newArr.push(mus[i]+ins[i]);
  }
  return newArr;
}
