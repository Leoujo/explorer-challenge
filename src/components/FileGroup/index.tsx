import React, { useState } from 'react'
import FileItem from '../FileItem'
import ArrowRight from '../../assets/icons/arrowRight';
import ArrowDown from '../../assets/icons/arrowDown';
import { File } from '../../types';

interface FileGroupProps {
	name: string;
	children?: File[]
}

export default function FileGroup({ name, children }: FileGroupProps) {
	const [isOpen, setIsOpen] = useState(false);

	const isOpenToggle = () => {
		setIsOpen((prev) => !prev)
	}
	return (
		<div>
			<div className='flexCenterClickable' onClick={isOpenToggle}>
				{isOpen ? <ArrowDown /> : <ArrowRight />}
				<div>{name}</div>
			</div>

			{isOpen &&
				<div className='paddingLeft'>
					{children?.map((file) => {
						if (file.type === "file") {
							return <FileItem name={file.name} icon={file.icon} />
						}
						return <FileGroup name={file.name} children={file.children} />
					})}


				</div>
			}
		</div >
	)
}
