import { useState } from 'react';
import Star from '../../res/svg/Star';
import './Header.scss'
import Modal from '../Modal';
import Spin from '../../res/svg/Spin';

interface IHeader {
	last_name: string,
	first_name: string
}

const Header = (props: IHeader): JSX.Element => {
	const [isOpen, setIsOpen] = useState(false)
	const { last_name, first_name } = props;
	return (
		<div className='d-flex header d-center'>
			<div className="header__logo d-flex">
				<Star width={28} height={25} />
				<div className="header__name">
					{first_name} {last_name}
				</div>
			</div>

			<button className='header__button' onClick={() => setIsOpen(true)}>
				New Order
			</button>

			<Modal isOpen={isOpen} onClickClose={() => setIsOpen(false)}>
				<div className="d-flex d-column d-center modal-container">
					<div className="spinner">
						<Spin width={75} height={75} fill='#EEEEEE' />
					</div>
					<div className='process'>Processing</div>
				</div>
			</Modal>
		</div>
	)
}

export default Header;