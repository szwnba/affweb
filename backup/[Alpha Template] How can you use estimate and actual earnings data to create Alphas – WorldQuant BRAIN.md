![](https://support.worldquantbrain.com/system/photos/27370707610391/0.jpg)

Hello everyone, 👋

Today, I'd like to share a template idea that arises from comparing analyst estimates with actual earnings data. This idea builds on the observation that when actual fundamental data releases differ from what analysts seeks to predict, the market may overreact. Expressed in BRAIN Expression, it looks like this:

> group\_zscore(subtract(group\_zscore(<act\_data>, industry), group\_zscore(<est\_data>, industry)), industry)

This template calculates the difference in group-normalized actual data versus estimated data. You can explore pairs of actual<>estimate data in datasets like [analyst7](https://platform.worldquantbrain.com/data/data-sets/analyst7?delay=1&instrumentType=EQUITY&limit=20&offset=0&region=USA&universe=TOP3000).

Here's a brief breakdown:

*   Normalization: The template normalizes both actual financial data and analyst estimates within industries, enabling fair comparisons across companies.
*   Discrepancy Identification: It highlights the difference between normalized estimates and actual data to pinpoint where market expectations deviate from reality, suggesting potential overreactions.
*   Industry Comparison: A final round of normalization across the industry evaluates these discrepancies to industry standards, identifying companies significantly impacted by earnings surprises.

This template is already quite effective for exploring analyst-related datasets. Share your thoughts on how this template could be further expanded and discuss any interesting findings you have along the way below!