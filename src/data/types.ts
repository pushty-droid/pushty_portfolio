/**
 * Shared shapes for the site's content.
 *
 * Anything not yet supplied is typed `| null` (or left out of an array) rather
 * than filled with a placeholder string. Components are written to render
 * nothing when their data is null, so the site is complete as it stands and
 * improves when a field is filled in — no layout work required either way.
 *
 * Source of truth for the copy itself is `content/*.md` in the repo root.
 * See `TODO.md` for the fields still waiting on an answer.
 */

export type ProfileLink = {
  label: string;
  href: string;
  /** Shown next to the label where the handle/ID is more useful than the URL. */
  handle?: string;
};

export type Profile = {
  name: string;
  /** Hero line. Variant 1 from content/01-profile.md. */
  oneLiner: string;
  /** Longer variant naming all three research threads — used on /about. */
  oneLinerLong: string;
  researchStatement: string;
  status: string;
  currently: string[];
  email: string;
  location: string;
  /** Not yet supplied — hero and /about are designed to work without it. */
  photo: string | null;
  links: ProfileLink[];
  researchInterests: string[];
  specialization: {
    primary: string;
    secondary: string;
    peripheral: string;
  };
  theoryAreas: string[];
};

export type Education = {
  degree: string;
  institution: string;
  affiliation: string | null;
  years: string;
  grade: string | null;
  rank: string | null;
  notes: string[];
  coursework: string[] | null;
};

export type ResearchPosition = {
  slug: string;
  title: string;
  institution: string;
  location: string;
  dates: string;
  programme: string | null;
  supervisors: { role: string; name: string; affiliation: string }[];
  /** Bulleted account of the work. Empty array renders no list. */
  highlights: string[];
  /** One-line entries (e.g. the exploratory plasma/GW project) use this instead. */
  summary: string | null;
  result: string | null;
  /** Links to a /projects detail page when one exists. */
  projectSlug: string | null;
};

export type Publication = {
  title: string;
  authors: string;
  leadAuthor: boolean;
  venue: string;
  year: string;
  arxivId: string | null;
  url: string | null;
  doi: string | null;
  description: string;
  keyNumbers: { label: string; value: string }[] | null;
  supervisors: string[] | null;
  bibtex: string | null;
  /** Held back until IIA/VIT clear the full text — see TODO.md. */
  pdf: string | null;
  projectSlug: string | null;
};

export type Project = {
  slug: string;
  /** Question-form title — this is the headline on the detail page. */
  title: string;
  shortTitle: string;
  dates: string;
  linkedWork: string;
  linkedWorkHref: string | null;
  /** The result that earns the card its place on the homepage. */
  stat: { value: string; caption: string };
  summary: string;
  tools: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Talk = {
  title: string;
  event: string;
  location: string | null;
  dates: string;
  role: string;
  upcoming: boolean;
  description: string | null;
};

export type Award = {
  title: string;
  detail: string;
  year: string;
};

export type School = {
  programme: string;
  year: string;
  content: string | null;
};

export type Outreach = {
  role: string;
  organisation: string;
  detail: string;
};

export type NewsItem = {
  date: string;
  /** Machine-readable, for <time datetime>. */
  datetime: string;
  title: string;
  href: string | null;
};
