[@onehoax/rest-api](../README.md) / [model/task](../modules/model_task.md) / Task

# Class: Task

[model/task](../modules/model_task.md).Task

## Hierarchy

- `Model`

  ↳ **`Task`**

## Table of contents

### Constructors

- [constructor](model_task.Task.md#constructor)

### Properties

- [\_attributes](model_task.Task.md#_attributes)
- [\_creationAttributes](model_task.Task.md#_creationattributes)
- [\_model](model_task.Task.md#_model)
- [createdAt](model_task.Task.md#createdat)
- [createdBy](model_task.Task.md#createdby)
- [createdDate](model_task.Task.md#createddate)
- [dataValues](model_task.Task.md#datavalues)
- [deletedAt](model_task.Task.md#deletedat)
- [description](model_task.Task.md#description)
- [id](model_task.Task.md#id)
- [isNewRecord](model_task.Task.md#isnewrecord)
- [name](model_task.Task.md#name)
- [sequelize](model_task.Task.md#sequelize)
- [updatedAt](model_task.Task.md#updatedat)
- [updatedBy](model_task.Task.md#updatedby)
- [updatedDate](model_task.Task.md#updateddate)
- [version](model_task.Task.md#version)
- [associations](model_task.Task.md#associations)
- [isInitialized](model_task.Task.md#isinitialized)
- [options](model_task.Task.md#options)
- [primaryKeyAttribute](model_task.Task.md#primarykeyattribute)
- [primaryKeyAttributes](model_task.Task.md#primarykeyattributes)
- [rawAttributes](model_task.Task.md#rawattributes)
- [sequelize](model_task.Task.md#sequelize-1)
- [tableName](model_task.Task.md#tablename)

### Methods

- [$add](model_task.Task.md#$add)
- [$count](model_task.Task.md#$count)
- [$create](model_task.Task.md#$create)
- [$get](model_task.Task.md#$get)
- [$has](model_task.Task.md#$has)
- [$remove](model_task.Task.md#$remove)
- [$set](model_task.Task.md#$set)
- [addHook](model_task.Task.md#addhook)
- [changed](model_task.Task.md#changed)
- [decrement](model_task.Task.md#decrement)
- [destroy](model_task.Task.md#destroy)
- [equals](model_task.Task.md#equals)
- [equalsOneOf](model_task.Task.md#equalsoneof)
- [get](model_task.Task.md#get)
- [getDataValue](model_task.Task.md#getdatavalue)
- [hasHook](model_task.Task.md#hashook)
- [hasHooks](model_task.Task.md#hashooks)
- [increment](model_task.Task.md#increment)
- [isSoftDeleted](model_task.Task.md#issoftdeleted)
- [previous](model_task.Task.md#previous)
- [reload](model_task.Task.md#reload)
- [removeHook](model_task.Task.md#removehook)
- [restore](model_task.Task.md#restore)
- [save](model_task.Task.md#save)
- [set](model_task.Task.md#set)
- [setAttributes](model_task.Task.md#setattributes)
- [setDataValue](model_task.Task.md#setdatavalue)
- [toJSON](model_task.Task.md#tojson)
- [update](model_task.Task.md#update)
- [validate](model_task.Task.md#validate)
- [where](model_task.Task.md#where)
- [addHook](model_task.Task.md#addhook-1)
- [addScope](model_task.Task.md#addscope)
- [afterBulkCreate](model_task.Task.md#afterbulkcreate)
- [afterBulkDestroy](model_task.Task.md#afterbulkdestroy)
- [afterBulkSync](model_task.Task.md#afterbulksync)
- [afterBulkUpdate](model_task.Task.md#afterbulkupdate)
- [afterCreate](model_task.Task.md#aftercreate)
- [afterDestroy](model_task.Task.md#afterdestroy)
- [afterFind](model_task.Task.md#afterfind)
- [afterSave](model_task.Task.md#aftersave)
- [afterSync](model_task.Task.md#aftersync)
- [afterUpdate](model_task.Task.md#afterupdate)
- [afterValidate](model_task.Task.md#aftervalidate)
- [aggregate](model_task.Task.md#aggregate)
- [beforeBulkCreate](model_task.Task.md#beforebulkcreate)
- [beforeBulkDestroy](model_task.Task.md#beforebulkdestroy)
- [beforeBulkSync](model_task.Task.md#beforebulksync)
- [beforeBulkUpdate](model_task.Task.md#beforebulkupdate)
- [beforeCount](model_task.Task.md#beforecount)
- [beforeCreate](model_task.Task.md#beforecreate)
- [beforeDestroy](model_task.Task.md#beforedestroy)
- [beforeFind](model_task.Task.md#beforefind)
- [beforeFindAfterExpandIncludeAll](model_task.Task.md#beforefindafterexpandincludeall)
- [beforeFindAfterOptions](model_task.Task.md#beforefindafteroptions)
- [beforeSave](model_task.Task.md#beforesave)
- [beforeSync](model_task.Task.md#beforesync)
- [beforeUpdate](model_task.Task.md#beforeupdate)
- [beforeValidate](model_task.Task.md#beforevalidate)
- [belongsTo](model_task.Task.md#belongsto)
- [belongsToMany](model_task.Task.md#belongstomany)
- [build](model_task.Task.md#build)
- [bulkBuild](model_task.Task.md#bulkbuild)
- [bulkCreate](model_task.Task.md#bulkcreate)
- [count](model_task.Task.md#count)
- [create](model_task.Task.md#create)
- [decrement](model_task.Task.md#decrement-1)
- [describe](model_task.Task.md#describe)
- [destroy](model_task.Task.md#destroy-1)
- [drop](model_task.Task.md#drop)
- [findAll](model_task.Task.md#findall)
- [findAndCountAll](model_task.Task.md#findandcountall)
- [findByPk](model_task.Task.md#findbypk)
- [findCreateFind](model_task.Task.md#findcreatefind)
- [findOne](model_task.Task.md#findone)
- [findOrBuild](model_task.Task.md#findorbuild)
- [findOrCreate](model_task.Task.md#findorcreate)
- [getAttributes](model_task.Task.md#getattributes)
- [getTableName](model_task.Task.md#gettablename)
- [hasHook](model_task.Task.md#hashook-1)
- [hasHooks](model_task.Task.md#hashooks-1)
- [hasMany](model_task.Task.md#hasmany)
- [hasOne](model_task.Task.md#hasone)
- [increment](model_task.Task.md#increment-1)
- [init](model_task.Task.md#init)
- [initialize](model_task.Task.md#initialize)
- [max](model_task.Task.md#max)
- [min](model_task.Task.md#min)
- [removeAttribute](model_task.Task.md#removeattribute)
- [removeHook](model_task.Task.md#removehook-1)
- [restore](model_task.Task.md#restore-1)
- [schema](model_task.Task.md#schema)
- [scope](model_task.Task.md#scope)
- [sum](model_task.Task.md#sum)
- [sync](model_task.Task.md#sync)
- [truncate](model_task.Task.md#truncate)
- [unscoped](model_task.Task.md#unscoped)
- [update](model_task.Task.md#update-1)
- [upsert](model_task.Task.md#upsert)

## Constructors

### constructor

• **new Task**(`values?`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `values?` | `Optional`<`any`, `string`\> |
| `options?` | `BuildOptions` |

#### Inherited from

Model.constructor

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:21

## Properties

### \_attributes

• **\_attributes**: `any`

A dummy variable that doesn't exist on the real object. This exists so
Typescript can infer the type of the attributes in static functions. Don't
try to access this!

Before using these, I'd tried typing out the functions without them, but
Typescript fails to infer `TAttributes` in signatures like the below.

```ts
public static findOne<M extends Model<TAttributes>, TAttributes>(
  this: { new(): M },
  options: NonNullFindOptions<TAttributes>
): Promise<M>;
```

**`Deprecated`**

This property will become a Symbol in v7 to prevent collisions.
Use Attributes<Model> instead of this property to be forward-compatible.

#### Inherited from

Model.\_attributes

#### Defined in

node_modules/sequelize/types/model.d.ts:1884

___

### \_creationAttributes

• **\_creationAttributes**: `any`

A similar dummy variable that doesn't exist on the real object. Do not
try to access this in real code.

**`Deprecated`**

This property will become a Symbol in v7 to prevent collisions.
Use CreationAttributes<Model> instead of this property to be forward-compatible.

#### Inherited from

Model.\_creationAttributes

#### Defined in

node_modules/sequelize/types/model.d.ts:1898

___

### \_model

• **\_model**: `Model`<`any`, `any`\>

A dummy variable that doesn't exist on the real object. This exists so
Typescript can infer the type of the attributes in static functions. Don't
try to access this!

#### Inherited from

Model.\_model

#### Defined in

node_modules/sequelize/types/hooks.d.ts:99

___

### createdAt

• `Optional` **createdAt**: `any`

#### Inherited from

Model.createdAt

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:15

___

### createdBy

• **createdBy**: `string`

#### Defined in

[src/model/task.ts:18](https://github.com/onehoax/rest_api/blob/2c7e426/src/model/task.ts#L18)

___

### createdDate

• **createdDate**: `string`

#### Defined in

[src/model/task.ts:12](https://github.com/onehoax/rest_api/blob/2c7e426/src/model/task.ts#L12)

___

### dataValues

• **dataValues**: `any`

Object that contains underlying model data

#### Inherited from

Model.dataValues

#### Defined in

node_modules/sequelize/types/model.d.ts:1889

___

### deletedAt

• `Optional` **deletedAt**: `any`

#### Inherited from

Model.deletedAt

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:17

___

### description

• **description**: `string`

#### Defined in

[src/model/task.ts:9](https://github.com/onehoax/rest_api/blob/2c7e426/src/model/task.ts#L9)

___

### id

• `Optional` **id**: `any`

#### Inherited from

Model.id

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:14

___

### isNewRecord

• **isNewRecord**: `boolean`

Returns true if this instance has not yet been persisted to the database

#### Inherited from

Model.isNewRecord

#### Defined in

node_modules/sequelize/types/model.d.ts:3066

___

### name

• **name**: `string`

#### Defined in

[src/model/task.ts:6](https://github.com/onehoax/rest_api/blob/2c7e426/src/model/task.ts#L6)

___

### sequelize

• **sequelize**: `Sequelize`

A reference to the sequelize instance

#### Inherited from

Model.sequelize

#### Defined in

node_modules/sequelize/types/model.d.ts:3071

___

### updatedAt

• `Optional` **updatedAt**: `any`

#### Inherited from

Model.updatedAt

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:16

___

### updatedBy

• **updatedBy**: `string`

#### Defined in

[src/model/task.ts:21](https://github.com/onehoax/rest_api/blob/2c7e426/src/model/task.ts#L21)

___

### updatedDate

• **updatedDate**: `string`

#### Defined in

[src/model/task.ts:15](https://github.com/onehoax/rest_api/blob/2c7e426/src/model/task.ts#L15)

___

### version

• `Optional` **version**: `any`

#### Inherited from

Model.version

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:18

___

### associations

▪ `Static` `Readonly` **associations**: `Object`

An object hash from alias to association object

#### Index signature

▪ [key: `string`]: `Association`

#### Inherited from

Model.associations

#### Defined in

node_modules/sequelize/types/model.d.ts:1916

___

### isInitialized

▪ `Static` **isInitialized**: `boolean`

#### Inherited from

Model.isInitialized

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:19

___

### options

▪ `Static` `Readonly` **options**: `InitOptions`<`Model`<`any`, `any`\>\>

The options that the model was initialized with

#### Inherited from

Model.options

#### Defined in

node_modules/sequelize/types/model.d.ts:1923

___

### primaryKeyAttribute

▪ `Static` `Readonly` **primaryKeyAttribute**: `string`

The name of the primary key attribute

#### Inherited from

Model.primaryKeyAttribute

#### Defined in

node_modules/sequelize/types/model.d.ts:1906

___

### primaryKeyAttributes

▪ `Static` `Readonly` **primaryKeyAttributes**: readonly `string`[]

The name of the primary key attributes

#### Inherited from

Model.primaryKeyAttributes

#### Defined in

node_modules/sequelize/types/model.d.ts:1911

___

### rawAttributes

▪ `Static` `Readonly` **rawAttributes**: `Object`

The attributes of the model.

**`Deprecated`**

use [Model.getAttributes](model_task.Task.md#getattributes) for better typings.

#### Index signature

▪ [attribute: `string`]: `ModelAttributeColumnOptions`

#### Inherited from

Model.rawAttributes

#### Defined in

node_modules/sequelize/types/model.d.ts:1931

___

### sequelize

▪ `Static` `Optional` `Readonly` **sequelize**: `Sequelize`

Reference to the sequelize instance the model was initialized with

#### Inherited from

Model.sequelize

#### Defined in

node_modules/sequelize/types/model.d.ts:1943

___

### tableName

▪ `Static` `Readonly` **tableName**: `string`

The name of the database table

#### Inherited from

Model.tableName

#### Defined in

node_modules/sequelize/types/model.d.ts:1901

## Methods

### $add

▸ **$add**<`R`\>(`propertyKey`, `instances`, `options?`): `Promise`<`unknown`\>

Adds relation between specified instances and source instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `string` |
| `instances` | `string` \| `number` \| `R` \| `string`[] \| `number`[] \| `R`[] |
| `options?` | `AssociationActionOptions` |

#### Returns

`Promise`<`unknown`\>

#### Inherited from

Model.$add

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:25

___

### $count

▸ **$count**(`propertyKey`, `options?`): `Promise`<`number`\>

Counts related instances (specified by propertyKey) of source instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `string` |
| `options?` | `AssociationCountOptions` |

#### Returns

`Promise`<`number`\>

#### Inherited from

Model.$count

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:38

___

### $create

▸ **$create**<`R`\>(`propertyKey`, `values`, `options?`): `Promise`<`R`\>

Creates instances and relate them to source instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `string` |
| `values` | `any` |
| `options?` | `AssociationCreateOptions` |

#### Returns

`Promise`<`R`\>

#### Inherited from

Model.$create

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:42

___

### $get

▸ **$get**<`K`\>(`propertyKey`, `options?`): `Promise`<`$GetType`<[`Task`](model_task.Task.md)[`K`]\>\>

Returns related instance (specified by propertyKey) of source instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Task`](model_task.Task.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `K` |
| `options?` | `AssociationGetOptions` |

#### Returns

`Promise`<`$GetType`<[`Task`](model_task.Task.md)[`K`]\>\>

#### Inherited from

Model.$get

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:34

___

### $has

▸ **$has**<`R`\>(`propertyKey`, `instances`, `options?`): `Promise`<`boolean`\>

Checks if specified instances is related to source instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `string` |
| `instances` | `string` \| `number` \| `string`[] \| `number`[] \| `R` \| `R`[] |
| `options?` | `AssociationGetOptions` |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

Model.$has

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:46

___

### $remove

▸ **$remove**<`R`\>(`propertyKey`, `instances`, `options?`): `Promise`<`any`\>

Removes specified instances from source instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | `string` |
| `instances` | `string` \| `number` \| `string`[] \| `number`[] \| `R` \| `R`[] |
| `options?` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

Model.$remove

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:50

___

### $set

▸ **$set**<`R`\>(`propertyKey`, `instances`, `options?`): `Promise`<`unknown`\>

Sets relation between specified instances and source instance
(replaces old relations)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyKey` | keyof [`Task`](model_task.Task.md) |
| `instances` | ``null`` \| `string` \| `number` \| `string`[] \| `number`[] \| `R` \| `R`[] |
| `options?` | `AssociationActionOptions` |

#### Returns

`Promise`<`unknown`\>

#### Inherited from

Model.$set

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:30

___

### addHook

▸ **addHook**<`K`\>(`hookType`, `name`, `fn`): [`Task`](model_task.Task.md)

Add a hook to the model

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SequelizeHooks`<`M`, `TModelAttributes`, `TCreationAttributes`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hookType` | `K` | - |
| `name` | `string` | Provide a name for the hook function. It can be used to remove the hook later or to order hooks based on some sort of priority system in the future. |
| `fn` | `SequelizeHooks`<`Model`<`any`, `any`\>, `any`, `any`\>[`K`] | - |

#### Returns

[`Task`](model_task.Task.md)

#### Inherited from

Model.addHook

#### Defined in

node_modules/sequelize/types/hooks.d.ts:168

▸ **addHook**<`K`\>(`hookType`, `fn`): [`Task`](model_task.Task.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SequelizeHooks`<`M`, `TModelAttributes`, `TCreationAttributes`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hookType` | `K` |
| `fn` | `SequelizeHooks`<`Model`<`any`, `any`\>, `any`, `any`\>[`K`] |

#### Returns

[`Task`](model_task.Task.md)

#### Inherited from

Model.addHook

#### Defined in

node_modules/sequelize/types/hooks.d.ts:173

___

### changed

▸ **changed**<`K`\>(`key`): `boolean`

If changed is called with a string it will return a boolean indicating whether the value of that key in
`dataValues` is different from the value in `_previousDataValues`.

If changed is called without an argument, it will return an array of keys that have changed.

If changed is called with two arguments, it will set the property to `dirty`.

If changed is called without an argument and no keys have changed, it will return `false`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Task`](model_task.Task.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`boolean`

#### Inherited from

Model.changed

#### Defined in

node_modules/sequelize/types/model.d.ts:3146

▸ **changed**<`K`\>(`key`, `dirty`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Task`](model_task.Task.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `dirty` | `boolean` |

#### Returns

`void`

#### Inherited from

Model.changed

#### Defined in

node_modules/sequelize/types/model.d.ts:3147

▸ **changed**(): ``false`` \| `string`[]

#### Returns

``false`` \| `string`[]

#### Inherited from

Model.changed

#### Defined in

node_modules/sequelize/types/model.d.ts:3148

___

### decrement

▸ **decrement**<`K`\>(`fields`, `options?`): `Promise`<[`Task`](model_task.Task.md)\>

Decrement the value of one or more columns. This is done in the database, which means it does not use
the values currently stored on the Instance. The decrement is done using a
```sql
SET column = column - X
```
query. To get the correct value after an decrement into the Instance you should do a reload.

```js
instance.decrement('number') // decrement number by 1
instance.decrement(['number', 'count'], { by: 2 }) // decrement number and count by 2
instance.decrement({ answer: 42, tries: 1}, { by: 2 }) // decrement answer by 42, and tries by 1.
                                                       // `by` is ignored, since each column has its own
                                                       // value
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | `Partial`<`any`\> \| `K` \| readonly `K`[] | If a string is provided, that column is decremented by the value of `by` given in options. If an array is provided, the same is true for each column. If and object is provided, each column is decremented by the value given |
| `options?` | `IncrementDecrementOptionsWithBy`<`any`\> | - |

#### Returns

`Promise`<[`Task`](model_task.Task.md)\>

#### Inherited from

Model.decrement

#### Defined in

node_modules/sequelize/types/model.d.ts:3252

___

### destroy

▸ **destroy**(`options?`): `Promise`<`void`\>

Destroy the row corresponding to this instance. Depending on your setting for paranoid, the row will
either be completely deleted, or have its deletedAt timestamp set to the current time.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `InstanceDestroyOptions` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Model.destroy

#### Defined in

node_modules/sequelize/types/model.d.ts:3200

___

### equals

▸ **equals**(`other`): `boolean`

Check whether all values of this and `other` Instance are the same

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Task`](model_task.Task.md) |

#### Returns

`boolean`

#### Inherited from

Model.equals

#### Defined in

node_modules/sequelize/types/model.d.ts:3260

___

### equalsOneOf

▸ **equalsOneOf**(`others`): `boolean`

Check if this is equal to one of `others` by calling equals

#### Parameters

| Name | Type |
| :------ | :------ |
| `others` | readonly [`Task`](model_task.Task.md)[] |

#### Returns

`boolean`

#### Inherited from

Model.equalsOneOf

#### Defined in

node_modules/sequelize/types/model.d.ts:3265

___

### get

▸ **get**(`options?`): `any`

If no key is given, returns all values of the instance, also invoking virtual getters.

If key is given and a field or virtual getter is present for the key it will call that getter - else it
will return the value for key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | - |
| `options.clone?` | `boolean` | - |
| `options.plain?` | `boolean` | If set to true, included instances will be returned as plain objects |

#### Returns

`any`

#### Inherited from

Model.get

#### Defined in

node_modules/sequelize/types/model.d.ts:3103

▸ **get**<`K`\>(`key`, `options?`): [`Task`](model_task.Task.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Task`](model_task.Task.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `options?` | `Object` |
| `options.clone?` | `boolean` |
| `options.plain?` | `boolean` |

#### Returns

[`Task`](model_task.Task.md)[`K`]

#### Inherited from

Model.get

#### Defined in

node_modules/sequelize/types/model.d.ts:3104

▸ **get**(`key`, `options?`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `options?` | `Object` |
| `options.clone?` | `boolean` |
| `options.plain?` | `boolean` |

#### Returns

`unknown`

#### Inherited from

Model.get

#### Defined in

node_modules/sequelize/types/model.d.ts:3105

___

### getDataValue

▸ **getDataValue**<`K`\>(`key`): `any`

Get the value of the underlying data value

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`any`

#### Inherited from

Model.getDataValue

#### Defined in

node_modules/sequelize/types/model.d.ts:3088

___

### hasHook

▸ **hasHook**<`K`\>(`hookType`): `boolean`

Check whether the mode has any hooks of this type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SequelizeHooks`<`M`, `TModelAttributes`, `TCreationAttributes`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hookType` | `K` |

#### Returns

`boolean`

#### Inherited from

Model.hasHook

#### Defined in

node_modules/sequelize/types/hooks.d.ts:186

___

### hasHooks

▸ **hasHooks**<`K`\>(`hookType`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SequelizeHooks`<`M`, `TModelAttributes`, `TCreationAttributes`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hookType` | `K` |

#### Returns

`boolean`

#### Inherited from

Model.hasHooks

#### Defined in

node_modules/sequelize/types/hooks.d.ts:187

___

### increment

▸ **increment**<`K`\>(`fields`, `options?`): `Promise`<[`Task`](model_task.Task.md)\>

Increment the value of one or more columns. This is done in the database, which means it does not use
the values currently stored on the Instance. The increment is done using a
```sql
SET column = column + X
```
query. To get the correct value after an increment into the Instance you should do a reload.

```js
instance.increment('number') // increment number by 1
instance.increment(['number', 'count'], { by: 2 }) // increment number and count by 2
instance.increment({ answer: 42, tries: 1}, { by: 2 }) // increment answer by 42, and tries by 1.
                                                       // `by` is ignored, since each column has its own
                                                       // value
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | `Partial`<`any`\> \| `K` \| readonly `K`[] | If a string is provided, that column is incremented by the value of `by` given in options. If an array is provided, the same is true for each column. If and object is provided, each column is incremented by the value given. |
| `options?` | `IncrementDecrementOptionsWithBy`<`any`\> | - |

#### Returns

`Promise`<[`Task`](model_task.Task.md)\>

#### Inherited from

Model.increment

#### Defined in

node_modules/sequelize/types/model.d.ts:3227

___

### isSoftDeleted

▸ **isSoftDeleted**(): `boolean`

Helper method to determine if a instance is "soft deleted". This is
particularly useful if the implementer renamed the deletedAt attribute to
something different. This method requires paranoid to be enabled.

Throws an error if paranoid is not enabled.

#### Returns

`boolean`

#### Inherited from

Model.isSoftDeleted

#### Defined in

node_modules/sequelize/types/model.d.ts:3281

___

### previous

▸ **previous**(): `Partial`<`any`\>

Returns the previous value for key from `_previousDataValues`.

#### Returns

`Partial`<`any`\>

#### Inherited from

Model.previous

#### Defined in

node_modules/sequelize/types/model.d.ts:3153

▸ **previous**<`K`\>(`key`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`any`

#### Inherited from

Model.previous

#### Defined in

node_modules/sequelize/types/model.d.ts:3154

___

### reload

▸ **reload**(`options?`): `Promise`<[`Task`](model_task.Task.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `FindOptions`<`any`\> |

#### Returns

`Promise`<[`Task`](model_task.Task.md)\>

#### Inherited from

Model.reload

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:51

___

### removeHook

▸ **removeHook**<`K`\>(`hookType`, `name`): [`Task`](model_task.Task.md)

Remove hook from the model

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `SequelizeHooks`<`M`, `TModelAttributes`, `TCreationAttributes`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `hookType` | `K` |
| `name` | `string` |

#### Returns

[`Task`](model_task.Task.md)

#### Inherited from

Model.removeHook

#### Defined in

node_modules/sequelize/types/hooks.d.ts:178

___

### restore

▸ **restore**(`options?`): `Promise`<`void`\>

Restore the row corresponding to this instance. Only available for paranoid models.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `InstanceRestoreOptions` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Model.restore

#### Defined in

node_modules/sequelize/types/model.d.ts:3205

___

### save

▸ **save**(`options?`): `Promise`<[`Task`](model_task.Task.md)\>

Validates this instance, and if the validation passes, persists it to the database.

Returns a Promise that resolves to the saved instance (or rejects with a `Sequelize.ValidationError`, which will have a property for each of the fields for which the validation failed, with the error message for that field).

This method is optimized to perform an UPDATE only into the fields that changed. If nothing has changed, no SQL query will be performed.

This method is not aware of eager loaded associations. In other words, if some other model instance (child) was eager loaded with this instance (parent), and you change something in the child, calling `save()` will simply ignore the change that happened on the child.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `SaveOptions`<`any`\> |

#### Returns

`Promise`<[`Task`](model_task.Task.md)\>

#### Inherited from

Model.save

#### Defined in

node_modules/sequelize/types/model.d.ts:3165

___

### set

▸ **set**<`K`\>(`key`, `value`, `options?`): [`Task`](model_task.Task.md)

Set is used to update values on the instance (the sequelize representation of the instance that is,
remember that nothing will be persisted before you actually call `save`). In its most basic form `set`
will update a value stored in the underlying `dataValues` object. However, if a custom setter function
is defined for the key, that function will be called instead. To bypass the setter, you can pass `raw:
true` in the options object.

If set is called with an object, it will loop over the object, and call set recursively for each key,
value pair. If you set raw to true, the underlying dataValues will either be set directly to the object
passed, or used to extend dataValues, if dataValues already contain values.

When set is called, the previous value of the field is stored and sets a changed flag(see `changed`).

Set can also be used to build instances for associations, if you have values for those.
When using set with associations you need to make sure the property key matches the alias of the
association while also making sure that the proper include options have been set (from .build() or
.findOne())

If called with a dot.seperated key on a JSON/JSONB attribute it will set the value nested and flag the
entire object as changed.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `any` |
| `options?` | `SetOptions` |

#### Returns

[`Task`](model_task.Task.md)

#### Inherited from

Model.set

#### Defined in

node_modules/sequelize/types/model.d.ts:3131

▸ **set**(`keys`, `options?`): [`Task`](model_task.Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Partial`<`any`\> |
| `options?` | `SetOptions` |

#### Returns

[`Task`](model_task.Task.md)

#### Inherited from

Model.set

#### Defined in

node_modules/sequelize/types/model.d.ts:3132

___

### setAttributes

▸ **setAttributes**<`K`\>(`key`, `value`, `options?`): [`Task`](model_task.Task.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `any` |
| `options?` | `SetOptions` |

#### Returns

[`Task`](model_task.Task.md)

#### Inherited from

Model.setAttributes

#### Defined in

node_modules/sequelize/types/model.d.ts:3133

▸ **setAttributes**(`keys`, `options?`): [`Task`](model_task.Task.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Partial`<`any`\> |
| `options?` | `SetOptions` |

#### Returns

[`Task`](model_task.Task.md)

#### Inherited from

Model.setAttributes

#### Defined in

node_modules/sequelize/types/model.d.ts:3134

___

### setDataValue

▸ **setDataValue**<`K`\>(`key`, `value`): `void`

Update the underlying data value

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

Model.setDataValue

#### Defined in

node_modules/sequelize/types/model.d.ts:3093

___

### toJSON

▸ **toJSON**<`T`\>(): `T`

Convert the instance to a JSON representation. Proxies to calling `get` with no keys. This means get all
values gotten from the DB, and apply all custom getters.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any` |

#### Returns

`T`

#### Inherited from

Model.toJSON

#### Defined in

node_modules/sequelize/types/model.d.ts:3271

▸ **toJSON**(): `object`

#### Returns

`object`

#### Inherited from

Model.toJSON

#### Defined in

node_modules/sequelize/types/model.d.ts:3272

___

### update

▸ **update**<`K`\>(`key`, `value`, `options?`): `Promise`<[`Task`](model_task.Task.md)\>

This is the same as calling `set` and then calling `save`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |
| `value` | `any` |
| `options?` | `InstanceUpdateOptions`<`any`\> |

#### Returns

`Promise`<[`Task`](model_task.Task.md)\>

#### Inherited from

Model.update

#### Defined in

node_modules/sequelize/types/model.d.ts:3188

▸ **update**(`keys`, `options?`): `Promise`<[`Task`](model_task.Task.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keys` | `Object` |
| `options?` | `InstanceUpdateOptions`<`any`\> |

#### Returns

`Promise`<[`Task`](model_task.Task.md)\>

#### Inherited from

Model.update

#### Defined in

node_modules/sequelize/types/model.d.ts:3189

___

### validate

▸ **validate**(`options?`): `Promise`<`void`\>

Validate the attribute of this instance according to validation rules set in the model definition.

Emits null if and only if validation successful; otherwise an Error instance containing
{ field name : [error msgs] } entries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ValidationOptions` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Model.validate

#### Defined in

node_modules/sequelize/types/model.d.ts:3183

___

### where

▸ **where**(): `object`

Get an object representing the query for this instance, use with `options.where`

#### Returns

`object`

#### Inherited from

Model.where

#### Defined in

node_modules/sequelize/types/model.d.ts:3083

___

### addHook

▸ `Static` **addHook**<`H`, `K`\>(`this`, `hookType`, `name`, `fn`): `HooksCtor`<`H`\>

Add a hook to the model

#### Type parameters

| Name | Type |
| :------ | :------ |
| `H` | extends `Hooks`<`Model`<`any`, `any`\>, `any`, `any`\> |
| `K` | extends keyof `SequelizeHooks`<`H`[``"_model"``], `Attributes`<`H`\>, `CreationAttributes`<`H`\>\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `HooksStatic`<`H`\> | - |
| `hookType` | `K` | - |
| `name` | `string` | Provide a name for the hook function. It can be used to remove the hook later or to order hooks based on some sort of priority system in the future. |
| `fn` | `SequelizeHooks`<`H`[``"_model"``], `Attributes`<`H`\>, `CreationAttributes`<`H`\>\>[`K`] | - |

#### Returns

`HooksCtor`<`H`\>

#### Inherited from

Model.addHook

#### Defined in

node_modules/sequelize/types/hooks.d.ts:123

▸ `Static` **addHook**<`H`, `K`\>(`this`, `hookType`, `fn`): `HooksCtor`<`H`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `H` | extends `Hooks`<`Model`<`any`, `any`\>, `any`, `any`\> |
| `K` | extends keyof `SequelizeHooks`<`H`[``"_model"``], `Attributes`<`H`\>, `CreationAttributes`<`H`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `HooksStatic`<`H`\> |
| `hookType` | `K` |
| `fn` | `SequelizeHooks`<`H`[``"_model"``], `Attributes`<`H`\>, `CreationAttributes`<`H`\>\>[`K`] |

#### Returns

`HooksCtor`<`H`\>

#### Inherited from

Model.addHook

#### Defined in

node_modules/sequelize/types/hooks.d.ts:132

___

### addScope

▸ `Static` **addScope**<`M`\>(`this`, `name`, `scope`, `options?`): `void`

Add a new scope to the model

This is especially useful for adding scopes with includes, when the model you want to
include is not available at the time this model is defined. By default this will throw an
error if a scope with that name already exists. Pass `override: true` in the options
object to silence this error.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `name` | `string` |
| `scope` | `FindOptions`<`Attributes`<`M`\>\> |
| `options?` | `AddScopeOptions` |

#### Returns

`void`

#### Inherited from

Model.addScope

#### Defined in

node_modules/sequelize/types/model.d.ts:2110

▸ `Static` **addScope**<`M`\>(`this`, `name`, `scope`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `name` | `string` |
| `scope` | (...`args`: readonly `any`[]) => `FindOptions`<`Attributes`<`M`\>\> |
| `options?` | `AddScopeOptions` |

#### Returns

`void`

#### Inherited from

Model.addScope

#### Defined in

node_modules/sequelize/types/model.d.ts:2116

___

### afterBulkCreate

▸ `Static` **afterBulkCreate**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run after creating instances in bulk

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instances`: readonly `M`[], `options`: `BulkCreateOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with instances, options |

#### Returns

`void`

#### Inherited from

Model.afterBulkCreate

#### Defined in

node_modules/sequelize/types/model.d.ts:2750

▸ `Static` **afterBulkCreate**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instances`: readonly `M`[], `options`: `BulkCreateOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.afterBulkCreate

#### Defined in

node_modules/sequelize/types/model.d.ts:2755

___

### afterBulkDestroy

▸ `Static` **afterBulkDestroy**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run after destroying instances in bulk

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`options`: `DestroyOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with options |

#### Returns

`void`

#### Inherited from

Model.afterBulkDestroy

#### Defined in

node_modules/sequelize/types/model.d.ts:2780

▸ `Static` **afterBulkDestroy**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`options`: `DestroyOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.afterBulkDestroy

#### Defined in

node_modules/sequelize/types/model.d.ts:2784

___

### afterBulkSync

▸ `Static` **afterBulkSync**(`name`, `fn`): `void`

A hook that is run after sequelize.sync call

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `fn` | (`options`: `SyncOptions`) => `HookReturn` | A callback function that is called with options passed to sequelize.sync |

#### Returns

`void`

#### Inherited from

Model.afterBulkSync

#### Defined in

node_modules/sequelize/types/model.d.ts:2908

▸ `Static` **afterBulkSync**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`options`: `SyncOptions`) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.afterBulkSync

#### Defined in

node_modules/sequelize/types/model.d.ts:2909

___

### afterBulkUpdate

▸ `Static` **afterBulkUpdate**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run after updating instances in bulk

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`options`: `UpdateOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with options |

#### Returns

`void`

#### Inherited from

Model.afterBulkUpdate

#### Defined in

node_modules/sequelize/types/model.d.ts:2810

▸ `Static` **afterBulkUpdate**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`options`: `UpdateOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.afterBulkUpdate

#### Defined in

node_modules/sequelize/types/model.d.ts:2814

___

### afterCreate

▸ `Static` **afterCreate**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run after creating a single instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instance`: `M`, `options`: `CreateOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with attributes, options |

#### Returns

`void`

#### Inherited from

Model.afterCreate

#### Defined in

node_modules/sequelize/types/model.d.ts:2622

▸ `Static` **afterCreate**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instance`: `M`, `options`: `CreateOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.afterCreate

#### Defined in

node_modules/sequelize/types/model.d.ts:2627

___

### afterDestroy

▸ `Static` **afterDestroy**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run after destroying a single instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instance`: `M`, `options`: `InstanceDestroyOptions`) => `HookReturn` | A callback function that is called with instance, options |

#### Returns

`void`

#### Inherited from

Model.afterDestroy

#### Defined in

node_modules/sequelize/types/model.d.ts:2654

▸ `Static` **afterDestroy**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instance`: `M`, `options`: `InstanceDestroyOptions`) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.afterDestroy

#### Defined in

node_modules/sequelize/types/model.d.ts:2659

___

### afterFind

▸ `Static` **afterFind**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run after a find (select) query

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instancesOrInstance`: ``null`` \| `M` \| readonly `M`[], `options`: `FindOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with instance(s), options |

#### Returns

`void`

#### Inherited from

Model.afterFind

#### Defined in

node_modules/sequelize/types/model.d.ts:2885

▸ `Static` **afterFind**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instancesOrInstance`: ``null`` \| `M` \| readonly `M`[], `options`: `FindOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.afterFind

#### Defined in

node_modules/sequelize/types/model.d.ts:2890

___

### afterSave

▸ `Static` **afterSave**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run after creating or updating a single instance, It proxies `afterCreate` and `afterUpdate`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instance`: `M`, `options`: `UpdateOptions`<`Attributes`<`M`\>\> \| `SaveOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with instance, options |

#### Returns

`void`

#### Inherited from

Model.afterSave

#### Defined in

node_modules/sequelize/types/model.d.ts:2718

▸ `Static` **afterSave**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instance`: `M`, `options`: `UpdateOptions`<`Attributes`<`M`\>\> \| `SaveOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.afterSave

#### Defined in

node_modules/sequelize/types/model.d.ts:2723

___

### afterSync

▸ `Static` **afterSync**(`name`, `fn`): `void`

A hook that is run after Model.sync call

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `fn` | (`options`: `SyncOptions`) => `HookReturn` | A callback function that is called with options passed to Model.sync |

#### Returns

`void`

#### Inherited from

Model.afterSync

#### Defined in

node_modules/sequelize/types/model.d.ts:2924

▸ `Static` **afterSync**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`options`: `SyncOptions`) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.afterSync

#### Defined in

node_modules/sequelize/types/model.d.ts:2925

___

### afterUpdate

▸ `Static` **afterUpdate**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run after updating a single instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instance`: `M`, `options`: `UpdateOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with instance, options |

#### Returns

`void`

#### Inherited from

Model.afterUpdate

#### Defined in

node_modules/sequelize/types/model.d.ts:2686

▸ `Static` **afterUpdate**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instance`: `M`, `options`: `UpdateOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.afterUpdate

#### Defined in

node_modules/sequelize/types/model.d.ts:2691

___

### afterValidate

▸ `Static` **afterValidate**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run after validation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instance`: `M`, `options`: `ValidationOptions`) => `HookReturn` | A callback function that is called with instance, options |

#### Returns

`void`

#### Inherited from

Model.afterValidate

#### Defined in

node_modules/sequelize/types/model.d.ts:2590

▸ `Static` **afterValidate**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instance`: `M`, `options`: `ValidationOptions`) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.afterValidate

#### Defined in

node_modules/sequelize/types/model.d.ts:2595

___

### aggregate

▸ `Static` **aggregate**<`T`, `M`\>(`this`, `field`, `aggregateFunction`, `options?`): `Promise`<`T`\>

Run an aggregation method on the specified field

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `field` | keyof `Attributes`<`M`\> \| ``"*"`` | The field to aggregate over. Can be a field name or * |
| `aggregateFunction` | `string` | The function to use for aggregation, e.g. sum, max etc. |
| `options?` | `AggregateOptions`<`T`, `Attributes`<`M`\>\> | Query options. See sequelize.query for full options |

#### Returns

`Promise`<`T`\>

Returns the aggregate result cast to `options.dataType`, unless `options.plain` is false, in
    which case the complete data result is returned.

#### Inherited from

Model.aggregate

#### Defined in

node_modules/sequelize/types/model.d.ts:2225

___

### beforeBulkCreate

▸ `Static` **beforeBulkCreate**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run before creating instances in bulk

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instances`: `M`[], `options`: `BulkCreateOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with instances, options |

#### Returns

`void`

#### Inherited from

Model.beforeBulkCreate

#### Defined in

node_modules/sequelize/types/model.d.ts:2734

▸ `Static` **beforeBulkCreate**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instances`: `M`[], `options`: `BulkCreateOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeBulkCreate

#### Defined in

node_modules/sequelize/types/model.d.ts:2739

___

### beforeBulkDestroy

▸ `Static` **beforeBulkDestroy**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run before destroying instances in bulk

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`options`: `BulkCreateOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with options |

#### Returns

`void`

#### Inherited from

Model.beforeBulkDestroy

#### Defined in

node_modules/sequelize/types/model.d.ts:2766

▸ `Static` **beforeBulkDestroy**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`options`: `BulkCreateOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeBulkDestroy

#### Defined in

node_modules/sequelize/types/model.d.ts:2769

___

### beforeBulkSync

▸ `Static` **beforeBulkSync**(`name`, `fn`): `void`

A hook that is run before sequelize.sync call

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `fn` | (`options`: `SyncOptions`) => `HookReturn` | A callback function that is called with options passed to sequelize.sync |

#### Returns

`void`

#### Inherited from

Model.beforeBulkSync

#### Defined in

node_modules/sequelize/types/model.d.ts:2900

▸ `Static` **beforeBulkSync**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`options`: `SyncOptions`) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeBulkSync

#### Defined in

node_modules/sequelize/types/model.d.ts:2901

___

### beforeBulkUpdate

▸ `Static` **beforeBulkUpdate**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run after updating instances in bulk

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`options`: `UpdateOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with options |

#### Returns

`void`

#### Inherited from

Model.beforeBulkUpdate

#### Defined in

node_modules/sequelize/types/model.d.ts:2795

▸ `Static` **beforeBulkUpdate**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`options`: `UpdateOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeBulkUpdate

#### Defined in

node_modules/sequelize/types/model.d.ts:2799

___

### beforeCount

▸ `Static` **beforeCount**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run before a count query

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`options`: `CountOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with options |

#### Returns

`void`

#### Inherited from

Model.beforeCount

#### Defined in

node_modules/sequelize/types/model.d.ts:2840

▸ `Static` **beforeCount**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`options`: `CountOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeCount

#### Defined in

node_modules/sequelize/types/model.d.ts:2844

___

### beforeCreate

▸ `Static` **beforeCreate**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run before creating a single instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instance`: `M`, `options`: `CreateOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with attributes, options |

#### Returns

`void`

#### Inherited from

Model.beforeCreate

#### Defined in

node_modules/sequelize/types/model.d.ts:2606

▸ `Static` **beforeCreate**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instance`: `M`, `options`: `CreateOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeCreate

#### Defined in

node_modules/sequelize/types/model.d.ts:2611

___

### beforeDestroy

▸ `Static` **beforeDestroy**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run before destroying a single instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instance`: `M`, `options`: `InstanceDestroyOptions`) => `HookReturn` | A callback function that is called with instance, options |

#### Returns

`void`

#### Inherited from

Model.beforeDestroy

#### Defined in

node_modules/sequelize/types/model.d.ts:2638

▸ `Static` **beforeDestroy**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instance`: `M`, `options`: `InstanceDestroyOptions`) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeDestroy

#### Defined in

node_modules/sequelize/types/model.d.ts:2643

___

### beforeFind

▸ `Static` **beforeFind**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run before a find (select) query

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`options`: `FindOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with options |

#### Returns

`void`

#### Inherited from

Model.beforeFind

#### Defined in

node_modules/sequelize/types/model.d.ts:2825

▸ `Static` **beforeFind**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`options`: `FindOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeFind

#### Defined in

node_modules/sequelize/types/model.d.ts:2829

___

### beforeFindAfterExpandIncludeAll

▸ `Static` **beforeFindAfterExpandIncludeAll**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run before a find (select) query, after any { include: {all: ...} } options are expanded

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`options`: `FindOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with options |

#### Returns

`void`

#### Inherited from

Model.beforeFindAfterExpandIncludeAll

#### Defined in

node_modules/sequelize/types/model.d.ts:2855

▸ `Static` **beforeFindAfterExpandIncludeAll**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`options`: `FindOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeFindAfterExpandIncludeAll

#### Defined in

node_modules/sequelize/types/model.d.ts:2859

___

### beforeFindAfterOptions

▸ `Static` **beforeFindAfterOptions**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run before a find (select) query, after all option parsing is complete

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`options`: `FindOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with options |

#### Returns

`void`

#### Inherited from

Model.beforeFindAfterOptions

#### Defined in

node_modules/sequelize/types/model.d.ts:2870

▸ `Static` **beforeFindAfterOptions**<`M`\>(`this`, `fn`): `HookReturn`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`options`: `FindOptions`<`Attributes`<`M`\>\>) => `void` |

#### Returns

`HookReturn`

#### Inherited from

Model.beforeFindAfterOptions

#### Defined in

node_modules/sequelize/types/model.d.ts:2874

___

### beforeSave

▸ `Static` **beforeSave**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run before creating or updating a single instance, It proxies `beforeCreate` and `beforeUpdate`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instance`: `M`, `options`: `UpdateOptions`<`Attributes`<`M`\>\> \| `SaveOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with instance, options |

#### Returns

`void`

#### Inherited from

Model.beforeSave

#### Defined in

node_modules/sequelize/types/model.d.ts:2702

▸ `Static` **beforeSave**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instance`: `M`, `options`: `UpdateOptions`<`Attributes`<`M`\>\> \| `SaveOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeSave

#### Defined in

node_modules/sequelize/types/model.d.ts:2707

___

### beforeSync

▸ `Static` **beforeSync**(`name`, `fn`): `void`

A hook that is run before Model.sync call

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | - |
| `fn` | (`options`: `SyncOptions`) => `HookReturn` | A callback function that is called with options passed to Model.sync |

#### Returns

`void`

#### Inherited from

Model.beforeSync

#### Defined in

node_modules/sequelize/types/model.d.ts:2916

▸ `Static` **beforeSync**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`options`: `SyncOptions`) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeSync

#### Defined in

node_modules/sequelize/types/model.d.ts:2917

___

### beforeUpdate

▸ `Static` **beforeUpdate**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run before updating a single instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instance`: `M`, `options`: `UpdateOptions`<`Attributes`<`M`\>\>) => `HookReturn` | A callback function that is called with instance, options |

#### Returns

`void`

#### Inherited from

Model.beforeUpdate

#### Defined in

node_modules/sequelize/types/model.d.ts:2670

▸ `Static` **beforeUpdate**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instance`: `M`, `options`: `UpdateOptions`<`Attributes`<`M`\>\>) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeUpdate

#### Defined in

node_modules/sequelize/types/model.d.ts:2675

___

### beforeValidate

▸ `Static` **beforeValidate**<`M`\>(`this`, `name`, `fn`): `void`

A hook that is run before validation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `name` | `string` |  |
| `fn` | (`instance`: `M`, `options`: `ValidationOptions`) => `HookReturn` | A callback function that is called with instance, options |

#### Returns

`void`

#### Inherited from

Model.beforeValidate

#### Defined in

node_modules/sequelize/types/model.d.ts:2574

▸ `Static` **beforeValidate**<`M`\>(`this`, `fn`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fn` | (`instance`: `M`, `options`: `ValidationOptions`) => `HookReturn` |

#### Returns

`void`

#### Inherited from

Model.beforeValidate

#### Defined in

node_modules/sequelize/types/model.d.ts:2579

___

### belongsTo

▸ `Static` **belongsTo**<`M`, `T`\>(`this`, `target`, `options?`): `BelongsTo`<`M`, `T`\>

Creates an association between this (the source) and the provided target. The foreign key is added on the
source.

Example: `Profile.belongsTo(User)`. This will add userId to the profile table.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |
| `T` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `target` | `ModelStatic`<`T`\> | The model that will be associated with hasOne relationship |
| `options?` | `BelongsToOptions` | Options for the association |

#### Returns

`BelongsTo`<`M`, `T`\>

#### Inherited from

Model.belongsTo

#### Defined in

node_modules/sequelize/types/model.d.ts:2949

___

### belongsToMany

▸ `Static` **belongsToMany**<`M`, `T`\>(`this`, `target`, `options`): `BelongsToMany`<`M`, `T`\>

Create an N:M association with a join table

```js
User.belongsToMany(Project)
Project.belongsToMany(User)
```
By default, the name of the join table will be source+target, so in this case projectsusers. This can be
overridden by providing either a string or a Model as `through` in the options.

If you use a through model with custom attributes, these attributes can be set when adding / setting new
associations in two ways. Consider users and projects from before with a join table that stores whether
the project has been started yet:
```js
class UserProjects extends Model {}
UserProjects.init({
  started: Sequelize.BOOLEAN
}, { sequelize });
User.belongsToMany(Project, { through: UserProjects })
Project.belongsToMany(User, { through: UserProjects })
```
```js
jan.addProject(homework, { started: false }) // The homework project is not started yet
jan.setProjects([makedinner, doshopping], { started: true}) // Both shopping and dinner has been started
```

If you want to set several target instances, but with different attributes you have to set the
attributes on the instance, using a property with the name of the through model:

```js
p1.userprojects {
  started: true
}
user.setProjects([p1, p2], {started: false}) // The default value is false, but p1 overrides that.
```

Similarily, when fetching through a join table with custom attributes, these attributes will be
available as an object with the name of the through model.
```js
user.getProjects().then(projects => {
  const p1 = projects[0]
  p1.userprojects.started // Is this project started yet?
})
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |
| `T` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `target` | `ModelStatic`<`T`\> | The model that will be associated with hasOne relationship |
| `options` | `BelongsToManyOptions` | Options for the association |

#### Returns

`BelongsToMany`<`M`, `T`\>

#### Inherited from

Model.belongsToMany

#### Defined in

node_modules/sequelize/types/model.d.ts:3059

___

### build

▸ `Static` **build**<`M`\>(`this`, `record?`, `options?`): `M`

Builds a new model instance. Values is an object of key value pairs, must be defined but can be empty.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `record?` | `MakeNullishOptional`<`M`[``"_creationAttributes"``]\> |
| `options?` | `BuildOptions` |

#### Returns

`M`

#### Inherited from

Model.build

#### Defined in

node_modules/sequelize/types/model.d.ts:2336

___

### bulkBuild

▸ `Static` **bulkBuild**<`M`\>(`this`, `records`, `options?`): `M`[]

Undocumented bulkBuild

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `records` | readonly `MakeNullishOptional`<`M`[``"_creationAttributes"``]\>[] |
| `options?` | `BuildOptions` |

#### Returns

`M`[]

#### Inherited from

Model.bulkBuild

#### Defined in

node_modules/sequelize/types/model.d.ts:2345

___

### bulkCreate

▸ `Static` **bulkCreate**<`M`\>(`this`, `records`, `options?`): `Promise`<`M`[]\>

Create and insert multiple instances in bulk.

The success handler is passed an array of instances, but please notice that these may not completely
represent the state of the rows in the DB. This is because MySQL and SQLite do not make it easy to
obtain
back automatically generated IDs and other default values in a way that can be mapped to multiple
records. To obtain Instances for the newly created values, you will need to query for them again.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `records` | readonly `MakeNullishOptional`<`M`[``"_creationAttributes"``]\>[] | List of objects (key/value pairs) to create instances from |
| `options?` | `BulkCreateOptions`<`Attributes`<`M`\>\> | - |

#### Returns

`Promise`<`M`[]\>

#### Inherited from

Model.bulkCreate

#### Defined in

node_modules/sequelize/types/model.d.ts:2436

___

### count

▸ `Static` **count**<`M`\>(`this`, `options`): `Promise`<`GroupedCountResultItem`[]\>

Count number of records if group by is used

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `options` | `Object` | - |
| `options.attributes?` | `FindAttributeOptions` | A list of the attributes that you want to select. To rename an attribute, you can pass an array, with two elements - the first is the name of the attribute in the DB (or some kind of expression such as `Sequelize.literal`, `Sequelize.fn` and so on), and the second is the name you want the attribute to have in the returned instance |
| `options.benchmark?` | `boolean` | Pass query execution time in milliseconds as second argument to logging function (options.logging). |
| `options.col?` | `string` | The column to aggregate on. |
| `options.distinct?` | `boolean` | Apply COUNT(DISTINCT(col)) |
| `options.group` | `GroupOption` | GROUP BY in sql Used in conjunction with `attributes`. **`See`** Projectable |
| `options.include?` | `Includeable` \| `Includeable`[] | Include options. See `find` for details |
| `options.logging?` | `boolean` \| (`sql`: `string`, `timing?`: `number`) => `void` | A function that gets executed while running the query to log the sql. |
| `options.paranoid?` | `boolean` | If true, only non-deleted records will be returned. If false, both deleted and non-deleted records will be returned. Only applies if `options.paranoid` is true for the model. |
| `options.transaction?` | ``null`` \| `Transaction` | Transaction to run query under |
| `options.useMaster?` | `boolean` | Force the query to use the write pool, regardless of the query type. **`Default`** ```ts false ``` |
| `options.where?` | `WhereOptions`<`Attributes`<`M`\>\> | Attribute has to be matched for rows to be selected for the given action. |

#### Returns

`Promise`<`GroupedCountResultItem`[]\>

Returns count for each group and the projected attributes.

#### Inherited from

Model.count

#### Defined in

node_modules/sequelize/types/model.d.ts:2237

▸ `Static` **count**<`M`\>(`this`, `options?`): `Promise`<`number`\>

Count the number of records matching the provided where clause.

If you provide an `include` option, the number of matching associations will be counted instead.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options?` | `Omit`<`CountOptions`<`Attributes`<`M`\>\>, ``"group"``\> |

#### Returns

`Promise`<`number`\>

Returns count for each group and the projected attributes.

#### Inherited from

Model.count

#### Defined in

node_modules/sequelize/types/model.d.ts:2249

___

### create

▸ `Static` **create**<`M`, `O`\>(`this`, `values?`, `options?`): `Promise`<`O` extends { `returning`: ``false``  } \| { `ignoreDuplicates`: ``true``  } ? `void` : `M`\>

Builds a new model instance and calls save on it.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |
| `O` | extends `CreateOptions`<`Attributes`<`M`\>\> = `CreateOptions`<`Attributes`<`M`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `values?` | `MakeNullishOptional`<`M`[``"_creationAttributes"``]\> |
| `options?` | `O` |

#### Returns

`Promise`<`O` extends { `returning`: ``false``  } \| { `ignoreDuplicates`: ``true``  } ? `void` : `M`\>

#### Inherited from

Model.create

#### Defined in

node_modules/sequelize/types/model.d.ts:2354

___

### decrement

▸ `Static` **decrement**<`M`\>(`this`, `fields`, `options`): `Promise`<[affectedRows: M[], affectedCount?: number]\>

Decrements the value of one or more attributes.

Works like [Model.increment](model_task.Task.md#increment-1)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `fields` | `AllowReadonlyArray`<keyof `Attributes`<`M`\>\> | If a string is provided, that column is incremented by the value of `by` given in options. If an array is provided, the same is true for each column. If an object is provided, each key is incremented by the corresponding value, `by` is ignored. |
| `options` | `IncrementDecrementOptionsWithBy`<`Attributes`<`M`\>\> | - |

#### Returns

`Promise`<[affectedRows: M[], affectedCount?: number]\>

an array of affected rows or with affected count if `options.returning` is true, whenever supported by dialect

**`Since`**

4.36.0

#### Inherited from

Model.decrement

#### Defined in

node_modules/sequelize/types/model.d.ts:2546

▸ `Static` **decrement**<`M`\>(`this`, `fields`, `options`): `Promise`<[affectedRows: M[], affectedCount?: number]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fields` | { [key in string \| number \| symbol]?: number } |
| `options` | `IncrementDecrementOptions`<`Attributes`<`M`\>\> |

#### Returns

`Promise`<[affectedRows: M[], affectedCount?: number]\>

#### Inherited from

Model.decrement

#### Defined in

node_modules/sequelize/types/model.d.ts:2551

___

### describe

▸ `Static` **describe**(): `Promise`<`object`\>

Run a describe query on the table. The result will be return to the listener as a hash of attributes and
their types.

#### Returns

`Promise`<`object`\>

#### Inherited from

Model.describe

#### Defined in

node_modules/sequelize/types/model.d.ts:2561

___

### destroy

▸ `Static` **destroy**<`M`\>(`this`, `options?`): `Promise`<`number`\>

Delete multiple instances, or set their deletedAt timestamp to the current time if `paranoid` is enabled.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options?` | `DestroyOptions`<`Attributes`<`M`\>\> |

#### Returns

`Promise`<`number`\>

Promise<number> The number of destroyed rows

#### Inherited from

Model.destroy

#### Defined in

node_modules/sequelize/types/model.d.ts:2455

___

### drop

▸ `Static` **drop**(`options?`): `Promise`<`void`\>

Drop the table represented by this Model

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `DropOptions` |

#### Returns

`Promise`<`void`\>

#### Inherited from

Model.drop

#### Defined in

node_modules/sequelize/types/model.d.ts:2016

___

### findAll

▸ `Static` **findAll**<`M`\>(`this`, `options?`): `Promise`<`M`[]\>

Search for multiple instances.

__Simple search using AND and =__
```js
Model.findAll({
  where: {
    attr1: 42,
    attr2: 'cake'
  }
})
```
```sql
WHERE attr1 = 42 AND attr2 = 'cake'
```

__Using greater than, less than etc.__
```js

Model.findAll({
  where: {
    attr1: {
      gt: 50
    },
    attr2: {
      lte: 45
    },
    attr3: {
      in: [1,2,3]
    },
    attr4: {
      ne: 5
    }
  }
})
```
```sql
WHERE attr1 > 50 AND attr2 <= 45 AND attr3 IN (1,2,3) AND attr4 != 5
```
Possible options are: `[Op.ne], [Op.in], [Op.not], [Op.notIn], [Op.gte], [Op.gt], [Op.lte], [Op.lt], [Op.like], [Op.ilike]/[Op.iLike], [Op.notLike],
[Op.notILike], '..'/[Op.between], '!..'/[Op.notBetween], '&&'/[Op.overlap], '@>'/[Op.contains], '<@'/[Op.contained]`

__Queries using OR__
```js
Model.findAll({
  where: Sequelize.and(
    { name: 'a project' },
    Sequelize.or(
      { id: [1,2,3] },
      { id: { gt: 10 } }
    )
  )
})
```
```sql
WHERE name = 'a project' AND (id` IN (1,2,3) OR id > 10)
```

The success listener is called with an array of instances if the query succeeds.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options?` | `FindOptions`<`Attributes`<`M`\>\> |

#### Returns

`Promise`<`M`[]\>

**`See`**

#### Inherited from

Model.findAll

#### Defined in

node_modules/sequelize/types/model.d.ts:2185

___

### findAndCountAll

▸ `Static` **findAndCountAll**<`M`\>(`this`, `options?`): `Promise`<{ `count`: `number` ; `rows`: `M`[]  }\>

Find all the rows matching your query, within a specified offset / limit, and get the total number of
rows matching your query. This is very useful for paging

```js
Model.findAndCountAll({
  where: ...,
  limit: 12,
  offset: 12
}).then(result => {
  ...
})
```
In the above example, `result.rows` will contain rows 13 through 24, while `result.count` will return
the
total number of rows that matched your query.

When you add includes, only those which are required (either because they have a where clause, or
because
`required` is explicitly set to true on the include) will be added to the count part.

Suppose you want to find all users who have a profile attached:
```js
User.findAndCountAll({
  include: [
     { model: Profile, required: true}
  ],
  limit: 3
});
```
Because the include for `Profile` has `required` set it will result in an inner join, and only the users
who have a profile will be counted. If we remove `required` from the include, both users with and
without
profiles will be counted

This function also support grouping, when `group` is provided, the count will be an array of objects
containing the count for each group and the projected attributes.
```js
User.findAndCountAll({
  group: 'type'
});
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options?` | `Omit`<`FindAndCountOptions`<`Attributes`<`M`\>\>, ``"group"``\> |

#### Returns

`Promise`<{ `count`: `number` ; `rows`: `M`[]  }\>

#### Inherited from

Model.findAndCountAll

#### Defined in

node_modules/sequelize/types/model.d.ts:2297

▸ `Static` **findAndCountAll**<`M`\>(`this`, `options`): `Promise`<{ `count`: `GroupedCountResultItem`[] ; `rows`: `M`[]  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `options` | `Object` | - |
| `options.attributes?` | `FindAttributeOptions` | A list of the attributes that you want to select. To rename an attribute, you can pass an array, with two elements - the first is the name of the attribute in the DB (or some kind of expression such as `Sequelize.literal`, `Sequelize.fn` and so on), and the second is the name you want the attribute to have in the returned instance |
| `options.benchmark?` | `boolean` | Pass query execution time in milliseconds as second argument to logging function (options.logging). |
| `options.bind?` | `BindOrReplacements` | Either an object of named parameter bindings in the format `$param` or an array of unnamed values to bind to `$1`, `$2`, etc in your SQL. |
| `options.col?` | `string` | The column to aggregate on. |
| `options.distinct?` | `boolean` | Apply COUNT(DISTINCT(col)) |
| `options.fieldMap?` | `FieldMap` | Map returned fields to arbitrary names for SELECT query type if `options.fieldMaps` is present. |
| `options.group` | `GroupOption` | GROUP BY in sql Used in conjunction with `attributes`. **`See`** Projectable |
| `options.groupedLimit?` | `unknown` | - |
| `options.having?` | `WhereOptions`<`any`\> | Select group rows after groups and aggregates are computed. |
| `options.include?` | `Includeable` \| `Includeable`[] | Include options. See `find` for details |
| `options.indexHints?` | `IndexHint`[] | MySQL only. |
| `options.instance?` | `Model`<`any`, `any`\> | A sequelize instance used to build the return instance |
| `options.limit?` | `number` | Limits how many items will be retrieved by the operation. If `limit` and `include` are used together, Sequelize will turn the `subQuery` option on by default. This is done to ensure that `limit` only impacts the Model on the same level as the `limit` option. You can disable this behavior by explicitly setting `subQuery: false`, however `limit` will then affect the total count of returned values, including eager-loaded associations, instead of just one table. **`Example`** ```ts // in the following query, `limit` only affects the "User" model. // This will return 2 users, each including all of their projects. User.findAll({ limit: 2, include: [User.associations.projects], }); ``` **`Example`** ```ts // in the following query, `limit` affects the total number of returned values, eager-loaded associations included. // This may return 2 users, each with one project, // or 1 user with 2 projects. User.findAll({ limit: 2, include: [User.associations.projects], subQuery: false, }); ``` |
| `options.lock?` | `boolean` \| `LOCK` \| { `level`: `LOCK` ; `of`: `ModelStatic`<`Model`<`any`, `any`\>\>  } | Lock the selected rows. Possible options are transaction.LOCK.UPDATE and transaction.LOCK.SHARE. Postgres also supports transaction.LOCK.KEY_SHARE, transaction.LOCK.NO_KEY_UPDATE and specific model locks with joins. See [transaction.LOCK for an example](transaction#lock) |
| `options.logging?` | `boolean` \| (`sql`: `string`, `timing?`: `number`) => `void` | A function that gets executed while running the query to log the sql. |
| `options.mapToModel?` | `boolean` | Map returned fields to model's fields if `options.model` or `options.instance` is present. Mapping will occur before building the model instance. |
| `options.nest?` | `boolean` | If true, transforms objects with `.` separated property names into nested objects using [dottie.js](https://github.com/mickhansen/dottie.js). For example { 'user.username': 'john' } becomes { user: { username: 'john' }}. When `nest` is true, the query type is assumed to be `'SELECT'`, unless otherwise specified **`Default`** ```ts false ``` |
| `options.offset?` | `number` | Skip the results; |
| `options.order?` | `Order` | Specifies an ordering. If a string is provided, it will be escaped. Using an array, you can provide several columns / functions to order by. Each element can be further wrapped in a two-element array. The first element is the column / function to order by, the second is the direction. For example: `order: [['name', 'DESC']]`. In this way the column will be escaped, but the direction will not. |
| `options.paranoid?` | `boolean` | If true, only non-deleted records will be returned. If false, both deleted and non-deleted records will be returned. Only applies if `options.paranoid` is true for the model. |
| `options.plain?` | `boolean` | Sets the query type to `SELECT` and return a single row |
| `options.raw?` | `boolean` | Return raw result. See sequelize.query for more information. |
| `options.replacements?` | `BindOrReplacements` | Either an object of named parameter replacements in the format `:param` or an array of unnamed replacements to replace `?` in your SQL. |
| `options.retry?` | `Options` | - |
| `options.skipLocked?` | `boolean` | Skip locked rows. Only supported in Postgres. |
| `options.subQuery?` | `boolean` | Use sub queries (internal). If unspecified, this will `true` by default if `limit` is specified, and `false` otherwise. See FindOptions#limit for more information. |
| `options.transaction?` | ``null`` \| `Transaction` | Transaction to run query under |
| `options.type?` | `string` | The type of query you are executing. The query type affects how results are formatted before they are passed back. The type is a string, but `Sequelize.QueryTypes` is provided as convenience shortcuts. |
| `options.useMaster?` | `boolean` | Force the query to use the write pool, regardless of the query type. **`Default`** ```ts false ``` |
| `options.where?` | `WhereOptions`<`Attributes`<`M`\>\> | Attribute has to be matched for rows to be selected for the given action. |

#### Returns

`Promise`<{ `count`: `GroupedCountResultItem`[] ; `rows`: `M`[]  }\>

#### Inherited from

Model.findAndCountAll

#### Defined in

node_modules/sequelize/types/model.d.ts:2301

___

### findByPk

▸ `Static` **findByPk**<`M`\>(`this`, `identifier`, `options`): `Promise`<`M`\>

Search for a single instance by its primary key. This applies LIMIT 1, so the listener will
always be called with a single instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `identifier` | `Identifier` |
| `options` | `Omit`<`NonNullFindOptions`<`Attributes`<`M`\>\>, ``"where"``\> |

#### Returns

`Promise`<`M`\>

#### Inherited from

Model.findByPk

#### Defined in

node_modules/sequelize/types/model.d.ts:2193

▸ `Static` **findByPk**<`M`\>(`this`, `identifier?`, `options?`): `Promise`<``null`` \| `M`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `identifier?` | `Identifier` |
| `options?` | `Omit`<`FindOptions`<`Attributes`<`M`\>\>, ``"where"``\> |

#### Returns

`Promise`<``null`` \| `M`\>

#### Inherited from

Model.findByPk

#### Defined in

node_modules/sequelize/types/model.d.ts:2198

___

### findCreateFind

▸ `Static` **findCreateFind**<`M`\>(`this`, `options`): `Promise`<[`M`, `boolean`]\>

A more performant findOrCreate that will not work under a transaction (at least not in postgres)
Will execute a find call, if empty then attempt to create, if unique constraint then attempt to find again

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options` | `FindOrCreateOptions`<`Attributes`<`M`\>, `MakeNullishOptional`<`M`[``"_creationAttributes"``]\>\> |

#### Returns

`Promise`<[`M`, `boolean`]\>

#### Inherited from

Model.findCreateFind

#### Defined in

node_modules/sequelize/types/model.d.ts:2395

___

### findOne

▸ `Static` **findOne**<`M`\>(`this`, `options`): `Promise`<`M`\>

Search for a single instance. Returns the first instance found, or null if none can be found.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options` | `NonNullFindOptions`<`Attributes`<`M`\>\> |

#### Returns

`Promise`<`M`\>

#### Inherited from

Model.findOne

#### Defined in

node_modules/sequelize/types/model.d.ts:2207

▸ `Static` **findOne**<`M`\>(`this`, `options?`): `Promise`<``null`` \| `M`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options?` | `FindOptions`<`Attributes`<`M`\>\> |

#### Returns

`Promise`<``null`` \| `M`\>

#### Inherited from

Model.findOne

#### Defined in

node_modules/sequelize/types/model.d.ts:2211

___

### findOrBuild

▸ `Static` **findOrBuild**<`M`\>(`this`, `options`): `Promise`<[`M`, `boolean`]\>

Find a row that matches the query, or build (but don't save) the row if none is found.
The successful result of the promise will be (instance, initialized) - Make sure to use `.then(([...]))`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options` | `FindOrBuildOptions`<`Attributes`<`M`\>, `MakeNullishOptional`<`M`[``"_creationAttributes"``]\>\> |

#### Returns

`Promise`<[`M`, `boolean`]\>

#### Inherited from

Model.findOrBuild

#### Defined in

node_modules/sequelize/types/model.d.ts:2367

___

### findOrCreate

▸ `Static` **findOrCreate**<`M`\>(`this`, `options`): `Promise`<[`M`, `boolean`]\>

Find a row that matches the query, or build and save the row if none is found
The successful result of the promise will be (instance, created) - Make sure to use `.then(([...]))`

If no transaction is passed in the `options` object, a new transaction will be created internally, to
prevent the race condition where a matching row is created by another connection after the find but
before the insert call. However, it is not always possible to handle this case in SQLite, specifically
if one transaction inserts and another tries to select before the first one has comitted. In this case,
an instance of sequelize.TimeoutError will be thrown instead. If a transaction is created, a savepoint
will be created instead, and any unique constraint violation will be handled internally.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options` | `FindOrCreateOptions`<`Attributes`<`M`\>, `MakeNullishOptional`<`M`[``"_creationAttributes"``]\>\> |

#### Returns

`Promise`<[`M`, `boolean`]\>

#### Inherited from

Model.findOrCreate

#### Defined in

node_modules/sequelize/types/model.d.ts:2386

___

### getAttributes

▸ `Static` **getAttributes**<`M`\>(`this`): { readonly [Key in string \| number \| symbol]: ModelAttributeColumnOptions<Model<any, any\>\> }

Returns the attributes of the model

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |

#### Returns

{ readonly [Key in string \| number \| symbol]: ModelAttributeColumnOptions<Model<any, any\>\> }

#### Inherited from

Model.getAttributes

#### Defined in

node_modules/sequelize/types/model.d.ts:1936

___

### getTableName

▸ `Static` **getTableName**(): `string` \| { `delimiter`: `string` ; `schema`: `string` ; `tableName`: `string`  }

Get the tablename of the model, taking schema into account. The method will return The name as a string
if the model has no schema, or an object with `tableName`, `schema` and `delimiter` properties.

#### Returns

`string` \| { `delimiter`: `string` ; `schema`: `string` ; `tableName`: `string`  }

#### Inherited from

Model.getTableName

#### Defined in

node_modules/sequelize/types/model.d.ts:2042

___

### hasHook

▸ `Static` **hasHook**<`H`\>(`this`, `hookType`): `boolean`

Check whether the mode has any hooks of this type

#### Type parameters

| Name | Type |
| :------ | :------ |
| `H` | extends `Hooks`<`Model`<`any`, `any`\>, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `HooksStatic`<`H`\> |
| `hookType` | keyof `SequelizeHooks`<`H`[``"_model"``], `Attributes`<`H`\>, `CreationAttributes`<`H`\>\> |

#### Returns

`boolean`

#### Inherited from

Model.hasHook

#### Defined in

node_modules/sequelize/types/hooks.d.ts:153

___

### hasHooks

▸ `Static` **hasHooks**<`H`\>(`this`, `hookType`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `H` | extends `Hooks`<`Model`<`any`, `any`\>, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `HooksStatic`<`H`\> |
| `hookType` | keyof `SequelizeHooks`<`H`[``"_model"``], `Attributes`<`H`\>, `CreationAttributes`<`H`\>\> |

#### Returns

`boolean`

#### Inherited from

Model.hasHooks

#### Defined in

node_modules/sequelize/types/hooks.d.ts:157

___

### hasMany

▸ `Static` **hasMany**<`M`, `T`\>(`this`, `target`, `options?`): `HasMany`<`M`, `T`\>

Create an association that is either 1:m or n:m.

```js
// Create a 1:m association between user and project
User.hasMany(Project)
```
```js
// Create a n:m association between user and project
User.hasMany(Project)
Project.hasMany(User)
```
By default, the name of the join table will be source+target, so in this case projectsusers. This can be
overridden by providing either a string or a Model as `through` in the options. If you use a through
model with custom attributes, these attributes can be set when adding / setting new associations in two
ways. Consider users and projects from before with a join table that stores whether the project has been
started yet:
```js
class UserProjects extends Model {}
UserProjects.init({
  started: Sequelize.BOOLEAN
}, { sequelize })
User.hasMany(Project, { through: UserProjects })
Project.hasMany(User, { through: UserProjects })
```
```js
jan.addProject(homework, { started: false }) // The homework project is not started yet
jan.setProjects([makedinner, doshopping], { started: true}) // Both shopping and dinner have been
started
```

If you want to set several target instances, but with different attributes you have to set the
attributes on the instance, using a property with the name of the through model:

```js
p1.userprojects {
  started: true
}
user.setProjects([p1, p2], {started: false}) // The default value is false, but p1 overrides that.
```

Similarily, when fetching through a join table with custom attributes, these attributes will be
available as an object with the name of the through model.
```js
user.getProjects().then(projects => {
  const p1 = projects[0]
  p1.userprojects.started // Is this project started yet?
})
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |
| `T` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `target` | `ModelStatic`<`T`\> | The model that will be associated with hasOne relationship |
| `options?` | `HasManyOptions` | Options for the association |

#### Returns

`HasMany`<`M`, `T`\>

#### Inherited from

Model.hasMany

#### Defined in

node_modules/sequelize/types/model.d.ts:3006

___

### hasOne

▸ `Static` **hasOne**<`M`, `T`\>(`this`, `target`, `options?`): `HasOne`<`M`, `T`\>

Creates an association between this (the source) and the provided target. The foreign key is added
on the target.

Example: `User.hasOne(Profile)`. This will add userId to the profile table.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |
| `T` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `target` | `ModelStatic`<`T`\> | The model that will be associated with hasOne relationship |
| `options?` | `HasOneOptions` | Options for the association |

#### Returns

`HasOne`<`M`, `T`\>

#### Inherited from

Model.hasOne

#### Defined in

node_modules/sequelize/types/model.d.ts:2936

___

### increment

▸ `Static` **increment**<`M`\>(`this`, `fields`, `options`): `Promise`<[affectedRows: M[], affectedCount?: number]\>

Increments the value of one or more attributes.

The increment is done using a `SET column = column + X WHERE foo = 'bar'` query.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `fields` | `AllowReadonlyArray`<keyof `Attributes`<`M`\>\> | If a string is provided, that column is incremented by the value of `by` given in options. If an array is provided, the same is true for each column. If an object is provided, each key is incremented by the corresponding value, `by` is ignored. |
| `options` | `IncrementDecrementOptionsWithBy`<`Attributes`<`M`\>\> | - |

#### Returns

`Promise`<[affectedRows: M[], affectedCount?: number]\>

an array of affected rows or with affected count if `options.returning` is true, whenever supported by dialect

**`Example`**

<caption>increment number by 1</caption>
```javascript
Model.increment('number', { where: { foo: 'bar' });
```

**`Example`**

<caption>increment number and count by 2</caption>
```javascript
Model.increment(['number', 'count'], { by: 2, where: { foo: 'bar' } });
```

**`Example`**

<caption>increment answer by 42, and decrement tries by 1</caption>
```javascript
// `by` cannot be used, as each attribute specifies its own value
Model.increment({ answer: 42, tries: -1}, { where: { foo: 'bar' } });
```

#### Inherited from

Model.increment

#### Defined in

node_modules/sequelize/types/model.d.ts:2522

▸ `Static` **increment**<`M`\>(`this`, `fields`, `options`): `Promise`<[affectedRows: M[], affectedCount?: number]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `fields` | { [key in string \| number \| symbol]?: number } |
| `options` | `IncrementDecrementOptions`<`Attributes`<`M`\>\> |

#### Returns

`Promise`<[affectedRows: M[], affectedCount?: number]\>

#### Inherited from

Model.increment

#### Defined in

node_modules/sequelize/types/model.d.ts:2527

___

### init

▸ `Static` **init**<`MS`, `M`\>(`this`, `attributes`, `options`): `MS`

Initialize a model, representing a table in the DB, with attributes and options.

The table columns are define by the hash that is given as the second argument. Each attribute of the hash represents a column. A short table definition might look like this:

```js
Project.init({
  columnA: {
    type: Sequelize.BOOLEAN,
    validate: {
      is: ['[a-z]','i'],        // will only allow letters
      max: 23,                  // only allow values <= 23
      isIn: {
        args: [['en', 'zh']],
        msg: "Must be English or Chinese"
      }
    },
    field: 'column_a'
    // Other attributes here
  },
  columnB: Sequelize.STRING,
  columnC: 'MY VERY OWN COLUMN TYPE'
}, {sequelize})

sequelize.models.modelName // The model will now be available in models under the class name
```

As shown above, column definitions can be either strings, a reference to one of the datatypes that are predefined on the Sequelize constructor, or an object that allows you to specify both the type of the column, and other attributes such as default values, foreign key constraints and custom setters and getters.

For a list of possible data types, see https://sequelize.org/master/en/latest/docs/models-definition/#data-types

For more about getters and setters, see https://sequelize.org/master/en/latest/docs/models-definition/#getters-setters

For more about instance and class methods, see https://sequelize.org/master/en/latest/docs/models-definition/#expansion-of-models

For more about validation, see https://sequelize.org/master/en/latest/docs/models-definition/#validations

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends `ModelStatic`<`Model`<`any`, `any`\>\> |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `MS` | - |
| `attributes` | `ModelAttributes`<`M`, `Optional`<`Attributes`<`M`\>, `BrandedKeysOf`<`Attributes`<`M`\>, typeof `ForeignKeyBrand`\>\>\> | An object, where each attribute is a column of the table. Each column can be either a DataType, a string or a type-description object, with the properties described below: |
| `options` | `InitOptions`<`M`\> | These options are merged with the default define options provided to the Sequelize constructor |

#### Returns

`MS`

Return the initialized model

#### Inherited from

Model.init

#### Defined in

node_modules/sequelize/types/model.d.ts:1988

___

### initialize

▸ `Static` **initialize**<`MS`, `M`\>(`attributes`, `options`): `MS`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `MS` | extends `ModelStatic`<`Model`<`any`, `any`\>\> |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `ModelAttributes`<`Model`<`any`, `any`\>, `any`\> |
| `options` | `InitOptions`<`Model`<`any`, `any`\>\> |

#### Returns

`MS`

#### Inherited from

Model.initialize

#### Defined in

node_modules/sequelize-typescript/dist/model/model/model.d.ts:20

___

### max

▸ `Static` **max**<`T`, `M`\>(`this`, `field`, `options?`): `Promise`<`T`\>

Find the maximum value of field

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `field` | keyof `Attributes`<`M`\> |
| `options?` | `AggregateOptions`<`T`, `Attributes`<`M`\>\> |

#### Returns

`Promise`<`T`\>

#### Inherited from

Model.max

#### Defined in

node_modules/sequelize/types/model.d.ts:2309

___

### min

▸ `Static` **min**<`T`, `M`\>(`this`, `field`, `options?`): `Promise`<`T`\>

Find the minimum value of field

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `field` | keyof `Attributes`<`M`\> |
| `options?` | `AggregateOptions`<`T`, `Attributes`<`M`\>\> |

#### Returns

`Promise`<`T`\>

#### Inherited from

Model.min

#### Defined in

node_modules/sequelize/types/model.d.ts:2318

___

### removeAttribute

▸ `Static` **removeAttribute**(`attribute`): `void`

Remove attribute from model definition

#### Parameters

| Name | Type |
| :------ | :------ |
| `attribute` | `string` |

#### Returns

`void`

#### Inherited from

Model.removeAttribute

#### Defined in

node_modules/sequelize/types/model.d.ts:2003

___

### removeHook

▸ `Static` **removeHook**<`H`\>(`this`, `hookType`, `name`): `HooksCtor`<`H`\>

Remove hook from the model

#### Type parameters

| Name | Type |
| :------ | :------ |
| `H` | extends `Hooks`<`Model`<`any`, `any`\>, `any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `HooksStatic`<`H`\> |
| `hookType` | keyof `SequelizeHooks`<`H`[``"_model"``], `Attributes`<`H`\>, `CreationAttributes`<`H`\>\> |
| `name` | `string` |

#### Returns

`HooksCtor`<`H`\>

#### Inherited from

Model.removeHook

#### Defined in

node_modules/sequelize/types/hooks.d.ts:144

___

### restore

▸ `Static` **restore**<`M`\>(`this`, `options?`): `Promise`<`void`\>

Restore multiple instances if `paranoid` is enabled.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options?` | `RestoreOptions`<`Attributes`<`M`\>\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

Model.restore

#### Defined in

node_modules/sequelize/types/model.d.ts:2463

___

### schema

▸ `Static` **schema**<`M`\>(`this`, `schema`, `options?`): `ModelCtor`<`M`\>

Apply a schema to this model. For postgres, this will actually place the schema in front of the table
name
- `"schema"."tableName"`, while the schema will be prepended to the table name for mysql and
sqlite - `'schema.tablename'`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `ModelStatic`<`M`\> | - |
| `schema` | `string` | The name of the schema |
| `options?` | `SchemaOptions` |  |

#### Returns

`ModelCtor`<`M`\>

#### Inherited from

Model.schema

#### Defined in

node_modules/sequelize/types/model.d.ts:2027

___

### scope

▸ `Static` **scope**<`M`\>(`this`, `options?`): `ModelCtor`<`M`\>

Apply a scope created in `define` to the model. First let's look at how to create scopes:
```js
class MyModel extends Model {}
MyModel.init(attributes, {
  defaultScope: {
    where: {
      username: 'dan'
    },
    limit: 12
  },
  scopes: {
    isALie: {
      where: {
        stuff: 'cake'
      }
    },
    complexFunction(email, accessLevel) {
      return {
        where: {
          email: {
            [Op.like]: email
          },
          accesss_level {
            [Op.gte]: accessLevel
          }
        }
      }
    }
  },
  sequelize,
})
```
Now, since you defined a default scope, every time you do Model.find, the default scope is appended to
your query. Here's a couple of examples:
```js
Model.findAll() // WHERE username = 'dan'
Model.findAll({ where: { age: { gt: 12 } } }) // WHERE age > 12 AND username = 'dan'
```

To invoke scope functions you can do:
```js
Model.scope({ method: ['complexFunction' 'dan@sequelize.com', 42]}).findAll()
// WHERE email like 'dan@sequelize.com%' AND access_level >= 42
```

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options?` | `string` \| `ScopeOptions` \| readonly (`string` \| `ScopeOptions`)[] \| `WhereAttributeHash`<`M`\> |

#### Returns

`ModelCtor`<`M`\>

Model A reference to the model, with the scope(s) applied. Calling scope again on the returned
 model will clear the previous scope.

#### Inherited from

Model.scope

#### Defined in

node_modules/sequelize/types/model.d.ts:2097

___

### sum

▸ `Static` **sum**<`T`, `M`\>(`this`, `field`, `options?`): `Promise`<`number`\>

Find the sum of field

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `field` | keyof `Attributes`<`M`\> |
| `options?` | `AggregateOptions`<`T`, `Attributes`<`M`\>\> |

#### Returns

`Promise`<`number`\>

#### Inherited from

Model.sum

#### Defined in

node_modules/sequelize/types/model.d.ts:2327

___

### sync

▸ `Static` **sync**<`M`\>(`options?`): `Promise`<`M`\>

Sync this Model to the DB, that is create the table. Upon success, the callback will be called with the
model instance (this)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `SyncOptions` |

#### Returns

`Promise`<`M`\>

#### Inherited from

Model.sync

#### Defined in

node_modules/sequelize/types/model.d.ts:2009

___

### truncate

▸ `Static` **truncate**<`M`\>(`this`, `options?`): `Promise`<`void`\>

Truncate all instances of the model. This is a convenient method for Model.destroy({ truncate: true }).

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `options?` | `TruncateOptions`<`Attributes`<`M`\>\> |

#### Returns

`Promise`<`void`\>

#### Inherited from

Model.truncate

#### Defined in

node_modules/sequelize/types/model.d.ts:2445

___

### unscoped

▸ `Static` **unscoped**<`M`\>(`this`): `M`

Unscope the model

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `ModelType`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `M` |

#### Returns

`M`

#### Inherited from

Model.unscoped

#### Defined in

node_modules/sequelize/types/model.d.ts:2566

___

### update

▸ `Static` **update**<`M`\>(`this`, `values`, `options`): `Promise`<[affectedCount: number, affectedRows: M[]]\>

Update multiple instances that match the where options. The promise returns an array with one or two
elements. The first element is always the number of affected rows, while the second element is the actual
affected rows (only supported in postgres and mssql with `options.returning` true.)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `values` | { [key in string \| number \| symbol]?: Col \| Fn \| Literal \| Attributes<M\>[key] } |
| `options` | `Omit`<`UpdateOptions`<`Attributes`<`M`\>\>, ``"returning"``\> & { `returning`: ``true`` \| keyof `Attributes`<`M`\>[]  } |

#### Returns

`Promise`<[affectedCount: number, affectedRows: M[]]\>

#### Inherited from

Model.update

#### Defined in

node_modules/sequelize/types/model.d.ts:2473

▸ `Static` **update**<`M`\>(`this`, `values`, `options`): `Promise`<[affectedCount: number]\>

Update multiple instances that match the where options. The promise returns an array with one or two
elements. The first element is always the number of affected rows, while the second element is the actual
affected rows (only supported in postgres and mssql with `options.returning` true.)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `values` | { [key in string \| number \| symbol]?: Col \| Fn \| Literal \| Attributes<M\>[key] } |
| `options` | `UpdateOptions`<`Attributes`<`M`\>\> |

#### Returns

`Promise`<[affectedCount: number]\>

#### Inherited from

Model.update

#### Defined in

node_modules/sequelize/types/model.d.ts:2487

___

### upsert

▸ `Static` **upsert**<`M`\>(`this`, `values`, `options?`): `Promise`<[`M`, ``null`` \| `boolean`]\>

Insert or update a single row. An update will be executed if a row which matches the supplied values on
either the primary key or a unique key is found. Note that the unique index must be defined in your
sequelize model and not just in the table. Otherwise you may experience a unique constraint violation,
because sequelize fails to identify the row that should be updated.

**Implementation details:**

* MySQL - Implemented as a single query `INSERT values ON DUPLICATE KEY UPDATE values`
* PostgreSQL - Implemented as a temporary function with exception handling: INSERT EXCEPTION WHEN
  unique_constraint UPDATE
* SQLite - Implemented as two queries `INSERT; UPDATE`. This means that the update is executed
regardless
  of whether the row already existed or not

**Note** that SQLite returns null for created, no matter if the row was created or updated. This is
because SQLite always runs INSERT OR IGNORE + UPDATE, in a single query, so there is no way to know
whether the row was inserted or not.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `M` | extends `Model`<`any`, `any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `ModelStatic`<`M`\> |
| `values` | `MakeNullishOptional`<`M`[``"_creationAttributes"``]\> |
| `options?` | `UpsertOptions`<`Attributes`<`M`\>\> |

#### Returns

`Promise`<[`M`, ``null`` \| `boolean`]\>

#### Inherited from

Model.upsert

#### Defined in

node_modules/sequelize/types/model.d.ts:2419
