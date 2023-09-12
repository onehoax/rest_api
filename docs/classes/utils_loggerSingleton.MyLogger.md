[@onehoax/rest-api](../README.md) / [utils/loggerSingleton](../modules/utils_loggerSingleton.md) / MyLogger

# Class: MyLogger

[utils/loggerSingleton](../modules/utils_loggerSingleton.md).MyLogger

Custom logger based on winston.
Uses the singleton design pattern so there is only 1 instance of MyLogger throughout the program.

## Table of contents

### Constructors

- [constructor](utils_loggerSingleton.MyLogger.md#constructor)

### Properties

- [logger](utils_loggerSingleton.MyLogger.md#logger)
- [instance](utils_loggerSingleton.MyLogger.md#instance)

### Methods

- [getLogger](utils_loggerSingleton.MyLogger.md#getlogger)
- [getInstance](utils_loggerSingleton.MyLogger.md#getinstance)

## Constructors

### constructor

• `Private` **new MyLogger**()

Private to implement the singleton pattern.
It is called only once at the beginning of a program.
The same instance is then shared across the entire program.
Initializes logger based on environment.

#### Defined in

src/utils/loggerSingleton.ts:22

## Properties

### logger

• `Private` **logger**: `Logger`

The custom winston logger

#### Defined in

src/utils/loggerSingleton.ts:14

___

### instance

▪ `Static` `Private` **instance**: [`MyLogger`](utils_loggerSingleton.MyLogger.md)

To implement the singleton pattern

#### Defined in

src/utils/loggerSingleton.ts:13

## Methods

### getLogger

▸ **getLogger**(): `Logger`

Accessor for the custom winston logger object.

#### Returns

`Logger`

[MyLogger.logger](utils_loggerSingleton.MyLogger.md#logger) - The custom winston logger

#### Defined in

src/utils/loggerSingleton.ts:69

___

### getInstance

▸ `Static` **getInstance**(): [`MyLogger`](utils_loggerSingleton.MyLogger.md)

Checks if the single instance of "MyLogger" exists already.
If it doesn't, creates the single allowed instance and returns it.
Otherwise returns the already existing instance.

#### Returns

[`MyLogger`](utils_loggerSingleton.MyLogger.md)

[MyLogger.instance](utils_loggerSingleton.MyLogger.md#instance) - The single MyLogger instance

#### Defined in

src/utils/loggerSingleton.ts:59
