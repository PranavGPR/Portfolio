import { useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

import styles from './scrolltotopbutton.module.scss';

export default function ScrollToTopButton() {
	const [toggleClass, setToggleClass] = useState(false);

	const toggleVisible = () => {
		const rootElement = document.documentElement;

		let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

		if (rootElement.scrollTop / scrollTotal > 0.04) {
			setToggleClass(true);
		} else {
			setToggleClass(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<div className={styles.button_container}>
			<button
				className={styles.button}
				onClick={scrollToTop}
				style={toggleClass ? { opacity: 1 } : { opacity: 0 }}
			>
				<AiOutlineArrowUp className={styles.button_icon} />
			</button>
		</div>
	);
}
