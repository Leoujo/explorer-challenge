import './index.scss';

import { useDataContext } from '../../context/DataProvider';
import FileList from '../FileList';
import WarningError from '../common/WarningError';

export default function ProjectExplorer() {
	const { data, error } = useDataContext();

	return (
		<>
			<div className='table'>
				<h1 className='header'>
					{data?.name}
				</h1>
				<div className='content'>
					{data?.children && (
						<FileList children={data.children} />
					)}
				</div>
			</div>
			{error && <WarningError error={error} />}
		</>
	);
}
