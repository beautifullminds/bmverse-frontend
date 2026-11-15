export type NftCategory = 'Character'|'DOT-X'|'Music';
export type Nft = {name:string;category:NftCategory;source:string;tokenId?:string;contract?:string;standard?:string};
export const collectionURL='https://opensea.io/es/collection/bmverse-mega-collection';
const raw:[NftCategory,string][] = [
['DOT-X','DOT-X UNIVERSE HAND'],['Music','Music of "Renata" Identity'],['Character','Queen Berenice'],
['DOT-X','DOT-X CANDLE OF MAGIC SPEECH "Magical Potion"'],['DOT-X','DOT-X BLOODY WAR'],['Character','Triston'],
['DOT-X','DOT-X TRANSFORMATION "Magical Potion"'],['Music','Music of "Queen Berenice" Identity'],
['DOT-X','DOT-X PAMOLA MOTIONLESS'],['Character','Naphil'],['DOT-X','DOT-X COLD SUN'],['Character','Damerae'],
['Character','Bloom'],['DOT-X','DOT-X HANDS OF THE SEA'],['DOT-X','DOT-X MOTHER OF BLOOD'],
['Music','Music Of "Sydity" Identity 13'],['Music','Music of "Naphil" Identity 99'],
['DOT-X','DOT-X PAMOLA THE SAVIOR'],['Character','Queen Fariciah'],['DOT-X','DOT-X CMS II "Magical Potion"'],
['Music','Music of "Chinmoy"99'],['Character','Robert Antue "BOB"'],['Music','Music of "Daya\'ala" Identity'],
['DOT-X','DOT-X SUN RAYS'],['Music','Music of "Robert F\'Antue" Identity 99'],
['DOT-X','DOT-X COUPLE ROSE "Magical Potion"'],['DOT-X','DOT-X PAMOLA LEGENDARY "Magical Potion"'],
['DOT-X','DOT-X SUN SOUL'],['Character','Anton Antstein'],['Character','Sydity'],
['Character','Daya’ala'],['Music','Music of "Triston" Identity 99']
];
export const nfts:Nft[]=raw.map(([category,name],i)=>({
 category,name,source:i===0?'https://opensea.io/es/item/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/94780497993465599050485820079768614914578089821675988125085530622324667056129':collectionURL,
 ...(i===0?{tokenId:'94780497993465599050485820079768614914578089821675988125085530622324667056129',contract:'0x495f947276749ce646f68ac8c248420045cb7b5e',standard:'ERC-1155'}:{})
}));
