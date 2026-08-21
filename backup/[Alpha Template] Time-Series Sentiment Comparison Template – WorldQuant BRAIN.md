![](https://support.worldquantbrain.com/system/photos/27370707610391/0.jpg)

Hi Community, 

Below is a template for sentiment related data:

> <[time\_series\_operator>](https://platform.worldquantbrain.com/learn/data-and-operators/operators#time-series-operators)(<positive\_sentiment> - <negative\_sentiment>, days)

Hypothesis: If a net sentiment of a company compared to earlier is positive, the stock price may increase.

Implementation: 

*   Simply choose time series operators on net sentiment value.
*   Use reasonable day parameter, such as week(5 days), month(20 days), quarter(60 days) or year(250 days).
*   [Sentiment Model](https://platform.worldquantbrain.com/data/data-sets?category=sentiment&delay=1&instrumentType=EQUITY&limit=20&offset=0&region=USA&universe=TOP3000) and [Neutralization ](https://platform.worldquantbrain.com/learn/documentation/create-alphas/neut-cons)to improve Alpha.

Besides this simple implementation, you may want to expand this into a more complicated format, for example:

> positive\_sentiment = rank(<backfill\_op>(<positive\_sentiment, days));
> 
> negative\_sentiment = rank(<backfill\_op>(<negative\_sentiment, days));
> 
> sentiment\_difference = <compare\_op>(positive\_sentiment, negative\_sentiment):
> 
> <time\_series\_operator>(sentiment\_difference, days)

Implementation:

*   <backfill\_op>: Since sentiment data usually has low coverage, it's better to backfill the data with ts\_backfill or to\_nan to achieve higher coverage.
*   Rank: this template uses the rank operator on the backfill sentiment, this ensures the distribution of the data is under a familiar range. This step also remove some noise from the raw data.
*   <compare\_op>: Besides the original subtract operator, there may be other comparison operators that you can pick from.
*   By altering data fields, operators and parameters within the template, you can efficiently generate a diverse range of submittable Alphas, especially via [BRAIN API](https://support.worldquantbrain.com/hc/en-us/articles/20786107171351).

Go ahead and try out this template.  
Please comment your findings on this template below!