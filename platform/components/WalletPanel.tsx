'use client';
import {useState} from 'react';
type EthereumProvider={request:(args:{method:string;params?:unknown[]})=>Promise<unknown>};
declare global {interface Window {ethereum?:EthereumProvider}}
export default function WalletPanel(){
 const [address,setAddress]=useState('');const [chain,setChain]=useState('');const [error,setError]=useState('');
 async function connect(){
  setError('');
  try{
   if(!window.ethereum){setError('Install a compatible wallet to connect.');return}
   const accounts=await window.ethereum.request({method:'eth_requestAccounts'}) as string[];
   if(!accounts?.[0]){setError('No wallet account returned.');return}
   setAddress(accounts[0]);
   const chainId=await window.ethereum.request({method:'eth_chainId'}) as string;
   setChain(String(Number.parseInt(chainId,16)));
  }catch{setError('Wallet connection was rejected or unavailable.')}
 }
 return <div className="walletbox">
  <div><strong>Wallet connection</strong><p>Read-only preview. No signatures or transactions requested.</p></div>
  {address?<div><span className="connected">{address.slice(0,6)}…{address.slice(-4)} · Chain {chain}</span> <button onClick={()=>{setAddress('');setChain('')}}>Disconnect view</button></div>:<button onClick={connect}>Connect wallet</button>}
  {error&&<p role="alert" className="warning">{error}</p>}
 </div>
}
