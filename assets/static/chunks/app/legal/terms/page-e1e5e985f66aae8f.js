(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3592],{1808:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>d});var a=s(5155),i=s(2619),o=s.n(i),r=s(3264),n=s.n(r),l=s(856);function d(){let e=`
## Introduction

Welcome to **WhatExpsAre.Online** (“WEAO”, “we”, “our”, or “us”). By using our website, API, and services (collectively, the “Service”), you agree to these Terms of Service (“Terms”). If you do not agree, do not use the Service.

These Terms are split into two main sections:
1. Site Rules — how you may use the website and what is prohibited.  
2. API Rules — how to use our public API endpoints, rate limits, logging, and access requirements.

---

## Site Rules (What you can & can't do)

### Purpose & Scope
- WEAO is an **exploit status tracker** and informational resource. Content on the site is provided for **educational and informational purposes only**.
- We publish metadata about exploits (detection status, update status, supported Roblox versions, links, etc.) to help users stay informed. We do **not** provide or host exploit binaries.

### Allowed
- You may browse and use the public site content for personal or project use.
- Our API is **free to use without credit**, provided you comply with these Terms.
- You may link to our site and cite our publicly available data.

### Affiliate Links & Purchases
- Some entries may include affiliate or external links to third-party sites (e.g., purchase pages). While we try to publish **official** links and check them for obvious problems, we do **not** control those third-party sites.
- **WEAO is not responsible** for third-party merchants, purchase issues, payment disputes, download content, or breaches that occur on external sites. If you purchase from an external site, any transaction, refunds, or disputes are solely between you and that merchant.
- We **CAN** get you in touch with a merchant if you have purchased from a WEAO affiliate link, however this only applies if you contact us with proof of purchase inside our Discord server.

### Safety of External Links
- We make a best-effort attempt to verify that links point to legitimate, official pages. However, third-party sites can be changed or compromised after we publish links.
- You should exercise caution and use your own security measures (up-to-date OS/antivirus, sandboxing, etc.) when visiting or downloading from external sites. WEAO **cannot guarantee** third-party site safety and disclaims liability for damages to devices, data loss, or malware resulting from visiting external sites.

### Prohibited
You must **not**:
- Use the Service for illegal activities.
- Attack, abuse, or attempt to degrade or deny the Service (including DDoS, brute force, scraping at abusive scale, or other malicious acts).
- Attempt to access, modify, delete, or otherwise manipulate our internal systems, databases, or non-public endpoints (i.e., "endpoint hunting" or exploiting vulnerabilities to change database data).
- Bypass, disable, or try to evade any security, rate-limiting, or logging measures (including Cloudflare protections).
- Impersonate WEAO, modify our responses and present them as official, or otherwise misrepresent the source of data.
- Redistribute paid third-party content in violation of third-party terms.

### Consequences
Violations may result in:
- Temporary or permanent IP blocks,
- Rate-limit throttling,
- Reporting to relevant service providers

---

## API Rules (Usage, endpoints, and technical requirements)

### Free & Public
- The WEAO API endpoints are public and **free to use without requiring credit**. Use responsibly and in compliance with these Terms.

### Domains
You may access API endpoints from the following domains only:
- weao.xyz  
- weao.gg  
- whatexpsare.online

Requests from other domains may be blocked.

### User-Agent requirement
All requests to WEAO resources **must** include the User-Agent provided by the API docs.

Requests without this exact User-Agent may be blocked or rate-limited.

### Cloudflare & Logging
Cloudflare provides DDoS protection, caching, and firewalling for WEAO. When you access the Service, Cloudflare may log:
- your IP address,
- request headers (including User-Agent),
- request paths (for example, /api/status/exploits, /api/versions/current),
- security events (blocked or suspicious requests).

By using the API you acknowledge and accept that these logs are collected for security and operational purposes. See our Privacy Policy for more details on retained data (typically ~30 days), analytics, and deletion requests.

### Rate limiting and polite polling
- We enforce rate limits to ensure availability and stability. If you receive 429 status codes (Too Many Requests), reduce your request frequency or increase your polling interval.
- Do not poll at extremely aggressive intervals; excessive polling that harms service stability may result in throttling or blocking.
- Repeated abuse may lead to permanent IP blocks.

### Prohibited API actions
You must **not**:
- Attempt to discover undocumented or internal endpoints (endpoint hunting).
- Attempt to change server-side data via the API beyond documented endpoints (no unauthorized write/modify attempts).
- Attempt to inject, exploit, or otherwise manipulate backend systems (e.g., SQL injection, command injection).

### Provided endpoints (summary)
WEAO provides public read endpoints for Roblox versions and exploit statuses. Example endpoints and behavior:

- GET https://weao.xyz/api/versions/current  
  Returns current Roblox versions for Windows and Mac. Example fields:
  - Windows (string) — current Windows version hash  
  - WindowsDate (string) — when Windows last updated  
  - Mac (string) — current Mac version hash  
  - MacDate (string) — when Mac last updated

- GET https://weao.xyz/api/versions/future  
  Returns next/future versions (live channel preview).

- GET https://weao.xyz/api/versions/past  
  Returns previous versions (useful for downgrading).

- GET https://weao.xyz/api/status/exploits  
  Returns an array of exploit metadata objects (title, version, updatedDate, detected, rbxversion, platform, cost, links, flags like detected/updateStatus, etc.).

- GET https://weao.xyz/api/status/exploits/[exploit]  
  Returns a single exploit's status object.

**Note:** Example response formats and fields may change. Always handle HTTP status codes (200, 429, etc.) and parse responses defensively.

### Using API data
- You may use API responses in your projects, dashboards, or tools, provided you:
  - comply with these Terms,
  - do not imply endorsement by WEAO,
  - do not republish large parts of our documentation or site without permission.
- Attribution is appreciated but not required.

---

## Disclaimers & Liability (important)

- The Service is provided **“AS IS”** and **“AS AVAILABLE.”** WEAO disclaims all warranties to the fullest extent permitted by law.
- We strive to verify links and publish official sources, but we **do not guarantee** third-party site security or integrity. Third-party sites can be breached or changed; you visit them at your own risk.
- **WEAO is not responsible** for:
  - any damage to your device, loss of data, malware, or security compromise resulting from visiting or interacting with third-party sites linked from WEAO,
  - transactions, purchases, refunds, or other commercial issues related to third-party merchants or affiliate partners.
  - any warnings/bans from Roblox.
- WEAO’s liability for any claim arising from or related to these Terms is limited to the maximum extent permitted by applicable law.

---

## Termination

We may suspend or terminate access for those who violate these Terms. This may include IP blocking, rate throttling, or other technical measures.

---

## Modifications

We may update these Terms at any time. Changes are effective when posted; continued use constitutes acceptance.

---

## Governing Law & Dispute Resolution

These Terms are governed by applicable law. If any part is found invalid, the rest remain effective.

---

## Contact

For questions, abuse reports, or legal requests:

**Email:** weao@weao.xyz

---

By using WhatExpsAre.Online or its API, you agree to these Terms.
`;return(0,a.jsx)("div",{className:n().legal_page,children:(0,a.jsxs)("div",{className:n().legal_container,children:[(0,a.jsxs)("div",{className:n().legal_header,children:[(0,a.jsxs)(o(),{href:"/",className:n().legal_logo,children:[(0,a.jsx)("span",{children:"What"}),(0,a.jsx)("span",{className:n().exps,children:"Exps"}),(0,a.jsx)("span",{children:"Are."}),(0,a.jsx)("span",{className:n().online,children:"Online"})]}),(0,a.jsx)("div",{className:n().legal_company,children:"by Vienna Softworks"})]}),(0,a.jsxs)("div",{className:n().legal_title_container,children:[(0,a.jsx)("h1",{className:n().legal_title,children:"Terms of Service"}),(0,a.jsx)("div",{className:n().legal_date,children:"Last updated: September 20, 2025 by Vienna Softworks"})]}),(0,a.jsx)("div",{className:n().legal_content,children:(0,a.jsx)(l.oz,{children:e})})]})})}},3264:e=>{e.exports={legal_page:"weao-_0cfea7",legal_container:"weao-_2c8c10",legal_header:"weao-_81033a",legal_logo:"weao-_ed7642",exps:"weao-_882b77",online:"weao-_8ea7da",legal_company:"weao-_ae967d",legal_title_container:"weao-_606f85",legal_title:"weao-_e51476",legal_date:"weao-_136c0d",legal_content:"weao-_f8f2f3"}},9377:(e,t,s)=>{Promise.resolve().then(s.bind(s,1808))}},e=>{e.O(0,[7019,2619,856,8441,1255,7358],()=>e(e.s=9377)),_N_E=e.O()}]);