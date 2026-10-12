// Saját SVG illusztráció (nem stock fotó), így mindig betölt. Cserélhető <img>-re.
export default function Illustration() {
  return (
    <svg viewBox="0 0 320 340" role="img" aria-label="Illusztráció: automata kávégép csészével">
      <rect x="40" y="20" width="240" height="250" rx="26" fill="#2B1D18" />
      <rect x="58" y="38" width="204" height="62" rx="14" fill="#493126" />
      <circle cx="92" cy="69" r="14" fill="#C87545" /><circle cx="92" cy="69" r="5" fill="#2B1D18" />
      <rect x="128" y="58" width="96" height="8" rx="4" fill="#E7D7C3" opacity=".8" />
      <rect x="128" y="74" width="60" height="8" rx="4" fill="#E7D7C3" opacity=".45" />
      <rect x="130" y="108" width="60" height="28" rx="8" fill="#493126" />
      <rect x="152" y="136" width="16" height="30" rx="4" fill="#C87545" />
      <path d="M150 170v22M160 170v26M170 170v22" stroke="#C87545" strokeWidth="3" strokeLinecap="round" />
      <rect x="108" y="196" width="104" height="8" rx="4" fill="#493126" />
      <path d="M122 206h76v22a24 24 0 0 1-24 24h-28a24 24 0 0 1-24-24v-22Z" fill="#F7F1E7" />
      <path d="M198 212h8a12 12 0 0 1 0 24h-9" stroke="#F7F1E7" strokeWidth="7" fill="none" strokeLinecap="round" />
      <rect x="125" y="209" width="70" height="8" rx="4" fill="#C87545" />
      <rect x="30" y="270" width="260" height="26" rx="13" fill="#493126" />
      <path className="steam" d="M222 170c-6-8 6-12 0-20M238 176c-6-8 6-12 0-20" stroke="#E7D7C3" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".6" />
    </svg>
  )
}
