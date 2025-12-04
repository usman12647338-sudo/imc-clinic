:root{
  --white: #FFFFFF;
  --ivory: #F8F5F2;
  --champagne: #D6C29C;
  --nude: #E9DED5;
  --char: #2B2B2B;
  --muted: #7a7a7a;
  --glass: rgba(255,255,255,0.6);
  --shadow: 0 12px 40px rgba(20,20,20,0.08);
  --radius: 14px;
  --max-w: 1180px;
}

*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: 'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, Arial;
  background: linear-gradient(180deg, var(--ivory) 0%, var(--white) 100%);
  color:var(--char);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.6;
}

/* utility */
.container{ max-width:var(--max-w); margin:0 auto; padding:0 20px; }

/* Preloader */
.preloader{
  position:fixed; inset:0; display:flex; align-items:center; justify-content:center;
  background:var(--white); font-family:'Playfair Display', serif; font-size:20px;
  z-index:9999; transition:opacity .4s ease;
}

/* NAV */
.nav{
  position:sticky; top:0; z-index:120;
  backdrop-filter: blur(8px) saturate(120%);
  background: linear-gradient(180deg, rgba(255,255,255,0.74), rgba(255,255,255,0.45));
  border-bottom: 1px solid rgba(0,0,0,0.04);
}
.nav-inner{ display:flex; align-items:center; justify-content:space-between; padding:18px 0; }
.brand{ font-family:'Playfair Display', serif; font-size:22px; color:var(--char); text-decoration:none; font-weight:700;}
.menu{ display:flex; gap:22px; align-items:center; }
.menu a{ text-decoration:none; color:var(--char); font-weight:500; font-size:15px; }
.book-btn{ padding:9px 16px; border-radius:10px; background:linear-gradient(90deg,var(--champagne), #bda675); color:white; text-decoration:none; font-weight:700; box-shadow:var(--shadow) }

/* Hamburger */
.hamburger{ display:none; background:none; border:none; font-size:20px; }

/* HERO */
.hero{ position:relative; min-height:72vh; display:flex; align-items:center; justify-content:center; overflow:hidden; }
.hero-video{
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:0;
  filter: saturate(0.95) contrast(0.98) brightness(0.88);
}
.hero-overlay{ position:relative; z-index:10; width:100%; display:flex; align-items:center; justify-content:center; padding:72px 20px; }
.hero-panel{
  max-width:980px; background: linear-gradient(180deg, rgba(255,255,255,0.62), rgba(255,255,255,0.38));
  border-radius:18px; padding:44px; box-shadow:var(--shadow); text-align:center; backdrop-filter: blur(8px);
}
.hero-title{ font-family:'Playfair Display', serif; margin:0 0 8px 0; font-size:38px; color:var(--char); }
.hero-sub{ color:var(--muted); margin:0 0 20px 0; font-size:16px; }
.hero-actions{ display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }

/* Buttons */
.btn{ display:inline-block; text-decoration:none; border-radius:10px; padding:10px 16px; font-weight:700; border:1px solid rgba(0,0,0,0.04); transition: transform .18s ease, box-shadow .18s ease; cursor:pointer; }
.btn.primary{ background:linear-gradient(90deg,var(--champagne), #bda675); color:white; box-shadow:var(--shadow); }
.btn.ghost{ background:transparent; color:var(--char); border:1px solid rgba(0,0,0,0.06); }

/* sections */
.section{ padding:64px 0; }
.section-title{ font-family:'Playfair Display', serif; font-size:28px; margin-bottom:12px; color:var(--char); }
.lead{ font-size:16px; color:var(--muted); margin-bottom:18px; }

/* split layout */
.split{ display:flex; gap:36px; align-items:center; }
.split .text{ flex:1 }
.split .media{ flex:1 }
.split img{ width:100%; border-radius:12px; box-shadow:var(--shadow); }

/* highlights */
.highlights{ list-style:none; padding:0; margin:10px 0 0 0; display:grid; grid-template-columns:repeat(2,1fr); gap:8px; color:var(--muted); }

/* cards grid */
.cards{ display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-top:18px; }
.card{ background:var(--white); border-radius:12px; padding:20px; box-shadow:var(--shadow); border:1px solid rgba(0,0,0,0.03); transition: transform .24s ease, box-shadow .24s ease; }
.card:hover{ transform:translateY(-8px); box-shadow:0 20px 55px rgba(20,20,20,0.09); }
.card h3{ margin-top:0; color:var(--char); font-size:18px; font-weight:600; }
.card p{ color:var(--muted); margin-bottom:10px; }
.link{ text-decoration:none; color:var(--champagne); font-weight:700; }

/* gallery */
.grid{ display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-top:16px; }
.grid img{ width:100%; height:220px; object-fit:cover; border-radius:10px; transition: transform .24s ease; }
.grid img:hover{ transform:scale(1.03); }

/* testimonials */
.testimonials-slider{ display:flex; gap:18px; margin-top:12px; }
.testimonial{ background:var(--white); padding:22px; border-radius:12px; box-shadow:var(--shadow); border:1px solid rgba(0,0,0,0.03); }
.testimonial p{ margin:0 0 12px 0; color:var(--muted) }

/* contact form */
.form form{ display:flex; flex-direction:column; gap:12px; }
.form input, .form textarea, .form select{
  padding:12px 14px; border-radius:10px; border:1px solid rgba(0,0,0,0.06); font-size:15px; background:transparent;
}
.form textarea{ min-height:120px; resize:vertical; }

/* footer */
.footer{ padding:22px 0; border-top:1px solid rgba(0,0,0,0.03); margin-top:30px; background:transparent; }
.footer-inner{ display:flex; justify-content:space-between; align-items:center; }

/* responsive */
@media (max-width:1000px){
  .cards{ grid-template-columns:repeat(2,1fr); }
  .grid{ grid-template-columns:repeat(2,1fr); }
  .split{ flex-direction:column; }
  .menu{ display:none; }
  .hamburger{ display:block; }
  .hero-panel{ padding:28px; border-radius:12px; }
}
@media (max-width:560px){
  .cards{ grid-template-columns:1fr; }
  .grid{ grid-template-columns:1fr; }
  .hero-title{ font-size:26px; }
  .hero{ min-height:56vh; }
  .highlights{ grid-template-columns:1fr; }
}
