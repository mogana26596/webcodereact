import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginComponent from './LoginComponent';
import SigninComponent from './SigninComponent';
import QuestionComponent from './QuestionComponent';
import TagComponent from './TagComponent';
import CompaniesComponent from './CompaniesComponent';

function App(){
    return(
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LoginComponent/>} />
                        <Route path="/signin" element={<SigninComponent/>} />
                        <Route path="/question" element={<QuestionComponent />} />
                        <Route path="/tag" element={<TagComponent />} />
                        <Route path="/companies" element={<CompaniesComponent />} />
                    </Routes>
                </BrowserRouter>
            </div>
         
        </>
    )
}

export default App;