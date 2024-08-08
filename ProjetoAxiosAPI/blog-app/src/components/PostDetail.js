import React from 'react'; // Importa a biblioteca React para usar seus recursos

// Define um componente funcional chamado PostDetail
const PostDetail = ({ post }) => {
  // Se não houver um post selecionado, exibe uma mensagem para selecionar um post
  if (!post) {
    return <div>Select a post to see details</div>;
  }

  // Se houver um post selecionado, exibe seus detalhes
  return (
    <div>
      <h2>{post.title}</h2> {/* Exibe o título do post */}
      <p>{post.body}</p> {/* Exibe o corpo do post */}
    </div>
  );
};

export default PostDetail; // Exporta o componente para que possa ser usado em outras partes do aplicativo
