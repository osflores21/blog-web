
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from 'next/navigation';
import { deleteEntrie } from '@/app/lib/services';

const ShowMessageDelete = async (id) => {
  const MySwal = withReactContent(Swal);
  const route = useRouter();

  MySwal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await deleteEntrie(id);
      if (response.ok) {
        route.refresh();
      }
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
};

export default ShowMessageDelete;
