# HTTP Client

from angular `@angular/common/http` package

-   provides simplified HTTP request API

### Convert to Promise Chaining:

simply do:

```typescript
this.http.get<>("/api/users").toPromise();
```

or if we cannot change the existing function:

```typescript
function httpRequestWithCB(param, cb, cbErr);

function convertToPromise(param) {
    new Promise<dataType>((resolve, reject) => {
        httpRequestWithCB(
            param,
            (data) => resolve(data),
            (err) => reject(err)
        );
    }).then(...)
}
```
