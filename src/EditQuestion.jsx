import { useState } from "react";

const EditQuestion = ({ data,type }) => {
  const [option,setOption] = useState(["Option 1","Option 2","Option 3"])

  return (
    



    <div className="container bg-light rounded p-4">
      {type === "radio" && (
        <div>
          <div className="input-group mb-3">
            <input
            value={data}
              type="text"
              className="form-control"
              placeholder="OTP Questions , Enter your question"
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Button
            </button>
          </div>



          <div className="row">
            {option.map((el,ind)=>{
                return(
                    <div key={ind} className="col-4">
                    <div className="input-group mb-3">
                      <div className="input-group-text">
                        <input
                          className="form-check-input mt-0"
                          type="checkbox"
                          checked="checked"
                          aria-label="Checkbox for following text input"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder={el}
                        className="form-control"
                        aria-label="Text input with checkbox"
                      />
                    </div>
                  </div>
                )
            })}
            </div>
            <button onClick={
                ()=>{
                  setOption((prev)=>{
                    return([...prev,`New Option`])
                  })
                }
              } type="button" className="btn btn-outline-primary">
                Add More Options
              </button>



        </div>
      )}
      {type === "text" && (
        <div className="input-group mb-3">
          <textarea
          value={data}
            type="text"
            className="form-control"
            placeholder="Text options , Enter your question"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      )}
    </div>
  );
};

export default EditQuestion;
