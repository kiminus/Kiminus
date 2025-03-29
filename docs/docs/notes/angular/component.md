# Component
## `@Component`
1. `style`/`styleUrl`: a CSS stylesheet defines the style of component
2. `template`/`templateUrl`: defines theHTML that renders into DOM
3. `selector` : defines the HTML tag of the component, equivalent to `customElements.define(CustomComponent, custom)`

### use other components to build page
add `imports: [comp1, comp2, ....]` to import the components we need

```typescript
import {UserLoginComponent} from "user-login.ts"
@Component({
    selector: 'user-profile',
    templateUrl: 'user-profile.html'
    styleUrl: 'user-profile.css',
    imports: [UserLoginComponent]
})
export class UserProfileComponent() {...}
```