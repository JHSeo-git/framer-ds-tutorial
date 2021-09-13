'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement("button", {
    onClick: onClick
  }, children));
};

module.exports = Button;
//# sourceMappingURL=Button.js.map
