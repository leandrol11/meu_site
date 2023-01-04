import styled from "styled-components"
import Card from "../Card"
import { posts } from "db/data.js"

const SectionTitle = styled.h1`
    padding: 3rem 5rem;
    font-size: 4rem;
    line-height: 4rem;
    text-align: center;
    color: black;
`

const CardsContainer = styled.ul`
    display: flex;
    align-itens: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`

export default function Projects() {
    return (
        <section>
            <SectionTitle id="portifolio"> Meu Portifólio </SectionTitle>

            <CardsContainer>
                {posts.map((post) => (
                    <li key={post.id} >
                        <Card post={post} />
                    </li>
                )
                )}
            </CardsContainer>
        </section>
    )
}