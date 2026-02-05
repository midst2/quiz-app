import React, { useState, useEffect, useContext } from 'react'
import QuestionData from '../data/QuestionData'
import { DataContext } from '../App'

const Quiz = () => {
    const [current, setCurrent] = useState(0)
    const [selectChoice, setSelectChoice] = useState("")
    const {score, setScore, setAppState} = useContext(DataContext)

    useEffect(() => {
        checkAnswer()
    }, [selectChoice])

    const checkAnswer = () => {
        if (selectChoice !== "") {
            if (selectChoice === QuestionData[current].answer) {
                console.log("Correct")
                setScore(score+1)
                
            }
            else {
                console.log("incorrect")
            }
            nextQuestion()
            
        }
    }

    const nextQuestion=()=>{
        if(current===QuestionData.length-1){
            setAppState("score")
        }
        else
        setCurrent(current+1)
        setSelectChoice("")
    }
    return (
        <div className='quiz'>
            <h1>{QuestionData[current].question}</h1>
            <div className="choices">
                <button onClick={() => setSelectChoice("A")}>{QuestionData[current].A}</button>
                <button onClick={() => setSelectChoice("B")}>{QuestionData[current].B}</button>
                <button onClick={() => setSelectChoice("C")}>{QuestionData[current].C}</button>
                <button onClick={() => setSelectChoice("D")}>{QuestionData[current].D}</button>
            </div>
            <p>{`${current + 1} / ${QuestionData.length}`}</p>
        </div>
    )
}

export default Quiz