// 要求，找出两个数组的共有项

function findInterSection(arr1, arr2) {
  const map = new Map();
  const interSection = [];
  arr1.forEach((element) => {
    map.set(element, true);
  });
  console.log(map);
  arr2.forEach((element) => {
    if (map.has(element)) {
      interSection.push(element);
    }
  });
  return interSection;
}

const a = [1, 2, 3];
const b = [1, 3, 4];

const res = findInterSection(a, b);
console.log(res);
