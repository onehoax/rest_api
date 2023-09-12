[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / [DMMF](../modules/repository_prismaClient.Prisma.DMMF.md) / Schema

# Interface: Schema

[Prisma](../modules/repository_prismaClient.Prisma.md).[DMMF](../modules/repository_prismaClient.Prisma.DMMF.md).Schema

## Table of contents

### Properties

- [enumTypes](repository_prismaClient.Prisma.DMMF.Schema.md#enumtypes)
- [fieldRefTypes](repository_prismaClient.Prisma.DMMF.Schema.md#fieldreftypes)
- [inputObjectTypes](repository_prismaClient.Prisma.DMMF.Schema.md#inputobjecttypes)
- [outputObjectTypes](repository_prismaClient.Prisma.DMMF.Schema.md#outputobjecttypes)
- [rootMutationType](repository_prismaClient.Prisma.DMMF.Schema.md#rootmutationtype)
- [rootQueryType](repository_prismaClient.Prisma.DMMF.Schema.md#rootquerytype)

## Properties

### enumTypes

• **enumTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `model?` | [`SchemaEnum`](repository_prismaClient.Prisma.DMMF.SchemaEnum.md)[] |
| `prisma` | [`SchemaEnum`](repository_prismaClient.Prisma.DMMF.SchemaEnum.md)[] |

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:629

___

### fieldRefTypes

• **fieldRefTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prisma?` | [`FieldRefType`](repository_prismaClient.Prisma.DMMF.FieldRefType.md)[] |

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:633

___

### inputObjectTypes

• **inputObjectTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `model?` | [`InputType`](repository_prismaClient.Prisma.DMMF.InputType.md)[] |
| `prisma` | [`InputType`](repository_prismaClient.Prisma.DMMF.InputType.md)[] |

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:621

___

### outputObjectTypes

• **outputObjectTypes**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `model` | [`OutputType`](repository_prismaClient.Prisma.DMMF.OutputType.md)[] |
| `prisma` | [`OutputType`](repository_prismaClient.Prisma.DMMF.OutputType.md)[] |

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:625

___

### rootMutationType

• `Optional` **rootMutationType**: `string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:620

___

### rootQueryType

• `Optional` **rootQueryType**: `string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:619
