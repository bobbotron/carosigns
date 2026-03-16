/* eslint-disable react/prop-types */
import React from "react";
import RenderHtml from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import theme from "../Theme";

const defaultTagStyles = {
  b: { fontWeight: "bold" },
  strong: { fontWeight: "bold" },
  a: { color: theme.colors.primary, textDecorationLine: "underline" },
};

export default function HtmlRenderer({
  source,
  contentWidth,
  style,
  ...props
}) {
  const window = useWindowDimensions();
  const width = contentWidth || window.width;
  return (
    <RenderHtml
      contentWidth={width}
      source={source}
      tagsStyles={defaultTagStyles}
      style={style}
      {...props}
    />
  );
}
