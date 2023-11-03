---
sidebar_position: 1
---

# Get Started

## Create an account
You must [create an account](https://www.gatewayweb.io/auth/signup) to get started. We will come back to this later in the configuration step.

---

:::tip Note

Some of the initial setup will require code updates. If you don't have resources to do this, [reach out](https://www.gatewayweb.net/contact) to us! We offer a wide range of professional services.

:::

## Install the npm package
Our editor is just an npm package - a developer can set this up in only a few minutes.

```bash
npm install @gateway-web/editor
```

---

## Configuration file
Create an empty configuration file somewhere in your project. We will import this file where we setup our editor.

[View the configuration documentation](/docs/category/configuration/)

---

## Choose a folder for the editor
You can choose what folder you want the editor to be in.

For example, if you want to setup the editor on `https://example.com`, you can create the visual editor under `https://example.com/compoz`

---

## Framework examples

### NextJS

#### Pages router

> Example:
`/pages/compoz/[[...compoz]].js` or typescript: `/pages/compoz/[[...compoz.tsx]]`

#### App router

> Example:
`/app/[compoz]/page.js` or typescript: `/app/[compoz]/page.tsx`

### Gatsby

> Example:
`/pages/editor/{Editor.slug}.js` or typescript: `/pages/editor/{Editor.slug}.tsx`

---

## Editor page
It doesn't matter what framework you are using - the editor page itself is setup the same.

```
import React from "react";
import { CompozEditor } from "@gateway-web/editor";

import config from "./editor-config";

export default function Editor() {
  return <CompozEditor config={config} />;
};

```
