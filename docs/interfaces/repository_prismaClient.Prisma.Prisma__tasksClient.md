[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / Prisma\_\_tasksClient

# Interface: Prisma\_\_tasksClient<T, Null, ExtArgs\>

[repository/prismaClient](../modules/repository_prismaClient.md).[Prisma](../modules/repository_prismaClient.Prisma.md).Prisma__tasksClient

The delegate class that acts as a "Promise-like" for tasks.
Why is this prefixed with `Prisma__`?
Because we want to prevent naming conflicts as mentioned in
https://github.com/prisma/prisma-client-js/issues/707

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `Null` | `never` |
| `ExtArgs` | extends `$Extensions.Args` = `$Extensions.DefaultArgs` |

## Hierarchy

- [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`T`\>

  ↳ **`Prisma__tasksClient`**

## Table of contents

### Properties

- [[toStringTag]](repository_prismaClient.Prisma.Prisma__tasksClient.md#[tostringtag])

### Methods

- [catch](repository_prismaClient.Prisma.Prisma__tasksClient.md#catch)
- [finally](repository_prismaClient.Prisma.Prisma__tasksClient.md#finally)
- [people](repository_prismaClient.Prisma.Prisma__tasksClient.md#people)
- [then](repository_prismaClient.Prisma.Prisma__tasksClient.md#then)

## Properties

### [toStringTag]

• `Readonly` **[toStringTag]**: ``"PrismaPromise"``

#### Overrides

Prisma.PrismaPromise.[toStringTag]

#### Defined in

node_modules/.prisma/client/index.d.ts:1570

## Methods

### catch

▸ **catch**<`TResult`\>(`onrejected?`): `Promise`<`T` \| `TResult`\>

Attaches a callback for only the rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult` \| `PromiseLike`<`TResult`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`T` \| `TResult`\>

A Promise for the completion of the callback.

#### Overrides

Prisma.PrismaPromise.catch

#### Defined in

node_modules/.prisma/client/index.d.ts:1586

___

### finally

▸ **finally**(`onfinally?`): `Promise`<`T`\>

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfinally?` | ``null`` \| () => `void` | The callback to execute when the Promise is settled (fulfilled or rejected). |

#### Returns

`Promise`<`T`\>

A Promise for the completion of the callback.

#### Overrides

Prisma.PrismaPromise.finally

#### Defined in

node_modules/.prisma/client/index.d.ts:1593

___

### people

▸ **people**<`T`\>(`args?`): [`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`Null` \| `GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `Null`, `ExtArgs`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleDefaultArgs`](../modules/repository_prismaClient.Prisma.md#peopledefaultargs)<`ExtArgs`\> = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | [`Subset`](../modules/repository_prismaClient.Prisma.md#subset)<`T`, [`peopleDefaultArgs`](../modules/repository_prismaClient.Prisma.md#peopledefaultargs)<`ExtArgs`\>\> |

#### Returns

[`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`Null` \| `GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `Null`, `ExtArgs`\>

#### Defined in

node_modules/.prisma/client/index.d.ts:1572

___

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `T`) => `TResult1` \| `PromiseLike`<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| `PromiseLike`<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

`Promise`<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Overrides

Prisma.PrismaPromise.then

#### Defined in

node_modules/.prisma/client/index.d.ts:1580
