/**
 * Thrive Group CPA — brand voice & mission (verbatim where noted).
 * Do not paraphrase or shorten the mission sentences.
 */
export const MISSION_STATEMENT_PARAGRAPH_1 =
  "We exist to empower businesses with clarity, confidence, and actionable insights."

export const MISSION_STATEMENT_PARAGRAPH_2 =
  "By combining precise accounting with forward-looking advisory services, we help our clients make smarter decisions today for a stronger tomorrow."

/** Full mission as a single string (e.g. JSON-LD, meta). */
export const MISSION_STATEMENT_FULL = `${MISSION_STATEMENT_PARAGRAPH_1} ${MISSION_STATEMENT_PARAGRAPH_2}`

/** Default site / page descriptions — drawn from mission language. */
export const SITE_META_DESCRIPTION = MISSION_STATEMENT_FULL

export const OPENGRAPH_DESCRIPTION = MISSION_STATEMENT_PARAGRAPH_1
