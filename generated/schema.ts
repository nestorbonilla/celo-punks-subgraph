// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenID", Value.fromBigInt(BigInt.zero()));
    this.set("tokenURI", Value.fromString(""));
    this.set("ipfsURI", Value.fromString(""));
    this.set("image", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("gender", Value.fromString(""));
    this.set("type", Value.fromString(""));
    this.set("accesory1", Value.fromString(""));
    this.set("accesory2", Value.fromString(""));
    this.set("accesory3", Value.fromString(""));
    this.set("accesory4", Value.fromString(""));
    this.set("updatedAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get ipfsURI(): string {
    let value = this.get("ipfsURI");
    return value!.toString();
  }

  set ipfsURI(value: string) {
    this.set("ipfsURI", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get gender(): string {
    let value = this.get("gender");
    return value!.toString();
  }

  set gender(value: string) {
    this.set("gender", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get accesory1(): string {
    let value = this.get("accesory1");
    return value!.toString();
  }

  set accesory1(value: string) {
    this.set("accesory1", Value.fromString(value));
  }

  get accesory2(): string {
    let value = this.get("accesory2");
    return value!.toString();
  }

  set accesory2(value: string) {
    this.set("accesory2", Value.fromString(value));
  }

  get accesory3(): string {
    let value = this.get("accesory3");
    return value!.toString();
  }

  set accesory3(value: string) {
    this.set("accesory3", Value.fromString(value));
  }

  get accesory4(): string {
    let value = this.get("accesory4");
    return value!.toString();
  }

  set accesory4(value: string) {
    this.set("accesory4", Value.fromString(value));
  }

  get updatedAtTimestamp(): BigInt {
    let value = this.get("updatedAtTimestamp");
    return value!.toBigInt();
  }

  set updatedAtTimestamp(value: BigInt) {
    this.set("updatedAtTimestamp", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }
}
