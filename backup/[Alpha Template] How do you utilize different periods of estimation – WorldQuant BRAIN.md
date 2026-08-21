![](https://support.worldquantbrain.com/system/photos/27370707610391/0.jpg)

Hello everyone! 👋

Today, you are diving into how to use the **term structure** within common analyst datasets to uncover potential Alpha signals. When you examine datasets like `analyst14` and `analyst15`, you'll notice they exhibit term structures across various fields. For instance, if you explore `anl14_mean_eps`, you'll find multiple fields sharing the same prefix but differing in their time horizons, such as `fp1`, `fp2`, …, `fy1`, `fy2`, etc.

🔍 **Understanding the Time Horizons:**

*   **`fp1`**: Represents the upcoming quarter.
*   **`fy1`**: Represents the upcoming year.

These different suffixes indicate their respective time horizons, allowing you to derive estimated growth differences across many periods.

### 📊 Sample Template

One potential template you can use is:

> group\_zscore(subtract(group\_zscore(anl14\_mean\_eps\_<period1>, industry), group\_zscore(anl14\_mean\_eps\_<period2>, industry)), industry)

This template captures the **sector-normalized difference** between the average estimates in **Period one** and **Period two**. Building on the previous templates, you can extend this further:

> <group\_compare\_op\_1>(<diff\_op>(<group\_compare\_op\_2>(anl14\_mean\_eps\_<period1>, <group\_2>), <group\_compare\_op\_3>(anl14\_mean\_eps\_<period2>, <group\_3>)), <group\_1>)

✨ **Key Points:**

*   The prefix `anl14_mean_eps_` is kept to ensure that comparisons are made between comparable metrics, preventing your Alpha search from devolving into random comparisons.
*   All operators and group data become abstract choices, each embodying the economic intuition behind the original selection. For example, `<group_compare_op_1>` might initially use `group_zscore`, but other valid options could include `group_rank`, which also compares the instrument to its peers within `<group_1>`.

📂 **More Dataset Information:** The dataset includes other valuable information such as the **number of estimations**, **standard deviation across estimates**, and more.

💡 **Discussion Prompt:** How will you systematically utilize this additional information within your templates? Share your thoughts and tips below!

Happy research! 🚀