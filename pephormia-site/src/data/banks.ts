// ===== PEPHORMIA information bank =====
// One entry per goal bucket. Grow a bank by adding to its `refs` array.
// tier: strong | human | weak | mech   ·   kind: paper | regulatory
// Only add a paper you can trace to a real source (DOI/PMID). Search links are honest placeholders.

export type Ref = {
  title: string;
  meta: string;                 // authors · journal year;vol(iss):pages
  kind: 'paper' | 'regulatory';
  tier?: 'strong' | 'human' | 'weak' | 'mech';
  href: string;                 // PubMed/DOI/official page
  note?: string;                // optional honest limit
};

export type Bank = {
  slug: string;
  title: string;
  tagline: string;
  compounds: string;
  contentBuckets: string[];     // which blog/library `bucket` tags feed this hub
  refs: Ref[];
};

// cross-cutting regulatory entries reused across buckets
const FDA_PCAC: Ref = {
  title: 'FDA Pharmacy Compounding Advisory Committee — 7-peptide review',
  meta: 'FDA · docket FDA-2025-N-6895 · 23–24 Jul 2026',
  kind: 'regulatory',
  href: 'https://www.regulations.gov/docket/FDA-2025-N-6895',
  note: 'Advisory vote on the 503A compounding list — not approval, not consumer legalisation.',
};
const TGA_SCHED: Ref = {
  title: 'TGA — scheduling of peptides in Australia (Poisons Standard)',
  meta: 'Therapeutic Goods Administration (AU)',
  kind: 'regulatory',
  href: 'https://www.tga.gov.au/products/unapproved-therapeutic-goods/compounded-medicines',
  note: 'Most listed peptides are prescription / scheduled in Australia.',
};

