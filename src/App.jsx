import Header from './components/Header.jsx'
import Icon from './components/Icon.jsx'
import Illustration from './components/Illustration.jsx'
import { ServiceCard, WhyItem } from './components/Cards.jsx'
import { BUSINESS as B, NAV, SERVICES, WHY } from './data.js'

const Directions = ({ className, children }) => (
  <a className={className} href={B.mapsHref} target="_blank" rel="noopener noreferrer">
    {children}<span className="sr-only"> (új lapon nyílik meg)</span>
  </a>
)

export default function App() {
  return (
    <>
      <a className="skip" href="#tartalom">Ugrás a tartalomra</a>
      <Header />
      <main id="tartalom">
        {/* HERO */}
        <section className="hero" id="kezdolap">
          <div className="wrap hero__in">
            <div>
              <p className="eyebrow">ÚJ HELYEN BAJÁN</p>
              <h1>Kávégépszerviz Baján</h1>
              <p className="hero__sub">Háztartási kávégépek javítása és karbantartása</p>
              <p className="hero__slogan">„Gyors, megbízható szerviz. Régi minőség, új helyen.”</p>
              <p className="hero__text">Ha a kávégépe nem úgy működik, ahogy kellene, keresse bizalommal szervizünket. Hívjon minket, mondja el a problémát, és egyeztessünk a további lépésekről.</p>
              <div className="hero__cta">
                <a className="btn btn--dark" href={B.phoneHref}><Icon name="phone" />Telefonálok</a>
                <Directions className="btn btn--line"><Icon name="pin" />Útvonaltervezés</Directions>
              </div>
            </div>
            <div className="hero__art"><Illustration /></div>
          </div>
        </section>

        {/* SZOLGÁLTATÁSOK */}
        <section className="section section--soft" id="szolgaltatasok">
          <div className="wrap">
            <div className="section__head">
              <p className="eyebrow">Szolgáltatások</p>
              <h2>Miben segíthetünk?</h2>
              <p>Szervizünk háztartási kávégépek javításával és karbantartásával foglalkozik Baján. Ha kérdése van, hívjon minket.</p>
            </div>
            <div className="cards">{SERVICES.map((s) => <ServiceCard key={s.title} s={s} />)}</div>
          </div>
        </section>

        {/* MIÉRT MI */}
        <section className="section" aria-labelledby="miert">
          <div className="wrap">
            <div className="section__head">
              <p className="eyebrow">Miért minket?</p>
              <h2 id="miert">Egyszerű ügyintézés, gondos munka</h2>
            </div>
            <ul className="why">{WHY.map((w) => <WhyItem key={w.title} w={w} />)}</ul>
          </div>
        </section>

        {/* CTA SÁV */}
        <section aria-labelledby="cta">
          <div className="wrap">
            <div className="cta">
              <div className="cta__bar" aria-hidden="true" />
              <h2 id="cta">Ha nem főz a kávégép, hívjon bizalommal!</h2>
              <p>Vegye fel velünk a kapcsolatot, és egyeztessünk a javításról.</p>
              <a className="btn btn--copper" href={B.phoneHref}><Icon name="phone" />Hívás: {B.phone}</a>
            </div>
          </div>
        </section>

        {/* KAPCSOLAT */}
        <section className="section" id="kapcsolat">
          <div className="wrap">
            <div className="contact">
              <p className="eyebrow">Kapcsolat</p>
              <h2>Kávégépszerviz Baja – keressen minket</h2>
              <div className="contact__row">
                <span className="contact__icon" aria-hidden="true"><Icon name="phone" /></span>
                <div>
                  <p className="contact__label">Hívjon bizalommal!</p>
                  <a className="contact__phone" href={B.phoneHref}>{B.phone}</a>
                </div>
              </div>
              <div className="contact__row">
                <span className="contact__icon" aria-hidden="true"><Icon name="pin" /></span>
                <div>
                  <p className="contact__label">Cím</p>
                  <address>{B.address}</address>
                  <Directions className="link">Útvonaltervezés&nbsp;→</Directions>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* LÁBLÉC */}
      <footer className="footer">
        <div className="wrap footer__in">
          <div><p className="footer__brand">{B.name}</p><p>Háztartási kávégépek javítása és karbantartása Baján.</p></div>
          <div>
            <h2>Elérhetőség</h2>
            <p><a href={B.phoneHref}>{B.phone}</a></p>
            <p>{B.address}</p>
            <p><Directions className="footer-link-u">Útvonaltervezés</Directions></p>
          </div>
          <nav aria-label="Lábléc menü">
            <h2>Oldalak</h2>
            <ul>{NAV.map((n) => <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>)}</ul>
          </nav>
        </div>
        <p className="footer__copy">© {new Date().getFullYear()} {B.name}. Minden jog fenntartva.</p>
      </footer>

      {/* Mobil: állandó hívógomb */}
      <div className="callbar">
        <a className="btn btn--copper" href={B.phoneHref} aria-label={`Telefonhívás: ${B.phone}`}><Icon name="phone" />Hívás: {B.phone}</a>
      </div>
    </>
  )
}
