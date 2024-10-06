import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export default function ImageAdditionContainer({ uniqueName,image, setImage }) {
  return (
    <>
      <input
        accept=".png,.jpg,.jpeg"
        type="file"
        className="hidden"
        id={uniqueName+"image-upload-input"}  // Use a unique ID here
        onChange={() => {
          setImage((prevData) => [
            ...prevData,
            ...document.getElementById(uniqueName+"image-upload-input").files
          ]);
          console.log(image)
        }}
      />
        <div className="flex flex-wrap items-center justify-center gap-5 border rounded-md overflow-hidden">
          {image.map((element, index) => (
            <div key={index} className="relative w-[180px] h-[210px] shadow-lg rounded-md overflow-hidden">
                <button className="w-[15px] h-[15px] bg-red-500 rounded-full flex items-center justify-center border border-black shadow-lg absolute top-0 right-0 cursor-pointer"
                title="Remove"
                onClick={()=>{
                    setImage(prevData=>prevData.filter((_,i)=>i!=index))
                }}/>
              <img src={URL.createObjectURL(element)} alt="Uploaded" className="w-full h-full p-2" />
            </div>
          ))}
          <label
            htmlFor={uniqueName+"image-upload-input"} 
            className="flex items-center justify-center w-[180px] h-[210px] shadow-lg m-5 cursor-pointer hover:scale-105 transition-all duration-300 rounded-md"
          >
            <FontAwesomeIcon icon={faPlus} size="2x" />
          </label>
        </div>
    </>
  );
}
