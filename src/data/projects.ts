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
    title: "GARAGE CLEANOUT",
    loc: "Rochester Hills, MI",
    desc: "Packed high with over ten years of discarded storage, old cabinetry, stacked cardboard boxes, obsolete electronics, and miscellaneous debris. Fully sorted, hauled, and broom-swept.",
    time: "Completed in 3.5 Hours",
    load: "1 Full 15-Yard Trailer",
    finish: "Broom-Swept Finish",
    beforeImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCXPA84-rcmDzaFzHxfzknpnsmy5974M7ytzlnyv34H9R9rAPe-hOVXgzkaK2OUGqZcDnLV_s_nhzdN__3oHLrwN6sMGMxWtllqFM8lSHFsAkkpfw3kxN9NS3gd5ES0qdy_5rurQmW3z28iQmxhO-RUN_M8bqaQuQnx5YwT8zmBbKqOwkZbuM8XouPYXLS_pt0a_UrfF3bG2jCtaw_aJGGpq4rpfyQ9uDkg02sY705pVWHwRgRagkKOw",
    afterImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPEpQ7Y5iwA_8t0fZpJCcciufRanSwOJjv0EWWIjuoKOG5SResPo0Bj_hmiAFBFY7KJJXHzGpU3Bq3JvsB0oe8HGhDlo9nNcjM8hCUQri7EhjOXOGjyoIaROEl1dE-B4pKEUmJsir1LMfmVC2dj4vMauLnhZ4f8aRm1G_ax_M7m_3QSz4-B7gNazmjkosXPbpfs16VVrwqzEJMbJ1LJtxzqJXNjfj66Ex1iNCmGAhNtj6GGyNWm89ERw",
    badge: "Residential Garage",
    scope: "15-yard trailer full load, donation drop-off, sweep finish"
  },
  {
    id: 2,
    title: "DUMPSTER CORRAL & LOT SWEEP",
    loc: "Royal Oak, MI",
    desc: "Commercial waste enclosure completely inundated with discarded cardboard packaging, loose black bags, broken furniture, and property refuse. Completely cleared, corral doors freed, and concrete power-swept.",
    time: "Completed in 2 Hours",
    load: "Commercial Overflow Cleanout",
    finish: "100% Debris Cleared & Swept",
    beforeImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAILaDXOW_9HnSr0G5bHzzK1cR6gNVs1q3jhl-k3Wp0y7z-eqNlBZKiKNRo2_loOOWVcn2PiN_VMzM5XNaSMgvSf_9IEm58b4BhHOunniqYFFJbJjbtqzbzfcWQMNUSXhPp4x7h2opcuSxcPfp-9m_xT8G2DR3r7Dkg9TF-v8Jc1aNyvPoA_2KweOGTWOVa_7qgeVyOkpfmrWrj8iTGFmUYPHNPQnKR6LBYTN6Kkb2idIXIi7ylZ7DkHQ",
    afterImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC-HK7voKVw5HTHSFJ7UUA6vqYoBCPgBS_ayNY5SuItethMhA8iU-VsRRshk05Yfgu1i5e_c8wggvHdvTktG8Af94GXXQxj2ahDSQw80qan6R9FWDbPhp7KUEflF-IONKrf2EUlZPAbpVOTPQiiO4ot_jMhvrnE1koBxM04tr1RntGbYJ1cYtLPNGqkgC3qw_MpRJjwQITmtkXmffcGB-Rn5vyKtpYCjtVEx8vPqz38jAZSr0p-zBa60g",
    badge: "Commercial Retail",
    scope: "Overflow removal, pallet breakdown, pressure clean sweep"
  },
  {
    id: 3,
    title: "SHED DEMOLITION & YARD CLEARING",
    loc: "Bloomfield Hills, MI",
    desc: "Weathered, dilapidated open-air wooden outbuilding structure overflowing with overgrown vegetation, stacked firewood, and scrap lumber. Completely dismantled to ground level with fence line cleared and raked.",
    time: "Completed in 1 Day",
    load: "Full Demolition & Haul",
    finish: "Cleared to Fence Line",
    beforeImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR68aD7cPsFPWXpSbyCdc-Ifle6-A5JuuoneUEGbhwvwA14m9XRIr2gHJH7yhK1dI_vISqZ5f5xUkdiEWH2lFFxbjyC5KJSEOUmcA8puxRYd6M7r4kWoF8weojPu785DdBHrN-TizuLFHeV96PdfUz-od52gUv93tgHFLNlLcj_ZRQdYyl3AriGZIzRK4NHQg1hH4XpwiVNHmZi7RyM4bZq_ySs7ibP-HPwftMU8sewxRCkKEq6D_hFw",
    afterImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxph0umkuDWIxVDwffRguOW28VMQvGEE4e8JrPE77ShQigrnqfLKGnpIepJ5em_grPboEGtu7DO2yLr9Tm5MnYALdg6YlrHzHO6oUspivBwAVFDWWp-uq-p5842aMABXDRVI_FX0qXh__LVZsYJZUyBYqK6t5bLjpUBJJ6bfa1SXJdnrr93qPqxi6p9HBbFmuI0OVPq9e482-XNzxfR--o_ba7I1iEbg5EJfpEA9mKvA4lWRUmX2J2ug",
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
    beforeImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCqdL0__0t5k0YO8yclc2FKjZGE_1clF94k5D0S_lWKgPISaywmiUJvra-Ixzns7iTxv8SQYzBSdF1LUxSSRbwLx3gsXv0-4lXqM2HXq-IgF2uE-V-3GiPrO0tqgb0WqcqzNFF2Cj-if5syWpQkDryUxaVJxKZQWK7xp2M4qTuKnuXCxOCuYN0aAcagcqNFaK4g2zx_9yLt_qTMjYMemgO4viIKGs0NE7pvxakkncpRJv7vrhAqLzDMQ",
    afterImg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt0NIYUzJrcc8T25aTK3AdRMGD9vtNfpKRIPZu12vBNcOWTbhKuBT5ucBSXIlelmaoZnfs5NlANNLeKcP1imj5qT2IryMB1490j5xdpsQ4zvYpdm7u8rqyrZRkWbrkYn4KjaPsyNuWGwoQOx3FwI9HYI-lzFp47gRj-yzUERrV44nCCPqgFT48OE_V7mPJ4qN_1UENK0OHgRvoc_a2k5tPB9Io84o7e4_9yehxvIW7THmbiLUjXEfZxQ",
    badge: "Emergency Hazard",
    scope: "Roof truss removal, panel detachment, ground leveling"
  }
];
