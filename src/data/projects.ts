export interface ProjectItem {
  id: number;
  title: string;
  loc: string;
  desc: string;
  time: string;
  load: string;
  finish: string;
  beforeImg: string;
  afterImg: string;
  badge: string;
  scope: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    title: "COMMERCIAL DUMPSTER ENCLOSURE OVERFLOW & TRASH CLEARANCE",
    loc: "Royal Oak, MI",
    desc: "Commercial waste enclosure completely inundated with discarded cardboard packaging, loose black bags, broken furniture, and property refuse. Completely cleared, corral doors freed, and concrete power-swept.",
    time: "Completed in 2 Hours",
    load: "Commercial Overflow Cleanout",
    finish: "100% Debris Cleared & Swept",
    beforeImg: "/assets/aistudio/IMG_1611_02906a12.jpg",
    afterImg: "/assets/aistudio/IMG_1612_4944d978.jpg",
    badge: "Commercial Dumpster",
    scope: "Overflow removal, pallet breakdown, pressure clean sweep"
  },
  {
    id: 2,
    title: "GARAGE CLEANOUT",
    loc: "Rochester Hills, MI",
    desc: "Packed high with over ten years of discarded storage, old cabinetry, stacked cardboard boxes, obsolete electronics, and miscellaneous debris. Fully sorted, hauled, and broom-swept.",
    time: "Completed in 3.5 Hours",
    load: "1 Full 15-Yard Trailer",
    finish: "Broom-Swept Finish",
    beforeImg: "/assets/aistudio/IMG_1791_383a626a.jpg",
    afterImg: "/assets/aistudio/IMG_1795_8dadfa93.jpg",
    badge: "Residential Garage",
    scope: "15-yard trailer full load, donation drop-off, sweep finish"
  },
  {
    id: 3,
    title: "SHED DEMOLITION & YARD CLEARING",
    loc: "Bloomfield Hills, MI",
    desc: "Weathered, dilapidated open-air wooden outbuilding structure overflowing with overgrown vegetation, stacked firewood, and scrap lumber. Completely dismantled to ground level with fence line cleared and raked.",
    time: "Completed in 1 Day",
    load: "Full Demolition & Haul",
    finish: "Cleared to Fence Line",
    beforeImg: "/assets/aistudio/20261024_140025_ffbe332d.jpg",
    afterImg: "/assets/aistudio/IMG_3619_1da8a9c4.jpg",
    badge: "Structural Teardown",
    scope: "Lumber breakdown, foundation sweep, brush removal"
  },
  {
    id: 4,
    title: "COLLAPSED OUTBUILDING TEARDOWN",
    loc: "Birmingham, MI",
    desc: "Severe structural failure with caved-in roof trusses, buckled wall panels, broken doorways, and scattered debris hazard. Demolished safely piece-by-piece, removed via 15-yard trailer, and ground fully leveled.",
    time: "Completed in 1 Day",
    load: "Heavy Structural Demolition",
    finish: "Ground-Level Cleared",
    beforeImg: "/assets/aistudio/IMG_2233_bfa2c111.jpg",
    afterImg: "/assets/aistudio/IMG_2141_6ba96167.jpg",
    badge: "Emergency Hazard",
    scope: "Roof truss removal, panel detachment, ground leveling"
  }
];
