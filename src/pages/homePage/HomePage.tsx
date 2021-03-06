import { Button, AlertColor } from "@mui/material";
import { TestImage } from "assets";
import { useAppDispatch, useAppSelector } from "store";
import { appDataInReduxStore, testReducer } from "store/app/appSlice";
import { useState } from "react";
import PositionedSnackbar from "common/mui/PositionedSnackbar";

import { useApiTest } from "hooks/useApiTest";

type PromiseType = {
	a: {};
	b: {};
};

const HomePage = () => {
	const dispatch = useAppDispatch();
	const { welcomeText } = useAppSelector(appDataInReduxStore);
	const [open, setOpen] = useState(false);
	const [severity, setSeverity] = useState<AlertColor | "success">("success");
	const [message, setMessage] = useState("");

	const onSuccess = (a: PromiseType) => {
		setOpen(true);
		setSeverity("success");
		setMessage("Axios request successful check react-query-dev-tool!");
	};

	const onError = (b: PromiseType) => {
		setOpen(true);
		setSeverity("error");
		setMessage("Axios request failed react-query-dev-tool!");
	};

	useApiTest({
		onSuccess,
		onError,
	});

	return (
		<>
			This is home page <b>ONE</b> of the app Welcome to boilerplate code for
			react with TS + react-query + redux-toolkit + mui.
			<h1>{welcomeText}</h1>
			<Button onClick={() => dispatch(testReducer())}>
				Test if reducer is working or not
			</Button>
			<img src={TestImage} alt='testImage' height='100%' width='100%' />
			<PositionedSnackbar
				message={message}
				severity={severity}
				open={open}
				setOpen={setOpen}
			/>
		</>
	);
};

export default HomePage;
