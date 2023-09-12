[@onehoax/rest-api](../README.md) / [service/personOOP](../modules/service_personOOP.md) / PersonService

# Class: PersonService

[service/personOOP](../modules/service_personOOP.md).PersonService

## Table of contents

### Constructors

- [constructor](service_personOOP.PersonService.md#constructor)

### Properties

- [personRepo](service_personOOP.PersonService.md#personrepo)

### Methods

- [createMany](service_personOOP.PersonService.md#createmany)
- [createOne](service_personOOP.PersonService.md#createone)
- [deleteOne](service_personOOP.PersonService.md#deleteone)
- [findAll](service_personOOP.PersonService.md#findall)
- [findOne](service_personOOP.PersonService.md#findone)
- [updateOne](service_personOOP.PersonService.md#updateone)

## Constructors

### constructor

• **new PersonService**()

#### Defined in

src/service/personOOP.ts:7

## Properties

### personRepo

• `Private` **personRepo**: [`PersonRepository`](repository_personOOP.PersonRepository.md)

#### Defined in

src/service/personOOP.ts:5

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

src/service/personOOP.ts:15

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

src/service/personOOP.ts:11

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

src/service/personOOP.ts:31

___

### findAll

▸ **findAll**(): `Promise`<[`Person`](../modules/model_person.md#person)[]\>

#### Returns

`Promise`<[`Person`](../modules/model_person.md#person)[]\>

#### Defined in

src/service/personOOP.ts:23

___

### findOne

▸ **findOne**(`name`, `email`): `Promise`<``null`` \| [`Person`](../modules/model_person.md#person)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `email` | `string` |

#### Returns

`Promise`<``null`` \| [`Person`](../modules/model_person.md#person)\>

#### Defined in

src/service/personOOP.ts:19

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

src/service/personOOP.ts:27
