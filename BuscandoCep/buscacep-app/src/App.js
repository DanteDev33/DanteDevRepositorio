import React, { useState } from 'react';
import EnderecoComponent from './Components/Endereço';

const CepSearch = () => {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('CEP não encontrado');
      }
      const data = await response.json();
      setAddress(data);
      setError(null);
    } catch (err) {
      setAddress(null);
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Consulta de CEP</h2>
      <input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite o CEP"
      />
      <button onClick={handleSearch}>Buscar</button>

      {error && <p>{error}</p>}

      {address && (
        <div className='ContainerTitulo3'>
          <EnderecoComponent address={address}/>
        </div>
      )}
    </div>
  );
};

export default CepSearch;
