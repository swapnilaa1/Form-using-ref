import React , { useRef , useEffect, useState}from "react";
const Form = () => {
    let [credentials , setCredentials]=useState({
        username:"",
        password:""
    });

    const userNameRef = useRef(null);
    const passwordRef = useRef(null);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        setCredentials({username:userNameRef.current.value,password:passwordRef.current.value});
                };
    
    useEffect(() => {
        userNameRef.current.focus();
    }, [])
    
    console.log("state" , credentials);

    return (
    <div>
         <h3>{JSON.stringify(credentials)}</h3>
        <form className="form-group container" onSubmit={handleSubmit}>
            <div className="mb-3">
            <label htmlFor="username" className="form-label">username</label>
            <input type="text" className="form-control" id="username" ref={userNameRef} />
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input ref={passwordRef} type="password" className="form-control" id="password"/>
            </div>
            <button className="btn btn-success" >Submit</button>
        </form>
    </div>
  );
};

export default Form;
