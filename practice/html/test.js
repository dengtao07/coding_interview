// function dfs(tree, name) {
//   // 候选人代码实现
//   if (tree.name === name) {
//   	return {
//     	name: tree.name,
//       	code: tree.code,
//     };
//   }
//   if (tree.children) {
//     for (let index = 0; index < tree.children.length; index++) {
//   		const res = dfs(tree.children[index], name);
//       	if (res) return res;
//  	}
//   }
//   return null;
// }
// let tree = {
//   name: '中国',
//   children: [
//     {
//       name: '北京',
//       children: [
//         {
//           name: '朝阳群众',
//         },
//         {
//           name: '海淀区',
//         },
//         {
//           name: '昌平区',
//         },
//       ],
//     },
//     {
//       name: '浙江省',
//       children: [
//         {
//           name: '杭州市',
//           code: '0571',
//         },
//         {
//           name: '嘉兴市',
//         },
//         {
//           name: '绍兴市',
//         },
//         {
//           name: '宁波市',
//         },
//       ],
//     },
//   ],
// };

// let node = dfs(tree, '杭州市');
// console.log(node);

function maxNum(arr) {
  function sortFn(num1, num2) {
    num1 = `${num1}`;
    num2 = `${num2}`;
    let num1Len = num1.length;
    let num2Len = num2.length;
    let num1Index = 0;
    let num2Index = 0;

    while (1) {
      if (num1[num1Index] === num2[num2Index]) {
        num1Index++;
        num2Index++;
        if (num1Index === num1Len && num2Index < num2Len) {
          return +num2[num2Index] - (+num1[0]);
        }
        if (num2Index === num2Len && num1Index < num1Len) {
          return +num2[0] - (+num1[num1Index]);
        }
        if (num1Index === num2Len && num2Index === num2Len) {
          return +num2[num2Index] - (+num1[num1Index]);
        }
      } else {
        return +num2[num2Index - 1] - (+num1[num1Index - 1]);
      }
    }
  }
  return +arr.sort(sortFn).join('');
}

const res = maxNum([0, 4, 19, 41, 70]);
const res1 = maxNum([3, 30, 34, 5, 9]);
const res2 = maxNum([2, 3]);
const res4 = maxNum([]);
const res5 = maxNum([539, 53]);
console.log(res);
console.log(res1);
console.log(res2);
console.log(res4);
console.log(res5);

// const a = [123, 1561, 11, 0, 11111];
// const res3 = a.sort((a, b) => {
//   return a - b;
// });

// console.log(res3);

// function toInt(arr) {
//   let newArr = arr.sort((a, b) => {
//     a = `${a}`;
//     b = `${b}`;
//     let aLen = a.length;
//     let bLen = b.length;
//     let aIndex = 0;
//     let bIndex = 0;

//     while (aIndex < aLen && bIndex < bLen) {
//       let flag = false;
//       if (a[aIndex] === b[bIndex]) {
//         aIndex + 1 < aLen && (aIndex++, flag = true);
//         bIndex + 1 < bLen && (bIndex++, flag = true);
//       } else {
//         break;
//       }
//       if (!flag) {
//         break;
//       }
//     }
//     if (a[aIndex] > b[bIndex]) {
//       return -1;
//     }
//     return 1;
//   });
//   console.log(newArr);
//   return newArr.join('');
// }

// let intNum = toInt([534, 53]);
// console.log(intNum);
