[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / PrismaClientOptions

# Interface: PrismaClientOptions

[repository/prismaClient](../modules/repository_prismaClient.md).[Prisma](../modules/repository_prismaClient.Prisma.md).PrismaClientOptions

## Table of contents

### Properties

- [datasourceUrl](repository_prismaClient.Prisma.PrismaClientOptions.md#datasourceurl)
- [datasources](repository_prismaClient.Prisma.PrismaClientOptions.md#datasources)
- [errorFormat](repository_prismaClient.Prisma.PrismaClientOptions.md#errorformat)
- [log](repository_prismaClient.Prisma.PrismaClientOptions.md#log)

## Properties

### datasourceUrl

• `Optional` **datasourceUrl**: `string`

Overwrites the datasource url from your schema.prisma file

#### Defined in

node_modules/.prisma/client/index.d.ts:829

___

### datasources

• `Optional` **datasources**: [`Datasources`](../modules/repository_prismaClient.Prisma.md#datasources)

Overwrites the datasource url from your schema.prisma file

#### Defined in

node_modules/.prisma/client/index.d.ts:824

___

### errorFormat

• `Optional` **errorFormat**: [`ErrorFormat`](../modules/repository_prismaClient.Prisma.md#errorformat)

**`Default`**

```ts
"colorless"
```

#### Defined in

node_modules/.prisma/client/index.d.ts:834

___

### log

• `Optional` **log**: ([`LogLevel`](../modules/repository_prismaClient.Prisma.md#loglevel) \| [`LogDefinition`](../modules/repository_prismaClient.Prisma.md#logdefinition))[]

**`Example`**

```
// Defaults to stdout
log: ['query', 'info', 'warn', 'error']

// Emit as events
log: [
 { emit: 'stdout', level: 'query' },
 { emit: 'stdout', level: 'info' },
 { emit: 'stdout', level: 'warn' }
 { emit: 'stdout', level: 'error' }
]
```
Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).

#### Defined in

node_modules/.prisma/client/index.d.ts:852
