import { useState, useEffect } from "react";

const FILMS = [
  { id:1, no:"01", title:"FILM SLOT ONE",   tagline:"Your tagline goes here", genre:"ACTION",    year:"2025", rating:"PG-13", runtime:"2h 18m", trailer:"https://www.youtube.com/embed/REPLACE_ME_1", c:["#04041a","#0c0c46","#1515a0"], accent:"#5577ff" },
  { id:2, no:"02", title:"FILM SLOT TWO",   tagline:"Your tagline goes here", genre:"DRAMA",     year:"2025", rating:"R",     runtime:"1h 52m", trailer:"https://www.youtube.com/embed/REPLACE_ME_2", c:["#1a0404","#460c0c","#a01515"], accent:"#ff5544" },
  { id:3, no:"03", title:"FILM SLOT THREE", tagline:"Your tagline goes here", genre:"SCI-FI",    year:"2025", rating:"PG-13", runtime:"2h 35m", trailer:"https://www.youtube.com/embed/REPLACE_ME_3", c:["#041a1a","#0c4646","#15a0a0"], accent:"#33ffee" },
  { id:4, no:"04", title:"FILM SLOT FOUR",  tagline:"Your tagline goes here", genre:"THRILLER",  year:"2025", rating:"R",     runtime:"1h 45m", trailer:"https://www.youtube.com/embed/REPLACE_ME_4", c:["#1a1800","#464000","#a09600"], accent:"#ffcc22" },
  { id:5, no:"05", title:"FILM SLOT FIVE",  tagline:"Your tagline goes here", genre:"HORROR",    year:"2025", rating:"R",     runtime:"1h 58m", trailer:"https://www.youtube.com/embed/REPLACE_ME_5", c:["#08041a","#180c46","#2a15a0"], accent:"#bb44ff" },
  { id:6, no:"06", title:"FILM SLOT SIX",   tagline:"Your tagline goes here", genre:"ADVENTURE", year:"2025", rating:"PG",    runtime:"2h 08m", trailer:"https://www.youtube.com/embed/REPLACE_ME_6", c:["#1a0c00","#462a00","#a06400"], accent:"#ffaa33" },
];

