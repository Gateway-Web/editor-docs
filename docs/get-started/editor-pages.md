---
sidebar_position: 4
---

# Editor Pages
Editor pages are actually what you see in the visual editor. It is only required when a content model ends up a page on your website (think pages, blogs etc). The setup is easy - we provide a wrapper component that handles everything for you.

## Compozer
Our `Compozer` wrapper component is where the magic happens. It handles connecting the data from your CMS to your frontend component and keeping everything up to date.

### Props
- **path** `string`
  - The path to the property in the data
- **Component** `react component`
  - Your frontend component. All data returned is spread to the component, and you can optionally transform the data before it's passed to this component.


## Example
The example below is a web page with a **Hero** and multiple **Sections** that make up the content of the page. The header and footer are not using `Compozer` so they will not be editable in this example.

### Page Example
```
...
import Hero from "components/Hero";
import Section from "components/section";

export default function EditorPage({ store }) => {
  const data = store.transformedPageData;

  return (
    <div>
      <Header {...data?.header} />

      <Compozer path="hero" component={Hero} />

      <Compozer path="sections" component={Section} />

      <Footer {...data?.footer} />
    </div>
  );
};
```

### Data example
This assumes the following data structure from the preview endpoint.
```
{
  hero: {
    ...
  },
  sections: [
    { ... },
    { ... }
  ]
}
```
