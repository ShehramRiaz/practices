const products = [
  {
    id: 1,
    name: "UltraSound Pro Wireless Headphones",
    description:
      "The UltraSound Pro Wireless Headphones are designed for people who want an immersive and comfortable listening experience throughout the day. These premium over-ear headphones combine a modern lightweight construction with generously padded ear cushions that help create a comfortable fit during extended listening sessions. Whether you are listening to music while studying, watching movies at home, joining online meetings, traveling on public transportation, or simply relaxing at the end of a busy day, these headphones are designed to provide a dependable audio experience. The wireless design eliminates the need to constantly manage cables, giving you greater freedom to move around your room, office, classroom, or home. The headphones feature intuitive controls that allow you to adjust volume, pause or resume playback, skip tracks, and manage calls without reaching for your connected device every time. A built-in microphone makes them suitable for voice calls, online classes, video conferences, and casual conversations. The foldable construction makes the headphones easier to store inside a backpack or travel bag when they are not being used. Their clean and contemporary appearance allows them to fit naturally into both professional and casual environments. The combination of comfort, portability, wireless convenience, and practical everyday controls makes this product a versatile choice for students, professionals, travelers, music listeners, and anyone who spends significant time consuming digital audio.",
    price: 89.99,
    category: "Electronics",
  },

  {
    id: 2,
    name: "SmartFit Fitness Watch",
    description:
      "The SmartFit Fitness Watch is a versatile wearable device created for users who want convenient access to everyday activity information directly from their wrist. Its compact display provides a simple way to view notifications, check daily activity progress, monitor workouts, and keep track of important personal routines without constantly reaching for a smartphone. The watch is designed with an adjustable wristband that can accommodate different wrist sizes and provide a comfortable fit throughout the day. It can be used during walking, running, cycling, gym sessions, and other everyday physical activities. The watch interface is designed to be straightforward, making it suitable for both beginners who are new to wearable technology and experienced users who want a convenient secondary device. Notifications can help users stay informed about incoming messages and other phone activity while they are working, studying, exercising, or traveling. Its lightweight design means it can be worn for long periods without feeling unnecessarily bulky. The SmartFit Fitness Watch is also designed to complement everyday clothing, making it practical enough for work, casual outings, and exercise sessions. With its combination of wearable convenience, activity-focused functionality, compact construction, and accessible interface, the watch can become a useful part of a person's everyday digital routine.",
    price: 129.5,
    category: "Wearables",
  },

  {
    id: 3,
    name: "ProBook X15 Laptop",
    description:
      "The ProBook X15 Laptop is a versatile computing device designed for students, professionals, creators, and everyday users who need a dependable computer for a wide variety of tasks. Its large display provides a comfortable workspace for browsing the internet, writing documents, attending online meetings, studying, programming, watching videos, managing files, and working with productivity applications. The laptop uses a modern slim profile that makes it easier to carry between home, school, university, office, or other locations. Its keyboard is designed for comfortable typing during long study or work sessions, while the precision touchpad provides a convenient alternative to using an external mouse. Multiple connectivity options make it practical for connecting common accessories such as external storage devices, headphones, displays, and other peripherals. The laptop is suitable for web development students who need an environment for writing and testing code, as well as professionals who regularly work with documents, spreadsheets, presentations, communication tools, and browser-based applications. Its balanced design focuses on everyday productivity rather than unnecessary complexity. The ProBook X15 can serve as a primary computer for work and study while also providing enough flexibility for entertainment and personal activities. Its combination of a spacious display, portable construction, comfortable keyboard, useful connectivity, and general-purpose computing capabilities makes it a practical choice for users who want one device capable of handling many different everyday responsibilities.",
    price: 749.99,
    category: "Computers",
  },

  {
    id: 4,
    name: "Mechanical RGB Gaming Keyboard",
    description:
      "The Mechanical RGB Gaming Keyboard is built for gamers, programmers, students, and computer users who prefer a responsive and tactile typing experience. Each key is designed to provide a distinct physical response, making the keyboard comfortable for both rapid gaming inputs and extended typing sessions. The keyboard features customizable RGB lighting that can add a personalized appearance to a desktop setup and make individual keys easier to identify in lower-light environments. Its full-size layout provides familiar access to standard letter keys, number keys, navigation controls, and dedicated function keys. The sturdy construction is intended to withstand frequent everyday use while maintaining a clean and organized appearance on a desk. The keyboard can be useful for gaming because responsive keys allow users to quickly enter commands, while programmers and writers may appreciate the tactile feedback when entering large amounts of text or source code. The overall design is intended to balance visual style with practical functionality rather than focusing exclusively on appearance. It can easily become the centerpiece of a desktop workstation when paired with a gaming mouse, monitor, and other accessories. Whether the user spends time playing games, writing code, completing school assignments, editing documents, or simply browsing the web, this keyboard provides a satisfying physical typing experience combined with customizable lighting and a familiar desktop layout.",
    price: 74.95,
    category: "Computer Accessories",
  },

  {
    id: 5,
    name: "ErgoComfort Office Chair",
    description:
      "The ErgoComfort Office Chair is designed for people who spend significant amounts of time sitting at a desk for work, study, gaming, or creative activities. Its ergonomic-inspired shape is intended to provide comfortable support during extended periods of use while helping users maintain a more organized sitting position. The chair includes adjustable features that allow users to customize the seat according to their preferred working position. A padded seat and supportive backrest provide additional comfort during long sessions, while the rolling base makes it easy to move around a workspace without repeatedly standing up. The chair's neutral appearance allows it to fit naturally into home offices, classrooms, study rooms, professional workplaces, and gaming setups. Students can use it while completing assignments or programming projects, while professionals can use it during meetings, document work, and long periods of computer use. The design focuses on practicality and everyday comfort rather than unnecessary decorative elements. Its adjustable construction also makes it easier for different users to find a position that feels appropriate for their individual workspace. Because the chair is designed for a variety of desk-based activities, it can serve as a flexible addition to a home office or study environment. The ErgoComfort Office Chair combines supportive design, adjustable positioning, comfortable padding, and easy movement into one practical piece of furniture intended for everyday desk use.",
    price: 189.0,
    category: "Furniture",
  },

  {
    id: 6,
    name: "HydraSteel Insulated Water Bottle",
    description:
      "The HydraSteel Insulated Water Bottle is a reusable hydration container designed for people who want a dependable bottle for school, work, exercise, travel, and everyday activities. Its insulated construction is designed to help maintain the temperature of beverages for longer periods compared with ordinary single-wall bottles. The durable exterior is intended to withstand the demands of daily transportation inside backpacks, gym bags, office bags, and travel luggage. A secure lid helps reduce the chance of accidental spills when the bottle is carried between locations. The wide opening makes it easier to fill the bottle with water or other suitable beverages and can also make cleaning more convenient. The bottle has a practical size that provides enough capacity for regular hydration without becoming unnecessarily difficult to carry. Students can take it to class, professionals can keep it at their desk, and fitness enthusiasts can bring it to workouts or outdoor activities. The reusable design can also help reduce dependence on disposable beverage containers. Its simple appearance makes it suitable for a variety of environments without looking overly specialized. Whether it is placed beside a computer during a workday, carried on a walk, stored in a vehicle, or taken to a fitness session, the HydraSteel bottle is designed to provide a convenient and reusable way to keep a preferred drink nearby throughout the day.",
    price: 32.75,
    category: "Home & Kitchen",
  },

  {
    id: 7,
    name: "LuminaDesk LED Study Lamp",
    description:
      "The LuminaDesk LED Study Lamp is a compact lighting solution designed for desks, study areas, bedside tables, workstations, and creative spaces. Its adjustable design allows users to direct light toward a particular area of the desk, making it useful for reading books, writing notes, studying, drawing, completing assignments, or working with a computer. The lamp is designed to occupy relatively little desk space while still providing useful illumination for focused activities. Its modern appearance allows it to blend into both traditional study rooms and contemporary workspaces. The flexible positioning makes it possible to change the direction of the light depending on the user's activity and seating position. Students can use the lamp while preparing for exams or completing homework, while professionals can use it during late work sessions or document review. It can also be placed beside a bed for reading or used in a creative workspace where additional focused illumination is helpful. The LED lighting concept provides an efficient alternative to many traditional desk lamps while also offering a clean and contemporary appearance. The simple controls are intended to be accessible without requiring complicated setup or technical knowledge. With its compact footprint, adjustable structure, practical lighting, and versatile design, the LuminaDesk LED Study Lamp is a useful addition to any environment where focused desk lighting is needed.",
    price: 39.99,
    category: "Lighting",
  },

  {
    id: 8,
    name: "UrbanFlex Everyday Backpack",
    description:
      "The UrbanFlex Everyday Backpack is designed for students, commuters, travelers, and everyday users who need a convenient way to organize and carry personal belongings. Its multi-compartment design provides separate spaces for common items such as books, notebooks, chargers, headphones, water bottles, accessories, and other daily essentials. A dedicated padded section provides additional protection for a laptop or tablet, making the backpack suitable for school, university, office environments, and remote work. The adjustable shoulder straps allow users to customize the fit according to their body and carrying preference. The backpack has a modern appearance that works well in both casual and professional environments. Its balanced structure helps distribute belongings across multiple compartments instead of forcing everything into one large storage area. This can make it easier to find frequently used objects when moving between classes, meetings, libraries, cafes, or transportation hubs. The backpack is also suitable for short trips where users need to carry technology, clothing, documents, and personal accessories without taking a large suitcase. Exterior pockets provide convenient access to smaller items that users may need throughout the day. The UrbanFlex Everyday Backpack combines practical organization, comfortable carrying features, laptop protection, and a versatile visual design, making it an appropriate everyday companion for people who regularly move between different locations while carrying work, study, or personal equipment.",
    price: 59.9,
    category: "Bags",
  },

  {
    id: 9,
    name: "BreezeMax Portable Air Cooler",
    description:
      "The BreezeMax Portable Air Cooler is a compact personal cooling device designed for desks, bedrooms, study areas, small offices, and other spaces where users want convenient airflow. Its portable construction makes it easy to move between rooms or place directly beside a workstation. The compact footprint means it can sit comfortably on a desk, shelf, bedside table, or other suitable surface without occupying excessive space. The device provides adjustable airflow settings so users can select a level appropriate for their personal comfort. Its simple controls are designed to make everyday operation straightforward without requiring complicated installation. Students can use the cooler while studying, programmers can keep it beside a computer workstation, and office workers can position it near their desk during warmer periods. The portable nature of the device also makes it useful for temporary workspaces where installing a larger cooling system would not be practical. Its design focuses on personal comfort and convenience rather than attempting to replace a full room cooling system. The neutral appearance allows it to blend with many home and office environments. Because it can be moved easily, users can reposition it according to their current location and activity. The BreezeMax Portable Air Cooler is therefore a practical choice for anyone looking for a compact personal airflow solution that can be placed close to where cooling is most useful.",
    price: 44.5,
    category: "Home Appliances",
  },

  {
    id: 10,
    name: "VisionView 27-Inch Monitor",
    description:
      "The VisionView 27-Inch Monitor is a spacious desktop display designed for productivity, programming, entertainment, study, content consumption, and general computer use. Its large screen provides more workspace than smaller displays, making it particularly useful for users who frequently work with multiple windows at the same time. Developers can place a code editor beside a browser or documentation window, students can work with research material while taking notes, and professionals can keep communication tools visible alongside spreadsheets or documents. The monitor's modern frame is designed to provide a clean appearance on a contemporary desk. Its adjustable positioning allows users to find a comfortable viewing angle according to their workspace arrangement. The display can also be connected to a compatible computer or other supported device for a larger visual workspace. A spacious screen can reduce the need to constantly switch between windows, which can make certain multitasking workflows more convenient. The monitor is equally suitable for entertainment because its larger display provides an enjoyable viewing area for videos, presentations, and other digital content. Its practical combination of screen size, desktop-friendly construction, and versatile usage makes it useful for both home and professional environments. The VisionView 27-Inch Monitor is designed to become a central part of a workstation where users need enough screen space to comfortably manage multiple digital tasks throughout the day.",
    price: 219.99,
    category: "Monitors",
  },

  {
    id: 11,
    name: "SwiftClick Wireless Mouse",
    description:
      "The SwiftClick Wireless Mouse is a compact computer accessory designed for people who want a comfortable and convenient alternative to a traditional wired mouse. Its wireless design helps reduce cable clutter around the workstation and gives users greater freedom to position the mouse according to their preferred desk arrangement. The shape is designed to fit naturally in the hand during everyday computer activities such as browsing websites, editing documents, programming, working with spreadsheets, navigating applications, and casual gaming. Responsive controls make it easy to select files, click buttons, scroll through long pages, and interact with graphical interfaces. The compact construction also makes the mouse convenient for people who regularly travel between home, office, school, and other locations. It can easily be stored inside a laptop bag or backpack alongside other computer accessories. The mouse is suitable for students who need a simple pointing device for coursework and programming as well as professionals who spend several hours each day using desktop applications. Its clean design makes it appropriate for both business and personal environments. The SwiftClick Wireless Mouse focuses on the fundamental qualities that make a mouse useful: comfortable handling, convenient wireless operation, dependable everyday controls, and portability. It is an uncomplicated accessory that can improve the usability of almost any compatible desktop or laptop setup without adding unnecessary complexity.",
    price: 24.95,
    category: "Computer Accessories",
  },

  {
    id: 12,
    name: "HomeBrew Digital Coffee Maker",
    description:
      "The HomeBrew Digital Coffee Maker is a practical countertop appliance designed for people who enjoy preparing coffee at home, in an office, or in a shared workspace. Its digital controls provide an accessible way to configure the brewing process according to the user's preferred routine. The machine is designed with a straightforward interface so that users do not need extensive technical knowledge to prepare a pot of coffee. Its countertop-friendly construction allows it to fit into many kitchen environments without requiring a large amount of dedicated space. The coffee maker is suitable for early-morning routines, study sessions, workdays, family breakfasts, and gatherings where multiple people may want coffee. A visible control interface helps users understand the selected settings before starting the brewing process. The reusable design of the coffee preparation system can also provide a practical alternative to purchasing individually prepared drinks throughout the week. Users can keep the appliance in a kitchen, office break room, dormitory environment, or shared workspace depending on their needs. Its simple design focuses on convenience and repeatable everyday use rather than unnecessary complexity. The HomeBrew Digital Coffee Maker is intended for people who want a familiar countertop appliance that can become part of their regular morning or afternoon routine while providing a straightforward way to prepare coffee whenever they need it.",
    price: 68.4,
    category: "Kitchen Appliances",
  },

  {
    id: 13,
    name: "ActiveMove Running Shoes",
    description:
      "ActiveMove Running Shoes are designed for people who enjoy walking, jogging, running, gym workouts, and other everyday activities that require comfortable footwear. The lightweight construction is intended to make the shoes easy to wear for extended periods while the cushioned interior provides additional comfort during movement. The outsole is designed to provide practical traction on common everyday surfaces, making the shoes suitable for city walking paths, indoor workout areas, and recreational activities. Their versatile appearance allows them to be worn with athletic clothing as well as casual everyday outfits. The shoes feature a secure fastening system that allows users to adjust the fit according to their preference. A breathable upper helps create a more comfortable environment around the foot during active use. The overall construction balances flexibility and support for people who regularly spend time on their feet. Whether someone is taking a morning walk, completing a gym session, commuting around a city, or simply looking for comfortable footwear for an active lifestyle, the ActiveMove Running Shoes are designed to provide a practical combination of comfort and everyday versatility. Their straightforward athletic styling also makes them easy to incorporate into a variety of wardrobes. These shoes are intended as an all-purpose option for users who want footwear that can move comfortably between exercise, casual activities, and everyday routines.",
    price: 84.99,
    category: "Footwear",
  },

  {
    id: 14,
    name: "SoftNest Premium Pillow",
    description:
      "The SoftNest Premium Pillow is designed to provide comfortable support for people looking to improve the comfort of their sleeping environment. Its soft yet supportive construction is intended to provide a balanced feel without making the pillow unnecessarily firm or excessively flat. The pillow can be used in bedrooms, guest rooms, dormitories, and other sleeping spaces where a comfortable resting surface is important. Its standard design allows it to work naturally with common pillowcases and bedding arrangements. The filling is distributed to create a consistent sleeping surface and help the pillow retain its general shape during regular use. The neutral appearance makes it easy to coordinate with different bedroom styles and bedding colors. Users can incorporate it into their existing sleep setup without needing to change other parts of their bedroom. The pillow is also suitable for reading or relaxing in bed when additional head and upper-body support is useful. Its practical size makes it easy to store, replace, or move between different rooms. The SoftNest Premium Pillow focuses on everyday comfort, simple maintenance, and versatile use rather than complicated features. Whether it is used in a primary bedroom, guest room, student accommodation, or travel-related sleeping environment, it provides a straightforward soft furnishing designed to make resting and relaxing more comfortable.",
    price: 27.8,
    category: "Bedding",
  },

  {
    id: 15,
    name: "PureGlow Skincare Set",
    description:
      "The PureGlow Skincare Set is a multi-product personal care collection designed for people who want a simple and organized approach to their everyday skincare routine. The set brings several complementary skincare products together so users can maintain a consistent routine without purchasing every item separately. Each product is packaged to create a coordinated appearance, making the collection suitable for personal use as well as gifting. The routine can be incorporated into morning and evening self-care habits depending on individual preferences and product instructions. The set is designed for users who appreciate having multiple skincare essentials available in one convenient collection. Its packaging makes the products easy to organize on a bathroom shelf, dressing table, or personal care storage area. The collection can also be useful for people who are beginning to develop a more consistent skincare routine and want several basic products together rather than trying to select unrelated items individually. The PureGlow Skincare Set focuses on convenience, organization, and everyday personal care. Its coordinated presentation makes it particularly appropriate as a thoughtful gift for birthdays, celebrations, holidays, or personal milestones. Users should always review the ingredient information and individual product instructions before use, especially if they have specific skincare requirements or sensitivities. Overall, the set provides a convenient way to organize several personal care products into one cohesive everyday routine.",
    price: 54.99,
    category: "Beauty",
  },

  {
    id: 16,
    name: "TravelMate Universal Adapter",
    description:
      "The TravelMate Universal Adapter is designed for travelers who need a convenient way to connect compatible electrical devices when visiting locations with different outlet configurations. Its compact design makes it easy to place inside a suitcase, backpack, laptop bag, or travel organizer without taking up excessive space. The adapter provides a practical solution for people carrying phones, laptops, cameras, chargers, tablets, and other compatible electronics while traveling. Instead of carrying multiple separate plug adapters, users can use one versatile accessory designed to accommodate several common outlet configurations. Its straightforward design makes it accessible to frequent travelers as well as people taking occasional international trips. The adapter can be particularly useful for business travelers who need to keep laptops and communication devices powered during work trips, as well as students studying abroad or tourists visiting different countries. The compact construction means it can remain inside a travel bag and be available whenever needed. Users should verify electrical compatibility, voltage requirements, and device specifications before connecting equipment, because a plug adapter does not necessarily convert electrical voltage. The TravelMate Universal Adapter focuses on portability, convenience, and organization, providing travelers with a compact accessory that can reduce the hassle associated with different outlet shapes and configurations during international travel.",
    price: 36.25,
    category: "Travel Accessories",
  },

  {
    id: 17,
    name: "SoundPod Mini Bluetooth Speaker",
    description:
      "The SoundPod Mini Bluetooth Speaker is a compact portable audio device designed for people who want convenient wireless sound without carrying a large speaker system. Its small construction makes it easy to place on a desk, bedside table, kitchen counter, picnic area, or other suitable surface. The wireless connection allows compatible devices such as smartphones, tablets, and computers to stream audio without requiring a physical audio cable. The speaker can be useful for listening to music while studying, playing podcasts during household activities, providing background audio at a small gathering, or simply enjoying entertainment in a different room. Its portable shape makes it easy to carry in a backpack or travel bag, allowing users to bring personal audio into different environments. The controls are designed to provide convenient access to basic playback functions without requiring the user to constantly interact with the connected device. The speaker's compact design also makes it suitable for smaller spaces where a larger sound system would be unnecessary. The SoundPod Mini focuses on portability and everyday convenience, providing a simple way to bring wireless audio into a variety of situations. Whether placed beside a laptop during work, carried outdoors for casual entertainment, or kept on a bedroom shelf for everyday listening, the speaker is designed to provide an accessible audio solution in a small and easy-to-carry package.",
    price: 42.0,
    category: "Audio",
  },

  {
    id: 18,
    name: "CleanSweep Robotic Vacuum",
    description:
      "The CleanSweep Robotic Vacuum is an automated household cleaning device designed to help users maintain cleaner floors with less manual effort. Its compact circular design allows it to move across suitable floor surfaces while navigating around common household furniture and obstacles. The device is intended to complement regular cleaning rather than completely replace all forms of household maintenance, making it useful for people who want to reduce the amount of time spent on routine floor cleaning. It can be especially convenient for busy professionals, students, families, and anyone who prefers to automate repetitive household tasks. The robotic design allows the device to operate without requiring the user to continuously guide it around the room. Its compact profile also allows it to reach areas beneath certain pieces of furniture where a larger traditional vacuum may be inconvenient to maneuver. Users can incorporate automated cleaning into their regular household routine while continuing to perform deeper cleaning when necessary. The CleanSweep Robotic Vacuum is designed with simplicity and everyday convenience in mind, making it a practical addition to modern homes. Its automated approach can help users maintain a more consistent cleaning schedule while freeing time for other activities such as work, study, exercise, family responsibilities, or relaxation. The combination of compact construction, automated movement, and routine floor-cleaning functionality makes this product suitable for people looking for a more convenient approach to everyday household maintenance.",
    price: 299.99,
    category: "Home Appliances",
  },

  {
    id: 19,
    name: "FocusFlow Productivity Notebook",
    description:
      "The FocusFlow Productivity Notebook is designed for students, professionals, writers, developers, planners, and anyone who prefers organizing ideas and tasks on paper. Its structured page layout provides space for writing notes, recording priorities, planning activities, tracking progress, and capturing ideas throughout the day. The notebook can be used for school assignments, project planning, meeting notes, programming ideas, personal goals, daily schedules, or creative brainstorming. Its practical format allows users to keep related information together instead of relying entirely on scattered pieces of paper or multiple digital applications. The notebook is suitable for carrying in a backpack, briefcase, laptop bag, or desk drawer, making it accessible in classrooms, offices, libraries, cafes, and home workspaces. Students can use it to organize study plans and assignment deadlines, while professionals can use it to record meeting notes and project tasks. Creative users can dedicate pages to sketches, concepts, writing ideas, or planning future projects. The FocusFlow notebook is intentionally versatile so that users can adapt it to their individual workflow rather than being restricted to one specific purpose. Its clean design also makes it appropriate for professional environments where users want a simple and organized appearance. By providing a dedicated physical space for thoughts, tasks, notes, and plans, the notebook can become a useful companion for people who enjoy combining traditional writing with modern digital productivity tools.",
    price: 14.99,
    category: "Stationery",
  },

  {
    id: 20,
    name: "GameMaster RGB Desktop PC",
    description:
      "The GameMaster RGB Desktop PC is a high-performance desktop computer designed for gamers, developers, creators, streamers, and power users who want a capable workstation for demanding digital activities. Its desktop configuration provides room for substantial computing components while maintaining a visually distinctive appearance through customizable RGB lighting. The system is suitable for gaming, software development, multimedia work, content creation, multitasking, and other applications that can benefit from desktop-class hardware. Its larger desktop form factor also provides easier access to internal components compared with many compact computers, which can be useful for users who plan to expand or upgrade their system in the future. The computer can serve as the central component of a complete workstation when paired with a suitable monitor, keyboard, mouse, headphones, and other accessories. Gamers can use it as the foundation of a dedicated gaming setup, while developers can configure their workspace around programming environments, browsers, local development servers, and productivity tools. Content creators can use the system for compatible editing and creative applications, while students can benefit from a powerful machine capable of handling both educational and personal projects. The RGB lighting gives the desktop a distinctive visual identity and can be customized according to the user's preferred setup. The GameMaster RGB Desktop PC is intended for users who want a powerful and expandable desktop platform that can support a broad range of demanding activities while also serving as a visually appealing centerpiece for a modern computer workspace.",
    price: 1499.0,
    category: "Gaming Computers",
  },
];

export default products;
