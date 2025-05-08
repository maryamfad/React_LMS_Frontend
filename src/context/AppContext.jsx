import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
	const value = {};
	return (
		<AppContext.Provider value={value}>
			{props.childern}
		</AppContext.Provider>
	);
};
