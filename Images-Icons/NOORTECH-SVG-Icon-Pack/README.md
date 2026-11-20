# NOORTECH Original SVG Icon Pack

**Version:** 1.0.0  
**Inventory:** 12 original outline icons  
**Format:** SVG symbol sprite  
**Dependencies:** None in `icons.svg`; `preview.html` references the external sprite. `preview-fixed.html` embeds the sprite inline.  
**License:** MIT for this icon pack; see `LICENSE.md`.

## Icons

| Symbol ID | Icon |
|---|---|
| `nt-home` | Home |
| `nt-search` | Search |
| `nt-user` | User |
| `nt-settings` | Settings |
| `nt-menu` | Menu |
| `nt-close` | Close |
| `nt-check` | Check |
| `nt-arrow-right` | Arrow right |
| `nt-calendar` | Calendar |
| `nt-bell` | Bell |
| `nt-heart` | Heart |
| `nt-location` | Location |

## Files
- `icons.svg` — original SVG symbol sprite.
- `preview.html` — original preview using external `icons.svg#...` references.
- `preview-fixed.html` — inline-sprite compatibility preview; works without an external SVG request.
- `noortech-icon-size-qa.html` — visual size and theme test for all 12 icons at 16px, 24px and 32px.
- `README.md` — this document.
- `LICENSE.md` — MIT license for the original icon-pack files.

## Integration

Inline the symbol sprite into the page, or load it as an external SVG file where the hosting environment permits external SVG references:
```html
<svg width="24" height="24" viewBox="0 0 24 24" role="img" aria-label="Home">
  <use href="icons.svg#nt-home"></use>
</svg>
```
For decorative icons, use `aria-hidden="true"` and ensure adjacent text communicates the action. Set CSS `fill:none`, `stroke:currentColor`, `stroke-width:1.8`, `stroke-linecap:round` and `stroke-linejoin:round`.

## Compatibility and QA
- The original preview uses an external SVG `<use>` reference. Local file viewers and some hosting contexts may block this pattern.
- Android Chrome screenshots confirm all 12 icons appear in the separate inline preview.
- Programmatic rasterization produced non-empty output for all 36 icon-size combinations (12 icons × 3 sizes).
- Manual visual inspection on the target Android device confirmed all 12 icons at 16px, 24px and 32px on light and dark backgrounds.
- Recommended default size: **24px** for common controls; **32px** for prominent icons. 16px is for compact contexts.
- Calculated preview contrast ratios exceed 3:1 for non-text graphical objects.
- TalkBack testing was intentionally excluded from this QA cycle. Screen-reader compatibility is therefore not certified by this report. Production controls must still expose accessible names.
- See `../IMAGES-ICONS-QA-REPORT-2026-11-15.md` for the consolidated QA record.

## Notes
- These are original simple interface symbols, not third-party icon-font files.
- No photographs, third-party logos or external assets are included.
- MIT licensing applies only to the original files covered by this pack's `LICENSE.md`.