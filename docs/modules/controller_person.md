[@onehoax/rest-api](../README.md) / controller/person

# Module: controller/person

## Table of contents

### Functions

- [createMany](controller_person.md#createmany)
- [createOne](controller_person.md#createone)
- [deleteOne](controller_person.md#deleteone)
- [findAll](controller_person.md#findall)
- [findOne](controller_person.md#findone)
- [updateOne](controller_person.md#updateone)

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

[src/controller/person.ts:27](https://github.com/onehoax/rest_api/blob/42e98b1/src/controller/person.ts#L27)

___

### createOne

▸ **createOne**(`req`, `res`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/controller/person.ts:11](https://github.com/onehoax/rest_api/blob/42e98b1/src/controller/person.ts#L11)

___

### deleteOne

▸ **deleteOne**(`req`, `res`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/controller/person.ts:74](https://github.com/onehoax/rest_api/blob/42e98b1/src/controller/person.ts#L74)

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

[src/controller/person.ts:48](https://github.com/onehoax/rest_api/blob/42e98b1/src/controller/person.ts#L48)

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

[src/controller/person.ts:31](https://github.com/onehoax/rest_api/blob/42e98b1/src/controller/person.ts#L31)

___

### updateOne

▸ **updateOne**(`req`, `res`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/controller/person.ts:58](https://github.com/onehoax/rest_api/blob/42e98b1/src/controller/person.ts#L58)
