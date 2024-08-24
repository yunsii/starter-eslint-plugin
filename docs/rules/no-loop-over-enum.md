# Avoid looping over enums (`e// @ts-expect-error-errorlinting/no-loop-over-enums`)

💭 This rule requires [type information](https://typescript-eslint.io/linting/typed-linting).

<!-- end auto-generated rule header -->

Example rule that demonstrates banning `for-in` looping over `enum`s.

## Valid

```ts
const values1 = {}
for (const a in values1) {
  // ...
}
```

```ts
const values2: string[] = []
for (const a of values2) {
  // ...
}
```

## Invalid

```ts
enum Values {
  Foo = 'foo'
}
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
for (const a of Values) {
  // ...
}
```
