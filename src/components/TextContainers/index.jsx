import styled from "styled-components"
import foto from "./foto.png"

const HomeImg = styled.img`
width: 30rem;
height: 30rem;
border-radius: 50%;
margin: 2rem auto;
display: block;
`

const ContainerOfText = styled.div`
box-sizing: border-box;
margin: 0 0.8rem;
min-width: 36rem;

@media (max-width: 900px) {
    margin: 0.5rem auto;
    width: 95%; 
}
`

const LeftTextContainer = styled(ContainerOfText)`
width: 40%;
`

const RightTextContainer = styled(ContainerOfText)`
width: 60%;
`

const Content = styled.div`
background: white;
border-radius: 2rem;
padding: 2rem 0;
`

const Text = styled.p`
padding:  0 3rem;
font-size: 1.7rem;
line-height: 2rem;
color: black;
`

const SubTitle = styled.h2`
font-size: 2.5rem;
padding: 1rem 3rem;
`

export default function TextContainer() {
    return (
        <>
            <LeftTextContainer>
                <HomeImg src={foto} alt="Foto do autor" />

                <Content>

                    <SubTitle>Sobre Mim</SubTitle>
                    <Text>
                        Atualmente curso economia na UFMG, além de estudar Python voltado
                        para análise de dados na Alura. Além disso, já estudei React, também
                        na Alura, e fiz um curso de desenvolvimento web e outro de Node.js na Udemy.
                    </Text>
                    <SubTitle>Motivação</SubTitle>
                    <Text>
                        Este site foi criado para servir como meu portifólio e currículo. Além
                        disso, ele é o primeiro projeto que eu criei e desenvolvi completamente
                        sozinho, como estudo para o curso de HTML, CSS e JavaScript q eu estava
                        fazendo. Então, ao aprender react, decidi reconstruí-lo nessa tecnologia.
                    </Text>
                    <SubTitle>Informações Adicionais</SubTitle>
                    <Text>
                        Data de Nascimento: 01/10/2000 - 22 anos
                        <br />
                        leandro.mos.l11@gmail.com
                    </Text>

                </Content>

            </LeftTextContainer>
            <RightTextContainer>

                <Content>

                    <SubTitle>Conhecimentos</SubTitle>
                    <Text>
                        Linguagem JavaScript:
                        <br />
                        - Desenvolvimento Web(front-end): HTML, CSS e React.
                        <br />
                        Linguagem Python:
                        <br />
                        - Pandas, openpyxl e web scraping.
                        <br />
                        Pacote Office: Intermediário (Fórmulas básicas, funções avançadas, gráficos e tabelas dinâmicas).
                        <br />
                        Inglês: Avançado.
                    </Text>
                    <SubTitle>Experiências</SubTitle>
                    <Text>
                        Tangram
                        <br />
                        - Estagiário de Criação de Conteúdo Financeiro
                        <br />
                        - Início em Set 2022 - Out 2022
                        <br />
                        Fui responsável pela criação de conteúdos e atividades sobre finanças.
                    </Text>
                    <SubTitle>Atividades Extracurriculares</SubTitle>
                    <Text>
                        Liga de Mercado e Negócios UFMG
                        <br />
                        - Assessor na Diretoria de Estratégia
                        <br />
                        - Início em Jul 2020 - Jun 2021 (1 ano)
                        <br />
                        - Membro da equipe de Consultoria em Gestão Financeira
                        <br />
                        - Início em Jul 2020 - Dez 2020 (6 meses)
                        <br />
                        - Líder da equipe de Consultoria em Gestão Financeira
                        <br />
                        - Início em Jan 2021 - Jun 2021 (6 meses)
                        <br />
                        Formada por, e para os, alunos da UFMG, a Liga de Mercado e Negócios, LMN, tem como missão “Diminuir o hiato entre o mercado de trabalho e os alunos da UFMG”.
                    </Text>
                    <SubTitle>Escolaridade</SubTitle>
                    <Text>
                        Conclusão Ensino Médio - Dezembro 2018
                        <br />
                        Fundação de Ensino de Contagem ( FUNEC) - Unidade Xangri-lá
                        <br />
                        <br />
                        Superior em Curso - Início 2019/2 - Previsão de Conclusão 2024/2
                        <br />
                        Economia - 5° Período - Matutino
                        <br />
                        UFMG - Universidade Federal de Minas Gerais
                    </Text>

                </Content>

            </RightTextContainer>
        </>
    )
}
