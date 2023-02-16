import axios from 'axios';
import React, {useState} from 'react';
import { getData, saveData, uploadData } from '../../services/apiServices';
const UploadFile = () => {

    const [file, setFile] = useState()
    const [progress, setProgress] = useState()
    const [error, setError] = useState(null)
    const [submitting, setSubmitting] = useState(false)

    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }

    
    // const onSelectFile =  (e) => {
    //     setFile(e.target.files[0]);
    //     console.log("onSelectFile Exctd", file)
    // }

    // const handleSubmit= async (e)=>{
    //     e.preventDefault()
    //     if(!file) return;

    //     const formData=new FormData()
    //     formData.append("file", file);
    //     formData.append("fileName", file.name);
    //     const config={
    //         headers:{
    //             "content-type":"multipart/form-data",
    //         },
    //         onUploadProgress:(progress) => { 
    //             const percentComplete=Math.round(progress.loaded*100)/progress.total;
    //          }
    //     }
    //     try{
    //         await uploadData('/uploadFile/images', formData, config)
    //         // await setTimeout(() => {
    //         //     console.log("try exctd")
    //         // }, 2000);
    //     }
    //     catch(e){
    //         setError(e.message)
    //     }
    //     finally{
    //         setSubmitting(false)
    //         setProgress(0)
    //     }
    // }

    // const onSelectFile = async (event) => {
    //     const file = event.target.files[0];
    //     const convertedFile = await convertToBase64(file);
    //     const s3URL = await uploadData(
    //         '/uploadFile/images',
    //         {
    //             image: convertedFile,
    //             imageName: file.name
    //         }
    //     );
    // }

    const onSelectFile = async (event) => {
        const file = event.target.files[0];
        console.log("file>>>", file)
        const convertedFile = await convertToBase64(file);
        const s3URL = await saveData('/s3Url',{fileName:file.name});
        if(s3URL){
            // post the image direclty to the s3 bucket
        const uploadRes=  await axios.put(s3URL.data.url, {
              headers: {
              "Content-Type": "multipart/form-data"
              },
              body: convertedFile
          })
            console.log("s3URL >>>>>>>>>>>>>", s3URL.data.url
            )
            if(uploadRes){
                console.log("uploadRes>>>>>", uploadRes)
            }
        }
    }

    return (
        // <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*" onChange={onSelectFile}/>
        //     <button type='submit'>Submit</button>
        // </form>
    )
}
export default UploadFile;