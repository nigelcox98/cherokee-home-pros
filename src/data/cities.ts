export const cities = [
  {
    slug: 'canton',
    label: 'Canton',
    title: 'Canton, GA',
    blurb:
      'Cherokee County seat. Many homes outside city limits are on septic. Strong demand for pool, roof and HVAC after storms.',
  },
  {
    slug: 'woodstock',
    label: 'Woodstock',
    title: 'Woodstock, GA',
    blurb:
      'Towne Lake, Eagle Watch and downtown Woodstock. Mix of city sewer and septic on the edges. High pool density.',
  },
  {
    slug: 'holly-springs',
    label: 'Holly Springs',
    title: 'Holly Springs, GA',
    blurb: 'Growing Cherokee city between Canton and Woodstock. Newer subdivisions plus older septic properties.',
  },
  {
    slug: 'ball-ground',
    label: 'Ball Ground',
    title: 'Ball Ground, GA',
    blurb: 'North Cherokee. Rural and small-town stock — septic and well service common.',
  },
  {
    slug: 'acworth',
    label: 'Acworth',
    title: 'Acworth, GA',
    blurb: 'Cobb / Cherokee edge. Lake Allatoona area homes often need pool and HVAC help.',
  },
  {
    slug: 'kennesaw',
    label: 'Kennesaw',
    title: 'Kennesaw, GA',
    blurb: 'Cobb County. Useful for Tesla body and larger multi-trade shops that cover Cherokee.',
  },
  {
    slug: 'marietta',
    label: 'Marietta',
    title: 'Marietta, GA',
    blurb: 'Cobb County hub. Many contractors based here also run trucks into Cherokee County.',
  },
] as const;

export const cityMeta: Record<string, { title: string; blurb: string }> = Object.fromEntries(
  cities.map((city) => [city.slug, { title: city.title, blurb: city.blurb }])
);
