[@onehoax/rest-api](../README.md) / [controller/personOOP](../modules/controller_personOOP.md) / PersonController

# Class: PersonController

[controller/personOOP](../modules/controller_personOOP.md).PersonController

## Table of contents

### Constructors

- [constructor](controller_personOOP.PersonController.md#constructor)

### Properties

- [personService](controller_personOOP.PersonController.md#personservice)

### Methods

- [createMany](controller_personOOP.PersonController.md#createmany)
- [createOne](controller_personOOP.PersonController.md#createone)
- [deleteOne](controller_personOOP.PersonController.md#deleteone)
- [findAll](controller_personOOP.PersonController.md#findall)
- [findOne](controller_personOOP.PersonController.md#findone)
- [updateOne](controller_personOOP.PersonController.md#updateone)

## Constructors

### constructor

• **new PersonController**()

#### Defined in

src/controller/personOOP.ts:14

## Properties

### personService

• `Private` **personService**: [`PersonService`](service_personOOP.PersonService.md)

#### Defined in

src/controller/personOOP.ts:12

## Methods

### createMany

▸ **createMany**(`entries`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | [`Person`](../modules/model_person.md#person)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

src/controller/personOOP.ts:22

___

### createOne

▸ **createOne**(`entry`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`Person`](../modules/model_person.md#person) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/controller/personOOP.ts:18

___

### deleteOne

▸ **deleteOne**(`name`, `email`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `email` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/controller/personOOP.ts:62

___

### findAll

▸ **findAll**(`req`, `res`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/controller/personOOP.ts:48

___

### findOne

▸ **findOne**(`req`, `res`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`Promise`<`void`\>

#### Defined in

src/controller/personOOP.ts:30

___

### updateOne

▸ **updateOne**(`name`, `email`, `entry`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `email` | `string` |
| `entry` | [`Person`](../modules/model_person.md#person) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

src/controller/personOOP.ts:58
