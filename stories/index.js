import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Form from "../src/components/Form";

storiesOf("Form", module).add("to Storybook", () => (
  <Form showApp={linkTo("Form")} />
));
