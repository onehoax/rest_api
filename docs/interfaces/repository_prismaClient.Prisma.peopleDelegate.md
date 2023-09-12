[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / peopleDelegate

# Interface: peopleDelegate<ExtArgs\>

[repository/prismaClient](../modules/repository_prismaClient.md).[Prisma](../modules/repository_prismaClient.Prisma.md).peopleDelegate

## Type parameters

| Name | Type |
| :------ | :------ |
| `ExtArgs` | extends `$Extensions.Args` = `$Extensions.DefaultArgs` |

## Indexable

▪ [K: `symbol`]: { `meta`: { `name`: ``"people"``  } ; `types`: [`TypeMap`](../modules/repository_prismaClient.Prisma.md#typemap)<`ExtArgs`\>[``"model"``][``"people"``]  }

## Table of contents

### Properties

- [fields](repository_prismaClient.Prisma.peopleDelegate.md#fields)

### Methods

- [aggregate](repository_prismaClient.Prisma.peopleDelegate.md#aggregate)
- [count](repository_prismaClient.Prisma.peopleDelegate.md#count)
- [create](repository_prismaClient.Prisma.peopleDelegate.md#create)
- [createMany](repository_prismaClient.Prisma.peopleDelegate.md#createmany)
- [delete](repository_prismaClient.Prisma.peopleDelegate.md#delete)
- [deleteMany](repository_prismaClient.Prisma.peopleDelegate.md#deletemany)
- [findFirst](repository_prismaClient.Prisma.peopleDelegate.md#findfirst)
- [findFirstOrThrow](repository_prismaClient.Prisma.peopleDelegate.md#findfirstorthrow)
- [findMany](repository_prismaClient.Prisma.peopleDelegate.md#findmany)
- [findUnique](repository_prismaClient.Prisma.peopleDelegate.md#findunique)
- [findUniqueOrThrow](repository_prismaClient.Prisma.peopleDelegate.md#finduniqueorthrow)
- [groupBy](repository_prismaClient.Prisma.peopleDelegate.md#groupby)
- [update](repository_prismaClient.Prisma.peopleDelegate.md#update)
- [updateMany](repository_prismaClient.Prisma.peopleDelegate.md#updatemany)
- [upsert](repository_prismaClient.Prisma.peopleDelegate.md#upsert)

## Properties

### fields

• `Readonly` **fields**: [`peopleFieldRefs`](repository_prismaClient.Prisma.peopleFieldRefs.md)

Fields of the people model

#### Defined in

node_modules/.prisma/client/index.d.ts:2504

## Methods

### aggregate

▸ **aggregate**<`T`\>(`args`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`GetPeopleAggregateType`](../modules/repository_prismaClient.Prisma.md#getpeopleaggregatetype)<`T`\>\>

Allows you to perform aggregations operations on a People.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PeopleAggregateArgs`](../modules/repository_prismaClient.Prisma.md#peopleaggregateargs)<`DefaultArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`Subset`](../modules/repository_prismaClient.Prisma.md#subset)<`T`, [`PeopleAggregateArgs`](../modules/repository_prismaClient.Prisma.md#peopleaggregateargs)<`DefaultArgs`\>\> | Select which aggregations you would like to apply and on what fields. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`GetPeopleAggregateType`](../modules/repository_prismaClient.Prisma.md#getpeopleaggregatetype)<`T`\>\>

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

node_modules/.prisma/client/index.d.ts:2423

___

### count

▸ **count**<`T`\>(`args?`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`T` extends `Record_2`<``"select"``, `any`\> ? `T`[``"select"``] extends ``true`` ? `number` : { [P in string \| number \| symbol]: P extends keyof PeopleCountAggregateOutputType ? PeopleCountAggregateOutputType[P] : never } : `number`\>

Count the number of People.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleCountArgs`](../modules/repository_prismaClient.Prisma.md#peoplecountargs)<`DefaultArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`Subset`](../modules/repository_prismaClient.Prisma.md#subset)<`T`, [`peopleCountArgs`](../modules/repository_prismaClient.Prisma.md#peoplecountargs)<`DefaultArgs`\>\> | Arguments to filter People to count. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`T` extends `Record_2`<``"select"``, `any`\> ? `T`[``"select"``] extends ``true`` ? `number` : { [P in string \| number \| symbol]: P extends keyof PeopleCountAggregateOutputType ? PeopleCountAggregateOutputType[P] : never } : `number`\>

**`Example`**

```ts
// Count the number of People
const count = await prisma.people.count({
  where: {
    // ... the filter for the People we want to count
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2389

___

### create

▸ **create**<`T`\>(`args`): [`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Create a People.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleCreateArgs`](../modules/repository_prismaClient.Prisma.md#peoplecreateargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleCreateArgs`](../modules/repository_prismaClient.Prisma.md#peoplecreateargs)<`ExtArgs`\>\> | Arguments to create a People. |

#### Returns

[`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Create one People
const People = await prisma.people.create({
  data: {
    // ... data to create a People
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2263

___

### createMany

▸ **createMany**<`T`\>(`args?`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

Create many People.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleCreateManyArgs`](../modules/repository_prismaClient.Prisma.md#peoplecreatemanyargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleCreateManyArgs`](../modules/repository_prismaClient.Prisma.md#peoplecreatemanyargs)<`ExtArgs`\>\> | Arguments to create many People. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

**`Example`**

```ts
// Create many People
    const people = await prisma.people.createMany({
      data: {
        // ... provide data here
      }
    })
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2279

___

### delete

▸ **delete**<`T`\>(`args`): [`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Delete a People.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleDeleteArgs`](../modules/repository_prismaClient.Prisma.md#peopledeleteargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleDeleteArgs`](../modules/repository_prismaClient.Prisma.md#peopledeleteargs)<`ExtArgs`\>\> | Arguments to delete one People. |

#### Returns

[`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Delete one People
const People = await prisma.people.delete({
  where: {
    // ... filter to delete one People
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2295

___

### deleteMany

▸ **deleteMany**<`T`\>(`args?`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

Delete zero or more People.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleDeleteManyArgs`](../modules/repository_prismaClient.Prisma.md#peopledeletemanyargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleDeleteManyArgs`](../modules/repository_prismaClient.Prisma.md#peopledeletemanyargs)<`ExtArgs`\>\> | Arguments to filter People to delete. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

**`Example`**

```ts
// Delete a few People
const { count } = await prisma.people.deleteMany({
  where: {
    // ... provide filter here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2330

___

### findFirst

▸ **findFirst**<`T`\>(`args?`): [`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<``null`` \| `GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, ``null``, `ExtArgs`\>

Find the first People that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleFindFirstArgs`](../modules/repository_prismaClient.Prisma.md#peoplefindfirstargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleFindFirstArgs`](../modules/repository_prismaClient.Prisma.md#peoplefindfirstargs)<`ExtArgs`\>\> | Arguments to find a People |

#### Returns

[`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<``null`` \| `GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, ``null``, `ExtArgs`\>

**`Example`**

```ts
// Get one People
const people = await prisma.people.findFirst({
  where: {
    // ... provide filter here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2209

___

### findFirstOrThrow

▸ **findFirstOrThrow**<`T`\>(`args?`): [`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Find the first People that matches the filter or
throw `PrismaKnownClientError` with `P2025` code if no matches were found.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleFindFirstOrThrowArgs`](../modules/repository_prismaClient.Prisma.md#peoplefindfirstorthrowargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleFindFirstOrThrowArgs`](../modules/repository_prismaClient.Prisma.md#peoplefindfirstorthrowargs)<`ExtArgs`\>\> | Arguments to find a People |

#### Returns

[`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Get one People
const people = await prisma.people.findFirstOrThrow({
  where: {
    // ... provide filter here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2227

___

### findMany

▸ **findMany**<`T`\>(`args?`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>[]\>

Find zero or more People that matches the filter.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleFindManyArgs`](../modules/repository_prismaClient.Prisma.md#peoplefindmanyargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleFindManyArgs`](../modules/repository_prismaClient.Prisma.md#peoplefindmanyargs)<`ExtArgs`\>\> | Arguments to filter and select certain fields only. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>[]\>

**`Example`**

```ts
// Get all People
const people = await prisma.people.findMany()

// Get first 10 People
const people = await prisma.people.findMany({ take: 10 })

// Only select the `person_id`
const peopleWithPerson_idOnly = await prisma.people.findMany({ select: { person_id: true } })
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2247

___

### findUnique

▸ **findUnique**<`T`\>(`args`): [`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<``null`` \| `GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, ``null``, `ExtArgs`\>

Find zero or one People that matches the filter.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleFindUniqueArgs`](../modules/repository_prismaClient.Prisma.md#peoplefinduniqueargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleFindUniqueArgs`](../modules/repository_prismaClient.Prisma.md#peoplefinduniqueargs)<`ExtArgs`\>\> | Arguments to find a People |

#### Returns

[`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<``null`` \| `GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, ``null``, `ExtArgs`\>

**`Example`**

```ts
// Get one People
const people = await prisma.people.findUnique({
  where: {
    // ... provide filter here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2176

___

### findUniqueOrThrow

▸ **findUniqueOrThrow**<`T`\>(`args?`): [`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Find one People that matches the filter or throw an error  with `error.code='P2025'` 
    if no matches were found.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleFindUniqueOrThrowArgs`](../modules/repository_prismaClient.Prisma.md#peoplefinduniqueorthrowargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args?` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleFindUniqueOrThrowArgs`](../modules/repository_prismaClient.Prisma.md#peoplefinduniqueorthrowargs)<`ExtArgs`\>\> | Arguments to find a People |

#### Returns

[`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Get one People
const people = await prisma.people.findUniqueOrThrow({
  where: {
    // ... provide filter here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2192

___

### groupBy

▸ **groupBy**<`T`, `HasSelectOrTake`, `OrderByArg`, `OrderFields`, `ByFields`, `ByValid`, `HavingFields`, `HavingValid`, `ByEmpty`, `InputErrors`\>(`args`): {} extends `InputErrors` ? [`GetPeopleGroupByPayload`](../modules/repository_prismaClient.Prisma.md#getpeoplegroupbypayload)<`T`\> : [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`InputErrors`\>

Group by People.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleGroupByArgs`](../modules/repository_prismaClient.Prisma.md#peoplegroupbyargs)<`DefaultArgs`\> |
| `HasSelectOrTake` | extends ``0`` \| ``1`` |
| `OrderByArg` | extends { `orderBy`: `undefined` \| [`peopleOrderByWithAggregationInput`](../modules/repository_prismaClient.Prisma.md#peopleorderbywithaggregationinput) \| [`peopleOrderByWithAggregationInput`](../modules/repository_prismaClient.Prisma.md#peopleorderbywithaggregationinput)[]  } \| { `orderBy?`: [`peopleOrderByWithAggregationInput`](../modules/repository_prismaClient.Prisma.md#peopleorderbywithaggregationinput) \| [`peopleOrderByWithAggregationInput`](../modules/repository_prismaClient.Prisma.md#peopleorderbywithaggregationinput)[]  } |
| `OrderFields` | extends ``"person_id"`` \| ``"name"`` \| ``"email"`` \| ``"phone"`` |
| `ByFields` | extends [`PeopleScalarFieldEnum`](../modules/repository_prismaClient.Prisma.md#peoplescalarfieldenum-1) |
| `ByValid` | extends ``0`` \| ``1`` |
| `HavingFields` | extends `string` \| `number` \| `symbol` |
| `HavingValid` | `HavingValid` |
| `ByEmpty` | extends ``0`` \| ``1`` |
| `InputErrors` | `InputErrors` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | { [key in string \| number \| symbol]: key extends keyof peopleGroupByArgs<DefaultArgs\> ? T[key] : never } & `OrderByArg` & `InputErrors` | Group by arguments. |

#### Returns

{} extends `InputErrors` ? [`GetPeopleGroupByPayload`](../modules/repository_prismaClient.Prisma.md#getpeoplegroupbypayload)<`T`\> : [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<`InputErrors`\>

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

node_modules/.prisma/client/index.d.ts:2443

___

### update

▸ **update**<`T`\>(`args`): [`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Update one People.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleUpdateArgs`](../modules/repository_prismaClient.Prisma.md#peopleupdateargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleUpdateArgs`](../modules/repository_prismaClient.Prisma.md#peopleupdateargs)<`ExtArgs`\>\> | Arguments to update one People. |

#### Returns

[`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Update one People
const people = await prisma.people.update({
  where: {
    // ... provide filter here
  },
  data: {
    // ... provide data here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2314

___

### updateMany

▸ **updateMany**<`T`\>(`args`): [`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

Update zero or more People.
Note, that providing `undefined` is treated as the value not being there.
Read more here: https://pris.ly/d/null-undefined

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleUpdateManyArgs`](../modules/repository_prismaClient.Prisma.md#peopleupdatemanyargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleUpdateManyArgs`](../modules/repository_prismaClient.Prisma.md#peopleupdatemanyargs)<`ExtArgs`\>\> | Arguments to update one or more rows. |

#### Returns

[`PrismaPromise`](../modules/repository_prismaClient.Prisma.md#prismapromise)<[`BatchPayload`](../modules/repository_prismaClient.Prisma.md#batchpayload)\>

**`Example`**

```ts
// Update many People
const people = await prisma.people.updateMany({
  where: {
    // ... provide filter here
  },
  data: {
    // ... provide data here
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2351

___

### upsert

▸ **upsert**<`T`\>(`args`): [`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

Create or update one People.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`peopleUpsertArgs`](../modules/repository_prismaClient.Prisma.md#peopleupsertargs)<`ExtArgs`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `args` | [`SelectSubset`](../modules/repository_prismaClient.Prisma.md#selectsubset)<`T`, [`peopleUpsertArgs`](../modules/repository_prismaClient.Prisma.md#peopleupsertargs)<`ExtArgs`\>\> | Arguments to update or create a People. |

#### Returns

[`Prisma__peopleClient`](repository_prismaClient.Prisma.Prisma__peopleClient.md)<`GetFindResult`<[`$peoplePayload`](../modules/repository_prismaClient.Prisma.md#$peoplepayload)<`ExtArgs`\>, `T`\>, `never`, `ExtArgs`\>

**`Example`**

```ts
// Update or create a People
const people = await prisma.people.upsert({
  create: {
    // ... data to create a People
  },
  update: {
    // ... in case it already exists, update
  },
  where: {
    // ... the filter for the People we want to update
  }
})
```

#### Defined in

node_modules/.prisma/client/index.d.ts:2372
