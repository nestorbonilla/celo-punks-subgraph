// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get _owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BaseUriUpdated extends ethereum.Event {
  get params(): BaseUriUpdated__Params {
    return new BaseUriUpdated__Params(this);
  }
}

export class BaseUriUpdated__Params {
  _event: BaseUriUpdated;

  constructor(event: BaseUriUpdated) {
    this._event = event;
  }

  get newBaseUri(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class MaxSupplyUpdated extends ethereum.Event {
  get params(): MaxSupplyUpdated__Params {
    return new MaxSupplyUpdated__Params(this);
  }
}

export class MaxSupplyUpdated__Params {
  _event: MaxSupplyUpdated;

  constructor(event: MaxSupplyUpdated) {
    this._event = event;
  }

  get newMaxSupply(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PriceUpdated extends ethereum.Event {
  get params(): PriceUpdated__Params {
    return new PriceUpdated__Params(this);
  }
}

export class PriceUpdated__Params {
  _event: PriceUpdated;

  constructor(event: PriceUpdated) {
    this._event = event;
  }

  get newPrice(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get _from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class royaltyFeeUpdated extends ethereum.Event {
  get params(): royaltyFeeUpdated__Params {
    return new royaltyFeeUpdated__Params(this);
  }
}

export class royaltyFeeUpdated__Params {
  _event: royaltyFeeUpdated;

  constructor(event: royaltyFeeUpdated) {
    this._event = event;
  }

  get royaltyFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Token__royaltyInfoResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class Token extends ethereum.SmartContract {
  static bind(address: Address): Token {
    return new Token("Token", address);
  }

  amountMintedPerAddress(param0: Address): BigInt {
    let result = super.call(
      "amountMintedPerAddress",
      "amountMintedPerAddress(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_amountMintedPerAddress(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "amountMintedPerAddress",
      "amountMintedPerAddress(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(_owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(_owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(_owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseUri(): string {
    let result = super.call("baseUri", "baseUri():(string)", []);

    return result[0].toString();
  }

  try_baseUri(): ethereum.CallResult<string> {
    let result = super.tryCall("baseUri", "baseUri():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  didPremint(param0: Address): boolean {
    let result = super.call("didPremint", "didPremint(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_didPremint(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("didPremint", "didPremint(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getApproved(_tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(_tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_tokenId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getOwnerNFTs(_owner: Address): Array<BigInt> {
    let result = super.call(
      "getOwnerNFTs",
      "getOwnerNFTs(address):(uint256[])",
      [ethereum.Value.fromAddress(_owner)]
    );

    return result[0].toBigIntArray();
  }

  try_getOwnerNFTs(_owner: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getOwnerNFTs",
      "getOwnerNFTs(address):(uint256[])",
      [ethereum.Value.fromAddress(_owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  isApprovedForAll(_owner: Address, _operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    _owner: Address,
    _operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromAddress(_operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  marketingWallets(param0: Address): BigInt {
    let result = super.call(
      "marketingWallets",
      "marketingWallets(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_marketingWallets(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "marketingWallets",
      "marketingWallets(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxMintNFT(): BigInt {
    let result = super.call("maxMintNFT", "maxMintNFT():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxMintNFT(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxMintNFT", "maxMintNFT():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  maxSupply(): BigInt {
    let result = super.call("maxSupply", "maxSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_maxSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("maxSupply", "maxSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  originalMinter(param0: BigInt): Address {
    let result = super.call(
      "originalMinter",
      "originalMinter(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_originalMinter(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "originalMinter",
      "originalMinter(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(_tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(_tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  price(): BigInt {
    let result = super.call("price", "price():(uint256)", []);

    return result[0].toBigInt();
  }

  try_price(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("price", "price():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  royaltyFee(): BigInt {
    let result = super.call("royaltyFee", "royaltyFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_royaltyFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("royaltyFee", "royaltyFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  royaltyInfo(_tokenId: BigInt, _salePrice: BigInt): Token__royaltyInfoResult {
    let result = super.call(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_salePrice)
      ]
    );

    return new Token__royaltyInfoResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_royaltyInfo(
    _tokenId: BigInt,
    _salePrice: BigInt
  ): ethereum.CallResult<Token__royaltyInfoResult> {
    let result = super.tryCall(
      "royaltyInfo",
      "royaltyInfo(uint256,uint256):(address,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_tokenId),
        ethereum.Value.fromUnsignedBigInt(_salePrice)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Token__royaltyInfoResult(value[0].toAddress(), value[1].toBigInt())
    );
  }

  supportsInterface(_interfaceID: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceID)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(_interfaceID: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(_interfaceID)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(_index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(_index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(_index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(_index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(_owner: Address, _index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    _owner: Address,
    _index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_owner),
        ethereum.Value.fromUnsignedBigInt(_index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(_tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(_tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get _approved(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class PremintCall extends ethereum.Call {
  get inputs(): PremintCall__Inputs {
    return new PremintCall__Inputs(this);
  }

  get outputs(): PremintCall__Outputs {
    return new PremintCall__Outputs(this);
  }
}

export class PremintCall__Inputs {
  _call: PremintCall;

  constructor(call: PremintCall) {
    this._call = call;
  }

  get preMinter(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class PremintCall__Outputs {
  _call: PremintCall;

  constructor(call: PremintCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get _from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateBaseUriCall extends ethereum.Call {
  get inputs(): UpdateBaseUriCall__Inputs {
    return new UpdateBaseUriCall__Inputs(this);
  }

  get outputs(): UpdateBaseUriCall__Outputs {
    return new UpdateBaseUriCall__Outputs(this);
  }
}

export class UpdateBaseUriCall__Inputs {
  _call: UpdateBaseUriCall;

  constructor(call: UpdateBaseUriCall) {
    this._call = call;
  }

  get _baseUri(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class UpdateBaseUriCall__Outputs {
  _call: UpdateBaseUriCall;

  constructor(call: UpdateBaseUriCall) {
    this._call = call;
  }
}

export class UpdateMaxSupplyCall extends ethereum.Call {
  get inputs(): UpdateMaxSupplyCall__Inputs {
    return new UpdateMaxSupplyCall__Inputs(this);
  }

  get outputs(): UpdateMaxSupplyCall__Outputs {
    return new UpdateMaxSupplyCall__Outputs(this);
  }
}

export class UpdateMaxSupplyCall__Inputs {
  _call: UpdateMaxSupplyCall;

  constructor(call: UpdateMaxSupplyCall) {
    this._call = call;
  }

  get _maxSupply(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateMaxSupplyCall__Outputs {
  _call: UpdateMaxSupplyCall;

  constructor(call: UpdateMaxSupplyCall) {
    this._call = call;
  }
}

export class UpdatePriceCall extends ethereum.Call {
  get inputs(): UpdatePriceCall__Inputs {
    return new UpdatePriceCall__Inputs(this);
  }

  get outputs(): UpdatePriceCall__Outputs {
    return new UpdatePriceCall__Outputs(this);
  }
}

export class UpdatePriceCall__Inputs {
  _call: UpdatePriceCall;

  constructor(call: UpdatePriceCall) {
    this._call = call;
  }

  get _newPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePriceCall__Outputs {
  _call: UpdatePriceCall;

  constructor(call: UpdatePriceCall) {
    this._call = call;
  }
}

export class UpdateroyaltyFeeCall extends ethereum.Call {
  get inputs(): UpdateroyaltyFeeCall__Inputs {
    return new UpdateroyaltyFeeCall__Inputs(this);
  }

  get outputs(): UpdateroyaltyFeeCall__Outputs {
    return new UpdateroyaltyFeeCall__Outputs(this);
  }
}

export class UpdateroyaltyFeeCall__Inputs {
  _call: UpdateroyaltyFeeCall;

  constructor(call: UpdateroyaltyFeeCall) {
    this._call = call;
  }

  get _royaltyFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateroyaltyFeeCall__Outputs {
  _call: UpdateroyaltyFeeCall;

  constructor(call: UpdateroyaltyFeeCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}