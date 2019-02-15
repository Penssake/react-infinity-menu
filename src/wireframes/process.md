# TODO & README prep

## Initial set

- [ x ] Create data array/objects - branch hello-world
- [ x ] Hello World app - branch hello-world
- [ x ] README - branch hello-world
- [ x ] Set-up file structure - branch file-structure-webpack
- [ x ] Deploy web pack - branch file-structure-webpack
- [ x ] Collect assets - branch assets-collection
- [ x ] Create color scheme - 3 minimum - monochromatic - branch assets-collection

### Component order - STATE

- App - stateless - contains Router
- Landing - stateless
- Header - stateless
- Hamburger - stateful - open/close - children UI depends on state
- PARENT TO SUB HEADER - index.js
- - WindowWatch - stateless - hamburgerClosed = sub-header.
- - User - stateful - hamburgerOpen = sub-header
- NavContainer - stateless - receives data props from import - passes down data&&className props
- - NestedNav - stateful - receives data and class props from NavContainer - state = data
- - - METHODS: lifecycle methods | map data method that applies classNames passed by parent.
- - - RETURNS: built Menu

### Nav Data Structure - ‘nav-data/data.js’

- First child object is Parent with nested parent.
- Second child object is childless Parent.
- Third is Parent with NestedParent with children.

```js
export const data = [

{ id: 0, title: Parent, children: [
    { id: 9, title: child, url: Link } ]},

{ id: 1, title: Parent, url: Link },

{ id: 2, title: Parent, children: [
    { title: Nested Parent, children: [
        { id: 10, title: child, url: Link },
        { id: 11, title: child, url: Link } ]},
]
```