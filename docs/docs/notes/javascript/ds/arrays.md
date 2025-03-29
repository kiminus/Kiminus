# Arrays

## `Array.prototype.reduce()`

### Signature
> `reduce(callbackFn, initialValue?)`

### Exception
`TypeError`: throw error **if array is empty, AND `initialValue` is not provided**

### workflow
- an iterative method
- runs `cbfn` over all elements in the array in ascending order
- run `cbfn(ans, element) => ans` until element is null
  - NOT invoked for empty element
  - NOT support `thisArg` = `undefined`, gets substituted with `globalThis` if non-strict

### Edge case
- default `initialValue = 0`

### example, get Max
```typescript
[1,5,2,12,124,54].reduce((ans, n) => Math.max(ans, n), 30); //124
```
### example, get sum
```typescript
[1,5,2,12,124,54].reduce((ans, n) => ans + n, 30); //124
```


