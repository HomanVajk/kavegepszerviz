import Icon from './Icon.jsx'

export function ServiceCard({ s }) {
  return (
    <article className="card">
      <span className="card__icon" aria-hidden="true"><Icon name={s.icon} /></span>
      <h3>{s.title}</h3>
      <p>{s.text}</p>
    </article>
  )
}

export function WhyItem({ w }) {
  return (
    <li>
      <span className="why__icon" aria-hidden="true"><Icon name={w.icon} /></span>
      <div><h3>{w.title}</h3><p>{w.text}</p></div>
    </li>
  )
}
