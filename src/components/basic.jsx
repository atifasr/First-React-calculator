// Calculator

import React, { useEffect, useState } from 'react';

let Button = (props) => {
    let style_obj = {
        color : '',
        fontSize :'',
        margin : '5px',
        width :'20%',
        height : '20%',
        padding : '3px'

    }
    if (props.value === 'C')
    {
        style_obj.color = 'purple'
        style_obj.fontSize = '1em'

    }
    else{
        style_obj['color'] = 'orange'
        style_obj['fontSize'] = '1em'
    }

    if (props.buttonType === 'operator')
    {
        style_obj['color'] = 'black'
        style_obj['borderRadius'] = '3px'
    }

    return (
        <button onClick = {props.onClick} className={props.className} value={props.value} style={style_obj}> {props.value}</button>
    )
}



let TextBox = (props) => {
    let width = props.size
    return (
        <input type="text" value = {props.value} style={{width:width,height:props.width_size,fontSize:props.fontSize}} readOnly />
    )
}


let AnswerTextBox = (props) => {
    return (
        <label htmlFor="">{props.value}</label>
    )
}


const Calculator = (props) => {

    const [textvalue,settextvalue] = useState(0)
    const [temp_storage,set_temp_storage] = useState(0)
    const [temp_operator,set_temo_operator] = useState(0)
    

    useEffect(() => {
        // setState(stateValue-1)
        // any APi call here
    }) 


    function onChange(e) {
        let value = textvalue
        
        if (parseInt(value) == 0)
        {
            value = e.target.value
        }
        else
        {
            value += e.target.value
        }
        settextvalue(value)
    }


    function onClear(e){
        settextvalue(0)
    }

    function plusOperation(e){
        let value = textvalue
        settextvalue(0)
        set_temp_storage(parseInt(textvalue))
        set_temo_operator(e.target.value)
        


    }

    function subtractOperation(e){
        
        settextvalue(0)
        set_temp_storage(parseInt(textvalue))
        set_temo_operator(e.target.value)
    }

    function mutliplyOperation(e){
        settextvalue(0)
        set_temp_storage(parseInt(textvalue))
        set_temo_operator(e.target.value)
    }

    function divideOperation(e){
        settextvalue(0)
        set_temp_storage(parseInt(textvalue))
        set_temo_operator(e.target.value)
    }


    function calculate(e){
        
            // settextvalue(0)
        if( temp_operator === '+' )
        {   
            let operation_result = temp_storage + parseInt(textvalue)
            settextvalue(operation_result)
        }

        if( temp_operator === '-' )
        {   
            let operation_result = temp_storage - parseInt(textvalue)
            settextvalue(operation_result)
        }

        if( temp_operator === '/' )
        {   
            let operation_result = temp_storage / parseInt(textvalue)
            settextvalue(operation_result)
        }

        if( temp_operator === '*' )
        {   
            let operation_result = temp_storage * parseInt(textvalue)
            settextvalue(operation_result)
        }

    }


    return (
        <div className='row py-2' style={{backgroundColor:'grey',borderRadius:'5px'}}>
            <div className='col-md-12'>
                <TextBox className='' value={textvalue} size="300px" width_size = "100%" fontSize ="2em" style={{borderRadius:'7px'}} />              
            </div>
       
           <div className='row'>
               <div className="col-md-12 mx-auto">
                <Button onClick={onChange} className="btn btn-primary p-2" buttonType ="operand" value="1"/> 
                <Button onClick={onChange} className="btn btn-primary p-2" buttonType ="operand" value="2"/> 
                <Button onClick={onChange} className="btn btn-primary p-2" buttonType ="operand" value="3"/>
                <Button onClick={onChange} className="btn btn-primary p-2" buttonType ="operand" value="4"/> 
                <Button onClick={onChange} className="btn btn-primary p-2" buttonType ="operand" value="5"/>
                <Button onClick={onChange} className="btn btn-primary p-2" buttonType ="operand" value="6"/> 
                <Button onClick={onChange} className="btn btn-primary p-2" buttonType ="operand" value="7"/> 
                <Button onClick={onChange} className="btn btn-primary p-2" buttonType ="operand" value="8"/> 
                <Button onClick={onChange} className="btn btn-primary p-2" buttonType ="operand" value="0"/> 
                <Button onClick={onClear} className="btn btn-danger" buttonType ="operand" value="C"/> 
                <Button onClick={plusOperation} className="btn-secondary" buttonType ="operator" value="+"/>
                <Button onClick={subtractOperation} className="btn-secondary" buttonType ="operator" value="-"/> 
                <Button onClick={divideOperation} className="btn-secondary" buttonType ="operator" value="/"/> 
                <Button onClick={mutliplyOperation} className="btn-secondary" buttonType ="operator" value="*"/> 
                <Button onClick={calculate} className="btn-secondary" buttonType ="" value="="/>  
               </div>

           </div>
        </div>
    )

}






export { Calculator }

