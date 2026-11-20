/* NOORTECH UI Components v1.0.0
 * Original implementation for NOORTECH TECH LIBRARY.
 * No third-party runtime dependencies. MIT License; see LICENSE.md.
 */
(() => {
  "use strict";
  const define = (name, klass) => { if (!customElements.get(name)) customElements.define(name, klass); };
  class NTButton extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return; this.dataset.ready = "1";
      const b = document.createElement("button"); b.type = this.getAttribute("type") || "button";
      b.className = "nt-button " + (this.getAttribute("variant") || "primary");
      b.disabled = this.hasAttribute("disabled"); b.textContent = this.getAttribute("label") || this.textContent.trim() || "Button";
      b.addEventListener("click", e => { if (this.hasAttribute("loading")) e.preventDefault(); });
      this.replaceChildren(b);
    }
  }
  class NTBadge extends HTMLElement { connectedCallback(){ this.classList.add("nt-badge", "nt-badge--"+(this.getAttribute("tone")||"neutral")); } }
  class NTCard extends HTMLElement { connectedCallback(){ this.classList.add("nt-card"); if(this.hasAttribute("interactive")){this.tabIndex=0;this.setAttribute("role","button");} } }
  class NTAlert extends HTMLElement { connectedCallback(){ this.classList.add("nt-alert","nt-alert--"+(this.getAttribute("tone")||"info")); this.setAttribute("role",this.getAttribute("tone")==="error"?"alert":"status"); } }
  class NTAvatar extends HTMLElement { connectedCallback(){ this.classList.add("nt-avatar"); const label=this.getAttribute("label")||"?"; this.textContent=this.getAttribute("initials")||label.trim().split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase(); this.setAttribute("aria-label",label); } }
  class NTDivider extends HTMLElement { connectedCallback(){ this.classList.add("nt-divider"); this.setAttribute("role","separator"); } }
  class NTInput extends HTMLElement { connectedCallback(){ if(this.querySelector("input"))return; const i=document.createElement("input"); ["type","name","placeholder","value","required","disabled","autocomplete"].forEach(a=>{if(this.hasAttribute(a))i.setAttribute(a,this.getAttribute(a));}); i.className="nt-control"; this.replaceChildren(i); } }
  class NTTextarea extends HTMLElement { connectedCallback(){ if(this.querySelector("textarea"))return; const t=document.createElement("textarea"); ["name","placeholder","required","disabled","rows"].forEach(a=>{if(this.hasAttribute(a))t.setAttribute(a,this.getAttribute(a));}); t.className="nt-control"; this.replaceChildren(t); } }
  class NTSelect extends HTMLElement { connectedCallback(){ if(this.querySelector("select"))return; const s=document.createElement("select"); s.className="nt-control"; if(this.hasAttribute("required"))s.required=true; (this.getAttribute("options")||"Choose one|Option A|Option B").split("|").forEach((v,n)=>{const o=document.createElement("option");o.textContent=v;o.value=n? v:"";if(!n)o.disabled=true;s.append(o);}); this.replaceChildren(s); } }
  class NTCheckbox extends HTMLElement { connectedCallback(){ if(this.querySelector("input"))return; const l=document.createElement("label");l.className="nt-choice";const i=document.createElement("input");i.type="checkbox";i.checked=this.hasAttribute("checked");const s=document.createElement("span");s.textContent=this.getAttribute("label")||"Checkbox";l.append(i,s);this.replaceChildren(l); } }
  class NTRadio extends HTMLElement { connectedCallback(){ if(this.querySelector("input"))return; const l=document.createElement("label");l.className="nt-choice";const i=document.createElement("input");i.type="radio";i.name=this.getAttribute("name")||"nt-radio";i.value=this.getAttribute("value")||"option";const s=document.createElement("span");s.textContent=this.getAttribute("label")||"Radio option";l.append(i,s);this.replaceChildren(l); } }
  class NTSwitch extends HTMLElement { connectedCallback(){ if(this.querySelector("input"))return; const l=document.createElement("label");l.className="nt-switch";const i=document.createElement("input");i.type="checkbox";i.role="switch";i.checked=this.hasAttribute("checked");const s=document.createElement("span");s.textContent=this.getAttribute("label")||"Enable setting";l.append(i,s);this.replaceChildren(l); } }
  class NTProgress extends HTMLElement { connectedCallback(){ const v=Math.max(0,Math.min(100,Number(this.getAttribute("value")||0)));this.classList.add("nt-progress");this.setAttribute("role","progressbar");this.setAttribute("aria-valuemin","0");this.setAttribute("aria-valuemax","100");this.setAttribute("aria-valuenow",String(v));this.innerHTML='<span style="width:'+v+'%"></span>'; } }
  class NTSpinner extends HTMLElement { connectedCallback(){this.classList.add("nt-spinner");this.setAttribute("role","status");this.setAttribute("aria-label",this.getAttribute("label")||"Loading");} }
  class NTAccordion extends HTMLElement { connectedCallback(){ if(this.querySelector("details"))return;const d=document.createElement("details");const s=document.createElement("summary");s.textContent=this.getAttribute("title")||"More information";const c=document.createElement("div");c.className="nt-accordion__body";c.textContent=this.textContent.trim();d.append(s,c);this.replaceChildren(d);this.classList.add("nt-accordion"); } }
  class NTTabs extends HTMLElement { connectedCallback(){ const tabs=[...this.querySelectorAll("[data-tab]")];if(!tabs.length)return;this.classList.add("nt-tabs");tabs.forEach((t,n)=>{t.setAttribute("role","tab");t.setAttribute("tabindex",n?"-1":"0");t.setAttribute("aria-selected",n?"false":"true");t.addEventListener("click",()=>{tabs.forEach(x=>{x.setAttribute("aria-selected",String(x===t));x.tabIndex=x===t?0:-1;});this.querySelectorAll("[data-panel]").forEach(p=>p.hidden=p.dataset.panel!==t.dataset.tab);});}); } }
  class NTModal extends HTMLElement { connectedCallback(){this.classList.add("nt-modal");this.setAttribute("aria-hidden","true");} open(){this.setAttribute("aria-hidden","false");this.querySelector("button")?.focus();} close(){this.setAttribute("aria-hidden","true");} }
  class NTToast extends HTMLElement { connectedCallback(){this.classList.add("nt-toast");this.setAttribute("role","status");} show(message,duration=3000){if(message)this.textContent=message;this.hidden=false;clearTimeout(this._timer);this._timer=setTimeout(()=>this.hidden=true,duration);} }
  class NTMenu extends HTMLElement { connectedCallback(){this.classList.add("nt-menu");const trigger=this.querySelector("[data-menu-trigger]"),panel=this.querySelector("[data-menu-panel]");if(!trigger||!panel)return;trigger.setAttribute("aria-expanded","false");panel.hidden=true;trigger.addEventListener("click",()=>{const open=trigger.getAttribute("aria-expanded")!=="true";trigger.setAttribute("aria-expanded",String(open));panel.hidden=!open;});document.addEventListener("click",e=>{if(!this.contains(e.target)){trigger.setAttribute("aria-expanded","false");panel.hidden=true;}}); } }
  class NTForm extends HTMLElement { connectedCallback(){if(this.querySelector(":scope > form"))return;const form=document.createElement("form");form.className="nt-form";while(this.firstChild)form.append(this.firstChild);form.addEventListener("submit",e=>{if(!form.checkValidity()){e.preventDefault();form.reportValidity();return;}e.preventDefault();});this.replaceChildren(form);} }
  class NTBreadcrumbs extends HTMLElement { connectedCallback(){this.setAttribute("aria-label",this.getAttribute("label")||"Breadcrumb");this.setAttribute("role","navigation");this.classList.add("nt-breadcrumbs");} }
  class NTPagination extends HTMLElement { connectedCallback(){this.classList.add("nt-pagination");this.setAttribute("aria-label","Pagination");} }
  class NTSkeleton extends HTMLElement { connectedCallback(){this.classList.add("nt-skeleton");this.setAttribute("aria-hidden","true");} }
  class NTToggleGroup extends HTMLElement { connectedCallback(){this.classList.add("nt-toggle-group");this.querySelectorAll("button").forEach(b=>{b.addEventListener("click",()=>{this.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",String(x===b)));});if(!b.hasAttribute("aria-pressed"))b.setAttribute("aria-pressed","false");});} }
  [
    ["nt-button",NTButton],["nt-badge",NTBadge],["nt-card",NTCard],["nt-alert",NTAlert],["nt-avatar",NTAvatar],
    ["nt-divider",NTDivider],["nt-input",NTInput],["nt-textarea",NTTextarea],["nt-select",NTSelect],["nt-checkbox",NTCheckbox],
    ["nt-radio",NTRadio],["nt-switch",NTSwitch],["nt-progress",NTProgress],["nt-spinner",NTSpinner],["nt-accordion",NTAccordion],
    ["nt-tabs",NTTabs],["nt-modal",NTModal],["nt-toast",NTToast],["nt-menu",NTMenu],["nt-form",NTForm],
    ["nt-breadcrumbs",NTBreadcrumbs],["nt-pagination",NTPagination],["nt-skeleton",NTSkeleton],["nt-toggle-group",NTToggleGroup]
  ].forEach(([n,c])=>define(n,c));
  window.NOORTECH = Object.freeze({version:"1.0.0",components:24});
})();
