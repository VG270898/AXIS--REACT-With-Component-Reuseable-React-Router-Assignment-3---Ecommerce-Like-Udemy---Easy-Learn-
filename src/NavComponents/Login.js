import React,{Component} from "react";


class Login extends Component {
	constructor(props) {
		super(props)
        this.state = {
            username: '',
            password: '',
            isActive:false
        }

	}



    render() {

    const handleUsernameChange = event => 
    {
      this.setState({username: event.target.value})
    }
    const handleSubmit = event =>
    {
        alert(`${this.state.username} \n ${this.state.password} `)
    }
    
    const handleClickShowPassword = () => {
        this.setState({ isActive: !this.state.isActive });
      };
      
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      
    const handlePasswordChange = (prop) => (event) => {
        this.setState({[prop]: event.target.value });
      };
        const { username, password,isActive} = this.state
		return (
        <div class="ui inverted segment">
            <form class="ui inverted form" stye={{ display: 'flex' }}>
                <div style={{ marginTop: '20px' }}>
                    <div class="field" style={{ marginLeft: '35%', marginRight: '35%', width: '100%' }}>
                        <label style={{ fontSize: '18px' }}>Username</label>
                        <div class="ui fluid input" style={{ width: '30%' }}>
                            <input type="text" style={{ paddingTop: '15px', paddingBottom: '15px', fontSize: '16px' }} value={username} onChange={handleUsernameChange} placeholder="username" />
                        </div>
                    </div>
                    <div class="field" style={{ marginLeft: '35%', marginRight: '35%', width: '100%' }}>
                        <label style={{ fontSize: '18px' }}>Password</label>
                        <div class="ui fluid input" style={{ width: '30%' }}>
                            <input  type={isActive ? "text" : "password"} onChange={handlePasswordChange("password")} style={{ paddingTop: '15px', paddingBottom: '15px', fontSize: '16px',borderTopRightRadius:'0px',borderBottomRightRadius:'0px' }} value={password} placeholder="password"/>
                            <button  onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} style={{backgroundColor:'white',border:0,borderTopRightRadius:'5px',borderBottomRightRadius:'5px'}}><i className={isActive ? "eye icon" : "eye slash icon"}></i></button>
                        </div>
                        
                    </div>
                </div>
                <div class="field" style={{ marginLeft: '35%', marginRight: '35%',marginTop:'15px', width: '100%',fontSize:'13px' }}>
                    <div class="ui checkbox">
                        <input type="checkbox" class="hidden" readonly="" tabindex="0" />
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button class="ui button" type="submit" style={{ marginLeft: '37.5%', marginRight: '37.5%', width: '25%',padding:'20px',fontSize:'16px',marginBottom:'10px' }} onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        )
    }
}

export default Login