/**
 * class decorator
 * @param constructor
 */
function LogClassDecorator(constructor: Function) {
    console.log("constructor:", constructor);
}

/**
 * method decorator
 * @param target
 * @param propertyKey
 * @param descriptor
 * @returns
 */
function LogDebugInfo(pattern: string = "[{name}]({params}) -> {result}\nExec Time: {time} ms") {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value as Function;
        console.log(originalMethod.toString());
        console.log(typeof originalMethod);
        descriptor.value = function (...args: any[]) {
            const start = performance.now();
            const res = originalMethod.apply(this, args);
            const end = performance.now();
            const time = end - start;
            console.log(
                pattern
                    .replace("{name}", propertyKey)
                    .replace("{params}", args.join(", "))
                    .replace("{result}", res)
                    .replace("{time}", time.toString())
            );
        };
    };
}

/**
 * accessor decorator
 * @param target
 * @param key
 * @param descriptor
 */
function LogAccessorDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
    console.log("target:", target);
    console.log("key:", key);
    console.log("descriptor:", descriptor);
}

function LogPropertyDecorator(target: any, key: string) {
    console.log("target:", target);
    console.log("key:", key);
}

function LogParameterDecorator(target: any, key: string) {
    console.log("target:", target);
    console.log("key:", key);
}
@LogClassDecorator
class Foo {
    @LogPropertyDecorator
    private _pv: number;
    @LogParameterDecorator
    id: number = 0;
    constructor() {
        console.log("Foo constructor called");
        this._pv = 0;
    }
    @LogAccessorDecorator
    get pv(): number {
        return this._pv;
    }
    @LogDebugInfo()
    add(a: number, b: number): number {
        return a + b;
    }
    @LogDebugInfo()
    static multiply(a: number, b: number): number {
        return a * b;
    }
}

const foo = new Foo();
console.log(foo.add(1, 2)); // Output: 3
console.log(Foo.multiply(2, 3)); // Output: 6

//examples 2:
// decorator factory that takes len parameter
// Detailed implementation with console logs to track each stage
function MinLength(len: number) {
    console.log(`[Decorator Factory] MinLength called with length: ${len}`);

    // Decorator function that will be applied to the property
    return function (target: any, propertyKey: string) {
        console.log(`[Decorator] Applied to target:`, target);
        console.log(`[Decorator] Property key: ${propertyKey}`);

        // Storage for the actual value
        let value: string;

        // Create property descriptor
        const descriptor: PropertyDescriptor = {
            // Getter
            get() {
                console.log(`[Getter] Retrieving value: ${value}`);
                return value;
            },

            // Setter with validation
            set(newValue: string) {
                console.log(`[Setter] Attempting to set value: ${newValue}`);

                // Validation logic
                if (newValue.length < len) {
                    console.log(`[Validation] Length check failed`);
                    throw new Error(`${propertyKey} must be at least ${len} characters long`);
                }

                console.log(`[Validation] Length check passed`);
                value = newValue;
            },
            enumerable: true,
            configurable: true,
        };

        // Replace the property with our custom descriptor
        console.log(`[Property Definition] Defining property with custom descriptor`);
        Object.defineProperty(target, propertyKey, descriptor);
    };
}

// User class with the decorator
class User {
    @MinLength(5)
    username: string;

    constructor(username: string) {
        console.log(`[Constructor] Creating user with username: ${username}`);
        this.username = username;
    }
}

// Demonstration of different scenarios
console.log("--- Scenario 1: Valid Username ---");
try {
    const user = new User("johndoe");
    console.log(`Created user with username: ${user.username}`);
} catch (error: any) {
    console.error(error.message);
}

console.log("\n--- Scenario 2: Invalid Username ---");
try {
    const user = new User("john");
} catch (error: any) {
    console.error(error.message);
}

console.log("\n--- Scenario 3: Changing Username After Creation ---");
try {
    const user = new User("johndoe");
    console.log(`Initial username: ${user.username}`);

    // Attempt to change username
    user.username = "a";
} catch (error: any) {
    console.error(error.message);
}
