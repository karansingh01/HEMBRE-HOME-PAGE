const pictures = { // Global variables to sorting data
  pal: {
    mainImage: "pictures/pal.jpg",
    mainImage2: "pictures/pal.png",
  },
  mattis: {
    mainImage: "pictures/mattis.jpg",
  },
  ludvik: {
    mainImage: "pictures/ludvik.jpg",
  },
  timleo: {
    mainImage: "pictures/timleo.jpg",
  },
  leonel: {
    mainImage: "pictures/leonel.jpg",
  },
  newsImg: [
    "pictures/about1.jpg",
    "pictures/about2.jpg",
    "pictures/about4.jpg",
    "pictures/about5.jpg",
    "pictures/about6.jpg",
    "pictures/about7.jpg",
  ],
  sponsors: {
    bekkevold: "pictures/bakkevold.png",
    oxford_gun: "pictures/oxford_gun.png",
    ny_spons: "pictures/sponsor_deg.png",
  },
};

const shooters = [{
    id: "palhembre",
    isShown: true,

    about: {
      firstName: "Pål",
      lastName: "Hembre",

      birthYear: 1963,
      birthDay: 20,
      birthMonth: 4,
      birthPlace: "Molde",
    },

    image: {
      mainImage: pictures.pal.mainImage,
    },

    description: {
      short: "Started with pistol shooting in 1978. CISM shooter in 1984/85 and from 1990 to 2018.",
      long: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde excepturi, quaerat sit quasi recusandae id soluta. Voluptas totam debitis, expedita odit quo voluptatum repellat suscipit animi voluptates! Temporibus, qui?",
    },

    family: {
      children: [
        "mattishembre",
        "ludvikhembre",
        "timleohembre",
        "leonelhembre",
      ],
      parents: [],
      siblings: [],
    },

    memberShip: {
      name: "Bærum PK",
      link: "http://bpk.no/s",
    },

    yearlyStatistics: [
      ["http://fsu.no/issf/2019/sk/st_paalh.htm", "2019"],
      ["http://fsu.no/issf/2018/sk/st_paalh.htm", "2018"],
      ["http://fsu.no/issf/2017/sk/st_paalh.htm", "2017"],
      ["http://fsu.no/issf/2016/sk/st_paalh.htm", "2016"],
      ["http://fsu.no/issf/2015/sk/st_paalh.htm", "2015"],
      ["http://fsu.no/issf/2014/sk/st_paalh.htm", "2014"],
      ["http://fsu.no/issf/2013/sk/st_paalh.htm", "2013"],
      ["http://fsu.no/issf/2012/sk/st_paalh.htm", "2012"],
      ["http://fsu.no/issf/2011/sk/st_paalh.htm", "2011"],
      ["http://fsu.no/issf/2010/sk/st_paalh.htm", "2010"],
      ["http://fsu.no/skyttere/stat/paalh2009.htm", "2009"],
      ["http://fsu.no/skyttere/stat/paalh2008.htm", "2008"],
      ["http://fsu.no/skyttere/stat/paalh2007.htm", "2007"],
      ["http://fsu.no/skyttere/stat/paalh2006.htm", "2006"],
      ["http://fsu.no/skyttere/stat/paalh2005.htm", "2005"],
      ["http://fsu.no/skyttere/stat/paalh2004.htm", "2004"],
      ["http://fsu.no/skyttere/stat/paalh2003.htm", "2003"],
      ["http://fsu.no/skyttere/stat/paalh2002.htm", "2002"],
      ["http://fsu.no/skyttere/stat/paalh2001.htm", "2001"],
      ["http://fsu.no/skyttere/stat/paalh2000.htm", "2000"],
      ["http://fsu.no/skyttere/stat/paalh1999.htm", "1999"],
      ["http://fsu.no/skyttere/stat/paalh1998.htm", "1998"],
      ["http://fsu.no/skyttere/stat/paalh1997.htm", "1997"],
      ["http://fsu.no/skyttere/stat/paalh1996.htm", "1996"],
      ["http://fsu.no/skyttere/stat/paalh1995.htm", "1995"],
      ["http://fsu.no/skyttere/stat/paalh1994.htm", "1994"],
      ["http://fsu.no/skyttere/stat/paalh1993.htm", "1993"],
      ["http://fsu.no/skyttere/stat/paalh1992.htm", "1992"],
      ["http://fsu.no/skyttere/stat/paalh1991.htm", "1991"],
      ["http://fsu.no/skyttere/stat/paalh1990.htm", "1990"],
      ["http://fsu.no/skyttere/stat/paalh1989.htm", "1989"],
      ["http://fsu.no/skyttere/stat/paalh1988.htm", "1988"],
      ["http://fsu.no/skyttere/stat/paalh1987.htm", "1987"],
      ["http://fsu.no/skyttere/stat/paalh1986.htm", "1986"],
      ["http://fsu.no/skyttere/stat/paalh1985.htm", "1985"],
      ["http://fsu.no/skyttere/stat/paalh1984.htm", "1984"],
      ["http://fsu.no/skyttere/stat/paalh1983.htm", "1983"],
      ["http://fsu.no/skyttere/stat/paalh1982.htm", "1982"],
      ["http://fsu.no/skyttere/stat/paalh1981.htm", "1981"],
      ["http://fsu.no/skyttere/stat/paalh1980.htm", "1980"],
      ["http://fsu.no/skyttere/stat/paalh1979.htm", "1979"],
      ["http://fsu.no/skyttere/stat/paalh1978.htm", "1978"],
    ],

    // ['link','navn'],
    stasticsLinks: [
      ["http://fsu.no/issf/alle/tp/tp_paalh.htm", "Best results"],
      ["http://fsu.no/issf/alle/sn/sn_paalh.htm", "Average"],
      ["http://fsu.no/issf/alle/ant/st_paalh.htm", "Total starts"],
      ["http://www.fsu.no/issf/iaar/sk/st_mattish.htm", "Events this year"],
    ],

    bestStatistics: [{
        event: "Center Fire",
        score: 596,
        year: 2000,
      },
      {
        event: "Mil. Rapid Fire",
        score: 595,
        year: 2011,
      },
      {
        event: "Standardpistol",
        score: 586,
        year: 1993,
      },
      {
        event: "Olympic Rapid Fire",
        score: 589,
        year: 2013,
      },
      {
        event: "Freepistol",
        score: 561,
        year: 2009,
      },
      {
        event: "Airpistol",
        score: 586,
        year: 2010,
      },
      {
        event: "Sportpistol",
        score: 595,
        year: 2012,
      },
      {
        event: "Mil. RF, cal. 22",
        score: 598,
        year: 2011,
      },
      {
        event: "Freepistol 25m Colt t.",
        score: 300,
        year: 2012,
      },
      {
        event: "NAIS cal. 22",
        score: 300,
        year: 2013,
      },
      {
        event: "Air-sprint",
        score: "---",
        year: "----",
      },
    ],

    merits: [{
        merit: "Military World Championship",
        results: {
          ind: {
            gold: 3,
            silver: 3,
            bronze: 3,
          },
          team: {
            gold: 3,
            silver: 7,
            bronze: 4,
          },
        },
      },
      {
        merit: "Military Nordic Championship",
        type: "Ind",
        results: {
          ind: {
            gold: 30,
            silver: 14,
            bronze: 9,
          },
          team: {
            gold: 47,
            silver: 13,
            bronze: null,
          },
        },
      },
      {
        merit: "ISSF World Championship",
        results: {
          ind: {
            gold: 1,
            silver: 2,
            bronze: 1,
          },
          team: {
            gold: null,
            silver: 2,
            bronze: null,
          },
        },
      },
      {
        merit: "ESC European Championship",
        results: {
          ind: {
            gold: 2,
            silver: 1,
            bronze: 1,
          },
          team: {
            gold: 5,
            silver: 5,
            bronze: 2,
          },
        },
      },
      {
        merit: "ESC European Cup Final:",
        results: {
          ind: {
            gold: 5,
            silver: 4,
            bronze: 2,
          },
          team: {
            gold: null,
            silver: null,
            bronze: null,
          },
        },
      },
      {
        merit: "ESC European Cup:",
        results: {
          ind: {
            gold: 12,
            silver: 7,
            bronze: 3,
          },
          team: {
            gold: null,
            silver: null,
            bronze: null,
          },
        },
      },
      {
        merit: "Nordic Champion",
        results: {
          ind: {
            gold: 5,
            silver: null,
            bronze: null,
          },
          team: {
            gold: 8,
            silver: null,
            bronze: null,
          },
        },
      },
      {
        merit: "Norwegian Champion",
        results: {
          ind: {
            gold: 144,
            silver: null,
            bronze: null,
          },
          team: {
            gold: 8,
            silver: null,
            bronze: null,
          },
        },
      },
    ],
  },

  {
    id: "mattishembre",
    isShown: true,

    about: {
      firstName: "Mattis",
      lastName: "Hembre",

      birthYear: 2001,
      birthDay: 29,
      birthMonth: 9,
      birthPlace: "Oslo",
    },

    image: {
      mainImage: pictures.mattis.mainImage,
    },

    description: {
      short: "Started his career in 2010",
      long: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde excepturi, quaerat sit quasi recusandae id soluta. Voluptas totam debitis, expedita odit quo voluptatum repellat suscipit animi voluptates! Temporibus, qui?",
    },

    family: {
      children: [],
      parents: ["palhembre"],
      siblings: ["ludvikhembre", "timleohembre", "leonelhembre"],
    },

    memberShip: {
      name: "Bærum PK",
      link: "http://bpk.no/s",
    },

    yearlyStatistics: [
      ["http://fsu.no/issf/2019/sk/st_mattish.htm", "2019"],
      ["http://fsu.no/issf/2018/sk/st_mattish.htm", "2018"],
      ["http://fsu.no/issf/2017/sk/st_mattish.htm", "2017"],
      ["http://fsu.no/issf/2016/sk/st_mattish.htm", "2016"],
      ["http://fsu.no/issf/2015/sk/st_mattish.htm", "2015"],
      ["http://fsu.no/issf/2014/sk/st_mattish.htm", "2014"],
      ["http://fsu.no/issf/2013/sk/st_mattish.htm", "2013"],
      ["http://fsu.no/issf/2012/sk/st_mattish.htm", "2012"],
      ["http://fsu.no/issf/2011/sk/st_mattish.htm", "2011"],
      ["http://fsu.no/issf/2010/sk/st_mattish.htm", "2010"],
    ],
    stasticsLinks: [
      // ['link','navn'],
      ["http://fsu.no/issf/alle/tp/tp_mattish.htm", "Best results"],
      ["http://fsu.no/issf/alle/sn/sn_mattish.htm", "Average"],
      ["http://fsu.no/issf/alle/ant/st_mattish.htm", "Total starts"],
      ["http://www.fsu.no/issf/iaar/sk/st_mattish.htm", "Events this year"],
    ],

    bestStatistics: [{
        event: "Luft 60 skudd",
        score: 582,
        year: 2020,
      },
      {
        event: "Luft 40 skudd",
        score: 386,
        year: 2020,
      },
      {
        event: "Luft-sprint",
        score: 298,
        year: 2020,
      },
      {
        event: "Finpistol",
        score: 578,
        year: 2019,
      },
      {
        event: "Standardpistol",
        score: 559,
        year: 2019,
      },
      {
        event: "Silhuettpistol",
        score: 553,
        year: 2019,
      },
      {
        event: "Fripistol",
        score: 490,
        year: 2019,
      },
      {
        event: "Hurtig Fin",
        score: 582,
        year: 2019,
      },
      {
        event: "Hurtig Grov",
        score: 562,
        year: 2019,
      },
      {
        event: "Grovpistol",
        score: 560,
        year: 2019,
      },
      {
        event: "NAIS Fin",
        score: "---",
        year: "----",
      },
    ],

    merits: [{
        merit: "NM klasse Junior",
        results: {
          ind: {
            gold: 12,
            silver: null,
            bronze: null,
          },
          team: {
            gold: null,
            silver: null,
            bronze: null,
          },
        },
      },
      {
        merit: "NM klasse Ungdom",
        results: {
          ind: {
            gold: 2,
            silver: null,
            bronze: null,
          },
          team: {
            gold: null,
            silver: null,
            bronze: null,
          },
        },
      },
      {
        merit: "Nordisk Felt Jr.",
        results: {
          ind: {
            gold: null,
            silver: null,
            bronze: 1,
          },
          team: {
            gold: null,
            silver: null,
            bronze: null,
          },
        },
      },
    ],
  },

  {
    id: "ludvikhembre",
    isShown: true,

    about: {
      firstName: "Ludvik",
      lastName: "Hembre",

      birthYear: 2001,
      birthDay: 29,
      birthMonth: 9,
      birthPlace: "Oslo",
    },

    image: {
      mainImage: pictures.ludvik.mainImage,
    },

    description: {
      short: "Started his career in 2010",
      long: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde excepturi, quaerat sit quasi recusandae id soluta. Voluptas totam debitis, expedita odit quo voluptatum repellat suscipit animi voluptates! Temporibus, qui?",
    },

    family: {
      children: [],
      parents: ["palhembre"],
      siblings: ["mattishembre", "timleohembre", "leonelhembre"],
    },

    memberShip: {
      name: "Bærum PK",
      link: "http://bpk.no/s",
    },

    yearlyStatistics: [
      ["http://fsu.no/issf/2019/sk/st_ludvikh.htm", "2019"],
      ["http://fsu.no/issf/2018/sk/st_ludvikh.htm", "2018"],
      ["http://fsu.no/issf/2017/sk/st_ludvikh.htm", "2017"],
      ["http://fsu.no/issf/2016/sk/st_ludvikh.htm", "2016"],
      ["http://fsu.no/issf/2015/sk/st_ludvikh.htm", "2015"],
      ["http://fsu.no/issf/2014/sk/st_ludvikh.htm", "2014"],
      ["http://fsu.no/issf/2013/sk/st_ludvikh.htm", "2013"],
      ["http://fsu.no/issf/2012/sk/st_ludvikh.htm", "2012"],
      ["http://fsu.no/issf/2011/sk/st_ludvikh.htm", "2011"],
      ["http://fsu.no/issf/2010/sk/st_ludvikh.htm", "2010"],
    ],
    stasticsLinks: [
      // ['link','navn'],
      ["http://fsu.no/issf/alle/tp/tp_ludvikh.htm", "Best results"],
      ["http://fsu.no/issf/alle/sn/sn_ludvikh.htm", "Average"],
      ["http://fsu.no/issf/alle/ant/st_ludvikh.htm", "Total starts"],
      ["http://www.fsu.no/issf/iaar/sk/st_ludvikh.htm", "Events this year"],
    ],

    bestStatistics: [{
        event: "Luft 40 skudd",
        score: 370,
        year: 2014,
      },
      {
        event: "Luft 60 skudd",
        score: 567,
        year: 2020,
      },
      {
        event: "Fripistol",
        score: 515,
        year: 2019,
      },
      {
        event: "Silhuettpistol",
        score: 559,
        year: 2018,
      },
      {
        event: "Luft-sprint",
        score: 298,
        year: 2020,
      },
      {
        event: "Standardpistol",
        score: 551,
        year: 2017,
      },
      {
        event: "Finpistol",
        score: 570,
        year: 2018,
      },
      {
        event: "Hurtig Fin",
        score: 570,
        year: 2019,
      },
      {
        event: "Hurtig Grov",
        score: 554,
        year: 2018,
      },
      {
        event: "Grovpistol",
        score: 558,
        year: 2018,
      },
      {
        event: "NAIS Fin",
        score: 290,
        year: 2019,
      },
    ],

    merits: [{
        merit: "NM klasse Junior",
        results: {
          ind: {
            gold: 7,
            silver: null,
            bronze: null,
          },
          team: {
            gold: null,
            silver: null,
            bronze: null,
          },
        },
      },
      {
        merit: "NM klasse Ungdom",
        results: {
          ind: {
            gold: 7,
            silver: null,
            bronze: null,
          },
          team: {
            gold: null,
            silver: null,
            bronze: null,
          },
        },
      },
      {
        merit: "Nordisk Felt Jr.",
        results: {
          ind: {
            gold: null,
            silver: 1,
            bronze: null,
          },
          team: {
            gold: null,
            silver: null,
            bronze: null,
          },
        },
      },
    ],
  },

  {
    id: "timleohembre",
    isShown: true,

    about: {
      firstName: "Tim Leo",
      lastName: "Hembre",

      birthYear: 2006,
      birthDay: 27,
      birthMonth: 9,
      birthPlace: "Bærum",
    },

    image: {
      mainImage: pictures.timleo.mainImage,
    },

    description: {
      short: "Started his career in 2014",
      long: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde excepturi, quaerat sit quasi recusandae id soluta. Voluptas totam debitis, expedita odit quo voluptatum repellat suscipit animi voluptates! Temporibus, qui?",
    },

    family: {
      children: [],
      parents: ["palhembre"],
      siblings: ["mattishembre", "ludvikhembre", "leonelhembre"],
    },

    memberShip: {
      name: "Bærum PK",
      link: "http://bpk.no/s",
    },

    yearlyStatistics: [
      ["http://fsu.no/2019/kretser/akershus/klubber/baerumpk/sk/sk-timleoh.htm", "2019", ],
      ["http://fsu.no/2018/kretser/akershus/klubber/baerumpk/sk/sk-timleoh.htm", "2018", ],
      ["http://fsu.no/2017/kretser/akershus/klubber/baerumpk/sk/sk-timleoh.htm", "2017", ],
      ["http://fsu.no/2016/kretser/akershus/klubber/baerumpk/sk/sk-timleoh.htm", "2016", ],
      ["http://fsu.no/2015/kretser/akershus/klubber/baerumpk/sk/sk-timleoh.htm", "2015", ],
      ["http://fsu.no/2014/kretser/akershus/klubber/baerumpk/sk/sk-timleoh.htm", "2014", ],
    ],
    stasticsLinks: [
      // ['link','navn'],
      ["http://fsu.no/issf/alle/tp/tp_timleoh.htm", "Best results"],
      ["http://fsu.no/issf/alle/sn/sn_timleoh.htm", "Average"],
      ["http://fsu.no/issf/alle/ant/st_timleoh.htm", "Total starts"],
      ["http://www.fsu.no/issf/iaar/sk/st_timleoh.htm", "Events this year"],
    ],

    bestStatistics: [{
        event: "Luft 40 skudd",
        score: 366,
        year: 2020,
      },
      {
        event: "Luft 60 skudd",
        score: 515,
        year: 2020,
      },
      {
        event: "Fripistol",
        score: 420,
        year: 2019,
      },
      {
        event: "Silhuettpistol",
        score: 475,
        year: 2020,
      },
      {
        event: "Luft-sprint",
        score: 294,
        year: 2020,
      },
      {
        event: "Standardpistol",
        score: 474,
        year: 2020,
      },
      {
        event: "Finpistol",
        score: 526,
        year: 2020,
      },
      {
        event: "Hurtig Fin",
        score: 535,
        year: 2020,
      },
      {
        event: "Hurtig Grov",
        score: "---",
        year: "----",
      },
      {
        event: "Grovpistol",
        score: "---",
        year: "----",
      },
      {
        event: "NAIS Fin",
        score: "---",
        year: "----",
      },
    ],

    merits: [{
      merit: "NM klasse Ungdom",
      results: {
        ind: {
          gold: 1,
          silver: null,
          bronze: null,
        },
        team: {
          gold: null,
          silver: null,
          bronze: null,
        },
      },
    }, ],
  },

  {
    id: "leonelhembre",
    isShown: false,

    about: {
      firstName: "Leonel",
      lastName: "Hembre",

      birthYear: 2016,
      birthDay: 14,
      birthMonth: 1,
      birthPlace: "The Philippines",
    },

    image: {
      mainImage: pictures.leonel.mainImage,
    },

    description: {
      short: "Has not yet startet his career",
      long: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde excepturi, quaerat sit quasi recusandae id soluta. Voluptas totam debitis, expedita odit quo voluptatum repellat suscipit animi voluptates! Temporibus, qui?",
    },

    family: {
      children: [],
      parents: ["palhembre"],
      siblings: ["mattishembre", "ludvikhembre", "timleohembre"],
    },

    memberShip: {
      name: null,
      link: null,
    },

    yearlyStatistics: [],
    stasticsLinks: [
      // ['link','navn'],
    ],

    bestStatistics: [{
        event: "Luft 40 skudd",
        score: "---",
        year: "----",
      },
      {
        event: "Luft 60 skudd",
        score: "---",
        year: "----",
      },
      {
        event: "Fripistol",
        score: "---",
        year: "----",
      },
      {
        event: "Silhuettpistol",
        score: "---",
        year: "----",
      },
      {
        event: "Luft-sprint",
        score: "---",
        year: "----",
      },
      {
        event: "Standardpistol",
        score: "---",
        year: "----",
      },
      {
        event: "Finpistol",
        score: "---",
        year: "----",
      },
      {
        event: "Hurtig Fin",
        score: "---",
        year: "----",
      },
      {
        event: "Hurtig Grov",
        score: "---",
        year: "----",
      },
      {
        event: "Grovpistol",
        score: "---",
        year: "----",
      },
      {
        event: "NAIS Fin",
        score: "---",
        year: "----",
      },
    ],

    merits: [],
  },
];

