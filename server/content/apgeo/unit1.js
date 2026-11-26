import { mc, tf } from '../builder.js';

export default {
  summary: 'Geographers ask where things are, why they are there and why it matters. Start with the tools (maps and scale) and the concepts (regions, place, distance and diffusion).',
  modules: {
    1: {
      summary: 'Maps, scale and spatial data.',
      sessions: [{
        t: 'Reading maps and scale',
        s: 'Types of maps, map scale, projections and GIS.',
        md: `
## Types of maps
- **Reference maps** show locations of places and features (road maps, atlases).
- **Thematic maps** show the pattern of one topic, such as population density. Types include **choropleth** (areas shaded by value), **dot** (one dot represents a number of things), **graduated symbol** and **isoline** (lines joining equal values, such as contour lines).
- **Cartograms** resize areas in proportion to a statistic rather than to land area.

## Map scale
**Scale** relates distance on the map to distance on the ground.
- A **representative fraction** such as **1:100,000** means 1 unit on the map equals 100,000 of the same unit on the ground. So **1 cm = 100,000 cm = 1 km**.
- A **large-scale** map shows a small area in great detail (1:10,000). A **small-scale** map shows a large area with less detail (1:10,000,000).

### Worked example
On a 1:50,000 map two towns are 3 cm apart. Ground distance = 3 × 50,000 = 150,000 cm = **1.5 km**.

## Projections
A **map projection** flattens a globe, so it must distort **area, shape, distance or direction**. The Mercator projection keeps shapes and directions accurate for navigation but makes areas near the poles look much too large.

## GIS and remote sensing
- **GIS (geographic information systems)** stores data in **layers** that can be overlaid and analyzed, for example soil, roads and flood zones.
- **GPS** uses satellites to find a position.
- **Remote sensing** collects information about the surface from satellites or aircraft.
`,
        q: [
          mc('On a map with a scale of 1:100,000, two points are 5 cm apart. What is the ground distance?', '5 km', '5 cm × 100,000 = 500,000 cm = 5 km.', [
            ['0.5 km', 'This is ten times too small: 500,000 cm is 5 km.'],
            ['50 km', 'This is ten times too large: 500,000 cm is 5 km.'],
            ['500 km', 'This forgets to convert centimeters to kilometers: 500,000 cm is 5 km.'],
          ]),
          mc('Which kind of map would best show differences in population density between countries using shades of one color?', 'A choropleth map', 'Choropleth maps shade areas according to a value.', [
            ['A dot map', 'A dot map uses dots, each standing for a number of things.'],
            ['An isoline map', 'Isolines join points of equal value, such as elevation.'],
            ['A reference map', 'A reference map shows locations rather than the pattern of a topic.'],
          ]),
        ],
      }],
    },
    2: {
      summary: 'Regions, place and spatial patterns.',
      sessions: [{
        t: 'Regions, distance and diffusion',
        s: 'Core spatial concepts used throughout the course.',
        md: `
## Place and location
- **Absolute location** is given by coordinates (latitude and longitude) or an address.
- **Relative location** describes a place in relation to others ("two hours north of the capital").
- **Site** is the physical character of a place, and **situation** is its location relative to other places and resources.

## Regions
- **Formal (uniform) region:** shares a common trait, such as a country or a climate zone.
- **Functional (nodal) region:** organized around a node, such as the area served by a newspaper or a hospital.
- **Perceptual (vernacular) region:** defined by people's feelings, such as "the South" or "the Midwest."

## Spatial patterns
Geographers describe **distribution** by **density** (how closely things are packed), **concentration** (clustered or dispersed) and **pattern** (linear, random or clustered).

## Distance
- **Distance decay:** interaction decreases as distance increases.
- **Friction of distance:** the time and cost of overcoming distance.
- **Time-space compression:** transportation and communication technologies make places seem closer.

## The gravity model
Interaction between two places is greater when they are **larger** and **closer**. It rises with the **product of their populations** and falls with the **square of the distance** between them. If the distance doubles, interaction falls to **one quarter**.

## Diffusion
Diffusion is the spread of an idea, innovation or disease from its **hearth** (place of origin). Types are covered in Unit 3.
`,
        q: [
          mc('A region defined by the area that a television station reaches is best described as', 'a functional region', 'It is organized around a central node, the station.', [
            ['a formal region', 'A formal region shares a uniform trait across its area.'],
            ['a perceptual region', 'A perceptual region is defined by people’s feelings and images.'],
            ['an absolute location', 'Absolute location refers to coordinates, not regions.'],
          ]),
          mc('According to the gravity model, what happens to interaction between two cities if the distance between them doubles?', 'It falls to one quarter', 'Interaction falls with the square of distance: 1/2² = 1/4.', [
            ['It is cut in half', 'Interaction falls with the square of distance, not the distance itself.'],
            ['It doubles', 'Interaction decreases as distance grows.'],
            ['It stays the same', 'Distance decay means interaction depends on distance.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 1 assessment · Thinking Geographically',
    tasks: [
      mc('A map scale of 1:50,000 shows two towns 3 cm apart. What is the ground distance?', '1.5 km', '3 cm × 50,000 = 150,000 cm = 1.5 km.', [
        ['15 km', 'This is ten times too large.'],
        ['0.15 km', 'This is ten times too small.'],
        ['150 km', 'This forgets to convert centimeters to kilometers.'],
      ]),
      mc('Which map scale shows the most detail?', '1:10,000', 'A larger fraction means a large-scale map covering a smaller area in more detail.', [
        ['1:100,000', 'This is a smaller scale than 1:10,000, so it shows less detail.'],
        ['1:1,000,000', 'This shows a much larger area with less detail.'],
        ['1:10,000,000', 'This is the smallest scale of the choices and shows the least detail.'],
      ]),
      mc('The Mercator projection is useful for navigation because it', 'keeps directions accurate, though it distorts the size of areas near the poles', 'Every projection distorts something.', [
        ['shows the sizes of all countries accurately', 'It greatly enlarges areas near the poles.'],
        ['has no distortion at all', 'A flat map of a globe always distorts something.'],
        ['shows only relative location', 'It is a coordinate-based map.'],
      ]),
      mc('Which statement best describes the site of a city?', 'Its physical characteristics, such as a harbor or river crossing', 'Site concerns the local physical setting.', [
        ['Its position relative to other cities and trade routes', 'That is situation.'],
        ['Its latitude and longitude', 'That is absolute location.'],
        ['Its image in popular culture', 'That relates to perceptual regions.'],
      ]),
      mc('"The Midwest" as people understand it, with no precise border, is an example of', 'a perceptual region', 'Perceptual regions are defined by people’s ideas.', [
        ['a formal region', 'A formal region has a uniform measurable trait.'],
        ['a functional region', 'A functional region is organized around a node.'],
        ['a GIS layer', 'A GIS layer is a set of spatial data.'],
      ]),
      mc('Two cities each double in population while their distance is unchanged. Under the gravity model, interaction between them', 'becomes four times as large', 'Interaction rises with the product of populations: 2 × 2 = 4.', [
        ['doubles', 'The product of populations rises fourfold, not twofold.'],
        ['falls to one quarter', 'That would occur if the distance doubled.'],
        ['stays the same', 'Larger populations increase interaction.'],
      ]),
      tf('Time-space compression means that technology makes distant places seem closer together.', true, 'Correct. Faster transport and communication reduce the friction of distance.', 'Faster transport and communication do shrink the effective distance, so the statement is true.'),
    ],
  },
};
