import React from "react"
import "../../../styles/style.css"
import { LoginSetupContainer } from "../../../containers/loginsetup"

export default class LoginFirstFrame extends React.Component {
    constructor() {
        super()
        this.state = {
         
        }
    }

    render() {
        return (
            <>
            <section id="intro" className="c-paper c-paper--no-border-radius-bottom h-mb-0">
              <LoginSetupContainer/>     
              			  <p>Thank you for your interest in InterSTEM Bowl! To register and obtain an account, sign up above.</p>
            </section>
    
            </>
        )
    }
}