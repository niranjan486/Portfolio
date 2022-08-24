import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


const Home = () => {

return (
    <Stack direction="row" spacing={30} sx={{ mt: 20, pl: 20 }}>
        

        <div>
        <h1>Hi, This is Niranjan Reddy</h1>
        <h3>Full Stack Developer</h3>
        <p>I will develop frontend and backend web applications</p>
        </div>
        <div>
        <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/d9xaQmHe_GKzqTPjCLtjO0Epkz2lnTbw0kI6mqONl9aY8F2GDqAz7h6kqpbH2ilJxMdvhYyBUUbIgFSsxrbwO0Ydy_nukbZ5-S6cV_caRgXE3Sg2jgCPHQRLzsY5eUjx15WNtsrfZzcKOQZZUU7MbHcVOB1utW6PIEfmtKHgzx0rrCNJqHMmH9sRBWYAPiIjwtzGiSgBQ1lvLNyYCY292i4Mg-EVEHZxF7-5s-oDWsAsNH2ghqltXCDuiLyLXd6wjfqqhEb7JF0CP1xLP82sYi1yyaDDsDJZqVBMBFbR0Q22qLe15dFI5z-hB6cZBJMpMnY8GTejH-tIlozvZBU3ezbczrWkeyRq9OsL8UfB7WIUO9JfKkZJE6gMB98tB2D84lnLnR4JzBANAA_f6Y7pmZYW1Nmz_1sPmhEAA07VuThTfgX2dHS0n1bU5cQfjRjzj1M0FR_WVLsdMAIEZiD-RM3njUOloz0f-B5HIKJxw2l7f4ZyDKefIRK44mtrRGrTi_7vj1goeTYBMr_J3nGdBxfrRoJpuy9d8ZdfQgEYg6FiL0cJs2sp3WKbyFfSU-i7nSy21sOZPASW7JecewqRuhu2f3mpZ0_H7jp1f8-AbNPu3yKf3CfVzpBlIVN5N-O8GXsBYqHRDoCOAHiLv18SINgevKIg4QDtRseBXK2A30FH3vlPgNYyUPPmFrw1GW3MiZkKaJ-EVCOBC25NDHoelDeUpR0svHwjMwRpvjrn3fQYHczRwCUrBQ8wCUkF=w670-h894-no?authuser=0" sx={{ width: 300, height: 300 }}/>   

    </div>
    </Stack>
    
);

}

export default Home;