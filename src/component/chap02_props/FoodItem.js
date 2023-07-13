import React from 'react'

const FoodItem = ({foodId: id, foodName: fName, price}) => {
    // = (props)를 받아서 사용 할 수 있음
    // props.foodId, props.foodName <- 이렇게

    // console.log('props: ', props);
    return ( 
        <li id={id}> {fName}({price}원) </li>
    //     문자열은 중괄호 생략 가능 '문자' {정수, boolean, 배열..}
    )
}

export default FoodItem