# firenze-adapter-memory

[![Build Status](https://secure.travis-ci.org/fahad19/firenze-adapter-memory.png?branch=master)](http://travis-ci.org/fahad19/firenze-adapter-memory) [![npm](https://img.shields.io/npm/v/firenze-adapter-memory.svg)](https://www.npmjs.com/package/firenze-adapter-memory) [![Join the chat at https://gitter.im/fahad19/firenze](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-1dce73.svg)](https://gitter.im/fahad19/firenze)

In-memory database adapter for [firenze.js](https://github.com/fahad19/firenze)

## Install

Install it with [npm](https://npmjs.com):

```
$ npm install --save firenze-adapter-memory
```

Or [Bower](http://bower.io):

```
$ bower install --save firenze-adapter-memory
```

## Usage

### Node.js

```js
var f = require('firenze');
var Database = f.Database;
var MemoryAdapter = require('firenze-adapter-memory');

var db = new Database({
  adapter: MemoryAdapter
});
```

### Browser

```js
<script src="bower_components/lodash/lodash.min.js"></script>
<script src="bower_components/async/lib/async.js"></script>
<script src="bower_components/bluebird/js/browser/bluebird.min.js"></script>
<script src="bower_components/validator-js/validator.min.js"></script>

<script src="bower_components/firenze/dist/firenze.min.js"></script>
<script src="bower_components/firenze-adapter-memory/dist/firenze-adapter-memory.min.js"></script>

<script>
// Memory adapter is availble in `firenze.MemoryAdapter`
var db = new firenze.Database({
  adapter: firenze.MemoryAdapter
});
</script>
```

# Testing

Can be run via npm:

```
$ npm test
```

# License

MIT © [Fahad Ibnay Heylaal](http://fahad19.com)
