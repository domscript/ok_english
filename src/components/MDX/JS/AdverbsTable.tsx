import {useState} from 'react';

const Data = {
  well: [
    <p>
      She performed <span className="bg-red-200 dark:bg-red-800">well</span> in
      her exams.
    </p>,
    <p>
      The team worked <span className="bg-red-200 dark:bg-red-800">well</span>{' '}
      together to complete the project.
    </p>,
    <p>
      The car is running{' '}
      <span className="bg-red-200 dark:bg-red-800">well</span> after the
      repairs.
    </p>,
  ],
  happily: [
    <p>
      The children played{' '}
      <span className="bg-red-200 dark:bg-red-800">happily</span> in the park.
    </p>,
    <p>
      Sarah smiled <span className="bg-red-200 dark:bg-red-800">happily</span>{' '}
      when she received the gift.
    </p>,
    <p>
      They danced <span className="bg-red-200 dark:bg-red-800">happily</span> at
      their friend's wedding.
    </p>,
  ],
  nicely: [
    <p>
      The room was decorated{' '}
      <span className="bg-red-200 dark:bg-red-800">nicely</span> for the party.
    </p>,
    <p>
      The chef presented the dish{' '}
      <span className="bg-red-200 dark:bg-red-800">nicely</span> on the plate.
    </p>,
    <p>
      The painting was framed{' '}
      <span className="bg-red-200 dark:bg-red-800">nicely</span> and hung on the
      wall.
    </p>,
  ],
  easily: [
    <p>
      John solved the math problem{' '}
      <span className="bg-red-200 dark:bg-red-800">easily</span>.
    </p>,
    <p>
      With his experience, he passed the driving test{' '}
      <span className="bg-red-200 dark:bg-red-800">easily</span>.
    </p>,
    <p>
      The puzzle was completed{' '}
      <span className="bg-red-200 dark:bg-red-800">easily</span> by the child.
    </p>,
  ],
  confidently: [
    <p>
      The speaker delivered the presentation{' '}
      <span className="bg-red-200 dark:bg-red-800">confidently</span> .
    </p>,
    <p>
      The soccer player kicked the ball{' '}
      <span className="bg-red-200 dark:bg-red-800">confidently</span> into the
      goal.
    </p>,
    <p>
      She <span className="bg-red-200 dark:bg-red-800">confidently</span>{' '}
      answered all the interview questions.
    </p>,
  ],
  quickly: [
    <p>
      The package was delivered{' '}
      <span className="bg-red-200 dark:bg-red-800">quickly</span> to its
      destination.
    </p>,
    <p>
      He finished his homework{' '}
      <span className="bg-red-200 dark:bg-red-800">quickly</span> and went out
      to play.
    </p>,
    <p>
      The computer program was coded{' '}
      <span className="bg-red-200 dark:bg-red-800">quickly</span> to meet the
      deadline.
    </p>,
  ],
  quietly: [
    <p>
      The baby slept <span className="bg-red-200 dark:bg-red-800">quietly</span>{' '}
      in the crib.
    </p>,
    <p>
      The library requested patrons to speak{' '}
      <span className="bg-red-200 dark:bg-red-800">quietly</span> .
    </p>,
    <p>
      They walked <span className="bg-red-200 dark:bg-red-800">quietly</span>{' '}
      through the haunted house.
    </p>,
  ],
  fast: [
    <p>
      The car raced <span className="bg-red-200 dark:bg-red-800">fast</span>{' '}
      down the highway.
    </p>,
    <p>
      She ran <span className="bg-red-200 dark:bg-red-800">fast</span> and won
      the race.
    </p>,
    <p>
      The internet connection is{' '}
      <span className="bg-red-200 dark:bg-red-800">fast</span> , allowing for
      smooth streaming.
    </p>,
  ],
  // ''''
  // ''''
  // ''''
  loudly: [
    <p>
      He shouted <span className="bg-red-200 dark:bg-red-800">loudly</span> to
      get their attention.
    </p>,
    <p>
      The music played{' '}
      <span className="bg-red-200 dark:bg-red-800">loudly</span> at the concert.
    </p>,
    <p>
      The thunder roared{' '}
      <span className="bg-red-200 dark:bg-red-800">loudly</span> during the
      storm.
    </p>,
  ],
  slowly: [
    <p>
      The turtle moved{' '}
      <span className="bg-red-200 dark:bg-red-800">slowly</span> across the
      road.
    </p>,
    <p>
      She spoke <span className="bg-red-200 dark:bg-red-800">slowly</span> and
      clearly for everyone to understand.
    </p>,
    <p>
      The snail crawled{' '}
      <span className="bg-red-200 dark:bg-red-800">slowly</span> up the wall.
    </p>,
  ],
  badly: [
    <p>
      He played the guitar{' '}
      <span className="bg-red-200 dark:bg-red-800">badly</span>, hitting all the
      wrong notes.
    </p>,
    <p>
      The movie was <span className="bg-red-200 dark:bg-red-800">badly</span>{' '}
      directed and poorly received by the critics.
    </p>,
    <p>
      She felt <span className="bg-red-200 dark:bg-red-800">badly</span> about
      forgetting her friend's birthday.
    </p>,
  ],
  sadly: [
    <p>
      The news of his passing spread{' '}
      <span className="bg-red-200 dark:bg-red-800">sadly</span> among his
      friends.
    </p>,
    <p>
      She looked <span className="bg-red-200 dark:bg-red-800">sadly</span> at
      the broken vase on the floor.
    </p>,
    <p>
      He spoke <span className="bg-red-200 dark:bg-red-800">sadly</span> about
      the loss of his beloved pet.
    </p>,
  ],
  lazily: [
    <p>
      The cat stretched{' '}
      <span className="bg-red-200 dark:bg-red-800">lazily</span> in the sun.
    </p>,
    <p>
      They spent a lazy afternoon lying{' '}
      <span className="bg-red-200 dark:bg-red-800">lazily</span> on the beach.
    </p>,
    <p>
      He <span className="bg-red-200 dark:bg-red-800">lazily</span> flipped
      through the channels on the TV.
    </p>,
  ],
  nervously: [
    <p>
      She tapped her foot{' '}
      <span className="bg-red-200 dark:bg-red-800">nervously</span> while
      waiting for the interview.
    </p>,
    <p>
      He <span className="bg-red-200 dark:bg-red-800">nervously</span> twirled
      his pen during the exam.
    </p>,
    <p>
      They laughed <span className="bg-red-200 dark:bg-red-800">nervously</span>{' '}
      at the awkward silence.
    </p>,
  ],
  carelessly: [
    <p>
      He handled the fragile glassware{' '}
      <span className="bg-red-200 dark:bg-red-800">carelessly</span> and broke
      it.
    </p>,
    <p>
      She <span className="bg-red-200 dark:bg-red-800">carelessly</span> tossed
      her clothes on the floor.
    </p>,
    <p>
      They <span className="bg-red-200 dark:bg-red-800">carelessly</span> left
      the door unlocked when they left the house.
    </p>,
  ],
  awkwardly: [
    <p>
      He walked <span className="bg-red-200 dark:bg-red-800">awkwardly</span> in
      his new shoes.
    </p>,
    <p>
      She greeted the stranger{' '}
      <span className="bg-red-200 dark:bg-red-800">awkwardly</span>, unsure of
      what to say.
    </p>,
    <p>
      They danced <span className="bg-red-200 dark:bg-red-800">awkwardly</span>{' '}
      at the party, stepping on each other's toes.
    </p>,
  ],
  // ''''
  // ''''
  // ''''
  'in the past': [
    <p>
      I used to visit my grandparents often{' '}
      <span className="bg-amber-200 dark:bg-amber-800">in the past</span>.
    </p>,
    <p>
      <span className="bg-amber-200 dark:bg-amber-800">In the past</span>,
      people relied on handwritten letters for communication.
    </p>,
    <p>
      She made some poor decisions{' '}
      <span className="bg-amber-200 dark:bg-amber-800">in the past</span>.
    </p>,
  ],
  'last week': [
    <p>
      I went on vacation{' '}
      <span className="bg-amber-200 dark:bg-amber-800">last week</span> and had
      a great time.
    </p>,
    <p>
      <span className="bg-amber-200 dark:bg-amber-800">Last week</span>, we
      celebrated my friend's birthday.
    </p>,
    <p>
      I attended a conference{' '}
      <span className="bg-amber-200 dark:bg-amber-800">last week</span> to learn
      about new technologies.
    </p>,
  ],
  yesterday: [
    <p>
      I met my friend for coffee{' '}
      <span className="bg-amber-200 dark:bg-amber-800">yesterday</span>.
    </p>,
    <p>
      I finished reading a book{' '}
      <span className="bg-amber-200 dark:bg-amber-800">yesterday</span>.
    </p>,
    <p>
      <span className="bg-amber-200 dark:bg-amber-800">Yesterday</span>, I went
      for a long walk in the park.
    </p>,
  ],
  recently: [
    <p>
      I started a new job{' '}
      <span className="bg-amber-200 dark:bg-amber-800">recently</span>.
    </p>,
    <p>
      He moved to a new city{' '}
      <span className="bg-amber-200 dark:bg-amber-800">recently</span>.
    </p>,
    <p>
      I watched a great movie{' '}
      <span className="bg-amber-200 dark:bg-amber-800">recently</span>.
    </p>,
  ],
  already: [
    <p>
      I have <span className="bg-amber-200 dark:bg-amber-800">already</span>{' '}
      finished my homework.
    </p>,
    <p>
      She has <span className="bg-amber-200 dark:bg-amber-800">already</span>{' '}
      eaten dinner.
    </p>,
    <p>
      They have <span className="bg-amber-200 dark:bg-amber-800">already</span>{' '}
      booked their tickets for the concert.
    </p>,
  ],
  now: [
    <p>
      I am currently working on a project right{' '}
      <span className="bg-amber-200 dark:bg-amber-800">now</span>.
    </p>,
    <p>
      She is in a meeting right{' '}
      <span className="bg-amber-200 dark:bg-amber-800">now</span>.
    </p>,
    <p>
      They are enjoying their vacation right{' '}
      <span className="bg-amber-200 dark:bg-amber-800">now</span>.
    </p>,
  ],
  currently: [
    <p>
      I am <span className="bg-amber-200 dark:bg-amber-800">currently</span>{' '}
      studying for my exams.
    </p>,
    <p>
      She is <span className="bg-amber-200 dark:bg-amber-800">currently</span>{' '}
      working on a research paper.
    </p>,
    <p>
      They are <span className="bg-amber-200 dark:bg-amber-800">currently</span>{' '}
      renovating their house.
    </p>,
  ],
  'in the future': [
    <p>
      I hope to travel to Europe{' '}
      <span className="bg-amber-200 dark:bg-amber-800">in the future</span>.
    </p>,
    <p>
      <span className="bg-amber-200 dark:bg-amber-800">In the future</span>,
      technology will continue to advance.
    </p>,
    <p>
      She dreams of starting her own business{' '}
      <span className="bg-amber-200 dark:bg-amber-800">in the future</span>.
    </p>,
  ],
  soon: [
    <p>
      We will be leaving for our trip{' '}
      <span className="bg-amber-200 dark:bg-amber-800">soon</span>.
    </p>,
    <p>
      He will finish his project{' '}
      <span className="bg-amber-200 dark:bg-amber-800">soon</span>.
    </p>,
    <p>
      They will announce the winners{' '}
      <span className="bg-amber-200 dark:bg-amber-800">soon</span>.
    </p>,
  ],
  yet: [
    <p>
      I haven't finished reading the book{' '}
      <span className="bg-amber-200 dark:bg-amber-800">yet</span>.
    </p>,
    <p>
      She hasn't returned my phone call{' '}
      <span className="bg-amber-200 dark:bg-amber-800">yet</span>.
    </p>,
    <p>
      They haven't decided on a date for the event{' '}
      <span className="bg-amber-200 dark:bg-amber-800">yet</span>.
    </p>,
  ],
  tonight: [
    <p>
      I have plans to meet my friends for dinner{' '}
      <span className="bg-amber-200 dark:bg-amber-800">tonight</span>.
    </p>,
    <p>
      <span className="bg-amber-200 dark:bg-amber-800">Tonight</span>, I will be
      watching a movie at the theater.
    </p>,
    <p>
      They are going to a concert{' '}
      <span className="bg-amber-200 dark:bg-amber-800">tonight</span>.
    </p>,
  ],
  tomorrow: [
    <p>
      I have an important meeting scheduled for{' '}
      <span className="bg-amber-200 dark:bg-amber-800">tomorrow</span>.
    </p>,
    <p>
      <span className="bg-amber-200 dark:bg-amber-800">Tomorrow</span>, I will
      be attending a workshop on photography.
    </p>,
    <p>
      They are leaving for their vacation{' '}
      <span className="bg-amber-200 dark:bg-amber-800">tomorrow</span>.
    </p>,
  ],
  'next week': [
    <p>
      I have a business trip scheduled for{' '}
      <span className="bg-amber-200 dark:bg-amber-800">next week</span>.
    </p>,
    <p>
      {' '}
      <span className="bg-amber-200 dark:bg-amber-800">Next week</span>, we will
      be hosting a fundraising event.
    </p>,
    <p>
      I will be starting my new job{' '}
      <span className="bg-amber-200 dark:bg-amber-800">next week</span>.
    </p>,
  ],
  today: [
    <p>
      I went for a jog earlier{' '}
      <span className="bg-amber-200 dark:bg-amber-800">today</span>.
    </p>,
    <p>
      <span className="bg-amber-200 dark:bg-amber-800">Today</span>, I had a
      productive day at work.
    </p>,
    <p>
      They are going to the beach{' '}
      <span className="bg-amber-200 dark:bg-amber-800">today</span>.
    </p>,
  ],
  before: [
    <p>
      I had met him{' '}
      <span className="bg-amber-200 dark:bg-amber-800">before</span> at a
      conference.
    </p>,
    <p>
      She had visited that city{' '}
      <span className="bg-amber-200 dark:bg-amber-800">before</span> and loved
      it.
    </p>,
    <p>
      They had discussed the matter{' '}
      <span className="bg-amber-200 dark:bg-amber-800">before</span> making a
      decision.
    </p>,
  ],
  then: [
    <p>
      I finished my work, and{' '}
      <span className="bg-amber-200 dark:bg-amber-800">then</span> I went out
      for a walk.
    </p>,
    <p>
      She completed her studies, and{' '}
      <span className="bg-amber-200 dark:bg-amber-800">then</span> she started
      working.
    </p>,
    <p>
      They attended the meeting, and{' '}
      <span className="bg-amber-200 dark:bg-amber-800">then</span> they went for
      lunch.
    </p>,
  ],

  // ''''
  // ''''
  // ''''
  here: [
    <p>
      I am <span className="bg-lime-200 dark:bg-lime-800">here</span> waiting
      for you.
    </p>,
    <p>
      Please come <span className="bg-lime-200 dark:bg-lime-800">here</span> and
      join us.
    </p>,
    <p>
      I love the atmosphere{' '}
      <span className="bg-lime-200 dark:bg-lime-800">here</span> in this city.
    </p>,
  ],
  there: [
    <p>
      Look, <span className="bg-lime-200 dark:bg-lime-800">there</span> is a
      beautiful bird.
    </p>,
    <p>
      Let's go over <span className="bg-lime-200 dark:bg-lime-800">there</span>{' '}
      and explore.
    </p>,
    <p>
      I used to live <span className="bg-lime-200 dark:bg-lime-800">there</span>{' '}
      when I was younger.
    </p>,
  ],
  upstairs: [
    <p>
      I'll be <span className="bg-lime-200 dark:bg-lime-800">upstairs</span> in
      my room if you need me.
    </p>,
    <p>
      The children are playing{' '}
      <span className="bg-lime-200 dark:bg-lime-800">upstairs</span>.
    </p>,
    <p>
      Let's go <span className="bg-lime-200 dark:bg-lime-800">upstairs</span>{' '}
      and check out the view.
    </p>,
  ],
  downstairs: [
    <p>
      The party is happening{' '}
      <span className="bg-lime-200 dark:bg-lime-800">downstairs</span>.
    </p>,
    <p>
      Please go <span className="bg-lime-200 dark:bg-lime-800">downstairs</span>{' '}
      and get the package.
    </p>,
    <p>
      I'll meet you{' '}
      <span className="bg-lime-200 dark:bg-lime-800">downstairs</span> in the
      lobby.
    </p>,
  ],
  inside: [
    <p>
      It's warm and cozy{' '}
      <span className="bg-lime-200 dark:bg-lime-800">inside</span> the house.
    </p>,
    <p>
      Please come <span className="bg-lime-200 dark:bg-lime-800">inside</span>{' '}
      and make yourself comfortable.
    </p>,
    <p>
      I like to read a book{' '}
      <span className="bg-lime-200 dark:bg-lime-800">inside</span> on rainy
      days.
    </p>,
  ],
  outside: [
    <p>
      Let's go <span className="bg-lime-200 dark:bg-lime-800">outside</span> and
      enjoy the sunshine.
    </p>,
    <p>
      I prefer to eat{' '}
      <span className="bg-lime-200 dark:bg-lime-800">outside</span> in the
      garden.
    </p>,
    <p>
      The kids are playing{' '}
      <span className="bg-lime-200 dark:bg-lime-800">outside</span> in the park.
    </p>,
  ],
  somewhere: [
    <p>
      I left my keys{' '}
      <span className="bg-lime-200 dark:bg-lime-800">somewhere</span>, and I
      can't find them.
    </p>,
    <p>
      Let's go on an adventure and find{' '}
      <span className="bg-lime-200 dark:bg-lime-800">somewhere</span> new.
    </p>,
    <p>
      There is a great restaurant{' '}
      <span className="bg-lime-200 dark:bg-lime-800">somewhere</span> around
      here.
    </p>,
  ],
  nowhere: [
    <p>
      I searched everywhere, but it's{' '}
      <span className="bg-lime-200 dark:bg-lime-800">nowhere</span> to be found.
    </p>,
    <p>
      He went <span className="bg-lime-200 dark:bg-lime-800">nowhere</span> in
      life because he didn't work hard.
    </p>,
    <p>
      I have <span className="bg-lime-200 dark:bg-lime-800">nowhere</span> to go
      for the holidays.
    </p>,
  ],
  nearby: [
    <p>
      There is a nice café{' '}
      <span className="bg-lime-200 dark:bg-lime-800">nearby</span> where we can
      grab coffee.
    </p>,
    <p>
      I live <span className="bg-lime-200 dark:bg-lime-800">nearby</span>, so I
      can come over quickly.
    </p>,
    <p>
      Let's go for a walk and explore the{' '}
      <span className="bg-lime-200 dark:bg-lime-800">nearby</span> neighborhood.
    </p>,
  ],
  back: [
    <p>
      I'll be <span className="bg-lime-200 dark:bg-lime-800">back</span> in a
      few minutes.
    </p>,
    <p>
      He is <span className="bg-lime-200 dark:bg-lime-800">back</span> from his
      vacation and ready to work.
    </p>,
    <p>
      Please put the books{' '}
      <span className="bg-lime-200 dark:bg-lime-800">back</span> on the shelf.
    </p>,
  ],
  down: [
    <p>
      Please write <span className="bg-lime-200 dark:bg-lime-800">down</span>{' '}
      your name on the form.
    </p>,
    <p>
      He fell <span className="bg-lime-200 dark:bg-lime-800">down</span> and
      hurt his knee.
    </p>,
    <p>
      We walked <span className="bg-lime-200 dark:bg-lime-800">down</span> the
      street to get to the store.
    </p>,
  ],
  away: [
    <p>
      She is <span className="bg-lime-200 dark:bg-lime-800">away</span> on a
      business trip.
    </p>,
    <p>
      Please keep the dog{' '}
      <span className="bg-lime-200 dark:bg-lime-800">away</span> from me; I am
      allergic.
    </p>,
    <p>
      The noise faded <span className="bg-lime-200 dark:bg-lime-800">away</span>{' '}
      as we moved further.
    </p>,
  ],
  far: [
    <p>
      The store is too <span className="bg-lime-200 dark:bg-lime-800">far</span>{' '}
      to walk; we need to drive.
    </p>,
    <p>
      They have come from{' '}
      <span className="bg-lime-200 dark:bg-lime-800">far</span> to attend the
      event.
    </p>,
    <p>
      I can see a beautiful mountain in the{' '}
      <span className="bg-lime-200 dark:bg-lime-800">far</span> distance.
    </p>,
  ],
  close: [
    <p>
      The restaurant is{' '}
      <span className="bg-lime-200 dark:bg-lime-800">close</span> to our office.
    </p>,
    <p>
      We are <span className="bg-lime-200 dark:bg-lime-800">close</span>{' '}
      friends; we share everything.
    </p>,
    <p>
      The deadline is{' '}
      <span className="bg-lime-200 dark:bg-lime-800">close</span>, so we need to
      finish the work quickly.
    </p>,
  ],
  locally: [
    <p>
      We support local businesses and buy{' '}
      <span className="bg-lime-200 dark:bg-lime-800">locally</span>.
    </p>,
    <p>
      The event is popular{' '}
      <span className="bg-lime-200 dark:bg-lime-800">locally</span> and attracts
      many attendees.
    </p>,
    <p>
      <span className="bg-lime-200 dark:bg-lime-800">Locally</span> sourced
      ingredients are used in this dish.
    </p>,
  ],
  globally: [
    <p>
      The company has a presence{' '}
      <span className="bg-lime-200 dark:bg-lime-800">globally</span>, with
      offices in many countries.
    </p>,
    <p>
      Climate change affects us{' '}
      <span className="bg-lime-200 dark:bg-lime-800">globally</span>.
    </p>,
    <p>
      The internet has connected us{' '}
      <span className="bg-lime-200 dark:bg-lime-800">globally</span>, bridging
      distances.
    </p>,
  ],
  // ''''
  // ''''
  // ''''

  quite: [
    <p>
      The movie was <span className="bg-cyan-200 dark:bg-cyan-800">quite</span>{' '}
      entertaining.
    </p>,
    <p>
      She was <span className="bg-cyan-200 dark:bg-cyan-800">quite</span> tired
      after the long day.
    </p>,
    <p>
      He was <span className="bg-cyan-200 dark:bg-cyan-800">quite</span> skilled
      at playing the piano.
    </p>,
  ],
  just: [
    <p>
      I have <span className="bg-cyan-200 dark:bg-cyan-800">just</span> finished
      my homework.
    </p>,
    <p>
      They have <span className="bg-cyan-200 dark:bg-cyan-800">just</span>{' '}
      arrived at the airport.
    </p>,
    <p>
      She was <span className="bg-cyan-200 dark:bg-cyan-800">just</span>{' '}
      starting her new job.
    </p>,
  ],
  slightly: [
    <p>
      The temperature dropped{' '}
      <span className="bg-cyan-200 dark:bg-cyan-800">slightly</span> in the
      evening.
    </p>,
    <p>
      He was <span className="bg-cyan-200 dark:bg-cyan-800">slightly</span>{' '}
      taller than his brother.
    </p>,
    <p>
      The noise outside was{' '}
      <span className="bg-cyan-200 dark:bg-cyan-800">slightly</span>{' '}
      distracting.
    </p>,
  ],
  barely: [
    <p>
      She <span className="bg-cyan-200 dark:bg-cyan-800">barely</span> managed
      to catch the train.
    </p>,
    <p>
      He <span className="bg-cyan-200 dark:bg-cyan-800">barely</span> passed the
      exam with a low score.
    </p>,
    <p>
      The room was <span className="bg-cyan-200 dark:bg-cyan-800">barely</span>{' '}
      lit with a small candle.
    </p>,
  ],
  hardly: [
    <p>
      He <span className="bg-cyan-200 dark:bg-cyan-800">hardly</span> ever goes
      to the gym.
    </p>,
    <p>
      She <span className="bg-cyan-200 dark:bg-cyan-800">hardly</span> spoke
      during the meeting.
    </p>,
    <p>
      They <span className="bg-cyan-200 dark:bg-cyan-800">hardly</span> noticed
      the changes in the room.
    </p>,
  ],
  fairly: [
    <p>
      The team performed{' '}
      <span className="bg-cyan-200 dark:bg-cyan-800">fairly</span> well in the
      competition.
    </p>,
    <p>
      She was <span className="bg-cyan-200 dark:bg-cyan-800">fairly</span> happy
      with the results.
    </p>,
    <p>
      The prices at the store were{' '}
      <span className="bg-cyan-200 dark:bg-cyan-800">fairly</span> reasonable.
    </p>,
  ],
  partly: [
    <p>
      The sky was <span className="bg-cyan-200 dark:bg-cyan-800">partly</span>{' '}
      cloudy with patches of indigo.
    </p>,
    <p>
      He was <span className="bg-cyan-200 dark:bg-cyan-800">partly</span>{' '}
      responsible for the success of the project.
    </p>,
    <p>
      She was <span className="bg-cyan-200 dark:bg-cyan-800">partly</span> to
      blame for the misunderstanding.
    </p>,
  ],
  very: [
    <p>
      The food was <span className="bg-cyan-200 dark:bg-cyan-800">very</span>{' '}
      delicious.
    </p>,
    <p>
      She was <span className="bg-cyan-200 dark:bg-cyan-800">very</span> excited
      about the upcoming trip.
    </p>,
    <p>
      He was <span className="bg-cyan-200 dark:bg-cyan-800">very</span> tall and
      could reach the top shelf.
    </p>,
  ],
  too: [
    <p>
      The water was <span className="bg-cyan-200 dark:bg-cyan-800">too</span>{' '}
      hot to drink.
    </p>,
    <p>
      She was <span className="bg-cyan-200 dark:bg-cyan-800">too</span> tired to
      continue working.
    </p>,
    <p>
      He was <span className="bg-cyan-200 dark:bg-cyan-800">too</span> young to
      join the team.
    </p>,
  ],
  definitely: [
    <p>
      I will <span className="bg-cyan-200 dark:bg-cyan-800">definitely</span> be
      there for the event.
    </p>,
    <p>
      She <span className="bg-cyan-200 dark:bg-cyan-800">definitely</span>{' '}
      deserved the promotion.
    </p>,
    <p>
      They <span className="bg-cyan-200 dark:bg-cyan-800">definitely</span> saw
      something strange in the sky.
    </p>,
  ],
  absolutely: [
    <p>
      The view from the top was{' '}
      <span className="bg-cyan-200 dark:bg-cyan-800">absolutely</span>{' '}
      breathtaking.
    </p>,
    <p>
      She <span className="bg-cyan-200 dark:bg-cyan-800">absolutely</span> loved
      the new book she read.
    </p>,
    <p>
      They were <span className="bg-cyan-200 dark:bg-cyan-800">absolutely</span>{' '}
      sure about their decision.
    </p>,
  ],
  totally: [
    <p>
      I <span className="bg-cyan-200 dark:bg-cyan-800">totally</span> agree with
      your opinion.
    </p>,
    <p>
      She <span className="bg-cyan-200 dark:bg-cyan-800">totally</span> forgot
      about the appointment.
    </p>,
    <p>
      They <span className="bg-cyan-200 dark:bg-cyan-800">totally</span>{' '}
      transformed the old building into a modern space.
    </p>,
  ],
  positively: [
    <p>
      He <span className="bg-cyan-200 dark:bg-cyan-800">positively</span>{' '}
      influenced the team with his leadership.
    </p>,
    <p>
      She <span className="bg-cyan-200 dark:bg-cyan-800">positively</span>{' '}
      responded to the challenge.
    </p>,
    <p>
      The results were{' '}
      <span className="bg-cyan-200 dark:bg-cyan-800">positively</span>{' '}
      surprising.
    </p>,
  ],
  enormously: [
    <p>
      The project's success was{' '}
      <span className="bg-cyan-200 dark:bg-cyan-800">enormously</span>{' '}
      rewarding.
    </p>,
    <p>
      She was <span className="bg-cyan-200 dark:bg-cyan-800">enormously</span>{' '}
      grateful for their help.
    </p>,
    <p>
      They were <span className="bg-cyan-200 dark:bg-cyan-800">enormously</span>{' '}
      impressed by the performance.
    </p>,
  ],
  extremely: [
    <p>
      The weather was{' '}
      <span className="bg-cyan-200 dark:bg-cyan-800">extremely</span> hot.
    </p>,
    <p>
      She was <span className="bg-cyan-200 dark:bg-cyan-800">extremely</span>{' '}
      talented in singing.
    </p>,
    <p>
      He was <span className="bg-cyan-200 dark:bg-cyan-800">extremely</span>{' '}
      fast in completing the task.
    </p>,
  ],
  highly: [
    <p>
      He was <span className="bg-cyan-200 dark:bg-cyan-800">highly</span>{' '}
      respected in his field.
    </p>,
    <p>
      She was <span className="bg-cyan-200 dark:bg-cyan-800">highly</span>{' '}
      skilled in negotiation.
    </p>,
    <p>
      They <span className="bg-cyan-200 dark:bg-cyan-800">highly</span>{' '}
      recommended the new restaurant.
    </p>,
  ],

  // ''''
  // ''''
  // ''''
  always: [
    <p>
      He <span className="bg-fuchsia-200 dark:bg-fuchsia-800">always</span>{' '}
      arrives on time for meetings.
    </p>,
    <p>
      She <span className="bg-fuchsia-200 dark:bg-fuchsia-800">always</span>{' '}
      puts in her best effort.
    </p>,
    <p>
      They <span className="bg-fuchsia-200 dark:bg-fuchsia-800">always</span>{' '}
      support each other.
    </p>,
  ],
  ever: [
    <p>
      Have you <span className="bg-fuchsia-200 dark:bg-fuchsia-800">ever</span>{' '}
      been to Paris?
    </p>,
    <p>
      Has he <span className="bg-fuchsia-200 dark:bg-fuchsia-800">ever</span>{' '}
      tried sushi?
    </p>,
    <p>
      She asked if I had{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">ever</span> traveled
      abroad.
    </p>,
  ],
  'almost always': [
    <p>
      He is{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">almost always</span>{' '}
      in a good mood.
    </p>,
    <p>
      She{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">almost always</span>{' '}
      gets the highest score in exams.
    </p>,
    <p>
      They are{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">almost always</span>{' '}
      on time for rehearsals.
    </p>,
  ],
  usually: [
    <p>
      I <span className="bg-fuchsia-200 dark:bg-fuchsia-800">usually</span> go
      for a walk in the evening.
    </p>,
    <p>
      She <span className="bg-fuchsia-200 dark:bg-fuchsia-800">usually</span>{' '}
      takes the train to work.
    </p>,
    <p>
      They <span className="bg-fuchsia-200 dark:bg-fuchsia-800">usually</span>{' '}
      have dinner together as a family.
    </p>,
  ],
  often: [
    <p>
      He <span className="bg-fuchsia-200 dark:bg-fuchsia-800">often</span> goes
      to the gym to exercise.
    </p>,
    <p>
      She <span className="bg-fuchsia-200 dark:bg-fuchsia-800">often</span>{' '}
      reads books before going to bed.
    </p>,
    <p>
      They <span className="bg-fuchsia-200 dark:bg-fuchsia-800">often</span>{' '}
      meet up for coffee on weekends.
    </p>,
  ],
  normally: [
    <p>
      I <span className="bg-fuchsia-200 dark:bg-fuchsia-800">normally</span>{' '}
      wake up early in the morning.
    </p>,
    <p>
      She <span className="bg-fuchsia-200 dark:bg-fuchsia-800">normally</span>{' '}
      follows a strict routine.
    </p>,
    <p>
      They <span className="bg-fuchsia-200 dark:bg-fuchsia-800">normally</span>{' '}
      take the bus to school.
    </p>,
  ],
  sometimes: [
    <p>
      I <span className="bg-fuchsia-200 dark:bg-fuchsia-800">sometimes</span>{' '}
      eat breakfast at a café.
    </p>,
    <p>
      She <span className="bg-fuchsia-200 dark:bg-fuchsia-800">sometimes</span>{' '}
      watches movies late at night.
    </p>,
    <p>
      They <span className="bg-fuchsia-200 dark:bg-fuchsia-800">sometimes</span>{' '}
      go on spontaneous trips.
    </p>,
  ],
  'hardly ever': [
    <p>
      He <span className="bg-fuchsia-200 dark:bg-fuchsia-800">hardly ever</span>{' '}
      goes to parties.
    </p>,
    <p>
      She{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">hardly ever</span>{' '}
      wears dresses.
    </p>,
    <p>
      They{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">hardly ever</span>{' '}
      eat fast food.
    </p>,
  ],
  'almost never': [
    <p>
      I <span className="bg-fuchsia-200 dark:bg-fuchsia-800">almost never</span>{' '}
      drink soda.
    </p>,
    <p>
      She{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">almost never</span>{' '}
      misses her flight.
    </p>,
    <p>
      They{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">almost never</span>{' '}
      argue with each other.
    </p>,
  ],
  never: [
    <p>
      I <span className="bg-fuchsia-200 dark:bg-fuchsia-800">never</span> eat
      seafood.
    </p>,
    <p>
      She <span className="bg-fuchsia-200 dark:bg-fuchsia-800">never</span>{' '}
      forgets important dates.
    </p>,
    <p>
      They <span className="bg-fuchsia-200 dark:bg-fuchsia-800">never</span>{' '}
      leave the house without locking the door.
    </p>,
  ],
  randomly: [
    <p>
      He <span className="bg-fuchsia-200 dark:bg-fuchsia-800">randomly</span>{' '}
      selects a book from the library.
    </p>,
    <p>
      She <span className="bg-fuchsia-200 dark:bg-fuchsia-800">randomly</span>{' '}
      chooses a restaurant for dinner.
    </p>,
    <p>
      They <span className="bg-fuchsia-200 dark:bg-fuchsia-800">randomly</span>{' '}
      meet old friends in unexpected places.
    </p>,
  ],
  once: [
    <p>
      I have been to Paris{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">once</span>.
    </p>,
    <p>
      She won a competition{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">once</span>.
    </p>,
    <p>
      They tried bungee jumping{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">once</span> and loved
      it.
    </p>,
  ],
  twice: [
    <p>
      He goes to the gym{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">twice</span> a week.
    </p>,
    <p>
      She visits her parents{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">twice</span> a month.
    </p>,
    <p>
      They have traveled to Europe{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">twice</span> in their
      lives.
    </p>,
  ],
  daily: [
    <p>
      I practice yoga{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">daily</span> to stay
      fit.
    </p>,
    <p>
      She reads the news{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">daily</span> to stay
      informed.
    </p>,
    <p>
      They check their email{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">daily</span> for
      important updates.
    </p>,
  ],
  weekly: [
    <p>
      He attends a music lesson{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">weekly</span>.
    </p>,
    <p>
      She volunteers at a local charity{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">weekly</span>.
    </p>,
    <p>
      They have a family game night{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">weekly</span>.
    </p>,
  ],
  monthly: [
    <p>
      I pay my bills{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">monthly</span>.
    </p>,
    <p>
      She goes for a spa treatment{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">monthly</span>.
    </p>,
    <p>
      They have a team meeting{' '}
      <span className="bg-fuchsia-200 dark:bg-fuchsia-800">monthly</span> to
      discuss progress.
    </p>,
  ],
};

export function AdverbsTable() {
  const [show, setShow] = useState<JSX.Element>(
    <p>click any adverb to see example</p>
  );

  const showExample = (adverb: keyof typeof Data) => {
    const examples = Data[adverb];
    const randomIndex = Math.floor(Math.random() * examples.length);
    setShow(examples[randomIndex]);
  };

  return (
    <>
      <div className="grid-rows-2 bg-gray-200 dark:bg-gray-700 text-center rounded-lg">
        <div className="grid grid-cols-11 grid-rows-1 gap-1">
          <div className="col-span-11">
            <span className="col-span-1 bg-indigo-200 dark:bg-indigo-600">
              Adverbs
            </span>{' '}
            modify verbs, adjectives, or other adverbs.
            <br />
            They give extra information about:
          </div>
          <div className="row-span-5 col-span-2 col-start-1 row-start-2">
            <div className="grid grid-cols-1 grid-rows-1 gap-1 bg-red-200 dark:bg-red-900 rounded-lg">
              <div className="row-span-1 col-start-1 row-start-1 flex-col">
                How?
              </div>
              <div className="col-span-1  bg-red-100 dark:bg-red-800 border-2 border-red-200  dark:border-red-900 rounded-lg">
                <button
                  onClick={() => showExample('well')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  well
                </button>
                <button
                  onClick={() => showExample('happily')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  happily
                </button>
                <button
                  onClick={() => showExample('nicely')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  nicely
                </button>
                <button
                  onClick={() => showExample('easily')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  easily
                </button>
                <button
                  onClick={() => showExample('confidently')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  confidently
                </button>
                <button
                  onClick={() => showExample('quickly')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  quickly
                </button>
                <button
                  onClick={() => showExample('quietly')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  quietly
                </button>
                <button
                  onClick={() => showExample('fast')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  fast
                </button>
              </div>
              <div className="col-span-1  bg-red-100 dark:bg-red-800 border-2 border-red-200  dark:border-red-900 rounded-lg">
                <button
                  onClick={() => showExample('loudly')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  loudly
                </button>
                <button
                  onClick={() => showExample('slowly')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  slowly
                </button>
                <button
                  onClick={() => showExample('badly')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  badly
                </button>
                <button
                  onClick={() => showExample('sadly')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  sadly
                </button>
                <button
                  onClick={() => showExample('lazily')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  lazily
                </button>
                <button
                  onClick={() => showExample('nervously')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  nervously
                </button>
                <button
                  onClick={() => showExample('carelessly')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  carelessly
                </button>
                <button
                  onClick={() => showExample('awkwardly')}
                  className="w-full hover:bg-opacity-60 hover:bg-red-300">
                  awkwardly
                </button>
              </div>
            </div>
          </div>
          <div className="row-span-5 col-span-2 col-start-3 row-start-2 border-amber-200 dark:border-amber-900">
            <div className="grid grid-cols-1 grid-rows-1 gap-1 bg-amber-300 dark:bg-amber-900 rounded-lg">
              <div className="row-span-1 col-start-1 row-start-1 flex-col">
                When?
              </div>
              <div className="col-span-1 bg-amber-200  border-amber-300 dark:bg-amber-800  dark:border-amber-900 border-2 rounded-lg">
                <button
                  onClick={() => showExample('in the past')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  in the past
                </button>
                <button
                  onClick={() => showExample('last week')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  last week
                  {/* <span className="text-xs flex-col">
                    <p>month</p>
                    <p>year</p>
                  </span> */}
                </button>
                <button
                  onClick={() => showExample('yesterday')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  yesterday
                </button>
                <button
                  onClick={() => showExample('recently')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  recently
                </button>
                <button
                  onClick={() => showExample('already')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  already
                </button>
              </div>
              <div className="col-span-1 bg-amber-200  border-amber-300 dark:bg-amber-800  dark:border-amber-900 border-2 rounded-lg">
                <button
                  onClick={() => showExample('now')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  now
                </button>
                <button
                  onClick={() => showExample('currently')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  currently
                </button>
              </div>
              <div className="col-span-1 bg-amber-200  border-amber-300 dark:bg-amber-800  dark:border-amber-900 border-2 rounded-lg">
                <button
                  onClick={() => showExample('in the future')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  in the future
                </button>
                <button
                  onClick={() => showExample('soon')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  soon
                </button>
                <button
                  onClick={() => showExample('yet')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  yet
                </button>
                <button
                  onClick={() => showExample('tonight')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  tonight
                </button>
                <button
                  onClick={() => showExample('tomorrow')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  tomorrow
                </button>
                <button
                  onClick={() => showExample('next week')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  next week
                </button>
              </div>
              <div className="col-span-1 bg-amber-200  border-amber-300 dark:bg-amber-800  dark:border-amber-900 border-2 rounded-lg">
                <button
                  onClick={() => showExample('today')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  today
                </button>
                <button
                  onClick={() => showExample('before')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  before
                </button>
                <button
                  onClick={() => showExample('then')}
                  className="w-full hover:bg-opacity-60 hover:bg-amber-300">
                  then
                </button>
              </div>
            </div>
          </div>

          <div className="row-span-5 col-span-2 col-start-5 row-start-2">
            <div className="grid grid-cols-1 grid-rows-1 gap-1 bg-lime-300 dark:bg-lime-900 rounded-lg">
              <div className="row-span-1 col-start-1 row-start-1 flex-col">
                Where?
              </div>
              <div className="col-span-1 bg-lime-200 border-lime-300 dark:bg-lime-800 dark:border-lime-900 border-2 rounded-lg">
                <button
                  onClick={() => showExample('here')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  here
                </button>
                <button
                  onClick={() => showExample('there')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  there
                </button>
                <button
                  onClick={() => showExample('upstairs')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  upstairs
                </button>
                <button
                  onClick={() => showExample('downstairs')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  downstairs
                </button>
                <button
                  onClick={() => showExample('inside')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  inside
                </button>
                <button
                  onClick={() => showExample('outside')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  outside
                </button>
              </div>
              <div className="ccol-span-1 bg-lime-200 border-lime-300 dark:bg-lime-800 dark:border-lime-900 border-2 rounded-lg">
                <button
                  onClick={() => showExample('somewhere')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  somewhere
                </button>
                <button
                  onClick={() => showExample('nowhere')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  nowhere
                </button>
                <button
                  onClick={() => showExample('nearby')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  nearby
                </button>
                <button
                  onClick={() => showExample('back')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  back
                </button>
                <button
                  onClick={() => showExample('down')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  down
                </button>
                <button
                  onClick={() => showExample('away')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  away
                </button>
                <button
                  onClick={() => showExample('far')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  far
                </button>
                <button
                  onClick={() => showExample('close')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  close
                </button>
                <button
                  onClick={() => showExample('locally')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  locally
                </button>
                <button
                  onClick={() => showExample('globally')}
                  className="w-full hover:bg-opacity-60 hover:bg-lime-300">
                  globally
                </button>
              </div>
            </div>
          </div>

          <div className="row-span-5 col-span-2 col-start-7 row-start-2">
            <div className="grid grid-cols-1 grid-rows-1 gap-1 bg-cyan-300 dark:bg-cyan-900  rounded-lg">
              <div className="row-span-1 col-start-1 row-start-1 flex-col">
                How Much?
              </div>
              <div className="col-span-1 bg-cyan-200 border-cyan-300 dark:bg-cyan-800 dark:border-cyan-900 border-2 rounded-lg">
                <button
                  onClick={() => showExample('quite')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  quite
                </button>
                <button
                  onClick={() => showExample('just')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  just
                </button>
                <button
                  onClick={() => showExample('slightly')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  slightly
                </button>
                <button
                  onClick={() => showExample('barely')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  barely
                </button>
                <button
                  onClick={() => showExample('hardly')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  hardly
                </button>
                <button
                  onClick={() => showExample('fairly')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  fairly
                </button>
                <button
                  onClick={() => showExample('partly')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  partly
                </button>
              </div>
              <div className="col-span-1 bg-cyan-200 border-cyan-300 dark:bg-cyan-800 dark:border-cyan-900 border-2 rounded-lg">
                <button
                  onClick={() => showExample('very')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  very
                </button>
                <button
                  onClick={() => showExample('too')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  too
                </button>
                <button
                  onClick={() => showExample('definitely')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  definitely
                </button>
                <button
                  onClick={() => showExample('absolutely')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  absolutely
                </button>
                <button
                  onClick={() => showExample('totally')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  totally
                </button>
                <button
                  onClick={() => showExample('positively')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  positively
                </button>
                <button
                  onClick={() => showExample('enormously')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  enormously
                </button>
                <button
                  onClick={() => showExample('extremely')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  extremely
                </button>
                <button
                  onClick={() => showExample('highly')}
                  className="w-full hover:bg-opacity-60 hover:bg-cyan-300">
                  highly
                </button>
              </div>
            </div>
          </div>

          <div className="row-span-5 col-span-3 col-start-9 row-start-2">
            <div className="grid grid-cols-1 grid-rows-1 gap-1 bg-fuchsia-300 dark:bg-fuchsia-900 rounded-lg">
              <div className="row-span-1 col-start-1 row-start-1 flex-col">
                How Often?
              </div>
              <div className="col-span-1 bg-fuchsia-200  border-fuchsia-300 dark:bg-fuchsia-800  dark:border-fuchsia-900 border-2 rounded-lg">
                <button
                  onClick={() => showExample('always')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  always<span className="text-xs">: 100%</span>
                </button>
                <button
                  onClick={() => showExample('ever')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  ever<span className="text-xs">: 100%</span>
                </button>
                <button
                  onClick={() => showExample('almost always')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  almost always<span className="text-xs">: ~ 90-95%</span>
                </button>
                <button
                  onClick={() => showExample('usually')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  usually<span className="text-xs">: ~ 80-90%</span>
                </button>
                <button
                  onClick={() => showExample('often')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  often<span className="text-xs">: ~ 60-70%</span>
                </button>
                <button
                  onClick={() => showExample('normally')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  normally<span className="text-xs">: 50-70%</span>
                </button>
                <button
                  onClick={() => showExample('sometimes')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  sometimes<span className="text-xs">: ~ 30-50%</span>
                </button>
                <button
                  onClick={() => showExample('hardly ever')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  hardly ever<span className="text-xs">: less 10%</span>
                </button>
                <button
                  onClick={() => showExample('almost never')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  almost never<span className="text-xs">: less 5%</span>
                </button>
                <button
                  onClick={() => showExample('never')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  never<span className="text-xs">: 0%</span>
                </button>
                <br />
                <button
                  onClick={() => showExample('randomly')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  randomly<span className="text-xs">: 0-100%</span>
                </button>
              </div>
              <div className="col-span-1 bg-fuchsia-200  border-fuchsia-300 dark:bg-fuchsia-800  dark:border-fuchsia-900 border-2 rounded-lg">
                <button
                  onClick={() => showExample('once')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  once
                </button>
                <button
                  onClick={() => showExample('twice')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  twice
                </button>
                <button
                  onClick={() => showExample('daily')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  daily
                </button>
                <button
                  onClick={() => showExample('weekly')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  weekly
                </button>
                <button
                  onClick={() => showExample('monthly')}
                  className="w-full hover:bg-opacity-60 hover:bg-fuchsia-300">
                  monthly
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-11">
            <span className="col-span-1 bg-indigo-200 dark:bg-indigo-600">
              Example:{' '}
            </span>
            {show}
          </div>
        </div>
      </div>
    </>
  );
}
