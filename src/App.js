// import Simple from "./Components/Simple.jsx";
// import Parent from "./Components/Perent.jsx";
import DataTable from "./Components/DataTable";
import UseEffectHook from "./Components/UseEffectHook";
import "./styles/index.scss"

function App() {
//   const obj1 = {
//     name: "V1",
//     branch: "CSE"
//   }
//   const obj2 = {
//     name: "V2",
//     branch: "CSE"
//   }
//   const obj3 = {
//     name: "V3",
//     branch: "CSE"
//   }

  const table1 =  [
    { name: "Vedanth", designation: "Egineer"},
    { name: "Rahul", designation: "Egineer"},
    { name: "Srujan", designation: "Egineer"},
  ]

  const table =  [
    { name: "Yathis", designation: "Egineer"},
    { name: "Rohan", designation: "Egineer"},
    { name: "Veerendra", designation: "Egineer"},
  ]

  return (
    <div className="App">
      {/* <Simple message="This is first Message"/>
      <Simple message="This is second Message"/>
      <Simple message="This is third Message"/>
      <Simple message={obj1}/>
      <Simple message={obj2}/>
      <Simple message={obj3}/> */}
      {/* <Parent/> */}
      <DataTable c="table1" data={table1}/><br></br>
      <DataTable data={table} c="table2"/>
      <UseEffectHook/>

    </div>
  );
}



export default App;
