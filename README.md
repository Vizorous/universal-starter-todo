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

- You should have mysql installed and running on your machine.

- You can customize the database connection by creating a `.env.dev` file in [backend](apps/backend/) folder. Structure of the file is as follows.

  ```
  DATABASE_NAME=universal_todo
  DATABASE_USER=root
  DATABASE_PASSWORD=root
  ```

- Make sure your MySQL has a database with the correct name with correct username and password.

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

## Commit guide

We utilize convention commits to put our commits in a standard format. This helps us to generate changelogs and release notes automatically. Please follow the following guide to commit your changes.

### The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

### Examples

#### Commit message with description

```
feat: add 'comments' option
```

You should use feat:, fix:, chore:, mainly. Additionally you can use docs:, style:, refactor:, perf:, test: as well.

#### Commit message with description and breaking change in body

```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

#### Commit message with no body

```
docs: correct spelling of CHANGELOG
```

#### Commit message with scope

```
feat(lang): added polish language
```

#### Commit message for a fix using an (optional) issue number.

```
fix: minor typos in code

see the issue for details on the typos fixed

fixes issue #12
```

## Workspace usage

Utilize the [workspace](starter.code-workspace) file to access the workspace, it contains following folders,

- [frontend](apps/frontend/)
- [backend](apps/backend/)
- [relay-graphql](packages/relay-run/)
- [root](/)

## Library Documentation

### Backend

- Nest Query - https://tripss.github.io/nestjs-query/
- Nest GraphQL - https://docs.nestjs.com/graphql/quick-start
- Nest Tutorials - https://github.com/nestjs/awesome-nestjs

### Frontend

- Relay docs - https://relay.dev/docs/
- GraphQL docs - https://graphql.org/
- React tutorials - https://github.com/enaqx/awesome-react

## Nest CLI (GraphQL CRUD Endpoint Generation)

- An alias has been created for `pnpm --filter backend run nest` command to utilize nest cli commands correctly.
  ```
  pnpm nest
  ```
- [Nest CLI reference](https://docs.nestjs.com/cli/overview)

## Database Browsing

- You can use any mysql client to browse. I recommend dBeaver. You can download it from here https://dbeaver.io/download/

<!--
### Nest CLI Examples

- Generate a new CRUD resource called matric inside [src/facebook](apps/backend/src/facebook/) folder in backend. (Utilized the `folder_name/resource_name` syntax to add to the correct folder)
  ```
  pnpm nest g resource facebook/matric
  ```
- Please find the list of all generatable attributes [here](https://docs.nestjs.com/cli/usages#arguments-1)

## Database browsing

- Use [MongoDBCompass](https://www.mongodb.com/try/download/compass) to browse the data.

- Use the URL in `MONGO_DB` field in `.env.dev` to connect to the online database. -->

### Build Process

Todo

### Testing

Todo

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
