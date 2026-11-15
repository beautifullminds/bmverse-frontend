import type {Metadata} from 'next';
import Link from 'next/link';
import {sections} from '../lib/modules';
import './globals.css';
export const metadata:Metadata={title:'BMverse | Platform v2.4.2',description:'BMverse metaverse, gaming, education, NFT marketplace, DEX and creator economy preview'};
export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><header className="top"><Link href="/" className="brand"><span className="brandmark">✦</span> BMverse</Link><nav aria-label="Main navigation">{sections.map(s=><Link href={'/'+s.slug} key={s.slug}>{s.title.replace('BMverse','').replace('Metaverse & ','').replace('Member ','').replace('Operations ','').replace('Learning ','').trim()}</Link>)}</nav><a className="secondary" href="https://github.com/beautifullminds/bmverse-frontend" target="_blank" rel="noreferrer">GitHub</a></header>{children}<footer><div><strong>BMverse</strong><span>Platform development preview · Blueprint v2.4.2</span></div><p>Noncustodial design · No live purchase, trading, publishing or admin functions enabled</p></footer></body></html>
}
