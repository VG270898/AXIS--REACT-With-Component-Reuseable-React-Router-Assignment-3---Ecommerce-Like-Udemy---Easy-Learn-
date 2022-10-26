import React from "react";


const Login = () => {
    return (
        <div class="ui inverted segment">
            <form class="ui inverted form" stye={{ display: 'flex' }}>
                <div style={{ marginTop: '20px' }}>
                    <div class="field" style={{ marginLeft: '35%', marginRight: '35%', width: '100%' }}>
                        <label style={{ fontSize: '18px' }}>Username</label>
                        <div class="ui fluid input" style={{ width: '30%' }}>
                            <input type="text" style={{ paddingTop: '15px', paddingBottom: '15px', fontSize: '16px' }} placeholder="username" />
                        </div>
                    </div>
                    <div class="field" style={{ marginLeft: '35%', marginRight: '35%', width: '100%' }}>
                        <label style={{ fontSize: '18px' }}>Password</label>
                        <div class="ui fluid input" style={{ width: '30%' }}>
                            <input type="text" style={{ paddingTop: '15px', paddingBottom: '15px', fontSize: '16px' }} placeholder="password" />
                        </div>
                    </div>
                </div>
                <div class="field" style={{ marginLeft: '35%', marginRight: '35%',marginTop:'15px', width: '100%',fontSize:'13px' }}>
                    <div class="ui checkbox">
                        <input type="checkbox" class="hidden" readonly="" tabindex="0" />
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button class="ui button" type="submit" style={{ marginLeft: '37.5%', marginRight: '37.5%', width: '25%',padding:'20px',fontSize:'16px',marginBottom:'10px' }}>Submit</button>
            </form>
        </div>
    )
}

export default Login