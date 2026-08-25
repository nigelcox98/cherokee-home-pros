export const services = [
  {
    slug: 'septic',
    label: 'Septic',
    title: 'Septic service',
    blurb:
      'Tank pumping, inspections, repairs and drainfield work for Cherokee County homes on septic. Many unincorporated areas around Canton and Holly Springs still rely on septic systems.',
  },
  {
    slug: 'pool',
    label: 'Pool',
    title: 'Pool service',
    blurb:
      'Weekly maintenance, openings/closings, equipment repair and green-to-clean for in-ground pools in Canton, Woodstock and surrounding neighborhoods.',
  },
  {
    slug: 'roofing',
    label: 'Roofing',
    title: 'Roofing',
    blurb:
      'Roof replacement, storm damage and insurance claims in Cherokee County. Confirm license and insurance before you sign.',
  },
  {
    slug: 'hvac',
    label: 'HVAC',
    title: 'HVAC',
    blurb: 'AC repair, furnace service and system replacement for North Atlanta summers and mild winters.',
  },
  {
    slug: 'plumbing',
    label: 'Plumbing',
    title: 'Plumbing',
    blurb: 'Residential plumbing, water heaters, drain cleaning and emergency leaks across North Atlanta.',
  },
  {
    slug: 'electrical',
    label: 'Electrical',
    title: 'Electrical',
    blurb: 'Panel upgrades, wiring and general residential electrical work.',
  },
  {
    slug: 'ev-charger',
    label: 'EV Charger',
    title: 'EV charger installation',
    blurb:
      'Level 2 home charger installs, including Tesla Wall Connector. Many older Cherokee homes need a panel check first.',
  },
  {
    slug: 'tesla-body',
    label: 'Tesla Body',
    title: 'Tesla body & collision',
    blurb: 'Shops that handle Tesla aluminum body work, OEM parts and ADAS calibration near Woodstock and Kennesaw.',
  },
] as const;

export const serviceMeta: Record<string, { title: string; blurb: string }> = Object.fromEntries(
  services.map((service) => [service.slug, { title: service.title, blurb: service.blurb }])
);
