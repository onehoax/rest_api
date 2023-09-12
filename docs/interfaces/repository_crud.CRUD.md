[@onehoax/rest-api](../README.md) / [repository/crud](../modules/repository_crud.md) / CRUD

# Interface: CRUD<T\>

[repository/crud](../modules/repository_crud.md).CRUD

Interface to enforce CRUD operations across all repositories

## Type parameters

| Name |
| :------ |
| `T` |

## Implemented by

- [`PersonRepository`](../classes/repository_personOOP.PersonRepository.md)

## Table of contents

### Methods

- [createMany](repository_crud.CRUD.md#createmany)
- [createOne](repository_crud.CRUD.md#createone)
- [deleteOne](repository_crud.CRUD.md#deleteone)
- [findAll](repository_crud.CRUD.md#findall)
- [findOne](repository_crud.CRUD.md#findone)
- [updateOne](repository_crud.CRUD.md#updateone)

## Methods

### createMany

▸ **createMany**(`entries`): `Promise`<`number`\>

Create a batch of new T records in the table of T

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entries` | `T`[] | T objects to be inserted |

#### Returns

`Promise`<`number`\>

All the T records inserted as T[], an empty array if operation doesn't succeed

#### Defined in

[src/repository/crud.ts:17](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/crud.ts#L17)

___

### createOne

▸ **createOne**(`entry`): `Promise`<`boolean`\>

Create a new T record in the table of T

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `entry` | `T` | T object to be inserted |

#### Returns

`Promise`<`boolean`\>

The T record inserted, null if operation doesn't succeed

#### Defined in

[src/repository/crud.ts:10](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/crud.ts#L10)

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

#### Defined in

[src/repository/crud.ts:45](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/crud.ts#L45)

___

### findAll

▸ **findAll**(): `Promise`<`T`[]\>

Retrieve all T records from the table of T

#### Returns

`Promise`<`T`[]\>

All T records from the table of T as a T[]

#### Defined in

[src/repository/crud.ts:31](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/crud.ts#L31)

___

### findOne

▸ **findOne**(`name`, `email`): `Promise`<``null`` \| `T`\>

Retrieve the T record from the table of T with given name and email combination

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of user |
| `email` | `string` | Email of user |

#### Returns

`Promise`<``null`` \| `T`\>

The T record from the table of T with name and email combination

#### Defined in

[src/repository/crud.ts:25](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/crud.ts#L25)

___

### updateOne

▸ **updateOne**(`name`, `email`, `entry`): `Promise`<`boolean`\>

Update an existing T record in the table of T with given name and email combination

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Name of user |
| `email` | `string` | Email of user |
| `entry` | `T` | - |

#### Returns

`Promise`<`boolean`\>

The updated T object, null otherwise

#### Defined in

[src/repository/crud.ts:39](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/crud.ts#L39)
