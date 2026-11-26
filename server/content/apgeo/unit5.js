import { mc, tf } from '../builder.js';

export default {
  summary: 'Farming shapes the land and feeds the world. Study how agriculture began, how it is organized and how its geography follows the logic of cost and distance.',
  modules: {
    9: {
      summary: 'Agricultural revolutions and systems.',
      sessions: [{
        t: 'Three revolutions and many systems',
        s: 'The history of agriculture and how farming systems differ.',
        md: `
## Agricultural revolutions
1. **First (Neolithic) Agricultural Revolution:** about 10,000 years ago, people began to domesticate plants and animals in several **hearths** (for example the Fertile Crescent, China and Mesoamerica). Settled villages grew.
2. **Second Agricultural Revolution:** linked to the Industrial Revolution, with better tools, crop rotation, enclosure and increased yields, which supported urban growth.
3. **Third Agricultural Revolution (the Green Revolution):** from the 1960s, high-yielding seeds (especially wheat and rice), fertilizers, pesticides and irrigation raised yields in many developing countries.

## Subsistence agriculture
Farmers grow food mainly for their own families.
- **Shifting cultivation** (slash and burn): clearing and farming plots for a few years before moving on, found in tropical forests.
- **Pastoral nomadism:** herders move with animals to find pasture.
- **Intensive subsistence:** small plots with much labor, such as rice paddies in Asia.

## Commercial agriculture
Farmers grow food for sale.
- **Plantation agriculture:** large estates producing a cash crop (coffee, sugar, bananas) for export, often in tropical areas, with colonial origins.
- **Mixed crop and livestock farming**, **grain farming**, **ranching**, **dairy farming** and **Mediterranean agriculture**.
- **Agribusiness:** large, vertically integrated companies that control production, processing and distribution.

## Intensive and extensive
**Intensive** farming uses a lot of labor or capital per unit of land. **Extensive** farming uses little per unit of land (large cattle ranches).
`,
        q: [
          mc('Which development is most associated with the Third Agricultural Revolution?', 'High-yielding seeds, fertilizers and irrigation spread to developing countries', 'It began in the 1960s and raised yields of wheat and rice.', [
            ['The domestication of plants and animals', 'This was the first revolution, about 10,000 years ago.'],
            ['Enclosure and crop rotation in Britain', 'These belong to the second revolution.'],
            ['The creation of the first plantations in the Americas', 'This was a colonial development, not the Green Revolution.'],
          ]),
          mc('A farmer clears a patch of forest by burning, grows crops for a few years and then moves on. This is', 'shifting cultivation', 'Also called slash and burn.', [
            ['plantation agriculture', 'A plantation is a large estate producing a cash crop.'],
            ['pastoral nomadism', 'This is movement with herds.'],
            ['agribusiness', 'This is a large commercial enterprise.'],
          ]),
        ],
      }],
    },
    10: {
      summary: 'Land use and sustainability.',
      sessions: [{
        t: 'Von Thünen and sustainable farming',
        s: 'A model of land use and the debates about modern agriculture.',
        md: `
## Von Thünen's model
In *The Isolated State* (1826), **Johann Heinrich von Thünen** explained the pattern of agricultural land use around a market using the cost of **transport** and the value of land. Land closer to the market is more valuable, so it is used for **intensive** production of crops that are **perishable or costly to transport**.

Rings around the market, from nearest to farthest:
1. **Market gardening and dairying** (perishable, high value)
2. **Forest** (firewood, heavy and costly to move in the model's time)
3. **Grains and field crops**
4. **Ranching/livestock** (can walk to the market)

The model assumes a flat, uniform plain and a single market, so real patterns differ, but the idea of **land rent falling with distance** still applies to modern cities and farmland.

## The Green Revolution: costs and benefits
- **Benefits:** higher yields, less famine, cheaper food.
- **Costs:** dependence on fertilizers, pesticides and irrigation; water use; debt for small farmers; loss of crop diversity; pollution.

## Modern issues
- **GMOs (genetically modified organisms)** may raise yields or resist pests, but raise debate about safety, cost and corporate control.
- **Sustainable agriculture:** organic farming, crop rotation, **agroforestry**, **terracing** and reduced chemical use.
- **Fair trade** aims to give small producers better prices.
- **Commodity chains** link farms to consumers. **Food deserts** are areas with limited access to affordable healthy food.
- **Desertification** and soil erosion reduce productive land.
`,
        q: [
          mc('In von Thünen’s model, which activity is located closest to the market?', 'Market gardening and dairying', 'Perishable, high-value products are produced nearest the market.', [
            ['Ranching', 'Livestock can travel to market, so ranching lies farthest out.'],
            ['Grain farming', 'Grains are less perishable and lie farther from the market.'],
            ['Shifting cultivation', 'This is not part of von Thünen’s rings.'],
          ]),
          mc('Which is a criticism of the Green Revolution?', 'It increased dependence on costly fertilizers, pesticides and irrigation', 'This burdened some small farmers and the environment.', [
            ['It lowered crop yields', 'Yields rose significantly.'],
            ['It spread agriculture to the Americas', 'This occurred long before the Green Revolution.'],
            ['It ended all use of machinery', 'It increased technology use.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 5 assessment · Agriculture and Rural Land Use',
    tasks: [
      mc('The First Agricultural Revolution took place', 'about 10,000 years ago, when people began domesticating plants and animals', 'It allowed permanent settlements.', [
        ['in the 1960s', 'This was the Green Revolution.'],
        ['during the Industrial Revolution', 'This was the second revolution.'],
        ['after the invention of the computer', 'This is far too late.'],
      ]),
      mc('Which crop type is typically associated with plantation agriculture?', 'Cash crops for export, such as coffee or sugar', 'Plantations produce for sale in distant markets.', [
        ['Subsistence rice for the farmer’s family', 'This is subsistence agriculture.'],
        ['Fodder for nomadic herds', 'This relates to pastoral nomadism.'],
        ['Slash and burn gardens', 'This is shifting cultivation.'],
      ]),
      mc('Why is dairying located near the market in von Thünen’s model?', 'Milk is perishable and costly to transport', 'Transport cost and spoilage favor locations near the market.', [
        ['Cows cannot walk far', 'Cows can walk; the issue is perishability and cost.'],
        ['Land near the market is cheap', 'Land near the market is the most valuable.'],
        ['The government requires it', 'The model is based on economics, not regulation.'],
      ]),
      mc('Which is a characteristic of intensive subsistence agriculture?', 'Small plots worked with a great deal of labor', 'Wet rice farming in Asia is a classic example.', [
        ['Very large farms with few workers', 'This is extensive commercial farming.'],
        ['Herds moving between pastures', 'This is pastoral nomadism.'],
        ['Production only for export', 'Subsistence farming is mainly for the family.'],
      ]),
      mc('Which practice is an example of sustainable agriculture?', 'Terracing steep slopes and rotating crops', 'Both reduce erosion and maintain soil fertility.', [
        ['Clearing forest for monocrop cultivation without replanting', 'This degrades soils and ecosystems.'],
        ['Using heavy irrigation without drainage', 'This can lead to salinization.'],
        ['Removing all ground cover', 'This increases erosion.'],
      ]),
      mc('An area of a city with little access to affordable, healthy food is called', 'a food desert', 'Distance to stores and income shape food access.', [
        ['an enclave', 'An enclave is territory surrounded by another state.'],
        ['a hearth', 'A hearth is a place of origin.'],
        ['a commodity chain', 'This is a network linking producers to consumers.'],
      ]),
      tf('Von Thünen’s model assumes a flat, uniform plain with one central market.', true, 'Correct. These assumptions simplify the model.', 'The model does assume this, so the statement is true.'),
    ],
  },
};
