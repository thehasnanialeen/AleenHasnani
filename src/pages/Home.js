import { useEffect, useState } from "react";
import Introduction from "../components/Introduction/introduction";
import About_Myself from "../components/About_Myself/about_myself";
import Projects from "../components/Projects/projects";
import ContactMe from "../components/Contact_Me/contact_me";
//components
//import DataDetails from '../components/DataDetails';
//import Form from "../components/Form";

const Home = () => {
    // const [datas, setDatas] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('/api'); //in production need the full URL
    //         const json = response.json();

    //         if (response.ok)
    //         {
    //             if (json.length > 0){
    //                 setDatas(json);
    //             }
    //         }
    //     }

    //     fetchData(); //call func so use await
    // }, []) //[] fires useEffect only once on load 

    return (
        <div className="home">
            <Introduction></Introduction>
            <About_Myself></About_Myself>
            {/* <Projects></Projects> */}
            <ContactMe></ContactMe>
            {/* <div className="data">
                {datas && datas.map((data) => (
                    <DataDetails key={data._id} data={data}/>
                ))}
            </div>
            <Form /> */}
        </div>
    )
};

export default Home;