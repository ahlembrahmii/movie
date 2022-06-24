import "./AddMovie.css";
import ReactModal from "react-modal"
import { useState} from "react";
Modal.setAppElement('#Root');
const AddMovie =() => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name,setName] = useState(''); 
    const [date,setDate] = useState(''); 
    const [rating,setRating] = useState(''); 
    const [image,setImage] = useState(''); 
    const [type,setType] = useState(''); 
    const [description,setDescription] = useState(''); 
    function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
        setIsOpen(false);
        const handleclick =() => {
            const newMovie ={
                id:Math.random(),
                name,
                date,
                rating : +rating,
                image,
                description,

            }
            addNewMovie(newMovie);
            setName('');
            setDate('');

        }
      }
      return (
        <div>
            <div className="Add-btn-container">
                <button className="Add-btn" onClick={openModal}>
                    +
                </button>
                <Modal
                className="Add-Modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
               >
                <form><label>Movie Name</label>
                    <input type="text"

                name="name"
                value={name}
                required onChange={(event) =>{ setName(event.target.value)} />
                <label>Movie Releas Date</label>
                    <input type="Number"

                name="Date"
                value={Date}
                required onChange={(event) =>{ setType(event.target.value)} />
                <label>Movie Type</label>
                    <input type="text"

                name="Type"
                value={type}
                required onChange={(event) =>{ setType(event.target.value)} />
                <label>Movie Summary</label>
                    <input type="text"
                    <textarea>
                name="description"
                value={description}
                required onChange={(event) =>{ setDescription(event.target.value)} </textarea> />
                <label>Movie Image</label>
                    <input type="url"

                name="image"
                value={image}
                required onChange={(event) =>{ setImage(event.target.value)} />


                </form>
                    
               
               </Modal>


            </div>
        </div>
      );
      };
      export default AddMovie;

