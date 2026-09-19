# E2E Test Plan (Midas)

Dokumen ini adalah sumber kebenaran (single source of truth) untuk selector
`data-testid` yang dipakai oleh otomasi E2E (Midas). Selector harus **konsisten**
antara implementasi dan dokumen ini — jangan mengubah salah satu tanpa yang lain.

## Konvensi selector

Semua elemen interaktif / section utama diberi atribut `data-testid` yang stabil
(berasal dari data, bukan index yang berubah). Pattern:

- Section: `<section data-testid="hero">`, `stats-section`, `career-timeline`, `tech-stack-section`, `contact-section`
- Item ber-ID: `project-card-<id>`, `timeline-entry-<slug>`, `tech-item-<slug>`, `stat-<id>`
- Navigasi: `nav`, `nav-logo`, `nav-projects`, `nav-timeline`, `nav-skills`, `nav-contact`, `nav-cta`
- Modal case study: `case-study-<slug>`, `case-study-close`, `case-study-arch-diagram`

## Daftar selector kunci

| Elemen | Selector `data-testid` |
| --- | --- |
| Hero section | `hero` |
| CTA "View Projects" | `hero-cta-projects` |
| CTA "Contact Me" | `hero-cta-contact` |
| Navbar | `nav` |
| Nav links | `nav-projects`, `nav-timeline`, `nav-skills`, `nav-contact` |
| Stats section | `stats-section` |
| Stat card | `stat-<id>` (mis. `stat-years-experience`) |
| Projects grid | `projects-grid` |
| Project card | `project-card-<slug>` (mis. `project-card-telkom-multica-dpe`) |
| Case study modal | `case-study-<slug>` |
| Close modal | `case-study-close` |
| Architecture diagram | `case-study-arch-diagram` |
| Career timeline | `career-timeline` |
| Timeline entry | `timeline-entry-<company-slug>` |
| Tech stack section | `tech-stack-section` |
| Tech item | `tech-item-<skill-slug>` |
| Contact section | `contact-section` |
| Contact email | `contact-email` |
| Contact LinkedIn | `contact-linkedin` |
| Contact GitHub | `contact-github` |
| CTA mailto | `contact-cta-mailto` |

## Smoke-test path

Urutan yang wajib lolos untuk verifikasi E2E:

1. **Home load** — `document.title` berisi nama; `hero` tampil (heading terlihat).
2. **Scroll ke stats** — scroll ke `stats-section`; angka akhir tampil (mis. `8+`, `30%`).
3. **Buka case study** — klik `project-card-<slug>` → modal `case-study-<slug>` terbuka,
   `case-study-arch-diagram` tampil → klik `case-study-close` → modal tertutup.
4. **Deep-link case study** — buka `#/project/<slug>` langsung → modal terbuka.
5. **Timeline** — scroll ke `career-timeline`; `timeline-entry-<slug>` ada & bisa di-expand.
6. **Tech stack** — scroll ke `tech-stack-section`; `tech-item-<slug>` tampil.
7. **Navigasi** — klik `nav-contact` / `hero-cta-contact` → scroll ke `contact-section`;
   link sosial `contact-email`, `contact-linkedin`, `contact-github` ada.

## Aksesibilitas (prasyarat E2E)

- Modal case study: `role="dialog"`, `aria-modal="true"`, focus trap, tutup via ESC / backdrop / tombol `case-study-close`.
- Elemen interaktif dapat dioper via keyboard (focus visible).
- Indikator level / angka punya teks non-visual di DOM (mis. `sr-only`).

## Catatan

- Jumlah item per section bisa berubah mengikuti data; selector per-item selalu
  berbasis slug/id dari data, bukan posisi index.
