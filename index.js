





function theBeatlesPlay(mus, ins) {
  let newArr = [];
  for (let i = 0; i < mus.length; i++) {
    newArr.push(mus[i] + ' plays ' + ins[i]);
  }
  return newArr;
}
