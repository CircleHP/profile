import React, { useState } from 'react';

import { saveDataToLocalStorage } from 'store';
import './Preferences.styled.sass';
import {Link} from 'react-router-dom';

const Preferences = ({ userData, setUserData }) => {

    //code needed to save the checkboxed preferencies into the localStorage
    const [] = useState(userData.currentPassword);
    const [] = useState(userData.newPassword);
    const [] = useState(userData.confirmNewPassword);

    const userDataObject = {
        
    };

    const handleSave = () => {
        setUserData(userDataObject);
        saveDataToLocalStorage(userDataObject);
    };

    return (

            <div className="department">
    
            <p>Mina prefererade industrier att investera inom:</p>
    
            <form>
            <tr>
            <td>
            <input type="checkbox" name="industry" />
            Bygg
            </td>
            <td>
            <input type="checkbox" name="industry" />
            Medicin
            </td>
            </tr>
    
            <tr>
            <td>
            <input type="checkbox" name="industry" />
            Utbildning
            </td>
            <td>
            <input type="checkbox" name="industry" />
            Teknologi
            </td>
            </tr>
    
            <tr>
            <td>
            <input type="checkbox" name="industry" />
            Jordbruk
            </td>
            <td>
            <input type="checkbox" name="industry" />
            Mass media
            </td>
            </tr>
    
            <tr>
            <td>
            <input type="checkbox" name="industry" />
            Reklam
            </td>
            <td>
            <input type="checkbox" name="industry" />
            Resa
            </td>
            </tr>
           
            </form>
    
            <p>Tips! Ifall du väljer att integrera din bank så kan vi anpassa dina
            <br />
            investeringar utefter din ekonomi och preferenser.
            </p>
    
            <Link>Integrera min bank</Link>
            <p>(detta kommer att skicka dig vidare etc...)</p>
    
            <button onClick={() => handleSave()} className='button-save'>Spara</button><br/> 

            </div>

            
    );
};

export default Preferences;