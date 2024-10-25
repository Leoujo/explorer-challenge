import './index.scss';

import FileList from '../FileList';
import { useDataContext } from '../../context/DataProvider';

export default function ProjectExplorer() {
	const { data, error } = useDataContext();

	return (
		<>
			<div className='table'>
				<div className='header'>
					{data?.name}
				</div>
				<div className='content'>
					{data?.children && (
						<FileList children={data.children} />
					)}
				</div>
			</div>
			{error && <p className='errorWarning'>{error}</p>}
		</>
	);
}
