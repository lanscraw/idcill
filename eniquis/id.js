const ext = {
  foo: 42,
  bar: "hello",
  baz: [1, 2, 3],
  nested: {
    a: 10,
    b: 20
  }
};

const {
  foo,
  bar,
  baz,
  nested: { a, b },
  nonExistent = 'default value'
} = ext;

console.log(foo);         // 42
console.log(bar);         // hello
console.log(baz);         // [1, 2, 3]
console.log(a);           // 10
console.log(b);           // 20
console.log(nonExistent); // default value
