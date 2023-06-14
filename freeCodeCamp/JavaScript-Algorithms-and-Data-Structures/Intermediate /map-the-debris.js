function orbitalPeriod(arr) {
    
    const newArr = [];
  
    for (let elem in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
    }
  
    return newArr;
}

const getOrbPeriod = function(obj) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const k = 2 * Math.PI;
    const a3 = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(a3 / GM);
    const orbPeriod = Math.round(k * b);
    return {name: obj.name, orbitalPeriod: orbPeriod};
};

let result = orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

console.log(result)
