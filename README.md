# invert-key-value

Invert key-value pairs of an object

## Install

```
$ npm install invert-kv
```

## Usage

```js
import invertKeyValue from 'invert-key-value';

invertKeyValue({ 1: "2", 3: "4" });
> { '2': '1', '4': '3' }
```
