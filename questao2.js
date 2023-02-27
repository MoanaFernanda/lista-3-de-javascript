

function filtro_naturalidade(string, array){
  let array_naturalidade = []
  for(let i = 0; i < array.length; i++){
      if(array[i].naturalidade == string){
          array_naturalidade.push(array[i])
      }
  }
  return array_naturalidade
}

const al = [
  {
    "email": "mfst@discente.ifpe.edu.br",
    "matricula": "20222MTFS0001",
    "nome": "moana fernanda da silva tavares",
    "nascimento": "12/03/2001",
    "sexo": "Feminino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "mfs@discente.ifpe.edu.br",
    "matricula": "20222MTFS0002",
    "nome": "marlon ferreira da silva",
    "nascimento": "07/01/1996",
    "sexo": "Masculino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "gvs@discente.ifpe.edu.br",
    "matricula": "20222MTFS0003",
    "nome": "gabriel vasconcelo da silva ",
    "nascimento": "20/01/2003",
    "sexo": "Masculino",
    "naturalidade": "Olinda - PE",
    "turma": 0
  },
  {
    "email": "dcs@discente.ifpe.edu.br",
    "matricula": "20222MTFS0004",
    "nome": "Deise cristina da silva",
    "nascimento": "14/01/2002",
    "sexo": "Feminino",
    "naturalidade": "Paulista - PE",
    "turma": 0
  },
  {
    "email": "jhsv@discente.ifpe.edu.br",
    "matricula": "20222MTFS0005",
    "nome": "josé heitor da silva vitorino",
    "nascimento": "27/01/2001",
    "sexo": "Masculino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "fas@discente.ifpe.edu.br",
    "matricula": "20222MTFS0006",
    "nome": "fabiana alves da silva",
    "nascimento": "15/01/2000",
    "sexo": "Feminino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "aaaf@discente.ifpe.edu.br",
    "matricula": "20222MTFS0007",
    "nome": "aline adrielle de assunção ferreira",
    "nascimento": "18/01/2003",
    "sexo": "Feminino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "olbb@discente.ifpe.edu.br",
    "matricula": "20222MTFS0008",
    "nome": "oleandra bezerra baião",
    "nascimento": "09/02/2003",
    "sexo": "Feminino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "id12@discente.ifpe.edu.br",
    "matricula": "20222MTFS0009",
    "nome": "igor da silva",
    "nascimento": "01/02/1999",
    "sexo": "Masculino",
    "naturalidade": "Recife - PE",
    "turma": 0
  },
  {
    "email": "ias3@discente.ifpe.edu.br",
    "matricula": "20222MTFS0010",
    "nome": "Iago alves da silva",
    "nascimento": "07/02/2003",
    "sexo": "Masculino",
    "naturalidade": "Olinda - PE",
    "turma": 0
  },
  {
    "email": "jlfa@discente.ifpe.edu.br",
    "matricula": "20222MTFS0011",
    "nome": "joao lucas freitas alves",
    "nascimento": "22/01/2002",
    "sexo": "Masculino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "vjals@discente.ifpe.edu.br",
    "matricula": "20222MTFS0012",
    "nome": "vinicius joselnido alves lopes silva",
    "nascimento": "15/01/2002",
    "sexo": "Masculino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "elbm@discente.ifpe.edu.br",
    "matricula": "20222MTFS0013",
    "nome": "eduarda larissa bezerra melo",
    "nascimento": "09/01/1996",
    "sexo": "Feminino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "tsv@discente.ifpe.edu.br",
    "matricula": "20222MTFS0014",
    "nome": "talita da silva vitorino",
    "nascimento": "09/02/2000",
    "sexo": "Feminino",
    "naturalidade": "Recife - PE",
    "turma": 0
  },
  {
    "email": "jnam@discente.ifpe.edu.br",
    "matricula": "20222MTFS0015",
    "nome": "joão neto alves de melo",
    "nascimento": "06/02/2001",
    "sexo": "Masculino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "rtyl@discente.ifpe.edu.br",
    "matricula": "20222MTFS0016",
    "nome": "Ricardo Theo Yuri Lopes",
    "nascimento": "01/02/2001",
    "sexo": "Masculino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "sdc3@discente.ifpe.edu.br",
    "matricula": "20222MTFS0017",
    "nome": "Samuel Danilo Costa",
    "nascimento": "01/02/1995",
    "sexo": "Masculino",
    "naturalidade": "Belo Jardim - PE",
    "turma": 0
  },
  {
    "email": "scb2@discente.ifpe.edu.br",
    "matricula": "20222MTFS0018",
    "nome": "Sandra Carolina Barbosa",
    "nascimento": "03/02/2003",
    "sexo": "Feminino",
    "naturalidade": "Paulista - PE",
    "turma": 0
  },
  {
    "email": "tchm@discente.ifpe.edu.br",
    "matricula": "20222MTFS0019",
    "nome": "Thiago Caleb Heitor Moreira",
    "nascimento": "21/01/2002",
    "sexo": "Masculino",
    "naturalidade": "Recife - PE",
    "turma": 0
  },
  {
    "email": "tcer@discente.ifpe.edu.br",
    "matricula": "20222MTFS0020",
    "nome": "Tiago Cauã Elias Rocha",
    "nascimento": "08/02/2000",
    "sexo": "Masculino",
    "naturalidade": "Recife - PE",
    "turma": 0
  }
]
console.log(filtro_naturalidade("Paulista - PE", al));