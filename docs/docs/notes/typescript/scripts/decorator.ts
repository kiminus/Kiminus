function LogDebugInfo(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`propertyKey: ${propertyKey}`);
        console.log(`Target:`, target);
        console.log(`descriptor:`,descriptor);
        const originalMethod = descriptor.value;
        console.log('descriptor.value:', originalMethod);
        console.log('typeof descriptor.value:', typeof originalMethod);
        console.log('descriptor.value.name:', originalMethod.name);

        descriptor.value = function (...args: any[]) {
            const start = performance.now();
            const result = originalMethod.apply(this, args);
            const end = performance.now();
            console.log(`Execution time for ${propertyKey}: ${end - start} ms`);
            return result;
        };

        return descriptor;
}

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

