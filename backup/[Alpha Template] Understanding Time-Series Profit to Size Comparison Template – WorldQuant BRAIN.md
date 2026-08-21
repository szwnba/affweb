![](https://support.worldquantbrain.com/system/photos/27370707610391/0.jpg)

Hi Community,

Below is a simple template implementation comparing a company's profitability to its capitalization.

The hypothesis is that if a performance ratio of the fundamentals of a company is increasing compared to earlier, stock price may increase.

> [time\_series\_operator](https://platform.worldquantbrain.com/learn/data-and-operators/operators#time-series-operators)(<profit\_field>/<size\_field>, <days>)

Implementation:

*   Use time series operators and a ratio of two fundamental metrics
*   The profit\_field is any field that represents income/earrings/profit
*   The size\_field is any field that represents the size of the company
*   Use reasonable day parameter, such as week(5 days), month(20 days), quarter(60 days) or year(250 days)

✨Can you think of different ways to expand this template? Comment below to share your idea!