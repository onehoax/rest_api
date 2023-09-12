[@onehoax/rest-api](../README.md) / service/person

# Module: service/person

## Table of contents

### Functions

- [createMany](service_person.md#createmany)
- [createOne](service_person.md#createone)
- [deleteOne](service_person.md#deleteone)
- [findAll](service_person.md#findall)
- [findOne](service_person.md#findone)
- [updateOne](service_person.md#updateone)

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

[src/service/person.ts:8](https://github.com/onehoax/rest_api/blob/42e98b1/src/service/person.ts#L8)

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

[src/service/person.ts:4](https://github.com/onehoax/rest_api/blob/42e98b1/src/service/person.ts#L4)

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

[src/service/person.ts:24](https://github.com/onehoax/rest_api/blob/42e98b1/src/service/person.ts#L24)

___

### findAll

▸ **findAll**(): `Promise`<[`Person`](model_person.md#person)[]\>

#### Returns

`Promise`<[`Person`](model_person.md#person)[]\>

#### Defined in

[src/service/person.ts:16](https://github.com/onehoax/rest_api/blob/42e98b1/src/service/person.ts#L16)

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

[src/service/person.ts:12](https://github.com/onehoax/rest_api/blob/42e98b1/src/service/person.ts#L12)

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

[src/service/person.ts:20](https://github.com/onehoax/rest_api/blob/42e98b1/src/service/person.ts#L20)
