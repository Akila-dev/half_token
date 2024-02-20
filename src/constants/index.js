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
	meta,
	starbucks,
	tesla,
	shopify,
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
		value: "$HLVG",
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
		company_name: "Initialization Phase",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			" Deploy Contract",
			"Launch",
			"200 Holders",
			"Create Social Networks",
			"Dextools Updated",
		],
	},
	{
		title: "Phase 2",
		company_name: "Second Phase",
		icon: tesla,
		iconBg: "#383E56",
		date: "Jan 2021 - Feb 2022",
		points: [
			" Influencers Marketing Push",
			"Contract Audit",
			"Twitter Trending",
			" Listing on Coingecko",
			"Listing on CoinMarketCap",
			"1000 Holders",
		],
	},
	{
		title: "Phase 3",
		company_name: "Third Phase",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"2500 Holders",
			"5M Market Cap",
			"Dexstools Trending",
			"CEX Listing",
			"Giveaways",
			"Coingecko Trending",
			"CoinMarketCap Trending",
		],
	},
	{
		title: "Phase 4",
		company_name: "Completion Phase",
		icon: meta,
		iconBg: "#383E56",
		date: "Jan 2023 - Present",
		points: [
			"Buy Contests",
			"Regular Burns",
			"Partnerships",
			"Ongoing Marketing Efforts",
			"Continuous Community Engagement",
			"Further Listings",
		],
	},
];

const team = [
	{
		name: "BTCMAxi",
		designation: "Marketing",
		image: teammate1,
	},
	{
		name: "Micke B",
		designation: "Co-Dev",
		image: teammate2,
	},
	{
		name: "Halving Master",
		designation: "Co-Dev",
		image: teammate3,
	},
];

const collapsible = [
	{
		title: "Section 1: Understanding Bitcoin Halving",
		content: [
			"The Bitcoin Halving is a landmark event occurring every four years that halves the reward for mining new Bitcoin blocks. This reduction in supply has historically triggered significant market movements, making each halving a highly anticipated event. The 2024 Halving is set to be a game-changer, and HLVG Token is here to mark this milestone.",
		],
		listHeader: "",
		list: [],
	},
	{
		title: "Section 2: Introducing the HLVG Token",
		content: [
			"Section 2: Introducing the HLVG Token",
			"HLVG Token symbolizes the essence of the crypto halving phenomenon. As a tribute to these crucial events, it aligns with Ethereum’s versatility and Bitcoin’s legacy.",
		],
		listHeader: "Key Features",
		list: [
			"Fixed Supply: A total of 21 million tokens, mirroring the iconic Bitcoin supply cap.",
			"Deflationary Design: Incorporates a rigorous burning mechanism to reduce token supply over time, potentially enhancing its value.",
		],
	},
	{
		title: "Section 3: How Does HLVG Token Work?",
		content: [
			"The HLVG Token operates with a unique economic model to ensure its value and scarcity:",
		],
		listHeader: "",
		list: [
			"Transaction Burns: For each buy transaction, 1% of HLVG tokens are burnt, and for each sell transaction, 2% are burnt. These tokens are sent to a dead address, permanently reducing the total supply and mimicking the scarcity effect of Bitcoin halvings.",
			"Auto Liquidity Contribution: Each transaction contributes 1/2% of the tokens to the liquidity pool automatically. This mechanism helps in maintaining liquidity and price stability.",
			"Marketing Allocation: An additional 1/2% of each transaction is allocated for marketing purposes, supporting the growth and outreach of HLVG.",
			"Pre-Halving Lockup and Burn: A significant portion, 20% of HLVG tokens, will be locked up until the Bitcoin halving event. Upon the halving date, these tokens will be withdrawn and burnt, emphasizing the scarcity and value proposition of the HLVG Token in alignment with Bitcoin’s halving cycle.",
		],
	},
	{
		title: "Section 4: Why Choose HLVG Token?",
		content: [
			"HLVG Token isn’t just a digital asset; it’s a symbol of your participation in a key crypto event.",
		],
		listHeader: "",
		list: [
			"Embrace the Halving Excitement: As the crypto world buzzes with anticipation for the 2024 Halving, HLVG offers a unique way to be part of this excitement.",
			"A Symbol of Scarcity and Value: Reflecting the core principles of crypto economics, HLVG’s deflationary nature positions it as a potentially valuable asset in the evolving digital currency landscape.",
		],
	},
	{
		title: "Section 5: Getting Started with HLVG Token",
		content: [
			"Joining the HLVG movement is straightforward. Acquire HLVG Tokens through a decentralized exchange, and become part of a community eagerly awaiting the next big wave in cryptocurrency.",
		],
		listHeader: "",
		list: [],
	},
	{
		title: "",
		content: [
			"The 2024 Bitcoin Halving is set to be a landmark event in the cryptocurrency world, and HLVG Token is your opportunity to be part of this exciting journey. As we count down to this historic moment, HLVG stands as a testament to the innovation and spirit of the crypto community.",
		],
		listHeader: "",
		list: [],
	},
];

export { tokenomics, LOGOS, roadmap, team };
