import state from '../state';
import { useRef } from 'react';

const pos = {
	0: {
		cameraPos: [7, 0, 7],
		target: [0, 0, 0],
	},
	1: {
		cameraPos: [0, 3, 10],
		target: [1, -2, 0],
	},
	2: {
		cameraPos: [-7, -1, 7],
		target: [0, 0, 0],
	},
	3: {
		cameraPos: [-9, 0, -2],
		target: [0, 0, 0],
	},
	4: {
		cameraPos: [-1, 2, -4],
		target: [0, 1, 0],
	},
	5: {
		cameraPos: [6, 1, -2],
		target: [1, 0, 0],
	},
};

function CameraBtns(props) {
	const btns = useRef(null);

	const handleClick = (index) => {
		const btns_li = btns.current.querySelectorAll('li');
		for (const btn of btns_li) btn.classList.remove('on');
		btns_li[index].classList.add('on');

		state.cameraPos.set(...pos[index].cameraPos);
		state.target.set(...pos[index].target);
		state.shouldUpdate = true;
		props.setIndex(index);
	};

	return (
		<ul className='cameraBtns' ref={btns}>
			<li className='on' onClick={() => handleClick(0)}>
				Consect
			</li>
			<li onClick={() => handleClick(1)}>Dolor</li>
			<li onClick={() => handleClick(2)}>Lorem</li>
			<li onClick={() => handleClick(3)}>Sit amet</li>
			<li onClick={() => handleClick(4)}>Adipisic</li>
			<li onClick={() => handleClick(5)}>Corporis</li>
		</ul>
	);
}

export default CameraBtns;
