import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"


export const Studio_View=()=>{
      
    const [view, setview] = useState({})
    const { id } = useParams()


    useEffect(() => {
        // axios.get(`http://agaram.academy/api/action.php?request=studio_getViewDetails&id=${id}`).then((viewlist) => {
            axios.get(`https://subhashs.pythonanywhere.com/viewlist/${id}`).then((viewlist) => {

            setview(viewlist.data.data)
            console.log(viewlist.data.data)
        })
    },[])

    return(
        <div>
            <div className="container-fluid  text-dark">
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Name:</h4>
            <h4 className="col-6">{view.name}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">email:</h4>
            <h4 className="col-6">{view.email}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Password:</h4>
            <h4 className="col-6">{view.password}</h4>
        </div>
        {/* <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Aadhar:</h4>
            <h4 className="col-6">{view.aadhar}</h4>
        </div> */}
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Address:</h4>
            <h4 className="col-6">{view.address}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Phone:</h4>
            <h4 className="col-6 ">{view.phone}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">City:</h4>
            <h4 className="col-6">{view.city}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">Area:</h4>
            <h4 className="col-6">{view.area}</h4>
        </div>
        <div className="row w-50 mx-auto">
            <h4 className="col-5 text-end">PinCode:</h4>
            <h4 className="col-6">{view.pin}</h4>
        </div>
    </div>     
        </div>
    )
}