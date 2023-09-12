[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / PrismaClientRustPanicError

# Class: PrismaClientRustPanicError

[repository/prismaClient](../modules/repository_prismaClient.md).[Prisma](../modules/repository_prismaClient.Prisma.md).PrismaClientRustPanicError

## Hierarchy

- `Error`

  ↳ **`PrismaClientRustPanicError`**

## Table of contents

### Constructors

- [constructor](repository_prismaClient.Prisma.PrismaClientRustPanicError.md#constructor)

### Properties

- [cause](repository_prismaClient.Prisma.PrismaClientRustPanicError.md#cause)
- [clientVersion](repository_prismaClient.Prisma.PrismaClientRustPanicError.md#clientversion)
- [message](repository_prismaClient.Prisma.PrismaClientRustPanicError.md#message)
- [name](repository_prismaClient.Prisma.PrismaClientRustPanicError.md#name)
- [stack](repository_prismaClient.Prisma.PrismaClientRustPanicError.md#stack)
- [prepareStackTrace](repository_prismaClient.Prisma.PrismaClientRustPanicError.md#preparestacktrace)
- [stackTraceLimit](repository_prismaClient.Prisma.PrismaClientRustPanicError.md#stacktracelimit)

### Accessors

- [[toStringTag]](repository_prismaClient.Prisma.PrismaClientRustPanicError.md#[tostringtag])

### Methods

- [captureStackTrace](repository_prismaClient.Prisma.PrismaClientRustPanicError.md#capturestacktrace)

## Constructors

### constructor

• **new PrismaClientRustPanicError**(`message`, `clientVersion`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `clientVersion` | `string` |

#### Overrides

Error.constructor

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:2048

## Properties

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

node_modules/@prisma/client/runtime/library.d.ts:2047

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

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

node_modules/@prisma/client/runtime/library.d.ts:2049

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
