[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / tasksDelegate

# Interface: tasksDelegate<ExtArgs\>

[repository/prismaClient](../modules/repository_prismaClient.md).[Prisma](../modules/repository_prismaClient.Prisma.md).tasksDelegate

## Type parameters

| Name | Type |
| :------ | :------ |
| `ExtArgs` | extends `$Extensions.Args` = `$Extensions.DefaultArgs` |

## Indexable

▪ [K: `symbol`]: { `meta`: { `name`: ``"tasks"``  } ; `types`: [`TypeMap`](../modules/repository_prismaClient.Prisma.md#typemap)<`ExtArgs`\>[``"model"``][``"tasks"``]  }

## Table of contents

### Properties

- [fields](repository_prismaClient.Prisma.tasksDelegate.md#fields)

### Methods

- [aggregate](repository_prismaClient.Prisma.tasksDelegate.md#aggregate)
- [count](repository_prismaClient.Prisma.tasksDelegate.md#count)
- [create](repository_prismaClient.Prisma.tasksDelegate.md#create)
- [createMany](repository_prismaClient.Prisma.tasksDelegate.md#createmany)
- [delete](repository_prismaClient.Prisma.tasksDelegate.md#delete)
- [deleteMany](repository_prismaClient.Prisma.tasksDelegate.md#deletemany)
- [findFirst](repository_prismaClient.Prisma.tasksDelegate.md#findfirst)
- [findFirstOrThrow](repository_prismaClient.Prisma.tasksDelegate.md#findfirstorthrow)
- [findMany](repository_prismaClient.Prisma.tasksDelegate.md#findmany)
- [findUnique](repository_prismaClient.Prisma.tasksDelegate.md#findunique)
- [findUniqueOrThrow](repository_prismaClient.Prisma.tasksDelegate.md#finduniqueorthrow)
- [groupBy](repository_prismaClient.Prisma.tasksDelegate.md#groupby)
- [update](repository_prismaClient.Prisma.tasksDelegate.md#update)
- [updateMany](repository_prismaClient.Prisma.tasksDelegate.md#updatemany)
- [upsert](repository_prismaClient.Prisma.tasksDelegate.md#upsert)

## Properties

### fields

• `Readonly` **fields**: [`tasksFieldRefs`](repository_prismaClient.Prisma.tasksFieldRefs.md)

Fields of the tasks model

#### Defined in

node_modules/.prisma/client/index.d.ts:1560

## Methods

### aggregate

▸ **aggregate**<`T`\>(`args`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`GetTasksAggregateType`](../modules/repository_prismaClient.Prisma.md#gettasksaggregatetype)<`T`\>\>

Allows you to perform aggregations operations on a Tasks.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TasksAggregateArgs`](../modules/repository_prismaClient.Prisma.md#tasksaggregateargs)<`DefaultArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`Subset`](../modules/repository_prismaClient.Prisma.md#subset)<`T`, [`TasksAggregateArgs`](../modules/repository_prismaClient.Prisma.md#tasksaggregateargs)<`DefaultArgs`\>\> | Select which aggregations you would like to apply and on what fields. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`GetTasksAggregateType`](../modules/repository_prismaClient.Prisma.md#gettasksaggregatetype)<`T`\>\>

**`Example`**

```ts
// Ordered by age ascending
// Where email contains prisma.io
// Limited to the 10 users
const aggregations = await prisma.user.aggregate({
  _avg: {
    age: true,
  },
  where: {
    email: {
      contains: "prisma.io",
    },
  },
  orderBy: {
    age: "asc",
  },
  take: 10,
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1479

___

### count

▸ **count**<`T`\>(`args?`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`T` extends `Record_2`<``"select"``, `any`\> ? `T`[``"select"``] extends ``true`` ? `number` : { [P in string \| number \| symbol]: P extends keyof TasksCountAggregateOutputType ? TasksCountAggregateOutputType[P] : never } : `number`\>

Count the number of Tasks.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksCountArgs`](../modules/repository_prismaClient.Prisma.md#taskscountargs)<`DefaultArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`Subset`](../modules/repository_prismaClient.Prisma.md#subset)<`T`, [`tasksCountArgs`](../modules/repository_prismaClient.Prisma.md#taskscountargs)<`DefaultArgs`\>\> | Arguments to filter Tasks to count. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`T` extends `Record_2`<``"select"``, `any`\> ? `T`[``"select"``] extends ``true`` ? `number` : { [P in string \| number \| symbol]: P extends keyof TasksCountAggregateOutputType ? TasksCountAggregateOutputType[P] : never } : `number`\>

**`Example`**

```ts
// Count the number of Tasks
const count = await prisma.tasks.count({
  where: {
    // ... the filter for the Tasks we want to count
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1445

___

### create

▸ **create**<`T`\>(`args`): [`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Create a Tasks.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksCreateArgs`](../modules/repository_prismaClient.Prisma.md#taskscreateargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksCreateArgs`](../modules/repository_prismaClient.Prisma.md#taskscreateargs)<`ExtArgs`\>\> | Arguments to create a Tasks. |

#### Returns

[`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Create one Tasks
const Tasks = await prisma.tasks.create({
  data: {
    // ... data to create a Tasks
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1319

___

### createMany

▸ **createMany**<`T`\>(`args?`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

Create many Tasks.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksCreateManyArgs`](../modules/repository_prismaClient.Prisma.md#taskscreatemanyargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksCreateManyArgs`](../modules/repository_prismaClient.Prisma.md#taskscreatemanyargs)<`ExtArgs`\>\> | Arguments to create many Tasks. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

**`Example`**

```ts
// Create many Tasks
    const tasks = await prisma.tasks.createMany({
      data: {
        // ... provide data here
      }
    })
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1335

___

### delete

▸ **delete**<`T`\>(`args`): [`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Delete a Tasks.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksDeleteArgs`](../modules/repository_prismaClient.Prisma.md#tasksdeleteargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksDeleteArgs`](../modules/repository_prismaClient.Prisma.md#tasksdeleteargs)<`ExtArgs`\>\> | Arguments to delete one Tasks. |

#### Returns

[`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Delete one Tasks
const Tasks = await prisma.tasks.delete({
  where: {
    // ... filter to delete one Tasks
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1351

___

### deleteMany

▸ **deleteMany**<`T`\>(`args?`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

Delete zero or more Tasks.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksDeleteManyArgs`](../modules/repository_prismaClient.Prisma.md#tasksdeletemanyargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksDeleteManyArgs`](../modules/repository_prismaClient.Prisma.md#tasksdeletemanyargs)<`ExtArgs`\>\> | Arguments to filter Tasks to delete. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

**`Example`**

```ts
// Delete a few Tasks
const { count } = await prisma.tasks.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1386

___

### findFirst

▸ **findFirst**<`T`\>(`args?`): [`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<``null`` \| `GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, ``null``, `ExtArgs`\>

Find the first Tasks that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksFindFirstArgs`](../modules/repository_prismaClient.Prisma.md#tasksfindfirstargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksFindFirstArgs`](../modules/repository_prismaClient.Prisma.md#tasksfindfirstargs)<`ExtArgs`\>\> | Arguments to find a Tasks |

#### Returns

[`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<``null`` \| `GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, ``null``, `ExtArgs`\>

**`Example`**

```ts
// Get one Tasks
const tasks = await prisma.tasks.findFirst({
  where: {
    // ... provide filter here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1265

___

### findFirstOrThrow

▸ **findFirstOrThrow**<`T`\>(`args?`): [`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Find the first Tasks that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksFindFirstOrThrowArgs`](../modules/repository_prismaClient.Prisma.md#tasksfindfirstorthrowargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksFindFirstOrThrowArgs`](../modules/repository_prismaClient.Prisma.md#tasksfindfirstorthrowargs)<`ExtArgs`\>\> | Arguments to find a Tasks |

#### Returns

[`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Get one Tasks
const tasks = await prisma.tasks.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1283

___

### findMany

▸ **findMany**<`T`\>(`args?`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>[]\>

Find zero or more Tasks that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksFindManyArgs`](../modules/repository_prismaClient.Prisma.md#tasksfindmanyargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksFindManyArgs`](../modules/repository_prismaClient.Prisma.md#tasksfindmanyargs)<`ExtArgs`\>\> | Arguments to filter and select certain fields only. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>[]\>

**`Example`**

```ts
// Get all Tasks
const tasks = await prisma.tasks.findMany()

// Get first 10 Tasks
const tasks = await prisma.tasks.findMany({ take: 10 })

// Only select the `task_id`
const tasksWithTask_idOnly = await prisma.tasks.findMany({ select: { task_id: true } })
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1303

___

### findUnique

▸ **findUnique**<`T`\>(`args`): [`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<``null`` \| `GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, ``null``, `ExtArgs`\>

Find zero or one Tasks that matches the filter.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksFindUniqueArgs`](../modules/repository_prismaClient.Prisma.md#tasksfinduniqueargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksFindUniqueArgs`](../modules/repository_prismaClient.Prisma.md#tasksfinduniqueargs)<`ExtArgs`\>\> | Arguments to find a Tasks |

#### Returns

[`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<``null`` \| `GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, ``null``, `ExtArgs`\>

**`Example`**

```ts
// Get one Tasks
const tasks = await prisma.tasks.findUnique({
  where: {
    // ... provide filter here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1232

___

### findUniqueOrThrow

▸ **findUniqueOrThrow**<`T`\>(`args?`): [`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Find one Tasks that matches the filter or throw an error  with `error.code='P2025'` 
    if no matches were found.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksFindUniqueOrThrowArgs`](../modules/repository_prismaClient.Prisma.md#tasksfinduniqueorthrowargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksFindUniqueOrThrowArgs`](../modules/repository_prismaClient.Prisma.md#tasksfinduniqueorthrowargs)<`ExtArgs`\>\> | Arguments to find a Tasks |

#### Returns

[`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Get one Tasks
const tasks = await prisma.tasks.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1248

___

### groupBy

▸ **groupBy**<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): {} extends `InputErrors` ? [`GetTasksGroupByPayload`](../modules/repository_prismaClient.Prisma.md#gettasksgroupbypayload)<`T`\> : [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`InputErrors`\>

Group by Tasks.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksGroupByArgs`](../modules/repository_prismaClient.Prisma.md#tasksgroupbyargs)<`DefaultArgs`\> |
| `HasSelectOrTake` | extends ``0`` \| ``1`` |
| `OrderByArg` | extends { `orderBy`: `undefined` \| [`tasksOrderByWithAggregationInput`](../modules/repository_prismaClient.Prisma.md#tasksorderbywithaggregationinput) \| [`tasksOrderByWithAggregationInput`](../modules/repository_prismaClient.Prisma.md#tasksorderbywithaggregationinput)[]  } \| { `orderBy?`: [`tasksOrderByWithAggregationInput`](../modules/repository_prismaClient.Prisma.md#tasksorderbywithaggregationinput) \| [`tasksOrderByWithAggregationInput`](../modules/repository_prismaClient.Prisma.md#tasksorderbywithaggregationinput)[]  } |
| `OrderFields` | extends ``"person_id"`` \| ``"name"`` \| ``"task_id"`` \| ``"description"`` \| ``"created_at"`` |
| `ByFields` | extends [`TasksScalarFieldEnum`](../modules/repository_prismaClient.Prisma.md#tasksscalarfieldenum-1) |
| `ByValid` | extends ``0`` \| ``1`` |
| `HavingFields` | extends `string` \| `number` \| `symbol` |
| `HavingValid` | `HavingValid` |
| `ByEmpty` | extends ``0`` \| ``1`` |
| `InputErrors` | `InputErrors` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | { [key in string \| number \| symbol]: key extends keyof tasksGroupByArgs<DefaultArgs\> ? T[key] : never } & `OrderByArg` & `InputErrors` | Group by arguments. |

#### Returns

{} extends `InputErrors` ? [`GetTasksGroupByPayload`](../modules/repository_prismaClient.Prisma.md#gettasksgroupbypayload)<`T`\> : [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`InputErrors`\>

**`Example`**

```ts
// Group by city, order by createdAt, get count
const result = await prisma.user.groupBy({
  by: ['city', 'createdAt'],
  orderBy: {
    createdAt: true
  },
  _count: {
    _all: true
  },
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1499

___

### update

▸ **update**<`T`\>(`args`): [`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Update one Tasks.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksUpdateArgs`](../modules/repository_prismaClient.Prisma.md#tasksupdateargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksUpdateArgs`](../modules/repository_prismaClient.Prisma.md#tasksupdateargs)<`ExtArgs`\>\> | Arguments to update one Tasks. |

#### Returns

[`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Update one Tasks
const tasks = await prisma.tasks.update({
  where: {
    // ... provide filter here
  },
  data: {
    // ... provide data here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1370

___

### updateMany

▸ **updateMany**<`T`\>(`args`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

Update zero or more Tasks.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksUpdateManyArgs`](../modules/repository_prismaClient.Prisma.md#tasksupdatemanyargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksUpdateManyArgs`](../modules/repository_prismaClient.Prisma.md#tasksupdatemanyargs)<`ExtArgs`\>\> | Arguments to update one or more rows. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

**`Example`**

```ts
// Update many Tasks
const tasks = await prisma.tasks.updateMany({
  where: {
    // ... provide filter here
  },
  data: {
    // ... provide data here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1407

___

### upsert

▸ **upsert**<`T`\>(`args`): [`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Create or update one Tasks.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`tasksUpsertArgs`](../modules/repository_prismaClient.Prisma.md#tasksupsertargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`tasksUpsertArgs`](../modules/repository_prismaClient.Prisma.md#tasksupsertargs)<`ExtArgs`\>\> | Arguments to update or create a Tasks. |

#### Returns

[`Prisma__tasksClient`](repository_prismaClient.Prisma.Prisma__tasksClient.md)<`GetFindResult`<[`$tasksPayload`](../modules/repository_prismaClient.Prisma.md#$taskspayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Update or create a Tasks
const tasks = await prisma.tasks.upsert({
  create: {
    // ... data to create a Tasks
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the Tasks we want to update
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:1428
