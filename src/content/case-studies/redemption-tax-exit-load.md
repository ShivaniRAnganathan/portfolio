---
title: Showing tax and exit load before a redemption
headline: "Long-term retention value rose 12% once the tax showed before the click"
company: FundsIndia
role: Product Manager, owner of the redemption journey on the FundsIndia app and web
team:
  primary: "4 people, working with design, engineering, QA, advisors, and a lending partner for loans against mutual funds"
  approved: true
timeline:
  primary: "Loan option in the redemption flow from 12 July 2025. Tax and exit-load breakdown rolled out to all users in October 2025. Impact review from October 2025 to January 2026."
featured: true
order: 1
outcome:
  primary: "I redesigned the redemption journey so clients saw the tax, the exit load and a loan option before they confirmed. Long-term retention value rose 12%, and loan exploration at redemption went from about 6% to 9.5%."
  approved: true
dek: I redesigned the redemption journey so clients saw the tax, the exit load and a loan option before they confirmed. Long-term retention value rose 12%, and loan exploration at redemption went from about 6% to 9.5%.
stats:
  - value: "9.5%"
    label: "Loan exploration, from about 6%"
  - value: "12%"
    label: "Higher long-term retention value"
scale:
  primary: "Every FundsIndia investor who starts a mutual fund redemption, on web, Android and iOS."
sections:
  - heading: Scope
    paragraphs:
      - primary: "Users: every FundsIndia investor who starts a mutual fund redemption, on web, Android and iOS. Team: 4, working with design, engineering and QA. What I owned: the redemption journey, from the churn model and the tax and exit load breakdown to the in-flow loan option, UAT sign-off and the impact analysis. UX and experimentation on this journey lifted feature adoption by 15%."
        approved: true
  - heading: Problem
    paragraphs:
      - primary: "Investors who clicked Redeem only saw the capital gains tax and exit load after the money had left. Some of those redemptions were premature. The investor would have paid less by waiting, or could have borrowed against the fund instead of selling it."
      - primary: "Before these changes, retention relied on sales calling users within 2 hours of a redemption request to try to keep the assets invested."
  - heading: Insight
    items:
      - primary: "Most people leaving don't need to sell. Users who gave a reason usually wanted the money out or had reached a goal. That is a need for cash, and a loan against the fund can meet it without ending the investment."
      - primary: "A charge you see changes your decision. A charge you find out about later only creates regret. Showing short-term gains, long-term gains and exit load on the amount page lets the investor decide with the full picture."
      - primary: "Intent held steady, so any change came from the flow. The early steps of the redemption journey held roughly steady from October 2025 to January 2026, while completion fell. The change came from what users saw on the amount page, not from fewer people wanting to redeem."
  - heading: Options and tradeoffs
    items:
      - primary: "Only call users after they redeem, which was the status quo. It needs no product work, but it arrives after the decision."
      - primary: "Block or discourage redemption. Rejected. It's the investor's money, and a hard stop damages trust. The flow keeps a clear Continue path and a Will wait exit."
      - primary: "Inform, and offer an alternative inside the flow. This is what we shipped. We offered a loan first, then showed the tax and exit-load breakdown before confirming. The tradeoff is fewer completed redemptions, which is the point."
      - primary: "Non-resident accounts, segregated folios, and HUF and corporate tax were left for later releases. The first release covered about 80% of exit-load cases."
        fallback: "Non-resident accounts, segregated folios, and HUF and corporate tax were left for later releases. The first release covered most exit-load cases."
        pending: true
  - heading: What I did
    items:
      - primary: "I shared the redemption screens with the lending partner and worked on the copy with them. I briefed them on the sales team's retention calls in July 2025."
      - primary: "I ran the exit-load walkthroughs and design reviews with engineering, design and QA. I wrote and sent the release notes, and signed off testing on web, Android and iOS on 3 October 2025."
      - primary: "I built the impact analysis from October 2025 to January 2026. It covered stage-by-stage behaviour, where users went after seeing the charges, and loan take-up by month."
      - primary: "I collected advisor feedback and turned it into the next iteration."
  - heading: Outcome
    items:
      - primary: "Loan exploration at redemption rose from about 6% to 9.5%, driven by the loan nudges in the redemption flow."
        approved: true
      - primary: "12% higher long-term retention value."
        approved: true
      - primary: "Completion fell by design. Fewer investors went through with a redemption once they saw the true cost, while their early intent stayed the same. Of those who stopped after seeing the charges, many went on to look at the loan option or at other schemes rather than leaving the app."
      - primary: "What didn't work. More users explored the loan, but direct loan take-up at the redemption step didn't grow with it. The loan screen was acting more as a friction point than a conversion driver. It created a pause before redeeming, but it didn't turn undecided users into borrowers."
      - primary: "Advisors found parts of the breakdown confusing. Clients didn't read the estimated tax or the disclaimer, and the word losses confused them."
      - primary: "Clients couldn't find the ₹1.25 lakh exemption."
      - primary: "Some exit loads showed as not computed. About 95% of deduction calculations were correct."
        fallback: "Some exit loads showed as not computed. Most deduction calculations were correct."
        pending: true
  - heading: What I learned
    items:
      - primary: "Reword losses."
      - primary: "State the ₹1.25 lakh exemption assumption."
      - primary: "Add a column for the actual amount credited to the bank."
      - primary: "Show the units behind each tax and exit-load figure."
      - primary: "Cover the remaining 20% of exit-load cases."
        fallback: "Cover the exit-load cases the first release left out."
        pending: true
      - primary: "Later iterations, in November and December 2025, explored a liquid-fund switcher and messaging about waiting a few days to save tax."
      - primary: "Measure the alternative, not just the drop. A lower redemption rate only counts as retention if the money stays, in another scheme, as a loan, or invested for longer."
---
