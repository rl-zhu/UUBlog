import { Card } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import  {useNavigate} from 'react-router-dom'
import {useStore} from '@/store/index'
import { observer } from 'mobx-react-lite'

function Login() {
    const {loginStore} = useStore()
    const navigate = useNavigate()
 
    const onFinish = async(values) => {
        console.log(values)
        await loginStore.getToken({
            username: values.username,
            password: values.password,

        })
        console.log(loginStore.token)
        navigate('/my',{replace:true})
      }
    const onFinishFailed = (errinfo)=>{
        console.log(errinfo)
    }

    return (
        <div className="login">
         

            <Card className="login-container">
                {/* <img ></img> */}
                <Form 
                    validateTrigger={['onBlur', 'onChange']}
                    onFinish = {onFinish}
                    onFinishFailed = {onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the phone numbers'
                            },
                            {
                                pattern: /^\w{3,20}$/,
                                message:'Please input more than 3-20 numbers without special characters ',
                                validateTrigger:'onBlur',
                            },
                        ]}
                    >
                        <Input size="large" placeholder="Please input the username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input the password'
                            },
                            {
                                min: 6,
                                message:'Please input the password with more than 6 numbers',
                            },
                        ]}>
                        <Input size="large" placeholder="Please input the password" />
                    </Form.Item>
                    <Form.Item>
                        <Checkbox className="login-checkbox-label">
                        New users will be automatically registered
                        </Checkbox>
                    </Form.Item>

                    <Form.Item>
                        
                        <Button type="primary" htmlType="submit" size="large" block>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        </div>
    )
}

export default observer(Login) 