"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _templateObject = _taggedTemplateLiteral(["In ES5 this is\n not legal."], ["In ES5 this is\n not legal."]),
    _templateObject2 = _taggedTemplateLiteral(["In ES5 \"\n\" is a line-feed."], ["In ES5 \"\\n\" is a line-feed."]),
    _templateObject3 = _taggedTemplateLiteral(["http://foo.org/bar?a=", "&b=", "\n    Content-Type: application/json\n    X-Credentials: ", "\n    { \"foo\": ", ",\n      \"bar\": ", "}"], ["http://foo.org/bar?a=", "&b=", "\n    Content-Type: application/json\n    X-Credentials: ", "\n    { \"foo\": ", ",\n      \"bar\": ", "}"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SkinnedMesh = (function (_THREE$Mesh) {
  _inherits(SkinnedMesh, _THREE$Mesh);

  function SkinnedMesh(geometry, materials) {
    _classCallCheck(this, SkinnedMesh);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SkinnedMesh).call(this, geometry, materials));

    _this.idMatrix = SkinnedMesh.defaultMatrix();
    _this.bones = [];
    _this.boneMatrices = [];
    //...
    return _this;
  }

  _createClass(SkinnedMesh, [{
    key: "update",
    value: function update(camera) {
      //...
      _get(Object.getPrototypeOf(SkinnedMesh.prototype), "update", this).call(this);
    }
  }], [{
    key: "defaultMatrix",
    value: function defaultMatrix() {
      return new THREE.Matrix4();
    }
  }]);

  return SkinnedMesh;
})(THREE.Mesh);

// Basic literal string creation

"This is a pretty little template string."

// Multiline strings
(_templateObject);

// Interpolate variable bindings
var name = "Bob",
    time = "today";
"Hello " + name + ", how are you " + time + "?";

// Unescaped template strings
String.raw(_templateObject2);

// Construct an HTTP request prefix is used to interpret the replacements and construction
GET(_templateObject3, a, b, credentials, foo, bar)(myOnReadyStateChangeHandler);
