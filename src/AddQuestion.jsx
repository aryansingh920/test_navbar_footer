import React from 'react'
import EditQuestion from './EditQuestion'
import { useState } from "react";

const AddQuestion = () => {
  const [question,setQuestion] = useState([["question 1","radio"],["question 2","text"]])

  return (
    <div>
    <div className="container">
    {question.map((el,ind)=>{
      // console.log(el)
      return (
        <div>
      <EditQuestion key={ind} data={el[0]} type={el[1]}/>
      <hr/>
      <br/>

      </div>
      )
    })}
      <button onClick={
        ()=>{
          setQuestion((prev)=>{
            return([...prev,["new question","radio"]])
          })
        }
      } type="button" className="btn btn-outline-primary">
        Add Option type Question
      </button>
      <button onClick={
        ()=>{
          setQuestion((prev)=>{
            return([...prev,["new question","text"]])
          })
        }
      } type="button" className="btn btn-outline-primary">
        Add text type Question
      </button>
    </div></div>
  )
}

export default AddQuestion