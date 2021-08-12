const map = new Map([['name', 'tao'], ['age', 12]]);

// 基本语法
// size属性
// Map.prototype.set(key, value)
// Map.prototype.get(key)
// Map.prototype.has(key)
// Map.prototype.delete(key)
// Map.prototype.clear()
console.log(map.size);
map.set('home', 'chengdu').set('gender', 'male');
map.has('home');
map.get('home');
map.delete('home');

// Map.prototype.keys()：返回键名的遍历器。
// Map.prototype.values()：返回键值的遍历器。
// Map.prototype.entries()：返回所有成员的遍历器。
// Map.prototype.forEach()：遍历 Map 的所有成员。
map.forEach((value, key, map1) => {
  console.log(value, key, map1);
});

console.log(map.keys());
for (const item of map.keys()) {
  console.log(item);
}

console.log(map.values());
for (const item of map.values()) {
  console.log(item);
}

console.log(map.entries());
for (const item of map.entries()) {
  console.log(item);
}

// 使用扩展运算符将遍历器转化为数组
console.log([...map]);
console.log([...map.keys()]);
console.log([...map.values()]);
console.log([...map.entries()]);
