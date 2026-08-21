![](https://support.worldquantbrain.com/system/photos/27370707610391/0.jpg)

Today, I want to share with you a template idea rooted in the traditional [Capital Asset Pricing Model (CAPM)](https://www.investopedia.com/terms/c/capm.asp). In the CAPM framework, it removes market factor-induced returns through time-series linear regression 📉.

For those unfamiliar with the idea of templates, please refer to this post: [【Alpha Template Collections】- Continuously Update – WorldQuant BRAIN](https://support.worldquantbrain.com/hc/en-us/community/posts/24472586368279--Alpha-Template-Collections-Continuously-Update).

Expressed in BRAIN Expression, it looks like this:

> ts\_regression(returns, group\_mean(returns, ts\_mean(cap, 21), 252, rettype=0))

  
This expression returns the part of returns in a time series that may be unexplained by the market average. Using this expression alone tend to create Alphas similar to classic Reversion signals. However, you can extend this idea of "finding values that unexplained by group averages" to a wide variety of data. Let us simplify the rewrite:

> data = winsorize(ts\_backfill(<data>, 63), std=4.0);  
> data\_gpm = group\_mean(data, log(ts\_mean(cap, 21)), sector);  
> resid = ts\_regression(data, data\_gpm, 252, rettype=0);  
> resid

This template retains the abstract idea of the original expression but expands it to any data type, with a few noteworthy adjustments:

*   Basic data preprocessing in the first line, including back-filling and trimming extreme values ✂️.
*   When calculating group averages in the second line, use sectors instead of the market, and choose log(ts\_mean(cap, 21)) for weighting to prevent large companies from skewing the group average, while also smoothing the cap 📊.
*   The main regression in the third line finds parts that may be unexplained by data\_gpm 🔍.

This simple form of the template is already quite suitable for exploring some types of data sets, share yourthoughts on how to further explain this template, and the interesting findings you find along the way below!