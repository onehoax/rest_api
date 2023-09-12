[@onehoax/rest-api](../README.md) / [repository/prismaClient](repository_prismaClient.md) / [Prisma](repository_prismaClient.Prisma.md) / DMMF

# Namespace: DMMF

[repository/prismaClient](repository_prismaClient.md).[Prisma](repository_prismaClient.Prisma.md).DMMF

## Table of contents

### Enumerations

- [ModelAction](../enums/repository_prismaClient.Prisma.DMMF.ModelAction.md)

### Interfaces

- [Datamodel](../interfaces/repository_prismaClient.Prisma.DMMF.Datamodel.md)
- [DatamodelEnum](../interfaces/repository_prismaClient.Prisma.DMMF.DatamodelEnum.md)
- [Deprecation](../interfaces/repository_prismaClient.Prisma.DMMF.Deprecation.md)
- [Document](../interfaces/repository_prismaClient.Prisma.DMMF.Document.md)
- [EnumValue](../interfaces/repository_prismaClient.Prisma.DMMF.EnumValue.md)
- [Field](../interfaces/repository_prismaClient.Prisma.DMMF.Field.md)
- [FieldDefault](../interfaces/repository_prismaClient.Prisma.DMMF.FieldDefault.md)
- [FieldRefType](../interfaces/repository_prismaClient.Prisma.DMMF.FieldRefType.md)
- [InputType](../interfaces/repository_prismaClient.Prisma.DMMF.InputType.md)
- [Mappings](../interfaces/repository_prismaClient.Prisma.DMMF.Mappings.md)
- [Model](../interfaces/repository_prismaClient.Prisma.DMMF.Model.md)
- [ModelMapping](../interfaces/repository_prismaClient.Prisma.DMMF.ModelMapping.md)
- [OtherOperationMappings](../interfaces/repository_prismaClient.Prisma.DMMF.OtherOperationMappings.md)
- [OutputType](../interfaces/repository_prismaClient.Prisma.DMMF.OutputType.md)
- [PrimaryKey](../interfaces/repository_prismaClient.Prisma.DMMF.PrimaryKey.md)
- [Query](../interfaces/repository_prismaClient.Prisma.DMMF.Query.md)
- [QueryOutput](../interfaces/repository_prismaClient.Prisma.DMMF.QueryOutput.md)
- [Schema](../interfaces/repository_prismaClient.Prisma.DMMF.Schema.md)
- [SchemaArg](../interfaces/repository_prismaClient.Prisma.DMMF.SchemaArg.md)
- [SchemaArgInputType](../interfaces/repository_prismaClient.Prisma.DMMF.SchemaArgInputType.md)
- [SchemaEnum](../interfaces/repository_prismaClient.Prisma.DMMF.SchemaEnum.md)
- [SchemaField](../interfaces/repository_prismaClient.Prisma.DMMF.SchemaField.md)
- [uniqueIndex](../interfaces/repository_prismaClient.Prisma.DMMF.uniqueIndex.md)

### Type Aliases

- [ArgType](repository_prismaClient.Prisma.DMMF.md#argtype)
- [FieldDefaultScalar](repository_prismaClient.Prisma.DMMF.md#fielddefaultscalar)
- [FieldKind](repository_prismaClient.Prisma.DMMF.md#fieldkind)
- [FieldLocation](repository_prismaClient.Prisma.DMMF.md#fieldlocation)
- [FieldNamespace](repository_prismaClient.Prisma.DMMF.md#fieldnamespace)
- [FieldRefAllowType](repository_prismaClient.Prisma.DMMF.md#fieldrefallowtype)
- [OutputTypeRef](repository_prismaClient.Prisma.DMMF.md#outputtyperef)
- [TypeRefCommon](repository_prismaClient.Prisma.DMMF.md#typerefcommon)
- [TypeRefEnum](repository_prismaClient.Prisma.DMMF.md#typerefenum)
- [TypeRefOutputObject](repository_prismaClient.Prisma.DMMF.md#typerefoutputobject)
- [TypeRefScalar](repository_prismaClient.Prisma.DMMF.md#typerefscalar)

## Type Aliases

### ArgType

Ƭ **ArgType**: `string` \| [`InputType`](../interfaces/repository_prismaClient.Prisma.DMMF.InputType.md) \| [`SchemaEnum`](../interfaces/repository_prismaClient.Prisma.DMMF.SchemaEnum.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:647

___

### FieldDefaultScalar

Ƭ **FieldDefaultScalar**: `string` \| `boolean` \| `number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:617

___

### FieldKind

Ƭ **FieldKind**: ``"scalar"`` \| ``"object"`` \| ``"enum"`` \| ``"unsupported"``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:585

___

### FieldLocation

Ƭ **FieldLocation**: ``"scalar"`` \| ``"inputObjectTypes"`` \| ``"outputObjectTypes"`` \| ``"enumTypes"`` \| ``"fieldRefTypes"``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:587

___

### FieldNamespace

Ƭ **FieldNamespace**: ``"model"`` \| ``"prisma"``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:586

___

### FieldRefAllowType

Ƭ **FieldRefAllowType**: [`TypeRefScalar`](repository_prismaClient.Prisma.DMMF.md#typerefscalar) \| [`TypeRefEnum`](repository_prismaClient.Prisma.DMMF.md#typerefenum)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:715

___

### OutputTypeRef

Ƭ **OutputTypeRef**: [`TypeRefScalar`](repository_prismaClient.Prisma.DMMF.md#typerefscalar) \| [`TypeRefOutputObject`](repository_prismaClient.Prisma.DMMF.md#typerefoutputobject) \| [`TypeRefEnum`](repository_prismaClient.Prisma.DMMF.md#typerefenum)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:691

___

### TypeRefCommon

Ƭ **TypeRefCommon**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `isList` | `boolean` |
| `namespace?` | [`FieldNamespace`](repository_prismaClient.Prisma.DMMF.md#fieldnamespace) |

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:675

___

### TypeRefEnum

Ƭ **TypeRefEnum**: [`TypeRefCommon`](repository_prismaClient.Prisma.DMMF.md#typerefcommon) & { `location`: ``"enumTypes"`` ; `type`: [`SchemaEnum`](../interfaces/repository_prismaClient.Prisma.DMMF.SchemaEnum.md) \| `string`  }

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:687

___

### TypeRefOutputObject

Ƭ **TypeRefOutputObject**: [`TypeRefCommon`](repository_prismaClient.Prisma.DMMF.md#typerefcommon) & { `location`: ``"outputObjectTypes"`` ; `type`: [`OutputType`](../interfaces/repository_prismaClient.Prisma.DMMF.OutputType.md) \| `string`  }

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:683

___

### TypeRefScalar

Ƭ **TypeRefScalar**: [`TypeRefCommon`](repository_prismaClient.Prisma.DMMF.md#typerefcommon) & { `location`: ``"scalar"`` ; `type`: `string`  }

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:679
