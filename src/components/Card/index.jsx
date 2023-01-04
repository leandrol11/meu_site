import styled from "styled-components"

const CardContainer = styled.div`
    padding: 1rem;
    padding-top: 0;
    margin: 1.5rem;
    background: white;
    border: 0.5rem solid black;
    border-radius: 2rem;
    text-align: center;
    max-width: 33rem;
    max-height: 33rem;
`

const Title = styled.h2`
    font-size: 2.5rem;
    color: black;
    padding: 1rem;
`
const Image = styled.img`
    height: 28rem;
    width: 28rem;
    border-radius: 1rem;
`

export default function Card({ post }) {
    return (
        <CardContainer>
            <a href={post.link}>
                <Title>{post.title}</Title>
                <Image src={`/img/${post.photo}`} alt={post.title} />
            </a>
        </CardContainer>
    )
}