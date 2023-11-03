---
sidebar_position: 1
---
# Projects
In addition to the configuration file, there are some values that need to be filled out in the [web dashboard](https://www.gatewayweb.io). This includes the content source, the preview endpoint, and tokens for your headless CMS.

## Create a project
The first step is to create a project in the dashboard. Each project connects to one website. 

---

## Configuring a project
After creating a project, navigate to the project page in the dashboard. On the project page, you should see the project id which you will need to copy and paste into your configuration file as the `projectId`.

---

## Project members
You can also start adding your team by entering their email address and assigning them a role.

### Roles
- **Editor:** Access to the visual editor and can save content directly to the CMS.
- **Player:** Access to the visual editor but can **not** save directly to the CMS.

---

## CMS Configuration

### Content Endpoint

:::tip Not sure if you have a preview endpoint?

Feel free to [reach out](https://www.gatewayweb.net/contact) to us! We offer a wide range of professional services.

:::

A content endpoint is required for the visual editor to function. The content endpoint can be your existing preview endpoint.

The editor will make a `GET` request to this endpoint to retrieve content from your CMS. You can provide either a relative or absolute URL for the endpoint.

#### Passing the entry ID

The editor will replace `[id]` with the entry ID in the request URL and your content endpoint must return the relevant content. This allows you to configure your endpoint however you want to for maximum flexibility.

#### Localization

The editor will also append 2 query parameters to the request: `locale` and `defaultLocale`. It's expected to return the correct locale depending on these query parameters.

### Content Endpoint Example

`https://example.com/api/preview/[id]`

The editor would take this and transform it to something like this:

`https://example.com/api/preview/34kjnkdngkjnfdg3?locale=en&defaultLocale=en`

---

### HyGraph
- **Project ID:** Your HyGraph Project ID. This can be found inside the HyGraph application under "Project Settings"
- **Endpoint:** Your HyGraph content delivery endpoint. This can be found inside the HyGraph application under "Project Settings > Access > API Access".
- **Content token:** A permanent auth token that includes read, create, update, delete, publish and unpublish for all models on all stages and locales. It also requires management API access to read the content model.

### Contentful

- **Project ID:** Your Contentful Space ID. This can be found inside the Contentful application under "Space Settings"
- **Content Token:** API Token created under "Settings > API Keys" that allows the editor to access Contentful's content APIs.
- **Management Token:** Management token created under "Settings > CMA tokens" that allows us to access the content model through the API.
