[@onehoax/rest-api](../README.md) / service/task

# Module: service/task

## Table of contents

### Functions

- [createTaskForUser](service_task.md#createtaskforuser)
- [deleteTasksByUser](service_task.md#deletetasksbyuser)
- [findAll](service_task.md#findall)
- [findTasksByUser](service_task.md#findtasksbyuser)

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

[src/service/task.ts:12](https://github.com/onehoax/rest_api/blob/42e98b1/src/service/task.ts#L12)

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

[src/service/task.ts:16](https://github.com/onehoax/rest_api/blob/42e98b1/src/service/task.ts#L16)

___

### findAll

▸ **findAll**(): `Promise`<[`Task`](model_task.md#task)[]\>

#### Returns

`Promise`<[`Task`](model_task.md#task)[]\>

#### Defined in

[src/service/task.ts:4](https://github.com/onehoax/rest_api/blob/42e98b1/src/service/task.ts#L4)

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

[src/service/task.ts:8](https://github.com/onehoax/rest_api/blob/42e98b1/src/service/task.ts#L8)
