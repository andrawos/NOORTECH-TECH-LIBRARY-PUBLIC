# NOORTECH UI Components Kit

**Version:** 1.0.0  
**Status:** Original implementation — initial technical review passed; browser/device QA still required.  
**License:** MIT — see [LICENSE.md](LICENSE.md).  
**Dependencies:** None. Vanilla HTML, CSS and JavaScript.

## Included resources
- `noortech-ui.js`: 24 Web Components registered as custom elements.
- `noortech-ui.css`: theme tokens, responsive styles, focus states and reduced-motion support.
- `demo.html`: interactive showcase and integration example.
- `LICENSE.md`: MIT license for these original files.

## Component inventory (24)
`nt-button`, `nt-badge`, `nt-card`, `nt-alert`, `nt-avatar`, `nt-divider`, `nt-input`, `nt-textarea`, `nt-select`, `nt-checkbox`, `nt-radio`, `nt-switch`, `nt-progress`, `nt-spinner`, `nt-accordion`, `nt-tabs`, `nt-modal`, `nt-toast`, `nt-menu`, `nt-form`, `nt-breadcrumbs`, `nt-pagination`, `nt-skeleton`, `nt-toggle-group`.

## Quick start
1. Copy `noortech-ui.js` and `noortech-ui.css` into your project.
2. Add `<link rel="stylesheet" href="noortech-ui.css">` in the document head.
3. Add `<script defer src="noortech-ui.js"></script>`.
4. Use the custom elements shown in `demo.html`.

Example:
```html
<nt-button label="Save"></nt-button>
<nt-alert tone="success">Saved successfully.</nt-alert>
<nt-progress value="65"></nt-progress>
```

## API notes
- Button variants: `primary` (default), `secondary`, `outline`, `danger`.
- Alert/badge tones: `info`, `success`, `warning`, `danger`; neutral is the badge default.
- `nt-input`: supports standard input attributes including type, name, placeholder, required, disabled and autocomplete.
- `nt-select options`: pipe-separated labels; first entry is the disabled placeholder.
- `nt-progress value`: numeric percentage from 0 to 100.
- `nt-modal`: call the element's `open()` and `close()` methods.
- `nt-toast`: call `show(message, durationMs)`.
- `nt-tabs`: pair buttons with `data-tab` values and panels with matching `data-panel` values.

## Quality and limitations
- No network calls, external fonts, analytics or third-party runtime packages.
- Uses native form controls and semantic HTML where practical.
- Includes visible keyboard focus styles and reduced-motion handling.
- This is a lightweight starter kit, not a replacement for a full accessibility audit.
- Before production use, test in current Chrome, Firefox, Safari and Android Chrome; review keyboard navigation, screen-reader announcements, form validation and modal focus trapping. The demo modal is intentionally minimal and does not yet implement a full focus trap/Escape handling.

## Provenance and rights
All implementation files in this kit were authored for NOORTECH in this repository. They do not copy third-party component source. The MIT license applies to these kit files only; it does not grant rights to assets or dependencies added by downstream projects.
