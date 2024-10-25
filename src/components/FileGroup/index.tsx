import './index.scss';
import { useState } from 'react';
import ArrowRight from '../../assets/icons/arrowRight';
import ArrowDown from '../../assets/icons/arrowDown';
import FileItem from '../FileItem';
import { TreeNode } from '../../api';

interface FileGroupProps {
	name: string;
	children?: TreeNode[];
	deleteItem: (id: string) => void;
}

export default function FileGroup({ name, children, deleteItem }: FileGroupProps) {
	const [isOpen, setIsOpen] = useState(false);

	const isOpenToggle = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div>
			<div className='flexContainer' onClick={isOpenToggle}>
				{isOpen ? <ArrowDown /> : <ArrowRight />}
				<div>{name}</div>
			</div>

			{isOpen && (
				<div className='indent'>
					{children?.map((file) => {
						if (file.type === "file") {
							return (
								<FileItem
									key={file.id}
									name={file.name}
									id={file.id}
									deleteItem={deleteItem}
								/>
							);
						}
						return (
							<FileGroup
								key={file.id}
								name={file.name}
								children={file.children}
								deleteItem={deleteItem}
							/>
						);
					})}
				</div>
			)}
		</div>
	);
}
