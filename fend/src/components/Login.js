import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Service from './service';

const Login = () => {

    const [prn,setPrn] = useState();
    const [pass,setPass] = useState();
    const navigate = useNavigate();

    const auth = (event) => {
        event.preventDefault();
        // var prn = document.getElementById("prn").value;        
        // var pass = document.getElementById("password").value; 
        
        // Service.authenticate(prn,pass)
        // .then((resp) => {
        //     alert();
        //     console.log(resp.data);
        // document.getElementById("mydiv").innerHTML = resp.data;

        // }).catch();
        // document.getElementById("mydiv").innerHTML = data;

        Service.authenticate(prn,pass).then((Response)=>{
            console.log(Response.data);
            var str =JSON.stringify(Response.data)
            document.getElementById("mydiv").innerHTML = str;
        }).catch();

        
    }


    return (
        <div>
            <h1>Login Page</h1>
            <div>
                <form>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Enter PRN Number: 
                                </td>
                                <td>
                                    <input type="text" id="prn" name="prn" placeholder="PRN Number"
                                    value={prn}
                                    onChange={e => setPrn(e.target.value)}
                                    ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Enter Password:
                                </td>
                                <td>
                                    <input type="password" id="password" name="password" placeholder="password"
                                    value={pass}
                                    onChange={e => setPass(e.target.value)}
                                    ></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="button" onClick={auth}>Login</button>
                </form>
            </div>
            <div id="mydiv"></div>
        </div>
    );
}
export default Login;