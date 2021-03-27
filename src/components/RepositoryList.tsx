import { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";

export function RepositoryList() {
  
  // definindo tipo de  dados do  reoositorio para o meu estado
  interface Repository {
    name: string;
    description: string;
    html_url: string;
  }

  const [repositories, setRepository] = useState<Repository[]>([]); // tipos genericos ele pode mudar estou dizendo que o meu estado vai armazenar varios repositorios 

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())

      .then((data) => setRepository(data));
  }, []);

  return (
    <section id="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </section>
  );
}
