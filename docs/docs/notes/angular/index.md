# Angular :simple-angular:
### Angular Overview
- maintained by Google :simple-google:
- Platform:
    - CLI: `ng`
    - Angular Material: UI Components Library
    - Angular Universal: SSR
- Framework: offers libraries for routing and others
    - Modules (NgModules): Group components/services together
    - Components: UI building blocks with HTML/CSS/TS logic
    - Templates: Define the view layout using Angular syntax
    - Services: Business logic, typically injected via Dependency Injection (DI)
    - Routing: Navigates between components/pages
    - RxJS: Handles asynchronous events/reactive data flows
    - Directives/Pipes: Modify DOM or transform data in views
    - NgRx: Redux-style state management for large-scale apps
- Language: Primarily Typescript
- Rendering: Support server-side rendering (SSR) (using Angular Universal), or HR


### Angular features
1. Component Base Architecture
    - encapsulated
    - versatile with dependency architecture 
        - Modular, loosely-coupled, testable 
2. Reactivity
    - uses Angular Signals
    - compiler time optimizations?
3. SSR, SSG
    - Server send completed files to client
4. Router
    - navigation toolkit, route guards, data resolution, lazy-loading
5. form
6. Open source
7. Internationalization (i18n)
    - `translationService`

### comparison to React :simple-react:
| Criteria                 | **Angular**                                | **React**                             | **Vue**                               |
|--------------------------|--------------------------------------------|---------------------------------------|----------------------------------------|
| **Type**                 | Full-fledged framework                     | UI library                            | Progressive framework                   |
| **Language**             | TypeScript (officially)                    | JavaScript / TypeScript               | JavaScript / TypeScript                 |
| **Architecture**         | Opinionated (MVC-like)                     | Flexible (V in MVC)                   | Flexible, similar to React + Angular   |
| **Data Binding**         | Two-way + one-way                         | One-way only                          | Two-way (via `v-model`)                |
| **Dependency Injection** | Built-in                                   | External libraries needed             | Basic reactivity, optional DI plugins  |
| **CLI Tooling**          | Very powerful (Angular CLI)                | Create React App / Vite               | Vue CLI / Vite                          |
| **Routing**              | Official and integrated                    | External (e.g., React Router)         | Official (Vue Router)                  |
| **State Management**     | Optional NgRx (Redux-like)                 | Redux, MobX, Zustand, etc.            | Vuex / Pinia                           |
| **Learning Curve**       | Steep (more concepts)                      | Moderate                              | Gentle                                 |
| **Enterprise Support**   | Very strong (used by Google)               | Strong (used by Meta and community)   | Growing rapidly, Alibaba & others use it|

### Get Started
- Node.js - v^18.19.1 or newer
- [Angular CLI](cli.md): `npm install -g @angular/cli`
