import { useParams } from 'react-router-dom'; // 1. Importar o hook

function Produto() {
  // 2. Extrair os parâmetros da URL. O nome deve ser igual ao definido na rota (:id)
  const { idProduto } = useParams(); 
  
  // 3. Onde você usaria o useEffect para buscar o produto[idProduto] na API
  // useEffect(() => { fetchProduto(idProduto) }, [idProduto]);

  return (
    <div>
      <h2>Página do Produto</h2>
      <p>Você está visualizando o produto de ID: <strong>{idProduto}</strong></p>
    </div>
  );
}
export default Produto;
