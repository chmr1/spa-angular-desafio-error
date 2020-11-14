import { Injectable } from '@angular/core';
import { Contato } from './contato.model';

@Injectable({
    providedIn: 'root'
})
export class ContatoService {
    listaTodosContatos(): Contato[] {
        return CONTATOS;
    }
}

var CONTATOS: Contato[] = [
    {
        id: 1,
        nome: "Homer",
        sobrenome: "Simpson",
        urlFoto: "./../../../assets/img/01.jpg",
        telefone: "084988776655",
        marcador: "Principal",
        aniversario: "1960-01-01",
        endereco: "Springfield, 1000",
        observacao: "Homer Jay Simpson é o pai da família Simpson. Ele é um indivíduo com sobrepeso, preguiçoso, alcoólatra e ignorante, mas é fortemente dedicado à sua esposa e filhos. Apesar disso e sua inteligência abaixo da média, ele mostrou momentos de grande intelecto, e pode ser um pai atencioso e um bom marido às vezes."
    },
    {
        id: 2,
        nome: "Martin",
        sobrenome: "Prince",
        urlFoto: "./../../../assets/img/02.jpg",
        telefone: "084988776655",
        marcador: "Principal",
        aniversario: "1960-01-01",
        endereco: "Springfield, 1000",
        observacao: "Martin Prince é o líder de classe da sala onde estuda, pois a professora Edna Krabappel só confia nele. Vive tomando pancadas e puxões de cueca do Nelson por ser cdf, dedo duro e o aluno mais estudioso da sala."
    },
    {
        id: 3,
        nome: "Cletus",
        sobrenome: "Spuckler",
        urlFoto: "./../../../assets/img/03.png",
        telefone: "084988776655",
        marcador: "Principal",
        aniversario: "1960-01-01",
        endereco: "Springfield, 1000",
        observacao: "Cletus é um caipira que vive num sítio com sua irmã, prima e esposa Brandine e cerca de 40 crianças (todos filhos de Brandine, mas não sabe-se ao certo quantos e quais são de Cletus)"
    },
    {
        id: 4,
        nome: "Maude",
        sobrenome: "Flanders",
        urlFoto: "./../../../assets/img/04.png",
        telefone: "084988776655",
        marcador: "Principal",
        aniversario: "1960-01-01",
        endereco: "Springfield, 1000",
        observacao: "Maude Flanders foi uma mulher de muitos dons: fé, castidade, caridade e tem os cílios mais sedutores da cidade de Springfield. Feliz em seu casamento com Ned Flanders, ela foi a mãe coruja de Rod e Todd, nos quais ela incutiu uma devoção inabalável."
    },
    {
        id: 5,
        nome: "Milhouse",
        sobrenome: "Van Houten",
        urlFoto: "./../../../assets/img/05.png",
        telefone: "084988776655",
        marcador: "Principal",
        aniversario: "1960-01-01",
        endereco: "Springfield, 1000",
        observacao: "Milhouse Mussolini Van Houten é o melhor amigo de Bart Simpson. Usa óculos espessos e possui dez anos. Sempre foi tratado como um bebê por seus pais Luanne e Kirk, o que o leva a guardar um enorme rancor deles."
    },
    {
        id: 6,
        nome: "Disco Stu",
        sobrenome: "",
        urlFoto: "./../../../assets/img/06.jpg",
        telefone: "084988776655",
        marcador: "Principal",
        aniversario: "1960-01-01",
        endereco: "Springfield, 1000",
        observacao: "Disco Stu é dono da discoteca Stu's Disco e é fanático por Disco music Ele vive como se estivesse nos anos 70. Usa black power,  jaquetas a lá John Travolta, um medalhão de ouro e sapatos de plataforma. Já se casou com Selma Bouvier e quando fala dá uma ênfase ao nome Stu."
    },
    {
        id: 7,
        nome: "Ralph",
        sobrenome: "Wiggum",
        urlFoto: "./../../../assets/img/07.jpg",
        telefone: "084988776655",
        marcador: "Principal",
        aniversario: "1960-01-01",
        endereco: "Springfield, 1000",
        observacao: "Ralph Wiggum é o filho do chefe de polícia Clancy Wiggum. Por não ter amigos, com tendência a ser incendiário (influenciado por um duende), é considerado especial por causa de suas brincadeiras com amigos invisíveis, como o Wiggum Puppy (um cachorro imaginário que voa ao abanar a cauda), e porque sempre está distraído."
    },
    {
        id: 8,
        nome: "Dr. Julius",
        sobrenome: "Hibbert",
        urlFoto: "./../../../assets/img/08.jpg",
        telefone: "084988776655",
        marcador: "Principal",
        aniversario: "1960-01-01",
        endereco: "Springfield, 1000",
        observacao: "Julius Hibbert é um dos mais conceituados médicos de Springfield. Por diversas vezes salvou a vida de membros da família Simpson, principalmente de Homer de bom coração, tem o péssimo hábito de rir nas horas mais impróprias, sobretudo no que diz respeitos às injúrias de seus pacientes."
    },
    {
        id: 9,
        nome: "Chefe Wiggum",
        sobrenome: "",
        urlFoto: "./../../../assets/img/09.jpg",
        telefone: "084988776655",
        marcador: "Principal",
        aniversario: "1960-01-01",
        endereco: "Springfield, 1000",
        observacao: "Clancy Wiggum é o Chefe de Polícia da cidade de Springfield. Pode ser considerado como uma pessoa irresponsável, incompetente e corrupta. É o pai de Ralph Wiggum, o pior aluno da classe de Lisa Simpson. Clancy Wiggum é o Delegado do Departamento de Polícia de Springfield, o braço longo e atarracado da lei."
    },
    {
        id: 10,
        nome: "Montgomery",
        sobrenome: "Burns",
        urlFoto: "./../../../assets/img/10.jpg",
        telefone: "084988776655",
        marcador: "Principal",
        aniversario: "1960-01-01",
        endereco: "Springfield, 1000",
        observacao: "Bilionário, egoísta, maquiavélico, estrategista e cruel, eis a perfeita descrição de Charles Montgomery Burns. Devido à sua impressionante idade ele tornou-se extremamente frágil, adquiriu inúmeras doenças, dificuldades para levantar uma pena e a inacreditável e totalmente inútil capacidade de espirrar e ter seu cérebro exposto."
    }
];