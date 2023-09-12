[@onehoax/rest-api](../README.md) / [utils/error](../modules/utils_error.md) / MyError

# Class: MyError

[utils/error](../modules/utils_error.md).MyError

Custom error

## Hierarchy

- `Error`

  ↳ **`MyError`**

## Table of contents

### Constructors

- [constructor](utils_error.MyError.md#constructor)

### Properties

- [cause](utils_error.MyError.md#cause)
- [errorCode](utils_error.MyError.md#errorcode)
- [message](utils_error.MyError.md#message)
- [name](utils_error.MyError.md#name)
- [stack](utils_error.MyError.md#stack)
- [prepareStackTrace](utils_error.MyError.md#preparestacktrace)
- [stackTraceLimit](utils_error.MyError.md#stacktracelimit)

### Methods

- [captureStackTrace](utils_error.MyError.md#capturestacktrace)

## Constructors

### constructor

• **new MyError**(`errorCode`, `message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `errorCode` | `number` |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/utils/error.ts:14](https://github.com/onehoax/rest_api/blob/42e98b1/src/utils/error.ts#L14)

## Properties

### cause

• `Optional` **cause**: `unknown`

#### Inherited from

Error.cause

#### Defined in

node_modules/typescript/lib/lib.es2022.error.d.ts:24

___

### errorCode

• **errorCode**: `number`

Error code

#### Defined in

[src/utils/error.ts:12](https://github.com/onehoax/rest_api/blob/42e98b1/src/utils/error.ts#L12)

___

### message

• **message**: `string`

Error message

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