function Deco({ idx, color }) {
  const s = { position:"absolute", inset:0, width:"100%", height:"100%", opacity:.1, color };
  const vb = "0 0 200 300";
  const pa = "none";
  if (idx===0) return <svg style={s} viewBox={vb} preserveAspectRatio={pa}>{[0,1,2,3,4,5,6].map(i=><line key={i} x1="200" y1={i*50} x2="0" y2={160+i*22} stroke="currentColor" strokeWidth="1"/>)}</svg>;
  if (idx===1) return <svg style={s} viewBox={vb} preserveAspectRatio={pa}>{[40,70,100,130,160,190].map(r=><ellipse key={r} cx="100" cy="320" rx={r} ry={r*.75} fill="none" stroke="currentColor" strokeWidth="1"/>)}</svg>;
  if (idx===2) return <svg style={s} viewBox={vb} preserveAspectRatio={pa}>{[...Array(7)].map((_,i)=><line key={`h${i}`} x1="0" y1={i*50} x2="200" y2={i*50} stroke="currentColor" strokeWidth=".6"/>)}{[...Array(5)].map((_,i)=><line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="300" stroke="currentColor" strokeWidth=".6"/>)}</svg>;
  if (idx===3) return <svg style={s} viewBox={vb} preserveAspectRatio={pa}>{[0,1,2,3,4].map(i=><polyline key={i} points={`0,${i*60+40} 50,${i*60} 100,${i*60+40} 150,${i*60} 200,${i*60+40}`} fill="none" stroke="currentColor" strokeWidth="1"/>)}</svg>;
  if (idx===4) return <svg style={s} viewBox={vb} preserveAspectRatio={pa}>{[[20,50,8],[75,110,14],[155,65,6],[45,200,11],[170,155,9],[105,255,13],[55,270,7],[145,225,10]].map(([x,y,r],i)=><circle key={i} cx={x} cy={y} r={r} fill="none" stroke="currentColor" strokeWidth="1"/>)}</svg>;
  return <svg style={s} viewBox={vb} preserveAspectRatio={pa}>{[40,90,140,190,240].map(y=><rect key={y} x="0" y={y} width="200" height="18" fill="currentColor"/>)}</svg>;
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Barlow+Condensed:wght@300;400;500;600;700&display=swap');
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
.cin{min-height:100vh;background:#080808;font-family:'Barlow Condensed','Arial Narrow',sans-serif;color:#e8dcc8;position:relative}
.grain{position:fixed;inset:0;pointer-events:none;z-index:9999;opacity:.28;animation:gr .12s steps(1) infinite;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='.08'/%3E%3C/svg%3E")}
@keyframes gr{0%{transform:translate(0,0)}10%{transform:translate(-2%,-3%)}20%{transform:translate(3%,2%)}30%{transform:translate(-1%,4%)}40%{transform:translate(4%,-1%)}50%{transform:translate(-3%,3%)}60%{transform:translate(2%,-4%)}70%{transform:translate(-4%,1%)}80%{transform:translate(1%,-2%)}90%{transform:translate(3%,4%)}100%{transform:translate(-2%,2%)}}
.strip{display:flex;gap:4px;padding:4px 6px;background:#0d0d0d;border-bottom:1px solid #1a1a1a;overflow:hidden}
.hole{width:14px;height:10px;border-radius:2px;background:#080808;border:1px solid #2a2a2a;flex-shrink:0}
.cin-hd{text-align:center;padding:52px 24px 0}
.eyebrow{font-size:11px;font-weight:700;letter-spacing:.5em;text-transform:uppercase;color:#d4a843;display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:18px}
.eyebrow::before,.eyebrow::after{content:'';width:60px;height:1px;background:#d4a843;opacity:.5}
.cin-logo{font-family:'Playfair Display',Georgia,serif;font-size:clamp(44px,9vw,90px);font-weight:900;letter-spacing:-.02em;line-height:.9;color:#f0e6d0}
.cin-logo em{font-style:italic;color:#d4a843}
.cin-sub{margin-top:16px;font-size:12px;font-weight:500;letter-spacing:.5em;text-transform:uppercase;color:#4a3a20}
.divider{display:flex;align-items:center;justify-content:center;gap:12px;margin:24px auto 52px;width:fit-content}
.dl{width:100px;height:1px}
.dl:first-child{background:linear-gradient(to right,transparent,#d4a843)}
.dl:last-child{background:linear-gradient(to left,transparent,#d4a843)}
.dd{width:6px;height:6px;background:#d4a843;transform:rotate(45deg)}
.cin-grid{max-width:1180px;margin:0 auto;padding:0 20px 80px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
@media(max-width:720px){.cin-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:460px){.cin-grid{grid-template-columns:1fr}}
.card{aspect-ratio:2/3;position:relative;cursor:pointer;overflow:hidden;border-radius:3px;border:1px solid #1e1e1e;transition:transform .4s cubic-bezier(.25,.46,.45,.94),border-color .3s,box-shadow .4s}
.card:hover{transform:translateY(-10px) scale(1.02)}
.card-bg{position:absolute;inset:0}
.card-no{position:absolute;bottom:-12px;right:-4px;font-family:'Playfair Display',Georgia,serif;font-size:165px;font-weight:900;line-height:1;pointer-events:none;user-select:none;z-index:1;opacity:.05}
.card-body{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;padding:18px}
.genre-badge{display:inline-block;font-size:10px;font-weight:700;letter-spacing:.4em;text-transform:uppercase;padding:4px 10px;border-radius:2px;width:fit-content;margin-bottom:auto;backdrop-filter:blur(4px)}
.card-foot{margin-top:auto}
.card-title{font-family:'Playfair Display',Georgia,serif;font-size:clamp(16px,2.2vw,24px);font-weight:900;line-height:1.1;color:#f0e6d0;text-shadow:0 2px 16px rgba(0,0,0,.9);margin-bottom:8px}
.card-meta{display:flex;gap:8px;font-size:11px;font-weight:600;letter-spacing:.05em;color:#5a4a30}
.card-meta span+span::before{content:'·';margin-right:8px}
.ov{position:absolute;inset:0;z-index:3;background:linear-gradient(to top,rgba(0,0,0,.95) 0%,rgba(0,0,0,.65) 45%,rgba(0,0,0,.15) 100%);opacity:0;transition:opacity .3s ease;display:flex;flex-direction:column;justify-content:flex-end;padding:22px}
.card:hover .ov{opacity:1}
.tagline{font-size:13px;font-style:italic;color:#c0aa80;line-height:1.5;margin-bottom:16px;transform:translateY(10px);opacity:0;transition:transform .35s ease .06s,opacity .35s ease .06s}
.card:hover .tagline{transform:translateY(0);opacity:1}
.play-btn{display:flex;align-items:center;gap:10px;background:transparent;border:1px solid #d4a843;color:#d4a843;padding:9px 18px;font-family:'Barlow Condensed','Arial Narrow',sans-serif;font-size:12px;font-weight:700;letter-spacing:.35em;text-transform:uppercase;cursor:pointer;width:fit-content;transform:translateY(10px);opacity:0;transition:transform .35s ease .12s,opacity .35s ease .12s,background .2s,color .2s}
.card:hover .play-btn{transform:translateY(0);opacity:1}
.play-btn:hover{background:#d4a843;color:#080808}
.play-ico{border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:9px solid currentColor}
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.92);backdrop-filter:blur(12px);z-index:500;display:flex;align-items:center;justify-content:center;padding:20px;animation:fi .2s ease}
@keyframes fi{from{opacity:0}to{opacity:1}}
.modal{width:100%;max-width:900px;background:#0e0e0e;border:1px solid #252525;position:relative;animation:su .3s cubic-bezier(.25,.46,.45,.94)}
@keyframes su{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
.modal-x{position:absolute;top:16px;right:16px;width:36px;height:36px;background:rgba(0,0,0,.8);border:1px solid #333;color:#888;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;z-index:10;transition:border-color .2s,color .2s}
.modal-x:hover{border-color:#d4a843;color:#d4a843}
.modal-vid{aspect-ratio:16/9;background:#000}
.modal-vid iframe{width:100%;height:100%;border:none;display:block}
.modal-info{padding:18px 22px 22px;display:flex;align-items:flex-start;justify-content:space-between;gap:16px;border-top:1px solid #181818}
.modal-title{font-family:'Playfair Display',Georgia,serif;font-size:clamp(18px,2.8vw,30px);font-weight:900;color:#f0e6d0}
.modal-tag{font-size:13px;font-style:italic;color:#5a4a30;margin-top:4px}
.badges{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end;align-items:flex-start;flex-shrink:0}
.bdg{font-size:10px;font-weight:700;letter-spacing:.25em;text-transform:uppercase;padding:5px 10px;border-radius:2px;background:#161616;border:1px solid}
.bdg-g{border-color:#2a2a2a;color:#7a6a50}
.bdg-t{border-color:#2a2a2a;color:#5a4a30}
.cin-ft{border-top:1px solid #141414;padding:22px;text-align:center;font-size:11px;letter-spacing:.35em;color:#2e2e2e;text-transform:uppercase}
`;

export default function Cinema() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const k = e => { if (e.key === "Escape") setActive(null); };
    document.addEventListener("keydown", k);
    return () => document.removeEventListener("keydown", k);
  }, []);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  const holes = Array.from({ length: 90 }, (_, i) => <div key={i} className="hole" />);

  return (
    <>
      <style>{CSS}</style>
      <div className="cin">
        <div className="grain" aria-hidden="true" />

        {/* Film strip */}
        <div className="strip" aria-hidden="true">{holes}</div>

        {/* Header */}
        <header className="cin-hd">
          <div className="eyebrow">Est. 2025</div>
          <h1 className="cin-logo">GRAND<br /><em>Palace</em></h1>
          <p className="cin-sub">Now Showing</p>
          <div className="divider" aria-hidden="true">
            <div className="dl" /><div className="dd" /><div className="dl" />
          </div>
        </header>

        {/* Movie Grid */}
        <main className="cin-grid">
          {FILMS.map((f, i) => (
            <article
              key={f.id}
              className="card"
              onClick={() => setActive(f)}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = f.accent;
                e.currentTarget.style.boxShadow = `0 24px 64px rgba(0,0,0,.85),0 0 40px ${f.accent}30`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#1e1e1e";
                e.currentTarget.style.boxShadow = "none";
              }}
              aria-label={`${f.title} — click to watch trailer`}
            >
              <div className="card-bg" style={{ background:`linear-gradient(160deg,${f.c[0]} 0%,${f.c[1]} 55%,${f.c[2]} 100%)` }} />
              <Deco idx={i} color={f.accent} />
              <div className="card-no" style={{ color:f.accent }}>{f.no}</div>

              <div className="card-body">
                <span className="genre-badge" style={{ color:f.accent, background:"rgba(0,0,0,.6)", border:`1px solid ${f.accent}` }}>
                  {f.genre}
                </span>
                <div className="card-foot">
                  <div className="card-title">{f.title}</div>
                  <div className="card-meta">
                    <span>{f.year}</span><span>{f.rating}</span><span>{f.runtime}</span>
                  </div>
                </div>
              </div>

              <div className="ov">
                <p className="tagline">{f.tagline}</p>
                <button
                  className="play-btn"
                  onClick={e => { e.stopPropagation(); setActive(f); }}
                  aria-label={`Watch trailer for ${f.title}`}
                >
                  <span className="play-ico" aria-hidden="true" />
                  Watch Trailer
                </button>
              </div>
            </article>
          ))}
        </main>

        <footer className="cin-ft">◆ Click any film to watch its trailer · Press Esc to close ◆</footer>

        {/* Trailer Modal */}
        {active && (
          <div className="modal-bg" onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label={`Trailer: ${active.title}`}>
            <div className="modal" onClick={e => e.stopPropagation()}>
              <button className="modal-x" onClick={() => setActive(null)} aria-label="Close trailer">✕</button>
              <div className="modal-vid">
                <iframe
                  src={`${active.trailer}?autoplay=1&rel=0&modestbranding=1`}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={`${active.title} trailer`}
                />
              </div>
              <div className="modal-info">
                <div>
                  <div className="modal-title">{active.title}</div>
                  <div className="modal-tag">{active.tagline}</div>
                </div>
                <div className="badges">
                  <span className="bdg bdg-g">{active.genre}</span>
                  <span className="bdg" style={{ borderColor:active.accent, color:active.accent }}>{active.rating}</span>
                  <span className="bdg bdg-t">{active.runtime}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
