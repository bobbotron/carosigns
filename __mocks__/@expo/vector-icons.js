import React from "react";

const Icon = React.forwardRef((props, ref) => {
  return React.createElement("div", { ref, ...props });
});

Icon.displayName = "Icon";

module.exports = {
  createIconSet: jest.fn(() => Icon),
};
