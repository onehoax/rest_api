[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / NotFoundError

# Class: NotFoundError

[repository/prismaClient](../modules/repository_prismaClient.md).[Prisma](../modules/repository_prismaClient.Prisma.md).NotFoundError

**`Deprecated`**

Please don´t rely on type checks to this error anymore.
This will become a regular `PrismaClientKnownRequestError` with code `P2025`
in the future major version of the client.
Instead of `error instanceof Prisma.NotFoundError` use `error.code === "P2025"`.

## Hierarchy

- [`PrismaClientKnownRequestError`](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md)

  ↳ **`NotFoundError`**

## Table of contents

### Constructors

- [constructor](repository_prismaClient.Prisma.NotFoundError.md#constructor)

### Properties

- [batchRequestIdx](repository_prismaClient.Prisma.NotFoundError.md#batchrequestidx)
- [cause](repository_prismaClient.Prisma.NotFoundError.md#cause)
- [clientVersion](repository_prismaClient.Prisma.NotFoundError.md#clientversion)
- [code](repository_prismaClient.Prisma.NotFoundError.md#code)
- [message](repository_prismaClient.Prisma.NotFoundError.md#message)
- [meta](repository_prismaClient.Prisma.NotFoundError.md#meta)
- [name](repository_prismaClient.Prisma.NotFoundError.md#name)
- [stack](repository_prismaClient.Prisma.NotFoundError.md#stack)
- [prepareStackTrace](repository_prismaClient.Prisma.NotFoundError.md#preparestacktrace)
- [stackTraceLimit](repository_prismaClient.Prisma.NotFoundError.md#stacktracelimit)

### Accessors

- [[toStringTag]](repository_prismaClient.Prisma.NotFoundError.md#[tostringtag])

### Methods

- [captureStackTrace](repository_prismaClient.Prisma.NotFoundError.md#capturestacktrace)

## Constructors

### constructor

• **new NotFoundError**(`message`, `clientVersion`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `clientVersion` | `string` |

#### Overrides

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[constructor](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#constructor)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:1878

## Properties

### batchRequestIdx

• `Optional` **batchRequestIdx**: `number`

#### Inherited from

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[batchRequestIdx](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#batchrequestidx)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:1997

___

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[cause](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#cause)

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### clientVersion

• **clientVersion**: `string`

#### Inherited from

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[clientVersion](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#clientversion)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:1996

___

### code

• **code**: `string`

#### Inherited from

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[code](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#code)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:1994

___

### message

• **message**: `string`

#### Inherited from

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[message](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### meta

• `Optional` **meta**: `Record`<`string`, `unknown`\>

#### Inherited from

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[meta](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#meta)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:1995

___

### name

• **name**: `string`

#### Inherited from

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[name](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[stack](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#stack)

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

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[prepareStackTrace](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[stackTraceLimit](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Accessors

### [toStringTag]

• `get` **[toStringTag]**(): `string`

#### Returns

`string`

#### Inherited from

PrismaClientKnownRequestError.[toStringTag]

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

[PrismaClientKnownRequestError](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md).[captureStackTrace](repository_prismaClient.Prisma.PrismaClientKnownRequestError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/globals.d.ts:4
