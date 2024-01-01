/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface GreeterInterface extends ethers.utils.Interface {
  functions: {
    "balances(address)": FunctionFragment;
    "getGreet()": FunctionFragment;
    "getGreetingHistoryAll()": FunctionFragment;
    "getGreetingHistoryCount()": FunctionFragment;
    "getGreetingHistoryOne(uint256)": FunctionFragment;
    "setGreeting(string)": FunctionFragment;
    "setGreetingPayable(string)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "balances", values: [string]): string;
  encodeFunctionData(functionFragment: "getGreet", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getGreetingHistoryAll",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGreetingHistoryCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGreetingHistoryOne",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setGreeting", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setGreetingPayable",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;

  decodeFunctionResult(functionFragment: "balances", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getGreet", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGreetingHistoryAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGreetingHistoryCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGreetingHistoryOne",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGreeting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGreetingPayable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "SetGreeting(address,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SetGreeting"): EventFragment;
}

export class Greeter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: GreeterInterface;

  functions: {
    balances(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGreet(overrides?: CallOverrides): Promise<[string]>;

    "getGreet()"(overrides?: CallOverrides): Promise<[string]>;

    getGreetingHistoryAll(overrides?: CallOverrides): Promise<[string[]]>;

    "getGreetingHistoryAll()"(overrides?: CallOverrides): Promise<[string[]]>;

    getGreetingHistoryCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getGreetingHistoryCount()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getGreetingHistoryOne(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getGreetingHistoryOne(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setGreeting(
      greeting_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGreeting(string)"(
      greeting_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setGreetingPayable(
      greeting_: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "setGreetingPayable(string)"(
      greeting_: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    withdraw(
      to: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "withdraw(address)"(
      to: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balances(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getGreet(overrides?: CallOverrides): Promise<string>;

  "getGreet()"(overrides?: CallOverrides): Promise<string>;

  getGreetingHistoryAll(overrides?: CallOverrides): Promise<string[]>;

  "getGreetingHistoryAll()"(overrides?: CallOverrides): Promise<string[]>;

  getGreetingHistoryCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getGreetingHistoryCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  getGreetingHistoryOne(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "getGreetingHistoryOne(uint256)"(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  setGreeting(
    greeting_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGreeting(string)"(
    greeting_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setGreetingPayable(
    greeting_: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "setGreetingPayable(string)"(
    greeting_: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  withdraw(
    to: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "withdraw(address)"(
    to: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGreet(overrides?: CallOverrides): Promise<string>;

    "getGreet()"(overrides?: CallOverrides): Promise<string>;

    getGreetingHistoryAll(overrides?: CallOverrides): Promise<string[]>;

    "getGreetingHistoryAll()"(overrides?: CallOverrides): Promise<string[]>;

    getGreetingHistoryCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getGreetingHistoryCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGreetingHistoryOne(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "getGreetingHistoryOne(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    setGreeting(greeting_: string, overrides?: CallOverrides): Promise<void>;

    "setGreeting(string)"(
      greeting_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setGreetingPayable(
      greeting_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setGreetingPayable(string)"(
      greeting_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(to: string, overrides?: CallOverrides): Promise<void>;

    "withdraw(address)"(to: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    SetGreeting(
      sender: null,
      oldGreeting: null,
      newGreeting: null
    ): EventFilter;
  };

  estimateGas: {
    balances(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGreet(overrides?: CallOverrides): Promise<BigNumber>;

    "getGreet()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGreetingHistoryAll(overrides?: CallOverrides): Promise<BigNumber>;

    "getGreetingHistoryAll()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGreetingHistoryCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getGreetingHistoryCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGreetingHistoryOne(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGreetingHistoryOne(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setGreeting(greeting_: string, overrides?: Overrides): Promise<BigNumber>;

    "setGreeting(string)"(
      greeting_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setGreetingPayable(
      greeting_: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "setGreetingPayable(string)"(
      greeting_: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    withdraw(to: string, overrides?: PayableOverrides): Promise<BigNumber>;

    "withdraw(address)"(
      to: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balances(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balances(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGreet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getGreet()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGreetingHistoryAll(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGreetingHistoryAll()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGreetingHistoryCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGreetingHistoryCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGreetingHistoryOne(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGreetingHistoryOne(uint256)"(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setGreeting(
      greeting_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGreeting(string)"(
      greeting_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setGreetingPayable(
      greeting_: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "setGreetingPayable(string)"(
      greeting_: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      to: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "withdraw(address)"(
      to: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}