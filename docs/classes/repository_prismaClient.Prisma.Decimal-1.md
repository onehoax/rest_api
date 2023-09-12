[@onehoax/rest-api](../README.md) / [repository/prismaClient](../modules/repository_prismaClient.md) / [Prisma](../modules/repository_prismaClient.Prisma.md) / Decimal

# Class: Decimal

[repository/prismaClient](../modules/repository_prismaClient.md).[Prisma](../modules/repository_prismaClient.Prisma.md).Decimal

## Table of contents

### Constructors

- [constructor](repository_prismaClient.Prisma.Decimal-1.md#constructor)

### Properties

- [d](repository_prismaClient.Prisma.Decimal-1.md#d)
- [e](repository_prismaClient.Prisma.Decimal-1.md#e)
- [s](repository_prismaClient.Prisma.Decimal-1.md#s)
- [Decimal](repository_prismaClient.Prisma.Decimal-1.md#decimal)
- [EUCLID](repository_prismaClient.Prisma.Decimal-1.md#euclid)
- [ROUND\_CEIL](repository_prismaClient.Prisma.Decimal-1.md#round_ceil)
- [ROUND\_DOWN](repository_prismaClient.Prisma.Decimal-1.md#round_down)
- [ROUND\_FLOOR](repository_prismaClient.Prisma.Decimal-1.md#round_floor)
- [ROUND\_HALF\_CEIL](repository_prismaClient.Prisma.Decimal-1.md#round_half_ceil)
- [ROUND\_HALF\_DOWN](repository_prismaClient.Prisma.Decimal-1.md#round_half_down)
- [ROUND\_HALF\_EVEN](repository_prismaClient.Prisma.Decimal-1.md#round_half_even)
- [ROUND\_HALF\_FLOOR](repository_prismaClient.Prisma.Decimal-1.md#round_half_floor)
- [ROUND\_HALF\_UP](repository_prismaClient.Prisma.Decimal-1.md#round_half_up)
- [ROUND\_UP](repository_prismaClient.Prisma.Decimal-1.md#round_up)
- [crypto](repository_prismaClient.Prisma.Decimal-1.md#crypto)
- [default](repository_prismaClient.Prisma.Decimal-1.md#default)
- [maxE](repository_prismaClient.Prisma.Decimal-1.md#maxe)
- [minE](repository_prismaClient.Prisma.Decimal-1.md#mine)
- [modulo](repository_prismaClient.Prisma.Decimal-1.md#modulo)
- [precision](repository_prismaClient.Prisma.Decimal-1.md#precision)
- [rounding](repository_prismaClient.Prisma.Decimal-1.md#rounding)
- [toExpNeg](repository_prismaClient.Prisma.Decimal-1.md#toexpneg)
- [toExpPos](repository_prismaClient.Prisma.Decimal-1.md#toexppos)

### Methods

- [abs](repository_prismaClient.Prisma.Decimal-1.md#abs)
- [absoluteValue](repository_prismaClient.Prisma.Decimal-1.md#absolutevalue)
- [acos](repository_prismaClient.Prisma.Decimal-1.md#acos)
- [acosh](repository_prismaClient.Prisma.Decimal-1.md#acosh)
- [add](repository_prismaClient.Prisma.Decimal-1.md#add)
- [asin](repository_prismaClient.Prisma.Decimal-1.md#asin)
- [asinh](repository_prismaClient.Prisma.Decimal-1.md#asinh)
- [atan](repository_prismaClient.Prisma.Decimal-1.md#atan)
- [atanh](repository_prismaClient.Prisma.Decimal-1.md#atanh)
- [cbrt](repository_prismaClient.Prisma.Decimal-1.md#cbrt)
- [ceil](repository_prismaClient.Prisma.Decimal-1.md#ceil)
- [clamp](repository_prismaClient.Prisma.Decimal-1.md#clamp)
- [clampedTo](repository_prismaClient.Prisma.Decimal-1.md#clampedto)
- [cmp](repository_prismaClient.Prisma.Decimal-1.md#cmp)
- [comparedTo](repository_prismaClient.Prisma.Decimal-1.md#comparedto)
- [cos](repository_prismaClient.Prisma.Decimal-1.md#cos)
- [cosh](repository_prismaClient.Prisma.Decimal-1.md#cosh)
- [cosine](repository_prismaClient.Prisma.Decimal-1.md#cosine)
- [cubeRoot](repository_prismaClient.Prisma.Decimal-1.md#cuberoot)
- [decimalPlaces](repository_prismaClient.Prisma.Decimal-1.md#decimalplaces)
- [div](repository_prismaClient.Prisma.Decimal-1.md#div)
- [divToInt](repository_prismaClient.Prisma.Decimal-1.md#divtoint)
- [dividedBy](repository_prismaClient.Prisma.Decimal-1.md#dividedby)
- [dividedToIntegerBy](repository_prismaClient.Prisma.Decimal-1.md#dividedtointegerby)
- [dp](repository_prismaClient.Prisma.Decimal-1.md#dp)
- [eq](repository_prismaClient.Prisma.Decimal-1.md#eq)
- [equals](repository_prismaClient.Prisma.Decimal-1.md#equals)
- [exp](repository_prismaClient.Prisma.Decimal-1.md#exp)
- [floor](repository_prismaClient.Prisma.Decimal-1.md#floor)
- [greaterThan](repository_prismaClient.Prisma.Decimal-1.md#greaterthan)
- [greaterThanOrEqualTo](repository_prismaClient.Prisma.Decimal-1.md#greaterthanorequalto)
- [gt](repository_prismaClient.Prisma.Decimal-1.md#gt)
- [gte](repository_prismaClient.Prisma.Decimal-1.md#gte)
- [hyperbolicCosine](repository_prismaClient.Prisma.Decimal-1.md#hyperboliccosine)
- [hyperbolicSine](repository_prismaClient.Prisma.Decimal-1.md#hyperbolicsine)
- [hyperbolicTangent](repository_prismaClient.Prisma.Decimal-1.md#hyperbolictangent)
- [inverseCosine](repository_prismaClient.Prisma.Decimal-1.md#inversecosine)
- [inverseHyperbolicCosine](repository_prismaClient.Prisma.Decimal-1.md#inversehyperboliccosine)
- [inverseHyperbolicSine](repository_prismaClient.Prisma.Decimal-1.md#inversehyperbolicsine)
- [inverseHyperbolicTangent](repository_prismaClient.Prisma.Decimal-1.md#inversehyperbolictangent)
- [inverseSine](repository_prismaClient.Prisma.Decimal-1.md#inversesine)
- [inverseTangent](repository_prismaClient.Prisma.Decimal-1.md#inversetangent)
- [isFinite](repository_prismaClient.Prisma.Decimal-1.md#isfinite)
- [isInt](repository_prismaClient.Prisma.Decimal-1.md#isint)
- [isInteger](repository_prismaClient.Prisma.Decimal-1.md#isinteger)
- [isNaN](repository_prismaClient.Prisma.Decimal-1.md#isnan)
- [isNeg](repository_prismaClient.Prisma.Decimal-1.md#isneg)
- [isNegative](repository_prismaClient.Prisma.Decimal-1.md#isnegative)
- [isPos](repository_prismaClient.Prisma.Decimal-1.md#ispos)
- [isPositive](repository_prismaClient.Prisma.Decimal-1.md#ispositive)
- [isZero](repository_prismaClient.Prisma.Decimal-1.md#iszero)
- [lessThan](repository_prismaClient.Prisma.Decimal-1.md#lessthan)
- [lessThanOrEqualTo](repository_prismaClient.Prisma.Decimal-1.md#lessthanorequalto)
- [ln](repository_prismaClient.Prisma.Decimal-1.md#ln)
- [log](repository_prismaClient.Prisma.Decimal-1.md#log)
- [logarithm](repository_prismaClient.Prisma.Decimal-1.md#logarithm)
- [lt](repository_prismaClient.Prisma.Decimal-1.md#lt)
- [lte](repository_prismaClient.Prisma.Decimal-1.md#lte)
- [minus](repository_prismaClient.Prisma.Decimal-1.md#minus)
- [mod](repository_prismaClient.Prisma.Decimal-1.md#mod)
- [modulo](repository_prismaClient.Prisma.Decimal-1.md#modulo-1)
- [mul](repository_prismaClient.Prisma.Decimal-1.md#mul)
- [naturalExponential](repository_prismaClient.Prisma.Decimal-1.md#naturalexponential)
- [naturalLogarithm](repository_prismaClient.Prisma.Decimal-1.md#naturallogarithm)
- [neg](repository_prismaClient.Prisma.Decimal-1.md#neg)
- [negated](repository_prismaClient.Prisma.Decimal-1.md#negated)
- [plus](repository_prismaClient.Prisma.Decimal-1.md#plus)
- [pow](repository_prismaClient.Prisma.Decimal-1.md#pow)
- [precision](repository_prismaClient.Prisma.Decimal-1.md#precision-1)
- [round](repository_prismaClient.Prisma.Decimal-1.md#round)
- [sd](repository_prismaClient.Prisma.Decimal-1.md#sd)
- [sin](repository_prismaClient.Prisma.Decimal-1.md#sin)
- [sine](repository_prismaClient.Prisma.Decimal-1.md#sine)
- [sinh](repository_prismaClient.Prisma.Decimal-1.md#sinh)
- [sqrt](repository_prismaClient.Prisma.Decimal-1.md#sqrt)
- [squareRoot](repository_prismaClient.Prisma.Decimal-1.md#squareroot)
- [sub](repository_prismaClient.Prisma.Decimal-1.md#sub)
- [tan](repository_prismaClient.Prisma.Decimal-1.md#tan)
- [tangent](repository_prismaClient.Prisma.Decimal-1.md#tangent)
- [tanh](repository_prismaClient.Prisma.Decimal-1.md#tanh)
- [times](repository_prismaClient.Prisma.Decimal-1.md#times)
- [toBinary](repository_prismaClient.Prisma.Decimal-1.md#tobinary)
- [toDP](repository_prismaClient.Prisma.Decimal-1.md#todp)
- [toDecimalPlaces](repository_prismaClient.Prisma.Decimal-1.md#todecimalplaces)
- [toExponential](repository_prismaClient.Prisma.Decimal-1.md#toexponential)
- [toFixed](repository_prismaClient.Prisma.Decimal-1.md#tofixed)
- [toFraction](repository_prismaClient.Prisma.Decimal-1.md#tofraction)
- [toHex](repository_prismaClient.Prisma.Decimal-1.md#tohex)
- [toHexadecimal](repository_prismaClient.Prisma.Decimal-1.md#tohexadecimal)
- [toJSON](repository_prismaClient.Prisma.Decimal-1.md#tojson)
- [toNearest](repository_prismaClient.Prisma.Decimal-1.md#tonearest)
- [toNumber](repository_prismaClient.Prisma.Decimal-1.md#tonumber)
- [toOctal](repository_prismaClient.Prisma.Decimal-1.md#tooctal)
- [toPower](repository_prismaClient.Prisma.Decimal-1.md#topower)
- [toPrecision](repository_prismaClient.Prisma.Decimal-1.md#toprecision)
- [toSD](repository_prismaClient.Prisma.Decimal-1.md#tosd)
- [toSignificantDigits](repository_prismaClient.Prisma.Decimal-1.md#tosignificantdigits)
- [toString](repository_prismaClient.Prisma.Decimal-1.md#tostring)
- [trunc](repository_prismaClient.Prisma.Decimal-1.md#trunc)
- [truncated](repository_prismaClient.Prisma.Decimal-1.md#truncated)
- [valueOf](repository_prismaClient.Prisma.Decimal-1.md#valueof)
- [abs](repository_prismaClient.Prisma.Decimal-1.md#abs-1)
- [acos](repository_prismaClient.Prisma.Decimal-1.md#acos-1)
- [acosh](repository_prismaClient.Prisma.Decimal-1.md#acosh-1)
- [add](repository_prismaClient.Prisma.Decimal-1.md#add-1)
- [asin](repository_prismaClient.Prisma.Decimal-1.md#asin-1)
- [asinh](repository_prismaClient.Prisma.Decimal-1.md#asinh-1)
- [atan](repository_prismaClient.Prisma.Decimal-1.md#atan-1)
- [atan2](repository_prismaClient.Prisma.Decimal-1.md#atan2)
- [atanh](repository_prismaClient.Prisma.Decimal-1.md#atanh-1)
- [cbrt](repository_prismaClient.Prisma.Decimal-1.md#cbrt-1)
- [ceil](repository_prismaClient.Prisma.Decimal-1.md#ceil-1)
- [clamp](repository_prismaClient.Prisma.Decimal-1.md#clamp-1)
- [clone](repository_prismaClient.Prisma.Decimal-1.md#clone)
- [config](repository_prismaClient.Prisma.Decimal-1.md#config)
- [cos](repository_prismaClient.Prisma.Decimal-1.md#cos-1)
- [cosh](repository_prismaClient.Prisma.Decimal-1.md#cosh-1)
- [div](repository_prismaClient.Prisma.Decimal-1.md#div-1)
- [exp](repository_prismaClient.Prisma.Decimal-1.md#exp-1)
- [floor](repository_prismaClient.Prisma.Decimal-1.md#floor-1)
- [hypot](repository_prismaClient.Prisma.Decimal-1.md#hypot)
- [isDecimal](repository_prismaClient.Prisma.Decimal-1.md#isdecimal)
- [ln](repository_prismaClient.Prisma.Decimal-1.md#ln-1)
- [log](repository_prismaClient.Prisma.Decimal-1.md#log-1)
- [log10](repository_prismaClient.Prisma.Decimal-1.md#log10)
- [log2](repository_prismaClient.Prisma.Decimal-1.md#log2)
- [max](repository_prismaClient.Prisma.Decimal-1.md#max)
- [min](repository_prismaClient.Prisma.Decimal-1.md#min)
- [mod](repository_prismaClient.Prisma.Decimal-1.md#mod-1)
- [mul](repository_prismaClient.Prisma.Decimal-1.md#mul-1)
- [noConflict](repository_prismaClient.Prisma.Decimal-1.md#noconflict)
- [pow](repository_prismaClient.Prisma.Decimal-1.md#pow-1)
- [random](repository_prismaClient.Prisma.Decimal-1.md#random)
- [round](repository_prismaClient.Prisma.Decimal-1.md#round-1)
- [set](repository_prismaClient.Prisma.Decimal-1.md#set)
- [sign](repository_prismaClient.Prisma.Decimal-1.md#sign)
- [sin](repository_prismaClient.Prisma.Decimal-1.md#sin-1)
- [sinh](repository_prismaClient.Prisma.Decimal-1.md#sinh-1)
- [sqrt](repository_prismaClient.Prisma.Decimal-1.md#sqrt-1)
- [sub](repository_prismaClient.Prisma.Decimal-1.md#sub-1)
- [sum](repository_prismaClient.Prisma.Decimal-1.md#sum)
- [tan](repository_prismaClient.Prisma.Decimal-1.md#tan-1)
- [tanh](repository_prismaClient.Prisma.Decimal-1.md#tanh-1)
- [trunc](repository_prismaClient.Prisma.Decimal-1.md#trunc-1)

## Constructors

### constructor

• **new Decimal**(`n`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:258

## Properties

### d

• `Readonly` **d**: `number`[]

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:254

___

### e

• `Readonly` **e**: `number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:255

___

### s

• `Readonly` **s**: `number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:256

___

### Decimal

▪ `Static` `Optional` `Readonly` **Decimal**: typeof [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:476

___

### EUCLID

▪ `Static` `Readonly` **EUCLID**: ``9``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:496

___

### ROUND\_CEIL

▪ `Static` `Readonly` **ROUND\_CEIL**: ``2``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:489

___

### ROUND\_DOWN

▪ `Static` `Readonly` **ROUND\_DOWN**: ``1``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:488

___

### ROUND\_FLOOR

▪ `Static` `Readonly` **ROUND\_FLOOR**: ``3``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:490

___

### ROUND\_HALF\_CEIL

▪ `Static` `Readonly` **ROUND\_HALF\_CEIL**: ``7``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:494

___

### ROUND\_HALF\_DOWN

▪ `Static` `Readonly` **ROUND\_HALF\_DOWN**: ``5``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:492

___

### ROUND\_HALF\_EVEN

▪ `Static` `Readonly` **ROUND\_HALF\_EVEN**: ``6``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:493

___

### ROUND\_HALF\_FLOOR

▪ `Static` `Readonly` **ROUND\_HALF\_FLOOR**: ``8``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:495

___

### ROUND\_HALF\_UP

▪ `Static` `Readonly` **ROUND\_HALF\_UP**: ``4``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:491

___

### ROUND\_UP

▪ `Static` `Readonly` **ROUND\_UP**: ``0``

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:487

___

### crypto

▪ `Static` `Readonly` **crypto**: `boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:484

___

### default

▪ `Static` `Optional` `Readonly` **default**: typeof [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:475

___

### maxE

▪ `Static` `Readonly` **maxE**: `number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:483

___

### minE

▪ `Static` `Readonly` **minE**: `number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:482

___

### modulo

▪ `Static` `Readonly` **modulo**: [`Modulo`](../modules/repository_prismaClient.Prisma.Decimal.md#modulo)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:485

___

### precision

▪ `Static` `Readonly` **precision**: `number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:478

___

### rounding

▪ `Static` `Readonly` **rounding**: [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:479

___

### toExpNeg

▪ `Static` `Readonly` **toExpNeg**: `number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:480

___

### toExpPos

▪ `Static` `Readonly` **toExpPos**: `number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:481

## Methods

### abs

▸ **abs**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:261

___

### absoluteValue

▸ **absoluteValue**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:260

___

### acos

▸ **acos**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:307

___

### acosh

▸ **acosh**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:310

___

### add

▸ **add**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:364

___

### asin

▸ **asin**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:319

___

### asinh

▸ **asinh**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:313

___

### atan

▸ **atan**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:322

___

### atanh

▸ **atanh**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:316

___

### cbrt

▸ **cbrt**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:275

___

### ceil

▸ **ceil**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:263

___

### clamp

▸ **clamp**(`min`, `max`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `max` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:266

___

### clampedTo

▸ **clampedTo**(`min`, `max`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `max` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:265

___

### cmp

▸ **cmp**(`n`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:269

___

### comparedTo

▸ **comparedTo**(`n`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:268

___

### cos

▸ **cos**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:272

___

### cosh

▸ **cosh**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:298

___

### cosine

▸ **cosine**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:271

___

### cubeRoot

▸ **cubeRoot**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:274

___

### decimalPlaces

▸ **decimalPlaces**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:277

___

### div

▸ **div**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:281

___

### divToInt

▸ **divToInt**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:284

___

### dividedBy

▸ **dividedBy**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:280

___

### dividedToIntegerBy

▸ **dividedToIntegerBy**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:283

___

### dp

▸ **dp**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:278

___

### eq

▸ **eq**(`n`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:287

___

### equals

▸ **equals**(`n`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:286

___

### exp

▸ **exp**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:355

___

### floor

▸ **floor**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:289

___

### greaterThan

▸ **greaterThan**(`n`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:291

___

### greaterThanOrEqualTo

▸ **greaterThanOrEqualTo**(`n`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:294

___

### gt

▸ **gt**(`n`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:292

___

### gte

▸ **gte**(`n`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:295

___

### hyperbolicCosine

▸ **hyperbolicCosine**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:297

___

### hyperbolicSine

▸ **hyperbolicSine**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:300

___

### hyperbolicTangent

▸ **hyperbolicTangent**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:303

___

### inverseCosine

▸ **inverseCosine**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:306

___

### inverseHyperbolicCosine

▸ **inverseHyperbolicCosine**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:309

___

### inverseHyperbolicSine

▸ **inverseHyperbolicSine**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:312

___

### inverseHyperbolicTangent

▸ **inverseHyperbolicTangent**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:315

___

### inverseSine

▸ **inverseSine**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:318

___

### inverseTangent

▸ **inverseTangent**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:321

___

### isFinite

▸ **isFinite**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:324

___

### isInt

▸ **isInt**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:327

___

### isInteger

▸ **isInteger**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:326

___

### isNaN

▸ **isNaN**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:329

___

### isNeg

▸ **isNeg**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:332

___

### isNegative

▸ **isNegative**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:331

___

### isPos

▸ **isPos**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:335

___

### isPositive

▸ **isPositive**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:334

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:337

___

### lessThan

▸ **lessThan**(`n`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:339

___

### lessThanOrEqualTo

▸ **lessThanOrEqualTo**(`n`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:342

___

### ln

▸ **ln**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:358

___

### log

▸ **log**(`n?`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n?` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:346

___

### logarithm

▸ **logarithm**(`n?`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n?` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:345

___

### lt

▸ **lt**(`n`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:340

___

### lte

▸ **lte**(`n`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`boolean`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:343

___

### minus

▸ **minus**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:348

___

### mod

▸ **mod**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:352

___

### modulo

▸ **modulo**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:351

___

### mul

▸ **mul**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:381

___

### naturalExponential

▸ **naturalExponential**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:354

___

### naturalLogarithm

▸ **naturalLogarithm**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:357

___

### neg

▸ **neg**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:361

___

### negated

▸ **negated**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:360

___

### plus

▸ **plus**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:363

___

### pow

▸ **pow**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:414

___

### precision

▸ **precision**(`includeZeros?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `includeZeros?` | `boolean` |

#### Returns

`number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:366

___

### round

▸ **round**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:369

___

### sd

▸ **sd**(`includeZeros?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `includeZeros?` | `boolean` |

#### Returns

`number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:367

___

### sin

▸ **sin**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:372

___

### sine

▸ **sine**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:371

___

### sinh

▸ **sinh**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:301

___

### sqrt

▸ **sqrt**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:375

___

### squareRoot

▸ **squareRoot**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:374

___

### sub

▸ **sub**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:349

___

### tan

▸ **tan**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:378

___

### tangent

▸ **tangent**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:377

___

### tanh

▸ **tanh**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:304

___

### times

▸ **times**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:380

___

### toBinary

▸ **toBinary**(`significantDigits?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:383

▸ **toBinary**(`significantDigits`, `rounding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits` | `number` |
| `rounding` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:384

___

### toDP

▸ **toDP**(`decimalPlaces?`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces?` | `number` |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:388

▸ **toDP**(`decimalPlaces`, `rounding`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces` | `number` |
| `rounding` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:389

___

### toDecimalPlaces

▸ **toDecimalPlaces**(`decimalPlaces?`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces?` | `number` |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:386

▸ **toDecimalPlaces**(`decimalPlaces`, `rounding`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces` | `number` |
| `rounding` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:387

___

### toExponential

▸ **toExponential**(`decimalPlaces?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:391

▸ **toExponential**(`decimalPlaces`, `rounding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces` | `number` |
| `rounding` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:392

___

### toFixed

▸ **toFixed**(`decimalPlaces?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:394

▸ **toFixed**(`decimalPlaces`, `rounding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decimalPlaces` | `number` |
| `rounding` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:395

___

### toFraction

▸ **toFraction**(`max_denominator?`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `max_denominator?` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)[]

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:397

___

### toHex

▸ **toHex**(`significantDigits?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:401

▸ **toHex**(`significantDigits`, `rounding?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits` | `number` |
| `rounding?` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:402

___

### toHexadecimal

▸ **toHexadecimal**(`significantDigits?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:399

▸ **toHexadecimal**(`significantDigits`, `rounding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits` | `number` |
| `rounding` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:400

___

### toJSON

▸ **toJSON**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:404

___

### toNearest

▸ **toNearest**(`n`, `rounding?`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `rounding?` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:406

___

### toNumber

▸ **toNumber**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:408

___

### toOctal

▸ **toOctal**(`significantDigits?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:410

▸ **toOctal**(`significantDigits`, `rounding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits` | `number` |
| `rounding` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:411

___

### toPower

▸ **toPower**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:413

___

### toPrecision

▸ **toPrecision**(`significantDigits?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:416

▸ **toPrecision**(`significantDigits`, `rounding`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits` | `number` |
| `rounding` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:417

___

### toSD

▸ **toSD**(`significantDigits?`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits?` | `number` |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:421

▸ **toSD**(`significantDigits`, `rounding`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits` | `number` |
| `rounding` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:422

___

### toSignificantDigits

▸ **toSignificantDigits**(`significantDigits?`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits?` | `number` |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:419

▸ **toSignificantDigits**(`significantDigits`, `rounding`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits` | `number` |
| `rounding` | [`Rounding`](../modules/repository_prismaClient.Prisma.Decimal.md#rounding) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:420

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:424

___

### trunc

▸ **trunc**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:427

___

### truncated

▸ **truncated**(): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:426

___

### valueOf

▸ **valueOf**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:429

___

### abs

▸ `Static` **abs**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:431

___

### acos

▸ `Static` **acos**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:432

___

### acosh

▸ `Static` **acosh**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:433

___

### add

▸ `Static` **add**(`x`, `y`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `y` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:434

___

### asin

▸ `Static` **asin**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:435

___

### asinh

▸ `Static` **asinh**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:436

___

### atan

▸ `Static` **atan**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:437

___

### atan2

▸ `Static` **atan2**(`y`, `x`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `x` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:439

___

### atanh

▸ `Static` **atanh**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:438

___

### cbrt

▸ `Static` **cbrt**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:440

___

### ceil

▸ `Static` **ceil**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:441

___

### clamp

▸ `Static` **clamp**(`n`, `min`, `max`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `min` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `max` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:442

___

### clone

▸ `Static` **clone**(`object?`): typeof [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object?` | [`Config`](../interfaces/repository_prismaClient.Prisma.Decimal.Config.md) |

#### Returns

typeof [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:443

___

### config

▸ `Static` **config**(`object`): typeof [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Config`](../interfaces/repository_prismaClient.Prisma.Decimal.Config.md) |

#### Returns

typeof [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:444

___

### cos

▸ `Static` **cos**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:445

___

### cosh

▸ `Static` **cosh**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:446

___

### div

▸ `Static` **div**(`x`, `y`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `y` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:447

___

### exp

▸ `Static` **exp**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:448

___

### floor

▸ `Static` **floor**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:449

___

### hypot

▸ `Static` **hypot**(`...n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value)[] |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:450

___

### isDecimal

▸ `Static` **isDecimal**(`object`): object is Decimal

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |

#### Returns

object is Decimal

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:451

___

### ln

▸ `Static` **ln**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:452

___

### log

▸ `Static` **log**(`n`, `base?`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `base?` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:453

___

### log10

▸ `Static` **log10**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:455

___

### log2

▸ `Static` **log2**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:454

___

### max

▸ `Static` **max**(`...n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value)[] |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:456

___

### min

▸ `Static` **min**(`...n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value)[] |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:457

___

### mod

▸ `Static` **mod**(`x`, `y`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `y` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:458

___

### mul

▸ `Static` **mul**(`x`, `y`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `y` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:459

___

### noConflict

▸ `Static` **noConflict**(): typeof [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Returns

typeof [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:460

___

### pow

▸ `Static` **pow**(`base`, `exponent`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `base` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `exponent` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:461

___

### random

▸ `Static` **random**(`significantDigits?`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `significantDigits?` | `number` |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:462

___

### round

▸ `Static` **round**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:463

___

### set

▸ `Static` **set**(`object`): typeof [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | [`Config`](../interfaces/repository_prismaClient.Prisma.Decimal.Config.md) |

#### Returns

typeof [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:464

___

### sign

▸ `Static` **sign**(`n`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

`number`

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:465

___

### sin

▸ `Static` **sin**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:466

___

### sinh

▸ `Static` **sinh**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:467

___

### sqrt

▸ `Static` **sqrt**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:468

___

### sub

▸ `Static` **sub**(`x`, `y`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |
| `y` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:469

___

### sum

▸ `Static` **sum**(`...n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value)[] |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:470

___

### tan

▸ `Static` **tan**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:471

___

### tanh

▸ `Static` **tanh**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:472

___

### trunc

▸ `Static` **trunc**(`n`): [`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | [`Value`](../modules/repository_prismaClient.Prisma.Decimal.md#value) |

#### Returns

[`Decimal`](repository_prismaClient.Prisma.Decimal-1.md)

#### Defined in

node_modules/@prisma/client/runtime/library.d.ts:473
