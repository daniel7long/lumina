// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the standard first-year statistics (AP Statistics) topic sequence.
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'Exploring One-Variable Data', modules: [
    mod(1, 'Variables and Distributions', ['Classify variables as categorical or quantitative and describe a distribution by shape, center, spread and unusual features.', 'Compare the mean and median in skewed and symmetric distributions.']),
    mod(2, 'Summary Statistics and Boxplots', ['Compute the median, quartiles, IQR and standard deviation, and know which are resistant.', 'Identify outliers with the 1.5 × IQR rule.']),
    mod(3, 'The Normal Distribution', ['Compute and interpret z-scores.', 'Use the 68–95–99.7 rule and a normal model to find proportions.']),
  ] },
  { n: 2, title: 'Exploring Two-Variable Data', modules: [
    mod(4, 'Scatterplots and Correlation', ['Describe a scatterplot by direction, form, strength and unusual points.', 'Interpret the correlation coefficient and explain why correlation is not causation.']),
    mod(5, 'Least-Squares Regression', ['Compute and interpret the slope, intercept, residuals and r² of a regression line.', 'Recognize extrapolation and its risks.']),
  ] },
  { n: 3, title: 'Collecting Data', modules: [
    mod(6, 'Sampling and Bias', ['Distinguish simple random, stratified, cluster, systematic and convenience samples.', 'Identify sources of bias in a sample or survey.']),
    mod(7, 'Experiments', ['Identify the parts of an experiment and explain the role of random assignment, control and blinding.', 'Explain why only a randomized experiment supports cause-and-effect conclusions.']),
  ] },
  { n: 4, title: 'Probability and Random Variables', modules: [
    mod(8, 'Probability Rules', ['Use the complement, addition and multiplication rules.', 'Compute conditional probabilities and check independence.']),
    mod(9, 'Random Variables and the Binomial Distribution', ['Compute the expected value of a discrete random variable.', 'Use the binomial distribution: probabilities, mean and standard deviation.']),
  ] },
  { n: 5, title: 'Sampling Distributions', modules: [
    mod(10, 'Sampling Distributions for Proportions and Means', ['Find the mean and standard deviation of the sampling distribution of p̂ and x̄.', 'Check conditions and apply the Central Limit Theorem.']),
  ] },
  { n: 6, title: 'Inference for Proportions', modules: [
    mod(11, 'Confidence Intervals for a Proportion', ['Construct and interpret a confidence interval for a proportion.', 'Find the sample size needed for a desired margin of error.']),
    mod(12, 'Tests for a Proportion', ['State hypotheses, compute a z statistic and a p-value, and draw a conclusion in context.', 'Explain Type I and Type II errors.']),
  ] },
  { n: 7, title: 'Inference for Means', modules: [
    mod(13, 'Confidence Intervals for a Mean', ['Construct and interpret a t interval and check its conditions.']),
    mod(14, 'Tests for Means', ['Carry out one-sample and two-sample t tests.', 'Connect confidence intervals and two-sided tests.']),
  ] },
  { n: 8, title: 'Chi-Square Inference for Categorical Data', modules: [
    mod(15, 'Chi-Square Tests', ['Carry out a goodness-of-fit test.', 'Compute expected counts and degrees of freedom for a test of independence.']),
  ] },
  { n: 9, title: 'Inference for Slopes', modules: [
    mod(16, 'Inference for the Slope of a Regression Line', ['Check the conditions for regression inference.', 'Carry out a t test and construct a confidence interval for a slope.']),
  ] },
];
