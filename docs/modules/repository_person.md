[@onehoax/rest-api](../README.md) / repository/person

# Module: repository/person

## Table of contents

### Functions

- [createMany](repository_person.md#createmany)
- [createOne](repository_person.md#createone)
- [deleteOne](repository_person.md#deleteone)
- [findAll](repository_person.md#findall)
- [findOne](repository_person.md#findone)
- [updateOne](repository_person.md#updateone)

## Functions

### createMany

▸ **createMany**(`entries`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries` | [`Person`](model_person.md#person)[] |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/repository/person.ts:31](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/person.ts#L31)

___

### createOne

▸ **createOne**(`entry`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`Person`](model_person.md#person) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/repository/person.ts:11](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/person.ts#L11)

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

[src/repository/person.ts:101](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/person.ts#L101)

___

### findAll

▸ **findAll**(): `Promise`<[`Person`](model_person.md#person)[]\>

#### Returns

`Promise`<[`Person`](model_person.md#person)[]\>

#### Defined in

[src/repository/person.ts:63](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/person.ts#L63)

___

### findOne

▸ **findOne**(`name`, `email`): `Promise`<[`Person`](model_person.md#person) \| ``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `email` | `string` |

#### Returns

`Promise`<[`Person`](model_person.md#person) \| ``null``\>

#### Defined in

[src/repository/person.ts:45](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/person.ts#L45)

___

### updateOne

▸ **updateOne**(`name`, `email`, `entry`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `email` | `string` |
| `entry` | [`Person`](model_person.md#person) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/repository/person.ts:75](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/person.ts#L75)
