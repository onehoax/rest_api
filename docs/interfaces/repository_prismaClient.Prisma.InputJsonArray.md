[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / InputJsonArray

# Interface: InputJsonArray

[repository/prismaClient](../modules/repository_prismaClient.md).[Prisma](../modules/repository_prismaClient.Prisma.md).InputJsonArray

Matches a JSON array.
Unlike `JsonArray`, readonly arrays are assignable to this type.

## Hierarchy

- `ReadonlyArray`<[`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) \| ``null``\>

  ↳ **`InputJsonArray`**

## Table of contents

### Properties

- [[unscopables]](repository_prismaClient.Prisma.InputJsonArray.md#[unscopables])
- [length](repository_prismaClient.Prisma.InputJsonArray.md#length)

### Methods

- [[iterator]](repository_prismaClient.Prisma.InputJsonArray.md#[iterator])
- [at](repository_prismaClient.Prisma.InputJsonArray.md#at)
- [concat](repository_prismaClient.Prisma.InputJsonArray.md#concat)
- [entries](repository_prismaClient.Prisma.InputJsonArray.md#entries)
- [every](repository_prismaClient.Prisma.InputJsonArray.md#every)
- [filter](repository_prismaClient.Prisma.InputJsonArray.md#filter)
- [find](repository_prismaClient.Prisma.InputJsonArray.md#find)
- [findIndex](repository_prismaClient.Prisma.InputJsonArray.md#findindex)
- [findLast](repository_prismaClient.Prisma.InputJsonArray.md#findlast)
- [findLastIndex](repository_prismaClient.Prisma.InputJsonArray.md#findlastindex)
- [flat](repository_prismaClient.Prisma.InputJsonArray.md#flat)
- [flatMap](repository_prismaClient.Prisma.InputJsonArray.md#flatmap)
- [forEach](repository_prismaClient.Prisma.InputJsonArray.md#foreach)
- [includes](repository_prismaClient.Prisma.InputJsonArray.md#includes)
- [indexOf](repository_prismaClient.Prisma.InputJsonArray.md#indexof)
- [join](repository_prismaClient.Prisma.InputJsonArray.md#join)
- [keys](repository_prismaClient.Prisma.InputJsonArray.md#keys)
- [lastIndexOf](repository_prismaClient.Prisma.InputJsonArray.md#lastindexof)
- [map](repository_prismaClient.Prisma.InputJsonArray.md#map)
- [reduce](repository_prismaClient.Prisma.InputJsonArray.md#reduce)
- [reduceRight](repository_prismaClient.Prisma.InputJsonArray.md#reduceright)
- [slice](repository_prismaClient.Prisma.InputJsonArray.md#slice)
- [some](repository_prismaClient.Prisma.InputJsonArray.md#some)
- [toLocaleString](repository_prismaClient.Prisma.InputJsonArray.md#tolocalestring)
- [toReversed](repository_prismaClient.Prisma.InputJsonArray.md#toreversed)
- [toSorted](repository_prismaClient.Prisma.InputJsonArray.md#tosorted)
- [toSpliced](repository_prismaClient.Prisma.InputJsonArray.md#tospliced)
- [toString](repository_prismaClient.Prisma.InputJsonArray.md#tostring)
- [values](repository_prismaClient.Prisma.InputJsonArray.md#values)
- [with](repository_prismaClient.Prisma.InputJsonArray.md#with)

## Properties

### [unscopables]

• `Readonly` **[unscopables]**: `Object`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `[unscopables]?` | `boolean` | Is an object whose properties have the value 'true' when they will be absent when used in a 'with' statement. |
| `length?` | `boolean` | Gets the length of the array. This is a number one higher than the highest element defined in an array. |
| `[iterator]?` | {} | - |
| `at?` | {} | - |
| `concat?` | {} | - |
| `entries?` | {} | - |
| `every?` | {} | - |
| `filter?` | {} | - |
| `find?` | {} | - |
| `findIndex?` | {} | - |
| `findLast?` | {} | - |
| `findLastIndex?` | {} | - |
| `flat?` | {} | - |
| `flatMap?` | {} | - |
| `forEach?` | {} | - |
| `includes?` | {} | - |
| `indexOf?` | {} | - |
| `join?` | {} | - |
| `keys?` | {} | - |
| `lastIndexOf?` | {} | - |
| `map?` | {} | - |
| `reduce?` | {} | - |
| `reduceRight?` | {} | - |
| `slice?` | {} | - |
| `some?` | {} | - |
| `toLocaleString?` | {} | - |
| `toReversed?` | {} | - |
| `toSorted?` | {} | - |
| `toSpliced?` | {} | - |
| `toString?` | {} | - |
| `values?` | {} | - |
| `with?` | {} | - |

#### Inherited from

ReadonlyArray.[unscopables]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:107

___

### length

• `Readonly` **length**: `number`

Gets the length of the array. This is a number one higher than the highest element defined in an array.

#### Inherited from

ReadonlyArray.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1184

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)\>

Iterator of values in the array.

#### Returns

`IterableIterator`<``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)\>

#### Inherited from

ReadonlyArray.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:94

___

### at

▸ **at**(`index`): `undefined` \| ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

Returns the item located at the specified index.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The zero-based index of the desired code unit. A negative index will count back from the last item. |

#### Returns

`undefined` \| ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

#### Inherited from

ReadonlyArray.at

#### Defined in

node_modules/typescript/lib/lib.es2022.array.d.ts:32

___

### concat

▸ **concat**(`...items`): (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

Combines two or more arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)\>[] | Additional items to add to the end of array1. |

#### Returns

(``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

#### Inherited from

ReadonlyArray.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1197

▸ **concat**(`...items`): (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

Combines two or more arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) \| `ConcatArray`<``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)\>)[] | Additional items to add to the end of array1. |

#### Returns

(``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

#### Inherited from

ReadonlyArray.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1202

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)]\>

#### Inherited from

ReadonlyArray.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:99

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is readonly S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is readonly S[]

#### Inherited from

ReadonlyArray.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1234

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

ReadonlyArray.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1243

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

ReadonlyArray.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1270

▸ **filter**(`predicate`, `thisArg?`): (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

(``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

#### Inherited from

ReadonlyArray.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1276

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `obj`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

ReadonlyArray.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:350

▸ **find**(`predicate`, `thisArg?`): `undefined` \| ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `obj`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

#### Inherited from

ReadonlyArray.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:351

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `obj`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

ReadonlyArray.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:362

___

### findLast

▸ **findLast**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the last element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => value is S | findLast calls predicate once for each element of the array, in descending order, until it finds one where predicate returns true. If such an element is found, findLast immediately returns that element value. Otherwise, findLast returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

ReadonlyArray.findLast

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:98

▸ **findLast**(`predicate`, `thisArg?`): `undefined` \| ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

#### Inherited from

ReadonlyArray.findLast

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:102

___

### findLastIndex

▸ **findLastIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the last element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `unknown` | findLastIndex calls predicate once for each element of the array, in descending order, until it finds one where predicate returns true. If such an element is found, findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

ReadonlyArray.findLastIndex

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:116

___

### flat

▸ **flat**<`A`, `D`\>(`this`, `depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`<`A`, `D`\>[]

#### Inherited from

ReadonlyArray.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:50

___

### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: `This`, `value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `array`: (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

ReadonlyArray.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:38

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

ReadonlyArray.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1258

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

ReadonlyArray.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:34

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

ReadonlyArray.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1219

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

ReadonlyArray.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1207

___

### keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

ReadonlyArray.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:104

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

ReadonlyArray.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1225

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

ReadonlyArray.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1264

___

### reduce

▸ **reduce**(`callbackfn`): ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `currentValue`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `currentIndex`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

#### Inherited from

ReadonlyArray.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1282

▸ **reduce**(`callbackfn`, `initialValue`): ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `currentValue`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `currentIndex`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) |
| `initialValue` | ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) |

#### Returns

``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

#### Inherited from

ReadonlyArray.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1283

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `currentIndex`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

ReadonlyArray.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1289

___

### reduceRight

▸ **reduceRight**(`callbackfn`): ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `currentValue`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `currentIndex`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

#### Inherited from

ReadonlyArray.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1295

▸ **reduceRight**(`callbackfn`, `initialValue`): ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `currentValue`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `currentIndex`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) |
| `initialValue` | ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) |

