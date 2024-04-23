import { create } from "zustand";

const ClientID = "d5dd08dd0c134753938cf2e40ebfb597";
const ClientSecret = "e07ac3a41f604a2f92387f1b8288ce01";

const getToken = async () => {
	try {
		const res = await fetch("https://accounts.spotify.com/api/token", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: "Basic " + btoa(ClientID + ":" + ClientSecret),
			},
			body: "grant_type=client_credentials",
		});
		const data = await res.json();
		localStorage.setItem(
			"access_token",
			`${data.token_type} ${data.access_token}`
		);
	} catch (error) {
		console.log(error.message);
	}
};

////// HOME HERO PLAYLISTS /////////////////////////
const getPlaylists = async (set) => {
	set((state) => ({
		...state,
		loading: true,
	}));
	try {
		const res = await fetch(
			"https://api.spotify.com/v1/browse/featured-playlists?limit=6",
			{
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("access_token"),
				},
			}
		);
		const data = await res.json();
		set((state) => ({
			...state,
			mixes: data.playlists.items,
			loading: false,
		}));
	} catch (error) {
		console.log(error.message);
	}
};

////// ASIDE LEFT PLAYLIST NAMES /////////////////////////
const getPlaylistNames = async (set) => {
	set((state) => ({
		...state,
		loading: true,
	}));
	try {
		const res = await fetch(
			"https://api.spotify.com/v1/browse/featured-playlists?limit=13",
			{
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("access_token"),
				},
			}
		);
		const data = await res.json();
		set((state) => ({
			...state,
			mixesNames: data.playlists.items,
			loading: false,
		}));
	} catch (error) {
		console.log(error.message);
	}
};

////// YOUR TOP MIXES /////////////////////////
const yourTopMixes = async (set) => {
	set((state) => ({
		...state,
		loading: true,
	}));
	try {
		const res = await fetch(
			"https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=4",
			{
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("access_token"),
				},
			}
		);
		const data = await res.json();
		set((state) => ({
			...state,
			topMixes: data.playlists.items,
			loading: false,
		}));
	} catch (error) {
		console.log(error.message);
	}
};

////// MADE FOR YOU /////////////////////////
const madeForYou = async (set) => {
	set((state) => ({
		...state,
		loading: true,
	}));
	try {
		const res = await fetch(
			"https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists?limit=4",
			{
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("access_token"),
				},
			}
		);
		const data = await res.json();
		set((state) => ({
			...state,
			madeforyou: data.playlists.items,
			loading: false,
		}));
	} catch (error) {
		console.log(error.message);
	}
};

////// RECENTLY PLAYED /////////////////////////
const recentlyPlayed = async (set) => {
	set((state) => ({
		...state,
		loading: true,
	}));
	try {
		const res = await fetch(
			"https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFQ00XGBls6ym/playlists?limit=4",
			{
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("access_token"),
				},
			}
		);
		const data = await res.json();
		set((state) => ({
			...state,
			recentlyplayed: data.playlists.items,
			loading: false,
		}));
	} catch (error) {
		console.log(error.message);
	}
};

////// JUMP BACK IN /////////////////////////
const jumpBackIn = async (set) => {
	set((state) => ({
		...state,
		loading: true,
	}));
	try {
		const res = await fetch(
			"https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFLVaM30PMBm4/playlists?limit=4",
			{
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("access_token"),
				},
			}
		);
		const data = await res.json();
		set((state) => ({
			...state,
			jumpbackin: data.playlists.items,
			loading: false,
		}));
	} catch (error) {
		console.log(error.message);
	}
};

////// UNIQUELY YOURS /////////////////////////
const uniquelyYours = async (set) => {
	set((state) => ({
		...state,
		loading: true,
	}));
	try {
		const res = await fetch(
			"https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFCbimwdOYlsl/playlists?limit=4",
			{
				method: "GET",
				headers: {
					Authorization: localStorage.getItem("access_token"),
				},
			}
		);
		const data = await res.json();
		set((state) => ({
			...state,
			uniquelyyours: data.playlists.items,
			loading: false,
		}));
	} catch (error) {
		console.log(error.message);
	}
};

const mixStore = (set) => ({
	loading: false,
	mixes: [],
	mixesNames: [],
	topMixes: [],
	madeforyou: [],
	recentlyplayed: [],
	jumpbackin: [],
	uniquelyyours: [],
	error: "",
	getPlaylistNames: () => getPlaylistNames(set),
	getPlaylists: () => getPlaylists(set),
	getToken: () => getToken(),
	yourTopMixes: () => yourTopMixes(set),
	madeForYou: () => madeForYou(set),
	recentlyPlayed: () => recentlyPlayed(set),
	jumpBackIn: () => jumpBackIn(set),
	uniquelyYours: () => uniquelyYours(set),
});

export const useMixesStore = create(mixStore);
