function whatIsInAName(collection, source) {
  const keys = Object.keys(source);
  for (let i = 0; i < keys.length; i++) {
    collection = collection.filter(
      (obj) => obj.hasOwnProperty(keys[i]) && obj[keys[i]] == source[keys[i]]
    );
  }
  return collection;
}

const result = whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);

console.log(result);
