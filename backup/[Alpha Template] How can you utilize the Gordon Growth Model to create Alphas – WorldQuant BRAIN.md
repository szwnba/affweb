![](https://support.worldquantbrain.com/system/photos/27370707610391/0.jpg)

Hey Consultants,

Today, let us delve into how to uncover Alpha ideas using the renowned **Gordon Growth Model**. The Gordon Growth Model (GGM), also known as the Dividend Discount Model (DDM), is a fundamental valuation method that calculates the intrinsic value of a stock based on a future series of dividends that grow at a constant rate. This framework allows analysts to assess whether a stock is undervalued or overvalued relative to its current market price.

📊 **Basic GGM Formula**
------------------------

The basic formula for the Gordon Growth Model is:

> P = D(t=1) / (r - g)

Where:

*   **( P )** = Current stock price
*   **( D(t=1) )** = Dividend expected next year
*   **( r )** = Required rate of return (cost of equity)
*   **( g )** = Constant growth rate of dividends

### 🔍 **Components Explained**

**Expected Dividend (D(t=1))**: This is the dividend the company is expected to pay in the next period. It can be calculated by multiplying the most recent dividend D(t=0) by one plus the growth rate.

> D(t=1)= D(t=0) \* (1 + g)

**Required Rate of Return (r)**: This represents the return investors expect for investing in the stock, often estimated using the Capital Asset Pricing Model (CAPM):

> r = R\_f + beta \* (R\_m - R\_f)

*   **( R\_f )** = Risk-free rate, you can omit this or set it to a constant on Brain
*   **( beta )** = Beta of the stock
*   **( R\_m )** = Expected market return

**Dividend Growth Rate (g )**: This is the expected constant rate at which dividends will grow indefinitely. It can be estimated based on historical dividend growth rates or the sustainable growth rate:

> g = b  \* ROE

*   **( b )** = Retention ratio (proportion of earnings retained)
*   **( ROE )** = Return on Equity

🔗 **Using GGM to find Alphas**
-------------------------------

The first obvious template you will think of is comparing the intrinsic value calculated using the GGM to the current market price:

📐 **First Template**

From here, you can start brainstorming relevant Alpha ideas. For example, consider creating an Alpha that captures the relative undervaluation or overvaluation within an industry.

One potential template you can use is:

> group\_zscore(<D(t=1)> / (<r> - <g>) - ts\_mean(close, 21), industry)

This template computes the industry-normalized difference between the GGM-based intrinsic value and the current market price.

Where <D(t=1)>, <r> and <g> can use rightly available data fields, or you can follow the earlier formula to derive the value from base data.

Or, you can structure it as:

> <group\_compare\_op>(<cs\_compare\_op>(<D(t=1)> / (<r> - <g>), ts\_mean(<price>, 21)), <group>)

Where:

*   **<cs\_compare\_op>**: Operation to calculate the difference or ratio between intrinsic value and market price (e.g., subtract, divide, vector\_neut, regression\_neut...)
*   **<group\_compare\_op>**: Operation to compare within a group (for example: `group_zscore`, `group_rank`)
*   **<group>**: The grouping criterion (e.g., industry, sector)

✨ **Key Points**

*   **Data Flexibility**: The variables ( D\_1 ), ( r ), and ( g ) are open to estimation based on different data sources. You might use forecasted dividends, analyst estimates for growth rates, or different models to estimate the required rate of return.
*   **Abstract Operators**: The operators and grouping variables are placeholders for the choices that best capture your hypothesis. For instance, `<group_compare_op>` could be a `group_rank` if you prefer ranking over z-scores in your comparison.
*   **Model Assumptions**: Remember that the GGM assumes a perpetual constant growth rate, which may not hold true for all companies. It's most applicable to stable, mature companies with predictable dividend growth.

📐 **Second and More**

Wait, there is more!

The beauty of this kind financial formula is it provides an anchor for you to compare two different data points. For example, you can compare the difference in R and G. The difference captures the company's earnings growth and investor's demand. 

💡 **Discussion Prompt**

Can you think of any other Alpha ideas derived from the Gordon Growth Model? Perhaps incorporating multi-stage growth models or adjusting for companies that don't pay dividends? Share your innovative ideas and approaches below! 💬

After reading this, you can understand how to hypothesize based on a well-known financial theory, create an implementation, and test whether it captures any significant signal.

Happy researching! 🚀