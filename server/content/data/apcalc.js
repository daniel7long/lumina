// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the standard first-year calculus (AP Calculus AB) topic sequence.
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'Limits and Continuity', modules: [
    mod(1, 'Limits', ['Estimate and evaluate limits from graphs, tables and algebra, including one-sided limits.', 'Use factoring, rationalizing and dominant terms to evaluate limits that give 0/0 or ∞/∞.', 'Connect limits to vertical and horizontal asymptotes.']),
    mod(2, 'Continuity', ['State the three conditions for continuity at a point and classify discontinuities.', 'Find a constant that makes a piecewise function continuous.', 'Apply the Intermediate Value Theorem and state what it does and does not guarantee.']),
  ] },
  { n: 2, title: 'Differentiation: Definition and Basic Rules', modules: [
    mod(3, 'The Derivative', ['Define the derivative as a limit of difference quotients and interpret it as a slope and an instantaneous rate of change.', 'Write the equation of a tangent line.', 'Explain the relationship between differentiability and continuity.']),
    mod(4, 'Derivative Rules', ['Differentiate polynomials, products, quotients and trigonometric functions.', 'Choose the right rule for a given expression.']),
  ] },
  { n: 3, title: 'Differentiation: Composite, Implicit and Inverse Functions', modules: [
    mod(5, 'The Chain Rule', ['Differentiate composite functions with the chain rule.', 'Differentiate exponential and logarithmic functions of x and of a function of x.']),
    mod(6, 'Implicit and Inverse Differentiation', ['Find dy/dx implicitly and evaluate it at a point.', 'Find the derivative of an inverse function at a point.', 'Differentiate inverse trigonometric functions.']),
  ] },
  { n: 4, title: 'Contextual Applications of Differentiation', modules: [
    mod(7, 'Motion and Rates of Change', ['Interpret the derivative as velocity, acceleration and a rate of change in context, with units.', 'Decide when a particle is at rest, moving right or left, speeding up or slowing down.']),
    mod(8, 'Related Rates, Linearization and L’Hôpital’s Rule', ['Set up and solve related-rates problems.', 'Use a tangent line to approximate function values.', 'Use L’Hôpital’s Rule for indeterminate forms and state when it applies.']),
  ] },
  { n: 5, title: 'Analytical Applications of Differentiation', modules: [
    mod(9, 'The Mean Value Theorem and Extrema', ['State and apply the Mean Value Theorem.', 'Find critical points and absolute extrema on a closed interval.']),
    mod(10, 'Curve Sketching and Optimization', ['Use the first and second derivative tests to find local extrema and inflection points.', 'Describe a function’s increasing, decreasing and concavity from its derivatives.', 'Set up and solve optimization problems.']),
  ] },
  { n: 6, title: 'Integration and Accumulation of Change', modules: [
    mod(11, 'Riemann Sums and the Definite Integral', ['Approximate an integral with left, right and midpoint sums.', 'Interpret a definite integral as net accumulated change.']),
    mod(12, 'The Fundamental Theorem and Antiderivatives', ['State and use both parts of the Fundamental Theorem of Calculus.', 'Find antiderivatives and evaluate definite integrals.', 'Use u-substitution.']),
  ] },
  { n: 7, title: 'Differential Equations', modules: [
    mod(13, 'Slope Fields and Separable Equations', ['Read slope values from a differential equation and sketch a slope field.', 'Solve separable differential equations with initial conditions.']),
    mod(14, 'Exponential Models', ['Model growth and decay with dy/dt = ky.', 'Compute values, doubling times and half-lives.']),
  ] },
  { n: 8, title: 'Applications of Integration', modules: [
    mod(15, 'Average Value, Net Change and Area', ['Find the average value of a function on an interval.', 'Use integrals of rates to find net change.', 'Find the area between two curves.']),
    mod(16, 'Volumes of Solids', ['Set up volume integrals using disks and washers.', 'Choose between disks and washers from a diagram.']),
  ] },
];
