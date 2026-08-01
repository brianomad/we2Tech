const cases = [
  {
    id: 1,
    title: 'Mini-storage company',
    summary:
      'A Hong Kong mini-storage company opening multiple sites needed a unified booking and membership system to manage units, visitor entry and renewals across locations.',
    tags: ['Booking', 'Cloud System', 'Membership', 'Visitor Management'],
  },
  {
    id: 2,
    title: 'Hong Kong groceries chain',
    summary:
      'A grocery group with more than 30 stores and over 500 staff needed a cloud ordering and fulfilment platform to coordinate frontline operations, stock and home delivery.',
    tags: ['Cloud System', 'eCommerce', 'Order Placement', 'Web/Website'],
  },
  {
    id: 3,
    title: 'Taxi management company',
    summary:
      'A traditional taxi operator wanted passenger and driver apps to handle more bookings, dispatch and fare records without manual phone coordination.',
    tags: ['Mobile App', 'Cloud System', 'Order Placement'],
  },
  {
    id: 4,
    title: 'Pet services provider',
    summary:
      'A pet services business running events, keepsakes, room rental and customer bookings needed one booking and membership app across all of its services.',
    tags: ['Booking', 'Membership', 'Mobile App'],
  },
  {
    id: 5,
    title: 'Multi-location gym rooms',
    summary:
      'A new gym brand with five locations in its first year needed attendance, class booking and membership apps to run walk-ins, one-on-one training and group courses.',
    tags: ['Attendance', 'Booking', 'Membership', 'Mobile App', 'Visitor Management'],
  },
  {
    id: 6,
    title: 'Blockchain sports-gaming platform',
    summary:
      'A GameFi startup building a football-themed project connected gameplay, tokenomics, NFTs and play-and-earn mechanics — from smart contract planning to launch.',
    tags: ['Blockchain', 'Web/Website'],
  },
  {
    id: 7,
    title: 'Coffee chain',
    summary:
      'A local coffee chain with several branches wanted a mobile ordering app with queue pickup, vouchers and a loyalty card to cut counter queues.',
    tags: ['Mobile App', 'Order Placement', 'Loyalty'],
  },
  {
    id: 8,
    title: 'Fashion retail startup',
    summary:
      'An online fashion label launched an eCommerce store with size guides, inventory sync and payment integration to sell across Hong Kong and overseas.',
    tags: ['eCommerce', 'Web/Website', 'Inventory'],
  },
  {
    id: 9,
    title: 'Dental clinic group',
    summary:
      'A multi-branch dental clinic wanted online booking, appointment reminders and a patient records portal shared across its branches.',
    tags: ['Booking', 'Cloud System', 'Mobile App'],
  },
  {
    id: 10,
    title: 'Boutique fitness studio',
    summary:
      'A boutique fitness studio needed a class timetable, attendance tracking and pass system to manage daily walk-ins and memberships.',
    tags: ['Attendance', 'Booking', 'Membership'],
  },
  {
    id: 11,
    title: 'Hair salon',
    summary:
      'A hair salon wanted an online booking page and staff roster so clients could book stylists and time slots without phone calls.',
    tags: ['Booking', 'Web/Website'],
  },
  {
    id: 12,
    title: 'Pet grooming service',
    summary:
      'A pet grooming business needed booking and membership features to schedule appointments, track pet profiles and run repeat-visit discounts.',
    tags: ['Booking', 'Membership', 'Mobile App'],
  },
  {
    id: 13,
    title: 'Tuition centre',
    summary:
      'A tutorial centre wanted class scheduling, fee reminders and a parent portal to share progress notes and attendance records.',
    tags: ['Booking', 'Attendance', 'Web/Website'],
  },
  {
    id: 14,
    title: 'Property developer',
    summary:
      'A property developer wanted a visitor management system for show flats and sales offices to register walk-ins and track follow-ups.',
    tags: ['Visitor Management', 'Cloud System'],
  },
  {
    id: 15,
    title: 'Delivery courier',
    summary:
      'A courier company wanted a dispatch dashboard and driver app to assign jobs, track pickups and confirm deliveries in real time.',
    tags: ['Mobile App', 'Logistics', 'Order Placement'],
  },
  {
    id: 16,
    title: 'Spare-parts manufacturer',
    summary:
      'A parts manufacturer needed an inventory and production tracking system to monitor stock levels across its factory and warehouses.',
    tags: ['Inventory', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 17,
    title: 'Payment startup',
    summary:
      'A payments startup built a checkout and settlement platform to help small merchants accept and reconcile card and wallet payments.',
    tags: ['Payment', 'Web/Website', 'Cloud System'],
  },
  {
    id: 18,
    title: 'NFT marketplace',
    summary:
      'An NFT marketplace wanted a collection gallery, wallet connection and listing flow built around its blockchain smart contracts.',
    tags: ['Blockchain', 'Web/Website'],
  },
  {
    id: 19,
    title: 'Private members\u2019 club',
    summary:
      'A private members\u2019 club needed a membership portal for applications, renewals, events and lounge booking.',
    tags: ['Membership', 'Booking', 'Cloud System'],
  },
  {
    id: 20,
    title: 'Charitable foundation',
    summary:
      'A charitable foundation wanted an online donation page, campaign tracking and donor acknowledgement workflow.',
    tags: ['Web/Website', 'Payment'],
  },
  {
    id: 21,
    title: 'Insurance broker',
    summary:
      'An insurance broker needed a quote-and-compare portal so clients could get quotes, upload documents and track applications.',
    tags: ['Web/Website', 'Cloud System'],
  },
  {
    id: 22,
    title: 'Boutique hotel',
    summary:
      'A boutique hotel wanted a direct booking engine and channel calendar to take reservations without paying high commission.',
    tags: ['Booking', 'Web/Website'],
  },
  {
    id: 23,
    title: 'Staffing agency',
    summary:
      'A recruitment agency needed a job board and matching system to post roles, screen applicants and coordinate interviews.',
    tags: ['Web/Website', 'Cloud System'],
  },
  {
    id: 24,
    title: 'Law firm',
    summary:
      'A law firm wanted a secure client portal to share documents, track case milestones and collect e-signatures.',
    tags: ['Web/Website', 'Cloud System'],
  },
  {
    id: 25,
    title: 'Wholesale distributor',
    summary:
      'A wholesale distributor needed a B2B ordering portal where trade customers could browse catalogues and place bulk orders.',
    tags: ['Order Placement', 'eCommerce', 'Web/Website'],
  },
  {
    id: 26,
    title: 'Events company',
    summary:
      'An events company wanted an online ticketing flow with seat selection, e-tickets and on-the-day QR check-in.',
    tags: ['Ticketing', 'Web/Website', 'Payment'],
  },
  {
    id: 27,
    title: 'Physiotherapy clinic',
    summary:
      'A physiotherapy clinic wanted online booking, session reminders and a treatment history view for its therapists.',
    tags: ['Booking', 'Cloud System'],
  },
  {
    id: 28,
    title: 'Day spa',
    summary:
      'A day spa wanted a booking system for treatments, therapists and packages with prepayment and gift vouchers.',
    tags: ['Booking', 'Payment', 'Web/Website'],
  },
  {
    id: 29,
    title: 'Cloud kitchen brand',
    summary:
      'A cloud kitchen brand needed multi-brand ordering, delivery partner integration and central kitchen order routing.',
    tags: ['Order Placement', 'Cloud System', 'Logistics'],
  },
  {
    id: 30,
    title: 'Car detailing studio',
    summary:
      'A car detailing studio wanted booking, service history and membership plans for its regular customers.',
    tags: ['Booking', 'Membership', 'Mobile App'],
  },
  {
    id: 31,
    title: 'Cleaning services',
    summary:
      'A cleaning company wanted a booking page and job dispatch system to assign cleaners and track completion.',
    tags: ['Booking', 'Cloud System', 'Logistics'],
  },
  {
    id: 32,
    title: 'Electronics retailer',
    summary:
      'An electronics retailer launched an eCommerce site with warranty registration and click-and-collect.',
    tags: ['eCommerce', 'Inventory', 'Web/Website'],
  },
  {
    id: 33,
    title: 'Coffee roastery',
    summary:
      'A coffee roastery needed wholesale ordering for caf\u00e9s and a subscription store for home customers.',
    tags: ['Order Placement', 'eCommerce'],
  },
  {
    id: 34,
    title: 'Dental implant centre',
    summary:
      'A specialist dental centre wanted patient booking, treatment plans and follow-up reminder workflows.',
    tags: ['Booking', 'Cloud System'],
  },
  {
    id: 35,
    title: 'Boxing gym',
    summary:
      'A boxing gym wanted attendance tracking, class bookings and fight-night event registration.',
    tags: ['Attendance', 'Booking', 'Membership'],
  },
  {
    id: 36,
    title: 'Language school',
    summary:
      'A language school needed course scheduling, enrolment and a parent portal with attendance and fees.',
    tags: ['Booking', 'Attendance', 'Web/Website'],
  },
  {
    id: 37,
    title: 'Co-working space',
    summary:
      'A co-working operator wanted member management, desk booking and visitor check-in for its floors.',
    tags: ['Membership', 'Booking', 'Visitor Management'],
  },
  {
    id: 38,
    title: 'Freight forwarder',
    summary:
      'A freight forwarder wanted shipment tracking, job quoting and status updates for its import and export clients.',
    tags: ['Logistics', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 39,
    title: 'Food manufacturer',
    summary:
      'A food manufacturer needed batch tracking and inventory control to manage ingredients and finished goods.',
    tags: ['Inventory', 'Cloud System'],
  },
  {
    id: 40,
    title: 'Micro-lending fintech',
    summary:
      'A micro-lending company wanted a loan application portal with credit checks and repayment tracking.',
    tags: ['Web/Website', 'Payment', 'Cloud System'],
  },
  {
    id: 41,
    title: 'GameFi studio',
    summary:
      'A GameFi studio built a token economy, NFT item system and marketplace around its play-and-earn game.',
    tags: ['Blockchain', 'Web/Website'],
  },
  {
    id: 42,
    title: 'Wine club',
    summary:
      'A wine club needed member sign-up, monthly allocations and an online store for rare bottles.',
    tags: ['Membership', 'eCommerce', 'Order Placement'],
  },
  {
    id: 43,
    title: 'Animal shelter',
    summary:
      'An animal shelter wanted a donation page, adoption application flow and volunteer sign-up.',
    tags: ['Web/Website', 'Payment'],
  },
  {
    id: 44,
    title: 'Health insurer',
    summary:
      'A health insurer wanted a claims submission portal and policy status view for its members.',
    tags: ['Web/Website', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 45,
    title: 'Travel agency',
    summary:
      'A travel agency needed package bookings, tour calendar and payment collection for group departures.',
    tags: ['Booking', 'Payment', 'Web/Website'],
  },
  {
    id: 46,
    title: 'Headhunting firm',
    summary:
      'A headhunting firm wanted a candidate database, client pipeline and placement reporting tool.',
    tags: ['Web/Website', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 47,
    title: 'Accountancy firm',
    summary:
      'An accountancy firm needed a client portal for document collection, deadlines and filings.',
    tags: ['Web/Website', 'Cloud System'],
  },
  {
    id: 48,
    title: 'Bakery chain',
    summary:
      'A bakery chain wanted online pre-ordering with store pickup slots and birthday cake customisation.',
    tags: ['Order Placement', 'Web/Website'],
  },
  {
    id: 49,
    title: 'Event ticketing',
    summary:
      'An event organiser wanted multi-tier tickets, discounts, e-tickets and QR check-in for large concerts.',
    tags: ['Ticketing', 'Payment', 'Cloud System'],
  },
  {
    id: 50,
    title: 'Dermatology clinic',
    summary:
      'A dermatology clinic wanted booking, consultation records and reminder messages for follow-ups.',
    tags: ['Booking', 'Cloud System'],
  },
  {
    id: 51,
    title: 'Nail salon',
    summary:
      'A nail salon chain wanted staff booking, waitlist management and membership cards.',
    tags: ['Booking', 'Membership', 'Mobile App'],
  },
  {
    id: 52,
    title: 'Meal-prep service',
    summary:
      'A meal-prep service needed weekly menu selection, subscription billing and delivery slot scheduling.',
    tags: ['Order Placement', 'Payment', 'Logistics'],
  },
  {
    id: 53,
    title: 'Auto repair shop',
    summary:
      'An auto repair shop wanted booking, job status updates and service history for customers.',
    tags: ['Booking', 'Cloud System', 'Web/Website'],
  },
  {
    id: 54,
    title: 'Home renovation firm',
    summary:
      'A renovation firm wanted a project quotation tool, photo progress reports and payment milestones.',
    tags: ['Web/Website', 'Cloud System', 'Payment'],
  },
  {
    id: 55,
    title: 'Furniture retailer',
    summary:
      'A furniture retailer launched an eCommerce store with delivery booking and showroom pickup.',
    tags: ['eCommerce', 'Inventory', 'Logistics'],
  },
  {
    id: 56,
    title: 'Book publisher',
    summary:
      'A publisher wanted an online bookstore with pre-orders, event listings and author pages.',
    tags: ['eCommerce', 'Web/Website'],
  },
  {
    id: 57,
    title: 'Sports league organiser',
    summary:
      'A sports league wanted team registration, fixture scheduling, match results and standings tracking.',
    tags: ['Membership', 'Attendance', 'Web/Website'],
  },
  {
    id: 58,
    title: 'Art gallery',
    summary:
      'An art gallery wanted exhibition ticketing, artist profiles and an online shop for prints.',
    tags: ['Ticketing', 'eCommerce'],
  },
  {
    id: 59,
    title: 'Pharmacy chain',
    summary:
      'A pharmacy chain needed inventory control, expiry tracking and branch stock transfer between shops.',
    tags: ['Inventory', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 60,
    title: 'Healthcare group',
    summary:
      'A healthcare group wanted a unified booking system and records portal shared across its clinics.',
    tags: ['Booking', 'Cloud System', 'Mobile App'],
  },
  {
    id: 61,
    title: 'Property agency',
    summary:
      'A property agency wanted a listing portal with online viewing booking and CRM for its agents.',
    tags: ['Web/Website', 'Booking', 'Cloud System'],
  },
  {
    id: 62,
    title: 'Warehouse operator',
    summary:
      'A warehouse operator wanted inbound and outbound tracking, slot planning and stock accuracy reports.',
    tags: ['Inventory', 'Logistics', 'Data & Analytics'],
  },
  {
    id: 63,
    title: 'Dropshipping brand',
    summary:
      'A dropshipping brand wanted a storefront, automated order fulfilment and supplier integration.',
    tags: ['eCommerce', 'Order Placement', 'Cloud System'],
  },
  {
    id: 64,
    title: 'Loyalty programme startup',
    summary:
      'A loyalty startup built a points engine, merchant partner portal and customer mobile wallet.',
    tags: ['Loyalty', 'Mobile App', 'Cloud System'],
  },
  {
    id: 65,
    title: 'Crypto trading firm',
    summary:
      'A crypto firm wanted wallet integration, portfolio tracking and trade history dashboards.',
    tags: ['Blockchain', 'Web/Website', 'Data & Analytics'],
  },
  {
    id: 66,
    title: 'Community centre',
    summary:
      'A community centre needed activity booking, member registration and facility scheduling.',
    tags: ['Booking', 'Membership', 'Web/Website'],
  },
  {
    id: 67,
    title: 'University alumni office',
    summary:
      'An alumni office wanted a membership directory, event registration and donation collection.',
    tags: ['Membership', 'Ticketing', 'Payment'],
  },
  {
    id: 68,
    title: 'Restaurant group',
    summary:
      'A restaurant group wanted centralised POS data, table reservations and branch ordering insights.',
    tags: ['Order Placement', 'Booking', 'Data & Analytics'],
  },
  {
    id: 69,
    title: 'Veterinary clinic',
    summary:
      'A vet clinic wanted online booking, pet records and vaccination reminders for its clients.',
    tags: ['Booking', 'Cloud System'],
  },
  {
    id: 70,
    title: 'Martial arts school',
    summary:
      'A martial arts school wanted class schedules, belt-level tracking and attendance logging.',
    tags: ['Attendance', 'Booking', 'Membership'],
  },
  {
    id: 71,
    title: 'Dance studio',
    summary:
      'A dance studio wanted class booking, course packages and recital ticket sales.',
    tags: ['Booking', 'Ticketing', 'Membership'],
  },
  {
    id: 72,
    title: 'Personal trainer',
    summary:
      'A personal trainer wanted session booking, package tracking and progress check-ins with clients.',
    tags: ['Booking', 'Membership', 'Mobile App'],
  },
  {
    id: 73,
    title: 'Optometry chain',
    summary:
      'An optometry chain wanted online eye-test booking and prescription reorder for contact lenses.',
    tags: ['Booking', 'eCommerce', 'Cloud System'],
  },
  {
    id: 74,
    title: 'Cosmetic clinic',
    summary:
      'A cosmetic clinic wanted consultation booking, treatment packages and follow-up reminders.',
    tags: ['Booking', 'Membership', 'Cloud System'],
  },
  {
    id: 75,
    title: 'Hair transplant centre',
    summary:
      'A hair transplant centre needed enquiry capture, consultation booking and aftercare reminders.',
    tags: ['Booking', 'Web/Website'],
  },
  {
    id: 76,
    title: 'Canteen operator',
    summary:
      'A canteen operator wanted daily menu pre-ordering and meal card balance tracking for staff.',
    tags: ['Order Placement', 'Payment', 'Web/Website'],
  },
  {
    id: 77,
    title: 'Food truck fleet',
    summary:
      'A food truck fleet needed live location sharing, order queuing and cashless payment at stops.',
    tags: ['Order Placement', 'Logistics', 'Payment'],
  },
  {
    id: 78,
    title: 'Online marketplace',
    summary:
      'An online marketplace wanted seller onboarding, product listings and escrow-style payment flow.',
    tags: ['eCommerce', 'Payment', 'Web/Website'],
  },
  {
    id: 79,
    title: 'Stationery brand',
    summary:
      'A stationery brand launched an eCommerce store with bulk order pricing for schools and offices.',
    tags: ['eCommerce', 'Order Placement'],
  },
  {
    id: 80,
    title: 'Watch retailer',
    summary:
      'A watch retailer wanted an online store with authenticity certificates and after-sales service booking.',
    tags: ['eCommerce', 'Booking'],
  },
  {
    id: 81,
    title: 'Sports apparel brand',
    summary:
      'A sports apparel brand wanted a storefront, size-swap workflow and size guide by product.',
    tags: ['eCommerce', 'Web/Website'],
  },
  {
    id: 82,
    title: 'Baby goods retailer',
    summary:
      'A baby goods retailer launched eCommerce with registry lists and subscription refills.',
    tags: ['eCommerce', 'Order Placement', 'Membership'],
  },
  {
    id: 83,
    title: 'Tea brand',
    summary:
      'A tea brand wanted wholesale ordering for distributors and a direct-to-consumer store.',
    tags: ['Order Placement', 'eCommerce'],
  },
  {
    id: 84,
    title: 'Gift shop',
    summary:
      'A gift shop wanted an online catalogue with gift wrapping options and store pickup.',
    tags: ['eCommerce', 'Web/Website'],
  },
  {
    id: 85,
    title: 'Second-hand platform',
    summary:
      'A second-hand platform wanted seller listings, item verification and buyer protection flow.',
    tags: ['eCommerce', 'Payment', 'Web/Website'],
  },
  {
    id: 86,
    title: 'Homeware brand',
    summary:
      'A homeware brand launched eCommerce with room-based browsing and delivery scheduling.',
    tags: ['eCommerce', 'Logistics'],
  },
  {
    id: 87,
    title: 'Jewellery retailer',
    summary:
      'A jewellery retailer wanted an online store, appointment booking and ring size tools.',
    tags: ['eCommerce', 'Booking'],
  },
  {
    id: 88,
    title: 'Perfume brand',
    summary:
      'A perfume brand launched an eCommerce store with sample boxes and subscription refills.',
    tags: ['eCommerce', 'Order Placement', 'Membership'],
  },
  {
    id: 89,
    title: 'Pet food brand',
    summary:
      'A pet food brand wanted a subscription store with auto-ship schedules and pet profile guidance.',
    tags: ['eCommerce', 'Order Placement', 'Membership'],
  },
  {
    id: 90,
    title: 'Supplements brand',
    summary:
      'A supplements brand launched eCommerce with dosage reminders and subscription plans.',
    tags: ['eCommerce', 'Membership', 'Web/Website'],
  },
  {
    id: 91,
    title: 'Appliance retailer',
    summary:
      'An appliance retailer wanted eCommerce with installation booking and trade-in quotes.',
    tags: ['eCommerce', 'Booking'],
  },
  {
    id: 92,
    title: 'Luxury goods retailer',
    summary:
      'A luxury retailer wanted a private client portal with reservations and personal shopper requests.',
    tags: ['eCommerce', 'Membership', 'Cloud System'],
  },
  {
    id: 93,
    title: 'Outlet mall',
    summary:
      'An outlet mall wanted a visitor loyalty app with parking rewards and store offers.',
    tags: ['Loyalty', 'Mobile App', 'Visitor Management'],
  },
  {
    id: 94,
    title: 'Department store',
    summary:
      'A department store wanted centralised POS data and stock visibility across its departments.',
    tags: ['Inventory', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 95,
    title: 'Supermarket chain',
    summary:
      'A supermarket chain wanted online shopping with same-day delivery and in-store pickup.',
    tags: ['eCommerce', 'Order Placement', 'Logistics'],
  },
  {
    id: 96,
    title: 'Grocery delivery service',
    summary:
      'A grocery delivery service needed order batching, route planning and live courier tracking.',
    tags: ['Order Placement', 'Logistics', 'Mobile App'],
  },
  {
    id: 97,
    title: 'Butcher shop',
    summary:
      'A butcher shop wanted pre-ordering with cut customisation and pickup time slots.',
    tags: ['Order Placement', 'Web/Website'],
  },
  {
    id: 98,
    title: 'Seafood wholesaler',
    summary:
      'A seafood wholesaler wanted daily price lists, bulk ordering and delivery scheduling.',
    tags: ['Order Placement', 'eCommerce', 'Logistics'],
  },
  {
    id: 99,
    title: 'Nightclub',
    summary:
      'A nightclub wanted guest-list management, table booking and VIP membership tiers.',
    tags: ['Booking', 'Membership', 'Cloud System'],
  },
  {
    id: 100,
    title: 'Sports bar',
    summary:
      'A sports bar wanted table booking, match-day promotions and a stamp-based loyalty card.',
    tags: ['Booking', 'Loyalty', 'Web/Website'],
  },
  {
    id: 101,
    title: 'Cinema chain',
    summary:
      'A cinema chain wanted online seat selection, snack pre-order and membership points.',
    tags: ['Ticketing', 'Order Placement', 'Loyalty'],
  },
  {
    id: 102,
    title: 'Museum',
    summary:
      'A museum wanted timed-entry ticketing, guided tour booking and membership cards.',
    tags: ['Ticketing', 'Booking', 'Membership'],
  },
  {
    id: 103,
    title: 'Theme park',
    summary:
      'A theme park wanted ticket bundles, ride reservations and queue-time updates in one app.',
    tags: ['Ticketing', 'Booking', 'Mobile App'],
  },
  {
    id: 104,
    title: 'Escape room',
    summary:
      'An escape room operator wanted game slot booking, group packages and waiver signing.',
    tags: ['Booking', 'Payment', 'Web/Website'],
  },
  {
    id: 105,
    title: 'Bowling alley',
    summary:
      'A bowling alley wanted lane booking, party packages and member pricing.',
    tags: ['Booking', 'Membership'],
  },
  {
    id: 106,
    title: 'KTV chain',
    summary:
      'A KTV chain wanted room booking, song lists and birthday packages in a single system.',
    tags: ['Booking', 'Mobile App', 'Loyalty'],
  },
  {
    id: 107,
    title: 'Arcade',
    summary:
      'An arcade wanted card-based play credits, prize redemption and event bookings.',
    tags: ['Membership', 'Payment', 'Booking'],
  },
  {
    id: 108,
    title: 'Swimming club',
    summary:
      'A swimming club wanted lane booking, swim course sign-up and member attendance.',
    tags: ['Booking', 'Attendance', 'Membership'],
  },
  {
    id: 109,
    title: 'Golf club',
    summary:
      'A golf club wanted tee-time booking, handicap tracking and competition entry.',
    tags: ['Booking', 'Membership', 'Data & Analytics'],
  },
  {
    id: 110,
    title: 'Tennis club',
    summary:
      'A tennis club wanted court booking, coaching slots and player ranking tracking.',
    tags: ['Booking', 'Attendance', 'Web/Website'],
  },
  {
    id: 111,
    title: 'Badminton venue',
    summary:
      'A badminton venue wanted hourly court booking, league registration and walk-in check-in.',
    tags: ['Booking', 'Attendance', 'Mobile App'],
  },
  {
    id: 112,
    title: 'Yoga studio',
    summary:
      'A yoga studio wanted class booking, retreat packages and online challenge tracking.',
    tags: ['Booking', 'Membership', 'Web/Website'],
  },
  {
    id: 113,
    title: 'Pilates studio',
    summary:
      'A Pilates studio wanted reformer class slots, package passes and cancellation policy enforcement.',
    tags: ['Booking', 'Membership', 'Cloud System'],
  },
  {
    id: 114,
    title: 'CrossFit box',
    summary:
      'A CrossFit box wanted daily WOD scheduling, attendance and personal best tracking.',
    tags: ['Attendance', 'Booking', 'Data & Analytics'],
  },
  {
    id: 115,
    title: 'Running club',
    summary:
      'A running club wanted race entry, training plans and member mileage tracking.',
    tags: ['Membership', 'Ticketing', 'Data & Analytics'],
  },
  {
    id: 116,
    title: 'E-sports venue',
    summary:
      'An e-sports venue wanted tournament registration, hourly seat booking and member accounts.',
    tags: ['Booking', 'Membership', 'Web/Website'],
  },
  {
    id: 117,
    title: 'Trampoline park',
    summary:
      'A trampoline park wanted session booking, waivers and birthday party packages.',
    tags: ['Booking', 'Payment', 'Web/Website'],
  },
  {
    id: 118,
    title: 'Playgroup',
    summary:
      'A playgroup centre wanted class booking, child profiles and photo sharing with parents.',
    tags: ['Booking', 'Membership', 'Mobile App'],
  },
  {
    id: 119,
    title: 'Kindergarten',
    summary:
      'A kindergarten wanted enrolment management, daily attendance and parent communication.',
    tags: ['Attendance', 'Membership', 'Web/Website'],
  },
  {
    id: 120,
    title: 'Childcare centre',
    summary:
      'A childcare centre wanted session booking, staff-to-child ratios and payment collection.',
    tags: ['Booking', 'Payment', 'Cloud System'],
  },
  {
    id: 121,
    title: 'Elder care service',
    summary:
      'An elder care service wanted home-visit scheduling, carer assignment and family updates.',
    tags: ['Booking', 'Logistics', 'Mobile App'],
  },
  {
    id: 122,
    title: 'Nursing home',
    summary:
      'A nursing home wanted visitor registration, resident care notes and medication reminders.',
    tags: ['Visitor Management', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 123,
    title: 'Medical lab',
    summary:
      'A medical lab wanted test booking, sample tracking and results portal for patients.',
    tags: ['Booking', 'Cloud System', 'Web/Website'],
  },
  {
    id: 124,
    title: 'Imaging centre',
    summary:
      'An imaging centre wanted scan booking, referral tracking and report delivery to doctors.',
    tags: ['Booking', 'Cloud System'],
  },
  {
    id: 125,
    title: 'Chiropractic clinic',
    summary:
      'A chiropractic clinic wanted treatment booking, package plans and symptom tracking.',
    tags: ['Booking', 'Membership'],
  },
  {
    id: 126,
    title: 'Traditional medicine centre',
    summary:
      'A traditional medicine centre wanted appointment booking and medicine delivery tracking.',
    tags: ['Booking', 'Logistics', 'Web/Website'],
  },
  {
    id: 127,
    title: 'TCM pharmacy',
    summary:
      'A traditional medicine pharmacy wanted herbal stock control and prescription refill tracking.',
    tags: ['Inventory', 'Cloud System'],
  },
  {
    id: 128,
    title: 'Fitness equipment rental',
    summary:
      'A fitness equipment rental firm wanted online rental booking, deposit handling and return scheduling.',
    tags: ['Booking', 'eCommerce', 'Payment'],
  },
  {
    id: 129,
    title: 'Bike shop',
    summary:
      'A bike shop launched eCommerce with assembly service and test-ride booking.',
    tags: ['eCommerce', 'Booking'],
  },
  {
    id: 130,
    title: 'Automotive parts retailer',
    summary:
      'An automotive parts retailer wanted a catalogue with vehicle-fitment search and store pickup.',
    tags: ['eCommerce', 'Inventory', 'Web/Website'],
  },
  {
    id: 131,
    title: 'Electronics repair centre',
    summary:
      'An electronics repair centre wanted booking, repair status tracking and warranty logging.',
    tags: ['Booking', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 132,
    title: 'Phone repair chain',
    summary:
      'A phone repair chain wanted walk-in queueing, price quotes and repair status notifications.',
    tags: ['Booking', 'Mobile App', 'Cloud System'],
  },
  {
    id: 133,
    title: 'Laundry service',
    summary:
      'A laundry service wanted order submission, wash-cycle tracking and delivery reminders.',
    tags: ['Order Placement', 'Logistics', 'Mobile App'],
  },
  {
    id: 134,
    title: 'Dry cleaner',
    summary:
      'A dry cleaner wanted pickup scheduling, item tagging and loyalty stamps.',
    tags: ['Order Placement', 'Loyalty', 'Booking'],
  },
  {
    id: 135,
    title: 'Moving company',
    summary:
      'A moving company wanted quote calculator, van booking and job tracking for crews.',
    tags: ['Booking', 'Logistics', 'Web/Website'],
  },
  {
    id: 136,
    title: 'Courier app',
    summary:
      'A courier app wanted real-time tracking, proof of delivery and driver earnings reports.',
    tags: ['Logistics', 'Mobile App', 'Data & Analytics'],
  },
  {
    id: 137,
    title: 'Taxi fleet operator',
    summary:
      'A taxi fleet operator wanted driver app, passenger hailing and fare settlement tools.',
    tags: ['Mobile App', 'Order Placement', 'Payment'],
  },
  {
    id: 138,
    title: 'Minibus operator',
    summary:
      'A minibus operator wanted route scheduling, seat booking and passenger counting.',
    tags: ['Booking', 'Attendance', 'Cloud System'],
  },
  {
    id: 139,
    title: 'Car rental company',
    summary:
      'A car rental company wanted vehicle booking, licence verification and return inspections.',
    tags: ['Booking', 'Cloud System', 'Web/Website'],
  },
  {
    id: 140,
    title: 'Boat rental company',
    summary:
      'A boat rental company wanted charter booking, crew selection and weather-based availability.',
    tags: ['Booking', 'Payment', 'Web/Website'],
  },
  {
    id: 141,
    title: 'Property valuation firm',
    summary:
      'A property valuation firm wanted automated reports and comparable sales dashboards.',
    tags: ['Data & Analytics', 'Cloud System'],
  },
  {
    id: 142,
    title: 'PropTech startup',
    summary:
      'A property tech startup built a tenant portal for rent payment, maintenance and lease documents.',
    tags: ['Payment', 'Cloud System', 'Web/Website'],
  },
  {
    id: 143,
    title: 'Smart building operator',
    summary:
      'A smart building operator wanted visitor registration, lift access and facility booking.',
    tags: ['Visitor Management', 'Booking', 'Cloud System'],
  },
  {
    id: 144,
    title: 'Security company',
    summary:
      'A security company wanted guard check-in, incident logging and client reporting.',
    tags: ['Visitor Management', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 145,
    title: 'Office management firm',
    summary:
      'An office management firm wanted meeting-room booking, visitor pass and catering ordering.',
    tags: ['Booking', 'Visitor Management', 'Order Placement'],
  },
  {
    id: 146,
    title: 'Event management firm',
    summary:
      'An event management firm wanted guest check-in, badge printing and session scheduling.',
    tags: ['Ticketing', 'Visitor Management', 'Cloud System'],
  },
  {
    id: 147,
    title: 'Conference organiser',
    summary:
      'A conference organiser wanted delegate registration, agenda builder and networking app.',
    tags: ['Ticketing', 'Mobile App', 'Cloud System'],
  },
  {
    id: 148,
    title: 'Exhibition organiser',
    summary:
      'An exhibition organiser wanted booth booking, visitor registration and floor-plan management.',
    tags: ['Ticketing', 'Booking', 'Web/Website'],
  },
  {
    id: 149,
    title: 'Wedding planner',
    summary:
      'A wedding planner wanted vendor booking, guest-list management and payment plans.',
    tags: ['Booking', 'Payment', 'Cloud System'],
  },
  {
    id: 150,
    title: 'Catering company',
    summary:
      'A catering company wanted online menu ordering, headcount planning and event scheduling.',
    tags: ['Order Placement', 'Booking', 'Web/Website'],
  },
  {
    id: 151,
    title: 'Restaurant supply company',
    summary:
      'A restaurant supply company wanted a B2B ordering portal with credit terms and delivery tracking.',
    tags: ['Order Placement', 'eCommerce', 'Logistics'],
  },
  {
    id: 152,
    title: 'Hotel group',
    summary:
      'A hotel group wanted a unified booking system, room allocation and guest loyalty points.',
    tags: ['Booking', 'Loyalty', 'Cloud System'],
  },
  {
    id: 153,
    title: 'Serviced apartments',
    summary:
      'A serviced apartment operator wanted online booking, lease signing and housekeeping scheduling.',
    tags: ['Booking', 'Cloud System', 'Payment'],
  },
  {
    id: 154,
    title: 'Hostel chain',
    summary:
      'A hostel chain wanted bed booking, dormitory inventory and check-in kiosk support.',
    tags: ['Booking', 'Visitor Management', 'Web/Website'],
  },
  {
    id: 155,
    title: 'Tour operator',
    summary:
      'A tour operator wanted tour departure calendar, group booking and e-vouchers.',
    tags: ['Booking', 'Ticketing', 'Payment'],
  },
  {
    id: 156,
    title: 'Travel tech platform',
    summary:
      'A travel platform wanted itinerary builder, price comparison and booking confirmation flow.',
    tags: ['Booking', 'Web/Website', 'Cloud System'],
  },
  {
    id: 157,
    title: 'Insurance agency',
    summary:
      'An insurance agency wanted a lead capture portal and renewal reminder workflow.',
    tags: ['Web/Website', 'Cloud System'],
  },
  {
    id: 158,
    title: 'Brokerage firm',
    summary:
      'A brokerage firm wanted portfolio dashboards and client reporting automation.',
    tags: ['Data & Analytics', 'Cloud System'],
  },
  {
    id: 159,
    title: 'HR services firm',
    summary:
      'An HR firm wanted employee onboarding, leave tracking and payroll handoff tools.',
    tags: ['Cloud System', 'Web/Website', 'Data & Analytics'],
  },
  {
    id: 160,
    title: 'Recruitment SaaS startup',
    summary:
      'A recruitment startup built an applicant tracking system with scoring and interview scheduling.',
    tags: ['Cloud System', 'Web/Website', 'Data & Analytics'],
  },
  {
    id: 161,
    title: 'Legal tech firm',
    summary:
      'A legal tech firm wanted case management, document automation and client intake forms.',
    tags: ['Cloud System', 'Web/Website'],
  },
  {
    id: 162,
    title: 'Relief organisation',
    summary:
      'A relief organisation wanted donor management, campaign pages and volunteer coordination.',
    tags: ['Payment', 'Web/Website', 'Membership'],
  },
  {
    id: 163,
    title: 'Sports association',
    summary:
      'A sports association wanted member registration, event entry and results publishing.',
    tags: ['Membership', 'Ticketing', 'Web/Website'],
  },
  {
    id: 164,
    title: 'Religious organisation',
    summary:
      'A religious organisation wanted event booking, donation collection and member directory.',
    tags: ['Booking', 'Payment', 'Membership'],
  },
  {
    id: 165,
    title: 'Chamber of commerce',
    summary:
      'A chamber of commerce wanted member portal, event sign-up and renewal billing.',
    tags: ['Membership', 'Ticketing', 'Cloud System'],
  },
  {
    id: 166,
    title: 'Trade association',
    summary:
      'A trade association wanted a member directory, industry news and annual conference registration.',
    tags: ['Membership', 'Ticketing', 'Web/Website'],
  },
  {
    id: 167,
    title: 'Startup incubator',
    summary:
      'A startup incubator wanted programme applications, mentor matching and cohort tracking.',
    tags: ['Cloud System', 'Web/Website', 'Data & Analytics'],
  },
  {
    id: 168,
    title: 'Venture fund',
    summary:
      'A venture fund wanted deal pipeline tracking, portfolio dashboards and investor reports.',
    tags: ['Data & Analytics', 'Cloud System'],
  },
  {
    id: 169,
    title: 'Crowdfunding platform',
    summary:
      'A crowdfunding platform wanted campaign creation, reward tiers and secure payment collection.',
    tags: ['Payment', 'Web/Website', 'eCommerce'],
  },
  {
    id: 170,
    title: 'Digital wallet startup',
    summary:
      'A digital wallet startup built top-up, payments and spending analytics for users.',
    tags: ['Payment', 'Mobile App', 'Data & Analytics'],
  },
  {
    id: 171,
    title: 'Remittance service',
    summary:
      'A remittance service wanted multi-currency transfer, rate alerts and beneficiary management.',
    tags: ['Payment', 'Web/Website', 'Data & Analytics'],
  },
  {
    id: 172,
    title: 'Buy-now-pay-later firm',
    summary:
      'A pay-later firm wanted merchant onboarding, repayment schedules and fraud checks.',
    tags: ['Payment', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 173,
    title: 'Loyalty coalition',
    summary:
      'A loyalty coalition wanted a points-sharing engine across participating merchants.',
    tags: ['Loyalty', 'Cloud System', 'Payment'],
  },
  {
    id: 174,
    title: 'Gift card platform',
    summary:
      'A gift card platform wanted digital cards, balance checking and partner redemption.',
    tags: ['Loyalty', 'Payment', 'eCommerce'],
  },
  {
    id: 175,
    title: 'Digital coupon service',
    summary:
      'A digital coupon service wanted campaign creation, QR redemption and merchant settlement.',
    tags: ['Loyalty', 'Web/Website', 'Payment'],
  },
  {
    id: 176,
    title: 'Cashback app',
    summary:
      'A cashback app wanted offer discovery, transaction linking and payout flows.',
    tags: ['Loyalty', 'Mobile App', 'Payment'],
  },
  {
    id: 177,
    title: 'Forex trading platform',
    summary:
      'A forex platform wanted charting, trade execution and risk management dashboards.',
    tags: ['Data & Analytics', 'Web/Website', 'Cloud System'],
  },
  {
    id: 178,
    title: 'Commodities trader',
    summary:
      'A commodities trader wanted live pricing, position tracking and compliance reporting.',
    tags: ['Data & Analytics', 'Cloud System'],
  },
  {
    id: 179,
    title: 'Supply chain company',
    summary:
      'A supply chain company wanted shipment visibility, exception alerts and vendor collaboration.',
    tags: ['Logistics', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 180,
    title: 'Fleet management firm',
    summary:
      'A fleet management firm wanted vehicle telematics, maintenance alerts and driver performance scores.',
    tags: ['Logistics', 'Data & Analytics', 'Mobile App'],
  },
  {
    id: 181,
    title: 'Wholesale distribution group',
    summary:
      'A distribution group wanted multi-warehouse inventory sync and reorder automation.',
    tags: ['Inventory', 'Cloud System', 'Data & Analytics'],
  },
  {
    id: 182,
    title: 'Data-driven retailer',
    summary:
      'A retailer wanted sales analytics and customer behaviour dashboards across its branches.',
    tags: ['Data & Analytics', 'Cloud System'],
  },
  {
    id: 183,
    title: 'Manufacturing quality control',
    summary:
      'A manufacturer wanted defect tracking, inspection workflows and production yield reports.',
    tags: ['Data & Analytics', 'Cloud System'],
  },
  {
    id: 184,
    title: 'Construction firm',
    summary:
      'A construction firm wanted site progress tracking, photo reports and milestone checklists.',
    tags: ['Cloud System', 'Data & Analytics', 'Web/Website'],
  },
  {
    id: 185,
    title: 'Facilities management firm',
    summary:
      'A facilities firm wanted maintenance requests, vendor dispatch and asset history.',
    tags: ['Booking', 'Logistics', 'Cloud System'],
  },
  {
    id: 186,
    title: 'Payroll services firm',
    summary:
      'A payroll firm wanted a client portal for submissions, payslips and compliance reporting.',
    tags: ['Cloud System', 'Web/Website', 'Data & Analytics'],
  },
  {
    id: 187,
    title: 'Real estate finance firm',
    summary:
      'A real estate finance firm wanted loan pipeline tracking and deal-level dashboards.',
    tags: ['Data & Analytics', 'Cloud System'],
  },
  {
    id: 188,
    title: 'Claims management firm',
    summary:
      'A claims firm wanted case intake, document collection and status tracking for clients.',
    tags: ['Cloud System', 'Web/Website', 'Data & Analytics'],
  },
  {
    id: 189,
    title: 'Bank branch network',
    summary:
      'A bank wanted branch appointment booking and queue management for its walk-in customers.',
    tags: ['Booking', 'Visitor Management', 'Cloud System'],
  },
  {
    id: 190,
    title: 'Salon equipment supplier',
    summary:
      'A salon equipment supplier wanted B2B ordering with trade pricing and delivery slots.',
    tags: ['Order Placement', 'eCommerce', 'Logistics'],
  },
  {
    id: 191,
    title: 'Shoe retailer',
    summary:
      'A shoe retailer launched eCommerce with size availability and click-and-collect.',
    tags: ['eCommerce', 'Inventory', 'Web/Website'],
  },
  {
    id: 192,
    title: 'Organic food brand',
    summary:
      'An organic food brand wanted subscription boxes and weekly delivery management.',
    tags: ['eCommerce', 'Order Placement', 'Logistics'],
  },
  {
    id: 193,
    title: 'Handmade crafts store',
    summary:
      'A crafts store wanted an online shop with custom order requests and event workshops.',
    tags: ['eCommerce', 'Booking', 'Web/Website'],
  },
  {
    id: 194,
    title: 'Bicycle sharing operator',
    summary:
      'A bike-sharing operator wanted dock availability, rider app and usage analytics.',
    tags: ['Mobile App', 'Payment', 'Data & Analytics'],
  },
  {
    id: 195,
    title: 'Parking management firm',
    summary:
      'A parking firm wanted space availability, prepaid parking and monthly pass management.',
    tags: ['Booking', 'Payment', 'Mobile App'],
  },
  {
    id: 196,
    title: 'Storage rental firm',
    summary:
      'A storage rental firm wanted unit browsing, size guidance and move-in booking.',
    tags: ['Booking', 'eCommerce', 'Web/Website'],
  },
  {
    id: 197,
    title: 'Camera rental house',
    summary:
      'A camera rental house wanted equipment booking, insurance checkout and late-fee tracking.',
    tags: ['Booking', 'Inventory', 'Payment'],
  },
  {
    id: 198,
    title: 'Tourist attraction',
    summary:
      'A tourist attraction wanted combo tickets, queue bypass and audio-guide bookings.',
    tags: ['Ticketing', 'Booking', 'Mobile App'],
  },
  {
    id: 199,
    title: 'Community supermarket',
    summary:
      'A community supermarket wanted group ordering and neighbourhood delivery routes.',
    tags: ['Order Placement', 'Logistics', 'Cloud System'],
  },
  {
    id: 200,
    title: 'Dessert chain',
    summary:
      'A dessert chain wanted online pre-ordering, branch pickup and seasonal menu pushes.',
    tags: ['Order Placement', 'Loyalty', 'Mobile App'],
  },
];

const detailByTag = {
  Booking:
    'A booking layer was built with real-time availability, slot management and automated reminders so customers could reserve without phoning in.',
  Membership:
    'A membership engine handled tiers, renewals, passes and entitlements so access could be packaged and sold consistently.',
  'Cloud System':
    'The platform was deployed on managed cloud infrastructure with role-based access, automatic backups, monitoring and secure storage.',
  eCommerce:
    'A storefront with product catalogues, payments and order management was connected to the company\u2019s existing operations.',
  'Order Placement':
    'Order capture was digitised end to end, from browsing a catalogue to confirmation, with status updates at every step.',
  'Web/Website':
    'A responsive website was delivered as the public face of the service and a channel for enquiries, sign-ups and self-service.',
  'Mobile App':
    'Mobile apps for iOS and Android let customers and staff use the same workflows from their phones, online or offline.',
  Attendance:
    'Attendance capture, covering both walk-ins and scheduled visits, was digitised with live records for management to review.',
  'Visitor Management':
    'Visitor registration, pre-registration and entry control, including badge or QR handling, were introduced at reception.',
  Blockchain:
    'Smart contracts and token infrastructure were designed, reviewed and deployed as part of the product\u2019s core logic.',
  Loyalty:
    'A points and rewards layer was added so repeat customers could be recognised and rewarded automatically.',
  Inventory:
    'Stock records were centralised with low-stock alerts and reorder tracking so the right products were always on hand.',
  Logistics:
    'Dispatch, routing and delivery tracking were coordinated so jobs and shipments could be followed in real time.',
  'Data & Analytics':
    'Dashboards and reporting were built so the business could see usage, sales and operations in a single view.',
  Payment:
    'Payment collection was integrated, covering online and in-app settlement with reconciliation and records.',
  Ticketing:
    'Ticketed access was digitised with purchase, e-ticket delivery and QR check-in at the door.',
};

const techByTag = {
  Booking: ['React Native', 'Node.js', 'PostgreSQL', 'Twilio'],
  Membership: ['Node.js', 'PostgreSQL', 'Redis'],
  'Cloud System': ['AWS', 'Docker', 'GitHub Actions'],
  eCommerce: ['Next.js', 'Stripe', 'PostgreSQL'],
  'Order Placement': ['React Native', 'Node.js', 'Redis'],
  'Web/Website': ['Next.js', 'Tailwind CSS', 'Vercel'],
  'Mobile App': ['React Native', 'Firebase'],
  Attendance: ['React Native', 'PostgreSQL', 'Node.js'],
  'Visitor Management': ['QR Codes', 'React', 'Node.js'],
  Blockchain: ['Solidity', 'Hardhat', 'Web3.js'],
  Loyalty: ['Redis', 'PostgreSQL', 'Node.js'],
  Inventory: ['Node.js', 'PostgreSQL', 'AWS'],
  Logistics: ['Mapbox', 'Node.js', 'PostgreSQL'],
  'Data & Analytics': ['Metabase', 'AWS Athena', 'PostgreSQL'],
  Payment: ['Stripe', 'Node.js', 'PostgreSQL'],
  Ticketing: ['QR Codes', 'Next.js', 'Stripe'],
};

const closingDetail =
  'Delivery covered discovery, UI/UX design, development, testing and post-launch support. The solution was designed to be maintained and extended as the business grows.';

const enriched = cases.map((c) => {
  const detail = c.tags
    .map((t) => detailByTag[t])
    .filter(Boolean)
    .concat(closingDetail);
  const tech = [];
  c.tags.forEach((t) => {
    (techByTag[t] || []).forEach((item) => {
      if (!tech.includes(item)) tech.push(item);
    });
  });
  return { ...c, detail, tech: tech.slice(0, 6) };
});

export default enriched;
