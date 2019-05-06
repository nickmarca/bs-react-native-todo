open ReactNative;

let styles =
  Style.(
    StyleSheet.create({
      "container":
        style(~flex=1., ~alignItems=`center, ~justifyContent=`center, ()),
    })
  );

[@react.component]
let make = () => {
  <View style=styles##container>
    <Text> {ReasonReact.string("Hello world !!!!")} </Text>
  </View>;
};
let default = make;