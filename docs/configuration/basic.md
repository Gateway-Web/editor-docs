---
sidebar_position: 1.1
---

# Editor
If you haven't created a configuration file yet, let's create one now. This is the file we imported when creating the [editor page](/get-started/installation#editor) in the previous step. This file should export an object containing the configuration values defined below.

## Configuration values

### provider `string`
The content source for your website, right now there are two options available:
`hygraph` or `contentful`

---

### projectId `string`
The project ID that you created after creating an account. You can get this project ID from the web dashboard.

---

### basePath `string`
The folder you want the visual editor to be under on your website. Default: `/compoz`

---

### locales `array`
An array of locales that are available in your project. These should match the options in your headless CMS.

---

### defaultLocale `string`
The default locale of your project. This should match the default locale in your headless CMS.

---

### contentTypes `object`
An object containing the content models you want to enable visual editing on. Each key should be a content model and generally follow what end up being pages on your website, like pages or blogs.


- #### id `string`
  - The content model ID, this should match the ID in your headless CMS

- #### topLevelFields `array`
  - Fields that aren't visually displayed on the page but should still be editable.

- #### visualFields `array`
  - Sections of your page that should be visually editable.

- #### newEntryFields `array`
  - Fields to display when creating new entries. Required fields are automatically populated.

- #### Component `react component`
  - React component that displays the page within the visual editor.

- #### transform `function`
  - Optional function to transform data from the headless CMS.

---

### linkInstead `array`
Content models to "link" instead of trying to create when using presets. For example - If you're adding a link that connects to an entry in your CMS, you don't want to create that page, this will "link" it instead.

---

## Example

In this example, `EditorPage` is what we created [here](/get-started/editor-pages#page-example).

```

import EditorPage from "./editor-page";

export default {
  provider: "hygraph",
  projectId: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  locales: ["en", "de", "fr"],
  defaultLocale: "en",
  contentTypes: {
    Page: {
      id: "Page",
      topLevelFields: ["internalTitle"],
      visualFields: ["hero", "sections"],
      newEntryFields: ["title"],
      Component: EditorPage,
      transform: transformPage,
    }
  },
  linkInstead: ["page"],
  basePath: "/compoz",
};

```

## TypeScript Example

```
import { EditorConfig } from "@gateway-web/editor";

import EditorPage from "./editor-page";

const config:EditorConfig = {
  ...
};

export default config;
```