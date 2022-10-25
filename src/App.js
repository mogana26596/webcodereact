import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import QuestionComponent from './QuestionComponent';
import UserComponent from './UserComponent';
import TagComponent from './TagComponent';
import CompaniesComponent from './CompaniesComponent';

function App(){
    return(
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>} />
                        <Route path="/question" element={<QuestionComponent />} />
                        <Route path="/user" element={<UserComponent />} />
                        <Route path="/tag" element={<TagComponent />} />
                        <Route path="/companies" element={<CompaniesComponent />} />
                    </Routes>
                </BrowserRouter>
            </div>
         
        </>
    )
}

export default App;