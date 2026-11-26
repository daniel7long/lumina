// Learning objectives per module. No outline was supplied for this course, so every objective is
// authored ("added") from the standard first-year human geography topic sequence.
const mod = (n, title, added) => ({ n, title, objectives: [], added });
export default [
  { n: 1, title: 'Thinking Geographically', modules: [
    mod(1, 'Maps, Scale and Spatial Data', ['Use map scale to convert map distance to ground distance.', 'Compare reference, thematic and GIS-based maps and explain how projections distort.']),
    mod(2, 'Regions, Place and Spatial Patterns', ['Distinguish formal, functional and perceptual regions.', 'Describe patterns of distribution and explain distance decay and diffusion.']),
  ] },
  { n: 2, title: 'Population and Migration', modules: [
    mod(3, 'Population Distribution and Change', ['Calculate arithmetic and physiological density, natural increase and doubling time.', 'Interpret the demographic transition model and population pyramids.']),
    mod(4, 'Migration', ['Explain push and pull factors and distinguish forced from voluntary migration.', 'Apply Ravenstein’s laws and the gravity model to migration flows.']),
  ] },
  { n: 3, title: 'Cultural Patterns and Processes', modules: [
    mod(5, 'Language, Religion and Ethnicity', ['Describe the distribution of major language families and religions.', 'Distinguish universalizing from ethnic religions and explain the role of lingua francas.']),
    mod(6, 'Cultural Diffusion and Landscapes', ['Compare relocation, contagious, hierarchical and stimulus diffusion.', 'Read a cultural landscape for evidence of values and history.']),
  ] },
  { n: 4, title: 'Political Geography', modules: [
    mod(7, 'States, Nations and Boundaries', ['Distinguish state, nation and nation-state and define sovereignty.', 'Classify boundaries and explain centripetal and centrifugal forces.']),
    mod(8, 'Geopolitics and Governance', ['Compare unitary and federal states and explain devolution.', 'Explain the role of supranational organizations and the effect of gerrymandering.']),
  ] },
  { n: 5, title: 'Agriculture and Rural Land Use', modules: [
    mod(9, 'Agricultural Revolutions and Systems', ['Describe the three agricultural revolutions.', 'Compare subsistence and commercial agriculture.']),
    mod(10, 'Land Use and Sustainability', ['Apply von Thünen’s model to the pattern of land use around a market.', 'Evaluate the benefits and costs of the Green Revolution and agribusiness.']),
  ] },
  { n: 6, title: 'Cities and Urban Land Use', modules: [
    mod(11, 'Urban Systems and Models', ['Use central place theory and the rank-size rule.', 'Compare the concentric zone, sector and multiple nuclei models.']),
    mod(12, 'Urbanization and Its Challenges', ['Explain suburbanization, gentrification and informal settlements.', 'Evaluate responses such as zoning, smart growth and New Urbanism.']),
  ] },
  { n: 7, title: 'Industrial and Economic Development', modules: [
    mod(13, 'Industrialization and Location', ['Apply Weber’s least-cost theory to a factory location.', 'Explain deindustrialization, outsourcing and special economic zones.']),
    mod(14, 'Measuring and Explaining Development', ['Interpret HDI, the Gini coefficient and the Gender Inequality Index.', 'Compare Rostow’s stages, dependency theory and world-systems theory.']),
  ] },
];
