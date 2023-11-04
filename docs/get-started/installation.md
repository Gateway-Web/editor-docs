---
sidebar_position: 1
---

# Installation

:::tip Note

Some of the initial setup will require code updates. If you don't have resources to do this, [reach out](https://www.gatewayweb.net/contact) to us! We offer a wide range of professional services.

:::

## Install the npm package
Our editor is just an npm package - a developer can set this up in only a few minutes.

```bash
npm install @gateway-web/editor
```

---

## Choose a folder for the editor
You can choose what folder you want the editor to be in.

For example, if you want to setup the editor on `https://example.com`, you can create the visual editor under `https://example.com/compoz`

## Framework examples

> ### NextJS

#### Pages router

Example:
`/pages/compoz/[[...compoz]].js`

#### App router

Example:
`/app/compoz/[slug]/page.js`

> ### Gatsby

Example:
`/pages/compoz/{Editor.slug}.js`

---

## Editor
In the file we just created, copy and paste the following code. We will create the [configuration](/category/configuration) file in the next couple of steps.
```
import React from "react";
import { CompozEditor } from "@gateway-web/editor";

import config from "./editor-config";

export default function Editor() {
  return <CompozEditor config={config} />;
};

```
