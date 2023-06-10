import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
const problems1= [{
    title: "201. Bitwise AND of Numbers Range",
    Level: "Medium",
    percentage: "42%"
},{
    title: "201. Bitwise AND of Numbers Range",
    Level: "Medium",
    percentage: "412%"
},
    {
        title: "202. Happy Number",
        Level: "Easy",
        percentage: "54.9%"
    },
    {
        title: "203. Remove Linked List Elements",
        Level: "Hard",
        percentage: "42%"
    },{
        title:'2 sum problem',
        Level:'Medium',
        percentage: "40%"
    },{
        title:'2 sum problem',
        Level:'Medium',
        percentage: "40%"
    },
    {
       title:"3 sum",
       Level: 'Easy',
       percentage:"60%"
    },
    {
       title:"All sums",
       Level:"Hard",
       percentage:"10%"
    }];
    const problems2=[{
        title:'9000 sum problem',
        Level:'Medium',
        percentage: "40%"
    },{
        title:'80000 sum problem',
        Level:'Medium',
        percentage: "40%"
    },
    {
       title:"390 sum",
       Level: 'Easy',
       percentage:"60%"
    },
    {
       title:"under sums",
       Level:"Hard",
       percentage:"10%"
    }];
export default function Lists() {
    const [problems,setProblems] = useState([
        {
          title: "201. Bitwise AND of Numbers Range",
          Level: "Medium",
          percentage: "42%",
        },
        {
          title: "201. Bitwise AND of Numbers Range",
          Level: "Medium",
          percentage: "412%",
        },
        {
          title: "202. Happy Number",
          Level: "Easy",
          percentage: "54.9%",
        },
        {
          title: "203. Remove Linked List Elements",
          Level: "Hard",
          percentage: "42%",
        },
      ]);
    
      const ProblemStatement = (props) => {
          const { title, percentage, Level } = props;
        
          return (
            <tr>
              <td>{title}</td>
              <td>{Level}</td>
              <td>{percentage}</td>
            </tr>
          );
        }
  return (
    <div>
      <div className="container">
        <button className="btn btn-primary mx-1" onClick={()=>setProblems(problems1)}  > 1 </button>
      {/* <button  >1</button> */}
      <button className="btn btn-primary mx-1" onClick={()=>setProblems(problems2)}  > 2 </button>

            {/* <button  >2</button> */}
            {problems.map((problem, index) => (
              <ProblemStatement
                key={index} 
                title={problem.title}
                Level={problem.Level}
                percentage={problem.percentage}
              />
            ))}
      </div>
    </div>
  )
}
