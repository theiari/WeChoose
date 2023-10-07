export interface Idea {
  id: number;
  author: string;
  title: string;
  description: string;
  dateCreated: Date;
  dateVotingTimeout: Date;
  votes: number;
  validated: boolean;
  approved: boolean;
  link: string;
}

export const votingIdeas: Idea[] = [
  {
    id: 1,
    author: "John Doe",
    title: "Building a new hospital",
    description: "We need a new hospital in the city to improve healthcare services",
    dateCreated: new Date("2021-10-26"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea1",
  },
  {
    id: 2,
    author: "Jane Smith",
    title: "Improving public transportation",
    description: "We need to improve public transportation to reduce traffic congestion",
    dateCreated: new Date("2021-10-27"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea2",
  },
  {
    id: 3,
    author: "Bob Johnson",
    title: "Building more bike lanes",
    description: "We need more bike lanes to encourage cycling and reduce air pollution",
    dateCreated: new Date("2021-10-28"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea3",
  },
  {
    id: 4,
    author: "Alice Lee",
    title: "Building a new sports complex",
    description: "We need a new sports complex to improve sports services in the state",
    dateCreated: new Date("2021-10-29"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea4",
  },
  {
    id: 5,
    author: "Tom Wilson",
    title: "Building a new swimming pool",
    description: "We need a new swimming pool to improve sports services in the state",
    dateCreated: new Date("2021-10-30"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea5",
  },
  {
    id: 6,
    author: "Samantha Brown",
    title: "Building a new gym",
    description: "We need a new gym to improve sports services in the state",
    dateCreated: new Date("2021-10-31"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea6",
  },
  {
    id: 7,
    author: "David Kim",
    title: "Building a new museum",
    description: "We need a new museum to improve cultural services in the city",
    dateCreated: new Date("2021-11-01"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea7",
  },
  {
    id: 8,
    author: "Emily Chen",
    title: "Building a new art gallery",
    description: "We need a new art gallery to improve cultural services in the city",
    dateCreated: new Date("2021-11-02"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea8",
  },
  {
    id: 9,
    author: "Michael Davis",
    title: "Building a new theater",
    description: "We need a new theater to improve cultural services in the city",
    dateCreated: new Date("2021-11-03"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea9",
  },
  {
    id: 10,
    author: "Sarah Wilson",
    title: "Building a new business incubator",
    description: "We need a new business incubator to improve business services in the region",
    dateCreated: new Date("2021-11-04"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea10",
  },
  {
    id: 11,
    author: "Chris Lee",
    title: "Providing grants for small businesses",
    description: "We need to provide grants for small businesses to improve business services in the region",
    dateCreated: new Date("2021-11-05"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea11",
  },
  {
    id: 12,
    author: "Jessica Brown",
    title: "Building a new co-working space",
    description: "We need a new co-working space to improve business services in the region",
    dateCreated: new Date("2021-11-06"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea12",
  },
  {
    id: 13,
    author: "Mark Johnson",
    title: "Providing subsidies for farmers",
    description: "We need to provide subsidies for farmers to improve agriculture services in the state",
    dateCreated: new Date("2021-11-07"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea13",
  },
  {
    id: 14,
    author: "Olivia Davis",
    title: "Building a new farmers market",
    description: "We need a new farmers market to improve agriculture services in the state",
    dateCreated: new Date("2021-11-08"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea14",
  },
  {
    id: 15,
    author: "William Kim",
    title: "Building a new agricultural research center",
    description: "We need a new agricultural research center to improve agriculture services in the state",
    dateCreated: new Date("2021-11-09"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea15",
  },

  {
    id: 16,
    author: "0x1234567890123456789012345678901234567890",
    title: "Building a new 5G network",
    description: "We need a new 5G network to improve communication services in the city",
    dateCreated: new Date("2021-11-10"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea16",
  },
  {
    id: 17,
    author: "0x1234567890123456789012345678901234567890",
    title: "Building a new public Wi-Fi network",
    description: "We need a new public Wi-Fi network to improve communication services in the city",
    dateCreated: new Date("2021-11-11"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea17",
  },
  {
    id: 18,
    author: "0x3456789012345678901234567890123456789012",
    title: "Building a new 4G network",
    description: "We need a new 4G network to improve communication services in the city",
    dateCreated: new Date("2021-11-12"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea18",
  },
  {
    id: 19,
    author: "0x4567890123456789012345678901234567890123",
    title: "Building a new courthouse",
    description: "We need a new courthouse to improve justice services in the region",
    dateCreated: new Date("2021-11-13"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea19",
  },
  {
    id: 20,
    author: "0x5678901234567890123456789012345678901234",
    title: "Hiring more judges",
    description: "We need to hire more judges to improve justice services in the region",
    dateCreated: new Date("2021-11-14"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea20",
  },
  {
    id: 21,
    author: "0x6789012345678901234567890123456789012345",
    title: "Building a new prison",
    description: "We need a new prison to improve justice services in the region",
    dateCreated: new Date("2021-11-15"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea21",
  },
  {
    id: 22,
    author: "0x7890123456789012345678901234567890123456",
    title: "Building a new immigration center",
    description: "We need a new immigration center to improve immigration services in the state",
    dateCreated: new Date("2021-11-16"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea22",
  },
  {
    id: 23,
    author: "0x8901234567890123456789012345678901234567",
    title: "Hiring more immigration officers",
    description: "We need to hire more immigration officers to improve immigration services in the state",
    dateCreated: new Date("2021-11-17"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea23",
  },
  {
    id: 24,
    author: "0x9012345678901234567890123456789012345678",
    title: "Building a new refugee center",
    description: "We need a new refugee center to improve immigration services in the state",
    dateCreated: new Date("2021-11-18"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea24",
  },
  {
    id: 25,
    author: "0x0123456789012345678901234567890123456789",
    title: "Building a new homeless shelter",
    description: "We need a new homeless shelter to improve social services in the city",
    dateCreated: new Date("2021-11-19"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea25",
  },
  {
    id: 26,
    author: "0x1234567890123456789012345678901234567890",
    title: "Providing free meals for low-income families",
    description: "We need to provide free meals for low-income families to improve social services in the city",
    dateCreated: new Date("2021-11-20"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea26",
  },
  {
    id: 27,
    author: "0x2345678901234567890123456789012345678901",
    title: "Building a new community center",
    description: "We need a new community center to improve social services in the city",
    dateCreated: new Date("2021-11-21"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea27",
  },
  {
    id: 28,
    author: "0x3456789012345678901234567890123456789012",
    title: "Building a new fire station",
    description: "We need a new fire station to improve emergency services in the region",
    dateCreated: new Date("2021-11-22"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea28",
  },
  {
    id: 29,
    author: "0x4567890123456789012345678901234567890123",
    title: "Hiring more firefighters",
    description: "We need to hire more firefighters to improve emergency services in the region",
    dateCreated: new Date("2021-11-23"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea29",
  },
  {
    id: 30,
    author: "0x5678901234567890123456789012345678901234",
    title: "Building a new emergency response center",
    description: "We need a new emergency response center to improve emergency services in the region",
    dateCreated: new Date("2021-11-24"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 0,
    validated: true,
    approved: false,
    link: "https://example.com/idea30",
  },
];

export const approvedIdeas: Idea[] = [
  {
    id: 1,
    author: "0x0123456789012345678901234567890123456789",
    title: "Building a new school",
    description: "We need a new school to improve education in the region",
    dateCreated: new Date("2021-11-01"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 10,
    validated: true,
    approved: true,
    link: "https://example.com/idea1",
  },
  {
    id: 2,
    author: "0x1234567890123456789012345678901234567890",
    title: "Hiring more teachers",
    description: "We need to hire more teachers to improve education in the region",
    dateCreated: new Date("2021-11-02"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 8,
    validated: true,
    approved: true,
    link: "https://example.com/idea2",
  },
  {
    id: 3,
    author: "0x2345678901234567890123456789012345678901",
    title: "Providing free school supplies",
    description: "We need to provide free school supplies to improve education in the region",
    dateCreated: new Date("2021-11-03"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 5,
    validated: true,
    approved: true,
    link: "https://example.com/idea3",
  },
  {
    id: 4,
    author: "0x3456789012345678901234567890123456789012",
    title: "Building a new hospital",
    description: "We need a new hospital to improve healthcare in the region",
    dateCreated: new Date("2021-11-04"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 12,
    validated: true,
    approved: true,
    link: "https://example.com/idea4",
  },
  {
    id: 5,
    author: "0x4567890123456789012345678901234567890123",
    title: "Hiring more doctors",
    description: "We need to hire more doctors to improve healthcare in the region",
    dateCreated: new Date("2021-11-05"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 9,
    validated: true,
    approved: true,
    link: "https://example.com/idea5",
  },
  {
    id: 6,
    author: "0x5678901234567890123456789012345678901234",
    title: "Providing free healthcare for low-income families",
    description: "We need to provide free healthcare for low-income families to improve healthcare in the region",
    dateCreated: new Date("2021-11-06"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 7,
    validated: true,
    approved: true,
    link: "https://example.com/idea6",
  },
  {
    id: 7,
    author: "0x6789012345678901234567890123456789012345",
    title: "Building a new park",
    description: "We need a new park to improve recreation in the city",
    dateCreated: new Date("2021-11-07"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 15,
    validated: true,
    approved: true,
    link: "https://example.com/idea7",
  },
  {
    id: 8,
    author: "0x7890123456789012345678901234567890123456",
    title: "Building a new community garden",
    description: "We need a new community garden to improve recreation in the city",
    dateCreated: new Date("2021-11-08"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 6,
    validated: true,
    approved: true,
    link: "https://example.com/idea8",
  },
  {
    id: 9,
    author: "0x8901234567890123456789012345678901234567",
    title: "Providing free sports equipment",
    description: "We need to provide free sports equipment to improve recreation in the city",
    dateCreated: new Date("2021-11-09"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 4,
    validated: true,
    approved: true,
    link: "https://example.com/idea9",
  },
  {
    id: 10,
    author: "0x9012345678901234567890123456789012345678",
    title: "Building a new road",
    description: "We need a new road to improve transportation in the region",
    dateCreated: new Date("2021-11-10"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 11,
    validated: true,
    approved: true,
    link: "https://example.com/idea10",
  },
  {
    id: 11,
    author: "0x0123456789012345678901234567890123456789",
    title: "Building a new bridge",
    description: "We need a new bridge to improve transportation in the region",
    dateCreated: new Date("2021-11-11"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 8,
    validated: true,
    approved: true,
    link: "https://example.com/idea11",
  },
  {
    id: 12,
    author: "0x1234567890123456789012345678901234567890",
    title: "Building a new bike lane",
    description: "We need a new bike lane to improve transportation in the region",
    dateCreated: new Date("2021-11-12"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 6,
    validated: true,
    approved: true,
    link: "https://example.com/idea12",
  },
  {
    id: 13,
    author: "0x2345678901234567890123456789012345678901",
    title: "Building a new wastewater treatment plant",
    description: "We need a new wastewater treatment plant to improve sanitation in the region",
    dateCreated: new Date("2021-11-13"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 9,
    validated: true,
    approved: true,
    link: "https://example.com/idea13",
  },
  {
    id: 14,
    author: "0x3456789012345678901234567890123456789012",
    title: "Building a new landfill",
    description: "We need a new landfill to improve sanitation in the region",
    dateCreated: new Date("2021-11-14"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 5,
    validated: true,
    approved: true,
    link: "https://example.com/idea14",
  },
  {
    id: 15,
    author: "0x4567890123456789012345678901234567890123",
    title: "Providing free garbage pickup",
    description: "We need to provide free garbage pickup to improve sanitation in the region",
    dateCreated: new Date("2021-11-15"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 7,
    validated: true,
    approved: true,
    link: "https://example.com/idea15",
  },
  {
    id: 16,
    author: "0x5678901234567890123456789012345678901234",
    title: "Building a new library",
    description: "We need a new library to improve access to information in the region",
    dateCreated: new Date("2021-11-16"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 12,
    validated: true,
    approved: true,
    link: "https://example.com/idea16",
  },
  {
    id: 17,
    author: "0x6789012345678901234567890123456789012345",
    title: "Hiring more librarians",
    description: "We need to hire more librarians to improve access to information in the region",
    dateCreated: new Date("2021-11-17"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 6,
    validated: true,
    approved: true,
    link: "https://example.com/idea17",
  },
  {
    id: 18,
    author: "0x7890123456789012345678901234567890123456",
    title: "Providing free internet access",
    description: "We need to provide free internet access to improve access to information in the region",
    dateCreated: new Date("2021-11-18"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 4,
    validated: true,
    approved: true,
    link: "https://example.com/idea18",
  },
  {
    id: 19,
    author: "0x8901234567890123456789012345678901234567",
    title: "Building a new police station",
    description: "We need a new police station to improve public safety in the region",
    dateCreated: new Date("2021-11-19"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 10,
    validated: true,
    approved: true,
    link: "https://example.com/idea19",
  },
  {
    id: 20,
    author: "0x9012345678901234567890123456789012345678",
    title: "Hiring more police officers",
    description: "We need to hire more police officers to improve public safety in the region",
    dateCreated: new Date("2021-11-20"),
    dateVotingTimeout: new Date("2023-12-26"),
    votes: 8,
    validated: true,
    approved: true,
    link: "https://example.com/idea20",
  },
];