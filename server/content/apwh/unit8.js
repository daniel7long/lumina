import { mc, tf } from '../builder.js';

export default {
  summary: 'After 1945 two superpowers competed for influence while peoples in Asia and Africa won independence from European empires.',
  modules: {
    15: {
      summary: 'The Cold War.',
      sessions: [{
        t: 'Superpower rivalry',
        s: 'Aims, conflicts and the end of the Cold War.',
        md: `
## Two systems
The **Cold War** (c. 1947–1991) was a rivalry between the **United States**, which supported capitalism and liberal democracy, and the **Soviet Union**, which supported a one-party communist system and a state-run economy. The two never fought each other directly, in part because both had **nuclear weapons**.

## Key developments
- **Containment:** the **Truman Doctrine (1947)** promised aid to states resisting communism. The **Marshall Plan** gave economic aid to rebuild Western Europe.
- **Alliances:** **NATO** (1949) and the **Warsaw Pact** (1955). Germany and Berlin were divided, and the **Berlin Wall** was built in **1961**.
- **China:** the communists under **Mao Zedong** won the civil war and founded the People's Republic in **1949**. Mao's **Great Leap Forward** (1958–1962) led to a massive famine, and the **Cultural Revolution** (from 1966) caused widespread upheaval.
- **Proxy wars:** the superpowers supported opposing sides in other countries' conflicts, such as the **Korean War (1950–1953)**, the **Vietnam War** and the war in **Afghanistan** (1979–1989).
- **Cuba:** after the 1959 revolution, Cuba allied with the USSR. The **Cuban Missile Crisis (1962)** brought the world close to nuclear war.

## The end
By the 1980s the Soviet economy was stagnating. **Mikhail Gorbachev** introduced **glasnost** (openness) and **perestroika** (restructuring). Reform movements swept Eastern Europe in 1989, the Berlin Wall fell, and the Soviet Union dissolved in **December 1991**.

### Historical thinking: causation
Historians debate the causes of the Soviet collapse: economic weakness, the costs of the arms race and Afghanistan, nationalism within the USSR and Gorbachev's reforms. A good argument weighs them rather than naming one.
`,
        q: [
          mc('What was the purpose of the Marshall Plan?', 'To give economic aid to rebuild Western Europe and limit the appeal of communism', 'It was a part of the U.S. strategy of containment.', [
            ['To create the Warsaw Pact', 'The Warsaw Pact was a Soviet-led alliance.'],
            ['To divide Berlin with a wall', 'The wall was built in 1961.'],
            ['To end the Korean War', 'It was an economic aid program.'],
          ]),
          mc('What is meant by a "proxy war" in the Cold War?', 'A conflict in a third country in which the superpowers supported opposing sides', 'Korea and Vietnam are examples.', [
            ['A direct war between the United States and the Soviet Union', 'The superpowers avoided direct war.'],
            ['A war fought only with nuclear weapons', 'Nuclear weapons were not used.'],
            ['A civil war with no outside support', 'Proxy wars involved outside powers.'],
          ]),
        ],
      }],
    },
    16: {
      summary: 'Decolonization and new nations.',
      sessions: [{
        t: 'Independence movements',
        s: 'Different paths to independence and the challenges that followed.',
        md: `
## Why decolonization?
After World War II European empires were weakened and many colonial peoples had fought in the war, and nationalist movements grew. The United States and the Soviet Union also opposed old-style empires, at least in public, and the new **United Nations** supported self-determination.

## Three paths
- **India:** a mass movement led by the Indian National Congress and **Mohandas Gandhi**, who used **nonviolent resistance**, pressed for independence. In **1947** Britain left and the subcontinent was **partitioned** into India and Pakistan, with violence and mass migration. **Jawaharlal Nehru** became India's first prime minister.
- **Ghana (Gold Coast):** **Kwame Nkrumah** led peaceful protest and political organization, and Ghana became the first sub-Saharan colony to win independence, in **1957**.
- **Algeria:** France treated Algeria as part of France and had a large settler population. A bitter armed struggle by the **FLN** led to independence in **1962**.

Other cases include Vietnam, where the Viet Minh defeated France at **Dien Bien Phu (1954)**, and Kenya.

## Challenges
- Colonial borders often grouped different peoples together or divided them.
- Economies were built to export raw materials.
- Rivalry between the superpowers, and sometimes ethnic conflict and coups, affected new states.
- Some leaders sought a **nonaligned** course. The **Bandung Conference (1955)** and the **Non-Aligned Movement** (formed in 1961) sought independence from both blocs.

South Africa's system of **apartheid** was ended after long resistance, and **Nelson Mandela** was elected president in **1994**.
`,
        q: [
          mc('Which leader is most associated with using nonviolent resistance in India’s independence movement?', 'Mohandas Gandhi', 'He organized mass campaigns such as the Salt March.', [
            ['Kwame Nkrumah', 'Nkrumah led Ghana’s independence.'],
            ['Mao Zedong', 'Mao led the communist movement in China.'],
            ['Mikhail Gorbachev', 'Gorbachev led the Soviet Union in the 1980s.'],
          ]),
          mc('Why was Algeria’s road to independence especially violent compared with Ghana’s?', 'France considered Algeria part of France, and a large settler population opposed independence', 'This led to a long armed conflict.', [
            ['Algeria had no nationalist movement', 'The FLN led a strong movement.'],
            ['Britain governed Algeria', 'France governed Algeria.'],
            ['Algeria was granted independence in 1957', 'It became independent in 1962.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 8 assessment · Cold War and Decolonization',
    tasks: [
      mc('Which policy aimed to prevent the spread of communism?', 'Containment', 'The Truman Doctrine and Marshall Plan were part of it.', [
        ['Appeasement', 'Appeasement is associated with the 1930s.'],
        ['Mercantilism', 'This is an early modern economic policy.'],
        ['Glasnost', 'Glasnost was Gorbachev’s policy of openness.'],
      ]),
      mc('Which alliance was formed in 1949 by the United States and Western European states?', 'NATO', 'It was a military alliance against Soviet power.', [
        ['The Warsaw Pact', 'The Warsaw Pact was a Soviet-led alliance formed in 1955.'],
        ['The League of Nations', 'The League was created after World War I.'],
        ['The Triple Alliance', 'This was a pre-1914 alliance of European powers, not a Cold War alliance.'],
      ]),
      mc('The Cuban Missile Crisis of 1962 is significant because', 'it brought the United States and the Soviet Union close to nuclear war', 'The crisis was resolved through negotiation.', [
        ['it began the Korean War', 'The Korean War began in 1950.'],
        ['it ended the Cold War', 'The Cold War continued until 1991.'],
        ['it created the European Union', 'It was unrelated to the EU.'],
      ]),
      mc('Which pair of policies is associated with Gorbachev?', 'Glasnost and perestroika', 'These were openness and restructuring.', [
        ['Containment and the Marshall Plan', 'These were U.S. policies.'],
        ['Great Leap Forward and Cultural Revolution', 'These were Mao’s policies.'],
        ['Appeasement and Tordesillas', 'These are unrelated to Gorbachev.'],
      ]),
      mc('Which statement compares India and Ghana accurately?', 'Both won independence from Britain, and both movements relied largely on mass political organization rather than a long war', 'Gandhi and Nkrumah led mostly nonviolent movements.', [
        ['Both won independence from France after armed conflict', 'Both were British colonies.'],
        ['India was independent in 1957 and Ghana in 1947', 'The dates are reversed.'],
        ['Neither had a nationalist movement', 'Both had strong movements.'],
      ]),
      mc('What was one lasting challenge for many newly independent states?', 'Borders drawn by colonial powers that did not match ethnic or political communities', 'This contributed to conflict in some states.', [
        ['An absence of any foreign involvement', 'Superpowers often intervened.'],
        ['A lack of any nationalist ideas', 'Nationalism drove independence.'],
        ['Immediate prosperity from industry', 'Many economies depended on raw material exports.'],
      ]),
      tf('The Non-Aligned Movement sought a course independent of both the United States and the Soviet Union.', true, 'Correct. Leaders such as Nehru, Nasser and Tito promoted nonalignment.', 'Nonalignment meant staying outside both blocs, so the statement is true.'),
    ],
  },
};
