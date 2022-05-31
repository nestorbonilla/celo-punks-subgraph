import {
    Transfer as TransferEvent,
    Token as TokenContract
} from '../generated/Token/Token'

import {
    Token, User
} from '../generated/schema'

import { ipfs, json } from '@graphprotocol/graph-ts'

const ipfsHash = "QmV9ixmfGpsZib9v3r2LFDuAcUSyzfTpnK2d3JyjaqfGYm"

export function handleTransfer(event: TransferEvent): void {
    let token = Token.load(event.params._tokenId.toString());
    if (!token) {
        token = new Token(event.params._tokenId.toString());
        token.tokenID = event.params._tokenId;
        token.tokenURI = "/" + event.params._tokenId.toString() + ".json"
        let metadata = ipfs.cat(ipfsHash + token.tokenURI);
        if (metadata) {
            const value = json.fromBytes(metadata).toObject()
            if (value) {
                const name = value.get('name')
                const image = value.get('image')
                if (name && image) {
                    token.name = name.toString()
                    token.image = image.toString()
                    token.ipfsURI = 'ipfs.io/ipfs/' + ipfsHash + token.tokenURI
                }
                const attributes = value.get('attributes')
                
                if (attributes) {
                    let attributesData = attributes.toArray()
                    for (let i = 0; i < attributesData.length; i++) {
                        let item = attributesData[i].toObject()
                        let trait: string
                        let traitName = item.get("trait_type")
                        if (traitName) {
                            trait = traitName.toString();
                            let value: string;
                            let traitValue = item.get("value")
                            if (traitValue) {
                              value = traitValue.toString()
                              if (trait == "Gender") {
                                token.gender = value
                              }
                              if (trait == "Type") {
                                token.type = value
                              }
                              if (trait == "Accessory") {
                                if (token.accesory1.length === 0) {
                                    token.accesory1 = value
                                } else if (token.accesory2.length === 0) {
                                    token.accesory2 = value
                                } else if (token.accesory3.length === 0) {
                                    token.accesory3 = value
                                } else if (token.accesory4.length === 0) {
                                    token.accesory4 = value
                                }
                              }
                            }
                        }
                    }
                }
            }
        }
    }
    token.updatedAtTimestamp = event.block.timestamp
    token.owner = event.params._to.toHexString()
    token.save()

    let user = User.load(event.params._to.toHexString())
    if (!user) {
        user = new User(event.params._to.toHexString())
        user.save()
    }
}