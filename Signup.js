import React from 'react'

function Signup() {
    return (
        <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-light'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                <h4 className='text-center'>Cadastre-se</h4>
                <div className='mb-2'>
                     <input type="name" placeholder='Digite seu nome' className='form-control'/>
                </div>
                <div className='mb-2'>
                     <input type="tel" placeholder='Digite seu telefone com DDD' className='form-control'/>
                </div>
                <div className='mb-2'>
                     <input type="email" placeholder='Digite seu E-mail' className='form-control'/>
                </div>
                <div className='mb-2'>
                     <input type="Logradouro" placeholder='Nome da sua rua e número' className='form-control'/>
                </div>
                <div className='mb-2'>
                     <input type="bairro" placeholder='Bairro' className='form-control'/>
                </div>
                <div className='md-2'>
                         <input type="text" placeholder='Nome da sua cidade'className='form-control'/>
                 </div>
                 
                 <div className='mb-2'>
                  <select id="inputState" className="form-control">
                  <option selected>Selecione seu estado</option>
                  <option>...</option>
               </select>
                </div>
                <div className='mb-2'>
      <label className="mr-sm-2" for="inlineFormCustomSelect">Escolha o tipo de cliente</label>
      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Selecione...</option>
        <option value="1">Executivo</option>
        <option value="2">Preferencial</option>
        <option value="3">Comum</option>
        <option value="3">Vip</option>
      </select>
    </div>
                
                   
                <div className='d-grid'>
                    <button className='btn btn-danger'>Cadastre-se</button>
                </div>
                <p className='text-end mt-2'>
                   Usuário cadastrado <a href="/" className='ms-2'>Voltar</a>
                </p>
                </form>
            </div>
        </div>
      )
    }
    

export default Signup