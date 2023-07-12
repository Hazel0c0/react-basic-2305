import React from 'react'

const SubmitEvent = () => {
 
    const send = e => {
        e.preventDefault(); // submit기능 중지

        const $nick = document.getElementById('nickName');
        console.log($nick.value);
    };

    const buttonStyle = {
        color : 'red',
        backgroundColor: 'orange',
        fontSize : '1.5em'
    };

    return (
        <form onSubmit={send}>
            <input type='text' id='nickName' name='nick' />
            <button style={buttonStyle} type='submit'>확인</button>
        {/* style 에 객체를 쓰고 싶으면 {{}} 중괄호 한번 더 써줘야함 */}
        </form>
    )
}

export default SubmitEvent