import React from 'react'; // Importa a biblioteca React para usar seus recursos

// Define um componente funcional chamado PostList
const PostList = ({ posts, onSelectPost }) => {
  return (
    <div>
      <h2>Posts</h2> {/* Este é o título da lista de posts */}
      <ul>
        {/* Aqui estamos criando uma lista de itens (posts) */}
        {posts.map((post) => (
          <li 
            key={post.id} 
            onClick={() => onSelectPost(post)} 
            style={{ cursor: 'pointer' }} // Adiciona um cursor pointer para indicar que o item é clicável
          >
            {post.title} {/* Este é o título do post que será exibido na lista */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList; // Exporta o componente para que possa ser usado em outras partes do aplicativo
