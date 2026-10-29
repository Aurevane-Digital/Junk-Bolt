export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  items: string[];
  equipment: string;
  buttonText: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "residential",
    title: "RESIDENTIAL",
    icon: "home",
    shortDesc: "Furniture, mattresses, appliances, garages, basements, attics, yard debris, and general household clutter removed with zero stress.",
    items: [
      "Sofas, sectionals, recliners & mattresses",
      "Refrigerators, washers, dryers & water heaters",
      "Full basement, attic, and garage cleanouts",
      "Estate settlement and hoarding remediation",
      "Yard debris, branches, storm cleanups"
    ],
    equipment: "Heavy-duty 15-yard hydraulic dump trailer with low loading sides",
    buttonText: "VIEW RESIDENTIAL"
  },
  {
    id: "commercial",
    title: "COMMERCIAL",
    icon: "apartment",
    shortDesc: "Office and retail fixture removal, warehouse cleanouts, cardboard baling, property management turnovers, and commercial site prep.",
    items: [
      "Office desks, cubicles, filing cabinets & chairs",
      "Retail display racks, counters & merchandising fixtures",
      "Dumpster corral overflows and compactor areas",
      "Rental unit trash-outs & tenant move-out clearance",
      "Warehouse pallet accumulation and corrugated recycling"
    ],
    equipment: "Commercial dispatch with fast turnaround and invoicing options",
    buttonText: "VIEW COMMERCIAL"
  },
  {
    id: "construction",
    title: "CONSTRUCTION DEBRIS, CLEANOUTS & MORE",
    icon: "construction",
    shortDesc: "Drywall, lumber, tile, remodel scrap, estate cleanouts, shed tear-downs, and heavy industrial load-outs. We handle all heavy lifting and responsible disposal.",
    items: [
      "Kitchen & bathroom demo debris (drywall, tile, vanities)",
      "Lumber, studs, subfloor, framing and decking boards",
      "Shed tear-downs, fencing, decks & outbuildings",
      "Concrete, brick, masonry & ceramic scrap",
      "Carpet tear-out and subfloor prep cleanup"
    ],
    equipment: "Reinforced steel trailer beds for dense masonry and demolition loads",
    buttonText: "VIEW ALL SERVICES"
  }
];

export interface TrailerEstimateTier {
  size: string;
  equivalent: string;
  priceEstimate: string;
  idealFor: string;
  percentage: number;
}

export const TRAILER_TIERS: TrailerEstimateTier[] = [
  {
    size: "1/4 Trailer Load",
    equivalent: "Approx. 2-3 pickup truck beds",
    priceEstimate: "$150 - $225",
    idealFor: "1-2 furniture pieces, single appliance, few boxes",
    percentage: 25
  },
  {
    size: "1/2 Trailer Load",
    equivalent: "Approx. 4-5 pickup truck beds",
    priceEstimate: "$275 - $380",
    idealFor: "Single room cleanout, couch set + mattress, light demo",
    percentage: 50
  },
  {
    size: "3/4 Trailer Load",
    equivalent: "Approx. 6-7 pickup truck beds",
    priceEstimate: "$420 - $550",
    idealFor: "Large garage partial cleanout, basement purge, yard overhaul",
    percentage: 75
  },
  {
    size: "Full 15-Yard Trailer",
    equivalent: "Approx. 8-10 pickup truck beds",
    priceEstimate: "$595 - $725",
    idealFor: "Full garage cleanout, whole-house estate, shed teardown",
    percentage: 100
  }
];
