// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the standard introductory microeconomics and macroeconomics topic sequence.
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'Basic Economic Concepts', modules: [
    mod(1, 'Scarcity, Opportunity Cost and the Production Possibilities Curve', ['Define scarcity and opportunity cost and calculate opportunity cost from a trade-off.', 'Read a production possibilities curve for efficiency, attainability and growth.']),
    mod(2, 'Comparative Advantage and Trade', ['Distinguish absolute from comparative advantage.', 'Find who should specialize in what and a mutually beneficial price.']),
  ] },
  { n: 2, title: 'Supply and Demand', modules: [
    mod(3, 'Demand, Supply and Equilibrium', ['Explain the laws of demand and supply and what shifts each curve.', 'Solve for equilibrium price and quantity and identify shortages and surpluses.']),
    mod(4, 'Elasticity', ['Calculate price elasticity of demand with the midpoint method.', 'Predict the effect of a price change on total revenue.']),
    mod(5, 'Government Intervention in Markets', ['Analyze price ceilings, price floors and per-unit taxes.', 'Identify who bears a tax and the resulting deadweight loss.']),
  ] },
  { n: 3, title: 'Production, Cost and Perfect Competition', modules: [
    mod(6, 'The Costs of Production', ['Calculate total, average and marginal costs.', 'Explain how marginal cost relates to average cost.']),
    mod(7, 'Perfect Competition', ['Use P = MR = MC to find a firm’s profit-maximizing output and profit.', 'Explain shutdown decisions and long-run zero economic profit.']),
  ] },
  { n: 4, title: 'Imperfect Competition', modules: [
    mod(8, 'Monopoly', ['Explain why marginal revenue is below price for a monopolist.', 'Find a monopolist’s output and price and the deadweight loss.']),
    mod(9, 'Monopolistic Competition and Oligopoly', ['Describe monopolistic competition and its long-run outcome.', 'Use a payoff matrix to find dominant strategies and a Nash equilibrium.']),
  ] },
  { n: 5, title: 'Factor Markets and Market Failure', modules: [
    mod(10, 'The Labor Market', ['Calculate the marginal revenue product of labor and a firm’s hiring decision.', 'Analyze a minimum wage in a competitive labor market.']),
    mod(11, 'Externalities and Public Goods', ['Explain how externalities cause over- and underproduction and how taxes and subsidies correct them.', 'Identify public goods and the free-rider problem.']),
  ] },
  { n: 6, title: 'Measuring the Macroeconomy', modules: [
    mod(12, 'GDP, Unemployment and Inflation', ['Calculate GDP, real GDP, the unemployment rate and the inflation rate.', 'Classify types of unemployment and decide what counts in GDP.']),
  ] },
  { n: 7, title: 'Aggregate Demand, Aggregate Supply and Fiscal Policy', modules: [
    mod(13, 'The AD–AS Model and the Multiplier', ['Describe what shifts aggregate demand and aggregate supply.', 'Calculate a spending multiplier.']),
    mod(14, 'Fiscal Policy', ['Choose expansionary or contractionary fiscal policy for a given gap.', 'Calculate the effect of a tax change and explain crowding out and automatic stabilizers.']),
  ] },
  { n: 8, title: 'Money, Banking and Monetary Policy', modules: [
    mod(15, 'Money and the Banking System', ['State the functions of money.', 'Use the reserve requirement and the money multiplier.']),
    mod(16, 'Monetary Policy and the Phillips Curve', ['Explain how the central bank’s tools change interest rates and aggregate demand.', 'Describe the short-run and long-run Phillips curves.']),
  ] },
  { n: 9, title: 'The Open Economy and Long-Run Growth', modules: [
    mod(17, 'Exchange Rates and International Trade', ['Convert prices between currencies and explain appreciation and depreciation.', 'Explain the effect of the exchange rate on net exports.']),
    mod(18, 'Economic Growth', ['List the sources of long-run growth.', 'Use the rule of 70 to estimate doubling times.']),
  ] },
];
