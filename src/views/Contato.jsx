import React from "react";

export default function Contato () {
    return (
         <>
            <table class="contatos">
               <tr className="alinhamento">
               <td className="alinhar">
                  <h2>Agência Física-SP</h2>
                  <h4>São Paulo</h4>
                  <p>Av.Giovanni Grochi; 997</p>
                  <p>18 &ordm;andar</p>
                  <p>(11) 3876-4747</p>
               </td>
               <td className="alinhar">
                  <h2><f>Agência Física-RJ</f></h2>
                  <h4>Rio de Janeira</h4>
                  <p>Rua Jardim Botânico-254</p>
                  <p>5 &ordm;andar</p>
                  <p>(21) 5856-1717</p>
               </td>
               <td className="alinhar">
                  <h2>Televendas</h2>
                  <p>Segunda à Sábado das 8h às 18h</p>
                  <p>Domingos e Feriados das 9h às 14h</p>
                  <p>(11) 5568-198</p>
                  <p><img src="./img/email.png"/>dallastrip@gmail.com</p>
                  
                  
               </td>   
               </tr>
               </table>
                  <div className="mensagem">
                     <p>Fale Conosco</p>
                     <label for="exampleFormControlInput1" class="form-label">Email </label>
                     <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                  
                     <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
                    
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div><br></br>
               
         </>
         
      );
   }