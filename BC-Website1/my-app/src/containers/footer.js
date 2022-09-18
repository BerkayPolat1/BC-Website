import React from 'react'
import Footer from '../footer'
import Icon from '../icons'


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Lorem ipsum</Footer.Title>
                    <Footer.Link href="#">Lorem ipsum</Footer.Link>
                    <Footer.Link href="#">Lorem ipsum</Footer.Link>
                    <Footer.Link href="#">Lorem ipsum</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Lorem ipsum</Footer.Title>
                    <Footer.Link href="#">Lorem ipsum</Footer.Link>
                    <Footer.Link href="#">Lorem ipsum</Footer.Link>
                    <Footer.Link href="#">Lorem ipsum</Footer.Link>
                    <Footer.Link href="#">Lorem ipsum</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Lorem ipsum</Footer.Title>
                    <Footer.Link href="#">Lorem ipsum</Footer.Link>
                    <Footer.Link href="#">Lorem ipsum</Footer.Link>
                    <Footer.Link href="#">Lorem ipsum</Footer.Link>
                    <Footer.Link href="#">Lorem ipsum</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}