export const banks: Bank[] = [
  {
    slug: 'sleep', title: 'Sleep', tagline: 'Depth, latency, and circadian rhythm — what the evidence actually supports.',
    compounds: 'DSIP · melatonin · glycine', contentBuckets: ['Sleep'],
    refs: [
      { title: 'Delta sleep-inducing peptide (DSIP) — sleep-regulation research', meta: 'Literature since the 1970s · mixed / inconsistent', kind: 'paper', tier: 'weak',
        href: 'https://pubmed.ncbi.nlm.nih.gov/?term=delta+sleep-inducing+peptide',
        note: 'No robust modern controlled evidence of a reliable human sleep benefit.' },
      FDA_PCAC, TGA_SCHED,
    ],
  },
  {
    slug: 'energy', title: 'Energy & fatigue', tagline: 'Mitochondrial output and recovery — the newest, earliest-stage biology.',
    compounds: 'MOTS-c · creatine · CoQ10', contentBuckets: ['Energy'],
    refs: [
      { title: 'MOTS-c, a mitochondrial-derived peptide, promotes metabolic homeostasis', meta: 'Lee C, et al. Cell Metabolism 2015;21(3):443–454', kind: 'paper', tier: 'mech',
        href: 'https://pubmed.ncbi.nlm.nih.gov/?term=MOTS-c+Lee+Cell+Metabolism+2015',
        note: 'Cell/animal models; human clinical efficacy and long-term safety not established.' },
      FDA_PCAC,
    ],
  },
  {
    slug: 'metabolism', title: 'Metabolism & weight', tagline: 'Insulin sensitivity and body composition — evidence vs marketing.',
    compounds: 'GLP-1 class · MOTS-c', contentBuckets: ['Metabolism'],
    refs: [
      { title: 'MOTS-c and metabolic regulation', meta: 'Lee C, et al. Cell Metabolism 2015;21(3):443–454', kind: 'paper', tier: 'mech',
        href: 'https://pubmed.ncbi.nlm.nih.gov/?term=MOTS-c+metabolic', note: 'Preclinical; human outcomes not established.' },
      TGA_SCHED,
    ],
  },
  {
    slug: 'hormones', title: 'Hormones', tagline: 'The endocrine axis, honestly explained — no dosing, no sourcing.',
    compounds: 'DHEA · thyroid · GH axis', contentBuckets: ['Hormones'],
    refs: [ TGA_SCHED, FDA_PCAC ],
  },
  {
    slug: 'recovery', title: 'Recovery & repair', tagline: 'Tissue, tendon, wound and post-procedure — big animal literature, thin human data.',
    compounds: 'BPC-157 · TB-500 · GHK-Cu', contentBuckets: ['Recovery'],
    refs: [
      { title: 'Emerging use of BPC-157 — a systematic review', meta: 'Vasireddi N, et al. HSS Journal 2025 (35 preclinical : 1 uncontrolled human)', kind: 'paper', tier: 'weak',
        href: 'https://pubmed.ncbi.nlm.nih.gov/?term=BPC-157+systematic+review',
        note: 'No completed controlled human efficacy trials; WADA-prohibited.' },
      { title: 'Thymosin β4 / TB-500 in tissue repair', meta: 'Reviews of the fragment vs full-length Tβ4', kind: 'paper', tier: 'weak',
        href: 'https://pubmed.ncbi.nlm.nih.gov/?term=thymosin+beta+4+wound+healing',
        note: 'Human trials are on full-length Tβ4, not the TB-500 fragment.' },
      FDA_PCAC, TGA_SCHED,
    ],
  },
  {
    slug: 'focus', title: 'Focus & cognition', tagline: 'Attention, memory and neuroprotection — mostly regional, mostly small.',
    compounds: 'Semax · Selank', contentBuckets: ['Focus'],
    refs: [
      { title: 'Semax (ACTH 4–10 analogue) — cognition & neuroprotection', meta: 'Small Eastern-European trials; limited independent replication', kind: 'paper', tier: 'weak',
        href: 'https://pubmed.ncbi.nlm.nih.gov/?term=Semax+cognition',
        note: 'Little large-scale controlled data outside its region of origin.' },
      FDA_PCAC,
    ],
  },
  {
    slug: 'mood', title: 'Mood & stress', tagline: 'Stress load, resilience and calm — early and inconsistent.',
    compounds: 'Selank · DSIP', contentBuckets: ['Mood'],
    refs: [
      { title: 'Selank (anxiolytic peptide) — preclinical & small clinical work', meta: 'Russian literature; limited independent replication', kind: 'paper', tier: 'weak',
        href: 'https://pubmed.ncbi.nlm.nih.gov/?term=Selank+anxiety' },
      TGA_SCHED,
    ],
  },
  {
    slug: 'longevity', title: 'Longevity', tagline: 'Ageing biology — where hype and evidence part ways.',
    compounds: 'Epitalon · NAD⁺ · GHK', contentBuckets: ['Longevity'],
    refs: [
      { title: 'Epitalon (Ala-Glu-Asp-Gly) — telomerase / geroprotective studies', meta: 'Khavinson VK, et al. · animal & older human reports', kind: 'paper', tier: 'weak',
        href: 'https://pubmed.ncbi.nlm.nih.gov/?term=Epitalon+Khavinson',
        note: 'Longevity/telomere claims not established by modern independent controlled trials.' },
      { title: 'GHK-Cu and the "new gene data"', meta: 'Pickart L, Margolina A. Int J Mol Sci 2018;19(7):1987', kind: 'paper', tier: 'mech',
        href: 'https://pubmed.ncbi.nlm.nih.gov/29986520/', note: 'Gene-expression breadth in cell models, not a human longevity outcome.' },
      FDA_PCAC,
    ],
  },
  {
    slug: 'skin', title: 'Skin & hair', tagline: 'The one bucket you can also shop — 50 years of GHK-Cu research, read honestly.',
    compounds: 'GHK-Cu · Matrixyl-class', contentBuckets: ['Skin & Hair'],
    refs: [
      { title: 'Growth-modulating plasma tripeptide facilitates copper uptake into cells', meta: 'Pickart L, et al. Nature 1980;288:715–717', kind: 'paper', tier: 'strong',
        href: 'https://www.nature.com/articles/288715a0' },
      { title: 'Stimulation of collagen synthesis by the GHK-Cu complex', meta: 'Maquart FX, et al. FEBS Lett 1988;238(2):343–346', kind: 'paper', tier: 'mech',
        href: 'https://pubmed.ncbi.nlm.nih.gov/3169264/' },
      { title: 'Regenerative and protective actions of GHK-Cu — new gene data', meta: 'Pickart L, Margolina A. Int J Mol Sci 2018;19(7):1987', kind: 'paper', tier: 'mech',
        href: 'https://pubmed.ncbi.nlm.nih.gov/29986520/' },
      { title: 'Copper peptides in regenerative aesthetic dermatology', meta: 'Sarbaziha R, et al. Dermatological Reviews 2026', kind: 'paper', tier: 'human',
        href: 'https://doi.org/10.1002/der2.70067', note: 'Review; verify individual primary citations at source before relying on them.' },
    ],
  },
];

export const bankBySlug = Object.fromEntries(banks.map(b => [b.slug, b]));
