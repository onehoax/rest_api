[@onehoax/rest-api](../README.md) / utils/error

# Module: utils/error

## Table of contents

### Classes

- [MyError](../classes/utils_error.MyError.md)

### Variables

- [invalidRequest](utils_error.md#invalidrequest)
- [resourceExists](utils_error.md#resourceexists)
- [unableToDelete](utils_error.md#unabletodelete)
- [unableToFind](utils_error.md#unabletofind)
- [unableToInsert](utils_error.md#unabletoinsert)
- [unableToUpdate](utils_error.md#unabletoupdate)

### Functions

- [baseLog](utils_error.md#baselog)
- [handleRepositoryError](utils_error.md#handlerepositoryerror)
- [handleTopLevelError](utils_error.md#handletoplevelerror)

## Variables

### invalidRequest

• `Const` **invalidRequest**: `string` = `"INVALID REQUEST"`

#### Defined in

[src/utils/error.ts:35](https://github.com/onehoax/rest_api/blob/42e98b1/src/utils/error.ts#L35)

___

### resourceExists

• `Const` **resourceExists**: `string` = `"DB RESOURCE ALREADY EXISTS"`

#### Defined in

[src/utils/error.ts:34](https://github.com/onehoax/rest_api/blob/42e98b1/src/utils/error.ts#L34)

___

### unableToDelete

• `Const` **unableToDelete**: `string` = `"DB UNABLE TO DELETE RECORD"`

#### Defined in

[src/utils/error.ts:33](https://github.com/onehoax/rest_api/blob/42e98b1/src/utils/error.ts#L33)

___

### unableToFind

• `Const` **unableToFind**: `string` = `"DB UNABLE TO FIND RECORD"`

#### Defined in

[src/utils/error.ts:31](https://github.com/onehoax/rest_api/blob/42e98b1/src/utils/error.ts#L31)

___

### unableToInsert

• `Const` **unableToInsert**: `string` = `"DB UNABLE TO INSERT RECORD"`

#### Defined in

[src/utils/error.ts:30](https://github.com/onehoax/rest_api/blob/42e98b1/src/utils/error.ts#L30)

___

### unableToUpdate

• `Const` **unableToUpdate**: `string` = `"DB UNABLE TO UPDATE RECORD"`

#### Defined in

[src/utils/error.ts:32](https://github.com/onehoax/rest_api/blob/42e98b1/src/utils/error.ts#L32)

## Functions

### baseLog

▸ **baseLog**(`file`, `func`, `source?`): `string`

Base log message identifying the file and function in which it originated

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | File in which error originates |
| `func` | `string` | Function in which error originates |
| `source?` | `string` | - |

#### Returns

`string`

Generic log message identifying the file and function in which it originated

#### Defined in

[src/utils/error.ts:46](https://github.com/onehoax/rest_api/blob/42e98b1/src/utils/error.ts#L46)

___

### handleRepositoryError

▸ **handleRepositoryError**(`e`): [`MyError`](../classes/utils_error.MyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `unknown` |

#### Returns

[`MyError`](../classes/utils_error.MyError.md)

#### Defined in

[src/utils/error.ts:77](https://github.com/onehoax/rest_api/blob/42e98b1/src/utils/error.ts#L77)

___

### handleTopLevelError

▸ **handleTopLevelError**(`e`, `_req`, `res`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`MyError`](../classes/utils_error.MyError.md) |
| `_req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `Response`<`any`, `Record`<`string`, `any`\>\> |
| `next` | `NextFunction` |

#### Returns

`void`

#### Defined in

[src/utils/error.ts:93](https://github.com/onehoax/rest_api/blob/42e98b1/src/utils/error.ts#L93)
