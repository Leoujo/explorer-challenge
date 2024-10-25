import React from 'react'
import DefaultFile from '../../assets/icons/defaultFile'

interface FileItemProps {
	icon?: JSX.Element,
	name: string
}

export default function FileItem({ icon, name }: FileItemProps) {
	return (
		<div className='flexCenterClickable'>
			{icon ? icon : <DefaultFile />}
			<div>{name}</div>
		</div>
	)
}
