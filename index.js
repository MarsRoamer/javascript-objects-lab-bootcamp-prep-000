var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = Objects.assign({}. obj);
  newObj[key] = value;
  return newObj;

}
