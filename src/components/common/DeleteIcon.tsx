import X from "../../assets/icons/x";
import { useDataContext } from "../../context/DataProvider";

interface DeleteIconProps {
	id: string;
}

export default function DeleteIcon({ id }: DeleteIconProps) {
	const { deleteDataById } = useDataContext();

	return (
		<div className='iconOnHover' onClick={() => deleteDataById(id)}>
			<X />
		</div>
	)
}
