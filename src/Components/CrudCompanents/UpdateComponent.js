import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUpdate } from "../../Store/fetchs";

const UpdateComponent = ({ obj, UpdatingTheAdminPage }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [flag, setFlag] = useState(false);
    const [formData, setFormData] = useState({
        LastName: obj.LastName || "",
        FirstName: obj.FirstName || "",
        Duty: obj.Duty || "",
        weeklyJobAllotment: Array.isArray(obj.weeklyJobAllotment) ? obj.weeklyJobAllotment : ["", "", "", "", ""],
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        dispatch(fetchUpdate(obj, formData));
        navigate('admin');
    };

    const handleHourChange = (index, value) => {
        const updatedWorkBreakdown = [...formData.weeklyJobAllotment];
        updatedWorkBreakdown[index] = value;
        setFormData({
            ...formData,
            weeklyJobAllotment: updatedWorkBreakdown
        });
    };

    useEffect(() => {
        if (flag) {
            handleSubmit();
            setFlag(false);
            UpdatingTheAdminPage(false)
        }
    }, [flag, formData, obj, handleSubmit,formData.weeklyJobAllotment]);

    return (
        <div>
            <input type="text" name="LastName" value={formData.LastName} onChange={handleChange} />
            <input type="text" name="FirstName" value={formData.FirstName} onChange={handleChange} />
            <input type="text" name="Duty" value={formData.Duty} onChange={handleChange} />
            <label>Weekly Work Breakdown:</label>
            <div>
                {formData.weeklyJobAllotment.map((hours, index) => (
                    <input key={index} type="text" value={hours} onChange={(e) => handleHourChange(index, e.target.value)} />
                ))}
            </div>
            <button onClick={() => {
                setFlag(!flag);
                UpdatingTheAdminPage(true);
            }}>Update</button>
            <button onClick={() => navigate("/home/admin")}>Exit</button>
        </div>
    );
};

export default UpdateComponent;
