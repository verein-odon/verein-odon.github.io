# ODON's Open Data Maturity Model (ODMM) — v1.2

Source: https://odon.at/en/open-data/#odmm  
Last updated: 2026-03-29

The ODMM assesses datasets along two independent dimensions: Legal Openness and Technical Openness. Each dimension has four levels. A dataset is assigned the level whose indicators all apply — or, for the first level of each dimension, the level that applies when any restriction is present.

---

## Legal Openness

### L1 — Closed / Undefined
**Definition:** No clear legal permission for reuse  
**Indicators:**
- No explicit license is provided
- Terms of use are missing or unclear
- Default copyright applies

**Classification rule:** If *any* restriction is present → L1

### L2 — Restricted
**Definition:** License exists but limits reuse significantly  
**Indicators:**
- A license is explicitly provided
- License is publicly accessible
- License contains restrictive clauses (e.g. no commercial use, no derivatives, usage limited to specific groups or purposes)

**Classification rule:** All indicators must apply

### L3 — Open with Conditions
**Definition:** Reusable with minimal obligations  
**Indicators:**
- License is clearly stated and accessible
- Allows commercial use and modification
- Only light obligations (e.g. attribution, share-alike)

**Classification rule:** All indicators must apply. Typical licenses: attribution-style licenses

### L4 — Fully Open
**Definition:** No legal barriers  
**Indicators:**
- Explicit open license or public domain dedication
- Allows commercial use, modification, and redistribution
- No mandatory obligations (or only trivial ones)

**Classification rule:** All indicators must apply. Typical licenses: public domain / CC0-like

---

## Technical Openness

### T1 — Not Usable
**Definition:** Data cannot be effectively reused  
**Indicators:**
- Not machine-readable (e.g. scanned PDF, image)
- No structured format
- Cannot be extracted without significant effort

**Classification rule:** If *any* restriction is present → T1

### T2 — Accessible but Limited
**Definition:** Technically accessible, but with barriers  
**Indicators:**
- Machine-readable format exists
- Data can be downloaded or accessed
- One or more limitations: proprietary format (e.g. XLSX only), poor structure (merged cells, inconsistent schema), or no metadata / documentation

**Classification rule:** All indicators must apply

### T3 — Structured & Standardized
**Definition:** Data is well-structured and usable  
**Indicators:**
- Non-proprietary, structured format (CSV, JSON, XML)
- Consistent schema and data structure
- Consistent encoding and formats
- Basic metadata available (field descriptions, update frequency)

**Classification rule:** All indicators must apply

### T4 — Fully Open & Interoperable
**Definition:** Data is optimized for reuse and integration  
**Indicators:**
- Meets all T3 requirements
- Uses open standards (e.g. standard vocabularies, formats)
- Stable identifiers (IDs, URIs)
- Versioning or update tracking available
- Available via API and/or bulk download

**Classification rule:** All indicators must apply
