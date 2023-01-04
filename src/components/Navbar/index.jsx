import styled from "styled-components"
import git from "./github.svg"
import linkedin from "./linkedin.svg"

const Menu = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 1;
    background: #2F8F9D;

    @media (max-width: 900px) {
        display: none;
    }
`

const MenuContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
    max-width: 120rem;
    margin: 0 auto;
`

const MyName = styled.h1`
    font-size: 2.3rem;
    cursor: pointer;
`

const Name = styled.a`
    color: white;
`

const Options = styled.ul`
    list-style: none;
    display: flex;
`

const Btn = styled.a`
    display: block;
    padding: 2rem;
    font-size: 1.8rem;
    position: relative;
    color: white;

    &::after {
        content: "";
        position: absolute;
        bottom: 1rem;
        left: 50%;
        width: 0;
        height: 0.2rem;
        background: white;
        transition: all 300ms ease-in-out;
    }

    &:hover::after {
        width: 50%;
        left: 25%;
    }
`

const MobileMenu = styled.div`
    display: none;

    @media (max-width: 900px) {
        position: fixed;
        top: 1rem;
        right: 1rem;
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 0.5rem;
        font-size: 3rem;
        line-height: 3rem;
        z-index: 2;
        background: #2F8F9D;
        color: white;
        border-radius: 1rem;
        cursor: pointer;      
    }
`

const Image = styled.img`
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
`

export default function NavBar() {
    return (
        <header>
            <MobileMenu>
                <a href="https://github.com/leandrol11" >
                    <Image src={git} alt="Logo GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/leandro-m-o-silva/" >
                    <Image src={linkedin} alt="Logo Linkedln" />
                </a>
            </MobileMenu>

            <Menu>
                <MenuContent>
                    <MyName>
                        <Name href="#">Leandro Maciel</Name>
                    </MyName>
                    <nav>
                        <Options>
                            <li><Btn href="#">Sobre Mim</Btn></li>
                            <li><Btn href="#portifolio">Projetos</Btn></li>
                            <li><Btn href="https://www.linkedin.com/in/leandro-m-o-silva/">Linkedln</Btn></li>
                            <li><Btn href="https://github.com/leandrol11">GitHub</Btn></li>
                        </Options>
                    </nav>
                </MenuContent>
            </Menu>
        </header>
    )
}