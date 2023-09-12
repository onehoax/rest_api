[@onehoax/rest-api](../README.md) / repository/task

# Module: repository/task

## Table of contents

### Functions

- [createTaskForUser](repository_task.md#createtaskforuser)
- [deleteTasksByUser](repository_task.md#deletetasksbyuser)
- [findAll](repository_task.md#findall)
- [findTasksByUser](repository_task.md#findtasksbyuser)

## Functions

### createTaskForUser

▸ **createTaskForUser**(`name`, `email`, `entry`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `email` | `string` |
| `entry` | [`Task`](model_task.md#task) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/repository/task.ts:24](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/task.ts#L24)

___

### deleteTasksByUser

▸ **deleteTasksByUser**(`name`, `email`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `email` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/repository/task.ts:78](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/task.ts#L78)

___

### findAll

▸ **findAll**(): `Promise`<[`Task`](model_task.md#task)[]\>

#### Returns

`Promise`<[`Task`](model_task.md#task)[]\>

#### Defined in

[src/repository/task.ts:66](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/task.ts#L66)

___

### findTasksByUser

▸ **findTasksByUser**(`name`, `email`): `Promise`<[`Task`](model_task.md#task)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `email` | `string` |

#### Returns

`Promise`<[`Task`](model_task.md#task)[]\>

#### Defined in

[src/repository/task.ts:47](https://github.com/onehoax/rest_api/blob/42e98b1/src/repository/task.ts#L47)
