export interface ReviewItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  verified: boolean;
  date: string;
}

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 1,
    name: "SARAH K.",
    location: "TROY, MI",
    rating: 5,
    quote: "Responsive, excellent communication, follow through, job done in a flash... They arrived early, backed the dump trailer right into the driveway, and loaded two rooms worth of old furniture in under 45 minutes.",
    verified: true,
    date: "Verified Client"
  },
  {
    id: 2,
    name: "MARK D.",
    location: "ROCHESTER HILLS, MI",
    rating: 5,
    quote: "Junk Bolt has been my go-to hauler for years. Fast and reliable service at a very fair price. If I could give them a hundred stars out of five I would. Prompt, great job, and swept up completely clean when done.",
    verified: true,
    date: "Verified Client"
  },
  {
    id: 3,
    name: "DAVID L.",
    location: "BIRMINGHAM, MI",
    rating: 5,
    quote: "Hired them to tear down a crumbling old yard shed. The crew knocked it down, loaded every scrap of wood and metal into their trailer, and raked the grass clean. Incredible work ethic.",
    verified: true,
    date: "Verified Client"
  },
  {
    id: 4,
    name: "ELIZABETH M.",
    location: "ROYAL OAK, MI",
    rating: 5,
    quote: "We had a nightmare commercial dumpster overflow that city inspectors flagged. Junk Bolt was out within 2 hours of our phone call, cleared all the packaging, and sent photos immediately.",
    verified: true,
    date: "Verified Client"
  }
];

export const SERVICE_AREAS = [
  { county: "Oakland County", cities: "Troy, Rochester Hills, Birmingham, Bloomfield Hills, Royal Oak, Ferndale, Novi, Farmington Hills" },
  { county: "Macomb County", cities: "Sterling Heights, Shelby Township, Macomb, Warren, Clinton Township, Utica, St. Clair Shores" },
  { county: "Wayne County", cities: "Detroit Metro, Grosse Pointe, Canton, Plymouth, Livonia, Dearborn" }
];
