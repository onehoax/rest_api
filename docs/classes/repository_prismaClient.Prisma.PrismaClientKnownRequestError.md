[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / PrismaClientKnownRequestError

# Class: PrismaClientKnownRequestError

[repository/prismaClient](../modules/repository_prismaClient.md).[Prisma](../modules/repository_prismaClient.Prisma.md).PrismaClientKnownRequestError

## Hierarchy

- `Error`

  ↳ **`PrismaClientKnownRequestError`**

  ↳↳ [`NotFoundError`](repository_prismaClient.Prisma.NotFoundError.md)

## Implements

- `ErrorWithBatchIndex`

## Table of contents

### Constructors

- [constructor](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#constructor)

### Properties

- [batchRequestIdx](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#batchrequestidx)
- [cause](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#cause)
- [clientVersion](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#clientversion)
- [code](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#code)
- [message](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#message)
- [meta](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#meta)
- [name](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#name)
- [stack](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#stack)
- [prepareStackTrace](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#preparestacktrace)
- [stackTraceLimit](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#stacktracelimit)

### Accessors

- [[toStringTag]](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#[tostringtag])

### Methods

- [captureStackTrace](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#capturestacktrace)

## Constructors

### constructor

• **new PrismaClientKnownRequestError**(`message`, `«destructured»`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `«destructured»` | `KnownErrorParams` |

#### Overrides

Error.constructor

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:1998

## Properties

### batchRequestIdx

• `Optional` **batchRequestIdx**: `number`

#### Implementation of

ErrorWithBatchIndex.batchRequestIdx

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:1997

___

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### clientVersion

• **clientVersion**: `string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:1996

___

### code

• **code**: `string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:1994

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### meta

• `Optional` **meta**: `Record`<`string`, `unknown`\>

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:1995

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:1999

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
