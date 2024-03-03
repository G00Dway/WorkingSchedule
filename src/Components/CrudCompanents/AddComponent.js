import { fetchAdd } from "../../Store/fetchs";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddComponent = ({ UpdatingTheAdminPage }) => {
    const dispatch = useDispatch();
    const [addData, setAddData] = useState({
        LastName: "",
        FirstName: "",
        Duty: "",
        weeklyJobAllotment: ["", "", "", "", ""]
    });

    const handleSubmit = () => {
        dispatch(fetchAdd(addData));
        setAddData({
            LastName: "",
            FirstName: "",
            Duty: "",
            weeklyJobAllotment: ["", "", "", "", ""]
        });
        UpdatingTheAdminPage(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "weeklyJobAllotment") {

            const index = parseInt(e.target.dataset.index);
            const updatedWorkBreakdown = [...addData.weeklyJobAllotment];
            updatedWorkBreakdown[index] = value;
            setAddData({ ...addData, weeklyJobAllotment: updatedWorkBreakdown });
        } else {
            setAddData({ ...addData, [name]: value });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="LastName">Last Name:</label>
                <input type="text" id="LastName" name="LastName" value={addData.LastName} onChange={handleChange} />

                <label htmlFor="FirstName">First Name:</label>
                <input type="text" id="FirstName" name="FirstName" value={addData.FirstName} onChange={handleChange} />

                <label htmlFor="Duty">Duty:</label>
                <input type="text" id="Duty" name="Duty" value={addData.Duty} onChange={handleChange} />

                {/* Input fields for weeklyWorkBreakdown */}
                {addData.weeklyJobAllotment.map((value, index) => (
                    <div key={index}>
                        <label htmlFor={`Week${index + 1}`}>{`Week ${index + 1}:`}</label>
                        <input
                            type="text"
                            id={`Week${index + 1}`}
                            name="weeklyJobAllotment"
                            data-index={index}
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                ))}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddComponent;
