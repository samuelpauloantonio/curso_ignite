


export default   function RepositoryItem({repository} = props){



    return (
        <li>
          <strong>{repository.name}</strong>
          <p>{repository.description}</p>  

          <a href= {repository.link}  >Acessar repositórios</a>
        </li>

    )
}