# Paths (beta)
:::tip Note

You must be on a paid plan to use this feature

:::
You can use paths to define how pages on your site are built. This lets you explore and visualize all pages on your website like a sitemap, and export them.

For example, let's say you have a website at `https://example.com`

If you have a "Contact us" page with a slug of `contact-us`, the end result would be `https://example.com/contact-us`

You could also have "Blogs" which are under `/blog` and the end result would be `https://example.com/blog/{blog.slug}`


## Configuration
You can configure the paths on your site using an object with two values

- **data** `string`
  - A GraphQL fragment getting the content type and the fields required to build the URL.
- **generatePath** `function`
  - A function that receives the data and returns the full URL slug.

## Example
The below example gets 10 pages at a time, and concatenates the page and the parent page slug if it exists. You can adjust the limit of pages depending on the your headless CMS plan.
```
const config = {
  ...
  paths: {
    Page: {
      data: `
        pages(first:10) {
          id
          slug
          title
          parentPage {
            slug
          }
        }
      `,
      generatePath: (data: any) => {
        return data?.pages?.map((page: any) => {
          const slugs = [
            page.slug,
            page.parentPage?.slug
          ].filter((slug: any) => slug);

          return {
            path: slugs.reverse().join("/"),
            id: page.id,
            display_name: page.title,
          };
        });
      }
    }
  }
}
  ```