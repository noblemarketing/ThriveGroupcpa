export type Location = {
  city: string
  state: string
  anchor: string
  slug: string
  intro: string
  localContext: string
  industries: string[]
  faq: { q: string; a: string }[]
}

export const locations: Location[] = [
  {
    city: "Lancaster",
    state: "PA",
    anchor: "lancaster",
    slug: "lancaster-pa",
    intro:
      "Thrive Group CPA provides tax, accounting, and advisory services to businesses and individuals in Lancaster, PA.",
    localContext:
      "Lancaster is a thriving hub for small businesses, professional services, and a growing tech community. We understand the unique financial landscape of Lancaster County.",
    industries: [
      "Professional services",
      "Retail & hospitality",
      "Healthcare",
      "Construction",
    ],
    faq: [
      {
        q: "How much does a CPA cost in Lancaster, PA?",
        a: "CPA fees in Lancaster vary by service. Bookkeeping starts around $300–$600/month for small businesses; tax preparation typically ranges from $500–$2,000 depending on complexity. Contact us for a custom quote.",
      },
      {
        q: "What accounting services do small businesses in Lancaster need?",
        a: "Most Lancaster small businesses benefit from monthly bookkeeping, quarterly tax planning, payroll processing, and annual financial reviews. Thrive Group CPA offers all of these as part of a tailored engagement.",
      },
    ],
  },
  {
    city: "York",
    state: "PA",
    anchor: "york",
    slug: "york-pa",
    intro:
      "Thrive Group CPA serves businesses and individuals in York, PA with accounting, tax planning, and financial advisory services.",
    localContext:
      "York's economy is anchored by manufacturing and healthcare. We work with businesses across these industries to optimize cash flow and reduce tax burden.",
    industries: ["Manufacturing", "Healthcare", "Distribution", "Small business"],
    faq: [
      {
        q: "Is there a CPA firm near York, PA?",
        a: "Yes — Thrive Group CPA serves York and the surrounding area. While based in Lancaster County, we work with clients throughout South Central Pennsylvania.",
      },
      {
        q: "What tax services are available for businesses in York, PA?",
        a: "We offer full business tax preparation, year-round tax planning, entity structure advisory, and payroll tax compliance for York-area businesses.",
      },
    ],
  },
  {
    city: "Harrisburg",
    state: "PA",
    anchor: "harrisburg",
    slug: "harrisburg-pa",
    intro:
      "Thrive Group CPA provides accounting and tax services to businesses and professionals in Harrisburg, PA.",
    localContext:
      "As Pennsylvania's state capital, Harrisburg is home to government contractors, nonprofits, and professional service firms — each with unique accounting and compliance needs.",
    industries: [
      "Government contracting",
      "Nonprofits",
      "Professional services",
      "Healthcare",
    ],
    faq: [
      {
        q: "Do you work with nonprofits in Harrisburg, PA?",
        a: "Yes — we have experience with nonprofit accounting, Form 990 preparation, and grant compliance for organizations in the Harrisburg area.",
      },
      {
        q: "What CPA services are available for government contractors near Harrisburg?",
        a: "We offer accounting, tax planning, and financial reporting tailored to government contractors, including indirect rate calculations and compliance support.",
      },
    ],
  },
  {
    city: "Lebanon",
    state: "PA",
    anchor: "lebanon",
    slug: "lebanon-pa",
    intro:
      "Thrive Group CPA offers bookkeeping, tax preparation, and business advisory services to small businesses in Lebanon, PA.",
    localContext:
      "Lebanon County has a strong small-business and agricultural heritage. We're proud to serve the hardworking business owners who form the backbone of this community.",
    industries: ["Agriculture", "Small business", "Retail", "Construction"],
    faq: [
      {
        q: "Is there an accountant near Lebanon, PA?",
        a: "Thrive Group CPA serves Lebanon County businesses and individuals. We offer in-person and virtual engagements to fit your schedule.",
      },
      {
        q: "What bookkeeping services are available in Lebanon, PA?",
        a: "We provide monthly bookkeeping, reconciliations, and financial statements for small businesses in Lebanon County.",
      },
    ],
  },
  {
    city: "Lititz",
    state: "PA",
    anchor: "lititz",
    slug: "lititz-pa",
    intro:
      "Thrive Group CPA serves small businesses and individuals in Lititz, PA with accounting, tax, and advisory services.",
    localContext:
      "Lititz is one of Lancaster County's fastest-growing small-business communities, with a vibrant Main Street and an entrepreneurial spirit we love supporting.",
    industries: ["Retail", "Food & beverage", "Creative services", "Small business"],
    faq: [
      {
        q: "What CPA services are available in Lititz, PA?",
        a: "Thrive Group CPA offers bookkeeping, tax planning, payroll, and business advisory to Lititz-area businesses and individuals.",
      },
      {
        q: "How do I find a good accountant in Lititz, PA?",
        a: "Look for a CPA who understands local small business and offers proactive advice — not just year-end tax filing. Thrive Group CPA specializes in exactly that.",
      },
    ],
  },
  {
    city: "Ephrata",
    state: "PA",
    anchor: "ephrata",
    slug: "ephrata-pa",
    intro:
      "Thrive Group CPA provides tax and accounting services to agricultural businesses and individuals in Ephrata, PA.",
    localContext:
      "Ephrata and the surrounding area has strong agricultural roots and a thriving community of family-owned businesses. We understand the financial realities of farm and small-business ownership.",
    industries: ["Agriculture", "Farm business", "Small business", "Manufacturing"],
    faq: [
      {
        q: "Do you offer accounting for farms and agricultural businesses in Ephrata, PA?",
        a: "Yes — we work with agricultural businesses in Ephrata and Lancaster County on bookkeeping, tax planning, and cash flow management specific to farm operations.",
      },
      {
        q: "What tax services are available in Ephrata, PA?",
        a: "We offer individual and business tax preparation, agricultural tax planning, and year-round advisory for Ephrata-area clients.",
      },
    ],
  },
  {
    city: "Reading",
    state: "PA",
    anchor: "reading",
    slug: "reading-pa",
    intro:
      "Thrive Group CPA serves businesses and individuals in Reading and Berks County, PA with accounting, tax, and financial advisory services.",
    localContext:
      "Reading is a growing hub for manufacturing, distribution, and small business in Berks County. Our team understands the financial challenges and opportunities unique to this region.",
    industries: ["Manufacturing", "Distribution", "Healthcare", "Small business"],
    faq: [
      {
        q: "Is there a CPA firm serving Reading, PA?",
        a: "Yes — Thrive Group CPA serves Reading and the greater Berks County area with accounting, tax preparation, and business advisory services.",
      },
      {
        q: "What accounting services do Reading-area businesses need?",
        a: "Most Reading businesses benefit from monthly bookkeeping, tax planning, payroll services, and financial reporting. We tailor our services to your industry and size.",
      },
    ],
  },
  {
    city: "Chester County",
    state: "PA",
    anchor: "chester-county",
    slug: "chester-county-pa",
    intro:
      "Thrive Group CPA provides accounting, tax planning, and advisory services to businesses and professionals in Chester County, PA.",
    localContext:
      "Chester County is home to a diverse professional and suburban business community. We serve executives, entrepreneurs, and established businesses throughout the region.",
    industries: ["Professional services", "Finance", "Healthcare", "Technology"],
    faq: [
      {
        q: "What CPA services are available in Chester County, PA?",
        a: "Thrive Group CPA offers tax planning, bookkeeping, business advisory, and financial reporting to Chester County businesses and high-income individuals.",
      },
      {
        q: "Do you work with professionals and executives in Chester County?",
        a: "Yes — we specialize in personal tax planning, entity structuring, and investment-related tax strategy for Chester County professionals.",
      },
    ],
  },
]
