import * as yup from 'yup';


// schema do cadastro
export const schema = yup.object().shape({
  titulo: yup.string().required('O título é obrigatório'),
  diretor: yup.string().required('O diretor é obrigatório'),
  duracao: yup.string().required('A duração é obrigatória'),
  avaliacao: yup.number().min(0).max(5).required('A avaliação é obrigatória'),
  ano: yup.string().required('O ano é obrigatório'),
  genero: yup.string().required('O gênero é obrigatório'),
  elenco: yup.string().required('O elenco é obrigatório'),
  classificacao: yup.string().required('A classificação é obrigatória'),
  sinopse: yup.string().required('A sinopse é obrigatória'),
});
