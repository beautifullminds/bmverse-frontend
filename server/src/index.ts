/** Read-only API skeleton; no credentials, custody or live settlement. */
import {createServer} from 'node:http';
const port=Number(process.env.PORT||4000);
const origin=process.env.CORS_ORIGIN||'http://localhost:3000';
const catalog=['explore','play','learn','marketplace','dex','community','dashboard','studio','admin'];
const server=createServer((req,res)=>{
 const url=new URL(req.url||'/', 'http://localhost');
 res.setHeader('Content-Type','application/json; charset=utf-8');
 res.setHeader('Access-Control-Allow-Origin',origin);
 res.setHeader('X-Content-Type-Options','nosniff');
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='GET'){res.writeHead(405);res.end(JSON.stringify({error:{code:'METHOD_NOT_ALLOWED',message:'Read-only API scaffold'}}));return;}
 if(url.pathname==='/v1/health'){res.writeHead(200);res.end(JSON.stringify({status:'ok',service:'bmverse-api',version:'0.1.0',timestamp:new Date().toISOString()}));return;}
 if(url.pathname==='/v1/catalog'){res.writeHead(200);res.end(JSON.stringify({data:catalog.map(slug=>({slug,status:'preview'})),nextCursor:null}));return;}
 res.writeHead(404);res.end(JSON.stringify({error:{code:'NOT_FOUND',message:'Endpoint not found'}}));
});
server.listen(port,()=>console.log('BMverse read-only API on port '+port));
