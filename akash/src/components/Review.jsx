import "./review.css";
import { URL } from '../config'
import axios from 'axios'

const Review = (props) => {
    const { data } = props;

    const deleteData = () => {
        // const url = `${URL}/${data.id}`


        // axios.delete(url).then((response) => {

        //     const result = response.data
        //     console.log(result)
        //     if (result['status'] == 'success') {
        //         toast.warning('Car Deleted')

        //         //refresh
        //         window.location.reload()
        //     } else {
        //         toast.error(result['error'])
        //     }
        // }
        // )
    }
    const editData = () => {

    }

    return (
        <tr>








            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.content}</td>
            <td>{data.time}</td>
            <td><button onClick={editData} >
                Edit
            </button></td>
            <td><button onClick={deleteData} >
                delete
            </button></td>

            {/* <td>id</td>
                    <td>title</td>
                    <td>content</td>
                    <td>time</td>
                    <td><button onClick={deleteData} >
                        Edit
                    </button></td>
                    <td><button onClick={deleteData} >
                        delete
                    </button></td> */}




        </tr>
    )

}

export default Review;