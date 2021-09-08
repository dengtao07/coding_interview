const p = Promise.resolve('1').then((res) => '2');
p.then((res) => console.log(res));
