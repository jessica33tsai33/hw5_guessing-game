let number

const getNumber = (forceRestart = false) => {
  // TODO:
  // generate a random number if number is undefined or forceRestart is true
  if(forceRestart === true || typeof number === 'undefined'){
    number = Math.floor(Math.random() * 100);
  }
  //console.log(number)
  return number
}

export default getNumber
