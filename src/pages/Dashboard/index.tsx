import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
import logoimg from '../../assets/logo.svg';
import api from '../../services/api';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoimg} alt="Github Explore" />
      <Title> Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/574284?s=200&v=4"
            alt="Roger"
          />
          <div>
            <strong>reposit/qualquer</strong>
            <p>repositório para teste aleatório</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
