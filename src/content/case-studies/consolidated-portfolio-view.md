---
title: One view of a client's whole portfolio
company: FundsIndia Private Wealth
role: Product owner and vendor lead
timeline: May 2025 – Sep 2026
featured: true
order: 3
outcome:
  primary: Daily use of the consolidated view rose 47%.
  fallback: Daily usage of the consolidated view rose by nearly half after the app launch.
  pending: true
dek: Holdings, performance, allocation and reports in one place, for every Private Wealth client.
scale:
  primary: All Private Wealth clients. The pre-launch check covered 15–20 portfolios across PMS, AIF, mutual funds and equities.
sections:
  - heading: Context
    paragraphs:
      - primary: Private Wealth clients at FundsIndia hold PMS, AIF, mutual funds, equities and more. Clients and their relationship managers had to piece that picture together, product by product.
  - heading: The problem
    paragraphs:
      - primary: Clients and relationship managers needed one view of holdings, performance, allocation and reports across every product, without asking Ops for a report.
  - heading: What I believed
    items:
      - primary: A wealth client's trust depends on the numbers being right. One wrong holding hurts more than a missing feature, so accuracy had to come before launch.
      - primary: Relationship managers are the channel. If they don't trust the dashboard, clients won't either, so enabling them is part of the launch.
      - primary: Clients look at their portfolio on their phones, so the view had to be in the app they already open.
        pending: true
  - heading: Options, and what I didn't do
    items:
      - primary: Buy the consolidation layer and own the experience around it. Consolidation ran on Wealth Spectrum, a third-party platform, with FundsIndia's client and relationship-manager surfaces on top. I did not build aggregation in-house. That would have been slower to cover every product type.
        fallback: Buy the consolidation layer and own the experience around it. Consolidation ran on a third-party wealth reporting platform, with FundsIndia's client and relationship-manager surfaces on top. I did not build aggregation in-house. That would have been slower to cover every product type.
        pending: true
  - heading: Decision, and how it was tested
    items:
      - primary: I held the launch until a cross-product data check came back clean. I checked 15–20 client portfolios spanning PMS, AIF, mutual funds and equities. There were no mismatches between the FundsIndia portal and the Wealth Spectrum dashboard.
        fallback: I held the launch until a cross-product data check came back clean. I checked 15–20 client portfolios spanning PMS, AIF, mutual funds and equities. There were no mismatches between the FundsIndia portal and the third-party dashboard.
      - primary: I staged the rollout. The consolidated view went live for all Private Wealth clients first. The app card and the new web dashboard followed in later steps.
      - primary: I announced go-live for all Private Wealth clients and planned a walkthrough for relationship managers.
      - primary: I signed off the new Wealth Spectrum-powered client dashboard for all Private Wealth clients. It was enabled on the web for all Private Wealth users on 30 June 2026.
        fallback: I signed off the new client dashboard, on top of the third-party wealth platform, for all Private Wealth clients. It was enabled on the web for all Private Wealth users on 30 June 2026.
      - primary: I owned the vendor relationship, including API scope and audit trails.
  - heading: Result
    items:
      - primary: Daily active use rose 47% in January 2026 compared with December 2025, after the portfolio card launched in the app.
        fallback: Daily usage of the consolidated view rose by nearly half in the month after the app launch.
        pending: true
      - primary: A reports page on the relationship-manager dashboard added folio-wise and investor-wise filters. More than 40 valuation reports a day were downloaded after release.
        fallback: Relationship managers moved from requesting reports from Ops to pulling them themselves, dozens a day.
        pending: true
      - primary: Leadership reported very good feedback from relationship managers on Private Wealth.
  - heading: What I'd do next
    items:
      - primary: Track trust signals, not just usage. Data-mismatch tickets per month, and report requests from relationship managers to Ops.
      - primary: Show data freshness per product, since PMS and AIF data arrive later than mutual-fund data.
      - primary: Build a family-level view on the same foundation. Family valuation reports shipped in August 2026.
---
