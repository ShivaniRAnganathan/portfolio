---
title: Simplified onboarding for PMS and AIF-only clients
company: FundsIndia Private Wealth
role: Product owner
timeline: Feb – Aug 2026
featured: false
order: 6
outcome:
  primary: PMS and AIF-only clients can see their portfolio without a mutual-fund account.
dek: A light login for clients who come to Private Wealth only for alternates.
scale:
  primary: High-net-worth clients who hold PMS or AIF and previously had no FundsIndia client ID. The number of eligible clients is [Copy pending].
sections:
  - heading: Context
    paragraphs:
      - primary: Many high-net-worth clients come to Private Wealth only for alternates such as PMS or AIF. FundsIndia's onboarding required a mutual-fund account first.
  - heading: The problem
    paragraphs:
      - primary: Without a mutual-fund account, a PMS or AIF-only client got no FundsIndia client ID. They did not appear in FundsIndia or in Wealth Spectrum, Ops could not set them up as normal clients, and relationship managers handled them manually. Managers said it made FundsIndia look mutual-fund-only rather than a full wealth platform.
        fallback: Without a mutual-fund account, a PMS or AIF-only client got no FundsIndia client ID. They did not appear in FundsIndia or in the third-party wealth reporting view, Ops could not set them up as normal clients, and relationship managers handled them manually. Managers said it made FundsIndia look mutual-fund-only rather than a full wealth platform.
  - heading: What I believed
    items:
      - primary: What these clients need first is visibility of what they already own, not a transaction journey. Asking for full mutual-fund onboarding just to see a PMS holding is effort with no payoff.
      - primary: The holdings data already existed in the consolidation layer. The missing piece was an identity to attach it to.
        pending: true
      - primary: Data for alternates arrives later than mutual-fund data, so expectations about freshness matter as much as the login itself.
  - heading: Options, and what I didn't do
    items:
      - primary: A login-only account, not full onboarding. Clients can log in and view holdings, with no mutual-fund onboarding. This gave up the ability to transact at sign-up in exchange for removing the blocker.
        pending: true
      - primary: I ranked it priority 0 on the onboarding roadmap, ahead of equity, NRI, corporate and HUF fixes.
      - primary: Joint accounts and secondary investors were handled inside the current flow first, rather than waiting on a new product path.
  - heading: Decision, and how it was tested
    items:
      - primary: I owned the requirement from the focus group through the roadmap to launch. It went live on 16 June 2026. A colleague noted it was completed within a very short timeframe.
      - primary: I approved the redesigned Private Wealth login page in UAT on 9 June 2026.
      - primary: I set data-latency expectations with Ops. About two weeks for holdings to reflect, and longer for PMS, AIF, offshore and unlisted.
      - primary: I resolved edge cases. Joint accounts on 31 July, and adding secondary investors on 21 August.
  - heading: Result
    paragraphs:
      - primary: Post-launch registrations and logins after July are not in this write-up.
    items:
      - primary: Early adoption was slow. Two weeks after launch, one user had registered. By 7 July, two clients had been onboarded through the new flow. Operations linked the slow start to a delay in the launch note.
        fallback: Early adoption was slower than planned. Relationship-manager communication at launch was the gap.
        pending: true
  - heading: What I'd do next
    items:
      - primary: Treat the launch note as part of the feature. Brief relationship managers before go-live, and give them a one-line pitch for eligible clients.
      - primary: Measure against the eligible base, not raw sign-ups.
      - primary: Add an "Add Investor" path directly to the simplified flow. Ops had hit three cases it could not cover by mid-August.
---
