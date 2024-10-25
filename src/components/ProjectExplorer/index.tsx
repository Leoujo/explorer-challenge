import './index.scss';
import FileItem from '../FileItem';
import FileGroup from '../FileGroup';
import useFetch from '../../hooks/useFetch';

export default function ProjectExplorer() {
	const { data, deleteData } = useFetch();

	return (
		<div className='table'>
			<div className='header'>
				{data?.name}
			</div>
			<div className='content'>
				{data?.children?.map((file) =>
					file.type === 'file' ? (
						<FileItem
							deleteItem={deleteData}
							id={file.id}
							name={file.name}
							key={file.id}
						/>
					) : (
						<FileGroup
							children={file.children}
							deleteItem={deleteData}
							name={file.name}
							key={file.id}
						/>
					)
				)}
			</div>
		</div>
	);
}
