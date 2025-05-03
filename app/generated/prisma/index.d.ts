
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Match: 'Match'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "match"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.MatchFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.MatchAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    match?: MatchOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    wonSingles: number
    lostSingles: number
    wonDoublesForward: number
    wonDoublesDefensive: number
    lostDoublesForward: number
    lostDoublesDefensive: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wonSingles?: boolean | UserCountOutputTypeCountWonSinglesArgs
    lostSingles?: boolean | UserCountOutputTypeCountLostSinglesArgs
    wonDoublesForward?: boolean | UserCountOutputTypeCountWonDoublesForwardArgs
    wonDoublesDefensive?: boolean | UserCountOutputTypeCountWonDoublesDefensiveArgs
    lostDoublesForward?: boolean | UserCountOutputTypeCountLostDoublesForwardArgs
    lostDoublesDefensive?: boolean | UserCountOutputTypeCountLostDoublesDefensiveArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWonSinglesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLostSinglesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWonDoublesForwardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWonDoublesDefensiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLostDoublesForwardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLostDoublesDefensiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    forwardRating: number | null
    defensiveRating: number | null
    singlesRating: number | null
  }

  export type UserSumAggregateOutputType = {
    forwardRating: number | null
    defensiveRating: number | null
    singlesRating: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    forwardRating: number | null
    defensiveRating: number | null
    singlesRating: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    forwardRating: number | null
    defensiveRating: number | null
    singlesRating: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    forwardRating: number
    defensiveRating: number
    singlesRating: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    forwardRating?: true
    defensiveRating?: true
    singlesRating?: true
  }

  export type UserSumAggregateInputType = {
    forwardRating?: true
    defensiveRating?: true
    singlesRating?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    forwardRating?: true
    defensiveRating?: true
    singlesRating?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    forwardRating?: true
    defensiveRating?: true
    singlesRating?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    forwardRating?: true
    defensiveRating?: true
    singlesRating?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    forwardRating: number
    defensiveRating: number
    singlesRating: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    forwardRating?: boolean
    defensiveRating?: boolean
    singlesRating?: boolean
    wonSingles?: boolean | User$wonSinglesArgs<ExtArgs>
    lostSingles?: boolean | User$lostSinglesArgs<ExtArgs>
    wonDoublesForward?: boolean | User$wonDoublesForwardArgs<ExtArgs>
    wonDoublesDefensive?: boolean | User$wonDoublesDefensiveArgs<ExtArgs>
    lostDoublesForward?: boolean | User$lostDoublesForwardArgs<ExtArgs>
    lostDoublesDefensive?: boolean | User$lostDoublesDefensiveArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    forwardRating?: boolean
    defensiveRating?: boolean
    singlesRating?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "forwardRating" | "defensiveRating" | "singlesRating", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wonSingles?: boolean | User$wonSinglesArgs<ExtArgs>
    lostSingles?: boolean | User$lostSinglesArgs<ExtArgs>
    wonDoublesForward?: boolean | User$wonDoublesForwardArgs<ExtArgs>
    wonDoublesDefensive?: boolean | User$wonDoublesDefensiveArgs<ExtArgs>
    lostDoublesForward?: boolean | User$lostDoublesForwardArgs<ExtArgs>
    lostDoublesDefensive?: boolean | User$lostDoublesDefensiveArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wonSingles: Prisma.$MatchPayload<ExtArgs>[]
      lostSingles: Prisma.$MatchPayload<ExtArgs>[]
      wonDoublesForward: Prisma.$MatchPayload<ExtArgs>[]
      wonDoublesDefensive: Prisma.$MatchPayload<ExtArgs>[]
      lostDoublesForward: Prisma.$MatchPayload<ExtArgs>[]
      lostDoublesDefensive: Prisma.$MatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      forwardRating: number
      defensiveRating: number
      singlesRating: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wonSingles<T extends User$wonSinglesArgs<ExtArgs> = {}>(args?: Subset<T, User$wonSinglesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lostSingles<T extends User$lostSinglesArgs<ExtArgs> = {}>(args?: Subset<T, User$lostSinglesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wonDoublesForward<T extends User$wonDoublesForwardArgs<ExtArgs> = {}>(args?: Subset<T, User$wonDoublesForwardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wonDoublesDefensive<T extends User$wonDoublesDefensiveArgs<ExtArgs> = {}>(args?: Subset<T, User$wonDoublesDefensiveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lostDoublesForward<T extends User$lostDoublesForwardArgs<ExtArgs> = {}>(args?: Subset<T, User$lostDoublesForwardArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lostDoublesDefensive<T extends User$lostDoublesDefensiveArgs<ExtArgs> = {}>(args?: Subset<T, User$lostDoublesDefensiveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly forwardRating: FieldRef<"User", 'Float'>
    readonly defensiveRating: FieldRef<"User", 'Float'>
    readonly singlesRating: FieldRef<"User", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.wonSingles
   */
  export type User$wonSinglesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.lostSingles
   */
  export type User$lostSinglesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.wonDoublesForward
   */
  export type User$wonDoublesForwardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.wonDoublesDefensive
   */
  export type User$wonDoublesDefensiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.lostDoublesForward
   */
  export type User$lostDoublesForwardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User.lostDoublesDefensive
   */
  export type User$lostDoublesDefensiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    isDoubles: boolean | null
    createdAt: Date | null
    winnerId: string | null
    loserId: string | null
    winnerForwardId: string | null
    winnerDefensiveId: string | null
    loserForwardId: string | null
    loserDefensiveId: string | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    isDoubles: boolean | null
    createdAt: Date | null
    winnerId: string | null
    loserId: string | null
    winnerForwardId: string | null
    winnerDefensiveId: string | null
    loserForwardId: string | null
    loserDefensiveId: string | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    isDoubles: number
    createdAt: number
    winnerId: number
    loserId: number
    winnerForwardId: number
    winnerDefensiveId: number
    loserForwardId: number
    loserDefensiveId: number
    _all: number
  }


  export type MatchMinAggregateInputType = {
    id?: true
    isDoubles?: true
    createdAt?: true
    winnerId?: true
    loserId?: true
    winnerForwardId?: true
    winnerDefensiveId?: true
    loserForwardId?: true
    loserDefensiveId?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    isDoubles?: true
    createdAt?: true
    winnerId?: true
    loserId?: true
    winnerForwardId?: true
    winnerDefensiveId?: true
    loserForwardId?: true
    loserDefensiveId?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    isDoubles?: true
    createdAt?: true
    winnerId?: true
    loserId?: true
    winnerForwardId?: true
    winnerDefensiveId?: true
    loserForwardId?: true
    loserDefensiveId?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    isDoubles: boolean
    createdAt: Date
    winnerId: string | null
    loserId: string | null
    winnerForwardId: string | null
    winnerDefensiveId: string | null
    loserForwardId: string | null
    loserDefensiveId: string | null
    _count: MatchCountAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isDoubles?: boolean
    createdAt?: boolean
    winnerId?: boolean
    loserId?: boolean
    winnerForwardId?: boolean
    winnerDefensiveId?: boolean
    loserForwardId?: boolean
    loserDefensiveId?: boolean
    winner?: boolean | Match$winnerArgs<ExtArgs>
    loser?: boolean | Match$loserArgs<ExtArgs>
    winnerForward?: boolean | Match$winnerForwardArgs<ExtArgs>
    winnerDefensive?: boolean | Match$winnerDefensiveArgs<ExtArgs>
    loserForward?: boolean | Match$loserForwardArgs<ExtArgs>
    loserDefensive?: boolean | Match$loserDefensiveArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>



  export type MatchSelectScalar = {
    id?: boolean
    isDoubles?: boolean
    createdAt?: boolean
    winnerId?: boolean
    loserId?: boolean
    winnerForwardId?: boolean
    winnerDefensiveId?: boolean
    loserForwardId?: boolean
    loserDefensiveId?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isDoubles" | "createdAt" | "winnerId" | "loserId" | "winnerForwardId" | "winnerDefensiveId" | "loserForwardId" | "loserDefensiveId", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    winner?: boolean | Match$winnerArgs<ExtArgs>
    loser?: boolean | Match$loserArgs<ExtArgs>
    winnerForward?: boolean | Match$winnerForwardArgs<ExtArgs>
    winnerDefensive?: boolean | Match$winnerDefensiveArgs<ExtArgs>
    loserForward?: boolean | Match$loserForwardArgs<ExtArgs>
    loserDefensive?: boolean | Match$loserDefensiveArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      winner: Prisma.$UserPayload<ExtArgs> | null
      loser: Prisma.$UserPayload<ExtArgs> | null
      winnerForward: Prisma.$UserPayload<ExtArgs> | null
      winnerDefensive: Prisma.$UserPayload<ExtArgs> | null
      loserForward: Prisma.$UserPayload<ExtArgs> | null
      loserDefensive: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isDoubles: boolean
      createdAt: Date
      winnerId: string | null
      loserId: string | null
      winnerForwardId: string | null
      winnerDefensiveId: string | null
      loserForwardId: string | null
      loserDefensiveId: string | null
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * @param {MatchFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const match = await prisma.match.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: MatchFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Match.
     * @param {MatchAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const match = await prisma.match.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: MatchAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    winner<T extends Match$winnerArgs<ExtArgs> = {}>(args?: Subset<T, Match$winnerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loser<T extends Match$loserArgs<ExtArgs> = {}>(args?: Subset<T, Match$loserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    winnerForward<T extends Match$winnerForwardArgs<ExtArgs> = {}>(args?: Subset<T, Match$winnerForwardArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    winnerDefensive<T extends Match$winnerDefensiveArgs<ExtArgs> = {}>(args?: Subset<T, Match$winnerDefensiveArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loserForward<T extends Match$loserForwardArgs<ExtArgs> = {}>(args?: Subset<T, Match$loserForwardArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loserDefensive<T extends Match$loserDefensiveArgs<ExtArgs> = {}>(args?: Subset<T, Match$loserDefensiveArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly isDoubles: FieldRef<"Match", 'Boolean'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly winnerId: FieldRef<"Match", 'String'>
    readonly loserId: FieldRef<"Match", 'String'>
    readonly winnerForwardId: FieldRef<"Match", 'String'>
    readonly winnerDefensiveId: FieldRef<"Match", 'String'>
    readonly loserForwardId: FieldRef<"Match", 'String'>
    readonly loserDefensiveId: FieldRef<"Match", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match findRaw
   */
  export type MatchFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Match aggregateRaw
   */
  export type MatchAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Match.winner
   */
  export type Match$winnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Match.loser
   */
  export type Match$loserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Match.winnerForward
   */
  export type Match$winnerForwardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Match.winnerDefensive
   */
  export type Match$winnerDefensiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Match.loserForward
   */
  export type Match$loserForwardArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Match.loserDefensive
   */
  export type Match$loserDefensiveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    forwardRating: 'forwardRating',
    defensiveRating: 'defensiveRating',
    singlesRating: 'singlesRating'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    isDoubles: 'isDoubles',
    createdAt: 'createdAt',
    winnerId: 'winnerId',
    loserId: 'loserId',
    winnerForwardId: 'winnerForwardId',
    winnerDefensiveId: 'winnerDefensiveId',
    loserForwardId: 'loserForwardId',
    loserDefensiveId: 'loserDefensiveId'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    forwardRating?: FloatFilter<"User"> | number
    defensiveRating?: FloatFilter<"User"> | number
    singlesRating?: FloatFilter<"User"> | number
    wonSingles?: MatchListRelationFilter
    lostSingles?: MatchListRelationFilter
    wonDoublesForward?: MatchListRelationFilter
    wonDoublesDefensive?: MatchListRelationFilter
    lostDoublesForward?: MatchListRelationFilter
    lostDoublesDefensive?: MatchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    forwardRating?: SortOrder
    defensiveRating?: SortOrder
    singlesRating?: SortOrder
    wonSingles?: MatchOrderByRelationAggregateInput
    lostSingles?: MatchOrderByRelationAggregateInput
    wonDoublesForward?: MatchOrderByRelationAggregateInput
    wonDoublesDefensive?: MatchOrderByRelationAggregateInput
    lostDoublesForward?: MatchOrderByRelationAggregateInput
    lostDoublesDefensive?: MatchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    forwardRating?: FloatFilter<"User"> | number
    defensiveRating?: FloatFilter<"User"> | number
    singlesRating?: FloatFilter<"User"> | number
    wonSingles?: MatchListRelationFilter
    lostSingles?: MatchListRelationFilter
    wonDoublesForward?: MatchListRelationFilter
    wonDoublesDefensive?: MatchListRelationFilter
    lostDoublesForward?: MatchListRelationFilter
    lostDoublesDefensive?: MatchListRelationFilter
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    forwardRating?: SortOrder
    defensiveRating?: SortOrder
    singlesRating?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    forwardRating?: FloatWithAggregatesFilter<"User"> | number
    defensiveRating?: FloatWithAggregatesFilter<"User"> | number
    singlesRating?: FloatWithAggregatesFilter<"User"> | number
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    isDoubles?: BoolFilter<"Match"> | boolean
    createdAt?: DateTimeFilter<"Match"> | Date | string
    winnerId?: StringNullableFilter<"Match"> | string | null
    loserId?: StringNullableFilter<"Match"> | string | null
    winnerForwardId?: StringNullableFilter<"Match"> | string | null
    winnerDefensiveId?: StringNullableFilter<"Match"> | string | null
    loserForwardId?: StringNullableFilter<"Match"> | string | null
    loserDefensiveId?: StringNullableFilter<"Match"> | string | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    loser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winnerForward?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winnerDefensive?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    loserForward?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    loserDefensive?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    isDoubles?: SortOrder
    createdAt?: SortOrder
    winnerId?: SortOrder
    loserId?: SortOrder
    winnerForwardId?: SortOrder
    winnerDefensiveId?: SortOrder
    loserForwardId?: SortOrder
    loserDefensiveId?: SortOrder
    winner?: UserOrderByWithRelationInput
    loser?: UserOrderByWithRelationInput
    winnerForward?: UserOrderByWithRelationInput
    winnerDefensive?: UserOrderByWithRelationInput
    loserForward?: UserOrderByWithRelationInput
    loserDefensive?: UserOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    isDoubles?: BoolFilter<"Match"> | boolean
    createdAt?: DateTimeFilter<"Match"> | Date | string
    winnerId?: StringNullableFilter<"Match"> | string | null
    loserId?: StringNullableFilter<"Match"> | string | null
    winnerForwardId?: StringNullableFilter<"Match"> | string | null
    winnerDefensiveId?: StringNullableFilter<"Match"> | string | null
    loserForwardId?: StringNullableFilter<"Match"> | string | null
    loserDefensiveId?: StringNullableFilter<"Match"> | string | null
    winner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    loser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winnerForward?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    winnerDefensive?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    loserForward?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    loserDefensive?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    isDoubles?: SortOrder
    createdAt?: SortOrder
    winnerId?: SortOrder
    loserId?: SortOrder
    winnerForwardId?: SortOrder
    winnerDefensiveId?: SortOrder
    loserForwardId?: SortOrder
    loserDefensiveId?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    isDoubles?: BoolWithAggregatesFilter<"Match"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    winnerId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    loserId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    winnerForwardId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    winnerDefensiveId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    loserForwardId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    loserDefensiveId?: StringNullableWithAggregatesFilter<"Match"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchCreateNestedManyWithoutWinnerInput
    lostSingles?: MatchCreateNestedManyWithoutLoserInput
    wonDoublesForward?: MatchCreateNestedManyWithoutWinnerForwardInput
    wonDoublesDefensive?: MatchCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesForward?: MatchCreateNestedManyWithoutLoserForwardInput
    lostDoublesDefensive?: MatchCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    lostSingles?: MatchUncheckedCreateNestedManyWithoutLoserInput
    wonDoublesForward?: MatchUncheckedCreateNestedManyWithoutWinnerForwardInput
    wonDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesForward?: MatchUncheckedCreateNestedManyWithoutLoserForwardInput
    lostDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUpdateManyWithoutWinnerNestedInput
    lostSingles?: MatchUpdateManyWithoutLoserNestedInput
    wonDoublesForward?: MatchUpdateManyWithoutWinnerForwardNestedInput
    wonDoublesDefensive?: MatchUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesForward?: MatchUpdateManyWithoutLoserForwardNestedInput
    lostDoublesDefensive?: MatchUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    lostSingles?: MatchUncheckedUpdateManyWithoutLoserNestedInput
    wonDoublesForward?: MatchUncheckedUpdateManyWithoutWinnerForwardNestedInput
    wonDoublesDefensive?: MatchUncheckedUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesForward?: MatchUncheckedUpdateManyWithoutLoserForwardNestedInput
    lostDoublesDefensive?: MatchUncheckedUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
  }

  export type MatchCreateInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winner?: UserCreateNestedOneWithoutWonSinglesInput
    loser?: UserCreateNestedOneWithoutLostSinglesInput
    winnerForward?: UserCreateNestedOneWithoutWonDoublesForwardInput
    winnerDefensive?: UserCreateNestedOneWithoutWonDoublesDefensiveInput
    loserForward?: UserCreateNestedOneWithoutLostDoublesForwardInput
    loserDefensive?: UserCreateNestedOneWithoutLostDoublesDefensiveInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    loserId?: string | null
    winnerForwardId?: string | null
    winnerDefensiveId?: string | null
    loserForwardId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchUpdateInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneWithoutWonSinglesNestedInput
    loser?: UserUpdateOneWithoutLostSinglesNestedInput
    winnerForward?: UserUpdateOneWithoutWonDoublesForwardNestedInput
    winnerDefensive?: UserUpdateOneWithoutWonDoublesDefensiveNestedInput
    loserForward?: UserUpdateOneWithoutLostDoublesForwardNestedInput
    loserDefensive?: UserUpdateOneWithoutLostDoublesDefensiveNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchCreateManyInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    loserId?: string | null
    winnerForwardId?: string | null
    winnerDefensiveId?: string | null
    loserForwardId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchUpdateManyMutationInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    forwardRating?: SortOrder
    defensiveRating?: SortOrder
    singlesRating?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    forwardRating?: SortOrder
    defensiveRating?: SortOrder
    singlesRating?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    forwardRating?: SortOrder
    defensiveRating?: SortOrder
    singlesRating?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    forwardRating?: SortOrder
    defensiveRating?: SortOrder
    singlesRating?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    forwardRating?: SortOrder
    defensiveRating?: SortOrder
    singlesRating?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    isDoubles?: SortOrder
    createdAt?: SortOrder
    winnerId?: SortOrder
    loserId?: SortOrder
    winnerForwardId?: SortOrder
    winnerDefensiveId?: SortOrder
    loserForwardId?: SortOrder
    loserDefensiveId?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    isDoubles?: SortOrder
    createdAt?: SortOrder
    winnerId?: SortOrder
    loserId?: SortOrder
    winnerForwardId?: SortOrder
    winnerDefensiveId?: SortOrder
    loserForwardId?: SortOrder
    loserDefensiveId?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    isDoubles?: SortOrder
    createdAt?: SortOrder
    winnerId?: SortOrder
    loserId?: SortOrder
    winnerForwardId?: SortOrder
    winnerDefensiveId?: SortOrder
    loserForwardId?: SortOrder
    loserDefensiveId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type MatchCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutLoserInput = {
    create?: XOR<MatchCreateWithoutLoserInput, MatchUncheckedCreateWithoutLoserInput> | MatchCreateWithoutLoserInput[] | MatchUncheckedCreateWithoutLoserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserInput | MatchCreateOrConnectWithoutLoserInput[]
    createMany?: MatchCreateManyLoserInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutWinnerForwardInput = {
    create?: XOR<MatchCreateWithoutWinnerForwardInput, MatchUncheckedCreateWithoutWinnerForwardInput> | MatchCreateWithoutWinnerForwardInput[] | MatchUncheckedCreateWithoutWinnerForwardInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerForwardInput | MatchCreateOrConnectWithoutWinnerForwardInput[]
    createMany?: MatchCreateManyWinnerForwardInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutWinnerDefensiveInput = {
    create?: XOR<MatchCreateWithoutWinnerDefensiveInput, MatchUncheckedCreateWithoutWinnerDefensiveInput> | MatchCreateWithoutWinnerDefensiveInput[] | MatchUncheckedCreateWithoutWinnerDefensiveInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerDefensiveInput | MatchCreateOrConnectWithoutWinnerDefensiveInput[]
    createMany?: MatchCreateManyWinnerDefensiveInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutLoserForwardInput = {
    create?: XOR<MatchCreateWithoutLoserForwardInput, MatchUncheckedCreateWithoutLoserForwardInput> | MatchCreateWithoutLoserForwardInput[] | MatchUncheckedCreateWithoutLoserForwardInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserForwardInput | MatchCreateOrConnectWithoutLoserForwardInput[]
    createMany?: MatchCreateManyLoserForwardInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchCreateNestedManyWithoutLoserDefensiveInput = {
    create?: XOR<MatchCreateWithoutLoserDefensiveInput, MatchUncheckedCreateWithoutLoserDefensiveInput> | MatchCreateWithoutLoserDefensiveInput[] | MatchUncheckedCreateWithoutLoserDefensiveInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserDefensiveInput | MatchCreateOrConnectWithoutLoserDefensiveInput[]
    createMany?: MatchCreateManyLoserDefensiveInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWinnerInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutLoserInput = {
    create?: XOR<MatchCreateWithoutLoserInput, MatchUncheckedCreateWithoutLoserInput> | MatchCreateWithoutLoserInput[] | MatchUncheckedCreateWithoutLoserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserInput | MatchCreateOrConnectWithoutLoserInput[]
    createMany?: MatchCreateManyLoserInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWinnerForwardInput = {
    create?: XOR<MatchCreateWithoutWinnerForwardInput, MatchUncheckedCreateWithoutWinnerForwardInput> | MatchCreateWithoutWinnerForwardInput[] | MatchUncheckedCreateWithoutWinnerForwardInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerForwardInput | MatchCreateOrConnectWithoutWinnerForwardInput[]
    createMany?: MatchCreateManyWinnerForwardInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutWinnerDefensiveInput = {
    create?: XOR<MatchCreateWithoutWinnerDefensiveInput, MatchUncheckedCreateWithoutWinnerDefensiveInput> | MatchCreateWithoutWinnerDefensiveInput[] | MatchUncheckedCreateWithoutWinnerDefensiveInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerDefensiveInput | MatchCreateOrConnectWithoutWinnerDefensiveInput[]
    createMany?: MatchCreateManyWinnerDefensiveInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutLoserForwardInput = {
    create?: XOR<MatchCreateWithoutLoserForwardInput, MatchUncheckedCreateWithoutLoserForwardInput> | MatchCreateWithoutLoserForwardInput[] | MatchUncheckedCreateWithoutLoserForwardInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserForwardInput | MatchCreateOrConnectWithoutLoserForwardInput[]
    createMany?: MatchCreateManyLoserForwardInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutLoserDefensiveInput = {
    create?: XOR<MatchCreateWithoutLoserDefensiveInput, MatchUncheckedCreateWithoutLoserDefensiveInput> | MatchCreateWithoutLoserDefensiveInput[] | MatchUncheckedCreateWithoutLoserDefensiveInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserDefensiveInput | MatchCreateOrConnectWithoutLoserDefensiveInput[]
    createMany?: MatchCreateManyLoserDefensiveInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MatchUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutLoserNestedInput = {
    create?: XOR<MatchCreateWithoutLoserInput, MatchUncheckedCreateWithoutLoserInput> | MatchCreateWithoutLoserInput[] | MatchUncheckedCreateWithoutLoserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserInput | MatchCreateOrConnectWithoutLoserInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutLoserInput | MatchUpsertWithWhereUniqueWithoutLoserInput[]
    createMany?: MatchCreateManyLoserInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutLoserInput | MatchUpdateWithWhereUniqueWithoutLoserInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutLoserInput | MatchUpdateManyWithWhereWithoutLoserInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutWinnerForwardNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerForwardInput, MatchUncheckedCreateWithoutWinnerForwardInput> | MatchCreateWithoutWinnerForwardInput[] | MatchUncheckedCreateWithoutWinnerForwardInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerForwardInput | MatchCreateOrConnectWithoutWinnerForwardInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerForwardInput | MatchUpsertWithWhereUniqueWithoutWinnerForwardInput[]
    createMany?: MatchCreateManyWinnerForwardInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerForwardInput | MatchUpdateWithWhereUniqueWithoutWinnerForwardInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerForwardInput | MatchUpdateManyWithWhereWithoutWinnerForwardInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutWinnerDefensiveNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerDefensiveInput, MatchUncheckedCreateWithoutWinnerDefensiveInput> | MatchCreateWithoutWinnerDefensiveInput[] | MatchUncheckedCreateWithoutWinnerDefensiveInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerDefensiveInput | MatchCreateOrConnectWithoutWinnerDefensiveInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerDefensiveInput | MatchUpsertWithWhereUniqueWithoutWinnerDefensiveInput[]
    createMany?: MatchCreateManyWinnerDefensiveInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerDefensiveInput | MatchUpdateWithWhereUniqueWithoutWinnerDefensiveInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerDefensiveInput | MatchUpdateManyWithWhereWithoutWinnerDefensiveInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutLoserForwardNestedInput = {
    create?: XOR<MatchCreateWithoutLoserForwardInput, MatchUncheckedCreateWithoutLoserForwardInput> | MatchCreateWithoutLoserForwardInput[] | MatchUncheckedCreateWithoutLoserForwardInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserForwardInput | MatchCreateOrConnectWithoutLoserForwardInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutLoserForwardInput | MatchUpsertWithWhereUniqueWithoutLoserForwardInput[]
    createMany?: MatchCreateManyLoserForwardInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutLoserForwardInput | MatchUpdateWithWhereUniqueWithoutLoserForwardInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutLoserForwardInput | MatchUpdateManyWithWhereWithoutLoserForwardInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUpdateManyWithoutLoserDefensiveNestedInput = {
    create?: XOR<MatchCreateWithoutLoserDefensiveInput, MatchUncheckedCreateWithoutLoserDefensiveInput> | MatchCreateWithoutLoserDefensiveInput[] | MatchUncheckedCreateWithoutLoserDefensiveInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserDefensiveInput | MatchCreateOrConnectWithoutLoserDefensiveInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutLoserDefensiveInput | MatchUpsertWithWhereUniqueWithoutLoserDefensiveInput[]
    createMany?: MatchCreateManyLoserDefensiveInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutLoserDefensiveInput | MatchUpdateWithWhereUniqueWithoutLoserDefensiveInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutLoserDefensiveInput | MatchUpdateManyWithWhereWithoutLoserDefensiveInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutWinnerNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput> | MatchCreateWithoutWinnerInput[] | MatchUncheckedCreateWithoutWinnerInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerInput | MatchCreateOrConnectWithoutWinnerInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerInput | MatchUpsertWithWhereUniqueWithoutWinnerInput[]
    createMany?: MatchCreateManyWinnerInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerInput | MatchUpdateWithWhereUniqueWithoutWinnerInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerInput | MatchUpdateManyWithWhereWithoutWinnerInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutLoserNestedInput = {
    create?: XOR<MatchCreateWithoutLoserInput, MatchUncheckedCreateWithoutLoserInput> | MatchCreateWithoutLoserInput[] | MatchUncheckedCreateWithoutLoserInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserInput | MatchCreateOrConnectWithoutLoserInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutLoserInput | MatchUpsertWithWhereUniqueWithoutLoserInput[]
    createMany?: MatchCreateManyLoserInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutLoserInput | MatchUpdateWithWhereUniqueWithoutLoserInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutLoserInput | MatchUpdateManyWithWhereWithoutLoserInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutWinnerForwardNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerForwardInput, MatchUncheckedCreateWithoutWinnerForwardInput> | MatchCreateWithoutWinnerForwardInput[] | MatchUncheckedCreateWithoutWinnerForwardInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerForwardInput | MatchCreateOrConnectWithoutWinnerForwardInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerForwardInput | MatchUpsertWithWhereUniqueWithoutWinnerForwardInput[]
    createMany?: MatchCreateManyWinnerForwardInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerForwardInput | MatchUpdateWithWhereUniqueWithoutWinnerForwardInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerForwardInput | MatchUpdateManyWithWhereWithoutWinnerForwardInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutWinnerDefensiveNestedInput = {
    create?: XOR<MatchCreateWithoutWinnerDefensiveInput, MatchUncheckedCreateWithoutWinnerDefensiveInput> | MatchCreateWithoutWinnerDefensiveInput[] | MatchUncheckedCreateWithoutWinnerDefensiveInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutWinnerDefensiveInput | MatchCreateOrConnectWithoutWinnerDefensiveInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutWinnerDefensiveInput | MatchUpsertWithWhereUniqueWithoutWinnerDefensiveInput[]
    createMany?: MatchCreateManyWinnerDefensiveInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutWinnerDefensiveInput | MatchUpdateWithWhereUniqueWithoutWinnerDefensiveInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutWinnerDefensiveInput | MatchUpdateManyWithWhereWithoutWinnerDefensiveInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutLoserForwardNestedInput = {
    create?: XOR<MatchCreateWithoutLoserForwardInput, MatchUncheckedCreateWithoutLoserForwardInput> | MatchCreateWithoutLoserForwardInput[] | MatchUncheckedCreateWithoutLoserForwardInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserForwardInput | MatchCreateOrConnectWithoutLoserForwardInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutLoserForwardInput | MatchUpsertWithWhereUniqueWithoutLoserForwardInput[]
    createMany?: MatchCreateManyLoserForwardInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutLoserForwardInput | MatchUpdateWithWhereUniqueWithoutLoserForwardInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutLoserForwardInput | MatchUpdateManyWithWhereWithoutLoserForwardInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutLoserDefensiveNestedInput = {
    create?: XOR<MatchCreateWithoutLoserDefensiveInput, MatchUncheckedCreateWithoutLoserDefensiveInput> | MatchCreateWithoutLoserDefensiveInput[] | MatchUncheckedCreateWithoutLoserDefensiveInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutLoserDefensiveInput | MatchCreateOrConnectWithoutLoserDefensiveInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutLoserDefensiveInput | MatchUpsertWithWhereUniqueWithoutLoserDefensiveInput[]
    createMany?: MatchCreateManyLoserDefensiveInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutLoserDefensiveInput | MatchUpdateWithWhereUniqueWithoutLoserDefensiveInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutLoserDefensiveInput | MatchUpdateManyWithWhereWithoutLoserDefensiveInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWonSinglesInput = {
    create?: XOR<UserCreateWithoutWonSinglesInput, UserUncheckedCreateWithoutWonSinglesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonSinglesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLostSinglesInput = {
    create?: XOR<UserCreateWithoutLostSinglesInput, UserUncheckedCreateWithoutLostSinglesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLostSinglesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWonDoublesForwardInput = {
    create?: XOR<UserCreateWithoutWonDoublesForwardInput, UserUncheckedCreateWithoutWonDoublesForwardInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonDoublesForwardInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWonDoublesDefensiveInput = {
    create?: XOR<UserCreateWithoutWonDoublesDefensiveInput, UserUncheckedCreateWithoutWonDoublesDefensiveInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonDoublesDefensiveInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLostDoublesForwardInput = {
    create?: XOR<UserCreateWithoutLostDoublesForwardInput, UserUncheckedCreateWithoutLostDoublesForwardInput>
    connectOrCreate?: UserCreateOrConnectWithoutLostDoublesForwardInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLostDoublesDefensiveInput = {
    create?: XOR<UserCreateWithoutLostDoublesDefensiveInput, UserUncheckedCreateWithoutLostDoublesDefensiveInput>
    connectOrCreate?: UserCreateOrConnectWithoutLostDoublesDefensiveInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutWonSinglesNestedInput = {
    create?: XOR<UserCreateWithoutWonSinglesInput, UserUncheckedCreateWithoutWonSinglesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonSinglesInput
    upsert?: UserUpsertWithoutWonSinglesInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWonSinglesInput, UserUpdateWithoutWonSinglesInput>, UserUncheckedUpdateWithoutWonSinglesInput>
  }

  export type UserUpdateOneWithoutLostSinglesNestedInput = {
    create?: XOR<UserCreateWithoutLostSinglesInput, UserUncheckedCreateWithoutLostSinglesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLostSinglesInput
    upsert?: UserUpsertWithoutLostSinglesInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLostSinglesInput, UserUpdateWithoutLostSinglesInput>, UserUncheckedUpdateWithoutLostSinglesInput>
  }

  export type UserUpdateOneWithoutWonDoublesForwardNestedInput = {
    create?: XOR<UserCreateWithoutWonDoublesForwardInput, UserUncheckedCreateWithoutWonDoublesForwardInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonDoublesForwardInput
    upsert?: UserUpsertWithoutWonDoublesForwardInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWonDoublesForwardInput, UserUpdateWithoutWonDoublesForwardInput>, UserUncheckedUpdateWithoutWonDoublesForwardInput>
  }

  export type UserUpdateOneWithoutWonDoublesDefensiveNestedInput = {
    create?: XOR<UserCreateWithoutWonDoublesDefensiveInput, UserUncheckedCreateWithoutWonDoublesDefensiveInput>
    connectOrCreate?: UserCreateOrConnectWithoutWonDoublesDefensiveInput
    upsert?: UserUpsertWithoutWonDoublesDefensiveInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWonDoublesDefensiveInput, UserUpdateWithoutWonDoublesDefensiveInput>, UserUncheckedUpdateWithoutWonDoublesDefensiveInput>
  }

  export type UserUpdateOneWithoutLostDoublesForwardNestedInput = {
    create?: XOR<UserCreateWithoutLostDoublesForwardInput, UserUncheckedCreateWithoutLostDoublesForwardInput>
    connectOrCreate?: UserCreateOrConnectWithoutLostDoublesForwardInput
    upsert?: UserUpsertWithoutLostDoublesForwardInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLostDoublesForwardInput, UserUpdateWithoutLostDoublesForwardInput>, UserUncheckedUpdateWithoutLostDoublesForwardInput>
  }

  export type UserUpdateOneWithoutLostDoublesDefensiveNestedInput = {
    create?: XOR<UserCreateWithoutLostDoublesDefensiveInput, UserUncheckedCreateWithoutLostDoublesDefensiveInput>
    connectOrCreate?: UserCreateOrConnectWithoutLostDoublesDefensiveInput
    upsert?: UserUpsertWithoutLostDoublesDefensiveInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLostDoublesDefensiveInput, UserUpdateWithoutLostDoublesDefensiveInput>, UserUncheckedUpdateWithoutLostDoublesDefensiveInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type MatchCreateWithoutWinnerInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    loser?: UserCreateNestedOneWithoutLostSinglesInput
    winnerForward?: UserCreateNestedOneWithoutWonDoublesForwardInput
    winnerDefensive?: UserCreateNestedOneWithoutWonDoublesDefensiveInput
    loserForward?: UserCreateNestedOneWithoutLostDoublesForwardInput
    loserDefensive?: UserCreateNestedOneWithoutLostDoublesDefensiveInput
  }

  export type MatchUncheckedCreateWithoutWinnerInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    loserId?: string | null
    winnerForwardId?: string | null
    winnerDefensiveId?: string | null
    loserForwardId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchCreateOrConnectWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchCreateManyWinnerInputEnvelope = {
    data: MatchCreateManyWinnerInput | MatchCreateManyWinnerInput[]
  }

  export type MatchCreateWithoutLoserInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winner?: UserCreateNestedOneWithoutWonSinglesInput
    winnerForward?: UserCreateNestedOneWithoutWonDoublesForwardInput
    winnerDefensive?: UserCreateNestedOneWithoutWonDoublesDefensiveInput
    loserForward?: UserCreateNestedOneWithoutLostDoublesForwardInput
    loserDefensive?: UserCreateNestedOneWithoutLostDoublesDefensiveInput
  }

  export type MatchUncheckedCreateWithoutLoserInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    winnerForwardId?: string | null
    winnerDefensiveId?: string | null
    loserForwardId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchCreateOrConnectWithoutLoserInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutLoserInput, MatchUncheckedCreateWithoutLoserInput>
  }

  export type MatchCreateManyLoserInputEnvelope = {
    data: MatchCreateManyLoserInput | MatchCreateManyLoserInput[]
  }

  export type MatchCreateWithoutWinnerForwardInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winner?: UserCreateNestedOneWithoutWonSinglesInput
    loser?: UserCreateNestedOneWithoutLostSinglesInput
    winnerDefensive?: UserCreateNestedOneWithoutWonDoublesDefensiveInput
    loserForward?: UserCreateNestedOneWithoutLostDoublesForwardInput
    loserDefensive?: UserCreateNestedOneWithoutLostDoublesDefensiveInput
  }

  export type MatchUncheckedCreateWithoutWinnerForwardInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    loserId?: string | null
    winnerDefensiveId?: string | null
    loserForwardId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchCreateOrConnectWithoutWinnerForwardInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWinnerForwardInput, MatchUncheckedCreateWithoutWinnerForwardInput>
  }

  export type MatchCreateManyWinnerForwardInputEnvelope = {
    data: MatchCreateManyWinnerForwardInput | MatchCreateManyWinnerForwardInput[]
  }

  export type MatchCreateWithoutWinnerDefensiveInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winner?: UserCreateNestedOneWithoutWonSinglesInput
    loser?: UserCreateNestedOneWithoutLostSinglesInput
    winnerForward?: UserCreateNestedOneWithoutWonDoublesForwardInput
    loserForward?: UserCreateNestedOneWithoutLostDoublesForwardInput
    loserDefensive?: UserCreateNestedOneWithoutLostDoublesDefensiveInput
  }

  export type MatchUncheckedCreateWithoutWinnerDefensiveInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    loserId?: string | null
    winnerForwardId?: string | null
    loserForwardId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchCreateOrConnectWithoutWinnerDefensiveInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutWinnerDefensiveInput, MatchUncheckedCreateWithoutWinnerDefensiveInput>
  }

  export type MatchCreateManyWinnerDefensiveInputEnvelope = {
    data: MatchCreateManyWinnerDefensiveInput | MatchCreateManyWinnerDefensiveInput[]
  }

  export type MatchCreateWithoutLoserForwardInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winner?: UserCreateNestedOneWithoutWonSinglesInput
    loser?: UserCreateNestedOneWithoutLostSinglesInput
    winnerForward?: UserCreateNestedOneWithoutWonDoublesForwardInput
    winnerDefensive?: UserCreateNestedOneWithoutWonDoublesDefensiveInput
    loserDefensive?: UserCreateNestedOneWithoutLostDoublesDefensiveInput
  }

  export type MatchUncheckedCreateWithoutLoserForwardInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    loserId?: string | null
    winnerForwardId?: string | null
    winnerDefensiveId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchCreateOrConnectWithoutLoserForwardInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutLoserForwardInput, MatchUncheckedCreateWithoutLoserForwardInput>
  }

  export type MatchCreateManyLoserForwardInputEnvelope = {
    data: MatchCreateManyLoserForwardInput | MatchCreateManyLoserForwardInput[]
  }

  export type MatchCreateWithoutLoserDefensiveInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winner?: UserCreateNestedOneWithoutWonSinglesInput
    loser?: UserCreateNestedOneWithoutLostSinglesInput
    winnerForward?: UserCreateNestedOneWithoutWonDoublesForwardInput
    winnerDefensive?: UserCreateNestedOneWithoutWonDoublesDefensiveInput
    loserForward?: UserCreateNestedOneWithoutLostDoublesForwardInput
  }

  export type MatchUncheckedCreateWithoutLoserDefensiveInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    loserId?: string | null
    winnerForwardId?: string | null
    winnerDefensiveId?: string | null
    loserForwardId?: string | null
  }

  export type MatchCreateOrConnectWithoutLoserDefensiveInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutLoserDefensiveInput, MatchUncheckedCreateWithoutLoserDefensiveInput>
  }

  export type MatchCreateManyLoserDefensiveInputEnvelope = {
    data: MatchCreateManyLoserDefensiveInput | MatchCreateManyLoserDefensiveInput[]
  }

  export type MatchUpsertWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
    create: XOR<MatchCreateWithoutWinnerInput, MatchUncheckedCreateWithoutWinnerInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutWinnerInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutWinnerInput, MatchUncheckedUpdateWithoutWinnerInput>
  }

  export type MatchUpdateManyWithWhereWithoutWinnerInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutWinnerInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: StringFilter<"Match"> | string
    isDoubles?: BoolFilter<"Match"> | boolean
    createdAt?: DateTimeFilter<"Match"> | Date | string
    winnerId?: StringNullableFilter<"Match"> | string | null
    loserId?: StringNullableFilter<"Match"> | string | null
    winnerForwardId?: StringNullableFilter<"Match"> | string | null
    winnerDefensiveId?: StringNullableFilter<"Match"> | string | null
    loserForwardId?: StringNullableFilter<"Match"> | string | null
    loserDefensiveId?: StringNullableFilter<"Match"> | string | null
  }

  export type MatchUpsertWithWhereUniqueWithoutLoserInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutLoserInput, MatchUncheckedUpdateWithoutLoserInput>
    create: XOR<MatchCreateWithoutLoserInput, MatchUncheckedCreateWithoutLoserInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutLoserInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutLoserInput, MatchUncheckedUpdateWithoutLoserInput>
  }

  export type MatchUpdateManyWithWhereWithoutLoserInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutLoserInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutWinnerForwardInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutWinnerForwardInput, MatchUncheckedUpdateWithoutWinnerForwardInput>
    create: XOR<MatchCreateWithoutWinnerForwardInput, MatchUncheckedCreateWithoutWinnerForwardInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutWinnerForwardInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutWinnerForwardInput, MatchUncheckedUpdateWithoutWinnerForwardInput>
  }

  export type MatchUpdateManyWithWhereWithoutWinnerForwardInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutWinnerForwardInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutWinnerDefensiveInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutWinnerDefensiveInput, MatchUncheckedUpdateWithoutWinnerDefensiveInput>
    create: XOR<MatchCreateWithoutWinnerDefensiveInput, MatchUncheckedCreateWithoutWinnerDefensiveInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutWinnerDefensiveInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutWinnerDefensiveInput, MatchUncheckedUpdateWithoutWinnerDefensiveInput>
  }

  export type MatchUpdateManyWithWhereWithoutWinnerDefensiveInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutWinnerDefensiveInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutLoserForwardInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutLoserForwardInput, MatchUncheckedUpdateWithoutLoserForwardInput>
    create: XOR<MatchCreateWithoutLoserForwardInput, MatchUncheckedCreateWithoutLoserForwardInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutLoserForwardInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutLoserForwardInput, MatchUncheckedUpdateWithoutLoserForwardInput>
  }

  export type MatchUpdateManyWithWhereWithoutLoserForwardInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutLoserForwardInput>
  }

  export type MatchUpsertWithWhereUniqueWithoutLoserDefensiveInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutLoserDefensiveInput, MatchUncheckedUpdateWithoutLoserDefensiveInput>
    create: XOR<MatchCreateWithoutLoserDefensiveInput, MatchUncheckedCreateWithoutLoserDefensiveInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutLoserDefensiveInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutLoserDefensiveInput, MatchUncheckedUpdateWithoutLoserDefensiveInput>
  }

  export type MatchUpdateManyWithWhereWithoutLoserDefensiveInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutLoserDefensiveInput>
  }

  export type UserCreateWithoutWonSinglesInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    lostSingles?: MatchCreateNestedManyWithoutLoserInput
    wonDoublesForward?: MatchCreateNestedManyWithoutWinnerForwardInput
    wonDoublesDefensive?: MatchCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesForward?: MatchCreateNestedManyWithoutLoserForwardInput
    lostDoublesDefensive?: MatchCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserUncheckedCreateWithoutWonSinglesInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    lostSingles?: MatchUncheckedCreateNestedManyWithoutLoserInput
    wonDoublesForward?: MatchUncheckedCreateNestedManyWithoutWinnerForwardInput
    wonDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesForward?: MatchUncheckedCreateNestedManyWithoutLoserForwardInput
    lostDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserCreateOrConnectWithoutWonSinglesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWonSinglesInput, UserUncheckedCreateWithoutWonSinglesInput>
  }

  export type UserCreateWithoutLostSinglesInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchCreateNestedManyWithoutWinnerInput
    wonDoublesForward?: MatchCreateNestedManyWithoutWinnerForwardInput
    wonDoublesDefensive?: MatchCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesForward?: MatchCreateNestedManyWithoutLoserForwardInput
    lostDoublesDefensive?: MatchCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserUncheckedCreateWithoutLostSinglesInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    wonDoublesForward?: MatchUncheckedCreateNestedManyWithoutWinnerForwardInput
    wonDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesForward?: MatchUncheckedCreateNestedManyWithoutLoserForwardInput
    lostDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserCreateOrConnectWithoutLostSinglesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLostSinglesInput, UserUncheckedCreateWithoutLostSinglesInput>
  }

  export type UserCreateWithoutWonDoublesForwardInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchCreateNestedManyWithoutWinnerInput
    lostSingles?: MatchCreateNestedManyWithoutLoserInput
    wonDoublesDefensive?: MatchCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesForward?: MatchCreateNestedManyWithoutLoserForwardInput
    lostDoublesDefensive?: MatchCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserUncheckedCreateWithoutWonDoublesForwardInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    lostSingles?: MatchUncheckedCreateNestedManyWithoutLoserInput
    wonDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesForward?: MatchUncheckedCreateNestedManyWithoutLoserForwardInput
    lostDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserCreateOrConnectWithoutWonDoublesForwardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWonDoublesForwardInput, UserUncheckedCreateWithoutWonDoublesForwardInput>
  }

  export type UserCreateWithoutWonDoublesDefensiveInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchCreateNestedManyWithoutWinnerInput
    lostSingles?: MatchCreateNestedManyWithoutLoserInput
    wonDoublesForward?: MatchCreateNestedManyWithoutWinnerForwardInput
    lostDoublesForward?: MatchCreateNestedManyWithoutLoserForwardInput
    lostDoublesDefensive?: MatchCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserUncheckedCreateWithoutWonDoublesDefensiveInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    lostSingles?: MatchUncheckedCreateNestedManyWithoutLoserInput
    wonDoublesForward?: MatchUncheckedCreateNestedManyWithoutWinnerForwardInput
    lostDoublesForward?: MatchUncheckedCreateNestedManyWithoutLoserForwardInput
    lostDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserCreateOrConnectWithoutWonDoublesDefensiveInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWonDoublesDefensiveInput, UserUncheckedCreateWithoutWonDoublesDefensiveInput>
  }

  export type UserCreateWithoutLostDoublesForwardInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchCreateNestedManyWithoutWinnerInput
    lostSingles?: MatchCreateNestedManyWithoutLoserInput
    wonDoublesForward?: MatchCreateNestedManyWithoutWinnerForwardInput
    wonDoublesDefensive?: MatchCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesDefensive?: MatchCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserUncheckedCreateWithoutLostDoublesForwardInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    lostSingles?: MatchUncheckedCreateNestedManyWithoutLoserInput
    wonDoublesForward?: MatchUncheckedCreateNestedManyWithoutWinnerForwardInput
    wonDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutLoserDefensiveInput
  }

  export type UserCreateOrConnectWithoutLostDoublesForwardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLostDoublesForwardInput, UserUncheckedCreateWithoutLostDoublesForwardInput>
  }

  export type UserCreateWithoutLostDoublesDefensiveInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchCreateNestedManyWithoutWinnerInput
    lostSingles?: MatchCreateNestedManyWithoutLoserInput
    wonDoublesForward?: MatchCreateNestedManyWithoutWinnerForwardInput
    wonDoublesDefensive?: MatchCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesForward?: MatchCreateNestedManyWithoutLoserForwardInput
  }

  export type UserUncheckedCreateWithoutLostDoublesDefensiveInput = {
    id?: string
    name: string
    forwardRating?: number
    defensiveRating?: number
    singlesRating?: number
    wonSingles?: MatchUncheckedCreateNestedManyWithoutWinnerInput
    lostSingles?: MatchUncheckedCreateNestedManyWithoutLoserInput
    wonDoublesForward?: MatchUncheckedCreateNestedManyWithoutWinnerForwardInput
    wonDoublesDefensive?: MatchUncheckedCreateNestedManyWithoutWinnerDefensiveInput
    lostDoublesForward?: MatchUncheckedCreateNestedManyWithoutLoserForwardInput
  }

  export type UserCreateOrConnectWithoutLostDoublesDefensiveInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLostDoublesDefensiveInput, UserUncheckedCreateWithoutLostDoublesDefensiveInput>
  }

  export type UserUpsertWithoutWonSinglesInput = {
    update: XOR<UserUpdateWithoutWonSinglesInput, UserUncheckedUpdateWithoutWonSinglesInput>
    create: XOR<UserCreateWithoutWonSinglesInput, UserUncheckedCreateWithoutWonSinglesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWonSinglesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWonSinglesInput, UserUncheckedUpdateWithoutWonSinglesInput>
  }

  export type UserUpdateWithoutWonSinglesInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    lostSingles?: MatchUpdateManyWithoutLoserNestedInput
    wonDoublesForward?: MatchUpdateManyWithoutWinnerForwardNestedInput
    wonDoublesDefensive?: MatchUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesForward?: MatchUpdateManyWithoutLoserForwardNestedInput
    lostDoublesDefensive?: MatchUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserUncheckedUpdateWithoutWonSinglesInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    lostSingles?: MatchUncheckedUpdateManyWithoutLoserNestedInput
    wonDoublesForward?: MatchUncheckedUpdateManyWithoutWinnerForwardNestedInput
    wonDoublesDefensive?: MatchUncheckedUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesForward?: MatchUncheckedUpdateManyWithoutLoserForwardNestedInput
    lostDoublesDefensive?: MatchUncheckedUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserUpsertWithoutLostSinglesInput = {
    update: XOR<UserUpdateWithoutLostSinglesInput, UserUncheckedUpdateWithoutLostSinglesInput>
    create: XOR<UserCreateWithoutLostSinglesInput, UserUncheckedCreateWithoutLostSinglesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLostSinglesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLostSinglesInput, UserUncheckedUpdateWithoutLostSinglesInput>
  }

  export type UserUpdateWithoutLostSinglesInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUpdateManyWithoutWinnerNestedInput
    wonDoublesForward?: MatchUpdateManyWithoutWinnerForwardNestedInput
    wonDoublesDefensive?: MatchUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesForward?: MatchUpdateManyWithoutLoserForwardNestedInput
    lostDoublesDefensive?: MatchUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserUncheckedUpdateWithoutLostSinglesInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    wonDoublesForward?: MatchUncheckedUpdateManyWithoutWinnerForwardNestedInput
    wonDoublesDefensive?: MatchUncheckedUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesForward?: MatchUncheckedUpdateManyWithoutLoserForwardNestedInput
    lostDoublesDefensive?: MatchUncheckedUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserUpsertWithoutWonDoublesForwardInput = {
    update: XOR<UserUpdateWithoutWonDoublesForwardInput, UserUncheckedUpdateWithoutWonDoublesForwardInput>
    create: XOR<UserCreateWithoutWonDoublesForwardInput, UserUncheckedCreateWithoutWonDoublesForwardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWonDoublesForwardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWonDoublesForwardInput, UserUncheckedUpdateWithoutWonDoublesForwardInput>
  }

  export type UserUpdateWithoutWonDoublesForwardInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUpdateManyWithoutWinnerNestedInput
    lostSingles?: MatchUpdateManyWithoutLoserNestedInput
    wonDoublesDefensive?: MatchUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesForward?: MatchUpdateManyWithoutLoserForwardNestedInput
    lostDoublesDefensive?: MatchUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserUncheckedUpdateWithoutWonDoublesForwardInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    lostSingles?: MatchUncheckedUpdateManyWithoutLoserNestedInput
    wonDoublesDefensive?: MatchUncheckedUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesForward?: MatchUncheckedUpdateManyWithoutLoserForwardNestedInput
    lostDoublesDefensive?: MatchUncheckedUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserUpsertWithoutWonDoublesDefensiveInput = {
    update: XOR<UserUpdateWithoutWonDoublesDefensiveInput, UserUncheckedUpdateWithoutWonDoublesDefensiveInput>
    create: XOR<UserCreateWithoutWonDoublesDefensiveInput, UserUncheckedCreateWithoutWonDoublesDefensiveInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWonDoublesDefensiveInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWonDoublesDefensiveInput, UserUncheckedUpdateWithoutWonDoublesDefensiveInput>
  }

  export type UserUpdateWithoutWonDoublesDefensiveInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUpdateManyWithoutWinnerNestedInput
    lostSingles?: MatchUpdateManyWithoutLoserNestedInput
    wonDoublesForward?: MatchUpdateManyWithoutWinnerForwardNestedInput
    lostDoublesForward?: MatchUpdateManyWithoutLoserForwardNestedInput
    lostDoublesDefensive?: MatchUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserUncheckedUpdateWithoutWonDoublesDefensiveInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    lostSingles?: MatchUncheckedUpdateManyWithoutLoserNestedInput
    wonDoublesForward?: MatchUncheckedUpdateManyWithoutWinnerForwardNestedInput
    lostDoublesForward?: MatchUncheckedUpdateManyWithoutLoserForwardNestedInput
    lostDoublesDefensive?: MatchUncheckedUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserUpsertWithoutLostDoublesForwardInput = {
    update: XOR<UserUpdateWithoutLostDoublesForwardInput, UserUncheckedUpdateWithoutLostDoublesForwardInput>
    create: XOR<UserCreateWithoutLostDoublesForwardInput, UserUncheckedCreateWithoutLostDoublesForwardInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLostDoublesForwardInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLostDoublesForwardInput, UserUncheckedUpdateWithoutLostDoublesForwardInput>
  }

  export type UserUpdateWithoutLostDoublesForwardInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUpdateManyWithoutWinnerNestedInput
    lostSingles?: MatchUpdateManyWithoutLoserNestedInput
    wonDoublesForward?: MatchUpdateManyWithoutWinnerForwardNestedInput
    wonDoublesDefensive?: MatchUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesDefensive?: MatchUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserUncheckedUpdateWithoutLostDoublesForwardInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    lostSingles?: MatchUncheckedUpdateManyWithoutLoserNestedInput
    wonDoublesForward?: MatchUncheckedUpdateManyWithoutWinnerForwardNestedInput
    wonDoublesDefensive?: MatchUncheckedUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesDefensive?: MatchUncheckedUpdateManyWithoutLoserDefensiveNestedInput
  }

  export type UserUpsertWithoutLostDoublesDefensiveInput = {
    update: XOR<UserUpdateWithoutLostDoublesDefensiveInput, UserUncheckedUpdateWithoutLostDoublesDefensiveInput>
    create: XOR<UserCreateWithoutLostDoublesDefensiveInput, UserUncheckedCreateWithoutLostDoublesDefensiveInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLostDoublesDefensiveInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLostDoublesDefensiveInput, UserUncheckedUpdateWithoutLostDoublesDefensiveInput>
  }

  export type UserUpdateWithoutLostDoublesDefensiveInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUpdateManyWithoutWinnerNestedInput
    lostSingles?: MatchUpdateManyWithoutLoserNestedInput
    wonDoublesForward?: MatchUpdateManyWithoutWinnerForwardNestedInput
    wonDoublesDefensive?: MatchUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesForward?: MatchUpdateManyWithoutLoserForwardNestedInput
  }

  export type UserUncheckedUpdateWithoutLostDoublesDefensiveInput = {
    name?: StringFieldUpdateOperationsInput | string
    forwardRating?: FloatFieldUpdateOperationsInput | number
    defensiveRating?: FloatFieldUpdateOperationsInput | number
    singlesRating?: FloatFieldUpdateOperationsInput | number
    wonSingles?: MatchUncheckedUpdateManyWithoutWinnerNestedInput
    lostSingles?: MatchUncheckedUpdateManyWithoutLoserNestedInput
    wonDoublesForward?: MatchUncheckedUpdateManyWithoutWinnerForwardNestedInput
    wonDoublesDefensive?: MatchUncheckedUpdateManyWithoutWinnerDefensiveNestedInput
    lostDoublesForward?: MatchUncheckedUpdateManyWithoutLoserForwardNestedInput
  }

  export type MatchCreateManyWinnerInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    loserId?: string | null
    winnerForwardId?: string | null
    winnerDefensiveId?: string | null
    loserForwardId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchCreateManyLoserInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    winnerForwardId?: string | null
    winnerDefensiveId?: string | null
    loserForwardId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchCreateManyWinnerForwardInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    loserId?: string | null
    winnerDefensiveId?: string | null
    loserForwardId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchCreateManyWinnerDefensiveInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    loserId?: string | null
    winnerForwardId?: string | null
    loserForwardId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchCreateManyLoserForwardInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    loserId?: string | null
    winnerForwardId?: string | null
    winnerDefensiveId?: string | null
    loserDefensiveId?: string | null
  }

  export type MatchCreateManyLoserDefensiveInput = {
    id?: string
    isDoubles: boolean
    createdAt?: Date | string
    winnerId?: string | null
    loserId?: string | null
    winnerForwardId?: string | null
    winnerDefensiveId?: string | null
    loserForwardId?: string | null
  }

  export type MatchUpdateWithoutWinnerInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loser?: UserUpdateOneWithoutLostSinglesNestedInput
    winnerForward?: UserUpdateOneWithoutWonDoublesForwardNestedInput
    winnerDefensive?: UserUpdateOneWithoutWonDoublesDefensiveNestedInput
    loserForward?: UserUpdateOneWithoutLostDoublesForwardNestedInput
    loserDefensive?: UserUpdateOneWithoutLostDoublesDefensiveNestedInput
  }

  export type MatchUncheckedUpdateWithoutWinnerInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateManyWithoutWinnerInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUpdateWithoutLoserInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneWithoutWonSinglesNestedInput
    winnerForward?: UserUpdateOneWithoutWonDoublesForwardNestedInput
    winnerDefensive?: UserUpdateOneWithoutWonDoublesDefensiveNestedInput
    loserForward?: UserUpdateOneWithoutLostDoublesForwardNestedInput
    loserDefensive?: UserUpdateOneWithoutLostDoublesDefensiveNestedInput
  }

  export type MatchUncheckedUpdateWithoutLoserInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateManyWithoutLoserInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUpdateWithoutWinnerForwardInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneWithoutWonSinglesNestedInput
    loser?: UserUpdateOneWithoutLostSinglesNestedInput
    winnerDefensive?: UserUpdateOneWithoutWonDoublesDefensiveNestedInput
    loserForward?: UserUpdateOneWithoutLostDoublesForwardNestedInput
    loserDefensive?: UserUpdateOneWithoutLostDoublesDefensiveNestedInput
  }

  export type MatchUncheckedUpdateWithoutWinnerForwardInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateManyWithoutWinnerForwardInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUpdateWithoutWinnerDefensiveInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneWithoutWonSinglesNestedInput
    loser?: UserUpdateOneWithoutLostSinglesNestedInput
    winnerForward?: UserUpdateOneWithoutWonDoublesForwardNestedInput
    loserForward?: UserUpdateOneWithoutLostDoublesForwardNestedInput
    loserDefensive?: UserUpdateOneWithoutLostDoublesDefensiveNestedInput
  }

  export type MatchUncheckedUpdateWithoutWinnerDefensiveInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateManyWithoutWinnerDefensiveInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUpdateWithoutLoserForwardInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneWithoutWonSinglesNestedInput
    loser?: UserUpdateOneWithoutLostSinglesNestedInput
    winnerForward?: UserUpdateOneWithoutWonDoublesForwardNestedInput
    winnerDefensive?: UserUpdateOneWithoutWonDoublesDefensiveNestedInput
    loserDefensive?: UserUpdateOneWithoutLostDoublesDefensiveNestedInput
  }

  export type MatchUncheckedUpdateWithoutLoserForwardInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateManyWithoutLoserForwardInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUpdateWithoutLoserDefensiveInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winner?: UserUpdateOneWithoutWonSinglesNestedInput
    loser?: UserUpdateOneWithoutLostSinglesNestedInput
    winnerForward?: UserUpdateOneWithoutWonDoublesForwardNestedInput
    winnerDefensive?: UserUpdateOneWithoutWonDoublesDefensiveNestedInput
    loserForward?: UserUpdateOneWithoutLostDoublesForwardNestedInput
  }

  export type MatchUncheckedUpdateWithoutLoserDefensiveInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateManyWithoutLoserDefensiveInput = {
    isDoubles?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    loserId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerForwardId?: NullableStringFieldUpdateOperationsInput | string | null
    winnerDefensiveId?: NullableStringFieldUpdateOperationsInput | string | null
    loserForwardId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}