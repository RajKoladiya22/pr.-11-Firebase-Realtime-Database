import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_DATA, GET_DATA } from './assets/redux/action/action';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { set } from 'firebase/database';

function App() {
  const record = useSelector(state => state.data.data)
  const dispatch = useDispatch();
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Company, setCompany] = useState('');
  const [Message, setMessage] = useState('');

  const handalSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 1000),
      Name,
      Email,
      Phone,
      Company,
      Message
    }
    dispatch(ADD_DATA(obj));
    setCompany('')
    setEmail('')
    setMessage('')
    setPhone('')
    setName('')


  }
  useEffect(() => {
    dispatch(GET_DATA())
  }, [handalSubmit])

  return (
    <>
      <Container>
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <div className="card-body d-flex">
                <div className="col-lg-6 box card-body bg-black text-white">
                  {
                    record && Object.entries(record).map(([key, value]) => {
                      return (
                        <div className="card" key={key}>
                          <div className="card-body text-black">
                            <p>
                            <span className='t text-danger-emphasis'>Name :</span> {value.Name}
                            </p>
                            <p>
                            <span className='t text-danger-emphasis'>Phone :</span> {value.Phone}
                            </p>
                            <p>
                            <span className='t text-danger-emphasis'>Email :</span> {value.Email}
                            </p>
                            <p>
                            <span className='t text-danger-emphasis'>Company :</span> {value.Company}
                            </p>
                            <p>
                            <span className='t text-danger-emphasis'>Message :</span> {value.Message}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  }


                </div>
                <div className="col-lg-6 card-body bg-danger text-white">
                  <Form onSubmit={handalSubmit}>
                    <div className="d-flex justify-content-around">
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={(e) => setName(e.target.value)} value={Name} placeholder="Name..." />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Company</Form.Label>
                        <Form.Control type="text" onChange={(e) => setCompany(e.target.value)} value={Company} placeholder="Company..." />
                      </Form.Group>
                    </div>
                    <div className="d-flex justify-content-around">
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} value={Email} placeholder="Email..." />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" onChange={(e) => setPhone(e.target.value)} value={Phone} placeholder="Phone..." />
                      </Form.Group>
                    </div>
                    <div className="d-flex justify-content-">
                      <Form.Group className="mb-3 w-75" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} onChange={(e) => setMessage(e.target.value)} value={Message} />
                      </Form.Group>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <ToastContainer />
    </>
  )
}

export default App
