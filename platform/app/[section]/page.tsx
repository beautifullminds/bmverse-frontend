import Link from 'next/link';
import {notFound} from 'next/navigation';
import {sections,sectionBySlug} from '../../lib/modules';
import WalletPanel from '../../components/WalletPanel';
export function generateStaticParams(){return sections.map(s=>({section:s.slug}));}
export default async function SectionPage({params}:{params:Promise<{section:string}>}){
 const {section}=await params; const s=sectionBySlug(section);if(!s)notFound();
 return <main className="inner"><div className="breadcrumb"><Link href="/">BMverse</Link> / {s.title}</div><section className="pagehero"><span className="eyebrow">{s.eyebrow} / {s.phase} planned</span><h1>{s.title}</h1><p>{s.description}</p><div className="notice">Preview interface — module integrations and live data are not yet deployed.</div></section>
 {section==='dashboard'&&<WalletPanel/>}
 {section==='dex'&&<div className="featurebox"><span className="eyebrow">Swap interface · not active</span><h2>Preview noncustodial trading</h2><p>Live quotes, router addresses, approvals and transaction submission are intentionally disabled until testnet configuration and security review.</p><button disabled>Swap unavailable in preview</button></div>}
 {section==='admin'&&<div className="featurebox"><h2>Restricted operations</h2><p>Admin screens are architectural placeholders only. Real moderation, support and configuration endpoints must enforce authorization on the server before activation.</p></div>}
 {section==='marketplace'&&<div className="featurebox"><span className="eyebrow">Featured collection</span><h2>BM MEGA Collection · ANTverse</h2><p>32 imported item names from the original OpenSea catalog; complete verified images and ownership remain pending.</p><Link className="button" href="/marketplace/bm-mega">Browse collection</Link></div>}
 <section className="section"><span className="eyebrow">Module roadmap</span><h2>Core capabilities</h2><div className="cards">{s.features.map((f,i)=><div className="feature" key={f}><span className="moduleindex">0{i+1}</span><h3>{f}</h3><p>Planned according to BMverse architecture v2.4.2. Implementation will follow tested APIs, accessibility and security acceptance criteria.</p></div>)}</div></section>
 <div className="notice">Status: design / scaffold. The presence of a page does not indicate implemented financial, publishing or account functionality.</div></main>
}
