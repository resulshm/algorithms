function truthCheck(collection, pre) {
  for (let obj of collection) {
    if (!Boolean(obj[pre])) {
      return false;
    }
  }
  return true;
}

let result = truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
);

console.log(result);
