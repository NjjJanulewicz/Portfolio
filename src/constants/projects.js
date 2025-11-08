export const PROJECTS = [
  {
    route: "rnr",
    name: "Rise & Reign",
    link: "https://rnr-client-two.vercel.app/",
    description: "An Ecommerce site for Initially built for a fitness brand. It uses Django for the backend and React for the frontend." +
      "It handles payments through Stripe and uses a custom payment gateway to handle payments." +
      "Client funding for the project ran out before the project was completed, but the site is still live on Vercel." +
      "The images on the site are stock images, so they may be a inaccurate representation",
    tags: ["React", "Redux", "SQL", "Stripe", "Django", "Python", "TypeScript", "Material UI"],
    titleImage: "/src/assets/rnr/title.png",
    images: [
      {src: "/src/assets/rnr/cart.png", description: "Cookie and Account based cart"},
      {src: "/src/assets/rnr/login.png", description: "Login Dialog"},
      {src: "/src/assets/rnr/results.png", description: "Search results"},
      {src: "/src/assets/rnr/product.png", description: "Product detail"},
      {src: "/src/assets/rnr/admin.png", description: "Admin portal for database management"},
      {src: "/src/assets/rnr/orderAdmin.png", description: "Order Admin for shipping"},
      {src: "/src/assets/rnr/payment.png", description: "Payment page supported by stripe"}
    ]
  },
  {
    route: "dm",
    name: "Datamanager",
    link: null,
    description: "This is a data management software that I worked on while employed at Elemental Scientific." +
      "It serves as the main data management tool for the analytical station SampleTrax." +
      "It has RFID integration for secure access.",
    tags: ["SQLServer", "WPF", "dotnet"],
    titleImage: "/src/assets/dm/title.png",
    images: [
      {src: "/src/assets/dm/bottleFilter.png", description: "Bottle filter with async loading"},
      {src: "/src/assets/dm/calibration.png", description: "Calibration editor with unit conversion"},
      {src: "/src/assets/dm/qc.png", description: "Quality Control editor"},
      {src: "/src/assets/dm/tracking.png", description: "Bottle tracking with barcode scanning"},
      {src: "/src/assets/dm/solution.png", description: "Solution editor"}
    ]
  },
  {
    route: "trax",
    name: "SampleTRAX",
    link: "https://icpms.com/products/barcode-reading/sampletrax-sample-identification-autosamplers/",
    description: "This is an analytical chemistry software that I worked on while employed at Elemental Scientific." +
      "It uses SQLServer and WFP. It is a fully featured software that aims to have an industry leading feature set" +
      "I've traveled from coast to coast in the US and to some parts of Asia in world leading semiconductor labs to see" +
      "the integration of our networked system into the real world.",
    tags: ["SQLServer", "WPF", "dotnet", "C#", "Database Administration"],
    titleImage: "/src/assets/trax/title.png",
    images: [
      {src: "/src/assets/trax/qc.png", description: "Live Quality Control editing"},
      {src: "/src/assets/trax/sequence.png", description: "Manual sequence editing with drag and drop"},
      {src: "/src/assets/trax/calibration.png", description: "Async calibration with live data"}
    ]
  },
  {
    route: "pc",
    name: "Parts Cruise",
    link: "https://parts-cruise.vercel.app/",
    description: "This was my capstone project for my undergraduate degree. " +
      "It is a meta search engine for used automotive parts that uses React for the frontend and django for the backend." +
      "It scrapes data from automotive forums and allows users to search for parts and add them to their cart." +
      "The motivation for this project was because at the time I was very passionate about cars but didn't have the money to buy new parts so " +
      "I often found myself wasting lots of time digging for what I needed so I made Parts Cruise to solve this problem." +
      "Searching is supported by a custom search engine that uses Full-Text Search with an Inverted Index." +
      "This project was completed in over a semester and was a great learning experience for me." +
      "Note that the scope of this project didn't include a reactive UI so its only intended to be viewed on desktop.",
    tags: ["React", "Redux", "SQL", "Python", "Django", "TypeScript", "Material UI"],
    titleImage: "/src/assets/pc/title.png",
    images: [
      {src: "/src/assets/pc/home.png", description: "Home Page"},
      {src: "/src/assets/pc/listing.png", description: "Listing"},
      {src: "/src/assets/pc/recommended.png", description: "Recommended from listing"},
      {src: "/src/assets/pc/search.png", description: "Search with make and model filters"},
      {src: "/src/assets/pc/login.png", description: "Account Login"},
      {src: "/src/assets/pc/account.png", description: "Account page with saved items"}
    ]
  },
  {
    route: "scan",
    name: "Scan Station",
    link: null,
    description: "This is a lightweight barcode scanning station that I built while at Elemental Scientific." +
      "It uses Entitiy Framework Core and WPF. It is a simple tool that allows users to use a barcode scanner to associate vial barcodes with a sample rack." +
      "The application is very modular as its data access layer is abstracted so that it can be easily swapped out for a different database." +
      "This was very important since the other teams are siloed and use different databases.",
    tags: ["SQLServer", "WPF", "dotnet"],
    titleImage: "/src/assets/scan/title.png",
    images: [
      {src: "/src/assets/scan/rack.png", description: "Rack with barcode scanning"},
      {src: "/src/assets/scan/settings.png", description: "Configuration settings"}
    ]
  },
  // {
  //   link: "rtf",
  //   name: "RTF Construction",
  //   description: "A small website that I built for a construction company. It React for the frontend and doesn't use a backend." +
  //     "I built this website free of charge for a friend who was trying to get his contracting business started." +
  //     "Unfortunately, the business was never started, but the website is still live on Vercel.",
  //   tags: ["React", "Node", "Express", "MongoDB"],
  //   titleImage: "/src/assets/rtf.png",
  //   images: ["sadf", "asdf"]
  // },
];
