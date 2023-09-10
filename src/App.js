import React,{useState} from 'react';
import './App.css';

function App() {

const[file,setFile] = useState();

 function handleChange(e){
  console.log(e.target.files);
  setFile(URL.createObjectURL(e.target.files[0]));
  document.getElementById('controls').style.display = 'block';
 }

 let brightness = document.getElementById('brightness');
 let contrast = document.getElementById('contrast');
 let grayscale = document.getElementById('grayscale');
 let saturation = document.getElementById('saturation');
 let hue = document.getElementById('hue');
 let sepia = document.getElementById('sepia');
 let inversion = document.getElementById('inversion');
 let blur = document.getElementById('blur');
 let rotate  =  document.getElementById('rotate');

 function changeFilter()
 {
  let filterString =
  "brightness(" + brightness.value + "%" +
        ") contrast(" + contrast.value + "%" +
        ") grayscale(" + grayscale.value + "%" +
        ") invert(" + inversion.value + "%" + 
        ") saturate(" + saturation.value + "%" + 
        ") hue-rotate(" + hue.value + "deg" + 
        ") blur(" + blur.value + "px" + 
        ") sepia(" + sepia.value + "%" +
        ")";
  document.getElementById('edited').style.filter = filterString; 
  console.log(filterString);
 }

const[bright,setBright] = useState(100);
const[cont,setCont] = useState(100);
 const [gray,setGray] = useState(0);
 const[invert,setInvert] = useState(0);
 const[sat,setSat] = useState(100);
 const[blurr,setBlur] = useState(0);
 const[huee,setHue] = useState(0);
 const[sepi,setSepia] = useState(0);

 function reset()
 {
  setBright(100);
  setCont(100);
  setGray(0);
  setInvert(0);
  setSat(100);
  setBlur(0);
  setHue(0);
  setSepia(0);

  brightness.value = 100;
  contrast.value = 100;
  grayscale.value = 0;
  inversion.value = 0;
  saturation.value = 100;
  blur.value = 0;
  hue.value = 0;
  sepia.value = 0;

  let filterString =
  "brightness(" + brightness.value + "%" +
        ") contrast(" + contrast.value + "%" +
        ") grayscale(" + grayscale.value + "%" +
        ") invert(" + inversion.value + "%" + 
        ") saturate(" + saturation.value + "%" + 
        ") hue-rotate(" + hue.value + "deg" + 
        ") blur(" + blur.value + "px" + 
        ") sepia(" + sepia.value + "%" +
        ")";

        document.getElementById('edited').style.filter = filterString; 
 }

  return (
    <>

    <div className='App'>

      <div className='side-bar'>

        <h1>Image Editor</h1>

      <div className='enter'>
      <input type='file' accept="image/*" id='choose-file'  onChange={handleChange} style={{display:'none'}} required/>
      <button className='upload' onClick={()=> document.getElementById('choose-file').click()}>Upload</button>
      </div>

      <div className='controls' id='controls'>
        <table>
          <tr><th>Brightness</th> <td><input type='range' id='brightness' value={bright} onChange={(e) => { setBright(e.target.value); changeFilter()}} min='0' max='200'/><span>{bright}%</span></td></tr>
          <tr><th>Contrast</th> <td><input type='range'id='contrast' value={cont} onChange={(e) => { setCont(e.target.value); changeFilter()}} min='0' max='200'/><span>{cont}%</span></td></tr>
          <tr><th>GrayScale</th> <td><input type='range' id='grayscale' value={gray} onChange={(e) => { setGray(e.target.value); changeFilter()}} min='0' max='200'/><span>{gray}%</span></td></tr>
          <tr><th>Invertion</th> <td><input type='range' id='inversion' value={invert} onChange={(e) => { setInvert(e.target.value); changeFilter()}} min='0' max='200'/><span>{invert}%</span></td></tr>
          <tr><th>Saturation</th> <td><input type='range' id='saturation' value={sat} onChange={(e) => { setSat(e.target.value); changeFilter()}}  min='0' max='200'/><span>{sat}%</span></td></tr>
          <tr><th>Hue</th> <td><input type='range' id='hue' value={huee} onChange={(e) => { setHue(e.target.value); changeFilter()}} min='0' max='200'/><span>{huee}°</span></td></tr>
          <tr><th>Sepia</th> <td><input type='range' id='sepia' value={sepi} onChange={(e) => { setSepia(e.target.value); changeFilter()}} min='0' max='200'/><span>{sepi}%</span></td></tr>
          <tr><th>Blur</th> <td><input type='range' id='blur' value={blurr} onChange={(e) => { setBlur(e.target.value); changeFilter()}} min='0' max='200'/><span>{blurr}px</span></td></tr>
          <button className='reset' onClick={reset}>Reset</button>
        </table>
        
      </div>
      

      </div>

      <div id='img-preview'>
        <img src={file} className='edited' id='edited'/>
      </div>
    
    </div>
    
    </>
  );
}

export default App;
