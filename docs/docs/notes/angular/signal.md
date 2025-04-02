# Signal

> Create and Manage dynamic data, reactivity, manage state

### Use of Signal

```typescript
import { signal } from "@angular/core";
// Create a signal with the `signal` function.
const firstName = signal("Morgan");
// **Read** a signal value by calling it— signals are functions.
console.log(firstName());
// **Change** the value of this signal by calling its `**set**` method with a new value.
firstName.set("Jaime");
// You can also use the `**update**` method to change the value
// based on the **previous value**.
firstName.update((name) => name.toUpperCase());
```

# Types of Signal

## `computed` Signal

> produce its value based on other signals **read-only**

> **auto update**s changes when any of the signal it reads changes, think a getter function

```typescript
const name = signal("Mor");
const nameCap = compute(() => name().toUpperCase());

console.log(nameCap()); //MOR

name.set("za");
console.log(nameCap()); //ZA
```

# Example

### Simulate a counter:

=== "Description"

    ```typescript
    import { Component, signal } from '@angular/core';

    @Component({
    selector: 'app-counter',
    template: `
        <div>
        <h2>Count: {{ count() }}</h2>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
        <button (click)="reset()">Reset</button>
        </div>
    `
        })
        export class CounterComponent {
        // Create a signal with initial value 0
        __________________

        increment() {
            // Update signal value
            __________________
        }

        decrement() {
            __________________
        }

        reset() {
            // Set signal to specific value
            __________________
        }
    }
    ```

=== "Solution"

    ```typescript
    import { Component, signal } from '@angular/core';

    @Component({
    selector: 'app-counter',
    template: `
        <div>
        <h2>Count: {{ count() }}</h2>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">Decrement</button>
        <button (click)="reset()">Reset</button>
        </div>
    `
        })
        export class CounterComponent {
        // Create a signal with initial value 0
        count = signal(0);

        increment() {
            // Update signal value
            this.count.update(value => value + 1);
        }

        decrement() {
            this.count.update(value => value - 1);
        }

        reset() {
            // Set signal to specific value
            this.count.set(0);
        }
    }
    ```

### Array Stat

=== "Description"

    given a dynamic array of numbers in `signal`, create dynamic accessors that returns Total value, average, and length

    ```typescript
    items = signal<Array<number>>([1,2,3,4,5,6]);
    ```

=== "Solution"

    ```typescript linenums="1" title="array statistics"
    import { Component, signal, computed } from "@angular/core";
    import { bootstrapApplication } from "@angular/platform-browser";

    @Component({
        selector: "app-root",
        template: `
            <p>{{ items }}</p>
            <p>total: {{ total }}</p>
            <p>avg: {{ avg }}</p>
            <p>count: {{ count }}</p>
        `,
    })
    export class PlaygroundComponent {
        items = signal<Array<number>>([1, 2, 3, 4, 5, 6]);
        total = computed(() => this.items().reduce((sum, n) => sum + n, 0)); // (1)
        count = computed(() => this.items().length);
        avg = computed(() => this.total() / this.count());
    }
    ```

    1. [Array.reduce()](../javascript/ds/arrays.md)

=== "Output"

    ```
    [Signal: 1,2,3,4,5,6]

    total: [Computed: 21]

    avg: [Computed: 3.5]

    count: [Computed: 6]
    ```
