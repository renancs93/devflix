import React from "react";
import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

function Page404() {
  return (
    <PageDefault>
      <h1>PÁGINA NÃO ENCONTRADA</h1>

      <Button as={Link} to="/" className="ButtonLink">
        Voltar para Home
      </Button>
    </PageDefault>
  );
}

export default Page404;
