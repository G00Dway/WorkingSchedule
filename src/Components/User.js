import "../Style/User.css";
import {getFetchHomeArray} from "../Store/fetchs";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Modal from "react-modal";

const User=()=>{
    const work=useSelector(state => state.workingReducer.homeArray);
    const DaysOfWeek=useSelector(state => state.workingReducer.daysOfWeek)
    const dispatch=useDispatch();
    const [flag, setFlag] = useState(false);
    const [fileName,setFileName]=useState("")
    const [showFileModal,setShowFileModal]=useState(false);
    function getWorkData(){
        dispatch(getFetchHomeArray());
    }

    useEffect(()=>{
        getWorkData();
    },[flag])
    const today = new Date();
    const oneWeekLater = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    const formattedToday = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    const formattedOneWeekLater = `${oneWeekLater.getDate()}/${oneWeekLater.getMonth() + 1}/${oneWeekLater.getFullYear()}`;


    const saveDataToFile = () => {
        const csvRows = [];

        const headers = [`No`, 'Last Name', 'First Name', 'Duty', ...Object.values(DaysOfWeek)];
        csvRows.push(headers.join(','));

        work.forEach((item, index) => {
            const rowData = [
                index + 1,
                item.LastName,
                item.FirstName,
                item.Duty,
                ...item.weeklyJobAllotment
            ];
            csvRows.push(rowData.join(','));
        });

        const csvData = csvRows.join('\n');
        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = `${fileName} ${formattedToday}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    };




    return (
        <div>
            <h3>"İçərişəhər" Muzey Mərkəzinin ekspozisiya şöbəsinin əməkdaşlarının {formattedToday} - {formattedOneWeekLater}-cü il tarixlərində həftəlik iş qrafiki</h3>
            <table>
                <thead>
                <tr>
                    <th rowSpan='2'>№</th>
                    <th rowSpan='2'>Last Name</th>
                    <th rowSpan='2'>First Name</th>
                    <th rowSpan='2'>Duty</th>
                    <th colSpan={Object.keys(DaysOfWeek).length}>Həftənin günləri</th>
                </tr>
                <tr>

                    {Object.keys(DaysOfWeek).map(day => (
                        <th key={day}>{DaysOfWeek[day]} {formattedToday}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {work.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.LastName}</td>
                        <td>{item.FirstName}</td>
                        <td>{item.Duty}</td>
                        {item.weeklyJobAllotment.map((hours, index) => (
                            <td key={index}>{hours}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={()=>setShowFileModal(!showFileModal)}>Veriler</button>
            {
                <Modal isOpen={showFileModal}>
                    <div>
                        <input type="text" onChange={t=>setFileName(t.target.value)}/>
                        <button onClick={saveDataToFile}>Verileri Kaydet</button>
                        <button onClick={()=>setShowFileModal(!showFileModal)}>Exit</button>
                    </div>
                </Modal>
            }

        </div>

    )

}
export default User;