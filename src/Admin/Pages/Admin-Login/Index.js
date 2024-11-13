import { useSelector,useDispatch } from "react-redux";
import { Link  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  { updatingDetails }  from "../../Slices/AdminLoginSlice";
import axios from "axios";


export const Admin_Login=()=>{
    let navigate=useNavigate();
   let statevalue=useSelector((e)=>e.AdminLogin).details
   let dispatch=useDispatch();


   let loginformData = new FormData()
   loginformData.append("email",statevalue.email)
   loginformData.append("password",statevalue.password)

  let loginbtn=()=>{

    axios.post("https://subhashs.pythonanywhere.com/adminlogin",loginformData).then((res)=>{
        if(res.data.status=="success"){
            alert("Login Successfully")
            navigate("/admin/panel")
            localStorage.setItem("admin_token",res.data.data.admin_token)

        }else{
            alert("Login Failed")
        }
    })
  }


   return(
        <div className="login-page sidebar-collapse">
        <div className="page-header header-filter " filter-color="orange">
            <div className="page-header-image" style={{backgroundImage:"url(../assets/img/login.jpg)"}}></div>
            <nav class="navbar navbar-expand-lg navbar-transparent">
           <div class="container">
           <div className="dropdown button-dropdown">
                        <a href="#pablo" className="dropdown-toggle" id="navbarDropdown" data-toggle="dropdown">
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                            <span className="button-bar"></span>
                        </a>
                    </div>
             <div class="navbar-translate m-1">
               <a class="navbar-brand" href="#pablo">Lights On Focus</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#example-navbar-transparent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-bar bar1"></span>
                 <span class="navbar-toggler-bar bar2"></span>
                 <span class="navbar-toggler-bar bar3"></span>
               </button>
             </div>
             <div className="collapse navbar-collapse" data-nav-image="../assets/img//blurred-image-1.jpg" data-color="orange">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item " style={{paddingLeft:"700px"}}>

                                 <Link to={"/"} className="back"><i> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 24 16">
                                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                </svg></i> Go back</Link> 

                            </li>
                        </ul>
                    </div>
             <div class="collapse navbar-collapse" id="example-navbar-transparent">
             </div>
           </div>
         </nav>
            <div className="content">
                <div className="container">
                    <div className="col-md-5 ml-auto mr-auto">
                        <div className="card card-login card-plain">
                           
                                <div className="card-header text-center" style={{paddingTop:"0px",marginTop:"0px"}}>
                                    <div className="logo-container">
                                        <img src="./assets/img/now-logo.png" alt="" />
                                    </div>
                                </div>
                                <div className="card-body" >
                                    <div className="input-group no-border input-lg">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text mt-4"><i className="now-ui-icons users_circle-08" ></i></span>
                                        </div>
                                        <input type="email" className="form-control mt-4" onKeyUp={(e)=>dispatch(updatingDetails({...statevalue, email:e.target.value}))} placeholder="Email"/>
                                    </div>
                                    <div className="input-group no-border input-lg" > 
                                        <div className="input-group-prepend">
                                            <span className="input-group-text mt-3"><i className="now-ui-icons text_caps-small"></i></span>
                                        </div>
                                        <input type="password" className="form-control mt-3"  onKeyUp={(e)=>dispatch(updatingDetails({...statevalue, password:e.target.value}))} placeholder="Password"/>
                                    </div> 
                                </div>
                                <div>
                                     <button onClick={loginbtn} className="btn btn-success ">Login</button>
                                 </div>
                               </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
    
)
}
  
