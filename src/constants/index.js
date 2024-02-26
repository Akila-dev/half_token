import {
	mobile,
	backend,
	web,
	dexscreener,
	dextools,
	coinmarketcap,
	coingecko,
	etherscan,
	git,
	teammate1,
	teammate2,
	teammate3,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "tokenomics",
		title: "Tokenomics",
	},
	{
		id: "roadmap",
		title: "Roadmap",
	},
	{
		id: "contact",
		title: "Contact Us",
	},
];

const tokenomics = [
	{
		title: "Supply",
		value: "21.000.000",
		icon: web,
	},
	{
		title: "Contract",
		value: "0x545ee39b788d4d6C294A2BB5c85C5F7627c0Be88",
		icon: mobile,
	},
	{
		title: "Symbol",
		value: "$HALVING",
		icon: backend,
	},
];

const LOGOS = [
	{
		name: "Coinmarketcap",
		icon: coinmarketcap,
	},
	{
		name: "Coingecko",
		icon: coingecko,
	},
	{
		name: "Dexscreener",
		icon: dexscreener,
	},
	{
		name: "Dextools",
		icon: dextools,
	},
	{
		name: "Etherscan",
		icon: etherscan,
	},
	{
		name: "Github",
		icon: git,
	},
];

const roadmap = [
	{
		title: "Phase 1",
		subheading: "Launch Sequence",
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			" Deploy Contract",
			"Launch",
			"Achieve 200 Holders",
			"Establish Social Networks",
			"Update Dextools",
			"Execute Half Token Phase 1",
		],
	},
	{
		title: "Phase 2",
		subheading: "Growth Phase",
		iconBg: "#383E56",
		date: "Jan 2021 - Feb 2022",
		points: [
			" Engage Influencers",
			"Undergo Contract Audit",
			"Trend on Twitter",
			"Attain Listings on Coingecko and CoinMarketCap",
			"Reach 1000 Holders",
			"Implement Half Token Phase 2",
		],
	},
	{
		title: "Phase 3",
		subheading: "Expansion  Phase",
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Surpass 2500 Holders",
			"Achieve 5M Market Cap",
			"Trend on Dexstools",
			"Secure CEX Listing",
			"Conduct  Giveaways",
			"Trend on Coingecko Trending and CoinMarketCap",
			"Initiate Half Token Phase 3",
		],
	},
	{
		title: "Phase 4",
		subheading: "Maturity Phase",
		iconBg: "#383E56",
		date: "Jan 2023 - Present",
		points: [
			"Facilitate Buy Contests",
			"Perform Regular Burns",
			"Forge Partnerships",
			"Sustain Marketing Initiatives",
			"Maintain Community Engagement",
			"Pursue Further Listings",
			"Advance Half Token Phase 4",
		],
	},
];

const team = [
	{
		name: "CryptoPioneer",
		designation: "Marketing Lead",
		image: teammate1,
	},
	{
		name: "EthanBlockchain",
		designation: "Technical Co-Lead",
		image: teammate2,
	},
	{
		name: "SatoshiVisionary",
		designation: "innovation Co-Lead",
		image: teammate3,
	},
];

const ABOUT = [
	{
		title: "Section 1: Demystifying  Bitcoin Halving",
		content: [
			"Bitcoin Halving is a pivotal event that occurs every four years, cutting the reward for mining new Bitcoin blocks in half. This supply reduction often leads to notable market movements, with each halving eagerly awaited. The 2024 Halving promises to be a game-changer, and the HALVING Token signifies this key milestone.",
		],
		listHeader: "",
		list: [],
	},
	{
		title: "Section 2: Unveiling the HALVING Token",
		content: [
			"The HALVING Token embodies the spirit of the crypto halving events. Paying homage to these vital occurrences, it combines Ethereum’s adaptability with Bitcoin’s storied heritage.",
		],
		listHeader: "Key Features:",
		list: [
			"Fixed Supply: Capped at 21 million tokens, echoing Bitcoin’s iconic supply limit.",
			"Deflationary Mechanism: Features an aggressive token burn strategy, aiming to gradually diminish supply and potentially boost value.",
		],
	},
	{
		title: "Section 3: Advantages of Choosing HALVING Token?",
		content: [
			"TThe HALVING Token is more than a digital asset; it's a testament to your involvement in a landmark crypto event.",
		],
		listHeader: "",
		list: [
			"Celebrate the Halving Phenomenon: With the crypto community abuzz for the 2024 Halving, HALVING offers an exclusive opportunity to engage with this anticipation.",
			"A Beacon of Scarcity and Worth: Embracing the fundamental tenets of cryptocurrency economics, the deflationary aspect of HALVING positions it as a valuable asset in the digital currency evolution.",
		],
	},
	{
		title: "Section 4: Engaging with HALVING Token",
		content: [
			"Embarking on the HALVING journey is simple. Secure HALVING Tokens via a decentralized exchange and join a community that's eagerly anticipating the next major cryptocurrency surge.",
		],
		listHeader: "",
		list: [],
	},
	{
		title: "Conclusion",
		content: [
			"The 2024 Bitcoin Halving is poised to be a monumental event in the cryptocurrency realm, and the HALVING Token offers you a chance to be part of this thrilling epoch. As the countdown to this historic occasion continues, HALVING stands as a tribute to the innovation and enthusiasm of the crypto community.",
		],
		listHeader: "",
		list: [],
	},
];

export { tokenomics, LOGOS, roadmap, team, ABOUT };
