# Typescript Decorator
[:fontawesome-solid-download: download source ts](scripts/decorator.ts){.md-button  .md-button--primary}
### Decorator Composition
Multiple decorators can be applied to a declaration, for example on a single line:
```typescript
@f @g x
method() { ... }
```

## Declare a Decorator

### Decorator Evaluation order:
1. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each _**instance**_ member.
2. Parameter Decorators, followed by Method, Accessor, or Property Decorators are applied for each **_static_** member.
3. Parameter Decorators are applied for the **_constructor_**.
4. Class Decorators are applied for the _**class**_.


```typescript linenums="1"
function customDecorator(value: boolean) {
    return function(target: any, // (1)
                    propertyKey: string, // (2) 
                    descriptor: PropertyDescriptor) // (3) 
    { 
        // Decorator logic here
        console.log(`Decorator applied to ${propertyKey}`);
    };
}
```

1. `target`  The target is the constructor function if we apply the decorator to a **static member** and the **prototype** of the class if it is applied on an instance property.
2. `propertyKey` is the **name** of the decorated method,
3. `descriptor` is the property descriptor of that method.
   ```typescript
   interface PropertyDescriptor {     
     configurable?: boolean     
     enumerable?: boolean     
     value?: any     
     writable?: boolean
   }
   ```


## Use a Decorator
### Method Decorator
```typescript linenums="1"
class MyClass {
    @customDecorator(false)
    myMethod() {
        console.log('Method executed');
    }
}
```


# Examples:
### example 1: Log Method Debug Info
> write a method decorator that logs the method name, arguments, and return value of the method, and its execution time.

```typescript linenums="1"
   class Foo {
       constructor() {
           console.log('Foo constructor called');
       }
       @LogDebugInfo
       add(a: number, b: number): number {
           return a + b;
       }
       @LogDebugInfo
       static multiply(a: number, b: number): number {
           return a * b;
       }
   }
   
   const foo = new Foo();
   console.log(foo.add(1, 2)); // Output: 3
   console.log(Foo.multiply(2, 3)); // Output: 6
```