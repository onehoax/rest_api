[@onehoax/rest-api](../README.md) / [utils/logger](../modules/utils_logger.md) / MyLogger

# Class: MyLogger

[utils/logger](../modules/utils_logger.md).MyLogger

Custom logger based on winston.
Uses the singleton design pattern so there is only 1 instance of MyLogger throughout the program.

## Table of contents

### Constructors

- [constructor](utils_logger.MyLogger.md#constructor)

### Properties

- [logger](utils_logger.MyLogger.md#logger)
- [instance](utils_logger.MyLogger.md#instance)

### Methods

- [getLogger](utils_logger.MyLogger.md#getlogger)
- [getInstance](utils_logger.MyLogger.md#getinstance)

## Constructors

### constructor

• `Private` **new MyLogger**()

Private to implement the singleton pattern.
It is called only once at the beginning of a program.
The same instance is then shared across the entire program.
Initializes logger based on environment.

#### Defined in

[src/utils/logger.ts:22](https://github.com/onehoax/rest_api/blob/2c7e426/src/utils/logger.ts#L22)

## Properties

### logger

• `Private` **logger**: `Logger`

The custom winston logger

#### Defined in

[src/utils/logger.ts:14](https://github.com/onehoax/rest_api/blob/2c7e426/src/utils/logger.ts#L14)

___

### instance

▪ `Static` `Private` **instance**: [`MyLogger`](utils_logger.MyLogger.md)

To implement the singleton pattern

#### Defined in

[src/utils/logger.ts:13](https://github.com/onehoax/rest_api/blob/2c7e426/src/utils/logger.ts#L13)

## Methods

### getLogger

▸ **getLogger**(): `Logger`

Accessor for the custom winston logger object.

#### Returns

`Logger`

[MyLogger.logger](utils_logger.MyLogger.md#logger) - The custom winston logger

#### Defined in

[src/utils/logger.ts:69](https://github.com/onehoax/rest_api/blob/2c7e426/src/utils/logger.ts#L69)

___

### getInstance

▸ `Static` **getInstance**(): [`MyLogger`](utils_logger.MyLogger.md)

Checks if the single instance of "MyLogger" exists already.
If it doesn't, creates the single allowed instance and returns it.
Otherwise returns the already existing instance.

#### Returns

[`MyLogger`](utils_logger.MyLogger.md)

[MyLogger.instance](utils_logger.MyLogger.md#instance) - The single MyLogger instance

#### Defined in

[src/utils/logger.ts:59](https://github.com/onehoax/rest_api/blob/2c7e426/src/utils/logger.ts#L59)
