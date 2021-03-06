this["firenze"] = this["firenze"] || {}; this["firenze"]["MemoryAdapter"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Memory = __webpack_require__(1);

	var _Memory2 = _interopRequireDefault(_Memory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Memory2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Adapter = __webpack_require__(2);

	var _Adapter2 = _interopRequireDefault(_Adapter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Adapter2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _2 = __webpack_require__(4);

	var _3 = _interopRequireDefault(_2);

	var _Query = __webpack_require__(22);

	var _Query2 = _interopRequireDefault(_Query);

	var _Schema = __webpack_require__(24);

	var _Schema2 = _interopRequireDefault(_Schema);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable new-cap */

	var Adapter = _3.default.Adapter;

	var MemoryAdapter = (function (_Adapter) {
	  _inherits(MemoryAdapter, _Adapter);

	  function MemoryAdapter() {
	    var givenOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, MemoryAdapter);

	    var options = _extends({
	      queryClass: _Query2.default,
	      schemaClass: _Schema2.default
	    }, givenOptions);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MemoryAdapter).call(this, options));

	    _this.options = options;
	    _this.data = {};
	    return _this;
	  }

	  _createClass(MemoryAdapter, [{
	    key: 'getData',
	    value: function getData() {
	      var path = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	      if (!path) {
	        return this.data;
	      }

	      return _lodash2.default.get(this.data, path);
	    }
	  }, {
	    key: 'setData',
	    value: function setData() {
	      var path = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
	      var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	      return _lodash2.default.set(this.data, path, value);
	    }
	  }, {
	    key: 'getConnection',
	    value: function getConnection() {
	      return this.data;
	    }
	  }]);

	  return MemoryAdapter;
	})(Adapter);

	exports.default = MemoryAdapter;

