# Universal Starter Template 

## Get started

- Make sure you've installed Node 16 for optimal usage. (14 will work but pnpm setup could be harder)
- Install pnpm package manager. For node versions before 16, use `npm install -g pnpm`
  ```
  corepack enable
  ```
- Install watchman (required for relay) from here https://facebook.github.io/watchman/ or through chocolatey,

  ```
  choco install watchman
  ```

- Install dependencies through,

  ```
  pnpm install
  ```
- Run backend first to create the schema file for frontend

    ```
    pnpm be dev
    ```
- You can shut it down then and start development. 
- Start the development servers with,

  ```
  pnpm dev
  ```

## Dependency Installation

Utilize following commands to install in the respective project folders

- Frontend install (alias for `pnpm --filter frontend add`)

  ```
  pnpm fea lodash
  ```

- Backend install (alias for `pnpm --filter backend add`)

  ```
  pnpm bea lodash
  ```

## PNPM Command Usage

Aliases has been created to utilize scoped PNPM commands correctly.

- backend (for `pnpm --filter backend`)
  ```
  pnpm be
  ```
- frontend (for `pnpm --filter frontend`)
  ```
  pnpm fe
  ```

### PNPM Examples

- Run dev script in backend.
  ```
  pnpm be dev
  ```
- remove lodash from frontend
  ```
  pnpm fe remove lodash
  ```

## Workspace usage

Utilize the [workspace](seamless-analytics.code-workspace) file to access the workspace, it contains following folders,

- [frontend](apps/frontend/)
- [backend](apps/backend/)
- [relay-graphql](packages/relay-graphql//)
- [root](/)

## Nest CLI (GraphQL CRUD Endpoint Generation)

- An alias has been created for `pnpm --filter backend run nest` command to utilize nest cli commands correctly.
  ```
  pnpm nest
  ```
- [Nest CLI reference](https://docs.nestjs.com/cli/overview)

### Nest CLI Examples

- Generate a new CRUD resource called matric inside [src/facebook](apps/backend/src/facebook/) folder in backend. (Utilized the `folder_name/resource_name` syntax to add to the correct folder)
  ```
  pnpm nest g resource facebook/matric
  ```
- Please find the list of all generatable attributes [here](https://docs.nestjs.com/cli/usages#arguments-1)

## Database browsing

- Use [MongoDBCompass](https://www.mongodb.com/try/download/compass) to browse the data.

- Use the URL in `MONGO_DB` field in `.env.dev` to connect to the online database.

### Build Process

Todo

### Testing

Todo

## Library Documentation

### Backend

Nest GraphQL - https://docs.nestjs.com/graphql/quick-start  
Nest Mongoose - https://docs.nestjs.com/recipes/mongodb  
Nest Tutorials - https://github.com/nestjs/awesome-nestjs  
Mongoose Docs - https://mongoosejs.com/docs/api.html

### Frontend

Relay docs - https://relay.dev/docs/  
GraphQL docs - https://graphql.org/  
React tutorials - https://github.com/enaqx/awesome-react

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
