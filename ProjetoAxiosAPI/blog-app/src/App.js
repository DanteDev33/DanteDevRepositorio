import React, { useState, useEffect } from 'react'; // Importa React e hooks para gerenciar estado e efeitos colaterais
import axios from 'axios'; // Importa axios para fazer requisições HTTP
import PostList from './components/PostList'; // Importa o componente que exibe a lista de posts
import PostDetail from './components/PostDetail'; // Importa o componente que exibe os detalhes do post

// Define o componente funcional chamado App
const App = () => {
  // Cria um estado para armazenar a lista de posts
  const [posts, setPosts] = useState([]);
  // Cria um estado para armazenar o post selecionado
  const [selectedPost, setSelectedPost] = useState(null);

  // useEffect é um hook que executa uma função quando o componente é montado
  useEffect(() => {
    // Função assíncrona para buscar posts da API
    const fetchPosts = async () => {
      try {
        // Faz uma requisição GET para obter posts da API JSONPlaceholder
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // Atualiza o estado com os dados dos posts
        setPosts(response.data);
      } catch (error) {
        // Se ocorrer um erro, exibe uma mensagem no console
        console.error('Error fetching posts:', error);
      }
    };

    // Chama a função para buscar os posts
    fetchPosts();
  }, []); // O array vazio [] significa que useEffect será executado apenas uma vez, após o componente ser montado

  // Função para lidar com a seleção de um post
  const handleSelectPost = (post) => {
    // Atualiza o estado com o post selecionado
    setSelectedPost(post);
  };

  return (
    <div>
      {/* Exibe a lista de posts e passa a função para selecionar um post */}
      <PostList posts={posts} onSelectPost={handleSelectPost} />
      {/* Exibe os detalhes do post selecionado */}
      <PostDetail post={selectedPost} />
    </div>
  );
};

// Exporta o componente App para que possa ser usado em outras partes do aplicativo
export default App;
