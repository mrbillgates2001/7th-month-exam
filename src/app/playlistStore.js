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

const openPlayList = async (set) => {
	try {
		const res = await fetch(
			`https://api.spotify.com/v1/browse/featured-playlists/${id}`,
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
			playlist: data.playlists.items,
		}));
	} catch (error) {}
};

const playlistStore = (set) => ({
	playlist: [],
	getToken: () => getToken(),
	openPlayList: () => openPlayList(set),


	likedMusic: [],
	addToCart: (musiqa) => {
		set((state) => ({
			...state,
			cart: [...state.likedMusic, musiqa],
		}));
	},
	removeFromCart: (musicID) => {
		set((state) => ({
			...state,
			likedMusic: state.likedMusic.filter((musiqa) => musiqa.id !== musicID),
		}));
	},
	clearCart: () => {
		set((state) => ({
			...state,
			likedMusic: [],
		}));
	},
});

export const usePlaylistStore = create(playlistStore);
