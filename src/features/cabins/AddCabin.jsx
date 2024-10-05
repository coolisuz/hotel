import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import CabinTable from "./CabinTable";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabins-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabins-form">
        <CreateCabinForm />
      </Modal.Window>

      <Modal.Open opens="cabins-table">
        <Button>Show Table</Button>
      </Modal.Open>
      <Modal.Window name="cabins-table">
        <CabinTable />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
