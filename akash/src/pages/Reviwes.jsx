import Review from "../components/Review";
import './review.css'


const Reviews = () => {

    return (
        <div>

            <table class="responstable">

                <tr>
                    <th>Id</th>
                    <th data-th="Driver details"><span>Title</span></th>
                    <th>Content</th>
                    <th> Date-time</th>

                    <th>Edit</th>
                    <th>Delete</th>
                </tr>


                <Review data={info[0]}></Review>
                <Review data={info[0]}></Review>

                {
                    info.map((data) => {
                        <Review data={data} />
                    })
                }

            </table>
        </div>

    )

}
export default Reviews;