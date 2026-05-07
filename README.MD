# JS Interview Prep

Runnable examples for senior JavaScript interviews. Each file has a `Run:` command at the top — paste it from the repository root.

---

## Contents

1. [Scope](#1-scope)
2. [Array Polyfills](#2-array-polyfills)
3. [Functions](#3-functions)
4. [Objects](#4-objects)
5. [Promises & Async](#5-promises--async)
6. [Timings](#6-timings)
7. [Compose & Pipe](#7-compose--pipe)
8. [OOP & Inheritance](#8-oop--inheritance)
9. [Design Patterns](#9-design-patterns)
10. [SOLID Principles](#10-solid-principles)
11. [Advanced Features](#11-advanced-features)
12. [Not Yet Implemented](#not-yet-implemented)

---

## 1. Scope

**Concepts:** `var` function scope, hoisting, `let`/`const` block scope, output prediction.

| File | What it shows |
|------|---------------|
| [1. scope-var.js](1.%20scope/1.%20scope-var.js) | `var` is function-scoped — block re-declaration overwrites the function-level variable |
| [2. hoisting.js](1.%20scope/2.%20hoisting.js) | `var` declarations are hoisted as `undefined`; the assignment stays in place |
| [3. scope-const-let.js](1.%20scope/3.%20scope-const-let.js) | `let`/`const` create a new binding per block — no leakage |
| [4. guess/1. snippet.js](1.%20scope/4.%20guess/1.%20snippet.js) | `var` can be re-declared in the same scope; `let`/`const` cannot |
| [4. guess/2. snippet.js](1.%20scope/4.%20guess/2.%20snippet.js) | Hoisting inside a function — prints `undefined` before assignment |
| [4. guess/3. snippet.js](1.%20scope/4.%20guess/3.%20snippet.js) | `var` leaks out of a block; `let` is confined to it |
| [4. guess/4. snippets.js](1.%20scope/4.%20guess/4.%20snippets.js) | `const` mutation throws `TypeError`; IIFE creates a private scope |

---

## 2. Array Polyfills

**Concepts:** Re-implementing native array methods to understand their internals.

| File | What it shows |
|------|---------------|
| [1. map.js](2.%20array/polyfills/1.%20map.js) | `Array.prototype.map` — transform each element, support `thisArg` |
| [2. reduce.js](2.%20array/polyfills/2.%20reduce.js) | `Array.prototype.reduce` — fold to a single value, handle no initial value |
| [3. forEach.js](2.%20array/polyfills/3.forEach.js) | `Array.prototype.forEach` — iterate without a return value |

**Not implemented:** `filter`, `find`, `findIndex`, `some`, `every`, `flat`, `flatMap`

---

## 3. Functions

**Concepts:** Module pattern, infinite currying.

| File | What it shows |
|------|---------------|
| [1. modularjs.js](3.%20functions/1.%20modularjs.js) | IIFE module pattern — private state, controlled public API |
| [2. infinitecurry.js](3.%20functions/2.infinitecurry.js) | Infinite curry via recursive closure; terminates on empty call `()` |

**Not implemented:** Memoization

---

## 4. Objects

**Concepts:** Reference semantics, copy strategies, `this` binding.

| File | What it shows |
|------|---------------|
| [1. objects.js](4.%20objects/1.%20objects.js) | Objects assigned by reference; default parameters are re-evaluated each call |
| [2. deep_copy.js](4.%20objects/2.%20deep_copy.js) | Shallow copy (`Object.assign`) vs deep copy (`JSON.parse/stringify`) |
| [3. thisBinding.js](4.%20objects/3.%20thisBinding.js) | Constructor, method, and detached `this` binding |

**Not implemented:** Custom `call`/`apply`/`bind`, nested property access (`lodash.get/set`), `Object.freeze`

---

## 5. Promises & Async

**Concepts:** Callback hell, Promise basics, chaining, combinators, polyfills.

| File | What it shows |
|------|---------------|
| [1. callbackhell.js](5.%20Promise/1.%20callbackhell.js) | Nested callbacks — hard to read, hard to handle errors |
| [2. promise.js](5.%20Promise/2.%20promise.js) | Promise basics — resolve, reject, `.then`, `.catch`, `.finally` |
| [3. promisechain.js](5.%20Promise/3.%20promisechain.js) | Flat `.then` chain replacing nested callbacks |
| [4. combinators.js](5.%20Promise/4.%20combinators.js) | `Promise.all`, `.allSettled`, `.race`, `.any` — uncomment one at a time |
| [polyfills/1. promise.js](5.%20Promise/polyfills/1.%20promise.js) | Promise built from scratch |
| [polyfills/2. all.js](5.%20Promise/polyfills/2.%20all.js) | `Promise.all` built from scratch |

**Not implemented:** `async`/`await` syntax, `allSettled`/`race`/`any` polyfills, event loop visualization

---

## 6. Timings

**Concepts:** Rate-limiting function calls.

| File | What it shows |
|------|---------------|
| [1. debounce.js](6.%20timings/1.%20debounce.js) | Debounce — delay until quiet period; every call resets the timer |
| [2. throttle.js](6.%20timings/2.%20throttle.js) | Throttle — at most once per interval; fires immediately on first call |

---

## 7. Compose & Pipe

**Concepts:** Function composition — order of application matters.

| File | What it shows |
|------|---------------|
| [1. compose.js](7.%20compose/1.%20compose.js) | `compose` — applies functions right-to-left |
| [2. pipe.js](7.%20compose/2.%20pipe.js) | `pipe` — applies functions left-to-right |

---

## 8. OOP & Inheritance

**Concepts:** ES6 class syntax vs pre-ES6 prototype chains — same result, different syntax.

| File | What it shows |
|------|---------------|
| [new/1. inheritance.js](8.%20oops/new/1.%20inheritance.js) | ES6 `class`, `extends`, `super`, method override, `static` |
| [old/1. inheritance.js](8.%20oops/old/1.%20inheritance.js) | Prototypal inheritance via `Object.create` and `.call` |

---

## 9. Design Patterns

**Concepts:** Structural and behavioral patterns with icecream-domain examples.

| File | Pattern | What it shows |
|------|---------|---------------|
| [1. observer.js](9.%20patterns/1.%20observer.js) | Observer | Subscribe/unsubscribe; notify all listeners on state change |
| [2. adapter.js](9.%20patterns/2.%20adapter.js) | Adapter | Translate a legacy interface to the expected interface |
| [3. singleton.js](9.%20patterns/3.%20singleton.js) | Singleton | One instance shared across all callers |
| [4. factory.js](9.%20patterns/4.%20factory.js) | Factory | Centralised object creation based on input type |
| [5. proxy.js](9.%20patterns/5.%20proxy.js) | Proxy | Intercept property access to hide or transform values |
| [6. decorator.js](9.%20patterns/6.%20decorator.js) | Decorator | Wrap a service to add logging without changing its interface |

---

## 10. SOLID Principles

Each file shows a **bad** implementation and a **good** implementation side by side.

| File | Principle |
|------|-----------|
| [1. s.js](10.%20principles/solid/1.%20s.js) | **S** — Single Responsibility: one class, one reason to change |
| [2. o.js](10.%20principles/solid/2.%20o.js) | **O** — Open/Closed: add new behaviour by adding classes, not editing existing ones |
| [3. l.js](10.%20principles/solid/3.%20l.js) | **L** — Liskov Substitution: subclasses must not break the parent's contract |
| [4. i.js](10.%20principles/solid/4.%20i.js) | **I** — Interface Segregation: don't force classes to implement methods they don't use |
| [5. d.js](10.%20principles/solid/5.%20d.js) | **D** — Dependency Inversion: inject abstractions; don't hard-wire implementations |

---

## 11. Advanced Features

**Concepts:** Lesser-known but frequently asked JS features.

| File | What it shows |
|------|---------------|
| [1. symbol.js](11.%20advance/1.%20symbol.js) | `Symbol` — unique primitive keys hidden from `Object.keys` and JSON |
| [2. iterator.js](11.%20advance/2.%20iterator.js) | Iterator protocol — `[Symbol.iterator]`, `next()`, `for...of` compatibility |
| [3. generator.js](11.%20advance/3.%20generator.js) | Generator basics — `function*`, `yield`, lazy one-at-a-time evaluation |
| [4. generator._1.js](11.%20advance/4.%20generator._1.js) | Generator two-way communication — sending values back in via `.next(value)` |
| [5. map_set.js](11.%20advance/5.%20map_set.js) | `Map`/`Set` — any-type keys, deduplication, `.size`, strong references |
| [6. weak_map_set.js](11.%20advance/6.%20weak_map_set.js) | `WeakMap` — weak references, GC-eligible keys, no size or iteration |

---

## Not Yet Implemented

| Topic | Where it belongs |
|-------|-----------------|
| `async`/`await` syntax | Add to section 5 alongside promise chain |
| `filter`, `find`, `some`, `every`, `flat` polyfills | Add to section 2 |
| Memoization | Add to section 3 |
| Custom `call`/`apply`/`bind` | Add to section 4 |
| Destructuring | New section — array/object destructuring, defaults, renaming |
| Type coercion | New section — `==` vs `===`, implicit conversions, `+` quirks |
| Error handling | New section — custom errors, `try`/`catch`/`finally`, async propagation |
| TypeScript | New section — generics, interfaces, utility types |
