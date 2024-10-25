import React from 'react';

import ArrowRight from '../../assets/icons/arrowRight';
import ArrowDown from '../../assets/icons/arrowDown';
import DeleteIcon from '../common/DeleteIcon';

interface FileGroupHeaderProps {
	id: string;
	isOpen: boolean;
	name: string;
	deleteDataById: (id: string) => void;
	onToggle: () => void;
}

const FileGroupHeader: React.FC<FileGroupHeaderProps> = ({ isOpen, name, onToggle, id, deleteDataById }) => {
	return (
		<div className='flexBetween hoverColorChange hoverIconVisible' onClick={onToggle}>
			<div className='flexStart'>
				{isOpen ? <ArrowDown /> : <ArrowRight />}
				<div>{name}</div>
			</div>
			<DeleteIcon id={id} deleteDataById={deleteDataById} />
		</div>
	);
};

export default FileGroupHeader;
