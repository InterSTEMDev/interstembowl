import React from "react" 
import { Jan4Archive, Jan11Archive} from "../archive/index"
export default class Jan18Archive extends React.Component {
    constructor() {
        super()
        this.state = {
            showMessage: false,
            message: "See past POTDs (late submission allowed)"
        }
    }


    _showMessage = (bool, e) => {
        this.setState({
          showMessage: bool,
        
        });
        if (bool) {
            this.setState({
                message: "Collapse all POTDs" 
              
              });
        }
        else {
            this.setState({
                message: "See past POTDs (late submission allowed)" 
              
              });
        }
      }



    render() {
        return (
            <>
         <section id="intro" className="c-paper archive c-paper--no-border-radius-bottom h-mb-0" style={{paddingTop: 0}}>
     <br></br>
     <p>1. Suppose you play a game where you begin with a score of 0 and aim to maximize the amount of coins earned. On every turn, you receive a coin to flip. A heads results in 1 point added to your score, but a tails results in a “strike” and the loss of all your points. Prove the optimal strategy for this game along with the expected earnings of that strategy.</p>
     <br></br>
     <p>2.</p>
            <pre>{`
              B   C   D   E   ?   I   K   O   X
            `}
            </pre>
           
    <br></br>
     <p>3. Define sustainability and one environmental problem in your region. Propose an effective solution and support your answer with scientific evidence. </p>
        <br></br>
     <p>4. On January 21, 1793, King Louis XVI was executed by guillotine. Using reasonable approximations and physical reasoning, determine the necessary height a guillotine blade must fall to cleanly execute the average man. 
    </p>
    <br></br>
    <p>5. The formula for affine cipher encryption is ax + b (mod 26), where a and b are integers. Given an all-lowercase, no-space plaintext (String), a (int) and b (int), write a program to find the ciphertext. Any code that can produce the correct output will be granted full credit;
    pseudocode can gain partial credit.  
    <br></br>Input format: n (number of letters in plaintext), a, b, and actual plaintext. 
    <br></br><br></br><u>Sample input #1:</u> 
    <br></br>5
    <br></br>3
    <br></br>1
    <br></br>hello
    <br></br><br></br>
    <u>Sample output #1:</u>
    <br></br>wniir </p>

         </section>

 
    
 
        

      
    
             </> 
        )
    }
}
