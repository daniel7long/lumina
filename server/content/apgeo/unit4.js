import { mc, tf } from '../builder.js';

export default {
  summary: 'Political geography studies how space is divided and governed, from the borders of states to the districts in which people vote.',
  modules: {
    7: {
      summary: 'States, nations and boundaries.',
      sessions: [{
        t: 'States, nations and their borders',
        s: 'Key terms and the forces that unite or divide states.',
        md: `
## Key terms
- **State:** an area with defined boundaries, a permanent population, a government and **sovereignty**, meaning control over its own affairs.
- **Nation:** a group of people with a shared identity, such as language, culture or history.
- **Nation-state:** a state whose territory is largely the home of one nation (Japan and Iceland are often cited).
- **Multinational state:** includes several nations. **Stateless nation:** a nation without its own state (the Kurds are an example).
- **Colonialism** and **imperialism** created many modern boundaries. The **Peace of Westphalia (1648)** is often cited as the origin of the modern idea of state sovereignty.

## Boundaries
- **Antecedent boundary:** drawn before the area was settled.
- **Subsequent boundary:** drawn after settlement, following cultural features.
- **Superimposed boundary:** imposed by outside powers, ignoring existing groups (many African borders after the Berlin Conference of 1884–1885).
- **Geometric boundary:** straight lines (the 49th parallel). **Physical boundary:** follows rivers or mountains.
- **Enclave:** a territory surrounded by another state. **Exclave:** a part of a state separated from the main territory.

## Forces within states
- **Centripetal forces** unify a state: shared language, national symbols, a strong capital, effective institutions.
- **Centrifugal forces** divide it: ethnic conflict, regional inequality, separatism.

### Example
When a state includes groups with different languages and religions and little shared institutions, centrifugal forces may exceed centripetal forces, which can lead to separatism or conflict.
`,
        q: [
          mc('A boundary imposed by outside powers that ignores existing cultural groups is called', 'a superimposed boundary', 'Many colonial-era borders are of this type.', [
            ['an antecedent boundary', 'An antecedent boundary is drawn before settlement.'],
            ['a subsequent boundary', 'A subsequent boundary follows existing cultural patterns.'],
            ['an exclave', 'An exclave is a detached part of a state.'],
          ]),
          mc('Which is a centripetal force?', 'A shared national language and symbols', 'These help unify a state.', [
            ['A separatist movement', 'This is centrifugal.'],
            ['Deep regional inequality', 'This tends to divide a state.'],
            ['Ethnic conflict', 'This is centrifugal.'],
          ]),
        ],
      }],
    },
    8: {
      summary: 'Geopolitics and governance.',
      sessions: [{
        t: 'Governing space',
        s: 'Forms of government, devolution, supranational organizations and electoral geography.',
        md: `
## Forms of government
- **Unitary state:** power is concentrated in the central government (France, Japan).
- **Federal state:** power is shared between a central government and regional governments (the United States, Germany, India).

## Devolution
**Devolution** is the transfer of power from a central government to regional governments, often in response to separatist pressure (for example, the creation of the Scottish Parliament in 1999). **Irredentism** is a claim to territory in another state based on shared ethnicity or history. **Balkanization** is the fragmentation of a region into small, often hostile units.

## Supranational organizations
These involve several states sharing authority or cooperating: the **United Nations**, the **European Union** (with a common market and, for most members, a common currency), **NATO** (a military alliance) and **ASEAN** (economic cooperation in Southeast Asia). Membership can bring benefits but may limit national sovereignty.

## Electoral geography
- **Gerrymandering** is drawing district boundaries to favor a party or group. Tactics include **packing** (concentrating opponents in a few districts) and **cracking** (splitting them across many).
- **Redistricting** follows each census.

## Geopolitics and conflict
Geographers study **choke points** (narrow passages such as the Strait of Hormuz), **territorial disputes** and the effects of **terrorism** and **ethnic cleansing** on populations.
`,
        q: [
          mc('A system in which power is shared between a central government and regional governments is', 'a federal system', 'Both levels hold constitutional authority.', [
            ['a unitary system', 'In a unitary state, power is concentrated in the central government.'],
            ['an enclave', 'An enclave is territory surrounded by another state.'],
            ['a choke point', 'A choke point is a narrow strategic passage.'],
          ]),
          mc('Drawing district lines so that opposing voters are concentrated in a few districts is called', 'packing, a form of gerrymandering', 'Concentrating opponents wastes their votes in lopsided districts.', [
            ['devolution', 'Devolution is the transfer of power to regional governments.'],
            ['irredentism', 'Irredentism is a claim to territory in another state.'],
            ['redistricting without gerrymandering', 'Drawing lines to favor one party is gerrymandering.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 4 assessment · Political Geography',
    tasks: [
      mc('A state is defined as', 'an area with defined boundaries, a permanent population, a government and sovereignty', 'Sovereignty is control over its own internal and external affairs.', [
        ['a group of people with a shared culture', 'That is a nation.'],
        ['a region with a common language', 'That is a language region.'],
        ['an area controlled by another country', 'That is a colony or territory.'],
      ]),
      mc('The Kurds, who live in several states without a state of their own, are an example of', 'a stateless nation', 'They share an identity but do not have their own state.', [
        ['a nation-state', 'A nation-state is a state largely made up of one nation.'],
        ['an exclave', 'An exclave is part of a state separated from the main territory.'],
        ['a multinational state', 'A multinational state is a state with several nations.'],
      ]),
      mc('Which boundary type follows a river or mountain range?', 'A physical boundary', 'Physical boundaries follow natural features.', [
        ['A geometric boundary', 'Geometric boundaries are straight lines.'],
        ['An antecedent boundary', 'That term refers to timing, not natural features.'],
        ['A superimposed boundary', 'That term refers to imposition by outside powers.'],
      ]),
      mc('Alaska, which is separated from the rest of the United States by Canada, is an example of', 'an exclave', 'It is a part of a state separated from the main territory.', [
        ['an enclave', 'An enclave is a territory surrounded by another state, like Lesotho within South Africa.'],
        ['a nation-state', 'This is a different concept.'],
        ['a stateless nation', 'This concerns a nation without a state.'],
      ]),
      mc('Which is an example of devolution?', 'The creation of a regional parliament in Scotland', 'Power was transferred from the central government to a region.', [
        ['The merger of two states into one', 'This is the opposite of devolution.'],
        ['A military alliance of several states', 'This is a supranational organization.'],
        ['The redrawing of district boundaries after a census', 'This is redistricting.'],
      ]),
      mc('Which organization is a military alliance?', 'NATO', 'Members agree to collective defense.', [
        ['The European Union', 'The EU is an economic and political union.'],
        ['ASEAN', 'ASEAN is mainly an economic and political cooperation organization.'],
        ['The World Trade Organization', 'The WTO deals with trade rules.'],
      ]),
      tf('Gerrymandering is the practice of drawing district boundaries to favor a party or group.', true, 'Correct. Packing and cracking are common tactics.', 'This is the definition, so the statement is true.'),
    ],
  },
};
