import { useState, useEffect } from 'react'
import './App.css'

function App() {
  type Color = {
    RGB : string,
    HEXA : string
  }
  
  const [displayColor, setDisplayColor] = useState<string>('rgb(049, 049, 053)');
  const [RGBValue, setRGBValue] = useState<string>('rgb(049, 049, 053)');
  const [HexaValue, setHexaValue] = useState<string>('#313135');
  const [galeryTrigger, setGaleryTrigger] = useState<boolean>(false);
  const [PageMode, setPageMode] = useState<boolean>(true);
  const [savedColors, setSavedColors] = useState<Color[]>(() => {
    const saved = localStorage.getItem('SavedColorList');
    return ((saved) ? JSON.parse(saved) : [{RGB :'rgb(049, 049, 053)', HEXA :'#313135'}])
  })

  useEffect(() => {
    localStorage.setItem('SavedColorList', JSON.stringify(savedColors))
  },[savedColors])

  const Generate = () => {
    let finalArr = [];
    for (let i = 0; i < 3; i++) {
      finalArr.push((Math.floor(Math.random() * 255)).toString());
    }
    const newRGB = `rgb(${finalArr.join(', ')})`;
    setDisplayColor(newRGB);
    setRGBValue(newRGB);
    setHexaValue(RGB_to_HEXA(newRGB));
  }

  const RGB_to_HEXA = (Value : string) => {
    let rgbValues = Value.match(/\d+/gi);
    if (rgbValues == null) {
      return 'Error as occured !'
    }
    let finalHexaColor = ["#"];
    rgbValues.forEach(Element => finalHexaColor.push((+Element).toString(16).padStart(2, '0')));
    
    return (finalHexaColor.join(''))
  }


  const changeBase = () => {
    if (!displayColor.includes('#')) {
      setDisplayColor(HexaValue);
    }
    else {
      setDisplayColor(RGBValue);
    }
  }

  const SaveColor = () => {
    let newObj = {
      RGB : RGBValue,
      HEXA : HexaValue
    }
    if (newObj.RGB !== null || newObj.RGB !== undefined && newObj.HEXA !== null || newObj.HEXA !== undefined) {
      setSavedColors(prevSavedColors => [...prevSavedColors, newObj]);
    }
  }

  const Reset = () => {
    setDisplayColor('rgb(049, 049, 053)');
    setRGBValue('rgb(049, 049, 053)');
    setHexaValue('#313135');
    setSavedColors([{RGB :'rgb(049, 049, 053)', HEXA :'#313135'}])
    setGaleryTrigger(false)
  }

  const Copy1 = () => {
    navigator.clipboard.writeText(RGBValue).then(() => {
      alert("Text copied to clipboard!");
    }).catch((err) => {
      console.error("Could not copy text: ", err);
    });
  };

  const Copy2 = () => {
    navigator.clipboard.writeText(HexaValue).then(() => {
      alert("Text copied to clipboard!");
    }).catch((err) => {
      console.error("Could not copy text: ", err);
    });
  };

  const GaleryDisplay = () => {
    setGaleryTrigger(!galeryTrigger);
  }

  const DarkMode = () => {
    setPageMode(!PageMode)
  }

  const Display = (color: Color) => {
    setRGBValue(color.RGB);
    setHexaValue(color.HEXA);
    setDisplayColor(color.RGB); 
  };
  

  return (
    <>
      <div className="mainContainer" style={{backgroundColor : (PageMode) ? "#18181b" : "rgba(135, 135, 135, 0.8)"}}>

        <div className="header">
          <div className="headerContainer">
            <h1>RGB/Hexa Color Generator</h1>
            <p>Generate some Random color for your own projet !</p>
          </div>
          <div className='darkButton'>
            <label htmlFor="no">Dark Mode</label>
            <input type="submit" className="darkmode" value={"   "} onClick={DarkMode}/>
          </div>
        </div>

        <div className="content">
          <div className="colorStand" style={{backgroundColor : displayColor}}>
            <p style={{color : ((+displayColor.slice(9, 12) >= 180 || +displayColor.slice(4, 7) >= 200) ? 'black' : 'bisque')}}>{displayColor}</p>
            <div className='ChangeBase'>
              <input type="submit" value={"Change Base"} onClick={changeBase}/>
            </div>
          </div>
          <div className="buttons">
            <input type="submit" className="Generate" value={"Generate"} onClick={Generate}/>
            <input type="submit" className="SaveColor" value={"Save Color"} onClick={SaveColor}/>
          </div>
        </div>

        <div className="Container">
            <div className="subContainer">
              <p style={{color : `${RGBValue}`}}>RGB Value : </p>
              <div><p style={{color : `${RGBValue}`}}>{RGBValue}</p></div>
              <input type="submit" value={"Copy"} onClick={Copy1} style={{backgroundColor : `${HexaValue}`}}/>
            </div>
            <div className="subContainer">
              <p style={{color : `${HexaValue}`}}>Hexa Value : </p>
              <div ><p style={{color : `${HexaValue}`}}>{HexaValue}</p></div>
              <input type="submit" value={"Copy"} onClick={Copy2} style={{backgroundColor : `${HexaValue}`}}/>
            </div>
        </div>
        
        <div className="galery" style={{ display: (galeryTrigger) ? "grid" : "none" }}>
          {savedColors.map((element, index) => (
            <div className="SavedColor">
              <div className="Values">
                <label htmlFor="RGB">{element.RGB}</label>
                <label htmlFor="HEXA">{element.HEXA}</label>
              </div>
            <div className="colorBlock" style={{backgroundColor : `${element.RGB}`}}></div>
            <input type="submit" className='Display' value={"Display"} onClick={() => Display(element)}/>
            </div>
          ))}
        </div>

        <div className="lastContent">
          <div className="header">
            <h1>Saved Color</h1>
          </div>
          <div className="savedList"><p>{((savedColors.length > 1) ? <input type="submit" value={galeryTrigger ? "Close Galery" : "Open Galery"} className='GaleryButtun' onClick={GaleryDisplay}/> : "No saved colors")}</p><input type="submit" onClick={Reset} value={"Reset"} className='ResetButtun'/></div>
        </div>

        <div className="portfolioFooter">
          <p>© 2024 NERDIG Alexandre | <a href="../Projet_HTML_CSS/portfolio.html">Portfolio</a> | <a href="https://github.com/AlexandreNERDIG">GitHub</a> | <a href="https://www.linkedin.com/in/alexandre-nerdig-8980382a5/">LinkedIn</a></p>
        </div>
      </div>
    </>
  )
}

export default App
