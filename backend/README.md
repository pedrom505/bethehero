# BeTheHero (Backend)

[![Licence](https://img.shields.io/badge/licence-MIT-green)](https://www.mit.edu/~amini/LICENSE.md) [![NodeJS Version](https://img.shields.io/badge/NodeJS-12.16.1-blue)](https://nodejs.org/en/blog/release/v12.16.1/) [![NPM Version](https://img.shields.io/badge/NPM-6.13.4-blue)](https://www.npmjs.com/package/npm/v/6.13.4)


## Table of Contents

- [BeTheHero (Backend)](#bethehero-backend)
  - [Table of Contents](#table-of-contents)
  - [Dependences](#dependences)
  - [Database](#database)
    - [Create](#create)
    - [Delete](#delete)
  - [Using BeTheHero](#using-bethehero)

## Dependences
```
$ npm install
```

## Database

### Create

```
$ npx  knex migrate:latest
```

### Delete
```
$ npx  knex migrate:rollback
```

## Using BeTheHero
```
$ npm start
```