const supporters = [{
    name: "Petter Nydalen",
    alder: "Age: 28",
    klubb: "Club: Bærum PK",
    meritter: "Merits: 2 NM gold",
  },
  {
    name: "Ola Nordmann ",
    alder: "Age: 36",
    klubb: "Club: Fredrikstad PK",
    meritter: "Merits: 1 NM gold",
  },
  {
    name: "This can be you!!",
    alder: "Age: --------",
    klubb: "Club: --------",
    meritter: "Merits: --------",
  },
];

const sponsors = [{
    name: "Bækkevolds Våpenservice",
    img: pictures.sponsors.bekkevold,
    link: "https://www.pardininorge.no/",
    text: "The best service you can give your weapons, available in Norway"
  },
  {
    name: "The Oxford Gun Company",
    img: pictures.sponsors.oxford_gun,
    link: "https://www.oxfordguncompany.co.uk/",
    text: "For a great varity of guns, available in Norway and England"

  },
  {
    name: "THIS CAN BE YOUR COMPANY",
    img: pictures.sponsors.ny_spons,
    link: "./contact.html",
    text: " "

  },
];

/* Here you can ad or remove news boxes, or just edit the text and image.  */
const news = [{
    id: 1,
    header: "Hembre domination during Octoberfest",
    text: [
      'Octoberfest in Ørland Pistolklubbs three day pistol festival in Brekstad was struch by a classic case of "Hembre domination".',
      "Pål Hembre went home with first place after he bested the competition in five of eight events. Mattis Hembre won two, while another member of Berum PK, Ingar Woll, also took home a win.",
      "The twins Ludvik and Mattis also won a double in the junior class, while the youngest of the Teams participants, Tim Leo, won a event in the U16 class.",
    ],
    img: pictures.newsImg[0],
  },

  {
    id: 2,
    header: " Hembre boys on top",
    text: [
      "The Hembre twins Ludvik and Mattis take second and first place respectively. The two bring home even more medals for the allready lavish collection of awards.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam sapiente sint vitae esse molestia",
    ],
    img: pictures.newsImg[1],
  },

  {
    id: 3,
    header: "Tripple threat in Bergen",
    text: [
      "Mattis, Ludvik and Pål had an impressive showing in last weeks event in Bergen. The three family members alle won their individual events.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam sapiente sint vitae esse molestia",
    ],
    img: pictures.newsImg[2],
  },
  {
    id: 4,
    header: "Pål with new norwegian championship record",
    text: [
      "Pål takes an impressive new record in the last norwegian championship.",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo ullam sapiente sint vitae esse molestia",
    ],
    img: pictures.newsImg[3],
  }
];
