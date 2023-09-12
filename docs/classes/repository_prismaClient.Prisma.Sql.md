[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / Sql

# Class: Sql

[repository/prismaClient](../modules/repository_prismaClient.md).[Prisma](../modules/repository_prismaClient.Prisma.md).Sql

A SQL instance can be nested within each other to build SQL strings.

## Table of contents

### Constructors

- [constructor](repository_prismaClient.Prisma.Sql.md#constructor)

### Properties

- [strings](repository_prismaClient.Prisma.Sql.md#strings)
- [values](repository_prismaClient.Prisma.Sql.md#values)

### Accessors

- [sql](repository_prismaClient.Prisma.Sql.md#sql)
- [text](repository_prismaClient.Prisma.Sql.md#text)

### Methods

- [inspect](repository_prismaClient.Prisma.Sql.md#inspect)

## Constructors

### constructor

• **new Sql**(`rawStrings`, `rawValues`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawStrings` | readonly `string`[] |
| `rawValues` | readonly `unknown`[] |

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:2594

## Properties

### strings

• **strings**: `string`[]

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:2593

___

### values

• **values**: `unknown`[]

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:2592

## Accessors

### sql

• `get` **sql**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:2596

___

### text

• `get` **text**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:2595

## Methods

### inspect

▸ **inspect**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `sql` | `string` |
| `text` | `string` |
| `values` | `unknown`[] |

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:2597
