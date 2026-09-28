---
title: Showing tax and exit load before a redemption
company: FundsIndia
role: Product Manager, owner of the redemption journey on the FundsIndia app and web
team: Design, engineering, QA, advisors, and a lending partner for loans against mutual funds
timeline:
  primary: "Loan option in the redemption flow from 12 July 2025. Tax and exit-load breakdown released in stages across September and October 2025. Funnel reviewed from October 2025 to January 2026."
  fallback: "The loan option went into the redemption flow first. The tax and exit-load breakdown followed in a staged release. The funnel was reviewed over the following months."
  pending: true
featured: true
order: 1
outcome:
  primary: "Redemption completion fell from 55.51% in October 2025 to 48.14% in January 2026, a drop the deck calls intentional. Loan conversion among eligible leads rose from 10.72% to 20.55%."
  fallback: "Redemption completion fell after the charges were shown, which the deck calls intentional. Loan conversion among eligible leads rose."
  pending: true
dek: Investors see the tax and the exit load before the money leaves, and can borrow against the fund instead of selling it.
scale:
  primary: "The deck reports redemption traffic of 32K–39K a month, and 5,147–9,418 users a month entering the funnel. Those are different measures."
  fallback: "Redemption traffic ran in the tens of thousands a month, with a smaller count of people entering the funnel. The deck records those as two different measures."
  pending: true
sections:
  - heading: Problem
    paragraphs:
      - primary: "Investors who clicked Redeem saw the capital gains tax and exit load only after the money had left. Some of those redemptions were premature: the investor would have paid less by waiting, or could have borrowed against the fund instead of selling it."
      - primary: "Before these changes, retention depended on sales calling users within 2 hours of a redemption request to try to keep the assets invested."
        fallback: "Before these changes, retention depended on sales calling users shortly after a redemption request to try to keep the assets invested."
        pending: true
  - heading: Insight
    items:
      - primary: "Most people leaving don't need to sell. Users who gave a reason usually wanted the money out or had reached a goal. That is a cash need, and a loan against the fund can meet it without ending the investment."
        pending: true
      - primary: "A charge you see changes behaviour. A charge you learn about later only creates regret. Showing short-term gains, long-term gains and exit load on the amount page lets the investor decide with the full picture."
        pending: true
      - primary: "Intent is steady, so any change comes from the flow. Clicks on Continue, the questionnaire and the amount page held roughly steady from October 2025 to January 2026, while completion fell. The drop came from what users saw on the amount page, not from fewer people wanting to redeem."
        fallback: "Intent is steady, so any change comes from the flow. Clicks on Continue, the questionnaire and the amount page held roughly steady across the review, while completion fell. The drop came from what users saw on the amount page, not from fewer people wanting to redeem."
        pending: true
  - heading: Options and tradeoffs
    items:
      - primary: "Only call users after they redeem, which was the status quo. It needs no product work, but it arrives after the decision."
        pending: true
      - primary: "Block or discourage redemption. Rejected. It's the investor's money, and a hard stop damages trust. The flow keeps a clear Continue path and a Will wait exit."
        pending: true
      - primary: "Inform, and offer an alternative inside the flow. This is what we shipped. Offer a loan first, then show the tax and exit-load breakdown before confirming. The tradeoff is fewer completed redemptions, which is the point."
      - primary: "Non-resident accounts, segregated folios, and HUF and corporate tax were left for later releases. The first release covered about 80% of exit-load cases."
        fallback: "Non-resident accounts, segregated folios, and HUF and corporate tax were left for later releases. The first release covered most exit-load cases."
        pending: true
  - heading: What I did
    items:
      - primary: "I shared the redemption screens with the lending partner and worked with them on the copy. I described the sales team's retention calls to them."
      - primary: "I ran the exit-load walkthroughs and design reviews with engineering, design and QA. I wrote and sent the release notes, and signed off testing on web, Android and iOS on 3 October 2025."
        fallback: "I ran the exit-load walkthroughs and design reviews with engineering, design and QA. I wrote and sent the release notes, and signed off testing on web, Android and iOS before the full release."
        pending: true
      - primary: "I built the funnel analysis from October 2025 to January 2026. Stage-by-stage conversion, where users go after the exit-load screen, and loan conversion by month."
        fallback: "I built the funnel analysis over the months after release. Stage-by-stage conversion, where users go after the exit-load screen, and loan conversion by month."
        pending: true
      - primary: "I collected advisor feedback and turned it into the next iteration."
  - heading: Outcome
    paragraphs:
      - primary: "Redemption completion moved from 55.51% in October to 48.14% in January, about a 7-point drop. Earlier steps stayed roughly flat."
        fallback: "Redemption completion fell after the charges were shown. Earlier steps stayed roughly flat."
        pending: true
      - primary: "After the charges, people split three ways. Some opened the loan page, some looked at other schemes, and some closed the app. The deck's write-up and its table don't use the same labels for the first two, so those shares are not quoted here."
    items:
      - primary: "Successful loans as a share of eligible leads rose from 10.72% in May to 20.55% in October, and stayed near that in November. Same-day conversion rose from 4.87% to 8.77% in October."
        fallback: "Successful loans as a share of eligible leads rose over that period, and more of those loans happened the same day."
        pending: true
      - primary: "Off the redemption funnel, unique users viewing the loan page rose from 4,461 in July to 7,394 in October, then fell to 4,379 in December."
        fallback: "Off the redemption funnel, unique users viewing the loan page rose after the loan step went in, then eased back."
        pending: true
      - primary: "What didn't work. The share of users clicking Avail Loan in the redemption step fell, from 8.31% in June to 6.95% in November. The loan screen was acting more as a friction point than a conversion driver. It created hesitation around redemption and converted serious users the same day, but it didn't pull undecided users into exploring loans."
        fallback: "What didn't work. The share of users clicking Avail Loan in the redemption step fell. The loan screen was acting more as a friction point than a conversion driver. It created hesitation around redemption and converted serious users the same day, but it didn't pull undecided users into exploring loans."
        pending: true
      - primary: "Advisors found the breakdown confusing in places. Clients didn't read the estimated tax or the disclaimer, and the word losses confused them."
      - primary: "Clients couldn't find the ₹1.25 lakh exemption."
        fallback: "Clients couldn't find the annual capital-gains exemption."
        pending: true
      - primary: "The exit load showed as not computed in some cases. About 95% of deduction calculations were correct."
        fallback: "The exit load showed as not computed in some cases. Most deduction calculations were correct."
        pending: true
  - heading: What I learned
    items:
      - primary: "Reword losses."
      - primary: "State that the estimate assumes gains beyond the ₹1.25 lakh exemption."
        fallback: "State that the estimate assumes gains beyond the annual exemption."
        pending: true
      - primary: "Add a column for the actual amount credited to the bank."
      - primary: "Show the units behind each short-term gain, long-term gain and exit-load figure, so advisors can answer queries."
      - primary: "Cover the remaining 20% of exit-load cases."
        fallback: "Cover the exit-load cases the first release left out."
        pending: true
      - primary: "Under consideration: letting investors enter capital gains already booked elsewhere."
      - primary: "Later iterations, in November and December 2025, explored a liquid-fund switcher and messaging about waiting a few days to save tax."
        fallback: "Later iterations explored a liquid-fund switcher and messaging about waiting a few days to save tax."
        pending: true
      - primary: "Measure the alternative, not just the drop. A lower redemption rate only counts as retention if the money stays, in another scheme, as a loan, or invested for longer."
        pending: true
---