/***/ },
/* 3 */
/***/ function(module, exports) {

	(function() { module.exports = this["_"]; }());

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Database = __webpack_require__(5);

	var _Database2 = _interopRequireDefault(_Database);

	var _Adapter = __webpack_require__(14);

	var _Adapter2 = _interopRequireDefault(_Adapter);

	var _Collection = __webpack_require__(7);

	var _Collection2 = _interopRequireDefault(_Collection);

	var _Model = __webpack_require__(13);

	var _Model2 = _interopRequireDefault(_Model);

	var _Behavior = __webpack_require__(19);

	var _Behavior2 = _interopRequireDefault(_Behavior);

	var _Query = __webpack_require__(15);

	var _Query2 = _interopRequireDefault(_Query);

	var _Expression = __webpack_require__(16);

	var _Expression2 = _interopRequireDefault(_Expression);

	var _Functions = __webpack_require__(17);

	var _Functions2 = _interopRequireDefault(_Functions);

	var _Schema = __webpack_require__(18);

	var _Schema2 = _interopRequireDefault(_Schema);

	var _Migration = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Migration\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Migration2 = _interopRequireDefault(_Migration);

	var _Promise = __webpack_require__(11);

	var _Promise2 = _interopRequireDefault(_Promise);

	var _collectionFactory = __webpack_require__(6);

	var _collectionFactory2 = _interopRequireDefault(_collectionFactory);

	var _modelFactory = __webpack_require__(20);

	var _modelFactory2 = _interopRequireDefault(_modelFactory);

	var _behaviorFactory = __webpack_require__(21);

	var _behaviorFactory2 = _interopRequireDefault(_behaviorFactory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  Database: _Database2.default,
	  Adapter: _Adapter2.default,

	  Collection: _Collection2.default,
	  Model: _Model2.default,
	  Behavior: _Behavior2.default,

	  Query: _Query2.default,
	  Expression: _Expression2.default,
	  Functions: _Functions2.default,

	  Schema: _Schema2.default,
	  Migration: _Migration2.default,

	  Promise: _Promise2.default,

	  createCollection: (0, _collectionFactory2.default)(),
	  createModel: (0, _modelFactory2.default)(),
	  createBehavior: (0, _behaviorFactory2.default)()
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _collectionFactory = __webpack_require__(6);

	var _collectionFactory2 = _interopRequireDefault(_collectionFactory);

	var _Promise = __webpack_require__(11);

	var _Promise2 = _interopRequireDefault(_Promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Database = (function () {
	  function Database() {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Database);

	    this.defaultOptions = {
	      adapter: null,
	      host: null,
	      user: null,
	      database: null,
	      password: null,
	      prefix: null
	    };

	    this.options = _lodash2.default.merge(this.defaultOptions, options);

	    var AdapterClass = this.options.adapter;
	    this.adapter = new AdapterClass(_lodash2.default.omit(this.options, 'adapter'));

	    this.createCollection = (0, _collectionFactory2.default)(this);
	  }

	  _createClass(Database, [{
	    key: 'getAdapter',
	    value: function getAdapter() {
	      return this.adapter;
	    }
	  }, {
	    key: 'query',
	    value: function query() {
	      return this.adapter.query();
	    }
	  }, {
	    key: 'schema',
	    value: function schema() {
	      return this.adapter.schema();
	    }
	  }, {
	    key: 'getConnection',
	    value: function getConnection() {
	      return this.getAdapter().getConnection();
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      var _this = this;

	      return new _Promise2.default(function (resolve) {
	        return _this.getAdapter().closeConnection().then(function () {
	          return resolve();
	        });
	      });
	    }
	  }]);

	  return Database;
	})();

	exports.default = Database;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Collection = __webpack_require__(7);

	var _Collection2 = _interopRequireDefault(_Collection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = function () {
	  var db = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	  return function () {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var Collection = (function (_C) {
	      _inherits(Collection, _C);

	      function Collection() {
	        var _extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        _classCallCheck(this, Collection);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collection).call(this, extend));

	        if (!_this.getDatabase() && db) {
	          _this.setDatabase(db);
	        }

	        _lodash2.default.merge(_this, _extend);
	        return _this;
	      }

	      return Collection;
	    })(_Collection2.default);

	    return Collection;
	  };
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /* eslint-disable new-cap, no-shadow */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _async = __webpack_require__(8);

	var _async2 = _interopRequireDefault(_async);

	var _validator = __webpack_require__(9);

	var _validator2 = _interopRequireDefault(_validator);

	var _getParams = __webpack_require__(10);

	var _getParams2 = _interopRequireDefault(_getParams);

	var _Promise = __webpack_require__(11);

	var _Promise2 = _interopRequireDefault(_Promise);

	var _Model = __webpack_require__(13);

	var _Model2 = _interopRequireDefault(_Model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Collection = (function () {
	  function Collection() {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Collection);

	    this.modelClass = _Model2.default;
	    this.table = null;
	    this.schema = {};
	    this.primaryKey = 'id';
	    this.displayField = null;
	    this.validationRules = {};
	    this.behaviors = [];
	    this.loadedBehaviors = [];

	    _lodash2.default.merge(this, extend);

	    if (!this.alias) {
	      this.alias = this.table;
	    }

	    this.loadBehaviors();
	    this.callBehavedMethod(this, 'collectionInitialize');
	  }

	  _createClass(Collection, [{
	    key: 'model',
	    value: function model() {
	      var attributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	      var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      _lodash2.default.merge(extend, {
	        collection: this
	      });

	      return new this.modelClass(attributes, extend);
	    }
	  }, {
	    key: 'getDatabase',
	    value: function getDatabase() {
	      return this.db;
	    }
	  }, {
	    key: 'setDatabase',
	    value: function setDatabase(db) {
	      this.db = db;
	    }
	  }, {
	    key: 'getAdapter',
	    value: function getAdapter() {
	      return this.getDatabase().getAdapter();
	    }
	  }, {
	    key: 'query',
	    value: function query() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      return this.getAdapter().query(_extends({}, options, {
	        collection: this
	      }));
	    }
	  }, {
	    key: 'find',
	    value: function find() {
	      return this.query().from(this.table, this.alias);
	    }
	  }, {
	    key: 'findBy',
	    value: function findBy(field, value) {
	      return this.find().where(_defineProperty({}, field, value)).first();
	    }
	  }, {
	    key: 'findAllBy',
	    value: function findAllBy(field, value) {
	      return this.find().where(_defineProperty({}, field, value)).all();
	    }
	  }, {
	    key: 'findById',
	    value: function findById(value) {
	      return this.findBy(this.primaryKey, value);
	    }
	  }, {
	    key: 'findByKey',
	    value: function findByKey(value) {
	      return this.findById(value);
	    }
	  }, {
	    key: 'validate',
	    value: function validate(model) {
	      var _this //eslint-disable-line
	      = this;

	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var callbacks = _lodash2.default.isUndefined(options.callbacks) || options.callbacks;

	      return new _Promise2.default(function (resolve, reject) {
	        return _async2.default.waterfall([function (cb) {
	          if (!callbacks) {
	            return cb(null, true);
	          }

	          return _this.callBehavedMethod(model, 'beforeValidate').then(function (proceed) {
	            return cb(null, proceed);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }, function (proceed, cb) {
	          return _this._validate(model).then(function (res) {
	            if (res === true) {
	              return cb(null, true);
	            }

	            return cb(res);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }, function (res, cb) {
	          if (!callbacks) {
	            return cb(null, res);
	          }

	          return _this.callBehavedMethod(model, 'afterValidate').then(function () {
	            return cb(null, res);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }], function (err, result) {
	          if (err) {
	            if (_lodash2.default.isObject(err)) {
	              return resolve(err);
	            }

	            return reject(err);
	          }

	          return resolve(result);
	        });
	      });
	    }
	  }, {
	    key: '_validate',
	    value: function _validate(model) {
	      var _this2 = this;

	      //eslint-disable-line
	      var fields = [];
	      _lodash2.default.each(model.toObject(), function (v, field) {
	        if (!_lodash2.default.isObject(v)) {
	          fields.push(field);
	        }
	      });

	      _lodash2.default.each(this.schema, function (schema, field) {
	        if (_lodash2.default.isUndefined(schema.validate)) {
	          return;
	        }

	        if (_lodash2.default.isObject(schema.validate) && schema.validate.required) {
	          fields.push(field);
	          return;
	        }

	        if (!_lodash2.default.isArray(schema.validate)) {
	          return;
	        }

	        _lodash2.default.each(schema.validate, function (ruleObj) {
	          if (ruleObj.required) {
	            fields.push(field);
	          }
	        });
	      });

	      fields = _lodash2.default.uniq(fields);
	      var list = {};

	      return new _Promise2.default(function (resolve, reject) {
	        _async2.default.mapSeries(fields, function (field, cb) {
	          _this2.validateField(model, field).then(function (validated) {
	            if (validated !== true) {
	              list[field] = validated;
	            }

	            cb();
	          }).catch(function (error) {
	            cb(error);
	          });
	        }, function (err) {
	          if (err) {
	            return reject(err);
	          }

	          if (_lodash2.default.isEmpty(list)) {
	            return resolve(true);
	          }

	          return resolve(list);
	        });
	      });
	    }
	  }, {
	    key: 'validateField',
	    value: function validateField(model, field) {
	      var _this3 = this;

	      var givenValue = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	      var value = !givenValue ? model.get(field) : givenValue;

	      var fieldSchema = this.schema[field];
	      if (!_lodash2.default.isObject(fieldSchema) || !fieldSchema.validate) {
	        return new _Promise2.default.resolve(true); //eslint-disable-line
	      }

	      var validate = fieldSchema.validate;
	      if (!_lodash2.default.isArray(validate)) {
	        validate = [validate];
	      }

	      return new _Promise2.default(function (resolve) {
	        _async2.default.eachSeries(validate, function (ruleObj, cb) {
	          var rule = ruleObj.rule;
	          var ruleName = undefined;
	          var ruleOptions = [];
	          var message = ruleObj.message;

	          var validatorFunc = undefined;
	          var validatorOptions = undefined;

	          if (_lodash2.default.isString(rule)) {
	            ruleName = rule;
	          } else if (_lodash2.default.isArray(rule)) {
	            ruleName = _lodash2.default.first(rule);
	            ruleOptions = _lodash2.default.rest(rule);
	          }

	          if (_lodash2.default.isFunction(rule)) {
	            // rule is a direct function
	            validatorFunc = rule;
	            validatorOptions = [field, value];
	          } else if (ruleName && _lodash2.default.isFunction(_this3.validationRules[ruleName])) {
	            // rule is an pre-defined function
	            validatorFunc = _this3.validationRules[ruleName];
	            validatorOptions = [field, value];
	          } else if (_lodash2.default.isFunction(_validator2.default[ruleName])) {
	            // validator.js
	            validatorFunc = _validator2.default[ruleName];
	            validatorOptions = [value].concat(ruleOptions);
	          } else {
	            // no rule found
	            return cb(message);
	          }

	          var params = (0, _getParams2.default)(validatorFunc);
	          if (_lodash2.default.last(params) === 'done') {
	            // async
	            validatorOptions.push(function (passed) {
	              if (!passed) {
	                return cb(message);
	              }

	              cb();
	            });
	          } else {
	            // sync
	            var passed = validatorFunc.apply(model, validatorOptions);

	            if (!passed) {
	              return cb(message);
	            }

	            cb();
	          }
	        }, function (err) {
	          if (err) {
	            return resolve(err);
	          }

	          return resolve(true);
	        });
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save(model) {
	      var _this4 //eslint-disable-line
	      //eslint-disable-line
	      = this;

	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var callbacks = _lodash2.default.isUndefined(options.callbacks) || options.callbacks;

	      return new _Promise2.default(function (resolve, reject) {
	        return _async2.default.waterfall([function (cb) {
	          if (!callbacks) {
	            return cb(null, true);
	          }

	          return _this4.callBehavedMethod(model, 'beforeSave').then(function (proceed) {
	            if (proceed === true) {
	              return cb(null, proceed);
	            }

	            return cb(proceed);
	          });
	        }, function (proceed, cb) {
	          if (!_lodash2.default.isUndefined(options.validate) && options.validate === false) {
	            return _this4._save(model, options).then(function (model) {
	              return cb(null, model);
	            }).catch(function (error) {
	              return cb(error);
	            });
	          }

	          return _this4.validate(model).then(function (validated) {
	            if (validated === true) {
	              return _this4._save(model, options).then(function (model) {
	                return cb(null, model);
	              }).catch(function (error) {
	                return cb(error);
	              });
	            }

	            return cb({
	              validationErrors: validated
	            });
	          });
	        }, function (result, cb) {
	          if (!callbacks) {
	            return cb(null, model);
	          }

	          return _this4.callBehavedMethod(model, 'afterSave').then(function () {
	            return cb(null, model);
	          });
	        }], function (err, result) {
	          if (err) {
	            return reject(err);
	          }

	          return resolve(result);
	        });
	      });
	    }
	  }, {
	    key: '_save',
	    value: function _save(model) {
	      var _this5 = this;

	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var obj = model.toObject();
	      return new _Promise2.default(function (resolve, reject) {
	        var q = null;

	        if (model.isNew()) {
	          q = _this5.query().create(obj);
	        } else {
	          obj = _lodash2.default.omit(obj, model.primaryKey);
	          if (_lodash2.default.isArray(options.fields)) {
	            obj = _lodash2.default.pick(obj, options.fields);
	          }

	          q = _this5.query().where(_defineProperty({}, _this5.primaryKey, model.getId())).update(obj);
	        }

	        q.run().then(function (ids) {
	          var id = null;
	          if (_lodash2.default.isArray(ids) && ids.length === 0 || !ids) {
	            return resolve(id);
	          } else if (_lodash2.default.isArray(ids)) {
	            id = ids[0];
	          } else {
	            id = ids;
	          }

	          return _this5.model({ id: id }).fetch().then(function (m) {
	            resolve(m);
	          }).catch(function (error) {
	            reject(error);
	          });
	        }).catch(reject);
	      });
	    }
	  }, {
	    key: 'delete',
	    value: function _delete(model) {
	      var _this6 //eslint-disable-line
	      = this;

	      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var callbacks = _lodash2.default.isUndefined(options.callbacks) || options.callbacks;

	      return new _Promise2.default(function (resolve, reject) {
	        return _async2.default.waterfall([function (cb) {
	          if (!callbacks) {
	            return cb(null, true);
	          }

	          return _this6.callBehavedMethod(model, 'beforeDelete').then(function (proceed) {
	            return cb(null, proceed);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }, function (proceed, cb) {
	          return _this6._delete(model, _this6).then(function (res) {
	            return cb(null, res);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }, function (result, cb) {
	          return _this6.callBehavedMethod(model, 'afterDelete').then(function () {
	            return cb(null, result);
	          }).catch(function (error) {
	            return cb(error);
	          });
	        }], function (err, result) {
	          if (err) {
	            return reject(err);
	          }

	          return resolve(result);
	        });
	      });
	    }
	  }, {
	    key: '_delete',
	    value: function _delete(model) {
	      var _this7 = this;

	      return new _Promise2.default(function (resolve, reject) {
	        if (model.isNew()) {
	          var error = new Error('Cannot delete a model without ID');
	          return reject(error);
	        }

	        _this7.query().delete().where(_defineProperty({}, _this7.primaryKey, model.getId())).run().then(resolve).catch(reject);
	      });
	    }
	  }, {
	    key: 'loadBehaviors',
	    value: function loadBehaviors() {
	      var _this8 = this;

	      this.behaviors.forEach(function (behaviorItem) {
	        var behaviorClass = behaviorItem;
	        var behaviorOptions = {};

	        if (_lodash2.default.isObject(behaviorItem) && _lodash2.default.isObject(behaviorItem.options)) {
	          behaviorClass = behaviorItem.class;
	          behaviorOptions = behaviorItem.options;
	        }

	        var behavior = new behaviorClass({
	          collection: _this8,
	          options: behaviorOptions
	        });
	        _this8.loadedBehaviors.push(behavior);
	      });
	    }
	  }, {
	    key: 'callBehavedMethod',
	    value: function callBehavedMethod(context, methodName) {
	      var _this9 = this;

	      if (methodName.indexOf('after') === -1 && methodName.indexOf('before') === -1) {
	        // sync
	        this.loadedBehaviors.forEach(function (behavior) {
	          behavior[methodName](context);
	        });

	        return true;
	      }

	      // async
	      return new _Promise2.default(function (resolve, reject) {
	        return _async2.default.eachSeries(_this9.loadedBehaviors, function (behavior, callback) {
	          behavior[methodName](context).then(function (res) {
	            return callback(null, res);
	          }).catch(function (error) {
	            return callback(error);
	          });
	        }, function (error) {
	          if (error) {
	            return reject(error);
	          }

	          return _this9[methodName](context).then(function (res) {
	            return resolve(res);
	          }).catch(function (error) {
	            return reject(error);
	          });
	        });
	      });
	    }
	  }, {
	    key: 'modelInitialize',
	    value: function modelInitialize(model) {
	      //eslint-disable-line
	      return true;
	    }
	  }, {
	    key: 'beforeSave',
	    value: function beforeSave(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'afterSave',
	    value: function afterSave(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'beforeValidate',
	    value: function beforeValidate(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'afterValidate',
	    value: function afterValidate(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'beforeDelete',
	    value: function beforeDelete(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'afterDelete',
	    value: function afterDelete(model) {
	      //eslint-disable-line
	      return new _Promise2.default.resolve(true);
	    }
	  }]);

	  return Collection;
	})();

	exports.default = Collection;

/***/ },
/* 8 */
/***/ function(module, exports) {

	(function() { module.exports = this["async"]; }());

/***/ },
/* 9 */
/***/ function(module, exports) {

	(function() { module.exports = this["validator"]; }());

/***/ },
/* 10 */
/***/ function(module, exports) {

	/* global window */
	var GetParams = function (func) {
		'use strict';

		if (typeof func !== 'function') {
			return [];
		}

		var patternComments = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
		var patternArguments = /([^\s,]+)/g;

		var funcString = func
			.toString()
			.replace(patternComments, '');

		var result = funcString
			.slice(
				funcString.indexOf('(') + 1,
				funcString.indexOf(')')
			)
			.match(patternArguments);

		if (result === null) {
			return [];
		}

		return result;
	};

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = GetParams;
	}

	if (typeof window !== 'undefined') {
		window.GetParams = GetParams;
	}


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _bluebird = __webpack_require__(12);

	var _bluebird2 = _interopRequireDefault(_bluebird);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _bluebird2.default;

/***/ },
/* 12 */
/***/ function(module, exports) {

	(function() { module.exports = this["P"]; }());

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /* eslint-disable new-cap */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Promise = __webpack_require__(11);

	var _Promise2 = _interopRequireDefault(_Promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Model = (function () {
	  function Model() {
	    var attributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	    var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Model);

	    this.attributes = attributes ? attributes : {};
	    this.id = null;

	    _lodash2.default.merge(this, extend);

	    var id = this.get(this.collection.primaryKey);
	    if (id) {
	      this.id = id;
	    }

	    this.collection.callBehavedMethod(this, 'modelInitialize');
	  }

	  _createClass(Model, [{
	    key: 'get',
	    value: function get(field) {
	      var obj = this.toObject();
	      return _lodash2.default.get(obj, field);
	    }
	  }, {
	    key: 'set',
	    value: function set(field, value) {
	      if (_lodash2.default.isObject(field)) {
	        return _lodash2.default.merge(this.attributes, field);
	      }

	      return _lodash2.default.set(this.attributes, field, value);
	    }
	  }, {
	    key: 'toObject',
	    value: function toObject() {
	      return this.attributes;
	    }
	  }, {
	    key: 'toJSON',
	    value: function toJSON() {
	      return this.toObject();
	    }
	  }, {
	    key: 'fetch',
	    value: function fetch() {
	      var _this = this;

	      var id = this.getId();
	      if (!id) {
	        throw new Error('No ID found');
	      }

	      return new _Promise2.default(function (resolve, reject) {
	        return _this.collection.findById(id).then(function (model) {
	          resolve(model);
	        }).catch(reject);
	      });
	    }
	  }, {
	    key: 'getId',
	    value: function getId() {
	      var id = this.id || this.get(this.collection.primaryKey);
	      if (!_lodash2.default.isUndefined(id)) {
	        return id;
	      }

	      return null;
	    }
	  }, {
	    key: 'isNew',
	    value: function isNew() {
	      return this.getId() ? false : true; // eslint-disable-line
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      return this.collection.save(this, options);
	    }
	  }, {
	    key: 'saveField',
	    value: function saveField(field, value) {
	      this.set(field, value);

	      return this.save({
	        fields: [field]
	      });
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.id = null;
	      this.attributes = {};
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      return this.collection.delete(this, options);
	    }
	  }, {
	    key: 'validate',
	    value: function validate() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      return this.collection.validate(this, options);
	    }
	  }, {
	    key: 'validateField',
	    value: function validateField(field) {
	      var value = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	      return this.collection.validateField(this, field, value);
	    }
	  }]);

	  return Model;
	})();

	exports.default = Model;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _async = __webpack_require__(8);

	var _async2 = _interopRequireDefault(_async);

	var _Promise = __webpack_require__(11);

	var _Promise2 = _interopRequireDefault(_Promise);

	var _Query = __webpack_require__(15);

	var _Query2 = _interopRequireDefault(_Query);

	var _Schema = __webpack_require__(18);

	var _Schema2 = _interopRequireDefault(_Schema);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Adapter = (function () {
	  function Adapter() {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Adapter);

	    //eslint-disable-line
	    this.queryClass = _Query2.default;
	    this.schemaClass = _Schema2.default;

	    _lodash2.default.merge(this, extend);
	  }

	  _createClass(Adapter, [{
	    key: 'getConnection',
	    value: function getConnection() {
	      return null;
	    }
	  }, {
	    key: 'closeConnection',
	    value: function closeConnection() {
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'query',
	    value: function query() {
	      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      return new this.queryClass(_extends({}, options, {
	        adapter: this
	      }));
	    }
	  }, {
	    key: 'schema',
	    value: function schema() {
	      return new this.schemaClass(this);
	    }
	  }, {
	    key: 'populateTable',
	    value: function populateTable(collection, rows) {
	      var _this = this;

	      return new _Promise2.default(function (resolve, reject) {
	        _this.query().table(collection.table).create(rows).run().then(resolve).catch(reject);
	      });
	    }
	  }, {
	    key: 'loadFixture',
	    value: function loadFixture(collection, rows) {
	      var _this2 = this;

	      //eslint-disable-line
	      return new _Promise2.default(function (resolve, reject) {
	        _async2.default.series([function (callback) {
	          _this2.schema().dropTableOfCollection(collection).then(function (response) {
	            callback(null, response);
	          }).catch(function (error) {
	            callback(error);
	          });
	        }, function (callback) {
	          _this2.schema().createTableFromCollection(collection).then(function (response) {
	            callback(null, response);
	          }).catch(function (error) {
	            callback(error);
	          });
	        }, function (callback) {
	          _this2.populateTable(collection, rows).then(function (response) {
	            callback(null, response);
	          }).catch(function (error) {
	            callback(error);
	          });
	        }], function (err, results) {
	          if (err) {
	            return reject(err);
	          }

	          return resolve(results);
	        });
	      });
	    }
	  }, {
	    key: 'loadAllFixtures',
	    value: function loadAllFixtures(arr) {
	      var _this3 = this;

	      //eslint-disable-line
	      return new _Promise2.default(function (resolve, reject) {
	        _async2.default.map(arr, function (fixture, callback) {
	          _this3.loadFixture(fixture.collection, fixture.rows).then(function (results) {
	            callback(null, results);
	          }).catch(function (error) {
	            callback(error);
	          });
	        }, function (err, results) {
	          if (err) {
	            return reject(err);
	          }

	          return resolve(results);
	        });
	      });
	    }
	  }]);

	  return Adapter;
	})();

	exports.default = Adapter;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Promise = __webpack_require__(11);

	var _Promise2 = _interopRequireDefault(_Promise);

	var _Expression = __webpack_require__(16);

	var _Expression2 = _interopRequireDefault(_Expression);

	var _Functions = __webpack_require__(17);

	var _Functions2 = _interopRequireDefault(_Functions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Query = (function () {
	  function Query() {
	    var givenOptions = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Query);

	    var options = _extends({
	      expressionClass: _Expression2.default,
	      functionsClass: _Functions2.default
	    }, givenOptions);

	    this.adapter = null;
	    this.collection = null;

	    if (options.adapter) {
	      this.setAdapter(options.adapter);
	    }

	    if (options.collection) {
	      this.setCollection(options.collection);
	    }

	    this.options = _lodash2.default.omit(options, 'adapter', 'collection');
	  }

	  _createClass(Query, [{
	    key: 'setAdapter',
	    value: function setAdapter(adapter) {
	      this.adapter = adapter;

	      return this;
	    }
	  }, {
	    key: 'getAdapter',
	    value: function getAdapter() {
	      return this.adapter;
	    }
	  }, {
	    key: 'setCollection',
	    value: function setCollection(collection) {
	      this.collection = collection;

	      return this;
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      return this;
	    }
	  }, {
	    key: 'distinct',
	    value: function distinct() {
	      return this;
	    }
	  }, {
	    key: 'from',
	    value: function from() {
	      return this;
	    }
	  }, {
	    key: 'where',
	    value: function where() {
	      return this;
	    }
	  }, {
	    key: 'andWhere',
	    value: function andWhere() {
	      return this;
	    }
	  }, {
	    key: 'orWhere',
	    value: function orWhere() {
	      return this;
	    }
	  }, {
	    key: 'notWhere',
	    value: function notWhere() {
	      return this;
	    }
	  }, {
	    key: 'groupBy',
	    value: function groupBy() {
	      return this;
	    }
	  }, {
	    key: 'orderBy',
	    value: function orderBy() {
	      return this;
	    }
	  }, {
	    key: 'offset',
	    value: function offset() {
	      return this;
	    }
	  }, {
	    key: 'limit',
	    value: function limit() {
	      return this;
	    }
	  }, {
	    key: 'page',
	    value: function page() {
	      return this;
	    }
	  }, {
	    key: 'create',
	    value: function create() {
	      return this;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      return this;
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      return this;
	    }
	  }, {
	    key: 'table',
	    value: function table() {
	      return this;
	    }
	  }, {
	    key: 'expr',
	    value: function expr() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return new (Function.prototype.bind.apply(this.options.expressionClass, [null].concat([this], args)))();
	    }
	  }, {
	    key: 'func',
	    value: function func() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      return new (Function.prototype.bind.apply(this.options.functionsClass, [null].concat([this], args)))();
	    }
	  }, {
	    key: 'count',
	    value: function count() {
	      return this;
	    }
	  }, {
	    key: 'truncate',
	    value: function truncate() {
	      return this;
	    }
	  }, {
	    key: 'join',
	    value: function join() {
	      return this;
	    }
	  }, {
	    key: 'innerJoin',
	    value: function innerJoin() {
	      return this;
	    }
	  }, {
	    key: 'leftJoin',
	    value: function leftJoin() {
	      return this;
	    }
	  }, {
	    key: 'leftOuterJoin',
	    value: function leftOuterJoin() {
	      return this;
	    }
	  }, {
	    key: 'rightJoin',
	    value: function rightJoin() {
	      return this;
	    }
	  }, {
	    key: 'rightOuterJoin',
	    value: function rightOuterJoin() {
	      return this;
	    }
	  }, {
	    key: 'outerJoin',
	    value: function outerJoin() {
	      return this;
	    }
	  }, {
	    key: 'fullOuterJoin',
	    value: function fullOuterJoin() {
	      return this;
	    }
	  }, {
	    key: 'crossJoin',
	    value: function crossJoin() {
	      return this;
	    }
	  }, {
	    key: 'all',
	    value: function all() {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'first',
	    value: function first() {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'toModels',
	    value: function toModels(results) {
	      var _this = this;

	      if (!results || !this.collection) {
	        return results;
	      }

	      if (_lodash2.default.isArray(results)) {
	        var _ret = (function () {
	          var models = [];
	          results.forEach(function (model) {
	            models.push(_this.collection.model(model));
	          });

	          return {
	            v: models
	          };
	        })();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }

	      if (_lodash2.default.isObject(results)) {
	        return this.collection.model(results);
	      }

	      return results;
	    }
	  }, {
	    key: 'toModel',
	    value: function toModel() {
	      return this.toModels.apply(this, arguments);
	    }
	  }, {
	    key: 'debug',
	    value: function debug() {
	      return this;
	    }
	  }, {
	    key: 'tap',
	    value: function tap(func) {
	      func.bind(this)();

	      return this;
	    }
	  }]);

	  return Query;
	})();

	exports.default = Query;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Expression = (function () {
	  function Expression(query) {
	    _classCallCheck(this, Expression);

	    this.query = query;
	  }

	  _createClass(Expression, [{
	    key: "eq",
	    value: function eq() {
	      return this;
	    }
	  }, {
	    key: "notEq",
	    value: function notEq() {
	      return this;
	    }
	  }, {
	    key: "lt",
	    value: function lt() {
	      return this;
	    }
	  }, {
	    key: "lte",
	    value: function lte() {
	      return this;
	    }
	  }, {
	    key: "gt",
	    value: function gt() {
	      return this;
	    }
	  }, {
	    key: "gte",
	    value: function gte() {
	      return this;
	    }
	  }, {
	    key: "isNull",
	    value: function isNull() {
	      return this;
	    }
	  }, {
	    key: "isNotNull",
	    value: function isNotNull() {
	      return this;
	    }
	  }, {
	    key: "in",
	    value: function _in() {
	      return this;
	    }
	  }, {
	    key: "notIn",
	    value: function notIn() {
	      return this;
	    }
	  }, {
	    key: "like",
	    value: function like() {
	      return this;
	    }
	  }, {
	    key: "notLike",
	    value: function notLike() {
	      return this;
	    }
	  }, {
	    key: "between",
	    value: function between() {
	      return this;
	    }
	  }, {
	    key: "notBetween",
	    value: function notBetween() {
	      return this;
	    }
	  }, {
	    key: "count",
	    value: function count() {
	      return this;
	    }
	  }, {
	    key: "and",
	    value: function and() {
	      return this;
	    }
	  }, {
	    key: "or",
	    value: function or() {
	      return this;
	    }
	  }, {
	    key: "not",
	    value: function not() {
	      return this;
	    }
	  }]);

	  return Expression;
	})();

	exports.default = Expression;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Functions = (function () {
	  function Functions() {
	    _classCallCheck(this, Functions);

	    this.query = arguments[0];
	    this.column = arguments[1];
	    this.funcs = [];
	  }

	  _createClass(Functions, [{
	    key: "addFunction",
	    value: function addFunction(funcName) {
	      this.funcs.push(funcName);

	      return this;
	    }
	  }, {
	    key: "getFunctions",
	    value: function getFunctions() {
	      return this.funcs;
	    }
	  }, {
	    key: "setColumn",
	    value: function setColumn(column) {
	      this.column = column;

	      return this;
	    }
	  }, {
	    key: "getColumn",
	    value: function getColumn() {
	      return this.column;
	    }
	  }, {
	    key: "upper",
	    value: function upper() {
	      return this;
	    }
	  }, {
	    key: "lower",
	    value: function lower() {
	      return this;
	    }
	  }, {
	    key: "concat",
	    value: function concat() {
	      return null;
	    }
	  }, {
	    key: "sum",
	    value: function sum() {
	      return this;
	    }
	  }, {
	    key: "avg",
	    value: function avg() {
	      return this;
	    }
	  }, {
	    key: "min",
	    value: function min() {
	      return this;
	    }
	  }, {
	    key: "max",
	    value: function max() {
	      return this;
	    }
	  }, {
	    key: "count",
	    value: function count() {
	      return this;
	    }
	  }, {
	    key: "now",
	    value: function now() {
	      return null;
	    }
	  }, {
	    key: "toString",
	    value: function toString() {
	      return null;
	    }
	  }]);

	  return Functions;
	})();

	exports.default = Functions;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })(); /* eslint-disable no-unused-vars */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _async = __webpack_require__(8);

	var _async2 = _interopRequireDefault(_async);

	var _Promise = __webpack_require__(11);

	var _Promise2 = _interopRequireDefault(_Promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Schema = (function () {
	  function Schema(adapter) {
	    _classCallCheck(this, Schema);

	    this.adapter = adapter;
	  }

	  _createClass(Schema, [{
	    key: 'getConnection',
	    value: function getConnection() {
	      return this.adapter.getConnection();
	    }
	  }, {
	    key: 'dropTableOfCollection',
	    value: function dropTableOfCollection(collection) {
	      var _this = this;

	      var table = collection.table;

	      return new _Promise2.default(function (resolve, reject) {
	        _async2.default.waterfall([
	        // check if exists
	        function (callback) {
	          _this.tableExists(table).then(function (exists) {
	            return callback(null, exists);
	          }).catch(function (error) {
	            return callback(error);
	          });
	        },

	        // drop it if exists
	        function (exists, callback) {
	          if (!exists) {
	            return callback(null, true);
	          }

	          _this.dropTable(table).then(function (result) {
	            return callback(null, result);
	          }).catch(function (error) {
	            return callback(error);
	          });
	        }], function (error, result) {
	          if (error) {
	            return reject(error);
	          }

	          resolve(result);
	        });
	      });
	    }
	  }, {
	    key: 'createTableFromCollection',
	    value: function createTableFromCollection(collection) {
	      var table = collection.table;
	      var collectionSchema = collection.schema;

	      return this.createTable(table, collectionSchema);
	    }
	  }, {
	    key: 'dropTable',
	    value: function dropTable(tableName) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'tableExists',
	    value: function tableExists(tableName) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'renameTable',
	    value: function renameTable(from, to) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'createTable',
	    value: function createTable(tableName, collectionSchema) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'columnExists',
	    value: function columnExists(tableName, columnName) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'dropColumn',
	    value: function dropColumn(tableName, columnName) {
	      return this.dropColumns(tableName, [columnName]);
	    }
	  }, {
	    key: 'dropColumns',
	    value: function dropColumns(tableName, columnNames) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'createColumn',
	    value: function createColumn(tableName, columnName, fieldSchema) {
	      return this.createColumns(tableName, _defineProperty({}, columnName, fieldSchema));
	    }
	  }, {
	    key: 'createColumns',
	    value: function createColumns(tableName, collectionSchema) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'renameColumn',
	    value: function renameColumn(tableName, from, to) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'alterColumn',
	    value: function alterColumn(tableName, columnName, toName, fieldSchema) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'createIndex',
	    value: function createIndex(tableName, columns, indexName, indexType) {
	      return new _Promise2.default.resolve(true);
	    }
	  }, {
	    key: 'dropIndex',
	    value: function dropIndex(tableName, columns, indexName) {
	      return new _Promise2.default.resolve(true);
	    }
	  }]);

	  return Schema;
	})();

	exports.default = Schema;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Promise = __webpack_require__(11);

	var _Promise2 = _interopRequireDefault(_Promise);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Behavior = (function () {
	  function Behavior() {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    _classCallCheck(this, Behavior);

	    this.collection = null;
	    this.options = {};

	    _lodash2.default.merge(this, extend);
	  }

	  _createClass(Behavior, [{
	    key: 'collectionInitialize',
	    value: function collectionInitialize(collection) {//eslint-disable-line

	    }
	  }, {
	    key: 'modelInitialize',
	    value: function modelInitialize(model) {//eslint-disable-line

	    }
	  }, {
	    key: 'beforeSave',
	    value: function beforeSave(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'afterSave',
	    value: function afterSave(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'beforeValidate',
	    value: function beforeValidate(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'afterValidate',
	    value: function afterValidate(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'beforeDelete',
	    value: function beforeDelete(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }, {
	    key: 'afterDelete',
	    value: function afterDelete(model) {
	      //eslint-disable-line
	      return new _Promise2.default(function (resolve) {
	        return resolve();
	      });
	    }
	  }]);

	  return Behavior;
	})();

	exports.default = Behavior;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Model = __webpack_require__(13);

	var _Model2 = _interopRequireDefault(_Model);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = function () {
	  return function () {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var Model = (function (_M) {
	      _inherits(Model, _M);

	      function Model() {
	        var attributes = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	        _classCallCheck(this, Model);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Model).call(this, attributes, _extend));

	        _lodash2.default.merge(_this, extend);
	        return _this;
	      }

	      return Model;
	    })(_Model2.default);

	    return Model;
	  };
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _Behavior = __webpack_require__(19);

	var _Behavior2 = _interopRequireDefault(_Behavior);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	module.exports = function () {
	  return function () {
	    var extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var Behavior = (function (_B) {
	      _inherits(Behavior, _B);

	      function Behavior() {
	        var _extend = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        _classCallCheck(this, Behavior);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Behavior).call(this, _extend));

	        _lodash2.default.merge(_this, extend);
	        return _this;
	      }

	      return Behavior;
	    })(_Behavior2.default);

	    return Behavior;
	  };
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _bluebird = __webpack_require__(12);

	var _bluebird2 = _interopRequireDefault(_bluebird);

	var _Query2 = __webpack_require__(15);

	var _Query3 = _interopRequireDefault(_Query2);

	var _Functions = __webpack_require__(23);

	var _Functions2 = _interopRequireDefault(_Functions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MemoryQuery = (function (_Query) {
	  _inherits(MemoryQuery, _Query);

	  function MemoryQuery(givenOptions) {
	    _classCallCheck(this, MemoryQuery);

	    var options = _extends({
	      functionsClass: _Functions2.default
	    }, givenOptions);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(MemoryQuery).call(this, options));

	    _this.data = _this.adapter.getConnection();

	    _this.builder = (0, _lodash2.default)(_this.data);

	    if (_this.collection) {
	      _this.table(_this.collection.table);
	    }
	    return _this;
	  }

	  _createClass(MemoryQuery, [{
	    key: 'from',
	    value: function from(table) {
	      this._from = table;

	      return this;
	    }
	  }, {
	    key: 'select',
	    value: function select() {
	      var _this2 = this;

	      if (typeof this._fields === 'undefined') {
	        this._fields = [];
	      }

	      if (typeof this._mapFields === 'undefined') {
	        this._mapFields = {};
	      }

	      if (typeof this._funcFields === 'undefined') {
	        this._fieldFuncs = {};
	      }

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      if (args.length === 0) {
	        return this;
	      }

	      args.forEach(function (arg) {
	        _this2._select(arg);
	      });

	      return this;
	    }
	  }, {
	    key: '_select',
	    value: function _select(field) {
	      var _this3 = this;

	      if (typeof field === 'string') {
	        this._fields.push(field);
	      } else if (_lodash2.default.isArray(field)) {
	        field.forEach(function (f) {
	          _this3._fields.push(f);
	        });
	      } else if ((typeof field === 'undefined' ? 'undefined' : _typeof(field)) === 'object') {
	        _lodash2.default.each(field, function (f, as) {
	          if ((typeof f === 'undefined' ? 'undefined' : _typeof(f)) !== 'object' && typeof f !== 'function') {
	            _this3._mapFields[f] = as;

	            return;
	          }

	          var funcsList = undefined;
	          var fieldName = undefined;

	          if ((typeof f === 'undefined' ? 'undefined' : _typeof(f)) === 'object' && f instanceof _Functions2.default) {
	            fieldName = f.getColumn();
	            funcsList = f.getFunctions();
	          } else if (typeof f === 'function') {
	            var func = _this3.func.bind(_this3);
	            fieldName = f.bind(_this3)(func).getColumn();
	            funcsList = f.bind(_this3)(func).getFunctions();
	          }

	          _this3._fieldFuncs[fieldName] = {
	            as: as,
	            funcs: funcsList
	          };
	        });
	      }

	      return this;
	    }
	  }, {
	    key: 'where',
	    value: function where(conditions) {
	      this._where = conditions;

	      return this;
	    }
	  }, {
	    key: 'groupBy',
	    value: function groupBy(givenColumns) {
	      var columns = _lodash2.default.isString(givenColumns) ? [givenColumns] : givenColumns;

	      this._groupBy = columns;

	      return this;
	    }
	  }, {
	    key: 'orderBy',
	    value: function orderBy(_orderBy) {
	      this._orderBy = _orderBy;

	      return this;
	    }
	  }, {
	    key: 'offset',
	    value: function offset(_offset) {
	      this._offset = _offset;

	      return this;
	    }
	  }, {
	    key: 'limit',
	    value: function limit(_limit) {
	      this._limit = _limit;

	      return this;
	    }
	  }, {
	    key: 'page',
	    value: function page(_page) {
	      if (typeof this._limit === 'undefined') {
	        return this;
	      }

	      var offset = (_page - 1) * this._limit;
	      this.offset(offset);

	      return this;
	    }
	  }, {
	    key: 'create',
	    value: function create(row) {
	      this._create = _lodash2.default.isArray(row) ? row : [row];

	      return this;
	    }
	  }, {
	    key: 'update',
	    value: function update(row) {
	      this._update = _lodash2.default.isArray(row) ? row : [row];

	      return this;
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      this._delete = true;

	      return this;
	    }
	  }, {
	    key: 'table',
	    value: function table(_table) {
	      this._table = _table;

	      return this;
	    }
	  }, {
	    key: 'count',
	    value: function count() {
	      this._count = true;

	      return this;
	    }
	  }, {
	    key: 'all',
	    value: function all() {
	      this._all = true;

	      return this.run();
	    }
	  }, {
	    key: 'first',
	    value: function first() {
	      this._first = true;

	      return this.run();
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	      var value = undefined;

	      if (!this._create && !this._update && !this._delete) {
	        value = this._runRead();
	      } else if (this._create) {
	        value = this._runCreate();
	      } else if (this._update) {
	        value = this._runUpdate();
	      } else if (this._delete) {
	        value = this._runDelete();
	      }

	      return new _bluebird2.default.resolve(value);
	    }
	  }, {
	    key: '_runDelete',
	    value: function _runDelete() {
	      var table = this._table;

	      var tableRows = this.adapter.getData(table);
	      if (typeof tableRows === 'undefined') {
	        tableRows = [];
	      }

	      var k = _lodash2.default.findIndex(tableRows, this._where);
	      var removed = tableRows.splice(k, 1);

	      this.adapter.setData(table, tableRows);

	      return removed.length;
	    }
	  }, {
	    key: '_runUpdate',
	    value: function _runUpdate() {
	      var table = this._table;
	      var ids = [];

	      var tableRows = this.adapter.getData(table);
	      if (typeof tableRows === 'undefined') {
	        tableRows = [];
	      }

	      var k = _lodash2.default.findIndex(tableRows, this._where);
	      var row = _extends({}, tableRows[k], this._update);
	      ids.push(row.id); // @TODO: use collection.primaryKey

	      this.adapter.setData(table + '.' + k, row);

	      return ids;
	    }
	  }, {
	    key: '_runCreate',
	    value: function _runCreate() {
	      var _this4 = this;

	      var ids = [];
	      var table = this._table;

	      this._create.forEach(function (row) {
	        var tableRows = _this4.adapter.getData(table);

	        if (typeof tableRows === 'undefined') {
	          tableRows = [];
	        }

	        if (!row.id) {
	          row.id = _lodash2.default.uniqueId(); // @TODO: improve this
	        }

	        tableRows.push(_extends({}, row));

	        _this4.adapter.setData(table, tableRows);
	        ids.push(row.id); // @TODO: use collection.primaryKey
	      });

	      return ids; // IDs
	    }
	  }, {
	    key: '_runRead',
	    value: function _runRead() {
	      var _this5 = this;

	      var results = this.builder.thru(function (data) {
	        // from
	        if (!_this5._from) {
	          return data;
	        }

	        if (typeof data[_this5._from] !== 'undefined') {
	          return data[_this5._from];
	        }

	        return [];
	      }).thru(function (data) {
	        // conditions
	        if (!_this5._where) {
	          return data;
	        }

	        return _lodash2.default.filter(data, _lodash2.default.matches(_this5._where));
	      }).thru(function (data) {
	        // ordering
	        if (!_this5._orderBy) {
	          return data;
	        }

	        return _lodash2.default.sortByOrder(data, _lodash2.default.keys(_this5._orderBy), _lodash2.default.values(_this5._orderBy));
	      }).thru(function (data) {
	        // grouping
	        if (!_this5._groupBy) {
	          return data;
	        }

	        var column = _lodash2.default.first(_this5._groupBy);
	        var grouped = _lodash2.default.groupBy(data, function (row) {
	          return row[column];
	        });

	        var results = [];
	        _lodash2.default.each(grouped, function (rows) {
	          results.push(rows[0]);
	        });

	        return results;
	      }).thru(function (givenData) {
	        // offset and limit
	        var data = undefined;

	        if (_this5._offset && _this5._limit) {
	          data = givenData.slice(_this5._offset, _this5._limit + 1);
	        } else if (_this5._limit) {
	          data = givenData.slice(0, _this5._limit);
	        } else {
	          data = givenData;
	        }

	        return data;
	      }).thru(function (data) {
	        // select
	        if (!data || !_this5._fields && !_this5._mapFields && !_this5._fieldFuncs) {
	          return data;
	        }

	        var rows = data;

	        // mapped fields
	        rows = _lodash2.default.map(rows, function (row) {
	          _lodash2.default.each(_this5._mapFields, function (as, f) {
	            row[as] = row[f];
	          });

	          _lodash2.default.each(_this5._fieldFuncs, function (fieldFunc, f) {
	            var as = fieldFunc.as;
	            var funcs = fieldFunc.funcs;

	            var val = row[f];
	            funcs.forEach(function (func) {
	              if (typeof _lodash2.default[func] === 'function') {
	                val = _lodash2.default[func](val);

	                return;
	              }

	              if (func === 'concat') {
	                val = '';
	                _this5._concat.forEach(function (concatColumn) {
	                  if (concatColumn.indexOf('"') > -1) {
	                    val += JSON.parse(concatColumn);

	                    return;
	                  }

	                  val += row[concatColumn];
	                });

	                return;
	              }

	              val = String(val)[func]();
	            });

	            row[as] = val;
	          });

	          return row;
	        });

	        // pick the fields
	        var pickFields = _this5._fields.concat(_lodash2.default.values(_this5._mapFields)).concat(_lodash2.default.map(_this5._fieldFuncs, function (item) {
	          return item.as;
	        }));

	        if (pickFields.length > 0) {
	          rows = _lodash2.default.map(rows, function (row) {
	            return _lodash2.default.pick(row, pickFields);
	          });
	        }

	        return rows;
	      }).thru(function (data) {
	        // all or first
	        if (!_this5._first) {
	          return data;
	        }

	        if (typeof data[0] !== 'undefined') {
	          return data[0];
	        }

	        return null;
	      }).value();

	      if (this._count) {
	        return results.length;
	      }

	      if (!this._all && !this._first) {
	        return results;
	      }

	      return this.toModels(results);
	    }
	  }]);

	  return MemoryQuery;
	})(_Query3.default);

	exports.default = MemoryQuery;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Functions2 = __webpack_require__(17);

	var _Functions3 = _interopRequireDefault(_Functions2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MemoryFunctions = (function (_Functions) {
	  _inherits(MemoryFunctions, _Functions);

	  function MemoryFunctions() {
	    _classCallCheck(this, MemoryFunctions);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MemoryFunctions).apply(this, arguments));
	  }

	  _createClass(MemoryFunctions, [{
	    key: 'upper',
	    value: function upper() {
	      return this.addFunction('toUpperCase');
	    }
	  }, {
	    key: 'lower',
	    value: function lower() {
	      return this.addFunction('toLowerCase');
	    }
	  }, {
	    key: 'trim',
	    value: function trim() {
	      return this.addFunction('trim');
	    }
	  }, {
	    key: 'concat',
	    value: function concat() {
	      for (var _len = arguments.length, columns = Array(_len), _key = 0; _key < _len; _key++) {
	        columns[_key] = arguments[_key];
	      }

	      this.query._concat = columns;

	      return this.addFunction('concat');
	    }
	  }]);

	  return MemoryFunctions;
	})(_Functions3.default);

	exports.default = MemoryFunctions;

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Schema2 = __webpack_require__(18);

	var _Schema3 = _interopRequireDefault(_Schema2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MemorySchema = (function (_Schema) {
	  _inherits(MemorySchema, _Schema);

	  function MemorySchema() {
	    _classCallCheck(this, MemorySchema);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(MemorySchema).apply(this, arguments));
	  }

	  return MemorySchema;
	})(_Schema3.default);

	exports.default = MemorySchema;

/***/ }
/******/ ]);