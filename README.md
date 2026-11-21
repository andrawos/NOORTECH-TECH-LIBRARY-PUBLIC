# NOORTECH TECH LIBRARY (Public Edition)

Open-source, MIT-licensed starter library authored by **NOORTECH**, containing four lightweight, zero-dependency web packages ready for reuse.

## Included Packages

1. **`Components/NOORTECH-UI-Kit`** — Reusable UI components (`noortech-ui.css`, `noortech-ui.js`, `demo.html`).
2. **`Templates/Responsive-Landing-Page`** — Clean responsive landing page starter (`index.html`, `landing.css`, `landing.js`).
3. **`Source-Code/NOORTECH-Task-List`** — Lightweight client-side task list app (`index.html`, `styles.css`, `app.js`).
4. **`Images-Icons/NOORTECH-SVG-Icon-Pack`** — Original SVG icon sprite pack and previews (`icons.svg`, `preview.html`).

## Integrity Verification

`SHA256SUMS` provides deterministic SHA-256 verification for all **21 deliverable package files** across the four reusable packages listed above (`21/26` tracked repository files). Verify package integrity locally from the repository root:

```bash
sha256sum -c SHA256SUMS
```

### Checksum Coverage & Excluded Root Files (`5/26`)

Five repository-level metadata and infrastructure files are intentionally excluded from `SHA256SUMS`:

| Excluded File | Category | Rationale |
| :--- | :--- | :--- |
| `SHA256SUMS` | Manifest | Self-referential checksum manifests cannot contain their own SHA-256 digest without creating a cryptographic cycle. |
| `README.md` | Documentation | Repository documentation may be updated independently of package deliverables without invalidating unchanged package hashes. |
| `LICENSE` | Legal | Repository-level license text is verified by Git commit and tag signatures rather than package deliverable checksums. |
| `.gitignore` | VCS Config | Local Git ignore rules do not affect packaged runtime assets or distribution payloads. |
| `.github/workflows/ci.yml` | CI Automation | CI pipeline definitions evolve independently of package assets and are protected by repository branch rulesets and signed commits. |

All commits and release tags on `main` are cryptographically signed, ensuring end-to-end integrity across both checksummed package deliverables (`21/26`) and repository metadata (`5/26`).

## License Scope

The [MIT License](LICENSE) applies solely to the original NOORTECH-authored files in the four packages above and this repository's root scaffolding (`README.md`, `LICENSE`, `SHA256SUMS`, `.gitignore`, and `.github/workflows/ci.yml`). Each package also carries its own local `LICENSE.md`. This license does not grant rights to any third-party assets, fonts, trademarks, or dependencies added by downstream projects.
