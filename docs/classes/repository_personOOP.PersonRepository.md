[@onehoax/rest-api](../README.md) / [repository/personOOP](../modules/repository_personOOP.md) / PersonRepository

# Class: PersonRepository

[repository/personOOP](../modules/repository_personOOP.md).PersonRepository

Person repository for CRUD operations

## Implements

- [`CRUD`](../interfaces/repository_crud.CRUD.md)<[`Person`](../modules/model_person.md#person)\>

## Table of contents

### Constructors

- [constructor](repository_personOOP.PersonRepository.md#constructor)

### Methods

- [createMany](repository_personOOP.PersonRepository.md#createmany)
- [createOne](repository_personOOP.PersonRepository.md#createone)
- [deleteOne](repository_personOOP.PersonRepository.md#deleteone)
- [findAll](repository_personOOP.PersonRepository.md#findall)
- [findOne](repository_personOOP.PersonRepository.md#findone)
- [updateOne](repository_personOOP.PersonRepository.md#updateone)

## Constructors

### constructor

• **new PersonRepository**()

## Methods

### createMany

▸ **createMany**(`entries`): `Promise`<`number`\>

Create a batch of new T records in the table of T

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | [`Person`](../modules/model_person.md#person)[] | T objects to be inserted |

#### Returns

`Promise`<`number`\>

All the T records inserted as T[], an empty array if operation doesn't succeed

#### Implementation of

[CRUD](../interfaces/repository_crud.CRUD.md).[createMany](../interfaces/repository_crud.CRUD.md#createmany)

#### Defined in

src/repository/personOOP.ts:45

___

### createOne

▸ **createOne**(`entry`): `Promise`<`boolean`\>

Create a new T record in the table of T

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entry` | [`Person`](../modules/model_person.md#person) | T object to be inserted |

#### Returns

`Promise`<`boolean`\>

The T record inserted, null if operation doesn't succeed

#### Implementation of

[CRUD](../interfaces/repository_crud.CRUD.md).[createOne](../interfaces/repository_crud.CRUD.md#createone)

#### Defined in

src/repository/personOOP.ts:25

___

### deleteOne

▸ **deleteOne**(`name`, `email`): `Promise`<`boolean`\>

Delete the T record from the table of T with given name and email combination

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `email` | `string` |

#### Returns

`Promise`<`boolean`\>

The T record from the table of T with given name and email combination

#### Implementation of

[CRUD](../interfaces/repository_crud.CRUD.md).[deleteOne](../interfaces/repository_crud.CRUD.md#deleteone)

#### Defined in

src/repository/personOOP.ts:116

___

### findAll

▸ **findAll**(): `Promise`<[`Person`](../modules/model_person.md#person)[]\>

Retrieve all T records from the table of T

#### Returns

`Promise`<[`Person`](../modules/model_person.md#person)[]\>

All T records from the table of T as a T[]

#### Implementation of

[CRUD](../interfaces/repository_crud.CRUD.md).[findAll](../interfaces/repository_crud.CRUD.md#findall)

#### Defined in

src/repository/personOOP.ts:78

___

### findOne

▸ **findOne**(`name`, `email`): `Promise`<``null`` \| [`Person`](../modules/model_person.md#person)\>

Retrieve the T record from the table of T with given name and email combination

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of user |
| `email` | `string` | Email of user |

#### Returns

`Promise`<``null`` \| [`Person`](../modules/model_person.md#person)\>

The T record from the table of T with name and email combination

#### Implementation of

[CRUD](../interfaces/repository_crud.CRUD.md).[findOne](../interfaces/repository_crud.CRUD.md#findone)

#### Defined in

src/repository/personOOP.ts:59

___

### updateOne

▸ **updateOne**(`name`, `email`, `entry`): `Promise`<`boolean`\>

Update an existing T record in the table of T with given name and email combination

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of user |
| `email` | `string` | Email of user |
| `entry` | [`Person`](../modules/model_person.md#person) | - |

#### Returns

`Promise`<`boolean`\>

The updated T object, null otherwise

#### Implementation of

[CRUD](../interfaces/repository_crud.CRUD.md).[updateOne](../interfaces/repository_crud.CRUD.md#updateone)

#### Defined in

src/repository/personOOP.ts:90
