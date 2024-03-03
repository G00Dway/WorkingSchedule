const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const HOST=5000;
const app=express();

app.use(cors());
app.use(bodyParser.json());

let work=[
    {
        LastName: "Smith",
        FirstName: "John",
        Duty: "Software Developer",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Doe",
        FirstName: "Jane",
        Duty: "Project Manager",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Johnson",
        FirstName: "Michael",
        Duty: "Data Analyst",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Williams",
        FirstName: "Emily",
        Duty: "UX Designer",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Brown",
        FirstName: "David",
        Duty: "Frontend Developer",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Jones",
        FirstName: "Sarah",
        Duty: "Marketing Specialist",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Garcia",
        FirstName: "Maria",
        Duty: "HR Manager",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Martinez",
        FirstName: "Carlos",
        Duty: "Backend Developer",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Lee",
        FirstName: "Jennifer",
        Duty: "Content Writer",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Rodriguez",
        FirstName: "Daniel",
        Duty: "Financial Analyst",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Lopez",
        FirstName: "Jessica",
        Duty: "UI Designer",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Harris",
        FirstName: "William",
        Duty: "Product Manager",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Clark",
        FirstName: "Megan",
        Duty: "Customer Support",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]
    },
    {
        LastName: "Young",
        FirstName: "Robert",
        Duty: "System Administrator",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]

    },
    {
        LastName: "Teymur",
        FirstName: "Robert",
        Duty: "Administrator",
        weeklyJobAllotment: ["Frontend Development", "Backed Development","Testing", "Code Review","Meetings"]

    },
];

const DaysOfWeek = {
    MONDAY: 'Monday',
    TUESDAY: 'Tuesday',
    WEDNESDAY: 'Wednesday',
    THURSDAY: 'Thursday',
    FRIDAY: 'Friday'
};





let ID=1;
work=work.map((item)=>{
    let obj={...item,id:ID++};
    return obj;
});

app.get("/days-of-week", (req, res) => {
    res.json(DaysOfWeek);
});

app.get("/work",(req,res)=>{
    res.json(work);
});

app.delete("/delete-admin/:id",(req,res)=>{
    let id= parseInt(req.params.id);
    work=work.filter((item)=>id!==item.id);
    res.send(`Element ${
        work.find((item)=>id===item.id).FirstName
    } was deleted from work`);
});

app.put('/change-work/:id',(req,res)=>{
    let id= parseInt(req.params.id);
    let index= work.findIndex((item)=>id===item.id);
    work[index]=req.body;
    res.send(`Element ${req.body.FirstName} was changed`);
});

app.post("/add-work",(req,res)=>{
    let obj=req.body;
    obj.id = work.length + 1;
    work.push(obj);
    res.send(`Element with ${obj.id} was added to work`);
});

app.listen(HOST,()=>{
    console.log(HOST+"OK");
});