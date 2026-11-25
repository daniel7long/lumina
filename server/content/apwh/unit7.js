import { mc, tf } from '../builder.js';

export default {
  summary: 'Two world wars, a revolution and a worldwide depression reshaped states, economies and the way people understood violence between 1914 and 1945.',
  modules: {
    13: {
      summary: 'World War I and the interwar years.',
      sessions: [{
        t: 'The Great War and the crises that followed',
        s: 'Causes, consequences and the rise of authoritarian movements.',
        md: `
## Causes of World War I
Historians often cite four long-term causes: **militarism**, **alliances**, **imperial rivalry** and **nationalism**. The immediate trigger was the assassination of Archduke **Franz Ferdinand** of Austria-Hungary in Sarajevo in **June 1914**. Alliance obligations turned a regional crisis into a continental war between the **Allies** (including Britain, France and Russia) and the **Central Powers** (including Germany, Austria-Hungary and the Ottoman Empire).

## The war
- **Trench warfare** produced long stalemates and huge casualties.
- It was a **total war**: governments mobilized industry, labor and propaganda. Colonies supplied soldiers and resources.
- The Ottoman Empire's government carried out the **Armenian genocide** (1915).
- The war ended in **November 1918**. The **Treaty of Versailles (1919)** required Germany to accept responsibility for the war and pay reparations. Four empires fell: German, Austro-Hungarian, Russian and Ottoman. The **League of Nations** was formed, though without U.S. membership.

## Revolution and depression
- **Russian Revolution:** in 1917 the tsar was overthrown. **Lenin** and the **Bolsheviks** took power in October and established the Soviet Union. **Stalin** later directed rapid industrialization and collectivization.
- **Great Depression:** the **1929** U.S. stock market crash led to a worldwide economic crisis with mass unemployment. Some governments increased state control of the economy.
- **Authoritarian movements:** in Italy **Mussolini** led a fascist government from 1922. In Germany, resentment of Versailles and the depression helped bring **Hitler** and the Nazi Party to power in **1933**.

### Historical thinking: contextualization
To explain Hitler's rise, place it in context: defeat, reparations, hyperinflation in 1923, and the depression.
`,
        q: [
          mc('What event triggered the outbreak of World War I in 1914?', 'The assassination of Archduke Franz Ferdinand', 'This crisis activated alliance commitments.', [
            ['The Great Depression', 'The depression began in 1929.'],
            ['The Treaty of Versailles', 'The treaty ended the war in 1919.'],
            ['The Russian Revolution', 'It occurred during the war, in 1917.'],
          ]),
          mc('Which effect of the Great Depression helped extremist movements gain support in Germany?', 'Mass unemployment and economic hardship', 'Many Germans were drawn to promises of national recovery.', [
            ['A rapid fall in unemployment', 'Unemployment rose sharply.'],
            ['The creation of the League of Nations', 'The League was created in 1920.'],
            ['A rapid rise in wages', 'Wages and employment fell during the depression.'],
          ]),
        ],
      }],
    },
    14: {
      summary: 'World War II and the Holocaust.',
      sessions: [{
        t: 'World War II',
        s: 'Causes, total war and the postwar order.',
        md: `
## Causes
- Lingering resentment from Versailles and the depression.
- **Aggression** by Japan (invading Manchuria in 1931 and China in 1937, including the atrocities at **Nanjing**), by Italy (Ethiopia, 1935) and by Germany (Austria and Czechoslovakia in 1938–1939).
- **Appeasement:** Britain and France gave in to Hitler's demands, notably at **Munich (1938)**.

## The war
- Germany invaded **Poland** on **1 September 1939**, and Britain and France declared war.
- Germany attacked the Soviet Union in 1941. Japan attacked **Pearl Harbor** in December 1941, bringing the United States into the war.
- The war was fought across Europe, Asia, Africa and the Pacific. Civilians were targeted by bombing and by occupation. Governments mobilized whole societies, and women entered factories in large numbers.
- Germany surrendered in **May 1945**. After the United States dropped atomic bombs on **Hiroshima and Nagasaki** in August 1945, Japan surrendered.

## The Holocaust
The Nazi regime murdered about **six million Jews** and millions of others, including Roma, disabled people and political prisoners, using ghettos, mass shootings and death camps such as **Auschwitz**. It is the most extreme example of state-organized **genocide** in the century.

## Results
The war killed tens of millions of people, destroyed cities and ended German and Japanese empires. The **United Nations** was founded in 1945. Europe was weakened and divided between the United States and the Soviet Union, the two superpowers. Colonial peoples demanded independence.

### Historical thinking: point of view
Wartime propaganda posters show how governments wanted people to see the war. They are evidence for what leaders wanted, not necessarily for what people believed.
`,
        q: [
          mc('What was the policy of appeasement?', 'Giving in to aggressive demands in hopes of avoiding war', 'Britain and France accepted Germany’s demands, as at Munich in 1938.', [
            ['Fighting immediately against any aggressor', 'This is the opposite of appeasement.'],
            ['Forming an alliance with Germany', 'Britain and France did not ally with Germany.'],
            ['Dividing Africa among European powers', 'This was imperialism.'],
          ]),
          mc('Which event brought the United States into World War II?', 'The Japanese attack on Pearl Harbor in December 1941', 'The U.S. declared war on Japan after the attack.', [
            ['The German invasion of Poland', 'This began the war in Europe in 1939.'],
            ['The Treaty of Versailles', 'The treaty ended World War I.'],
            ['The Munich Agreement', 'This was a 1938 agreement involving Germany.'],
          ]),
        ],
      }],
    },
  },
  assessment: {
    title: 'Unit 7 assessment · Global Conflict',
    tasks: [
      mc('Which of the following was NOT usually listed as a long-term cause of World War I?', 'The atomic bomb', 'Atomic weapons did not exist until 1945.', [
        ['Militarism', 'Arms buildups are a standard cause.'],
        ['Alliances', 'Alliance systems turned a local crisis into a wider war.'],
        ['Nationalism', 'Nationalism heightened tensions, especially in the Balkans.'],
      ]),
      mc('Which empire did NOT collapse as a result of World War I?', 'The British Empire', 'Britain remained a large empire until after World War II.', [
        ['The Russian Empire', 'The tsar fell in 1917.'],
        ['The Austro-Hungarian Empire', 'It broke into separate states.'],
        ['The Ottoman Empire', 'It was dissolved and replaced by modern Turkey.'],
      ]),
      mc('The Treaty of Versailles required Germany to', 'accept responsibility for the war and pay reparations', 'These terms caused lasting resentment.', [
        ['join the League of Nations immediately', 'Germany was not admitted at first.'],
        ['divide Africa', 'This was decided in 1884–1885.'],
        ['become part of the Soviet Union', 'The treaty did not require this.'],
      ]),
      mc('Which leader established the Soviet Union after the Bolsheviks took power in 1917?', 'Lenin', 'He led the Bolshevik takeover in October 1917.', [
        ['Mussolini', 'Mussolini led fascist Italy.'],
        ['Hitler', 'Hitler led Nazi Germany.'],
        ['Khubilai Khan', 'He was a Mongol ruler of the thirteenth century.'],
      ]),
      mc('Which event is generally used to mark the beginning of the Great Depression?', 'The U.S. stock market crash of 1929', 'It triggered a worldwide economic downturn.', [
        ['The Munich Agreement of 1938', 'This was a diplomatic agreement.'],
        ['The Berlin Conference of 1884', 'This concerned Africa.'],
        ['The Meiji Restoration of 1868', 'This occurred in Japan.'],
      ]),
      mc('The Holocaust refers to', 'the systematic murder of about six million Jews by the Nazi regime and its collaborators', 'It was a state-organized genocide.', [
        ['the bombing of Hiroshima', 'The bombing of Hiroshima was a separate event.'],
        ['the Armenian genocide of 1915', 'This was a separate event during World War I.'],
        ['the siege of Constantinople', 'This occurred in 1453.'],
      ]),
      tf('World War II was a total war in which civilians and economies were targets and resources.', true, 'Correct. Governments mobilized whole societies, and civilians were affected by bombing and occupation.', 'Both civilians and economies were central, so the statement is true.'),
    ],
  },
};
