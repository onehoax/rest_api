[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / [DMMF](../modules/repository_prismaClient.Prisma.DMMF.md) / InputType

# Interface: InputType

[Prisma](../modules/repository_prismaClient.Prisma.md).[DMMF](../modules/repository_prismaClient.Prisma.DMMF.md).InputType

## Table of contents

### Properties

- [constraints](repository_prismaClient.Prisma.DMMF.InputType.md#constraints)
- [fieldMap](repository_prismaClient.Prisma.DMMF.InputType.md#fieldmap)
- [fields](repository_prismaClient.Prisma.DMMF.InputType.md#fields)
- [meta](repository_prismaClient.Prisma.DMMF.InputType.md#meta)
- [name](repository_prismaClient.Prisma.DMMF.InputType.md#name)

## Properties

### constraints

• **constraints**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fields?` | `string`[] |
| `maxNumFields` | ``null`` \| `number` |
| `minNumFields` | ``null`` \| `number` |

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:699

___

### fieldMap

• `Optional` **fieldMap**: `Record`<`string`, [`SchemaArg`](repository_prismaClient.Prisma.DMMF.SchemaArg.md)\>

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:708

___

### fields

• **fields**: [`SchemaArg`](repository_prismaClient.Prisma.DMMF.SchemaArg.md)[]

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:707

___

### meta

• `Optional` **meta**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `source?` | `string` |

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:704

___

### name

• **name**: `string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:698
