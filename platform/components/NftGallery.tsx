'use client';
import {useMemo,useState} from 'react';
import {nfts} from '../lib/nfts';
export default function NftGallery(){
 const [q,setQ]=useState('');const [category,setCategory]=useState('All');
 const visible=useMemo(()=>nfts.filter(x=>(category==='All'||x.category===category)&&x.name.toLowerCase().includes(q.toLowerCase())),[q,category]);
 return <><div className="filterbar"><label>Search NFTs<input value={q} onChange={e=>setQ(e.target.value)} placeholder="Character, music, artifact…" /></label><label>Category<select value={category} onChange={e=>setCategory(e.target.value)}><option>All</option><option>Character</option><option>DOT-X</option><option>Music</option></select></label></div>
 <p className="subtle">{visible.length} imported NFT names · Artwork and complete metadata require verification · None shown as listed for sale</p>
 <div className="cards nftcards">{visible.map((nft,i)=><article key={nft.name} className="nft"><div className="art" aria-label="Artwork not yet imported"><span>{nft.category==='Character'?'✦':nft.category==='Music'?'♫':'◇'}</span><small>Artwork pending import</small></div><div className="nftinfo"><span className="overline">{nft.category} · Ethereum</span><h3>{nft.name}</h3><p>Not listed</p><a href={nft.source} target="_blank" rel="noreferrer">View source on OpenSea</a></div></article>)}</div></>
}
