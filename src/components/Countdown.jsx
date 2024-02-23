import React, { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";

const COUNTDOWN_TARGET = new Date("2024-03-31T07:29:59");

const getTimeLeft = () => {
	const totalTimeLeft = COUNTDOWN_TARGET - new Date();
	const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24)); //1000 stands for the number of a millisecd in a second
	const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
	const seconds = Math.floor((totalTimeLeft / 1000) % 60);

	return { days, hours, minutes, seconds };
};

const Countdown = () => {
	const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeLeft());
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className="-mb-[50px] green-orange-gradient p-[1px] rounded-2xl shadow-card">
			<div className="flex items-center justify-center gap-3 md:gap-7 bg-black-100 px-4 rounded-2xl">
				{Object.entries(timeLeft).map((el) => {
					const label = el[0];
					const value = el[1];

					return (
						<div key={label} className="countdown-box flex-1">
							<div className="w-full green-orange-gradient p-[1px] rounded-xl shadow-car">
								<div className="countdown-value">
									<span>{value}</span>
									<span className="countdown-line"></span>
									<span className="countdown-side"></span>
								</div>
							</div>
							<div className="countdown-label">{label}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SectionWrapper(Countdown, "");
