# core

**The Core Library** is @nrwl/js rather than @nrwl/nest because:

* **Language-Agnostic:** The core provide functionalities, such as utilities, constants, interfaces, and types, are not specific to NestJS and can be utilized by other parts of your application (like frontend frameworks) as well.
* **Reusability:** The shared components (like Money, Period, and DTOs) can be leveraged by both the backend and frontend applications, promoting code reuse.
* **Modularity:** Using @nrwl/js allows you to create a more flexible structure, enabling you to write pure JavaScript/TypeScript libraries that can be easily imported into any part of your monorepo.

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build core` to build the library.

## Running unit tests

Run `nx test core` to execute the unit tests via [Jest](https://jestjs.io).
