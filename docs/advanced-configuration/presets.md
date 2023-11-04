---
sidebar_position: 2
---

# Presets
:::tip Note

You must be on a paid plan to use this feature

:::
Presets are simply content models that have preselected options and content.

**Note: You must be on a paid plan to use presets**

## Creating presets
After setting up your editor, you can save any visual field as a preset. When you hover over a section of your page, there will be an option to "Save as preset" which will save it to your preset library.

## Using presets
When adding new content from anywhere in the editor, you will have the option to use a preset if that content model has presets defined.

## Configuration
You can configure what content models you want to enable presets for using the configuration file. For each content model defined, you can include a component and an optional transformation function.


- #### Component
  - React component that will render your content.

- #### transform
  - Optional function to transform data from the headless CMS.


## Example
```
import Section from "components/section";
import Hero from "components/hero";
import Link from "components/link";

import transformSection from "transform/section";

const config = {
  ...
  presets: {
    Section: {
      Component: Section,
      transform: transformSection
    },
    Hero: {
      Component: Hero
    },
    Link: {
      Component: Link
    }
  }
}
```