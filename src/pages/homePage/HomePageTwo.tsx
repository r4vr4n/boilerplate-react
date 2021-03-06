import { Button } from "@mui/material";
import { TestImage } from "assets";
import { useAppDispatch, useAppSelector } from "store";
import { appDataInReduxStore, testReducer } from "store/app/appSlice";
import { useState } from "react";
import PositionedSnackbar from "common/mui/PositionedSnackbar";

const HomePageTwo = () => {
	const dispatch = useAppDispatch();
	const { welcomeText } = useAppSelector(appDataInReduxStore);
	const [open, setOpen] = useState(false);

	return (
		<>
			This is home page <b> TWO </b> of the app Welcome to boilerplate code for
			react with TS + react-query + redux-toolkit + mui.
			<h1>{welcomeText}</h1>
			<Button onClick={() => dispatch(testReducer())}>
				Test if reducer is working or not
			</Button>
			<img src={TestImage} alt='testImage' height='100%' width='100%' />
			<Button onClick={() => setOpen(!open)}> Check snackbar</Button>
			<PositionedSnackbar
				message='Success: Snackbar is working!'
				severity='success'
				open={open}
				setOpen={setOpen}
			/>
		</>
	);
};

export default HomePageTwo;
