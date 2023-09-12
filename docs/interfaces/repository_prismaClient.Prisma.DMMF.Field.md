[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / [DMMF](../modules/repository_prismaClient.Prisma.DMMF.md) / Field

# Interface: Field

[Prisma](../modules/repository_prismaClient.Prisma.md).[DMMF](../modules/repository_prismaClient.Prisma.DMMF.md).Field

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [dbName](repository_prismaClient.Prisma.DMMF.Field.md#dbname)
- [default](repository_prismaClient.Prisma.DMMF.Field.md#default)
- [documentation](repository_prismaClient.Prisma.DMMF.Field.md#documentation)
- [hasDefaultValue](repository_prismaClient.Prisma.DMMF.Field.md#hasdefaultvalue)
- [isGenerated](repository_prismaClient.Prisma.DMMF.Field.md#isgenerated)
- [isId](repository_prismaClient.Prisma.DMMF.Field.md#isid)
- [isList](repository_prismaClient.Prisma.DMMF.Field.md#islist)
- [isReadOnly](repository_prismaClient.Prisma.DMMF.Field.md#isreadonly)
- [isRequired](repository_prismaClient.Prisma.DMMF.Field.md#isrequired)
- [isUnique](repository_prismaClient.Prisma.DMMF.Field.md#isunique)
- [isUpdatedAt](repository_prismaClient.Prisma.DMMF.Field.md#isupdatedat)
- [kind](repository_prismaClient.Prisma.DMMF.Field.md#kind)
- [name](repository_prismaClient.Prisma.DMMF.Field.md#name)
- [relationFromFields](repository_prismaClient.Prisma.DMMF.Field.md#relationfromfields)
- [relationName](repository_prismaClient.Prisma.DMMF.Field.md#relationname)
- [relationOnDelete](repository_prismaClient.Prisma.DMMF.Field.md#relationondelete)
- [relationToFields](repository_prismaClient.Prisma.DMMF.Field.md#relationtofields)
- [type](repository_prismaClient.Prisma.DMMF.Field.md#type)

## Properties

### dbName

• `Optional` **dbName**: ``null`` \| `string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:603

___

### default

• `Optional` **default**: [`FieldDefault`](repository_prismaClient.Prisma.DMMF.FieldDefault.md) \| [`FieldDefaultScalar`](../modules/repository_prismaClient.Prisma.DMMF.md#fielddefaultscalar) \| [`FieldDefaultScalar`](../modules/repository_prismaClient.Prisma.DMMF.md#fielddefaultscalar)[]

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:605

___

### documentation

• `Optional` **documentation**: `string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:610

___

### hasDefaultValue

• **hasDefaultValue**: `boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:604

___

### isGenerated

• `Optional` **isGenerated**: `boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:596

___

### isId

• **isId**: `boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:594

___

### isList

• **isList**: `boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:592

___

### isReadOnly

• **isReadOnly**: `boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:595

___

### isRequired

• **isRequired**: `boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:591

___

### isUnique

• **isUnique**: `boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:593

___

### isUpdatedAt

• `Optional` **isUpdatedAt**: `boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:597

___

### kind

• **kind**: [`FieldKind`](../modules/repository_prismaClient.Prisma.DMMF.md#fieldkind)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:589

___

### name

• **name**: `string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:590

___

### relationFromFields

• `Optional` **relationFromFields**: `string`[]

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:606

___

### relationName

• `Optional` **relationName**: `string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:609

___

### relationOnDelete

• `Optional` **relationOnDelete**: `string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:608

___

### relationToFields

• `Optional` **relationToFields**: `any`[]

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:607

___

### type

• **type**: `string`

Describes the data type in the same the way it is defined in the Prisma schema:
BigInt, Boolean, Bytes, DateTime, Decimal, Float, Int, JSON, String, $ModelName

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:602
