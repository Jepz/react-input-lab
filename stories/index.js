import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import input from "../src/components/input";

storiesOf("Welcome", module).add("to Storybook", () =>
  <Welcome showApp={linkTo("Button")} />
);

storiesOf("Button", module)
  .add("with text", () =>
    <Button onClick={action("clicked")}>Hello Button</Button>
  )
  .add("with some emoji", () =>
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  );

storiesOf("input", module).add("default", () => <input.view />);
