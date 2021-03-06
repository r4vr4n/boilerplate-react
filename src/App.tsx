import { ThemeProvider } from "@mui/material/styles";
import Navigation from "components/navigation/Navigation";
import { Outlet } from "react-location";

import { useAppSelector } from "store";
import { appDataInReduxStore } from "store/app/appSlice";

import { darkTheme, lightTheme } from "theme/Theme";

const App = () => {
	const { isDarkModeActive } = useAppSelector(appDataInReduxStore);
	return (
		<ThemeProvider theme={isDarkModeActive ? darkTheme : lightTheme}>
			<Navigation>
				{/* Outlet is window where all the components will get render by react-location */}
				<Outlet />
			</Navigation>
		</ThemeProvider>
	);
};

export default App;
