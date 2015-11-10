"use strict";

var _templateObject = _taggedTemplateLiteral(["In ES5 this is\nnot legal."], ["In ES5 this is\nnot legal."]),
    _templateObject2 = _taggedTemplateLiteral(["In ES5 \"\n\" is a line-feed."], ["In ES5 \"\\n\" is a line-feed."]),
    _templateObject3 = _taggedTemplateLiteral(["http://foo.org/bar?a=", "&b=", "\n    Content-Type: application/json\nX-Credentials: ", "\n{ \"foo\": ", ",\n    \"bar\": ", "}"], ["http://foo.org/bar?a=", "&b=", "\n    Content-Type: application/json\nX-Credentials: ", "\n{ \"foo\": ", ",\n    \"bar\": ", "}"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Created by PhpStorm.
 * Author:   ershov-ilya
 * GitHub:   https://github.com/ershov-ilya/
 * About me: http://about.me/ershov.ilya (EN)
 * Website:  http://ershov.pw/ (RU)
 * Date: 10.11.2015
 * Time: 9:44
 */

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
