import X from "../../../assets/icons/x";
import { useDataContext } from "../../../context/DataProvider";

interface DeleteIconProps {
	id: string;
}

export default function DeleteIcon({ id }: DeleteIconProps) {
	const { deleteDataById, isLoading } = useDataContext();

	const handleDelete = () => {
		if (!isLoading) {
			deleteDataById(id);
		}
	};

	return (
		<div className="icon-on-hover" onClick={handleDelete} role="button" tabIndex={0} aria-disabled={isLoading}>
			{isLoading ? <span>...</span> : <X />}
		</div>
	);
}
