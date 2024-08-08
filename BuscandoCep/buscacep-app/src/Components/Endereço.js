import React from 'react';

const EnderecoComponent = ({ address }) => {
  return (
    <div className='ContainerTitulo3'>
      <h3 className='Resultado'>Resultado:</h3>
      <p className='CEP'>CEP: {address.cep}</p>
      <p className='Logradouro'>Logradouro: {address.logradouro}</p>
      <p className='Bairro'>Bairro: {address.bairro}</p>
      <p className='Cidade'>Cidade: {address.localidade}</p>
      <p className='Estado'>Estado: {address.uf}</p>
    </div>
  );
};

export default EnderecoComponent;
