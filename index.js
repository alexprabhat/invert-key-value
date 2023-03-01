export default function invertKeyValue(object) {
  if (typeof object !== "object" || object === null) {
    throw new TypeError("Expected an object");
  } else {
    let result = {};
    for (let i = 0; i < Object.keys(object).length; i++) {
      result[Object.values(object)[i]] = Object.keys(object)[i];
    }
    return result;
  }
}
