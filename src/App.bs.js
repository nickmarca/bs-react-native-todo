// Generated by BUCKLESCRIPT VERSION 5.0.4, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReactNative = require("react-native");

var styles = ReactNative.StyleSheet.create({
      container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center"
      }
    });

function App(Props) {
  return React.createElement(ReactNative.View, {
              style: styles.container,
              children: React.createElement(ReactNative.Text, {
                    children: "Hello world !!!!"
                  })
            });
}

var make = App;

var $$default = App;

exports.styles = styles;
exports.make = make;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* styles Not a pure module */
