import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'




function Login() {
    
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-light'>
        <div className='form_container p-5 bg-white'>
            <form>
            <h4 className='text-center'>Entre com seus dados</h4>
            <div className='mb-2'>
                 <input type="name" placeholder='Digite seu nome' className='form-control'/>
            </div>
            <div className='mb-2'>
                 <input type="email" placeholder='Digite seu E-mail' className='form-control'/>
            </div>
            <div className='mb-2'>
                <input type="checkbox" className='custom-control custom-checkbox'id="check" />
                <label htmlFor="check" className='custom-input-label ms-2'>
                    Gravar dados
                </label>
            </div>
            <div className='d-grid'>
                <button className='btn btn-danger'>Entrar</button>
            </div>
            
            <p className='text-end mt-2'>
           {/*     <a href="">Não tem cadastro?</a>*/}

                Não é cadastrado? <a href="/signup" className='ms-2'>Cadastrar</a>
            </p>
            </form>
        </div>
    </div>
  )
}

export default Login