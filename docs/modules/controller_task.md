[@onehoax/rest-api](../README.md) / controller/task

# Module: controller/task

## Table of contents

### Functions

- [createTaskForUser](controller_task.md#createtaskforuser)
- [deleteTasksByUser](controller_task.md#deletetasksbyuser)
- [findAll](controller_task.md#findall)
- [findTasksByUser](controller_task.md#findtasksbyuser)

## Functions

### createTaskForUser

▸ **createTaskForUser**(`req`, `res`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/controller/task.ts:36](https://github.com/onehoax/rest_api/blob/42e98b1/src/controller/task.ts#L36)

___

### deleteTasksByUser

▸ **deleteTasksByUser**(`req`, `res`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/controller/task.ts:51](https://github.com/onehoax/rest_api/blob/42e98b1/src/controller/task.ts#L51)

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

[src/controller/task.ts:11](https://github.com/onehoax/rest_api/blob/42e98b1/src/controller/task.ts#L11)

___

### findTasksByUser

▸ **findTasksByUser**(`req`, `res`, `next`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/controller/task.ts:21](https://github.com/onehoax/rest_api/blob/42e98b1/src/controller/task.ts#L21)