#### Returns

``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)

#### Inherited from

ReadonlyArray.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1296

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `currentIndex`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

ReadonlyArray.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1302

___

### slice

▸ **slice**(`start?`, `end?`): (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

Returns a section of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning of the specified portion of the array. |
| `end?` | `number` | The end of the specified portion of the array. This is exclusive of the element at the index 'end'. |

#### Returns

(``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

#### Inherited from

ReadonlyArray.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1213

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `index`: `number`, `array`: readonly (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

ReadonlyArray.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1252

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

ReadonlyArray.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1192

___

### toReversed

▸ **toReversed**(): (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

Copies the array and returns the copied array with all of its elements reversed.

#### Returns

(``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

#### Inherited from

ReadonlyArray.toReversed

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:124

___

### toSorted

▸ **toSorted**(`compareFn?`): (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

Copies and sorts the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue), `b`: ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11, 2, 22, 1].toSorted((a, b) => a - b) // [1, 2, 11, 22] ``` |

#### Returns

(``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

#### Inherited from

ReadonlyArray.toSorted

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:135

___

### toSpliced

▸ **toSpliced**(`start`, `deleteCount`, `...items`): (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

Copies an array and removes elements while, if necessary, inserting new elements in their place, returning the remaining elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[] | Elements to insert into the copied array in place of the deleted elements. |

#### Returns

(``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

A copy of the original array with the remaining elements.

#### Inherited from

ReadonlyArray.toSpliced

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:144

▸ **toSpliced**(`start`, `deleteCount?`): (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

Copies an array and removes elements while returning the remaining elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

(``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

A copy of the original array with the remaining elements.

#### Inherited from

ReadonlyArray.toSpliced

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:152

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

ReadonlyArray.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1188

___

### values

▸ **values**(): `IterableIterator`<``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue)\>

#### Inherited from

ReadonlyArray.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:109

___

### with

▸ **with**(`index`, `value`): (``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

Copies an array, then overwrites the value at the provided index with the
given value. If the index is negative, then it replaces from the end
of the array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | The index of the value to overwrite. If the index is negative, then it replaces from the end of the array. |
| `value` | ``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue) | The value to insert into the copied array. |

#### Returns

(``null`` \| [`InputJsonValue`](../modules/repository_prismaClient.Prisma.md#inputjsonvalue))[]

A copy of the original array with the inserted value.

#### Inherited from

ReadonlyArray.with

#### Defined in

node_modules/typescript/lib/lib.es2023.array.d.ts:163
