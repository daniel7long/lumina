import { mcq, tf, reading, video, session, lesson, written, choice, K, crit } from '../helpers.js';

const P = 'eng:u1';

export default {
  id: `${P}`,
  title: 'Unit 1 · Finding Your Way: Resources for Student Life',
  summary: 'Search for, classify and explain the housing, banking, insurance, campus and city resources you will need as a student in the U.S.',
  objectives: [
    'List and classify the resources you need as a student in the U.S. (housing, banking, insurance, university services, transportation, restaurants).',
    'Solve problems related to university life by using resource-search strategies and polite functional language.',
    'Organize resources in a clear, understandable way for other incoming students.',
    'Create guides, visuals and itineraries that help other students prepare for life in the U.S.',
  ],
  lessons: [
    /* ───────────── Lesson 1 ───────────── */
    lesson(`${P}:l1`, 'Lesson 1 · Student Housing in the U.S.', 'Learn how U.S. student housing works and how to ask for a roommate.',
      ['Name the main types of student housing and where to search for each.', 'Understand the vocabulary used in housing descriptions.', 'Write an advertisement looking for a roommate.'],
      [
        session(`${P}:l1:s1`, 'Housing types and where to look', 'On campus, off campus and everything in between.', {
          reading: reading('Types of student housing', 6, `
## Where will you live?

Most universities in the U.S. offer a mix of housing. Your choice affects your cost, your daily routine and how quickly you meet people.

### On-campus options
- **Residence hall (dorm):** a shared building with single, double or triple rooms. Bathrooms are often shared. Meal plans are common.
- **University apartment:** a small apartment owned by the university, often for graduate or older students.

### Off-campus options
- **Private apartment:** you sign a **lease** (a rental contract, usually 12 months) with a **landlord**.
- **Shared house or apartment:** several students split the rent and bills.
- **Sublet:** you rent a room for a short time from someone who already has a lease.

### Where to search
| Source | Good for |
| --- | --- |
| University housing office website | On-campus rooms, official off-campus listings |
| Student Facebook or WeChat groups | Roommates, sublets, furniture |
| Large rental websites | Apartments near campus, photos, prices |

> **Search tip:** Type the name of your university plus the words *student housing* or *off-campus housing*. Always check the date of a post — old listings are common.

Before you commit, ask: *How far is it from campus? Is it furnished? What is the total monthly cost?*
`),
          quiz: [
            mcq('Which housing option usually comes with a lease of about 12 months and a landlord?', [
              ['A residence hall room', 'Residence halls are run by the university and are usually booked per semester or academic year, not through a landlord.'],
              ['A private off-campus apartment', 'Correct. A private apartment is rented from a landlord with a lease, usually 12 months.'],
              ['A university meal plan', 'A meal plan pays for food on campus. It is not a type of housing.'],
            ], 1),
            tf('A sublet is a short-term rental from someone who already has a lease.', true,
              'Correct. In a sublet, the original tenant rents the room to you for a limited time.',
              'Not quite. A sublet is exactly this: you rent from a current tenant, not directly from the building owner.'),
          ],
        }),
        session(`${P}:l1:s2`, 'Reading housing descriptions', 'Decode abbreviations and the words that hide extra costs.', {
          reading: reading('The vocabulary of housing ads', 7, `
## Housing ads are written in short-hand

Landlords pay by the word online, so ads are full of abbreviations. Learn these first.

| In the ad | Means |
| --- | --- |
| **1BR / 2BR** | one bedroom / two bedrooms |
| **1BA** | one bathroom |
| **W/D** | washer and dryer |
| **Utils incl.** | utilities (electricity, gas, water) are included in the rent |
| **Avail. Aug 15** | available from August 15 |
| **Furn.** | furnished (has a bed, desk, sofa…) |

### Costs to look for
- **Rent:** the amount you pay each month.
- **Security deposit:** money you pay before moving in (often one month's rent). You get it back if you leave the place clean and undamaged.
- **Utilities:** electricity, gas, water, internet. If they are *not* included, add them to your budget.
- **Application fee:** a small fee just for applying.

### Example
> *Sunny 2BR/1BA, W/D in unit, 10-min walk to campus. $1,400/mo, utils not incl. $1,400 deposit. Avail. Aug 15. No smoking, no pets.*

Reading this ad: the apartment has two bedrooms and one bathroom, the monthly rent is $1,400, and you will pay extra for electricity, gas and water.

### Questions you can ask
- *Does the rent include internet?*
- *Is the deposit refundable?*
- *What is the lease length?*
`),
          quiz: [
            mcq('An ad says "$1,200/mo, utils not incl." What does this mean for your budget?', [
              ['The rent is $1,200 and you pay electricity, gas and water in addition.', 'Correct. "Utils not incl." means utilities are not included in the rent, so they are an extra monthly cost.'],
              ['You pay $1,200 in total, including all bills.', 'That would be "utils incl." The word "not" changes the meaning.'],
              ['The apartment has no electricity.', 'Not included in the rent does not mean unavailable; it means you pay the bill yourself.'],
            ], 0),
            mcq('What is a security deposit?', [
              ['A monthly fee for building security guards', 'Deposits are not about guards. They are held by the landlord to cover possible damage or unpaid rent.'],
              ['Money paid before you move in, often returned if there is no damage', 'Correct. It is usually about one month of rent and is returned when you leave if the place is in good condition.'],
              ['The first month of rent', 'The first month of rent is separate from the deposit.'],
            ], 1),
          ],
        }),
        session(`${P}:l1:s3`, 'Writing a roommate ad', 'Study two examples, then plan your own.', {
          reading: reading('How to write a roommate ad', 8, `
## A good roommate ad answers four questions

1. **Who are you?** (name, program, country, a few interests)
2. **How do you live?** (early bird or night owl, clean or relaxed, quiet or social)
3. **What are you looking for?** (on or off campus, budget, move-in date)
4. **How can people contact you?**

### Example 1 (short social-media post)
> Hi everyone! I'm Mei, a first-year master's student in Data Science from China. I'm looking for one roommate for a 2BR apartment near campus starting August 15. Budget: about $800 per month each. I'm tidy, I cook a lot and I like hiking and board games. I go to bed around 11 p.m. and prefer a quiet weekday evening. Message me if you are interested!

### Example 2 (more detail)
> **Looking for a roommate — fall semester.** I'm Carlos, a PhD student in Chemistry. I would like to share an off-campus apartment within 15 minutes of campus. Non-smoker, no pets. I'm friendly, but I need quiet time to study. Rent under $900/month. DM me to chat!

### Useful phrases
- *I'm looking for…*  •  *I'm a … person*  •  *My budget is…*
- *I prefer…*  •  *It would be great if…*  •  *Feel free to message me.*

### Make it readable
Short sentences, one idea each. If you design a visual (Canva or similar), use big text, strong contrast and no more than two fonts.
`),
          quiz: [
            mcq('Which sentence tells a possible roommate about your living habits?', [
              ['I am a first-year master\'s student in Data Science.', 'This tells about who you are (your program), not how you live day to day.'],
              ['I go to bed around 11 p.m. and I keep the kitchen clean.', 'Correct. Sleep schedule and cleanliness are living habits that roommates care about.'],
              ['Rent should be under $900 per month.', 'This is about budget, which is important, but not a living habit.'],
            ], 1),
          ],
        }),
      ]),

    /* ───────────── Lesson 2 ───────────── */
    lesson(`${P}:l2`, 'Lesson 2 · Navigating Insurance and Banking', 'Understand health insurance and bank accounts, then explain the steps to others.',
      ['Explain key health-insurance terms.', 'Compare checking and savings accounts and list the steps to open one.', 'Write a clear step-by-step guide.'],
      [
        session(`${P}:l2:s1`, 'Health insurance basics', 'The five words you will meet again and again.', {
          reading: reading('Health insurance in the U.S.', 8, `
## Why insurance matters

Health care in the U.S. is expensive. **Health insurance** is a plan that helps pay for it. Many universities require international students to have insurance, either through a **student health insurance plan** or through a private plan that meets the university's rules. Ask your university's international student office what applies to you.

### Five key words
| Word | Plain meaning |
| --- | --- |
| **Premium** | The amount you pay regularly (often monthly or per semester) to keep the plan active |
| **Deductible** | What you pay yourself each year before insurance starts to pay for most services |
| **Copay** | A fixed fee at the visit, for example $25 to see a doctor |
| **Coinsurance** | The percentage you pay after the deductible, for example 20% |
| **In-network** | Doctors and hospitals that have an agreement with your insurance. They cost less |

### Where to search
1. Your university's student health center website
2. The international student office
3. The insurance company's website or member card

### Useful questions
- *Is this clinic in-network?*
- *Do I need a referral to see a specialist?*
- *Does the plan cover prescription medicine?*
`),
          quiz: [
            mcq('What is a deductible?', [
              ['The monthly amount you pay to keep the plan', 'That is the premium.'],
              ['What you pay yourself in a year before insurance starts to pay for most services', 'Correct. After you reach the deductible, insurance begins to share the cost.'],
              ['A discount for students', 'A deductible is not a discount. It is an amount you pay first.'],
            ], 1),
            tf('Going to an in-network doctor usually costs less than going out-of-network.', true,
              'Correct. In-network providers have agreed prices with your insurance company.',
              'Not quite. In-network providers have agreed lower prices, so they usually cost less.'),
          ],
        }),
        session(`${P}:l2:s2`, 'Opening a bank account', 'Checking, savings and what the bank will ask for.', {
          reading: reading('Banking basics for new students', 8, `
## Two accounts most students use

- **Checking account:** for everyday money. It comes with a **debit card** you use to pay in shops and to take cash out of an ATM.
- **Savings account:** for money you do not need every day. It usually pays a small amount of **interest**.

### What banks may ask for
Policies differ by bank, so always check the bank's website or ask a staff member. Many banks accept:
- Your passport and visa
- Your I-20 or DS-2019 (the document from your university)
- Proof of address in the U.S.
- Your university acceptance letter or student ID

### Watch the fees
- **Monthly maintenance fee** — some banks waive it for students
- **Minimum balance** — the lowest amount you must keep in the account
- **ATM fee** — charged when you use another bank's machine
- **Overdraft fee** — charged when you spend more than you have

### Words on a statement
*Balance* (money in the account) · *Deposit* (money in) · *Withdrawal* (money out) · *Routing number* and *account number* (used for transfers).

### Useful questions
- *Is there a monthly fee for students?*
- *Is there a minimum balance?*
- *Can I open the account before I arrive in the U.S.?*
`),
          quiz: [
            mcq('Which account is best for paying your daily expenses with a debit card?', [
              ['A checking account', 'Correct. A checking account is designed for everyday spending and comes with a debit card.'],
              ['A savings account', 'Savings accounts are for money you do not need every day and may limit how often you can withdraw.'],
              ['An insurance account', 'Insurance is not a bank account.'],
            ], 0),
            mcq('You see an "overdraft fee" on your statement. What probably happened?', [
              ['You saved more than the minimum balance.', 'Saving money does not cause a fee. Overdraft is the opposite situation.'],
              ['You spent more money than you had in the account.', 'Correct. An overdraft happens when a payment is larger than your balance.'],
              ['You used your own bank\'s ATM.', 'That is usually free. ATM fees apply to other banks\' machines.'],
            ], 1),
          ],
        }),
        session(`${P}:l2:s3`, 'Writing a step-by-step guide', 'Order, sequence words and imperatives.', {
          reading: reading('How to write clear steps', 7, `
## A guide for other students

Your task is to help someone who has never done this before. A clear guide has three parts: **what you need**, **the steps** and **tips or warnings**.

### Use sequence words
*First, … · Next, … · After that, … · Then, … · Finally, …*

### Start each step with a verb (imperative)
✔ *Bring your passport and I-20.*
✘ *You are needing to have your passport.*

### Model guide: How to open a checking account
**What you need:** passport, visa, I-20, proof of U.S. address.
1. **First,** choose a bank near campus and check the student fees online.
2. **Next,** book an appointment or visit a branch with your documents.
3. **After that,** tell the banker you want a student checking account and ask about fees.
4. **Then,** make your first deposit if the bank asks for one.
5. **Finally,** activate your debit card and set up mobile banking.

**Tip:** Ask *"Is there a monthly fee for students?"* before you sign anything.

### Checklist before you share your guide
- Are the steps in the right order?
- Does every step start with a verb?
- Did you include official resources (website names)?
- Can a new student follow it without help?
`),
          quiz: [
            mcq('Which sentence is the best step in a guide?', [
              ['Documents are needed by the bank.', 'This describes a fact. A step should tell the reader what to do.'],
              ['Bring your passport and I-20 to the branch.', 'Correct. It starts with a verb and tells the reader exactly what to do.'],
              ['You can maybe think about going sometime.', 'This is vague. Steps should be direct and specific.'],
            ], 1),
          ],
        }),
      ]),

    /* ───────────── Lesson 3 ───────────── */
    lesson(`${P}:l3`, 'Lesson 3 · Success in Campus Life', 'Use university resources and ask for help with confidence.',
      ['Match common problems to campus resources.', 'Use functional language to ask, follow up, clarify and double-check.', 'Prepare a one-page plan of action for a campus problem.'],
      [
        session(`${P}:l3:s1`, 'Your campus resource map', 'Who can help with what?', {
          reading: reading('Campus resources at a glance', 7, `
## You do not need to solve everything alone

Universities have many offices that are *not* about classes but help you succeed. Names differ at every university, so search for the idea.

| Need | Look for | Search words |
| --- | --- | --- |
| Lost Student ID | ID office, campus card office | *replace student ID* |
| Food plan | Dining services | *meal plan options* |
| Books and research help | University library, librarians | *library hours, ask a librarian* |
| Choosing classes | Academic advisor | *schedule advising appointment* |
| Visa or immigration questions | International student office | *international student services* |
| Health or stress | Health center, counseling center | *student health services* |

### Search strategy
1. Use the university's own website, not only a general search.
2. Search with a verb: *replace, apply, book, register, request*.
3. Look for **FAQ** pages and **contact** pages.
4. Save the office name, location, opening hours and email.

### Be aware
An advisor in one office cannot always answer questions for another. If you get the wrong office, ask: *Who should I contact about…?*
`),
          quiz: [
            mcq('You are not sure which classes to take next semester. Whom should you contact first?', [
              ['Dining services', 'Dining services help with meals, not course planning.'],
              ['Your academic advisor', 'Correct. Academic advisors help you choose courses that match your degree requirements.'],
              ['The ID office', 'The ID office handles student cards.'],
            ], 1),
            tf('If an office cannot help you, it is polite to ask who you should contact instead.', true,
              'Correct. Asking "Who should I contact about…?" is normal and helps you find the right person.',
              'Not quite. Asking for a referral is polite and common. Staff expect it.'),
          ],
        }),
        session(`${P}:l3:s2`, 'Asking for help: functional language', 'Watch a short skit and notice the phrases.', {
          video: video('Skit: "I lost my Student ID"', 3, `
**[Scene: the campus card office. A student, Amira, walks up to the desk.]**

**Amira:** Hi, good morning. I lost my student ID card. Where can I find a replacement?

**Staff:** Sorry to hear that. You can request a new one right here. It's a twenty-dollar fee.

**Amira:** Is there another option? I'm a bit short on money this week.

**Staff:** Well, you can pay by credit card or through your student account. That way it's charged to your bill.

**Amira:** Oh, I see. What do you mean by "student account"?

**Staff:** It's the billing account in the student portal. Anything you owe appears there, and you can pay later.

**Amira:** So does that mean I should log in to the portal and pay online after I get the card?

**Staff:** Exactly. And if you find your old card, bring it back — it gets cancelled once we issue the new one.

**Amira:** Great, thank you so much for your help!

---
**Language in this skit**
- Asking: *Where can I find…?*
- Following up: *Is there another option?*
- Clarifying: *What do you mean by…?*
- Double-checking: *Does that mean I should…?*
`, 'A student replaces a lost ID and uses four helpful question types.'),
          quiz: [
            mcq('Amira says "What do you mean by student account?" What is she doing?', [
              ['Asking where to find something', 'That is "Where can I find…?" Here she is asking about the meaning of a term.'],
              ['Clarifying a word she does not understand', 'Correct. "What do you mean by…?" asks for an explanation of a term or statement.'],
              ['Double-checking the plan', 'Double-checking sounds like "Does that mean I should…?"'],
            ], 1),
            mcq('Which phrase helps you double-check that you understood the next step?', [
              ['Is there another option?', 'This asks for alternatives (follow-up).'],
              ['Does that mean I should log in and pay online?', 'Correct. It repeats the action in your own words so the other person can confirm.'],
              ['Where can I find the office?', 'This asks for a location.'],
            ], 1),
          ],
        }),
        session(`${P}:l3:s3`, 'From problem to plan of action', 'Build a one-page guide for other students.', {
          reading: reading('Solving campus problems with a plan', 8, `
## Think like a problem solver

Every problem has **people**, **places** and **next steps**. Use this four-part template for a one-page guide.

1. **The problem:** one sentence. *I need to get a book from the library.*
2. **Who/where to go:** the office name, website, opening hours.
3. **What to say or ask:** two or three questions.
4. **If something goes wrong:** a backup plan.

### Example scenario: the library book is not available
- **Problem:** I need a book, but the library shows "checked out."
- **Go to:** the library website → *Request item* or the information desk.
- **Ask:** *Can I place a hold on this book?* · *Can you borrow it from another library for me?* (this is called **interlibrary loan**)
- **Backup plan:** ask a librarian if there is an electronic copy or a similar book.

### More scenarios to practice
- I need to choose a meal plan as a vegetarian who eats on campus twice a day.
- I need to meet an advisor before course registration opens.
- I lost my student ID.

### Design tips
Use headings and short bullet points so your page can be read in under one minute. Put the most important action first.
`),
          quiz: [
            mcq('A library book you need is "checked out." Which backup plan is most useful?', [
              ['Stop looking for the book', 'Giving up is not a plan of action. There are several ways to get the information.'],
              ['Ask about placing a hold, interlibrary loan or an e-book', 'Correct. These are common ways to access a book that is not on the shelf.'],
              ['Take the book from another student', 'This is not appropriate or allowed.'],
            ], 1),
          ],
        }),
      ]),

    /* ───────────── Lesson 4 ───────────── */
    lesson(`${P}:l4`, 'Lesson 4 · Exploring Your New Home', 'Plan transportation, food and activities in your city.',
      ['Use transportation and food vocabulary in real situations.', 'Handle common service encounters politely.', 'Plan and explain a one-day itinerary with options.'],
      [
        session(`${P}:l4:s1`, 'Getting around', 'Fares, passes and rideshare.', {
          reading: reading('Transportation vocabulary and options', 7, `
## Getting around a U.S. city

Cities differ a lot. Some have good buses and trains. In other places, many people drive.

### Key vocabulary
| Word | Meaning |
| --- | --- |
| **Fare** | the price of one trip |
| **Transit pass** | a card or app ticket for unlimited or many rides |
| **Rideshare** | a car you request with an app (the driver is not a taxi company employee) |
| **Surge pricing** | a higher price when many people want rides |
| **Transfer** | changing from one bus or train to another |
| **Shuttle** | a bus run by the university for students |

### Ask before you travel
- *How much is the fare?*
- *Does my student ID work as a transit pass?*
- *Does this bus run on weekends?*
- *How often does the shuttle come?*

### Giving options
When you write a guide, give two or three choices: *You can take the bus (cheap but slow), a rideshare (fast but expensive) or walk (free and 20 minutes).*
`),
          quiz: [
            mcq('What is a "fare"?', [
              ['A festival in the city', 'A "fair" is an event. "Fare" is spelled differently and means the cost of a trip.'],
              ['The price of a trip on public transportation or a ride', 'Correct. A fare is what you pay for one journey.'],
              ['A pass that lets you ride for free', 'That would be a transit pass, which may have a different price.'],
            ], 1),
            tf('Surge pricing means rideshare prices can go up when many people want rides.', true,
              'Correct. When demand is high, apps can raise the price for a short time.',
              'Not quite. Surge pricing is exactly this — prices rise when demand is high.'),
          ],
        }),
        session(`${P}:l4:s2`, 'Food and service encounters', 'Order, ask questions and handle small problems.', {
          video: video('Skit: Ordering lunch at a campus café', 3, `
**[Scene: a café counter near campus. Daniel is ordering lunch.]**

**Cashier:** Hi there! What can I get for you?

**Daniel:** Hi. Could I have the chicken sandwich, please?

**Cashier:** Sure. Would you like fries or a salad with that?

**Daniel:** What comes with the salad? Is the dressing on the side?

**Cashier:** It comes with tomatoes and cucumbers, and yes — the dressing is on the side.

**Daniel:** Great, I'll have the salad. And could you leave out the cheese? I'm allergic to dairy.

**Cashier:** No problem. Anything to drink?

**Daniel:** Just water, please. Oh, and is the tip included?

**Cashier:** Not on the card machine. You can add a tip if you'd like — most people leave around fifteen to twenty percent.

**Daniel:** Got it. Thanks!

---
**Useful phrases:** *Could I have…, please? · What comes with…? · Could you leave out…? · Is the tip included? · For here or to go?*
`, 'Ordering food, asking about ingredients and understanding tipping.'),
          reading: reading('Food and delivery: what to know', 5, `
## Eating out and ordering in

- **Dining hall / meal plan:** pay in advance for a number of meals.
- **Café and restaurant:** you order at the counter or sit and a **server** comes to you. In sit-down restaurants, a **tip** (often 15–20%) is normal.
- **Food delivery apps:** compare delivery fees and service fees; the menu price is not the final price.
- **Groceries:** *grocery store, supermarket, farmers market*. Many students buy food in bulk to save money.

### Special diets
Say it clearly: *I'm vegetarian.* · *I can't eat gluten.* · *Does this contain nuts?*
`),
          quiz: [
            mcq('Daniel says "Could you leave out the cheese?" Why is this a good request?', [
              ['It is polite and specific.', 'Correct. "Could you…" is polite and "leave out the cheese" is clear and specific.'],
              ['It is a complaint about the food.', 'He is making a request before the food is prepared, not complaining.'],
              ['It is a way to pay the bill.', 'It has nothing to do with payment.'],
            ], 0),
          ],
        }),
        session(`${P}:l4:s3`, 'Planning a one-day itinerary', 'Where to go, how to get there, what to eat.', {
          reading: reading('Build a day-in-your-city itinerary', 8, `
## Your final guide: *A day in my city*

An **itinerary** is a plan for a trip or a day. A good itinerary tells the reader **what, when, how to get there, how much** and **what else they can do**.

### Model itinerary (one day in a college town)
| Time | Activity | How to get there | Cost |
| --- | --- | --- | --- |
| 9:00 a.m. | Breakfast at a local café | Walk, 10 minutes | $8–12 |
| 10:30 a.m. | Visit the city museum (student discount) | Bus 61, fare $2.75 | $8 |
| 1:00 p.m. | Lunch at the market food hall | 5-minute walk | $10–15 |
| 3:00 p.m. | Walk in the park or visit a bookstore | Free | $0 |
| 6:30 p.m. | Dinner and a movie night | Rideshare or bus | $25 |

### Give options
For each part of the day, add an alternative: *If it rains, visit the library café instead.*

### Language to use
*I recommend…* · *You can either … or …* · *It takes about … minutes.* · *It's worth it because…* · *If you prefer a cheaper option, …*

### Checklist
- Times are in a sensible order.
- Every stop says how to get there and what it costs.
- You gave at least one alternative.
- Your text is easy to scan (table, bullets, icons).
`),
          quiz: [
            mcq('Which detail makes an itinerary most useful for a new student?', [
              ['Only the name of each place', 'Names are not enough. Readers also need timing, transportation and cost.'],
              ['The time, how to get there, cost and an alternative', 'Correct. This is the information a new student needs to follow your plan.'],
              ['A long story about your favorite memory', 'Personal stories can be nice, but the guide needs practical details first.'],
            ], 1),
            tf('An itinerary should give options, not only one choice for each activity.', true,
              'Correct. Options help readers who have a different budget, schedule or weather.',
              'Not quite. Giving options is a feature of a strong itinerary.'),
          ],
        }),
      ]),
  ],

  /* ───────────── Unit assessment ───────────── */
  assessment: {
    id: `${P}:assessment`,
    title: 'Unit 1 Assessment · US Student Survival Guide',
    estMinutes: 30,
    body: {
      instructions: `
## Show what you can do

Complete the six tasks below. Four are multiple-choice or True/False questions that are checked immediately. Two are writing tasks that are scored with a **rubric** — a list of clear things your writing should contain.

Your work receives a rating: **A+, A, B+, B or C**. You need a **B or higher** to pass this unit. You can try again as many times as you like, and your best result counts.

**Tip:** Before you submit, read the checklist under each writing task.
`,
      tasks: [
        choice('t1', 10, mcq('Your student ID is lost. Which search phrase is most likely to find the right office on your university website?', [
          ['best restaurants near campus', 'This would help you find food, not ID services.'],
          ['replace lost student ID', 'Correct. A verb plus the specific object (replace, lost student ID) leads straight to the right page.'],
          ['housing deposit refund', 'This is about housing, not student cards.'],
          ['transit pass price', 'This is about transportation.'],
        ], 1)),
        choice('t2', 10, mcq('A listing says "2BR/1BA, W/D, utils incl., avail. Sept 1." Which statement is TRUE?', [
          ['The apartment has two bathrooms.', '"1BA" means one bathroom.'],
          ['You must pay your own electricity and gas.', '"Utils incl." means utilities are included.'],
          ['The place has two bedrooms and a washer/dryer, and is available from September 1.', 'Correct. 2BR = two bedrooms, W/D = washer and dryer, avail. Sept 1 = available from September 1.'],
          ['The apartment is furnished.', 'There is no information about furniture in this listing.'],
        ], 2)),
        choice('t3', 10, tf('With health insurance, your deductible is the amount you pay each month to keep the plan.', false,
          'That describes a premium. A deductible is what you pay for services before insurance starts to share the cost.',
          'Correct. The monthly payment is the premium. A deductible is what you pay yourself first before insurance pays most of the cost.')),
        choice('t4', 10, mcq('A staff member says: "You need to submit Form B to the registrar." You are not sure what that means. Which question clarifies it?', [
          ['Where can I find Form B?', 'Useful, but it asks for a location and does not clarify the word "registrar."'],
          ['What do you mean by "registrar"?', 'Correct. This directly asks for the meaning of the word you do not understand.'],
          ['Is there another option?', 'This asks for alternatives and does not clarify the meaning.'],
          ['Thank you for your time.', 'Polite, but it does not solve the problem.'],
        ], 1)),
        written('t5', 30, {
          prompt: 'Write a roommate ad (a social-media post) of 70–120 words.',
          scenario: 'You are moving to the U.S. for your studies and you want to share an apartment with one roommate. Include: information about yourself, your interests, your living habits, and the type of housing you want (on or off campus), plus your budget.',
          starter: 'Hi everyone! I\'m … and I\'m looking for a roommate…',
          minWords: 70,
          checklist: [
            'I introduced myself (name, program or country).',
            'I mentioned at least two interests.',
            'I described my living habits (sleep, cleanliness, noise…).',
            'I said what kind of housing I want and my budget.',
            'I told people how to contact me.',
          ],
          modelAnswer: 'Hi everyone! I\'m Mei, a first-year master\'s student in Data Science from China. I\'m looking for one roommate to share a 2BR apartment near campus starting August 15. My budget is about $800 per month. I\'m tidy, I like cooking and hiking, and I enjoy board games on weekends. I usually go to bed around 11 p.m. and I prefer a quiet evening during the week. I\'m a non-smoker and I don\'t have pets. If you are friendly, respectful and looking for a similar place, please message me. I\'d love to hear from you!',
          rubric: {
            criteria: [
              crit('content', 'Required information', 'Introduction, interests, habits, housing and budget are included.', 40, [
                K.any('intro', ['I\'m', 'I am', 'my name'], 'Introduces the writer', 'Start with who you are: "I\'m … a student in …".'),
                K.any('interests', ['like', 'love', 'enjoy', 'interested in', 'hobby', 'hobbies'], 'Mentions interests', 'Add at least one interest, e.g. "I enjoy hiking".'),
                K.any('habits', ['clean', 'tidy', 'quiet', 'night', 'bed', 'early', 'smok', 'noise', 'cook'], 'Describes living habits', 'Say how you live: sleep schedule, cleanliness or noise.'),
                K.any('housing', ['apartment', 'house', 'dorm', 'campus', 'room', 'bedroom', '2BR', 'residence'], 'Names the housing type', 'Say what kind of place you want (apartment, on or off campus…).'),
                K.any('budget', ['$', 'budget', 'rent', 'per month', '/month'], 'States a budget', 'Add your budget, e.g. "about $800 per month".'),
              ]),
              crit('language', 'Clear, appropriate language', 'Friendly register, clear sentences and useful phrases.', 35, [
                K.any('phrases', ['looking for', 'I prefer', 'my budget', 'it would be great', 'I would like', 'I\'d like', 'feel free'], 'Uses roommate-ad phrases', 'Use phrases such as "I\'m looking for…" or "I prefer…".'),
                K.sentences('sent', 4, 'Uses several complete sentences', 'Write at least four complete sentences.'),
                K.words('len', 70, 'Meets the length (70+ words)', 'Add more detail to reach about 70 words.'),
              ]),
              crit('contact', 'Call to action', 'Readers know how to respond.', 25, [
                K.any('cta', ['message', 'contact', 'DM', 'email', 'reach out', 'text me', 'get in touch'], 'Tells readers how to contact you', 'End with "Message me" or "Contact me at…".'),
              ]),
            ],
          },
        }),
        written('t6', 30, {
          prompt: 'Write a short step-by-step guide (80–150 words) called "What to do if you lose your student ID."',
          scenario: 'A new student has lost their student ID card and does not know what to do. Write a numbered guide for them. Include the office or website to use, what to ask, and a backup plan.',
          starter: 'What you need: …\n1. First, …\n2. Next, …',
          minWords: 80,
          checklist: [
            'Steps are in order and use words like first, next, then, finally.',
            'Each step starts with a verb.',
            'I named the office or website.',
            'I included at least one question to ask.',
            'I included a backup plan.',
          ],
          modelAnswer: 'What to do if you lose your student ID\n1. First, check your bag and ask at the last place you used your card.\n2. Next, go to the campus card office or search "replace lost student ID" on your university website.\n3. Then, ask the staff: "Where can I request a replacement, and how much is the fee?"\n4. After that, pay the fee online through your student account or at the office.\n5. Finally, check that the old card is cancelled so nobody else can use it.\nBackup plan: if the office is closed, email the campus card office or ask your advisor who else can help. You can also ask whether a temporary pass is available while you wait.',
          rubric: {
            criteria: [
              crit('steps', 'Clear sequence of steps', 'Steps are ordered and use sequence words.', 40, [
                K.any('seq', ['first', 'next', 'then', 'after that', 'finally'], 'Uses sequence words', 'Use at least three of: First, Next, Then, After that, Finally.', 3),
                K.any('verbs', ['go to', 'ask', 'check', 'search', 'pay', 'email', 'bring', 'visit', 'request', 'contact', 'call', 'log in'], 'Steps start with action verbs', 'Begin steps with verbs such as "Go to…", "Ask…", "Pay…".', 3),
              ]),
              crit('resources', 'Accurate resources', 'Names an office or website a student can use.', 30, [
                K.any('office', ['office', 'website', 'portal', 'card', 'ID office', 'student services', 'university'], 'Names an office or website', 'Say which office or website to use.', 2),
                K.any('replace', ['replace', 'replacement', 'new card', 'new ID'], 'Explains how to get a replacement', 'Explain how to get a new card.'),
              ]),
              crit('language', 'Functional language', 'Includes a question and a backup plan.', 30, [
                K.question('q', 'Includes a question to ask staff', 'Write one polite question, e.g. "Where can I request a replacement?"'),
                K.any('backup', ['backup', 'back-up', 'if the office', 'if not', 'otherwise', 'alternatively', 'in case'], 'Includes a backup plan', 'Add what to do if the first step does not work.'),
                K.words('len', 80, 'Meets the length (80+ words)', 'Add detail to reach about 80 words.'),
              ]),
            ],
          },
        }),
      ],
    },
  },
};
